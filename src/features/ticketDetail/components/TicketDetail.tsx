import {useState, useEffect} from 'react'
import ReactMarkdown from 'react-markdown'
import {useNavigate, useParams, useLocation} from 'react-router-dom'
import * as S from './TicketDetail.styles'
import StatusBadge from '../../../shared/ui/StatusBadge'
import {getTicket} from '../../../shared/api/ticketApi'
import type {TicketType} from '../../../shared/types/ticket'

const STATUS_LABEL: Record<string, string> = {
    received: '접수',
    in_progress: '처리중',
    resolved: '완료',
}

type ApprovalType = 'approve' | 'reject'

function TicketDetail() {
    const {id} = useParams<{id: string}>()
    const navigate = useNavigate()
    const location = useLocation()
    const isAssigned = (location.state as {assigned?: boolean} | null)?.assigned === true

    const [ticket, setTicket] = useState<TicketType | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [approval, setApproval] = useState<ApprovalType>('approve')
    const [replyTitle, setReplyTitle] = useState('')
    const [replyContent, setReplyContent] = useState('')

    useEffect(() => {
        if (!id) return
        setIsLoading(true)
        getTicket(id)
            .then((data) => {
                setTicket(data)
                setIsLoading(false)
            })
            .catch((e: Error) => {
                setError(e.message)
                setIsLoading(false)
            })
    }, [id])

    const handleAutoFillClick = () => {
        if (!ticket) return
        setReplyTitle(`[답변] ${ticket.title}`)
        setReplyContent(ticket.result.draft_reply)
    }

    const handleApprovalChange = (val: ApprovalType) => setApproval(val)
    const handleReplyTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => setReplyTitle(e.target.value)
    const handleReplyContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setReplyContent(e.target.value)

    const handleRejectClick = () => {
        // TODO: 반려 처리
        navigate(-1)
    }

    const handleSaveDraftClick = () => {
        // TODO: 임시저장
    }

    const handleSubmitClick = () => {
        // TODO: 등록 처리
        navigate('/dashboard')
    }

    const handleBackClick = () => navigate(-1)

    if (isLoading) return <S.Page><S.Inner><S.LoadingText>불러오는 중...</S.LoadingText></S.Inner></S.Page>
    if (error || !ticket) return <S.Page><S.Inner><S.ErrorText>{error ?? '티켓을 찾을 수 없습니다'}</S.ErrorText></S.Inner></S.Page>

    const statusLabel = STATUS_LABEL[ticket.status] ?? ticket.status
    const createdDate = ticket.created_at.slice(0, 10)
    const isResolved = ticket.status === 'resolved'
    const showReplyForm = isAssigned && !isResolved

    return (
        <S.Page>
            <S.Inner>
                <S.PageHeader>
                    <S.BackBtn onClick={handleBackClick}>←</S.BackBtn>
                    <S.PageTitle>티켓 상세</S.PageTitle>
                </S.PageHeader>

                <S.TicketCard>
                    <S.TicketCardTop>
                        <S.TicketMetaRow>
                            <S.TicketId>{ticket.id}</S.TicketId>
                            <StatusBadge status={statusLabel} />
                        </S.TicketMetaRow>
                        {showReplyForm && (
                            <S.AutoFillBtn onClick={handleAutoFillClick}>기본 양식 자동 작성</S.AutoFillBtn>
                        )}
                    </S.TicketCardTop>

                    <S.TicketTitle>{ticket.title}</S.TicketTitle>
                    <S.TicketContent>
                        <ReactMarkdown>{ticket.content.replace(/\n/g, '  \n')}</ReactMarkdown>
                    </S.TicketContent>

                    <S.TicketFooter>
                        <span>담당 부서: {ticket.result.department}</span>
                        <span>접수일: {createdDate}</span>
                    </S.TicketFooter>
                </S.TicketCard>

                {isResolved ? (
                    <S.ReplyViewCard>
                        <S.ReplyViewLabel>답변</S.ReplyViewLabel>
                        <S.ReplyViewTitle>{ticket.reply_title ?? `[답변] ${ticket.title}`}</S.ReplyViewTitle>
                        <S.ReplyViewContent>{ticket.reply_content ?? ticket.result.draft_reply}</S.ReplyViewContent>
                    </S.ReplyViewCard>
                ) : showReplyForm ? (
                    <>
                        <S.TwoColRow>
                            <S.Card>
                                <S.CardLabel>승인 여부</S.CardLabel>
                                <S.RadioGroup>
                                    <S.RadioLabel>
                                        <S.RadioInput
                                            type="radio"
                                            name="approval"
                                            checked={approval === 'approve'}
                                            onChange={() => handleApprovalChange('approve')}
                                        />
                                        결재
                                    </S.RadioLabel>
                                    <S.RadioLabel>
                                        <S.RadioInput
                                            type="radio"
                                            name="approval"
                                            checked={approval === 'reject'}
                                            onChange={() => handleApprovalChange('reject')}
                                        />
                                        반려
                                    </S.RadioLabel>
                                </S.RadioGroup>
                            </S.Card>

                            <S.Card>
                                <S.CardLabel>답변 제목</S.CardLabel>
                                <S.ReplyTitleInput
                                    value={replyTitle}
                                    onChange={handleReplyTitleChange}
                                    placeholder="답변 제목을 입력하세요"
                                />
                            </S.Card>
                        </S.TwoColRow>

                        <S.ReplyCard>
                            <S.CardLabel>상세 답변</S.CardLabel>
                            <S.ReplyTextarea
                                rows={8}
                                value={replyContent}
                                onChange={handleReplyContentChange}
                                placeholder="답변 내용을 입력하세요"
                            />
                        </S.ReplyCard>

                        <S.BtnRow>
                            <S.RejectBtn onClick={handleRejectClick}>반려하기</S.RejectBtn>
                            <S.SaveDraftBtn onClick={handleSaveDraftClick}>임시저장</S.SaveDraftBtn>
                            <S.SubmitBtn
                                onClick={handleSubmitClick}
                                disabled={!replyTitle.trim() || !replyContent.trim()}
                            >
                                등록
                            </S.SubmitBtn>
                        </S.BtnRow>
                    </>
                ) : null}
            </S.Inner>
        </S.Page>
    )
}

export default TicketDetail
