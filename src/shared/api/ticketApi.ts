import type {TicketType, CreateTicketRequestType, UpdateTicketStatusRequestType, SimilarTicketType} from '../types/ticket'
import MOCK_TICKET_LIST from '../../mocks/ticketData'

const USE_MOCK = import.meta.env.VITE_USE_MOCK === 'true'
const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms))

let mockStore: TicketType[] = [...MOCK_TICKET_LIST]

// GET /tickets
export async function getTickets(): Promise<TicketType[]> {
    if (USE_MOCK) {
        await delay()
        return [...mockStore]
    }
    const res = await fetch(`${BASE_URL}/tickets`)
    if (!res.ok) throw new Error('티켓 목록 조회 실패')
    return res.json()
}

// GET /tickets/:id
export async function getTicket(id: string): Promise<TicketType> {
    if (USE_MOCK) {
        await delay()
        const ticket = mockStore.find((t) => t.id === id)
        if (!ticket) throw new Error(`티켓 ${id}를 찾을 수 없습니다`)
        return {...ticket}
    }
    const res = await fetch(`${BASE_URL}/tickets/${id}`)
    if (!res.ok) throw new Error('티켓 조회 실패')
    return res.json()
}

// POST /tickets
export async function createTicket(body: CreateTicketRequestType): Promise<TicketType> {
    if (USE_MOCK) {
        await delay(800)
        const now = new Date().toISOString()
        const dateStr = now.slice(0, 10).replace(/-/g, '')
        const newTicket: TicketType = {
            id: `T-${dateStr}-${String(mockStore.length + 1).padStart(4, '0')}`,
            request_type: body.request_type,
            title: body.title,
            content: body.content,
            additional_info: body.additional_info,
            created_at: now,
            status: 'received',
            result: {
                category: '기타',
                urgency: 'medium',
                priority: 3,
                department: 'IT지원팀',
                confidence: 0.7,
                source: 'llm',
                draft_reply: '문의 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.',
                missing_info: [],
            },
        }
        mockStore = [newTicket, ...mockStore]
        return {...newTicket}
    }
    const res = await fetch(`${BASE_URL}/tickets`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error('티켓 생성 실패')
    return res.json()
}

// POST /tickets/similar
export async function searchSimilar(body: {title: string; content: string}): Promise<SimilarTicketType[]> {
    if (USE_MOCK) {
        await delay(500)
        return [
            {id: 'T-20261101-0002', title: '업무용 노트북 교체 신청', status: 'resolved'},
            {id: 'T-20261103-0005', title: '프린터 드라이버 설치 요청', status: 'in_progress'},
            {id: 'T-20261104-0001', title: 'VPN 접속이 안 됩니다', status: 'received'},
        ]
    }
    const res = await fetch(`${BASE_URL}/tickets/similar`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error('유사 티켓 검색 실패')
    return res.json()
}

// PATCH /tickets/:id
export async function updateTicketStatus(id: string, body: UpdateTicketStatusRequestType): Promise<TicketType> {
    if (USE_MOCK) {
        await delay()
        const idx = mockStore.findIndex((t) => t.id === id)
        if (idx === -1) throw new Error(`티켓 ${id}를 찾을 수 없습니다`)
        mockStore[idx] = {...mockStore[idx], status: body.status}
        return {...mockStore[idx]}
    }
    const res = await fetch(`${BASE_URL}/tickets/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error('티켓 상태 변경 실패')
    return res.json()
}
