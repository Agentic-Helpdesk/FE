import styled from 'styled-components'
export {AuthPage as Page, AuthCard as Card, FieldList, Field, Label, Input, TextBtn} from '../../../shared/ui/form.styles'

export const Container = styled.div`
    width: 100%;
    max-width: 448px;
`

const PRIMARY = '#5e81f4'

export const TitleArea = styled.div`
    text-align: center;
    margin-bottom: 32px;
`

export const LogoIcon = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
    background: ${PRIMARY};
    border-radius: 16px;
    margin-bottom: 16px;
    box-shadow: 0 8px 24px rgba(94, 129, 244, 0.3);

    span {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 700;
    }
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: #111827;
`

export const Subtitle = styled.p`
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 4px;
`

export const RememberRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const RememberLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`

export const RememberToggle = styled.div<{ isActive: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    background: ${({isActive}) => isActive ? PRIMARY : 'transparent'};
    border: ${({isActive}) => isActive ? 'none' : '2px solid #d1d5db'};

    div {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
        display: ${({isActive}) => isActive ? 'block' : 'none'};
    }
`

export const RememberText = styled.span`
    font-size: 0.875rem;
    font-weight: 600;
    color: #1f2937;
`

export const LoginBtn = styled.button`
    width: 100%;
    padding: 12px;
    background: #5e81f4;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.15s;
    box-shadow: 0 4px 12px rgba(94, 129, 244, 0.3);
    margin-top: 28px;

    &:hover {
        background: #4a6de0;
    }
`

export const JoinRow = styled.p`
    text-align: center;
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 16px;
`
