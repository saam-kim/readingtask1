# TOEFL iBT Writing Task 1: Build a Sentence 대비 터치형 연습 앱

아이패드 미니 6세대 화면에 최적화된 **TOEFL iBT Writing Task 1: Build a Sentence** 대비 터치형 문장 배열 연습 애플리케이션입니다. 키보드 입력 없이, 제시된 청크(chunk)들을 터치하여 드롭박스 빈칸에 알맞은 순서대로 채워 넣으며 실전을 대비할 수 있습니다.

---

## 1. 실행 방법

애플리케이션은 Node.js가 설치된 환경에서 쉽게 로컬 실행 및 프로덕션 빌드가 가능합니다.

### 의존성 설치
```bash
npm install
```

### 개발 서버 실행 (로컬 웹에서 테스트)
```bash
npm run dev
```
*콘솔에 표시되는 URL(예: `http://localhost:5173`)로 브라우저에서 접속합니다.*

### 프로덕션 빌드 (배포 파일 생성)
```bash
npm run build
```
*빌드가 끝나면 `/dist` 디렉토리에 정적 파일이 압축 컴파일되어 저장됩니다. 이 폴더를 웹 서버에 업로드하여 정적 호스팅할 수 있습니다.*

---

## 2. 주요 파일 구조

```txt
src/
  ├── components/
  │     ├── HomeScreen.tsx        # 메인 홈 화면 (난이도 선택, 문제 수, 타이머 옵션, 누적 학습 통계)
  │     ├── PracticeScreen.tsx    # 문제 풀이 화면 (컨텍스트 카드, 빈칸 배열 영역, 청크 뱅크, 오답 해설 및 타이머)
  │     ├── ResultScreen.tsx      # 결과 화면 (학습 요약, 맞춘 개수/오답 개수, 세션 오답 확인 및 즉시 복습)
  │     ├── ChunkButton.tsx       # 터치 선택용 개별 청크 버튼 (최소 44px 터치 높이 확보)
  │     ├── AnswerArea.tsx        # 빈칸이 삽입된 템플릿 문장 렌더링 카드 (선택된 단어 제거 터치 연동)
  │     ├── ProgressBar.tsx      # 세션 문제 풀이 진행 상황을 시각화하는 헤더 진행 바
  │     └── StatsCard.tsx         # 홈 화면에 노출되는 난이도별/전체 학습 지표 요약 대시보드
  ├── data/
  │     └── questions.ts          # 자체 제작한 100개의 TOEFL iBT Writing Task 1 문제 데이터베이스
  ├── hooks/
  │     ├── usePracticeSession.ts # active 문제 인덱스, 셔플 청크, 타이머 및 정오답 채점 등의 상태 관리 훅
  │     └── useLocalStats.ts      # localStorage 기반 학습 기록 조회, 누적 오답 저장 등의 비동기 싱크 훅
  ├── utils/
  │     ├── shuffle.ts            # 피셔-예이츠(Fisher-Yates) 셔플을 이용한 청크 임의 배열 함수
  │     ├── storage.ts            # localStorage CRUD 유틸 모듈
  │     └── scoring.ts            # 문장 완성 정오답 검증 로듈
  ├── types/
  │     └── question.ts           # 문제(Question) 객체의 타입 정의 인터페이스
  ├── App.tsx                     # 메인 화면 라우터
  ├── main.tsx                    # React 진입점
  └── index.css                   # 글래스모피즘(Glassmorphism) 기반 미적인 디자인 및 터치 피드백 CSS 시스템
public/
  └── manifest.json               # 홈 화면 추가(PWA)를 위한 매니페스트 파일
index.html                        # standalone 화면 추가용 메타 태그 및 Safari 터치 줌 무효화 설정
```

---

## 3. 구현된 기능 목록

1. **난이도별 맞춤 학습 (Level 1~5)**
   - 쉬운 수준(Level 1)부터 복합 구조, 도치 및 학술적 분사구문이 포함된 수준(Level 5)까지 난이도가 점진적으로 상향됩니다.
2. **다양한 학습 분량 선택**
   - 5문제부터 최대 50문제까지 5개 단위로 문제 개수를 설정하여 문제를 임의로 추출(shuffle)해 풉니다.
   - 보유 문제보다 많은 문항을 선택할 시, "문제가 부족합니다" 경고가 발생해 오류를 예방합니다.
3. **타이머 제한 설정**
   - 무제한(Off) 외에 문제당 30초, 45초, 60초의 시간제한을 켤 수 있으며, 시간이 초과되면 경고가 뜨되 입력을 차단하지 않고 자유롭게 마저 완성할 수 있습니다.
