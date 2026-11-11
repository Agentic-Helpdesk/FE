import styled from 'styled-components'

const PRIMARY = '#5e81f4'

export const Page = styled.div`
    min-height: 100vh;
    background: #f9fafb;
    padding-top: 56px;
`

export const Inner = styled.div`
    max-width: 900px;
    margin: 0 auto;
    padding: 32px 24px;
`

export const PageHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`

export const PageTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
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
    box-shadow: 0 4px 12px rgba(94,129,244,0.3);
    transition: background 0.15s;

    &:hover { background: #4a6de0; }
`

export const FilterRow = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
`

export const FilterBtn = styled.button<{$active: boolean}>`
    padding: 7px 16px;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: ${({$active}) => $active ? '600' : '400'};
    border: 1.5px solid ${({$active}) => $active ? PRIMARY : '#e5e7eb'};
    background: ${({$active}) => $active ? '#eef2ff' : '#fff'};
    color: ${({$active}) => $active ? PRIMARY : '#6b7280'};
    cursor: pointer;
    transition: all 0.1s;

    &:hover {
        border-color: ${PRIMARY};
        color: ${PRIMARY};
    }
`

export const Card = styled.div`
    background: #fff;
    border-radius: 16px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    overflow: hidden;
`

export const TicketRow = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 20px;
    border: none;
    border-bottom: 1px solid #f9fafb;
    background: none;
    cursor: pointer;
    text-align: left;
    transition: background 0.1s;

    &:last-child { border-bottom: none; }
    &:hover { background: #f9fafb; }
`

export const TicketInfo = styled.div`
    flex: 1;
    min-width: 0;
`

export const TicketMetaRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 4px;
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

export const TicketDept = styled.span`
    font-size: 0.75rem;
    color: #6366f1;
    background: #eef2ff;
    padding: 1px 8px;
    border-radius: 999px;
`

export const TicketTitle = styled.p`
    font-size: 0.9375rem;
    font-weight: 500;
    color: #111827;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const EmptyText = styled.p`
    text-align: center;
    color: #9ca3af;
    font-size: 0.875rem;
    padding: 60px 0;
`

export const LoadingText = styled.p`
    text-align: center;
    color: #9ca3af;
    font-size: 0.875rem;
    padding: 60px 0;
`
