import styled from 'styled-components'

type StatusType = '완료' | '처리중' | '배정' | '접수' | '반려'

const COLOR_MAP: Record<StatusType, { bg: string; color: string }> = {
    완료: {bg: '#d1fae5', color: '#065f46'},
    처리중: {bg: '#fef3c7', color: '#92400e'},
    배정: {bg: '#dbeafe', color: '#1e40af'},
    접수: {bg: '#f1f5f9', color: '#475569'},
    반려: {bg: '#fee2e2', color: '#991b1b'},
}

const Badge = styled.span<{ $bg: string; $color: string }>`
    padding: 4px 12px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    background: ${({$bg}) => $bg};
    color: ${({$color}) => $color};
    white-space: nowrap;
    flex-shrink: 0;
`

type StatusBadgeProps = {
    status: string
}

function StatusBadge({status}: StatusBadgeProps) {
    const colors = COLOR_MAP[status as StatusType] ?? {bg: '#f3f4f6', color: '#6b7280'}
    return <Badge $bg={colors.bg} $color={colors.color}>{status}</Badge>
}

export default StatusBadge
