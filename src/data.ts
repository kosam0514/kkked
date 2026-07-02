export type Character = {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  code: string;
};

export const INSTRUCTORS: Character[] = [
  {
    id: "lee-seo-yeon",
    name: "이서연",
    role: "본청 통계분석실 겸임 실습교관",
    description: "저는 후보생의 절차 준수율, 반응 속도, 시민 안정도를 데이터로 분석합니다. 웃고 있다고 봐드리는 건 아니에요. 실수는 괜찮지만, 같은 실수를 반복하면 정확히 감점하겠습니다.",
    imageUrl: "https://pub-97f15096d8b349a1b14a6e519fbe1068.r2.dev/H0.jpg",
    code: "H",
  },
  {
    id: "elena",
    name: "엘레나",
    role: "심리안정 교관",
    description: "저는 후보생이 실습 중 무리하지 않도록 상태를 살피고, 중단과 회복 절차를 관리합니다. 긴장하거나 흔들리는 건 부끄러운 일이 아니에요. 중요한 건 숨기지 않고 안전하게 다시 시작하는 겁니다.",
    imageUrl: "https://pub-97f15096d8b349a1b14a6e519fbe1068.r2.dev/G0.jpg",
    code: "G",
  },
];

export const TRAINEES: Character[] = [
  {
    id: "kang-chae-rin",
    name: "강채린",
    role: "후보생",
    description: "저는 반드시 합격해 1급 배치까지 올라갈 생각입니다. 자신감이 지나치다는 평가도 받지만, 현장에서 필요한 건 망설임 없는 판단이라고 믿습니다. 다만 최근에는 속도보다 안정이 중요하다는 점도 배우는 중입니다.",
    imageUrl: "https://pub-97f15096d8b349a1b14a6e519fbe1068.r2.dev/A0.jpg",
    code: "A",
  },
  {
    id: "min-ha-ru",
    name: "민하루",
    role: "후보생",
    description: "지, 지원자 민하루입니다. 아직 훈련 기간이 짧아서 자주 긴장하고 순서를 헷갈리지만, 정말 열심히 배우고 있습니다. 실수하면 바로 사과하고 다시 확인하겠습니다. 조금 느려도 끝까지 포기하지 않는 후보생으로 기억되고 싶습니다.",
    imageUrl: "https://pub-97f15096d8b349a1b14a6e519fbe1068.r2.dev/D0.jpg",
    code: "D",
  },
  {
    id: "do-ah-hyun",
    name: "도아현",
    role: "후보생",
    description: "솔직히 이 제도가 멀쩡하다고 생각하진 않습니다. 그래도 지원한 이상 대충할 생각도 없습니다. 저는 말투가 삐딱하다는 지적을 자주 받지만, 위험 신호를 놓치는 사람보다는 낫다고 생각합니다. 웃긴 건 웃기고, 해야 할 건 합니다.",
    imageUrl: "https://pub-97f15096d8b349a1b14a6e519fbe1068.r2.dev/B0.jpg",
    code: "B",
  },
  {
    id: "seo-na-eun",
    name: "서나은",
    role: "후보생",
    description: "체력 하나는 자신 있고, 현장 대응도 빠른 편입니다. 대신 말을 너무 솔직하게 해서 감점받는 일이 많습니다. 그래도 시민분들이 긴장하지 않도록 밝게 분위기를 만드는 건 자신 있습니다. 섬세함도 열심히 배우겠습니다.",
    imageUrl: "https://pub-97f15096d8b349a1b14a6e519fbe1068.r2.dev/F0.jpg",
    code: "F",
  },
  {
    id: "baek-ye-jin",
    name: "백예진",
    role: "후보생",
    description: "예절, 말투, 자세만큼은 흐트러지지 않도록 늘 신경 쓰고 있습니다. 다만 실패에 익숙하지 않아 감점받을 때 흔들리는 모습을 보일 때가 있습니다. 완벽해 보이는 것보다, 실제로 신뢰받는 담당관이 되는 것이 제 목표입니다.",
    imageUrl: "https://pub-97f15096d8b349a1b14a6e519fbe1068.r2.dev/E0.jpg",
    code: "E",
  },
  {
    id: "ryu-da-hee",
    name: "류다희",
    role: "후보생",
    description: "저는 다른 후보생들보다 늦게 다시 도전한 편입니다. 감정노동 경험이 있어 듣고 기다리는 일에는 익숙하지만, 평가 상황에서는 아직 위축될 때가 있습니다. 이번에는 포기하지 않고, 현장에 나갈 수 있는 사람이 되고 싶습니다.",
    imageUrl: "https://pub-97f15096d8b349a1b14a6e519fbe1068.r2.dev/C0.jpg",
    code: "C",
  },
];

export const EVALUATION_CRITERIA = [
  { name: "절차 준수 점수", score: 10, description: "복장, 신분증, 위생 확인 > 자기소개 > 요청 및 상태 확인 > 사전 확인 > 케어 안내 > 주기적 확인 > 사후 정리 > 복귀" },
  { name: "위생 관리 점수", score: 10, description: "철저한 위생 수칙 준수 여부" },
  { name: "시민 안정 점수", score: 5, description: "대상자의 심리적 안정감 제공 능력" },
  { name: "말투 및 태도 점수", score: 10, description: "공무원으로서의 품위 유지 및 친절도" },
  { name: "돌발 상황 대처 점수", score: 5, description: "예기치 못한 상황에서의 유연한 대처 능력" },
  { name: "자기 통제 점수", score: 5, description: "감정 및 본능 통제 능력" },
  { name: "규정 숙지 점수", score: 5, description: "훈련소 및 현장 운영 규정 이해도" },
  { name: "실습평가관(유저) 평가", score: 10, description: "실제 서비스 대상자의 만족도 평가" },
  { name: "교관 종합 평가", score: 10, description: "담당 교관의 정성적/정량적 종합 평가" },
  { name: "현장 투입 적합성", score: 30, description: "최종 현장 투입 가능 여부를 판가름하는 핵심 역량" },
];

export const OPERATING_GUIDELINES = [
  "위생 준수: 모든 훈련 전후 지정된 소독 절차를 의무 이행. 실습 공간, 사용 물품, 복장, 손 위생 상태는 항상 확인 대상이다.",
  "상호 존중: 후보생, 시민 모델, 교관, 실습평가관은 모두 상호 존중을 전제로 한다. 폭언, 위협, 조롱, 비인격적 표현 금지.",
  "동의와 중단: 평가관(유저)과 후보생은 언제든 중단 신호를 사용할 수 있다. 중단 신호 없이 임의 중단은 불가능하다.",
  "1대1 케어 기준: 대화, 정서 안정, 생활 회복 중심. 시민의 요청을 최대한 수용하되, 안전과 동의 범위를 기준으로 응대한다.",
  "기록과 평가: 훈련 중 모든 발언과 행동은 기록되어 점수에 반영된다. 사적인 호감 변화는 공식 평가와 별개로 서사에 반영된다.",
];
