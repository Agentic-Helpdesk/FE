import styled from 'styled-components'

const PRIMARY = '#5e81f4'
const PRIMARY_HOVER = '#4a6de0'

export const Page = styled.div`
    min-height: 100vh;
    background: #fff;
`

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 56px;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    padding: 0 24px;
    z-index: 50;
`

export const LogoBtn = styled.button`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${PRIMARY};
    letter-spacing: -0.03em;
    margin-right: 40px;
    background: none;
    border: none;
    cursor: pointer;
`

export const HeaderActions = styled.div`
    margin-left: auto;
    display: flex;
    gap: 8px;
    align-items: center;
`

export const LoginBtn = styled.button`
    padding: 6px 16px;
    font-size: 0.875rem;
    color: #6b7280;
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.15s;

    &:hover {
        color: #111827;
    }
`

export const JoinBtn = styled.button`
    padding: 6px 16px;
    font-size: 0.875rem;
    color: #fff;
    background: ${PRIMARY};
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.15s;

    &:hover {
        background: ${PRIMARY_HOVER};
    }
`

export const HeroSection = styled.section`
    max-width: 1152px;
    margin: 0 auto;
    padding: 96px 32px 64px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 64px;
    align-items: center;
    padding-top: calc(56px + 96px);
`

export const HeroLeft = styled.div``

export const BadgeChip = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(94, 129, 244, 0.1);
    color: ${PRIMARY};
    font-size: 0.875rem;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 999px;
    margin-bottom: 24px;
`

export const HeroTitle = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #111827;
    line-height: 1.2;
    margin-bottom: 24px;
`

export const HeroAccent = styled.span`
    color: ${PRIMARY};
`

export const HeroDesc = styled.p`
    font-size: 1.125rem;
    color: #6b7280;
    line-height: 1.7;
    margin-bottom: 32px;
`

export const HeroButtons = styled.div`
    display: flex;
    gap: 12px;
`

export const PrimaryBtn = styled.button`
    padding: 12px 24px;
    background: ${PRIMARY};
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 8px 24px rgba(94, 129, 244, 0.3);
    transition: background 0.15s;

    &:hover {
        background: ${PRIMARY_HOVER};
    }
`

export const SecondaryBtn = styled.button`
    padding: 12px 24px;
    color: #374151;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;

    &:hover {
        background: #f9fafb;
    }
`

export const HeroRight = styled.div`
    position: relative;
`

export const MockWindow = styled.div`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.6);

    /* gradient background wrapper */

    &::before {
        content: '';
        position: absolute;
        inset: -16px;
        background: linear-gradient(135deg, #f1f5ff, #e0e7ff);
        border-radius: 24px;
        z-index: -1;
    }
`

export const WindowBar = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
`

export const WindowDot = styled.div<{ color: string }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({color}) => color};
`

export const WindowUrlBar = styled.div`
    flex: 1;
    height: 20px;
    background: #fdfdff;
    border-radius: 4px;
    margin-left: 8px;
`

export const StatGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-bottom: 12px;
`

export const StatBox = styled.div`
    background: #f5faff;
    border-radius: 8px;
    padding: 8px;
    text-align: center;
`

export const StatLabel = styled.p`
    font-size: 0.75rem;
    color: #6b7280;
    margin-bottom: 2px;
`

export const StatValue = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${PRIMARY};
`

export const TicketList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export const TicketRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background: #f9fafb;
    border-radius: 8px;
`

export const TicketDot = styled.div`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${PRIMARY};
    flex-shrink: 0;
`

export const TicketTitle = styled.p`
    font-size: 0.75rem;
    color: #374151;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
    완료: {bg: '#d1fae5', text: '#065f46'},
    처리중: {bg: '#fef3c7', text: '#92400e'},
    배정: {bg: '#dbeafe', text: '#1e40af'},
    접수: {bg: '#f1f5f9', text: '#475569'},
    반려: {bg: '#fee2e2', text: '#991b1b'},
}

export const StatusBadge = styled.span<{ status: string }>`
    padding: 2px 10px;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    flex-shrink: 0;
    background: ${({status}) => STATUS_COLORS[status]?.bg ?? '#f3f4f6'};
    color: ${({status}) => STATUS_COLORS[status]?.text ?? '#374151'};
`

export const FeaturesSection = styled.section`
    background: #f9fafb;
    padding: 80px 0;
`

export const FeaturesInner = styled.div`
    max-width: 1152px;
    margin: 0 auto;
    padding: 0 32px;
`

export const FeaturesTitle = styled.h2`
    font-size: 1.875rem;
    font-weight: 700;
    color: #111827;
    text-align: center;
    margin-bottom: 48px;
`

export const FeatureGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
`

export const FeatureCard = styled.div`
    background: #fff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
    border: 1px solid #f3f4f6;
`

export const FeatureIcon = styled.div`
    font-size: 2.5rem;
    margin-bottom: 16px;
`

export const FeatureCardTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 700;
    color: #111827;
    margin-bottom: 8px;
`

export const FeatureCardDesc = styled.p`
    font-size: 0.875rem;
    color: #6b7280;
    line-height: 1.6;
`
