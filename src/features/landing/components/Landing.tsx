import {useNavigate} from 'react-router-dom'
import * as S from './Landing.styles'
import logoSvg from '../../../assets/helpdesk-pro-logo.svg'

import {APP_NAME} from '../../../shared/constants/app'

type StatusType = '접수' | '처리중' | '완료'

type TicketItemType = {
    title: string
    status: StatusType
}

type FeatureItemType = {
    icon: string
    title: string
    desc: string
}

const STATUS_TICKET_LIST: TicketItemType[] = [
    {title: '네트워크 연결 문제 해결 요청', status: '접수'},
    {title: 'ERP 시스템 오류 보고', status: '처리중'},
    {title: '신규 직원 계정 생성 요청', status: '완료'},
]

const STAT_LIST: [string, string][] = [
    ['12', '접수'],
    ['8', '처리중'],
    ['24', '완료'],
]

const FEATURE_LIST: FeatureItemType[] = [
    {icon: '⚡', title: 'AI 자동 분류', desc: '제출된 티켓을 AI가 자동으로 분류하고 담당팀에 배정합니다.'},
    {icon: '🔍', title: '유사 사례 검색', desc: '과거 해결된 유사 문의를 자동으로 찾아 빠른 답변을 돕습니다.'},
    {icon: '📊', title: '실시간 현황 파악', desc: '부서별 처리 현황과 통계를 실시간으로 확인할 수 있습니다.'},
]

function Landing() {
    const navigate = useNavigate()

    const handleLogoClick = () => navigate('/')
    const handleLoginClick = () => navigate('/login')
    const handleJoinClick = () => navigate('/join')

    return (
        <S.Page>
            <S.Header>
                <S.LogoBtn onClick={handleLogoClick}>
                    <img src={logoSvg} alt="" height={28}/>
                    {APP_NAME}
                </S.LogoBtn>
                <S.HeaderActions>
                    <S.LoginBtn onClick={handleLoginClick}>로그인</S.LoginBtn>
                    <S.JoinBtn onClick={handleJoinClick}>가입하기 →</S.JoinBtn>
                </S.HeaderActions>
            </S.Header>

            <S.HeroSection>
                <S.HeroLeft>
                    <S.BadgeChip>AI 기반 IT 헬프데스크</S.BadgeChip>
                    <S.HeroTitle>
                        업무 문의를<br/>
                        <S.HeroAccent>더 빠르게</S.HeroAccent> 처리하세요
                    </S.HeroTitle>
                    <S.HeroDesc>
                        AI가 티켓을 자동 분류하고, 과거 유사 사례를 찾아 담당자에게 연결합니다.
                        팀의 업무 효율을 극대화하세요.
                    </S.HeroDesc>
                    <S.HeroButtons>
                        <S.PrimaryBtn onClick={handleJoinClick}>무료로 시작하기 →</S.PrimaryBtn>
                        <S.SecondaryBtn onClick={handleLoginClick}>로그인</S.SecondaryBtn>
                    </S.HeroButtons>
                </S.HeroLeft>

                <S.HeroRight>
                    <S.MockWindow>
                        <S.WindowBar>
                            <S.WindowDot color="#f87171"/>
                            <S.WindowDot color="#fbbf24"/>
                            <S.WindowDot color="#4ade80"/>
                            <S.WindowUrlBar/>
                        </S.WindowBar>
                        <S.StatGrid>
                            {STAT_LIST.map(([num, label]) => (
                                <S.StatBox key={label}>
                                    <S.StatLabel>{label}</S.StatLabel>
                                    <S.StatValue>{num}</S.StatValue>
                                </S.StatBox>
                            ))}
                        </S.StatGrid>
                        <S.TicketList>
                            {STATUS_TICKET_LIST.map((ticket) => (
                                <S.TicketRow key={ticket.title}>
                                    <S.TicketDot/>
                                    <S.TicketTitle>{ticket.title}</S.TicketTitle>
                                    <S.StatusBadge status={ticket.status}>{ticket.status}</S.StatusBadge>
                                </S.TicketRow>
                            ))}
                        </S.TicketList>
                    </S.MockWindow>
                </S.HeroRight>
            </S.HeroSection>

            <S.FeaturesSection>
                <S.FeaturesInner>
                    <S.FeaturesTitle>왜 {APP_NAME}인가요?</S.FeaturesTitle>
                    <S.FeatureGrid>
                        {FEATURE_LIST.map((feature) => (
                            <S.FeatureCard key={feature.title}>
                                <S.FeatureIcon>{feature.icon}</S.FeatureIcon>
                                <S.FeatureCardTitle>{feature.title}</S.FeatureCardTitle>
                                <S.FeatureCardDesc>{feature.desc}</S.FeatureCardDesc>
                            </S.FeatureCard>
                        ))}
                    </S.FeatureGrid>
                </S.FeaturesInner>
            </S.FeaturesSection>
        </S.Page>
    )
}

export default Landing
