import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import * as S from './TicketInput.styles'
import {createTicket} from '../../../shared/api/ticketApi'
import type {TicketType} from '../../../shared/types/ticket'

type ViewType = 'form' | 'complete'

function TicketInput() {
    const navigate = useNavigate()

    const [view, setView] = useState<ViewType>('form')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [completedTicket, setCompletedTicket] = useState<TicketType | null>(null)

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)

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
                        <S.ContentTextarea
                            value={content}
                            onChange={handleContentChange}
                            rows={8}
                            placeholder="문의 내용을 상세히 입력하세요."
                        />
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
