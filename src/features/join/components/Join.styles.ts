import styled from 'styled-components'
export {AuthPage as Page, AuthCard as Card, FieldList, Field, Label, Input, TextBtn as LoginLinkBtn} from '../../../shared/ui/form.styles'

export const Container = styled.div`
    width: 100%;
    max-width: 512px;
`

export const SubmitBtn = styled.button`
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

export const TitleArea = styled.div`
    text-align: center;
    margin-bottom: 32px;
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

export const LoginLink = styled.p`
    text-align: center;
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 16px;
`
