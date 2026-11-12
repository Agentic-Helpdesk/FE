import {useState, useRef, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import * as S from './TicketInput.styles'
import {createTicket} from '../../../shared/api/ticketApi'
import type {TicketType} from '../../../shared/types/ticket'

type ViewType = 'form' | 'complete'
type ContentTabType = 'write' | 'preview'

type ToolbarActionType =
    | {type: 'wrap'; before: string; after: string; placeholder: string}
    | {type: 'line'; prefix: string}

const TOOLBAR_LIST: {label: string; title: string; action: ToolbarActionType}[] = [
    {label: 'H',    title: '제목',          action: {type: 'line', prefix: '## '}},
    {label: 'B',    title: '굵게',          action: {type: 'wrap', before: '**', after: '**', placeholder: '굵은 텍스트'}},
    {label: 'I',    title: '기울임',        action: {type: 'wrap', before: '*',  after: '*',  placeholder: '기울임 텍스트'}},
    {label: '•',    title: '목록',          action: {type: 'line', prefix: '- '}},
    {label: '1.',   title: '순서 있는 목록', action: {type: 'line', prefix: '1. '}},
    {label: '</>',  title: '코드',          action: {type: 'wrap', before: '`',  after: '`',  placeholder: '코드'}},
    {label: '❝',    title: '인용',          action: {type: 'line', prefix: '> '}},
]

function TicketInput() {
    const navigate = useNavigate()
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const [view, setView] = useState<ViewType>('form')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [contentTab, setContentTab] = useState<ContentTabType>('write')
    const [isLoading, setIsLoading] = useState(false)
    const [completedTicket, setCompletedTicket] = useState<TicketType | null>(null)

    useEffect(() => {
        if (contentTab === 'write') {
            requestAnimationFrame(() => {
                if (textareaRef.current) {
                    const ta = textareaRef.current
                    ta.style.height = 'auto'
                    ta.style.height = ta.scrollHeight + 'px'
                }
            })
        }
    }, [contentTab])

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value)
        e.target.style.height = 'auto'
        e.target.style.height = e.target.scrollHeight + 'px'
    }

    const handleToolbarClick = (action: ToolbarActionType) => {
        const ta = textareaRef.current
        if (!ta) return
        const start = ta.selectionStart
        const end = ta.selectionEnd
        const selected = content.slice(start, end)

        let newContent: string
        let newCursorStart: number
        let newCursorEnd: number

        if (action.type === 'wrap') {
            const text = selected || action.placeholder
            newContent = content.slice(0, start) + action.before + text + action.after + content.slice(end)
            newCursorStart = start + action.before.length
            newCursorEnd = newCursorStart + text.length
        } else {
            const lineStart = content.lastIndexOf('\n', start - 1) + 1
            newContent = content.slice(0, lineStart) + action.prefix + content.slice(lineStart)
            newCursorStart = start + action.prefix.length
            newCursorEnd = end + action.prefix.length
        }

        setContent(newContent)
        requestAnimationFrame(() => {
            ta.focus()
            ta.setSelectionRange(newCursorStart, newCursorEnd)
        })
    }

    const handleRegisterClick = async () => {
        if (!title.trim() || !content.trim()) return
        setIsLoading(true)
        try {
            const ticket = await createTicket({
                request_type: 'inquiry',
                title,
                content,
                additional_info: {},
            })
            setCompletedTicket(ticket)
            setView('complete')
        } finally {
            setIsLoading(false)
        }
    }

    const handleGoListClick = () => navigate('/tickets')
    const handleBackClick = () => navigate('/dashboard')

    if (view === 'complete' && completedTicket) {
        const createdAt = new Date(completedTicket.created_at).toLocaleString('ko-KR', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit',
        })
        return (
            <S.CompletePage>
                <S.CompleteCard>
                    <S.CompleteIcon>✓</S.CompleteIcon>
                    <S.CompleteTitle>티켓이 접수되었습니다</S.CompleteTitle>
                    <S.CompleteSubtitle>
                        {completedTicket.result.department}으로 접수되었습니다.
                    </S.CompleteSubtitle>
                    <S.CompleteInfoList>
                        <S.CompleteInfoRow>
                            <S.CompleteInfoLabel>티켓 번호</S.CompleteInfoLabel>
                            <S.CompleteInfoValue>{completedTicket.id}</S.CompleteInfoValue>
                        </S.CompleteInfoRow>
                        <S.CompleteInfoRow>
                            <S.CompleteInfoLabel>제목</S.CompleteInfoLabel>
                            <S.CompleteInfoValue>{completedTicket.title}</S.CompleteInfoValue>
                        </S.CompleteInfoRow>
                        <S.CompleteInfoRow>
                            <S.CompleteInfoLabel>접수 시각</S.CompleteInfoLabel>
                            <S.CompleteInfoValue>{createdAt}</S.CompleteInfoValue>
                        </S.CompleteInfoRow>
                    </S.CompleteInfoList>
                    <S.GoListBtn onClick={handleGoListClick}>내 문의 목록 보기</S.GoListBtn>
                </S.CompleteCard>
            </S.CompletePage>
        )
    }

    return (
        <S.Page>
            <S.Inner>
                <S.PageHeader>
                    <S.BackBtn onClick={handleBackClick}>←</S.BackBtn>
                    <S.PageTitle>티켓 작성</S.PageTitle>
                </S.PageHeader>

                <S.FormCol>
                    <S.Card>
                        <S.FieldLabel>문의 제목</S.FieldLabel>
                        <S.TitleInput
                            value={title}
                            onChange={handleTitleChange}
                            placeholder="문의 제목을 입력하세요"
                        />
                    </S.Card>

                    <S.Card>
                        <S.FieldLabel>상세 내용</S.FieldLabel>
                        <S.TabRow>
                            <S.TabBtn $active={contentTab === 'write'} onClick={() => setContentTab('write')}>작성</S.TabBtn>
                            <S.TabBtn $active={contentTab === 'preview'} onClick={() => setContentTab('preview')}>미리보기</S.TabBtn>
                        </S.TabRow>
                        {contentTab === 'write' && (
                            <S.ToolbarRow>
                                {TOOLBAR_LIST.map(({label, title, action}) => (
                                    <S.ToolbarBtn
                                        key={label}
                                        title={title}
                                        type="button"
                                        onClick={() => handleToolbarClick(action)}
                                    >
                                        {label}
                                    </S.ToolbarBtn>
                                ))}
                            </S.ToolbarRow>
                        )}
                        {contentTab === 'write' ? (
                            <S.ContentTextarea
                                ref={textareaRef}
                                value={content}
                                onChange={handleContentChange}
                                placeholder="문의 내용을 상세히 입력하세요."
                            />
                        ) : (
                            <S.MarkdownPreview>
                                {content.trim() ? (
                                    <ReactMarkdown>{content.replace(/\n/g, '  \n')}</ReactMarkdown>
                                ) : (
                                    <span style={{color: '#9ca3af'}}>미리볼 내용이 없습니다.</span>
                                )}
                            </S.MarkdownPreview>
                        )}
                    </S.Card>

                    <S.BtnRow>
                        <S.SubmitBtn
                            onClick={handleRegisterClick}
                            disabled={isLoading || !title.trim() || !content.trim()}
                        >
                            {isLoading ? '등록 중...' : '등록'}
                        </S.SubmitBtn>
                    </S.BtnRow>
                </S.FormCol>
            </S.Inner>
        </S.Page>
    )
}

export default TicketInput
