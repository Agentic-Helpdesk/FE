import type {RequestType} from '../../../shared/types/ticket'

type AdditionalFieldType = {
    key: string
    label: string
}

export const ADDITIONAL_FIELDS: Record<RequestType, AdditionalFieldType[]> = {
    incident: [
        {key: 'occurred_at', label: '발생 시점'},
        {key: 'error_message', label: '오류 메시지'},
        {key: 'impact_scope', label: '영향 범위'},
    ],
    request: [
        {key: 'target', label: '요청 대상'},
        {key: 'due_date', label: '희망 완료일'},
    ],
    inquiry: [],
}
