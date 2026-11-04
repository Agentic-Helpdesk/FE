import {useNavigate} from 'react-router-dom'
import * as S from './Join.styles'

import {APP_NAME} from '../../../shared/constants/app'

type FieldItemType = {
    label: string
    type: string
    placeholder: string
}

const FIELD_LIST: FieldItemType[] = [
    {label: '아이디 (ID)', type: 'text', placeholder: '사용할 아이디를 입력하세요'},
    {label: '비밀번호 (PW)', type: 'password', placeholder: '비밀번호를 입력하세요'},
    {label: '이름', type: 'text', placeholder: '실명을 입력하세요'},
    {label: '소속 부서', type: 'text', placeholder: '예: 인사팀, 회계팀, 보안팀'},
    {label: '직함', type: 'text', placeholder: '예: 사원, 대리, 과장'},
    {label: '이메일', type: 'email', placeholder: '회사 이메일 주소'},
]

function Join() {
    const navigate = useNavigate()

    const handleLoginClick = () => navigate('/login')
    const handleSubmitClick = () => navigate('/login')

    return (
        <S.Page>
            <S.Container>
                <S.TitleArea>
                    <S.Title>회원가입</S.Title>
                    <S.Subtitle>{APP_NAME}에 오신 것을 환영합니다</S.Subtitle>
                </S.TitleArea>

                <S.Card>
                    <S.FieldList>
                        {FIELD_LIST.map((field) => (
                            <S.Field key={field.label}>
                                <S.Label>{field.label}</S.Label>
                                <S.Input
                                    type={field.type}
                                    placeholder={field.placeholder}
                                />
                            </S.Field>
                        ))}
                    </S.FieldList>

                    <S.SubmitBtn onClick={handleSubmitClick}>가입하기</S.SubmitBtn>

                    <S.LoginLink>
                        이미 계정이 있으신가요?{' '}
                        <S.LoginLinkBtn onClick={handleLoginClick}>로그인</S.LoginLinkBtn>
                    </S.LoginLink>
                </S.Card>
            </S.Container>
        </S.Page>
    )
}

export default Join
