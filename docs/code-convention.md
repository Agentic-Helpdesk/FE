# Code Convention

## 변수 · 함수 네이밍

### 일반

| 규칙 | 예시 |
|---|---|
| 변수, 함수명은 **camelCase** | `helloWorld`, `getUserInfo` |
| 배열 변수는 끝에 **List** 접미사 | `userList`, `ticketList` |
| boolean 변수는 `is` / `has` / `can` 으로 시작 | `isLoading`, `hasError` |
| 클래스·생성자는 **PascalCase** | `class UserService {}` |
| 상수는 **UPPER_SNAKE_CASE** | `MAX_COUNT`, `API_BASE_URL` |
| 상수값 객체는 **UPPER_SNAKE_CASE** (값은 camelCase) | `const STATUS = { inProgress: '처리중' }` |
| Enum은 **PascalCase** (값은 PascalCase) | `enum Role { AdminUser = 1 }` |

### 함수 접두사

| 접두사 | 용도 | 예시 |
|---|---|---|
| `is` / `has` / `can` | boolean 반환 판별 함수 | `isValidEmail()` |
| `create` | 무언가를 생성 | `createTicket()` |
| `convert` | 형태 변환 / 배열 변환 | `convertToKorean()` |
| `get` | 특정 값 추출·반환 | `getTicketById()` |
| `open` | 무언가를 열기 | `openModal()` |
| `add` / `minus` | 더하기·빼기 | `addItem()`, `minusCount()` |
| `filter` | 배열 필터링 | `filterByStatus()` |
| `find` | 배열에서 특정 요소 탐색 | `findUserById()` |

---

## React 네이밍

| 규칙 | 예시 |
|---|---|
| 커스텀 훅은 `use` 접두사 | `useTicketList()` |
| 고차 컴포넌트는 `with` 접두사 | `withAuth()` |
| 이벤트 핸들러는 `handle` 접두사 + 이벤트 유형 접미사 | `handleLoginClick` |
| Context는 `Context` 접미사 | `AuthContext` |
| Context 훅은 `Context` 접미사 | `useAuthContext()` |
| Provider 컴포넌트는 `Provider` 접미사 | `AuthContextProvider` |

---

## TypeScript 타입 네이밍

| 규칙 | 예시 |
|---|---|
| `type`을 우선 사용 (`interface`도 허용) | `type UserType = {}` |
| 일반 타입은 **PascalCase** + `Type` 접미사 | `type TicketItemType = {}` |
| 유틸리티 타입은 `Type` 접미사 없음 | `type OmitFormPick<T, U> = {}` |
| 컴포넌트 Props 타입은 `Props` 접미사 | `type LoginFormProps = {}` |
| React 타입은 개별 import | `import type { ReactNode } from 'react'` |

---

## Styled-Components

스타일 파일은 `Component.styles.ts`로 분리하고, 컴포넌트에서 namespace import로 사용한다.

```tsx
// Component.styles.ts
export const Wrapper = styled.div`...`

// Component.tsx
import * as S from './Component.styles'

const Component = () => {
    return <S.Wrapper>...</S.Wrapper>
}

export default Component
```
