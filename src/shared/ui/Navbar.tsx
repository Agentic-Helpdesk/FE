import {useNavigate, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import {APP_NAME} from '../constants/app'
import logoSvg from '../../assets/helpdesk-pro-logo.svg'

const PRIMARY = '#5e81f4'

const Bar = styled.nav`
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
    z-index: 100;
`

const Logo = styled.button`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${PRIMARY};
    letter-spacing: -0.03em;
    background: none;
    border: none;
    cursor: pointer;
    justify-content: flex-start;
`

const NavList = styled.div`
    display: flex;
    gap: 4px;
    flex-shrink: 0;
`

const NavBtn = styled.button<{$active: boolean}>`
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: ${({$active}) => $active ? '600' : '400'};
    color: ${({$active}) => $active ? PRIMARY : '#6b7280'};
    background: ${({$active}) => $active ? '#eef2ff' : 'none'};
    border: none;
    cursor: pointer;
    transition: background 0.1s, color 0.1s;

    &:hover {
        background: #f3f4f6;
        color: #111827;
    }
`

const RightSlot = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
`

const NAV_LIST = [
    {label: '대시보드', path: '/dashboard'},
    {label: '내 문의', path: '/tickets'},
]

function Navbar() {
    const navigate = useNavigate()
    const {pathname} = useLocation()

    return (
        <Bar>
            <Logo onClick={() => navigate('/dashboard')}>
                <img src={logoSvg} alt="" height={24}/>
                {APP_NAME}
            </Logo>
            <NavList>
                {NAV_LIST.map(({label, path}) => (
                    <NavBtn
                        key={path}
                        $active={pathname.startsWith(path)}
                        onClick={() => navigate(path)}
                    >
                        {label}
                    </NavBtn>
                ))}
            </NavList>
            <RightSlot>
                {/* 내 정보 영역 */}
            </RightSlot>
        </Bar>
    )
}

export default Navbar
