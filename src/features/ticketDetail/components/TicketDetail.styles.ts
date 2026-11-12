import styled from 'styled-components'

const PRIMARY = '#5e81f4'
const PRIMARY_HOVER = '#4a6de0'

export const Page = styled.div`
    min-height: 100vh;
    background: #f9fafb;
    padding-top: 56px;
`

export const Inner = styled.div`
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    padding: 32px 24px;
    box-sizing: border-box;
`

export const PageHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
`

export const BackBtn = styled.button`
    color: #9ca3af;
    background: none;
    border: none;
    font-size: 1.125rem;
    cursor: pointer;
    line-height: 1;
    padding: 0;

    &:hover {
        color: #4b5563;
    }
`

export const PageTitle = styled.h1`
    font-size: 1.375rem;
    font-weight: 700;
    color: #111827;
`

export const TicketCard = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 28px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    margin-bottom: 16px;
`

export const TicketCardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`

export const TicketMetaRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const TicketId = styled.span`
    font-size: 0.8125rem;
    font-family: monospace;
    color: #9ca3af;
`

export const AutoFillBtn = styled.button`
    padding: 7px 16px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    background: #fff;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #374151;
    cursor: pointer;
    transition: background 0.1s, border-color 0.1s;

    &:hover {
        background: #f9fafb;
        border-color: ${PRIMARY};
        color: ${PRIMARY};
    }
`

export const TicketTitle = styled.h2`
    font-size: 1.375rem;
    font-weight: 700;
    color: #111827;
    padding-bottom: 12px;
    margin-bottom: 12px;
    border-bottom: 1px solid #f3f4f6;
`

export const TicketContent = styled.div`
    font-size: 0.875rem;
    color: #374151;
    line-height: 1.7;
    padding-bottom: 12px;
    border-bottom: 1px solid #f3f4f6;

    h1, h2, h3, h4, h5, h6 { font-weight: 700; margin: 0.75em 0 0.25em; color: #111827; }
    h1 { font-size: 1rem; }
    h2 { font-size: 0.9375rem; }
    h3 { font-size: 0.875rem; }
    p { margin: 0.5em 0; }
    ul, ol { padding-left: 1.5em; margin: 0.5em 0; }
    li { margin: 0.25em 0; }
    code { background: #f3f4f6; padding: 1px 6px; border-radius: 4px; font-size: 0.8125rem; font-family: monospace; }
    pre { background: #f3f4f6; padding: 12px; border-radius: 8px; overflow-x: auto; }
    pre code { background: none; padding: 0; }
    blockquote { border-left: 3px solid #d1d5db; margin: 0.5em 0; padding-left: 12px; color: #6b7280; }
    strong { font-weight: 700; color: #111827; }
    a { color: #5e81f4; text-decoration: underline; }
    hr { border: none; border-top: 1px solid #e5e7eb; margin: 1em 0; }
`

export const TicketFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 0.8125rem;
    color: #9ca3af;
    margin-top: 12px;
`

export const TwoColRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 16px;
    margin-bottom: 16px;
`

export const Card = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
`

export const CardLabel = styled.p`
    font-size: 0.875rem;
    font-weight: 600;
    color: #4b5563;
    margin-bottom: 14px;
`

export const RadioGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const RadioLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    color: #374151;
    cursor: pointer;
`

export const RadioInput = styled.input`
    accent-color: ${PRIMARY};
    width: 16px;
    height: 16px;
    cursor: pointer;
`

export const ReplyTitleInput = styled.input`
    width: 100%;
    padding: 11px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    font-size: 0.875rem;
    color: #111827;
    outline: none;
    box-sizing: border-box;
    font-family: inherit;
    transition: border-color 0.15s, box-shadow 0.15s;

    &::placeholder { color: #9ca3af; }
    &:focus {
        border-color: ${PRIMARY};
        box-shadow: 0 0 0 3px rgba(94,129,244,0.15);
    }
`

export const ReplyCard = styled(Card)`
    margin-bottom: 24px;
`

export const ReplyTextarea = styled.textarea`
    width: 100%;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    font-size: 0.875rem;
    font-family: inherit;
    color: #374151;
    outline: none;
    resize: none;
    box-sizing: border-box;
    line-height: 1.7;
    transition: border-color 0.15s, box-shadow 0.15s;

    &::placeholder { color: #9ca3af; }
    &:focus {
        border-color: ${PRIMARY};
        box-shadow: 0 0 0 3px rgba(94,129,244,0.15);
    }
`

export const BtnRow = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`

export const RejectBtn = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #fca5a5;
    background: #fff;
    font-size: 0.875rem;
    font-weight: 600;
    color: #dc2626;
    cursor: pointer;
    transition: background 0.1s;

    &:hover { background: #fff1f2; }
`

export const SaveDraftBtn = styled.button`
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    background: #fff;
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    cursor: pointer;
    transition: background 0.1s;

    &:hover { background: #f9fafb; }
`

export const SubmitBtn = styled.button`
    padding: 10px 24px;
    border-radius: 10px;
    border: none;
    background: ${PRIMARY};
    font-size: 0.875rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(94,129,244,0.3);
    transition: background 0.15s;

    &:hover:not(:disabled) { background: ${PRIMARY_HOVER}; }
    &:disabled { opacity: 0.5; cursor: not-allowed; }
`

export const ReplyViewCard = styled(Card)`
    margin-bottom: 24px;
`

export const ReplyViewLabel = styled.p`
    font-size: 0.75rem;
    font-weight: 600;
    color: #9ca3af;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 6px;
`

export const ReplyViewTitle = styled.h3`
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f3f4f6;
`

export const ReplyViewContent = styled.p`
    font-size: 0.875rem;
    color: #374151;
    line-height: 1.8;
    white-space: pre-wrap;
`

export const LoadingText = styled.p`
    text-align: center;
    color: #9ca3af;
    font-size: 0.875rem;
    padding: 80px 0;
`

export const ErrorText = styled.p`
    text-align: center;
    color: #dc2626;
    font-size: 0.875rem;
    padding: 80px 0;
`
