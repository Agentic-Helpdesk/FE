# Branch Convention

## 브랜치 구조

```
main
 └─ dev
     ├─ feat/기능명
     ├─ fix/버그명
     └─ refactor/기능명
```

| 브랜치 | 설명 |
|---|---|
| `main` | 배포용. 직접 push ❌, PR만 허용 |
| `dev` | 개발 통합. 모든 작업 브랜치는 여기서 분기 & 머지 |
| 작업 브랜치 | `dev`에서 분기 → 작업 → `dev`로 PR |

---

## 브랜치 네이밍

`type/간결한-설명` 형태

### 브랜치를 파는 경우

```
feat/login-api          # 새 기능 개발
fix/calculation-error   # 버그 수정
refactor/sign-up        # 리팩토링
```

### dev에서 직접 커밋하는 경우

`docs`, `style`, `chore` 등 자잘한 작업은 브랜치 없이 dev에 직접 커밋

---

## 네이밍 규칙

- 영어 소문자 + 하이픈(`-`)만 사용
- 언더스코어(`_`), 특수기호 금지
- 최대 30자 이내

### 예시

```
feat/login-api
feat/diet-record-form
fix/calorie-calculation-error
```
