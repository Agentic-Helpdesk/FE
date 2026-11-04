export type RequestType = 'incident' | 'request' | 'inquiry'
export type TicketStatusType = 'received' | 'in_progress' | 'resolved'
export type TicketUrgencyType = 'low' | 'medium' | 'high' | 'critical'
export type TicketSourceType = 'rule' | 'ml' | 'llm'

export type ClassifyResultType = {
    category: string
    urgency: TicketUrgencyType
    priority: number
    department: string
    confidence: number
    source: TicketSourceType
    draft_reply: string
    missing_info: string[]
}

export type CreateTicketRequestType = {
    request_type: RequestType
    title: string
    content: string
    additional_info: Record<string, string>
}

export type TicketType = CreateTicketRequestType & {
    id: string
    created_at: string
    status: TicketStatusType
    result: ClassifyResultType
}

export type SimilarTicketType = {
    id: string
    title: string
    status: TicketStatusType
}

export type UpdateTicketStatusRequestType = {
    status: TicketStatusType
}
