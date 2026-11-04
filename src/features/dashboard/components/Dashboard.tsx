import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import * as S from './Dashboard.styles'
import StatusBadge from '../../../shared/ui/StatusBadge'
import {getTickets} from '../../../shared/api/ticketApi'
import type {TicketType} from '../../../shared/types/ticket'

const STATUS_LABEL: Record<string, string> = {
    received: '접수',
    in_progress: '처리중',
    resolved: '완료',
}

const DAY_NAME_LIST = ['일', '월', '화', '수', '목', '금', '토']

function Dashboard() {
    const navigate = useNavigate()
    const [ticketList, setTicketList] = useState<TicketType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const today = now.getDate()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfWeek = new Date(year, month, 1).getDay()

    useEffect(() => {
        getTickets()
            .then(setTicketList)
            .finally(() => setIsLoading(false))
    }, [])

    const myTicketList = ticketList.slice(0, 4)
    const assignTicketList = ticketList.filter((t) => t.status !== 'resolved').slice(0, 3)

    const statList = [
        {label: '접수', count: ticketList.filter((t) => t.status === 'received').length, bgColor: '#f1f5f9', textColor: '#475569'},
        {label: '처리중', count: ticketList.filter((t) => t.status === 'in_progress').length, bgColor: '#fef3c7', textColor: '#92400e'},
        {label: '완료', count: ticketList.filter((t) => t.status === 'resolved').length, bgColor: '#d1fae5', textColor: '#065f46'},
        {label: '전체', count: ticketList.length, bgColor: '#ede9fe', textColor: '#5b21b6'},
    ]

    const ticketDayList = ticketList.map((t) => new Date(t.created_at).getDate())

    const handleNewTicketClick = () => navigate('/tickets/new')
    const handleTicketClick = (id: string) => navigate(`/tickets/${id}`)
    const handleAllTicketClick = () => navigate('/tickets')

    const calendarLabel = `${year}년 ${month + 1}월`

    return (
        <S.Page>
            <S.Inner>
                <S.PageHeader>
                    <div>
                        <S.PageTitle>대시보드</S.PageTitle>
                        <S.PageSubtitle>안녕하세요, 홍길동님</S.PageSubtitle>
                    </div>
                    <S.NewTicketBtn onClick={handleNewTicketClick}>+ 티켓 작성</S.NewTicketBtn>
                </S.PageHeader>

                <S.StatsGrid>
                    {statList.map((stat) => (
                        <S.StatCard key={stat.label}>
                            <S.StatLabel>{stat.label}</S.StatLabel>
                            <S.StatCount>{isLoading ? '-' : stat.count}</S.StatCount>
                            <S.StatBadge $bg={stat.bgColor} $color={stat.textColor}>{stat.label}</S.StatBadge>
                        </S.StatCard>
                    ))}
                </S.StatsGrid>

                <S.ContentGrid>
                    <S.Card>
                        <S.CardTitle>{calendarLabel}</S.CardTitle>
                        <S.CalendarDayList style={{marginTop: 16, marginBottom: 8}}>
                            {DAY_NAME_LIST.map((d) => (
                                <S.CalendarDayName key={d}>{d}</S.CalendarDayName>
                            ))}
                        </S.CalendarDayList>
                        <S.CalendarDayList>
                            {Array.from({length: firstDayOfWeek}).map((_, i) => (
                                <div key={`empty-${i}`}/>
                            ))}
                            {Array.from({length: daysInMonth}).map((_, i) => {
                                const day = i + 1
                                const isToday = day === today
                                const hasTicket = ticketDayList.includes(day)
                                return (
                                    <S.CalendarDay key={day} $isToday={isToday}>
                                        {day}
                                        {hasTicket && !isToday && <S.CalendarDot/>}
                                    </S.CalendarDay>
                                )
                            })}
                        </S.CalendarDayList>
                    </S.Card>

                    <S.Card>
                        <S.CardHeader>
                            <S.CardTitle>내가 요청한 티켓</S.CardTitle>
                            <S.CardLinkBtn onClick={handleAllTicketClick}>전체 보기</S.CardLinkBtn>
                        </S.CardHeader>
                        <S.TicketList>
                            {myTicketList.map((ticket) => (
                                <S.TicketRow key={ticket.id} onClick={() => handleTicketClick(ticket.id)}>
                                    <S.TicketMeta>
                                        <S.TicketMetaRow>
                                            <S.TicketId>{ticket.id}</S.TicketId>
                                            <S.TicketDate>{ticket.created_at.slice(0, 10)}</S.TicketDate>
                                        </S.TicketMetaRow>
                                        <S.TicketTitle>{ticket.title}</S.TicketTitle>
                                    </S.TicketMeta>
                                    <StatusBadge status={STATUS_LABEL[ticket.status] ?? ticket.status}/>
                                </S.TicketRow>
                            ))}
                        </S.TicketList>
                    </S.Card>
                </S.ContentGrid>

                <S.AssignSection>
                    <S.AssignCard>
                        <S.CardHeader>
                            <S.CardTitle>처리해야 하는 티켓</S.CardTitle>
                        </S.CardHeader>
                        <S.AssignTicketList>
                            {assignTicketList.map((ticket) => (
                                <S.AssignTicketRow key={ticket.id} onClick={() => handleTicketClick(ticket.id)}>
                                    <S.AssignTicketId>{ticket.id}</S.AssignTicketId>
                                    <S.DeptBadge>{ticket.result.department}</S.DeptBadge>
                                    <S.AssignTicketTitle>{ticket.title}</S.AssignTicketTitle>
                                    <S.AssignTicketDate>{ticket.created_at.slice(0, 10)}</S.AssignTicketDate>
                                    <StatusBadge status={STATUS_LABEL[ticket.status] ?? ticket.status}/>
                                </S.AssignTicketRow>
                            ))}
                        </S.AssignTicketList>
                    </S.AssignCard>
                </S.AssignSection>
            </S.Inner>
        </S.Page>
    )
}

export default Dashboard
