import styled from 'styled-components'

const PRIMARY = '#5e81f4'

export const Page = styled.div`
    min-height: 100vh;
    background: #f9fafb;
    padding-top: 56px;
`

export const Inner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 32px 24px;
`

export const PageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
`

export const PageTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
`

export const PageSubtitle = styled.p`
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 4px;
`

export const NewTicketBtn = styled.button`
    padding: 10px 20px;
    background: ${PRIMARY};
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(94, 129, 244, 0.3);
    transition: background 0.15s;

    &:hover {
        background: #4a6de0;
    }
`

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 32px;
`

export const StatCard = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
`

export const StatLabel = styled.p`
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 4px;
`

export const StatCount = styled.p`
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
`

export const StatBadge = styled.span<{ $bg: string; $color: string }>`
    display: inline-block;
    margin-top: 8px;
    padding: 2px 8px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    background: ${({$bg}) => $bg};
    color: ${({$color}) => $color};
`

export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 24px;
`

export const Card = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 20px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`

export const CardTitle = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
`

export const CardLinkBtn = styled.button`
    font-size: 0.75rem;
    color: ${PRIMARY};
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const CalendarDayList = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    text-align: center;
`

export const CalendarDayName = styled.div`
    font-size: 0.75rem;
    font-weight: 600;
    color: #9ca3af;
    padding: 4px 0;
`

export const CalendarDay = styled.div<{ $isToday?: boolean }>`
    position: relative;
    padding: 6px 0;
    border-radius: 8px;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background 0.1s;
    background: ${({$isToday}) => $isToday ? PRIMARY : 'transparent'};
    color: ${({$isToday}) => $isToday ? '#fff' : '#374151'};
    font-weight: ${({$isToday}) => $isToday ? '700' : '400'};

    &:hover {
        background: ${({$isToday}) => $isToday ? PRIMARY : '#f9fafb'};
    }
`

export const CalendarDot = styled.span`
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: ${PRIMARY};
`

export const TicketList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const TicketRow = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: 12px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.1s;

    &:hover {
        background: #f9fafb;
    }
`

export const TicketMeta = styled.div`
    flex: 1;
    min-width: 0;
`

export const TicketMetaRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 2px;
`

export const TicketId = styled.span`
    font-size: 0.75rem;
    font-family: monospace;
    color: #9ca3af;
`

export const TicketDate = styled.span`
    font-size: 0.75rem;
    color: #9ca3af;
`

export const TicketTitle = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: #1f2937;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const AssignSection = styled.div`
    margin-top: 24px;
`

export const AssignCard = styled(Card)`
`

export const AssignTicketList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const AssignTicketRow = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px;
    border-radius: 12px;
    background: none;
    border: 1px solid #f3f4f6;
    cursor: pointer;
    text-align: left;
    transition: background 0.1s;

    &:hover {
        background: #f9fafb;
    }
`

export const AssignTicketId = styled.span`
    font-size: 0.75rem;
    font-family: monospace;
    color: #9ca3af;
    white-space: nowrap;
    flex-shrink: 0;
`

export const DeptBadge = styled.span`
    display: inline-block;
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 500;
    background: #eff6ff;
    color: #2563eb;
    width: 72px;
    text-align: center;
    flex-shrink: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const AssignTicketTitle = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: #1f2937;
    flex: 1;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: underline;
    text-underline-offset: 2px;
`

export const AssignTicketDate = styled.span`
    font-size: 0.75rem;
    color: #9ca3af;
    flex-shrink: 0;
`