4. **터치 반응형 단어 배열 (Answer Slots)**
   - 드래그 앤 드롭의 오조작을 피하고 터치로만 완성하는 구조를 가집니다.
   - 단어가 채워질 때 문장 템플릿의 `_____` 빈칸에 순서대로 단어 카드가 물리며 채워지는 듯한 모션과 인터페이스를 적용하였습니다.
5. **체계적인 정오답 피드백 및 복습**
   - 틀린 문항은 'Try Again'을 눌러 직접 재도전하거나, 'Show Answer'를 눌러 해설과 한국어 해석 및 핵심 문법 포인트를 학습할 수 있습니다.
   - 학습 도중 틀린 문항은 `localStorage`에 자동 저장됩니다.
6. **오답 복습 모드 (Review Mistakes)**
   - 오답 이력이 있는 문제들만 모아 집중 풀이하는 모드가 지원됩니다.
   - 복습 모드에서 정답을 맞춘 경우, "오답 목록에서 제외하기" 체크박스를 제공하여 Next 클릭 시 자동으로 오답 이력에서 소거할지 제어할 수 있습니다.
7. **누적 대시보드**
   - 전체 풀이 수, 전체 정답률, 난이도별 정답률 막대그래프, 복습이 필요한 문제 수 등을 한눈에 모니터링할 수 있으며, 초기화 기능도 지원합니다.

---

## 4. 문제 데이터를 추가하는 방법

자체 제작 예문을 추가하고 싶다면, `src/data/questions.ts` 파일의 `questions` 배열에 아래 형식과 유사하게 추가하십시오.

```ts
{
  id: "L3-021", // 고유 ID 설정 (Level에 맞춰 번호 기입 권장)
  level: 3,     // 1 ~ 5 중 하나 지정
  context: "Student A: Do you know when the registration opens?",
  sentenceTemplate: "Student B: I heard that the _____ _____ _____ _____ tomorrow.",
  chunks: ["registration", "is going", "to start", "early", "start", "to"],
  answer: ["registration", "is going", "to start", "early"],
  explanation: "정답: registration is going to start early\n해설: 명사절 접속사 뒤에 '주어(the registration) + 동사구(is going to start) + 부사(early)'가 오는 자연스러운 순서입니다. 'start' 및 'to'는 헷갈림을 유도하는 방해 요인(Distractor)입니다."
}
```
*주의: `sentenceTemplate` 안에 사용된 빈칸 `_____`(언더바 5개)의 개수는 `answer` 배열의 길이와 정확히 일치해야 문장이 정상적으로 렌더링됩니다.*

---

## 5. iPad에서 사용하는 방법 (PWA 홈 화면 추가)

이 애플리케이션은 **아이패드 미니 6세대 세로 해상도(최대 너비 760px)**에 세련된 카드 레이아웃으로 밀착 렌더링되도록 디자인되었습니다. 사파리(Safari) 브라우저를 통해 주소창 영역 없이 전체 화면 앱처럼 설치해 사용하실 수 있습니다.

1. 빌드된 웹 사이트 URL에 **iPad mini 6**의 **Safari 브라우저**로 접속합니다.
2. Safari 상단 혹은 하단 툴바의 **[공유하기]** 아이콘(위쪽 화살표가 있는 사각형 버튼)을 터치합니다.
3. 공유 메뉴 중 **[홈 화면에 추가] (Add to Home Screen)** 항목을 터치합니다.
4. 이름을 설정한 후 **추가** 버튼을 누르면 iPad 바탕화면에 앱 아이콘이 등록됩니다.
5. 바탕화면의 아이콘을 터치해 실행하면, 상단 브라우저 주소창이나 네비게이션바가 사라진 **전체 화면 PWA 단독 앱 모드**로 실행됩니다.
6. 더블 탭 및 터치 제스처 시 화면이 불필요하게 핑거 줌(확대)되지 않고 부드러운 손가락 탭 동작만 활성화되도록 터치 뷰포트 고정이 사전 적용되어 있어 원활한 터치 사용성을 자랑합니다.

---

## 6. 향후 추가하면 좋은 기능

- **TTS(Text-to-Speech) 음성 출력**: 문제 컨텍스트Dialogue나 정답 문장을 미국/영국식 성우 발음으로 읽어주는 기능 추가 (청취/듣기 연계)
- **점수 트렌드 차트**: 날짜별 정답률 추이를 시각화하여 실력 향상을 모니터링할 수 있는 그래프 기능 도입
- **모의고사 타이머 모드**: 개별 문항 타이머가 아닌, 실제 TOEFL Writing Section의 Build a Sentence 20분 전체 제한 시간 시뮬레이션
- **에러 로그 신고 기능**: 특정 문제의 정답 오류를 교사나 개발자에게 즉시 메일로 보내는 간편 피드백 채널 개설
