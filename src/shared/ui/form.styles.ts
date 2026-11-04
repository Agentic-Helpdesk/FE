import styled from 'styled-components'

const PRIMARY = '#5e81f4'
const PRIMARY_HOVER = '#4a6de0'

export const AuthPage = styled.div`
    min-height: 100vh;
    background: linear-gradient(135deg, #f8fafc, #eff6ff);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px 16px;
`

export const AuthCard = styled.div`
    width: 100%;
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
    padding: 32px;
    border: 1px solid #f3f4f6;
`

export const FieldList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const Field = styled.div``

export const Label = styled.label`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #4b5563;
    margin-bottom: 6px;
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    font-size: 0.875rem;
    color: #1f2937;
    outline: none;
    transition: border-color 0.15s, box-shadow 0.15s;
    box-sizing: border-box;

    &::placeholder {
        color: #9ca3af;
    }

    &:focus {
        border-color: ${PRIMARY};
        box-shadow: 0 0 0 3px rgba(94, 129, 244, 0.15);
    }
`

export const PrimaryBtn = styled.button`
    width: 100%;
    padding: 12px;
    background: ${PRIMARY};
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.15s;
    box-shadow: 0 4px 12px rgba(94, 129, 244, 0.3);

    &:hover {
        background: ${PRIMARY_HOVER};
    }
`

export const SecondaryBtn = styled.button`
    width: 100%;
    padding: 12px;
    background: rgba(94, 129, 244, 0.1);
    color: ${PRIMARY};
    border: none;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.15s;

    &:hover {
        background: rgba(94, 129, 244, 0.18);
    }
`

export const TextBtn = styled.button`
    color: ${PRIMARY};
    font-weight: 600;
    font-size: 0.875rem;
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`
