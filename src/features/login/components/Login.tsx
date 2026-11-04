import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import * as S from './Login.styles'

const APP_NAME = 'HelpDesk Pro'

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isRemember, setIsRemember] = useState(true)

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const handleRememberToggle = () => setIsRemember(!isRemember)
    const handleLoginClick = () => navigate('/dashboard')
    const handleJoinClick = () => navigate('/join')

    return (
        <S.Page>
            <S.Container>
                <S.TitleArea>
                    <S.LogoIcon><span>H</span></S.LogoIcon>
                    <S.Title>{APP_NAME}</S.Title>
                    <S.Subtitle>계정에 로그인하세요</S.Subtitle>
                </S.TitleArea>

                <S.Card>
                    <S.FieldList>
                        <S.Field>
                            <S.Label>이메일</S.Label>
                            <S.Input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="이메일을 입력하세요"
                            />
                        </S.Field>
                        <S.Field>
                            <S.Label>비밀번호</S.Label>
                            <S.Input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="비밀번호를 입력하세요"
                            />
                        </S.Field>
                        <S.RememberRow>
                            <S.RememberLabel onClick={handleRememberToggle}>
                                <S.RememberToggle isActive={isRemember}>
                                    <div/>
                                </S.RememberToggle>
                                <S.RememberText>자동 로그인</S.RememberText>
                            </S.RememberLabel>
                            <S.TextBtn>비밀번호 찾기</S.TextBtn>
                        </S.RememberRow>
                    </S.FieldList>

                    <S.LoginBtn onClick={handleLoginClick}>로그인</S.LoginBtn>
                    <S.JoinRow>
                        계정이 없으신가요?{' '}
                        <S.TextBtn onClick={handleJoinClick}>회원가입</S.TextBtn>
                    </S.JoinRow>
                </S.Card>
            </S.Container>
        </S.Page>
    )
}

export default Login
