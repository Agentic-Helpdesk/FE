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

export const PageTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 24px;
`

export const TopGrid = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 24px;
    margin-bottom: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

export const Card = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 32px 24px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
`

export const ProfileCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`

export const AvatarCircle = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: ${PRIMARY};
    color: #fff;
    font-size: 1.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
`

export const ProfileName = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
    color: #111827;
`

export const ProfileSub = styled.p`
    font-size: 0.8125rem;
    color: #6b7280;
    line-height: 1.6;
    text-align: center;
`

export const EditBtn = styled.button`
    margin-top: 12px;
    width: 100%;
    padding: 10px 0;
    border: 1.5px solid #d1d5db;
    border-radius: 10px;
    background: #fff;
    color: #374151;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;

    &:hover {
        background: #f3f4f6;
    }
`

export const InfoCard = styled(Card)`
    display: flex;
    flex-direction: column;
    gap: 0;
`

export const InfoCardTitle = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 20px;
`

export const InfoRow = styled.div<{$editMode?: boolean}>`
    display: flex;
    align-items: center;
    padding: ${({$editMode}) => $editMode ? '6px 0' : '14px 0'};
    border-bottom: 1px solid #f3f4f6;

    &:last-child {
        border-bottom: none;
    }
`

export const InfoLabel = styled.span`
    width: 100px;
    font-size: 0.875rem;
    color: #6b7280;
    flex-shrink: 0;
`

export const InfoValue = styled.span`
    font-size: 0.875rem;
    color: #111827;
    font-weight: 500;
`

export const InfoInput = styled.input`
    flex: 1;
    min-width: 0;
    width: 100%;
    font-size: 0.875rem;
    color: #111827;
    font-weight: 500;
    border: 1.5px solid #d1d5db;
    border-radius: 8px;
    padding: 9px 10px;
    outline: none;
    box-sizing: border-box;

    &:focus {
        border-color: #5e81f4;
    }
`

export const ToggleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Toggle = styled.label`
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
    cursor: pointer;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    span {
        position: absolute;
        inset: 0;
        background: #d1d5db;
        border-radius: 24px;
        transition: background 0.2s;

        &::before {
            content: '';
            position: absolute;
            width: 18px;
            height: 18px;
            left: 3px;
            top: 3px;
            background: #fff;
            border-radius: 50%;
            transition: transform 0.2s;
        }
    }

    input:checked + span {
        background: ${PRIMARY};
    }

    input:checked + span::before {
        transform: translateX(20px);
    }
`

export const ToggleLabel = styled.span`
    font-size: 0.875rem;
    color: #374151;
`

export const HistoryCard = styled(Card)`
`

export const HistoryCardTitle = styled.h2`
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 16px;
`

export const TicketList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0;
`

export const TicketRow = styled.li`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 0;
    border-bottom: 1px solid #f3f4f6;
    cursor: pointer;
    transition: background 0.1s;

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: #f9fafb;
    }
`

export const TicketId = styled.span`
    font-size: 0.75rem;
    color: #9ca3af;
    width: 120px;
    flex-shrink: 0;
    white-space: nowrap;
`

export const TicketTitle = styled.span`
    flex: 1;
    font-size: 0.875rem;
    color: #111827;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const TicketDate = styled.span`
    font-size: 0.75rem;
    color: #9ca3af;
    flex-shrink: 0;
    width: 90px;
    text-align: right;
`

export const TicketBadgeCell = styled.div`
    width: 64px;
    display: flex;
    justify-content: flex-end;
    flex-shrink: 0;
`

export const EmptyText = styled.p`
    text-align: center;
    color: #9ca3af;
    font-size: 0.875rem;
    padding: 32px 0;
`
