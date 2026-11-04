import styled from 'styled-components'

const PRIMARY = '#5e81f4'
const PRIMARY_HOVER = '#4a6de0'

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
    gap: 12px;
    margin-bottom: 24px;
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
`

export const BackBtn = styled.button`
    color: #9ca3af;
    background: none;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1;

    &:hover {
        color: #4b5563;
    }
`

export const PageTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
`

export const FormCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 720px;
    margin: 0 auto;
`

export const MainCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Card = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 24px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
`

export const FieldLabel = styled.label`
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #4b5563;
    margin-bottom: 8px;
`

export const TitleInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    font-size: 0.875rem;
    font-weight: 500;
    color: #111827;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
    box-sizing: border-box;

    &::placeholder { color: #9ca3af; }
    &:focus {
        border-color: ${PRIMARY};
        box-shadow: 0 0 0 3px rgba(94,129,244,0.15);
    }
`

export const ContentTextarea = styled.textarea`
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    font-size: 0.875rem;
    font-family: inherit;
    color: #374151;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
    resize: none;
    box-sizing: border-box;
    line-height: 1.6;

    &::placeholder { color: #9ca3af; }
    &:focus {
        border-color: ${PRIMARY};
        box-shadow: 0 0 0 3px rgba(94,129,244,0.15);
    }
`

export const AdditionalInfoCard = styled(Card)`
    border-color: #e0e7ff;
    background: #f5f7ff;
`

export const AdditionalInfoHint = styled.p`
    font-size: 0.8125rem;
    color: #6366f1;
    margin-bottom: 16px;
`

export const AdditionalFieldList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const AdditionalField = styled.div``

export const AdditionalLabel = styled.label`
    display: block;
    font-size: 0.8125rem;
    font-weight: 500;
    color: #4b5563;
    margin-bottom: 4px;
`

export const AdditionalInput = styled.input`
    width: 100%;
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid #e5e7eb;
    font-size: 0.875rem;
    color: #374151;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
    box-sizing: border-box;
    background: #fff;

    &::placeholder { color: #9ca3af; }
    &:focus {
        border-color: ${PRIMARY};
        box-shadow: 0 0 0 3px rgba(94,129,244,0.15);
    }
`

export const RequestTypeGroup = styled.div`
    display: flex;
    gap: 8px;
`

export const RequestTypeBtn = styled.button<{$active: boolean}>`
    flex: 1;
    padding: 10px 0;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
    border: 2px solid ${({$active}) => $active ? PRIMARY : '#e5e7eb'};
    background: ${({$active}) => $active ? '#eef2ff' : '#fff'};
    color: ${({$active}) => $active ? PRIMARY : '#6b7280'};
`

export const BtnRow = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
`

export const SubmitBtn = styled.button`
    padding: 10px 24px;
    background: ${PRIMARY};
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(94,129,244,0.3);
    transition: background 0.15s;

    &:hover:not(:disabled) { background: ${PRIMARY_HOVER}; }
    &:disabled { opacity: 0.5; cursor: not-allowed; }
`

export const SideCol = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const SimilarCard = styled(Card)``

export const SimilarTitle = styled.h3`
    font-size: 1rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 16px;
`

export const SimilarList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const SimilarItem = styled.div`
    padding: 12px;
    border-radius: 12px;
    border: 1px solid #f3f4f6;
    cursor: pointer;
    transition: border-color 0.15s, background 0.15s;
    display: flex;
    align-items: flex-start;
    gap: 8px;

    &:hover {
        border-color: rgba(94,129,244,0.3);
        background: #f0f4ff;
    }
`

export const SimilarStatusBadge = styled.span<{$status: string}>`
    flex-shrink: 0;
    padding: 2px 8px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    background: ${({$status}) =>
        $status === 'resolved' ? '#d1fae5' :
        $status === 'in_progress' ? '#dbeafe' : '#f3f4f6'};
    color: ${({$status}) =>
        $status === 'resolved' ? '#065f46' :
        $status === 'in_progress' ? '#1e40af' : '#6b7280'};
`

export const SimilarEmptyText = styled.p`
    font-size: 0.8125rem;
    color: #9ca3af;
    text-align: center;
    padding: 16px 0;
`

export const SimilarItemTitle = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    color: #1f2937;
`

export const SimilarItemId = styled.span`
    font-size: 0.75rem;
    font-family: monospace;
    color: #9ca3af;
`

// 접수 완료 화면
export const CompletePage = styled.div`
    min-height: 100vh;
    background: #f9fafb;
    padding-top: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CompleteCard = styled.div`
    background: #fff;
    border-radius: 20px;
    padding: 48px 40px;
    border: 1px solid #f3f4f6;
    box-shadow: 0 4px 24px rgba(0,0,0,0.07);
    text-align: center;
    max-width: 480px;
    width: 100%;
`

export const CompleteIcon = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #d1fae5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    font-size: 1.75rem;
`

export const CompleteTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 8px;
`

export const CompleteSubtitle = styled.p`
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 24px;
`

export const CompleteInfoList = styled.div`
    background: #f9fafb;
    border-radius: 12px;
    padding: 16px 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 28px;
`

export const CompleteInfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
`

export const CompleteInfoLabel = styled.span`
    color: #6b7280;
`

export const CompleteInfoValue = styled.span`
    font-weight: 600;
    color: #111827;
`

export const GoListBtn = styled.button`
    width: 100%;
    padding: 12px;
    background: ${PRIMARY};
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(94,129,244,0.3);
    transition: background 0.15s;

    &:hover { background: ${PRIMARY_HOVER}; }
`
