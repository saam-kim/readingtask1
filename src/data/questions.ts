import type { Question } from '../types/question';

export const questions: Question[] = [
  // ==========================================
  // LEVEL 1 (20 Questions: Simple, 4-5 chunks)
  // ==========================================
  {
    id: "L1-001",
    level: 1,
    context: "Student A: I can't find the library's weekend schedule.",
    sentenceTemplate: "Student B: The _____ _____ _____ _____.",
    chunks: ["library", "is closed", "on", "Sundays", "are close", "at"],
    answer: ["library", "is closed", "on", "Sundays"],
    explanation: "정답: library is closed on Sundays.\n해설: 주어가 단수(The library)이므로 be동사는단수형인 'is'를 사용하고, 요일 앞에는 전치사 'on'을 씁니다. 'are close'는 복수형 및 형용사 오답입니다."
  },
  {
    id: "L1-002",
    level: 1,
    context: "Student A: Can I borrow these biology reference books?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ here.",
    chunks: ["can", "borrow", "books", "from", "borrows", "to"],
    answer: ["can", "borrow", "books", "from"],
    explanation: "정답: can borrow books from\n해설: 조동사 'can' 뒤에는 동사원형 'borrow'가 오며, 출처를 나타낼 때는 전치사 'from'을 사용합니다."
  },
  {
    id: "L1-003",
    level: 1,
    context: "Student A: I'm lost. Where is the chemistry laboratory?",
    sentenceTemplate: "Student B: It _____ _____ _____ _____ building.",
    chunks: ["is", "in", "the", "science", "are", "on"],
    answer: ["is", "in", "the", "science"],
    explanation: "정답: is in the science\n해설: 주어가 3인칭 단수 대명사 'It'이므로 'is'를 쓰고, 건물 내부에 있음을 나타낼 때 전치사 'in'을 씁니다."
  },
  {
    id: "L1-004",
    level: 1,
    context: "Student A: Why are you going to the campus bookstore?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ textbook.",
    chunks: ["need", "to", "buy", "a", "needs", "buying"],
    answer: ["need", "to", "buy", "a"],
    explanation: "정답: need to buy a\n해설: 'need'는 to부정사를 목적어로 취하는 동사로, 주어 'I'에 맞춰 'need to + 동사원형(buy)'을 씁니다."
  },
  {
    id: "L1-005",
    level: 1,
    context: "Student A: How is your history professor?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____.",
    chunks: ["professor", "is", "very", "kind", "are", "kindly"],
    answer: ["professor", "is", "very", "kind"],
    explanation: "정답: professor is very kind\n해설: 'The professor'는 단수 명사이므로 동사 'is'를 사용하고, 부사 'very' 뒤에 보어로 형용사 'kind'가 옵니다."
  },
  {
    id: "L1-006",
    level: 1,
    context: "Student A: Do you know where Sarah works this semester?",
    sentenceTemplate: "Student B: She _____ _____ _____ _____ office.",
    chunks: ["works", "at", "the", "registrar's", "working", "on"],
    answer: ["works", "at", "the", "registrar's"],
    explanation: "정답: works at the registrar's\n해설: 3인칭 단수 주어 'She'에 알맞은 현재시제 동사 'works'와 특정 장소를 뜻하는 전치사 'at'을 결합합니다."
  },
  {
    id: "L1-007",
    level: 1,
    context: "Student A: I want some coffee before the next class.",
    sentenceTemplate: "Student B: Is _____ _____ _____ _____ nearby?",
    chunks: ["there", "a", "good", "cafe", "their", "are"],
    answer: ["there", "a", "good", "cafe"],
    explanation: "정답: there a good cafe\n해설: 장소의 존재 여부를 묻는 의문문 'Is there...?' 구조에 맞춰 단수 명사구 'a good cafe'가 이어집니다."
  },
  {
    id: "L1-008",
    level: 1,
    context: "Student A: Which residence hall do you live in?",
    sentenceTemplate: "Student B: My _____ _____ _____ _____ gym.",
    chunks: ["dormitory", "is", "near", "the", "are", "nearly"],
    answer: ["dormitory", "is", "near", "the"],
    explanation: "정답: dormitory is near the\n해설: 단수 명사 'My dormitory'에 동사 'is'가 오며, 전치사 'near' 뒤에 정관사 'the'와 명사 'gym'이 연결됩니다."
  },
  {
    id: "L1-009",
    level: 1,
    context: "Student A: What time does the shuttle bus arrive?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____.",
    chunks: ["shuttle", "bus", "leaves", "at", "leave", "on"],
    answer: ["shuttle", "bus", "leaves", "at"],
    explanation: "정답: shuttle bus leaves at\n해설: 단수 명사구 'The shuttle bus' 뒤에는 3인칭 단수 동사 'leaves'가 오고, 시각 앞에는 전치사 'at'을 씁니다."
  },
  {
    id: "L1-010",
    level: 1,
    context: "Student A: What should I bring to enter the exam room?",
    sentenceTemplate: "Student B: Students _____ _____ _____ _____ cards.",
    chunks: ["must", "show", "their", "ID", "shows", "them"],
    answer: ["must", "show", "their", "ID"],
    explanation: "정답: must show their ID\n해설: 조동사 'must' 뒤에 동사원형 'show'를 사용하며, 복수 주어 'Students'의 소유격인 'their'를 결합합니다."
  },
  {
    id: "L1-011",
    level: 1,
    context: "Student A: Can we get lunch right now?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ now.",
    chunks: ["dining", "hall", "is", "open", "are", "opened"],
    answer: ["dining", "hall", "is", "open"],
    explanation: "정답: dining hall is open\n해설: 단수 주어 'The dining hall' 뒤에 be동사 'is'와 형용사 보어 'open'이 옵니다. 'opened'는 수동태나 동사 과거형이므로 어색합니다."
  },
  {
    id: "L1-012",
    level: 1,
    context: "Student A: Why is everyone so quiet in the lounge?",
    sentenceTemplate: "Student B: We _____ _____ _____ _____ tomorrow.",
    chunks: ["have", "a", "history", "quiz", "has", "history's"],
    answer: ["have", "a", "history", "quiz"],
    explanation: "정답: have a history quiz\n해설: 복수 주어 'We'에 맞게 동사원형/현재 복수형 'have'를 쓰고, 명사구인 'a history quiz'를 목적어로 취합니다."
  },
  {
    id: "L1-013",
    level: 1,
    context: "Student A: I can't solve this math problem on my own.",
    sentenceTemplate: "Student B: Can _____ _____ _____ _____ it?",
    chunks: ["anyone", "help", "me", "with", "helps", "my"],
    answer: ["anyone", "help", "me", "with"],
    explanation: "정답: anyone help me with\n해설: 조동사 'Can'으로 시작하는 의문문에서 주어 'anyone', 동사원형 'help'가 차례대로 오고, 'help someone with something' 구문을 구성합니다."
  },
  {
    id: "L1-014",
    level: 1,
    context: "Student A: Is James joining the photography club?",
    sentenceTemplate: "Student B: He _____ _____ _____ _____ club.",
    chunks: ["wants", "to", "join", "the", "wanting", "joining"],
    answer: ["wants", "to", "join", "the"],
    explanation: "정답: wants to join the\n해설: 3인칭 단수 주어 'He'의 현재시제 'wants' 뒤에 목적어로 to부정사 'to join'이 오며, 특정 클럽을 가리키는 정관사 'the'를 씁니다."
  },
  {
    id: "L1-015",
    level: 1,
    context: "Student A: Do you like the spring weather on campus?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ today.",
    chunks: ["campus", "looks", "very", "beautiful", "look", "beautifully"],
    explanation: "정답: campus looks very beautiful\n해설: 감각동사 'looks' 뒤에는 보어로 형용사 'beautiful'이 와야 합니다. 'beautifully'는 부사이므로 보어로 쓰일 수 없습니다.",
    answer: ["campus", "looks", "very", "beautiful"]
  },
  {
    id: "L1-016",
    level: 1,
    context: "Student A: What are you searching for under the desk?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ keys.",
    chunks: ["am", "looking", "for", "my", "is", "look"],
    answer: ["am", "looking", "for", "my"],
    explanation: "정답: am looking for my\n해설: 현재진행형 'am looking for'(~을 찾는 중이다)를 구성하고, 소유격 'my'를 명사 'keys' 앞에 위치시킵니다."
  },
  {
    id: "L1-017",
    level: 1,
    context: "Student A: When is the student council meeting?",
    sentenceTemplate: "Student B: There _____ _____ _____ _____ noon.",
    chunks: ["is", "a", "meeting", "at", "are", "on"],
    answer: ["is", "a", "meeting", "at"],
    explanation: "정답: is a meeting at\n해설: 유도부사 'There' 뒤에 단수 주어 'a meeting'에 맞춰 'is'를 사용하고, 구체적인 시각인 'noon' 앞에는 전치사 'at'을 사용합니다."
  },
  {
    id: "L1-018",
    level: 1,
    context: "Student A: Why did you go to the student center?",
    sentenceTemplate: "Student B: She _____ _____ _____ _____ card.",
    chunks: ["needs", "a", "new", "ID", "need", "newly"],
    answer: ["needs", "a", "new", "ID"],
    explanation: "정답: needs a new ID\n해설: 3인칭 단수 주어 'She'의 동사형 'needs' 뒤에 관사-형용사-명사 어순의 목적어 'a new ID'가 이어집니다."
  },
  {
    id: "L1-019",
    level: 1,
    context: "Student A: Where can I print this assignment?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ now.",
    chunks: ["computer", "lab", "is", "busy", "labs", "are"],
    answer: ["computer", "lab", "is", "busy"],
    explanation: "정답: computer lab is busy\n해설: 단수 주어 'The computer lab' 뒤에 be동사 'is'가 오고 형용사 보어 'busy'가 연결됩니다."
  },
  {
    id: "L1-020",
    level: 1,
    context: "Student A: The quiz starts in ten minutes.",
    sentenceTemplate: "Student B: We _____ _____ _____ _____ now.",
    chunks: ["should", "study", "for", "it", "shall", "studying"],
    answer: ["should", "study", "for", "it"],
    explanation: "정답: should study for it\n해설: 조동사 'should' 뒤에는 동사원형 'study'를 사용하며, 'study for'(~을 위해 공부하다)와 대명사 목적어 'it'을 씁니다."
  },

  // ==========================================
  // LEVEL 2 (20 Questions: Conjunctions, 5-6 chunks)
  // ==========================================
  {
    id: "L2-001",
    level: 2,
    context: "Student A: Why wasn't there any lecture yesterday?",
    sentenceTemplate: "Student B: The class _____ _____ _____ _____ _____ sick.",
    chunks: ["was", "canceled", "because", "the", "professor", "canceling", "why"],
    answer: ["was", "canceled", "because", "the", "professor"],
    explanation: "정답: was canceled because the professor\n해설: 수동태 시제인 'was canceled'가 완료된 후, 원인을 나타내는 부사절 접속사 'because'가 이끕니다."
  },
  {
    id: "L2-002",
    level: 2,
    context: "Student A: Let's discuss our project when you get to the library.",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ _____ there.",
    chunks: ["will", "call", "you", "when", "I", "am", "calling"],
    answer: ["will", "call", "you", "when", "I"],
    explanation: "정답: will call you when I\n해설: 미래의 행동을 알리는 조동사 'will' 뒤에 목적어 'you'가 오고 시간의 부사절 'when + 주어(I)'가 연결됩니다."
  },
  {
    id: "L2-003",
    level: 2,
    context: "Student A: I'm feeling a bit nervous about the final exam.",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ _____ starts.",
    chunks: ["should", "review", "notes", "before", "it", "shall", "them"],
    answer: ["should", "review", "notes", "before", "it"],
    explanation: "정답: should review notes before it\n해설: 조동사 'should' 뒤에 동사원형 'review'가 오고, 시간을 나타내는 접속사 'before' 뒤에 대명사 주어 'it'이 옵니다."
  },
  {
    id: "L2-004",
    level: 2,
    context: "Student A: Did Minsoo turn in his history research paper?",
    sentenceTemplate: "Student B: He _____ _____ _____ _____ _____ time.",
    chunks: ["could", "not", "submit", "it", "on", "can", "at"],
    answer: ["could", "not", "submit", "it", "on"],
    explanation: "정답: could not submit it on\n해설: 과거의 불가능함을 나타내는 'could not + 동사원형'에 이어 목적어 'it'과 'on time'(제시간에) 숙어가 연결됩니다."
  },
  {
    id: "L2-005",
    level: 2,
    context: "Student A: When is Sarah going to graduate from university?",
    sentenceTemplate: "Student B: She _____ _____ _____ _____ _____ semester.",
    chunks: ["will", "graduate", "after", "this", "busy", "graduates", "then"],
    answer: ["will", "graduate", "after", "this", "busy"],
    explanation: "정답: will graduate after this busy\n해설: 미래 시제 'will graduate' 뒤에 시간 전치사 'after'와 지시 형용사구 'this busy (semester)'가 수식하는 구조입니다."
  },
  {
    id: "L2-006",
    level: 2,
    context: "Student A: Do you have any plans for studying tonight?",
    sentenceTemplate: "Student B: We _____ _____ _____ _____ _____ group.",
    chunks: ["might", "study", "with", "our", "chemistry", "studies", "for"],
    answer: ["might", "study", "with", "our", "chemistry"],
    explanation: "정답: might study with our chemistry\n해설: 추측의 조동사 'might' 뒤에 동사원형 'study'가 오고, 'with our chemistry (group)'이 합쳐져 자연스러운 전치사구를 형성합니다."
  },
  {
    id: "L2-007",
    level: 2,
    context: "Student A: Did the team play the match despite the bad weather?",
    sentenceTemplate: "Student B: Although _____ _____ _____ _____ _____ soccer.",
    chunks: ["it", "was", "raining", "they", "played", "there", "play"],
    answer: ["it", "was", "raining", "they", "played"],
    explanation: "정답: it was raining they played\n해설: 양보의 접속사 'Although' 뒤에 날씨 비인칭 주어 'it'과 진행 시제 'was raining', 그리고 주절 주어와 동사 'they played'가 차례대로 위치합니다."
  },
  {
    id: "L2-008",
    level: 2,
    context: "Student A: I am struggling to understand this lecture slide.",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ _____ help.",
    chunks: ["can", "explain", "the", "concept", "if", "could", "for"],
    answer: ["can", "explain", "the", "concept", "if"],
    explanation: "정답: can explain the concept if\n해설: 'can + 동사원형' 구조 뒤에 목적어 'the concept'과 조건의 접속사 'if'가 자연스럽게 결합합니다."
  },
  {
    id: "L2-009",
    level: 2,
    context: "Student A: You look extremely exhausted today.",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ _____ morning.",
    chunks: ["have", "been", "studying", "since", "this", "has", "for"],
    answer: ["have", "been", "studying", "since", "this"],
    explanation: "정답: have been studying since this\n해설: 현재완료 진행형 'have been -ing'와 과거 특정 시점부터의 지속을 나타내는 'since'가 결합하여 '오늘 아침부터 공부해왔다'는 맥락을 완성합니다."
  },
  {
    id: "L2-010",
    level: 2,
    context: "Student A: When do we have to pay the dormitory tuition?",
    sentenceTemplate: "Student B: Students _____ _____ _____ _____ _____ Friday.",
    chunks: ["must", "pay", "the", "fees", "before", "paying", "at"],
    answer: ["must", "pay", "the", "fees", "before"],
    explanation: "정답: must pay the fees before\n해설: 의무를 나타내는 조동사 'must' 뒤에 동사원형 'pay', 목적어 'the fees'가 오고 기한을 뜻하는 접속사/전치사 'before'가 이어집니다."
  },
  {
    id: "L2-011",
    level: 2,
    context: "Student A: Why didn't you answer my phone call at eight?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ _____ called.",
    chunks: ["was", "writing", "a", "report", "when", "am", "written"],
    answer: ["was", "writing", "a", "report", "when"],
    explanation: "정답: was writing a report when\n해설: 과거 진행시제인 'was writing' 뒤에 시간 접속사 'when'이 결합하여 특정 과거 시점의 동작을 강조합니다."
  },
  {
    id: "L2-012",
    level: 2,
    context: "Student A: What is Jiwon's goal for this summer vacation?",
    sentenceTemplate: "Student B: She _____ _____ _____ _____ _____ internship.",
    chunks: ["hopes", "to", "find", "a", "good", "hoping", "finding"],
    answer: ["hopes", "to", "find", "a", "good"],
    explanation: "정답: hopes to find a good\n해설: 3인칭 단수 주어 'She'의 동사 'hopes' 뒤에 명사적 용법의 'to find'와 형용사 수식 'a good (internship)'이 결합합니다."
  },
  {
    id: "L2-013",
    level: 2,
    context: "Student A: The popular classes will fill up quickly.",
    sentenceTemplate: "Student B: We _____ _____ _____ _____ _____ possible.",
    chunks: ["should", "register", "as", "soon", "as", "shall", "for"],
    answer: ["should", "register", "as", "soon", "as"],
    explanation: "정답: should register as soon as\n해설: 조동사 'should'와 동사원형 'register' 뒤에 가능한 한 빨리라는 뜻의 숙어구 'as soon as (possible)'가 위치합니다."
  },
  {
    id: "L2-014",
    level: 2,
    context: "Student A: Who will explain the project details to us?",
    sentenceTemplate: "Student B: He _____ _____ _____ _____ _____ meeting.",
    chunks: ["will", "explain", "everything", "during", "the", "explained", "while"],
    answer: ["will", "explain", "everything", "during", "the"],
    explanation: "정답: will explain everything during the\n해설: 미래 조동사 'will'과 목적어 'everything' 뒤에 특정 기간을 나타내는 전치사 'during'과 관사 'the'가 차례대로 배열됩니다."
  },
  {
    id: "L2-015",
    level: 2,
    context: "Student A: Should I bring my laptop to the computer lab?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ _____ one.",
    chunks: ["do", "not", "need", "to", "bring", "does", "bringing"],
    answer: ["do", "not", "need", "to", "bring"],
    explanation: "정답: do not need to bring\n해설: 부정의 'do not need to'(~할 필요가 없다) 뒤에 동사원형 'bring'이 오는 전형적인 부정 조동 구조입니다."
  },
  {
    id: "L2-016",
    level: 2,
    context: "Student A: Why didn't you buy the textbook yesterday?",
    sentenceTemplate: "Student B: The store _____ _____ _____ _____ _____ arrived.",
    chunks: ["was", "already", "closed", "when", "I", "are", "close"],
    answer: ["was", "already", "closed", "when", "I"],
    explanation: "정답: was already closed when I\n해설: 과거 상태인 수동태 'was closed'에 부사 'already'를 더하고, 접속사 'when'과 주어 'I'가 과거절을 완성합니다."
  },
  {
    id: "L2-017",
    level: 2,
    context: "Student A: Will they cancel the field trip due to heavy snow?",
    sentenceTemplate: "Student B: They _____ _____ _____ _____ _____ safety.",
    chunks: ["might", "postpone", "the", "trip", "for", "must", "to"],
    answer: ["might", "postpone", "the", "trip", "for"],
    explanation: "정답: might postpone the trip for\n해설: 약한 추측의 'might' 뒤에 'postpone the trip', 목적을 나타내는 전치사 'for'가 위치합니다."
  },
  {
    id: "L2-018",
    level: 2,
    context: "Student A: Is Sarah coming to the study room now?",
    sentenceTemplate: "Student B: She _____ _____ _____ _____ _____ ends.",
    chunks: ["will", "join", "us", "after", "class", "joins", "while"],
    answer: ["will", "join", "us", "after", "class"],
    explanation: "정답: will join us after class\n해설: 미래 조동사 'will'과 목적어 'us' 뒤에 전치사처럼 쓰인 'after class'가 결합합니다."
  },
  {
    id: "L2-019",
    level: 2,
    context: "Student A: I left my calculator in my dorm room.",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ _____ mine.",
    chunks: ["would", "be", "happy", "to", "lend", "will", "lending"],
    answer: ["would", "be", "happy", "to", "lend"],
    explanation: "정답: would be happy to lend\n해설: 가정이나 정중한 제안의 'would be happy to + 동사원형' 표현을 사용하여 기꺼이 빌려주겠다는 의사를 표현합니다."
  },
  {
    id: "L2-020",
    level: 2,
    context: "Student A: Where can I check the reading assignments?",
    sentenceTemplate: "Student B: You _____ _____ _____ _____ _____ portal.",
    chunks: ["can", "find", "the", "syllabus", "on", "finds", "at"],
    answer: ["can", "find", "the", "syllabus", "on"],
    explanation: "정답: can find the syllabus on\n해설: 조동사 'can' 뒤에 목적어 'the syllabus', 웹사이트나 온라인 포털 공간을 의미하는 전치사 'on'을 사용합니다."
  },

  // ==========================================
  // LEVEL 3 (20 Questions: Relative, Indirect clauses, 6-7 chunks)
  // ==========================================
  {
    id: "L3-001",
    level: 3,
    context: "Student A: Why is the campus cafeteria empty today?",
    sentenceTemplate: "Student B: Do _____ _____ _____ _____ _____ _____ closed?",
    chunks: ["you", "know", "why", "the", "cafeteria", "is", "does", "that"],
    answer: ["you", "know", "why", "the", "cafeteria", "is"],
    explanation: "정답: you know why the cafeteria is\n해설: 의문문 'Do you know' 뒤에 오는 간접의문문은 '의문사(why) + 주어(the cafeteria) + 동사(is)' 어순을 갖습니다."
  },
  {
    id: "L3-002",
    level: 3,
    context: "Student A: Who is the person presenting the research award?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ office.",
    chunks: ["student", "who", "won", "the", "award", "is", "whom", "wins"],
    answer: ["student", "who", "won", "the", "award", "is"],
    explanation: "정답: student who won the award is\n해설: 주어 'The student'를 수식하는 주격 관계대명사 'who' 절과 문장 전체의 동사 'is'가 균형을 이루는 구조입니다."
  },
  {
    id: "L3-003",
    level: 3,
    context: "Student A: What did the history teacher say about the test?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ postponed.",
    chunks: ["professor", "explained", "that", "the", "exam", "was", "explain", "what"],
    answer: ["professor", "explained", "that", "the", "exam", "was"],
    explanation: "정답: professor explained that the exam was\n해설: 명사절 접속사 'that' 뒤에 '주어(the exam) + 동사(was)'의 완전한 절이 오는 전달 표현 구조입니다."
  },
  {
    id: "L3-004",
    level: 3,
    context: "Student A: Do we need to purchase physical books for this course?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ _____ _____ them.",
    chunks: ["wonder", "if", "we", "need", "to", "buy", "wonders", "that"],
    answer: ["wonder", "if", "we", "need", "to", "buy"],
    explanation: "정답: wonder if we need to buy\n해설: '~인지 궁금하다'라는 뜻의 'wonder if' 명사절 접속사 뒤에 '주어(we) + 동사(need to buy)'가 결합합니다."
  },
  {
    id: "L3-005",
    level: 3,
    context: "Student A: Did you like the history book I gave you?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ helpful.",
    chunks: ["book", "which", "you", "recommended", "was", "very", "who", "were"],
    answer: ["book", "which", "you", "recommended", "was", "very"],
    explanation: "정답: book which you recommended was very\n해설: 사물 명사 'The book'을 수식하는 목적격 관계대명사 'which'가 쓰이고, 전체 문장의 동사 'was'와 보어 'very (helpful)'가 연결됩니다."
  },
  {
    id: "L3-006",
    level: 3,
    context: "Student A: I need to locate the office of student affairs.",
    sentenceTemplate: "Student B: Can _____ _____ _____ _____ _____ _____ is?",
    chunks: ["you", "tell", "me", "where", "the", "office", "tells", "does"],
    answer: ["you", "tell", "me", "where", "the", "office"],
    explanation: "정답: you tell me where the office\n해설: 4형식 구조 'Can you tell me' 뒤에 간접의문문 '의문사(where) + 주어(the office) + 동사(is)'가 연결됩니다."
  },
  {
    id: "L3-007",
    level: 3,
    context: "Student A: Why did Jiwon miss the group meeting?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ unknown.",
    chunks: ["reason", "why", "he", "was", "absent", "is", "because", "are"],
    answer: ["reason", "why", "he", "was", "absent", "is"],
    explanation: "정답: reason why he was absent is\n해설: 명사 'The reason' 뒤에 관계부사 'why' 절이 수식하고, 전체 문장의 동사로 단수형 'is'를 선택합니다."
  },
  {
    id: "L3-008",
    level: 3,
    context: "Student A: Who is in charge of teaching the chemistry lab?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ _____ _____ class.",
    chunks: ["don't", "know", "who", "is", "teaching", "the", "doesn't", "whom"],
    answer: ["don't", "know", "who", "is", "teaching", "the"],
    explanation: "정답: don't know who is teaching the\n해설: 'I don't know' 뒤에 의문사이자 주어인 'who'가 이끄는 간접의문문절 'who + 동사(is teaching)'가 연결됩니다."
  },
  {
    id: "L3-009",
    level: 3,
    context: "Student A: Why was Minsoo talking to the professor after class?",
    sentenceTemplate: "Student B: He _____ _____ _____ _____ _____ _____ paper.",
    chunks: ["asked", "if", "he", "could", "submit", "the", "asks", "that"],
    answer: ["asked", "if", "he", "could", "submit", "the"],
    explanation: "정답: asked if he could submit the\n해설: 과거 동사 'asked' 뒤에 명사절 접속사 'if'(~인지 아닌지)가 오고 조동사 과거형 'could'를 이용한 절이 이어집니다."
  },
  {
    id: "L3-010",
    level: 3,
    context: "Student A: How did your group project presentation go?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ praised.",
    chunks: ["project", "that", "we", "did", "was", "highly", "who", "were"],
    answer: ["project", "that", "we", "did", "was", "highly"],
    explanation: "정답: project that we did was highly\n해설: 선행사 'The project'를 목적격 관계대명사 'that' 절이 수식하며, 전체 수동태 동사 'was highly (praised)'가 이어집니다."
  },
  {
    id: "L3-011",
    level: 3,
    context: "Student A: I want to enroll in the summer physics course.",
    sentenceTemplate: "Student B: Do _____ _____ _____ _____ _____ _____ starts?",
    chunks: ["you", "know", "when", "the", "registration", "officially", "does", "that"],
    answer: ["you", "know", "when", "the", "registration", "officially"],
    explanation: "정답: you know when the registration officially\n해설: 'Do you know' 뒤에 간접의문문 'when + 주어(the registration) + 부사(officially) + 동사(starts)'의 어순을 구성합니다."
  },
  {
    id: "L3-012",
    level: 3,
    context: "Student A: What happened to the biology club mentor?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ retired.",
    chunks: ["professor", "who", "guided", "our", "club", "has", "which", "have"],
    answer: ["professor", "who", "guided", "our", "club", "has"],
    explanation: "정답: professor who guided our club has\n해설: 주격 관계대명사 'who'가 수식하는 'The professor'가 3인칭 단수이므로, 완료 시제 동사로 'has'를 씁니다."
  },
  {
    id: "L3-013",
    level: 3,
    context: "Student A: Did you solve the difficult statistics assignment?",
    sentenceTemplate: "Student B: She _____ _____ _____ _____ _____ _____ it.",
    chunks: ["showed", "me", "how", "I", "could", "solve", "shows", "to"],
    answer: ["showed", "me", "how", "I", "could", "solve"],
    explanation: "정답: showed me how I could solve\n해설: 'show + 간접목적어(me) + 직접목적어(의문사절)' 구문으로, 'how + 주어 + 조동사과거 + 동사원형'을 배치합니다."
  },
  {
    id: "L3-014",
    level: 3,
    context: "Student A: Do you agree with the speaker's main argument?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ _____ _____ correct.",
    chunks: ["strongly", "believe", "that", "his", "theory", "is", "believes", "what"],
    answer: ["strongly", "believe", "that", "his", "theory", "is"],
    explanation: "정답: strongly believe that his theory is\n해설: 동사 'believe' 뒤에 명사절 접속사 'that'을 사용해 확신하는 의견 내용을 주어+동사의 완전한 절로 설명합니다."
  },
  {
    id: "L3-015",
    level: 3,
    context: "Student A: Why did you return your newly bought computer?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ broken.",
    chunks: ["laptop", "which", "I", "bought", "yesterday", "was", "who", "were"],
    answer: ["laptop", "which", "I", "bought", "yesterday", "was"],
    explanation: "정답: laptop which I bought yesterday was\n해설: 주어 'The laptop'을 관계대명사 'which'절이 뒤에서 수식하고, 전체 문장의 과거 동사인 'was'를 씁니다."
  },
  {
    id: "L3-016",
    level: 3,
    context: "Student A: I want to change my current engineering major.",
    sentenceTemplate: "Student B: Tell _____ _____ _____ _____ _____ _____ transfer.",
    chunks: ["me", "why", "you", "decided", "to", "make", "myself", "makes"],
    answer: ["me", "why", "you", "decided", "to", "make"],
    explanation: "정답: me why you decided to make\n해설: 명령문 'Tell me' 뒤에 간접의문문인 'why + 주어(you) + 동사(decided) + to부정사구(to make)'의 어순으로 구성합니다."
  },
  {
    id: "L3-017",
    level: 3,
    context: "Student A: Where is the physics seminar room located?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ old.",
    chunks: ["building", "where", "we", "meet", "is", "very", "which", "are"],
    answer: ["building", "where", "we", "meet", "is", "very"],
    explanation: "정답: building where we meet is very\n해설: 장소를 수식하는 관계부사 'where' 절이 선행사 'The building'을 꾸미며, 전체 단수 주어에 맞춰 'is very'로 이어집니다."
  },
  {
    id: "L3-018",
    level: 3,
    context: "Student A: Did you understand the database installation process?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ works.",
    chunks: ["manual", "explained", "how", "the", "new", "program", "explain", "that"],
    answer: ["manual", "explained", "how", "the", "new", "program"],
    explanation: "정답: manual explained how the new program\n해설: 'explained'의 목적어로 간접의문문 'how + 주어(the new program) + 동사(works)'가 결합합니다."
  },
  {
    id: "L3-019",
    level: 3,
    context: "Student A: Why are you looking at your classmate's note?",
    sentenceTemplate: "Student B: I _____ _____ _____ _____ _____ _____ yesterday.",
    chunks: ["forgot", "what", "the", "professor", "said", "in", "forget", "that"],
    answer: ["forgot", "what", "the", "professor", "said", "in"],
    explanation: "정답: forgot what the professor said in\n해설: 동사 'forgot'의 목적어로 선행사를 포함한 관계대명사 'what' 절이 와서 '교수가 말했던 것'의 맥락을 형성합니다."
  },
  {
    id: "L3-020",
    level: 3,
    context: "Student A: Did the astronomy seminar meet your expectations?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ inspiring.",
    chunks: ["lecture", "that", "he", "gave", "was", "deeply", "who", "were"],
    answer: ["lecture", "that", "he", "gave", "was", "deeply"],
    explanation: "정답: lecture that he gave was deeply\n해설: 선행사 'The lecture' 뒤에 목적격 관계대명사 'that' 절이 와서 수식하고, 전체 문장 동사 'was'와 부사 'deeply'가 연결됩니다."
  },

  // ==========================================
  // LEVEL 4 (20 Questions: Complex Conjunctions, 7-8 chunks)
  // ==========================================
  {
    id: "L4-001",
    level: 4,
    context: "Student A: Did the outdoor graduation finish safely despite the weather?",
    sentenceTemplate: "Student B: Despite _____ _____ _____ _____ _____ _____ _____ continued.",
    chunks: ["the", "sudden", "heavy", "rain", "the", "outdoor", "event", "although", "raining"],
    answer: ["the", "sudden", "heavy", "rain", "the", "outdoor", "event"],
    explanation: "정답: the sudden heavy rain the outdoor event\n해설: 양보 전치사 'Despite' 뒤에 명사구(the sudden heavy rain)가 오고, 이어서 주절 주어(the outdoor event)와 동사(continued)가 옵니다."
  },
  {
    id: "L4-002",
    level: 4,
    context: "Student A: I forgot to submit my registration form yesterday.",
    sentenceTemplate: "Student B: Unless _____ _____ _____ _____ _____ _____ _____ register.",
    chunks: ["you", "submit", "the", "document", "today", "you", "cannot", "if", "not"],
    answer: ["you", "submit", "the", "document", "today", "you", "cannot"],
    explanation: "정답: you submit the document today you cannot\n해설: 조건의 부정 접속사 'Unless'(~하지 않으면) 뒤에 절 'you submit the document today'가 오고, 주절 'you cannot (register)'가 옵니다."
  },
  {
    id: "L4-003",
    level: 4,
    context: "Student A: Where did you get this new dataset from?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ _____ paper.",
    chunks: ["research", "group", "formed", "last", "semester", "recently", "published", "forming", "has"],
    answer: ["research", "group", "formed", "last", "semester", "recently", "published"],
    explanation: "정답: research group formed last semester recently published\n해설: 주어인 'The research group' 뒤에 과거분사구인 'formed last semester'가 수식어로 붙고, 본동사 'recently published'가 연결됩니다."
  },
  {
    id: "L4-004",
    level: 4,
    context: "Student A: Why looks Minsoo so unhappy with his grade?",
    sentenceTemplate: "Student B: Although _____ _____ _____ _____ _____ _____ _____ test.",
    chunks: ["he", "studied", "extremely", "hard", "he", "failed", "the", "despite", "fails"],
    answer: ["he", "studied", "extremely", "hard", "he", "failed", "the"],
    explanation: "정답: he studied extremely hard he failed the\n해설: 접속사 'Although' 뒤에 주어+동사 절이 오고, 콤마 뒤 주절의 'he failed the'가 이어져 논리적 양보 문장을 이룹니다."
  },
  {
    id: "L4-005",
    level: 4,
    context: "Student A: I want to return this laptop. How is it done?",
    sentenceTemplate: "Student B: In _____ _____ _____ _____ _____ _____ _____ receipt.",
    chunks: ["order", "to", "receive", "a", "refund", "you", "must", "for", "receiving"],
    answer: ["order", "to", "receive", "a", "refund", "you", "must"],
    explanation: "정답: order to receive a refund you must\n해설: 목적을 나타내는 'In order to + 동사원형' 구문에 이어 주절 주어와 조동사 'you must'가 오는 짜임새입니다."
  },
  {
    id: "L4-006",
    level: 4,
    context: "Student A: Will the guest lecturer speak at the auditorium?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ _____ today.",
    chunks: ["professor", "who", "is", "famous", "for", "research", "will", "whom", "being"],
    answer: ["professor", "who", "is", "famous", "for", "research", "will"],
    explanation: "정답: professor who is famous for research will\n해설: 주어 'The professor'를 관계사절 'who is famous for research'가 수식하고, 전체 문장 조동사 'will'이 연결됩니다."
  },
  {
    id: "L4-007",
    level: 4,
    context: "Student A: Are we still going on the field trip tonight?",
    sentenceTemplate: "Student B: Provided _____ _____ _____ _____ _____ _____ _____ trip.",
    chunks: ["that", "the", "weather", "remains", "clear", "we", "will", "if", "remain"],
    answer: ["that", "the", "weather", "remains", "clear", "we", "will"],
    explanation: "정답: that the weather remains clear we will\n해설: '~라는 조건으로'를 뜻하는 접속사 'Provided that' 뒤에 절이 오고, 주절 'we will (go)'이 연결되는 형태입니다."
  },
  {
    id: "L4-008",
    level: 4,
    context: "Student A: I'm afraid I will fail the coming pop quiz.",
    sentenceTemplate: "Student B: Even _____ _____ _____ _____ _____ _____ _____ pass.",
    chunks: ["if", "you", "fail", "this", "quiz", "you", "can", "although", "fails"],
    answer: ["if", "you", "fail", "this", "quiz", "you", "can"],
    explanation: "정답: if you fail this quiz you can\n해설: 조건 양보 접속사 'Even if'(비록 ~일지라도) 뒤에 조건절과 주절 'you can (still pass)'를 위치시킵니다."
  },
  {
    id: "L4-009",
    level: 4,
    context: "Student A: The new science center looks massive.",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ _____ open.",
    chunks: ["building", "which", "cost", "millions", "of", "dollars", "is", "who", "costs"],
    answer: ["building", "which", "cost", "millions", "of", "dollars", "is"],
    explanation: "정답: building which cost millions of dollars is\n해설: 주어 'The building'을 목적격/주격 관계절 'which cost millions of dollars'가 수식하며, 문장 동사는 'is'입니다. ('cost'는 과거형)"
  },
  {
    id: "L4-010",
    level: 4,
    context: "Student A: Can I hand in the report a bit late?",
    sentenceTemplate: "Student B: As _____ _____ _____ _____ _____ _____ _____ fine.",
    chunks: ["long", "as", "you", "upload", "it", "today", "it", "far", "uploading"],
    answer: ["long", "as", "you", "upload", "it", "today", "it"],
    explanation: "정답: long as you upload it today it\n해설: 조건 접속사 'As long as'(~하기만 하면) 뒤에 절 'you upload it today'가 오고, 주절의 가주어 'it'이 연결됩니다."
  },
  {
    id: "L4-011",
    level: 4,
    context: "Student A: Why did they stay late in the chemistry lab?",
    sentenceTemplate: "Student B: Instead _____ _____ _____ _____ _____ _____ _____ library.",
    chunks: ["of", "going", "back", "home", "they", "went", "to", "to", "go"],
    answer: ["of", "going", "back", "home", "they", "went", "to"],
    explanation: "정답: of going back home they went to\n해설: 'Instead of'는 전치사이므로 뒤에 동명사 'going'이 와야 하고, 주절 'they went to'가 이어집니다."
  },
  {
    id: "L4-012",
    level: 4,
    context: "Student A: Who visited the modern art gallery yesterday?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ _____ museum.",
    chunks: ["students", "accompanied", "by", "their", "advising", "professor", "visited", "accompany", "advisor"],
    answer: ["students", "accompanied", "by", "their", "advising", "professor", "visited"],
    explanation: "정답: students accompanied by their advising professor visited\n해설: 주어 'The students'를 분사구 'accompanied by their advising professor'가 수식하고, 전체 문장의 동사 'visited'가 나옵니다."
  },
  {
    id: "L4-013",
    level: 4,
    context: "Student A: Why did they stop the science research project?",
    sentenceTemplate: "Student B: Since _____ _____ _____ _____ _____ _____ _____ canceled.",
    chunks: ["the", "financial", "funding", "was", "cut", "it", "was", "because", "cutting"],
    answer: ["the", "financial", "funding", "was", "cut", "it", "was"],
    explanation: "정답: the financial funding was cut it was\n해설: 이유 접속사 'Since' 뒤에 절(the financial funding was cut)이 오고, 주절의 수동태 형태 'it was (canceled)'가 옵니다."
  },
  {
    id: "L4-014",
    level: 4,
    context: "Student A: Who is going to welcome the incoming freshmen?",
    sentenceTemplate: "Student B: On _____ _____ _____ _____ _____ _____ _____ students.",
    chunks: ["behalf", "of", "the", "department", "I", "welcome", "all", "behalves", "welcomes"],
    answer: ["behalf", "of", "the", "department", "I", "welcome", "all"],
    explanation: "정답: behalf of the department I welcome all\n해설: '~을 대표하여'라는 뜻의 숙어 'On behalf of the department' 뒤에 주절 주어와 동사 'I welcome all'을 연결합니다."
  },
  {
    id: "L4-015",
    level: 4,
    context: "Student A: I am a music major. Do I have to take physics?",
    sentenceTemplate: "Student B: Regardless _____ _____ _____ _____ _____ _____ _____ class.",
    chunks: ["of", "your", "academic", "major", "you", "must", "take", "regard", "taking"],
    answer: ["of", "your", "academic", "major", "you", "must", "take"],
    explanation: "정답: of your academic major you must take\n해설: 전치사구 'Regardless of' 뒤에 명사구(your academic major)가 오고, 의무 조동사를 포함한 주절 'you must take'가 연결됩니다."
  },
  {
    id: "L4-016",
    level: 4,
    context: "Student A: Was the research presentation rescheduled?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ _____ August.",
    chunks: ["seminar", "originally", "planned", "for", "June", "was", "postponed", "planning", "has"],
    answer: ["seminar", "originally", "planned", "for", "June", "was", "postponed"],
    explanation: "정답: seminar originally planned for June was postponed\n해설: 주어 'The seminar' 뒤에 과거분사구인 'originally planned for June'이 꾸며주고, 본동사부 'was postponed'가 이어집니다."
  },
  {
    id: "L4-017",
    level: 4,
    context: "Student A: How many assignments do we have this week?",
    sentenceTemplate: "Student B: In _____ _____ _____ _____ _____ _____ _____ essay.",
    chunks: ["addition", "to", "the", "exams", "we", "write", "an", "add", "writing"],
    answer: ["addition", "to", "the", "exams", "we", "write", "an"],
    explanation: "정답: addition to the exams we write an\n해설: '~에 더해서'를 뜻하는 전치사구 'In addition to' 뒤에 명사구(the exams)가 오고, 주절 'we write an (essay)'가 결합합니다."
  },
  {
    id: "L4-018",
    level: 4,
    context: "Student A: The project deadline is tomorrow at noon.",
    sentenceTemplate: "Student B: Unless _____ _____ _____ _____ _____ _____ _____ it.",
    chunks: ["he", "extends", "the", "due", "date", "we", "cannot", "if", "extending"],
    answer: ["he", "extends", "the", "due", "date", "we", "cannot"],
    explanation: "정답: he extends the due date we cannot\n해설: 'Unless'(~하지 않는 한) 뒤에 주어와 단수 동사 'he extends' 절이 오고, 불가함을 의미하는 주절 'we cannot (finish)'이 완성됩니다."
  },
  {
    id: "L4-019",
    level: 4,
    context: "Student A: Who spoke to the administration about dormitory policies?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ _____ petition.",
    chunks: ["student", "council", "represented", "by", "its", "president", "submitted", "represents", "submitting"],
    answer: ["student", "council", "represented", "by", "its", "president", "submitted"],
    explanation: "정답: student council represented by its president submitted\n해설: 주어 'The student council'을 수식하는 과거분사구 'represented by its president'에 이어 과거동사 'submitted'가 연결됩니다."
  },
  {
    id: "L4-020",
    level: 4,
    context: "Student A: Which method is better for analyzing data?",
    sentenceTemplate: "Student B: While _____ _____ _____ _____ _____ _____ _____ logical.",
    chunks: ["the", "first", "method", "is", "popular", "this", "is", "whereas", "being"],
    answer: ["the", "first", "method", "is", "popular", "this", "is"],
    explanation: "정답: the first method is popular this is\n해설: 대조의 접속사 'While'이 이끄는 부사절과 주절 주어와 동사 'this is'가 결합하여 논리를 완성합니다."
  },

  // ==========================================
  // LEVEL 5 (20 Questions: Advanced Academic, 8-10 chunks)
  // ==========================================
  {
    id: "L5-001",
    level: 5,
    context: "Professor: When did the laboratory group start drafts of the final report?",
    sentenceTemplate: "Student: Having _____ _____ _____ _____ _____ _____ _____ _____ data.",
    chunks: ["completed", "the", "experiments", "the", "researchers", "began", "to", "analyze", "complete", "analyzing"],
    answer: ["completed", "the", "experiments", "the", "researchers", "began", "to", "analyze"],
    explanation: "정답: completed the experiments the researchers began to analyze\n해설: 완료 분사구문 'Having completed the experiments' 뒤에 주절 주어 'the researchers'와 동사구 'began to analyze'가 순차적으로 결합합니다."
  },
  {
    id: "L5-002",
    level: 5,
    context: "Professor: Do these research findings support the established physics models?",
    sentenceTemplate: "Student: The _____ _____ _____ _____ _____ _____ _____ _____ models.",
    chunks: ["data", "obtained", "from", "the", "investigation", "seem", "to", "contradict", "obtaining", "seems"],
    answer: ["data", "obtained", "from", "the", "investigation", "seem", "to", "contradict"],
    explanation: "정답: data obtained from the investigation seem to contradict\n해설: 'data'는 일반적으로 학술 논문에서 복수 취급하므로 동사로 'seem'을 쓰고, 과거분사구인 'obtained from...'의 수식을 받습니다."
  },
  {
    id: "L5-003",
    level: 5,
    context: "Student A: Did the campus protest affect the board of trustees' decision?",
    sentenceTemplate: "Student B: Not _____ _____ _____ _____ _____ _____ _____ _____ classes.",
    chunks: ["only", "did", "students", "protest", "the", "policy", "but", "they", "protested", "also"],
    answer: ["only", "did", "students", "protest", "the", "policy", "but", "they"],
    explanation: "정답: only did students protest the policy but they\n해설: 부정어구 'Not only'가 문두에 와서 '조동사(did) + 주어(students) + 동사원형(protest)'의 도치가 발생하고, 상관접속사 'but they (also)'가 이어집니다."
  },
  {
    id: "L5-004",
    level: 5,
    context: "Student A: Why is the old observatory closed to visitors?",
    sentenceTemplate: "Student B: Built _____ _____ _____ _____ _____ _____ _____ _____ repairs.",
    chunks: ["in", "the", "late", "century", "the", "observatory", "now", "requires", "building", "require"],
    answer: ["in", "the", "late", "century", "the", "observatory", "now", "requires"],
    explanation: "정답: in the late century the observatory now requires\n해설: 수동의 의미를 갖는 과거분사 구문 'Built in the late century'가 주어 'the observatory'를 수식하며, 단수 현재 동사인 'requires'를 씁니다."
  },
  {
    id: "L5-005",
    level: 5,
    context: "Student A: What feedback did the advisor give you on your draft?",
    sentenceTemplate: "Student B: She _____ _____ _____ _____ _____ _____ _____ _____ now.",
    chunks: ["suggested", "rewriting", "the", "thesis", "rather", "than", "defending", "it", "rewrite", "defense"],
    answer: ["suggested", "rewriting", "the", "thesis", "rather", "than", "defending", "it"],
    explanation: "정답: suggested rewriting the thesis rather than defending it\n해설: 동사 'suggest'는 동명사 목적어를 취하므로 'rewriting'이 오며, 병렬 구조 'rather than' 뒤에도 동명사 'defending'이 와야 합니다."
  },
  {
    id: "L5-006",
    level: 5,
    context: "Professor: What are the safety regulations for the biochemical lab?",
    sentenceTemplate: "Student: Under _____ _____ _____ _____ _____ _____ _____ _____ permission.",
    chunks: ["no", "circumstances", "should", "students", "enter", "the", "room", "without", "any", "enters"],
    answer: ["no", "circumstances", "should", "students", "enter", "the", "room", "without"],
    explanation: "정답: no circumstances should students enter the room without\n해설: 부정어구 'Under no circumstances'가 문두에 올 때 '조동사(should) + 주어(students) + 동사원형(enter)'의 도치 어순이 만들어집니다."
  },
  {
    id: "L5-007",
    level: 5,
    context: "Student A: Did Jane manage to write the term paper without mistakes?",
    sentenceTemplate: "Student B: Having _____ _____ _____ _____ _____ _____ _____ _____ questions.",
    chunks: ["read", "the", "syllabus", "carefully", "she", "answered", "all", "the", "reading", "answers"],
    answer: ["read", "the", "syllabus", "carefully", "she", "answered", "all", "the"],
    explanation: "정답: read the syllabus carefully she answered all the\n해설: 완료 분사구문 'Having read the syllabus...' 뒤에 주어 'she'와 과거동사 'answered', 목적어 명사구 'all the (questions)'가 자연스럽게 배열됩니다."
  },
  {
    id: "L5-008",
    level: 5,
    context: "Professor: What was the main purpose of updating the student code?",
    sentenceTemplate: "Student: The _____ _____ _____ _____ _____ _____ _____ _____ integrity.",
    chunks: ["policy", "was", "designed", "to", "prevent", "plagiarism", "and", "encourage", "design", "preventing"],
    answer: ["policy", "was", "designed", "to", "prevent", "plagiarism", "and", "encourage"],
    explanation: "정답: policy was designed to prevent plagiarism and encourage\n해설: 'was designed to' 부정사 뒤에 'prevent'와 'encourage' 동사원형 두 개가 'and'에 의해 병렬 연결됩니다."
  },
  {
    id: "L5-009",
    level: 5,
    context: "Professor: Did the control group show any differences in behavior?",
    sentenceTemplate: "Student: Compared _____ _____ _____ _____ _____ _____ _____ _____ results.",
    chunks: ["to", "the", "control", "group", "the", "treated", "subjects", "showed", "comparing", "shows"],
    answer: ["to", "the", "control", "group", "the", "treated", "subjects", "showed"],
    explanation: "정답: to the control group the treated subjects showed\n해설: '~와 비교하여'라는 수동 분사구문 'Compared to...'로 문장을 열고, 주어 'the treated subjects'와 동사 'showed'가 위치합니다."
  },
  {
    id: "L5-010",
    level: 5,
    context: "Student A: We missed the application deadline for study abroad.",
    sentenceTemplate: "Student B: Had _____ _____ _____ _____ _____ _____ _____ _____ earlier.",
    chunks: ["we", "known", "the", "exact", "date", "we", "would", "have", "knew", "will"],
    answer: ["we", "known", "the", "exact", "date", "we", "would", "have"],
    explanation: "정답: we known the exact date we would have\n해설: 가정법 과거완료에서 'If'가 생략되어 'Had we known...'의 도치 형태가 이루어지고, 주절에는 'would have + p.p.'가 쓰입니다."
  },
  {
    id: "L5-011",
    level: 5,
    context: "Professor: What is crucial to understanding biological evolution?",
    sentenceTemplate: "Student: To _____ _____ _____ _____ _____ _____ _____ _____ context.",
    chunks: ["fully", "understand", "the", "process", "one", "must", "examine", "its", "understanding", "examines"],
    answer: ["fully", "understand", "the", "process", "one", "must", "examine", "its"],
    explanation: "정답: fully understand the process one must examine its\n해설: 부사 'fully'를 동반한 to부정사구가 목적을 나타내고, 주절 'one must + 동사원형(examine) + 소유격(its)'가 옵니다."
  },
  {
    id: "L5-012",
    level: 5,
    context: "Student A: What is the main thesis of Dr. Carter's new research?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ _____ _____ systems.",
    chunks: ["study", "focuses", "on", "how", "rising", "temperatures", "affect", "marine", "focus", "affects"],
    answer: ["study", "focuses", "on", "how", "rising", "temperatures", "affect", "marine"],
    explanation: "정답: study focuses on how rising temperatures affect marine\n해설: 단수 동사 'focuses' 뒤에 전치사 'on'과 간접의문문 'how + 복수주어(rising temperatures) + 복수동사(affect) + 형용사(marine)'가 연결됩니다."
  },
  {
    id: "L5-013",
    level: 5,
    context: "Student A: Is Kelly doing well in her academic classes?",
    sentenceTemplate: "Student B: Not _____ _____ _____ _____ _____ _____ _____ _____ instrument.",
    chunks: ["only", "is", "she", "an", "excellent", "student", "but", "she", "does", "also"],
    answer: ["only", "is", "she", "an", "excellent", "student", "but", "she"],
    explanation: "정답: only is she an excellent student but she\n해설: 부정어구 'Not only' 뒤에 주어-be동사가 도치되어 'is she'가 되며, 'but she (also)'가 뒤이어 문장을 받습니다."
  },
  {
    id: "L5-014",
    level: 5,
    context: "Professor: How should we evaluate this social conflict?",
    sentenceTemplate: "Student: Seen _____ _____ _____ _____ _____ _____ _____ _____ problematic.",
    chunks: ["from", "this", "historical", "perspective", "the", "issue", "becomes", "highly", "seeing", "become"],
    answer: ["from", "this", "historical", "perspective", "the", "issue", "becomes", "highly"],
    explanation: "정답: from this historical perspective the issue becomes highly\n해설: 과거분사구문 'Seen from...' 뒤에 주절 주어인 'the issue'와 단수동사 'becomes', 보어 'highly (problematic)'가 나열됩니다."
  },
  {
    id: "L5-015",
    level: 5,
    context: "Student A: Why did the board reject the campus building project proposal?",
    sentenceTemplate: "Student B: The _____ _____ _____ _____ _____ _____ _____ _____ plans.",
    chunks: ["board", "rejected", "the", "proposal", "citing", "a", "lack", "of", "reject", "cite"],
    answer: ["board", "rejected", "the", "proposal", "citing", "a", "lack", "of"],
    explanation: "정답: board rejected the proposal citing a lack of\n해설: 주어와 동사 뒤에 '~을 언급하며'라는 동시동작의 분사구문 'citing'과 'a lack of'(~의 부족)가 차례대로 이어집니다."
  },
  {
    id: "L5-016",
    level: 5,
    context: "Student A: Can I take the advanced research seminar in my freshman year?",
    sentenceTemplate: "Student B: Only _____ _____ _____ _____ _____ _____ _____ _____ seminar.",
    chunks: ["after", "completing", "the", "prerequisites", "can", "you", "register", "for", "complete", "are"],
    answer: ["after", "completing", "the", "prerequisites", "can", "you", "register", "for"],
    explanation: "정답: after completing the prerequisites can you register for\n해설: 'Only + 전치사구'가 문장 앞에 오면 주절에 도치가 일어나 조동사 'can'이 주어 'you'보다 앞에 옵니다."
  },
  {
    id: "L5-017",
    level: 5,
    context: "Student A: Why did the main speaker arrive after the dinner started?",
    sentenceTemplate: "Student B: Having _____ _____ _____ _____ _____ _____ _____ _____ schedule.",
    chunks: ["been", "delayed", "by", "heavy", "traffic", "he", "missed", "the", "delaying", "has"],
    answer: ["been", "delayed", "by", "heavy", "traffic", "he", "missed", "the"],
    explanation: "정답: been delayed by heavy traffic he missed the\n해설: 완료 수동태 분사구문 'Having been delayed by...'가 앞서고, 주어 'he'와 과거동사 'missed'가 주절을 구성합니다."
  },
  {
    id: "L5-018",
    level: 5,
    context: "Professor: What is the main argument of this economics paper?",
    sentenceTemplate: "Student: The _____ _____ _____ _____ _____ _____ _____ _____ development.",
    chunks: ["author", "argues", "that", "sustained", "growth", "is", "directly", "linked", "argue", "linking"],
    answer: ["author", "argues", "that", "sustained", "growth", "is", "directly", "linked"],
    explanation: "정답: author argues that sustained growth is directly linked\n해설: 단수 동사 'argues'와 명사절 접속사 'that' 뒤에 '주어(sustained growth) + be동사(is) + 부사 + 과거분사(directly linked)'가 연결됩니다."
  },
  {
    id: "L5-019",
    level: 5,
    context: "Student A: Is Sarah going to drop the organic chemistry course?",
    sentenceTemplate: "Student B: Rather _____ _____ _____ _____ _____ _____ _____ _____ tutor.",
    chunks: ["than", "dropping", "the", "class", "she", "chose", "to", "hire", "drop", "hiring"],
    answer: ["than", "dropping", "the", "class", "she", "chose", "to", "hire"],
    explanation: "정답: than dropping the class she chose to hire\n해설: 병렬 구조로 쓰인 'Rather than' 뒤에 동명사 'dropping'이 오고, 주절 동사 'chose' 뒤에 목적어로 to부정사 'to hire'가 쓰입니다."
  },
  {
    id: "L5-020",
    level: 5,
    context: "Professor: What is the primary focus of the new university program?",
    sentenceTemplate: "Student: The _____ _____ _____ _____ _____ _____ _____ _____ writing.",
    chunks: ["program", "is", "aimed", "at", "fostering", "independent", "thought", "and", "aim", "foster"],
    answer: ["program", "is", "aimed", "at", "fostering", "independent", "thought", "and"],
    explanation: "정답: program is aimed at fostering independent thought and\n해설: 'be aimed at' 전치사 'at'의 목적어로 동명사 'fostering'이 오고, 'independent thought'와 'creative writing'이 'and'로 대등하게 묶입니다."
  }
];
