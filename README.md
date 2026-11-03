# Agentic Helpdesk — Frontend

AI 기반 헬프데스크 티켓 관리 시스템의 프론트엔드입니다.

## 기술 스택

| 항목 | 버전 |
|------|------|
| React | 19 |
| TypeScript | 5.8 |
| Vite | 6 |
| styled-components | 6 |
| react-router-dom | 7 |
| axios | 1 |

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 환경 변수

루트에 `.env.local` 파일을 생성하고 아래 값을 설정합니다.

```
VITE_API_BASE_URL=http://localhost:8080/api
```

## 폴더 구조

```
src/
├── app/          # 앱 진입점 — Router, Provider 조합
├── pages/        # 라우트 단위 페이지. feature를 조립만 함
├── features/     # 기능 단위 모듈 (핵심 로직)
│    ├── tickets/         티켓 목록·상세·필터
│    ├── classification/  AI 분류 결과, 신뢰도, 재분류 요청
│    ├── dashboard/       통계 차트, 요약 카드
│    └── auth/            인증
├── shared/       # 2곳 이상에서 쓰는 공통 코드
│    ├── ui/      공통 UI 컴포넌트 (Button, Badge, Modal 등)
│    ├── hooks/   공통 훅
│    ├── api/     axios 인스턴스 및 공통 에러 처리
│    ├── utils/   유틸 함수
│    └── types/   공통 타입
├── styles/       테마 토큰, GlobalStyle, styled-components 타입
└── assets/       이미지, 폰트 등 정적 파일
```

### features 모듈 규칙

각 feature는 `index.ts`를 통해서만 외부에 노출합니다.

```
features/tickets/
├── components/   UI 컴포넌트
├── hooks/        데이터 패칭·상태 관리 훅
├── api/          엔드포인트 호출 함수
├── types.ts      해당 feature의 타입
└── index.ts      ← 외부에 공개할 것만 export
```

다른 feature나 page에서 import할 때는 반드시 `index.ts`를 통해 접근합니다.

```ts
// Good
import { TicketTable, useTickets } from '@/features/tickets'

// Bad
import TicketTable from '@/features/tickets/components/TicketTable'
```

## 스타일 가이드

- 컴포넌트 스타일은 같은 폴더에 `.styles.ts` 파일로 분리합니다.
- 색상·폰트·간격은 `src/styles/theme.ts`의 토큰을 사용합니다.
- `theme` 객체는 `styled-components`의 `ThemeProvider`로 주입되므로 `${({ theme }) => theme.colors.primary}` 형태로 접근합니다.
