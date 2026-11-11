import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import * as S from './TicketList.styles'
import StatusBadge from '../../../shared/ui/StatusBadge'
import {getTickets} from '../../../shared/api/ticketApi'
import type {TicketType, TicketStatusType} from '../../../shared/types/ticket'

const STATUS_LABEL: Record<TicketStatusType, string> = {
    received: '접수',
    in_progress: '처리중',
    resolved: '완료',
}

type FilterType = 'all' | TicketStatusType

const FILTER_LIST: {label: string; value: FilterType}[] = [
    {label: '전체', value: 'all'},
    {label: '접수', value: 'received'},
    {label: '처리중', value: 'in_progress'},
    {label: '완료', value: 'resolved'},
]

function TicketList() {
    const navigate = useNavigate()
    const [ticketList, setTicketList] = useState<TicketType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [filter, setFilter] = useState<FilterType>('all')

    useEffect(() => {
        getTickets()
            .then(setTicketList)
            .finally(() => setIsLoading(false))
    }, [])

    const filteredList = filter === 'all'
        ? ticketList
        : ticketList.filter((t) => t.status === filter)

    const handleTicketClick = (id: string) => navigate(`/tickets/${id}`)
    const handleNewTicketClick = () => navigate('/tickets/new')
    const handleFilterChange = (val: FilterType) => setFilter(val)

    return (
        <S.Page>
            <S.Inner>
                <S.PageHeader>
                    <S.PageTitle>내 문의</S.PageTitle>
                    <S.NewTicketBtn onClick={handleNewTicketClick}>+ 티켓 작성</S.NewTicketBtn>
                </S.PageHeader>

                <S.FilterRow>
                    {FILTER_LIST.map(({label, value}) => (
                        <S.FilterBtn
                            key={value}
                            $active={filter === value}
                            onClick={() => handleFilterChange(value)}
                        >
                            {label}
                        </S.FilterBtn>
                    ))}
                </S.FilterRow>

                <S.Card>
                    {isLoading ? (
                        <S.LoadingText>불러오는 중...</S.LoadingText>
                    ) : filteredList.length === 0 ? (
                        <S.EmptyText>해당하는 문의가 없습니다</S.EmptyText>
                    ) : (
                        filteredList.map((ticket) => (
                            <S.TicketRow key={ticket.id} onClick={() => handleTicketClick(ticket.id)}>
                                <S.TicketInfo>
                                    <S.TicketMetaRow>
                                        <S.TicketId>{ticket.id}</S.TicketId>
                                        <S.TicketDept>{ticket.result.department}</S.TicketDept>
                                        <S.TicketDate>{ticket.created_at.slice(0, 10)}</S.TicketDate>
                                    </S.TicketMetaRow>
                                    <S.TicketTitle>{ticket.title}</S.TicketTitle>
                                </S.TicketInfo>
                                <StatusBadge status={STATUS_LABEL[ticket.status]}/>
                            </S.TicketRow>
                        ))
                    )}
                </S.Card>
            </S.Inner>
        </S.Page>
    )
}

export default TicketList
