import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import * as S from './MyPage.styles'
import StatusBadge from '../../../shared/ui/StatusBadge'
import {getTickets} from '../../../shared/api/ticketApi'
import type {TicketType} from '../../../shared/types/ticket'

const STATUS_LABEL: Record<string, string> = {
    received: '접수',
    in_progress: '처리중',
    resolved: '완료',
}

type UserInfoType = {
    name: string
    department: string
    position: string
    email: string
}

const INITIAL_USER_INFO: UserInfoType = {
    name: '홍길동',
    department: '인사팀',
    position: '대리',
    email: 'gildong@company.com',
}

const PROFILE_FIELD_LIST: {label: string; key: keyof UserInfoType}[] = [
    {label: '이름', key: 'name'},
    {label: '소속 부서', key: 'department'},
    {label: '직함', key: 'position'},
    {label: '이메일', key: 'email'},
]

function MyPage() {
    const navigate = useNavigate()
    const [ticketList, setTicketList] = useState<TicketType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isNotificationOn, setIsNotificationOn] = useState(true)
    const [isEditMode, setIsEditMode] = useState(false)
    const [userInfo, setUserInfo] = useState<UserInfoType>(INITIAL_USER_INFO)
    const [editForm, setEditForm] = useState<UserInfoType>(INITIAL_USER_INFO)

    useEffect(() => {
        getTickets()
            .then(setTicketList)
            .finally(() => setIsLoading(false))
    }, [])

    const handleTicketClick = (id: string) => navigate(`/tickets/${id}`)
    const handleEditClick = () => {
        setEditForm(userInfo)
        setIsEditMode(true)
    }
    const handleSaveClick = () => {
        setUserInfo(editForm)
        setIsEditMode(false)
    }
    const handleFormChange = (field: keyof UserInfoType) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditForm((prev) => ({...prev, [field]: e.target.value}))
    }
    const handleNotificationToggle = () => setIsNotificationOn((prev) => !prev)

    const avatarChar = userInfo.name.charAt(0)

    return (
        <S.Page>
            <S.Inner>
                <S.PageTitle>마이페이지</S.PageTitle>

                <S.TopGrid>
                    <S.ProfileCard>
                        <S.AvatarCircle>{avatarChar}</S.AvatarCircle>
                        <S.ProfileName>{userInfo.name}</S.ProfileName>
                        <S.ProfileSub>
                            {userInfo.department}
                            <br />
                            {userInfo.position}
                            <br />
                            {userInfo.email}
                        </S.ProfileSub>
                        {isEditMode ? (
                            <S.EditBtn onClick={handleSaveClick}>저장하기</S.EditBtn>
                        ) : (
                            <S.EditBtn onClick={handleEditClick}>수정하기</S.EditBtn>
                        )}
                    </S.ProfileCard>

                    <S.InfoCard>
                        <S.InfoCardTitle>프로필 정보</S.InfoCardTitle>
                        {PROFILE_FIELD_LIST.map(({label, key}) => (
                            <S.InfoRow key={key} $editMode={isEditMode}>
                                <S.InfoLabel>{label}</S.InfoLabel>
                                {isEditMode ? (
                                    <S.InfoInput value={editForm[key]} onChange={handleFormChange(key)} />
                                ) : (
                                    <S.InfoValue>{userInfo[key]}</S.InfoValue>
                                )}
                            </S.InfoRow>
                        ))}
                        <S.InfoRow>
                            <S.InfoLabel>알림 수신</S.InfoLabel>
                            <S.ToggleWrapper>
                                <S.Toggle>
                                    <input
                                        type="checkbox"
                                        checked={isNotificationOn}
                                        onChange={handleNotificationToggle}
                                    />
                                    <span />
                                </S.Toggle>
                                <S.ToggleLabel>{isNotificationOn ? '동의' : '거부'}</S.ToggleLabel>
                            </S.ToggleWrapper>
                        </S.InfoRow>
                    </S.InfoCard>
                </S.TopGrid>

                <S.HistoryCard>
                    <S.HistoryCardTitle>내 문의 내역</S.HistoryCardTitle>
                    {isLoading ? (
                        <S.EmptyText>불러오는 중...</S.EmptyText>
                    ) : ticketList.length === 0 ? (
                        <S.EmptyText>문의 내역이 없습니다.</S.EmptyText>
                    ) : (
                        <S.TicketList>
                            {ticketList.map((ticket) => (
                                <S.TicketRow key={ticket.id} onClick={() => handleTicketClick(ticket.id)}>
                                    <S.TicketId>{ticket.id}</S.TicketId>
                                    <S.TicketTitle>{ticket.title}</S.TicketTitle>
                                    <S.TicketDate>{ticket.created_at.slice(0, 10)}</S.TicketDate>
                                    <S.TicketBadgeCell>
                                        <StatusBadge status={STATUS_LABEL[ticket.status] ?? ticket.status} />
                                    </S.TicketBadgeCell>
                                </S.TicketRow>
                            ))}
                        </S.TicketList>
                    )}
                </S.HistoryCard>
            </S.Inner>
        </S.Page>
    )
}

export default MyPage
