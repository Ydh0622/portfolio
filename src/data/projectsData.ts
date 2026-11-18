export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Team Project' | 'Desktop App' | 'Web Utility';
  period: string;
  team: string;
  role: string;
  description: string;
  imageUrl?: string;
  themeColor: string;
  techStack: string[];
  architecture: string[];
  features: string[];
  troubleshooting: {
    problem: string;
    solution: string;
    result: string;
  }[];
  githubUrl: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'lgu-freetalk',
    title: 'LG U+ 프리톡 (상부상조)',
    subtitle: '파편화된 상담 대화와 메타데이터를 통합 관리하는 상담원 전용 대시보드 서비스',
    category: 'Team Project',
    period: '2026.02.04 ~ 2026.03.19 (6주)',
    team: '7명 (프론트엔드 전담 구현)',
    role: '서비스 전체 UI/UX 설계 및 기능 전담 구현, 초기 프론트엔드 환경 설정',
    description:
      'LG 유플러스의 상담 업무 환경을 가정하여, 수많은 상담 이력 중 필요한 정보를 키워드나 유형별로 즉각 필터링하고 고객의 사전 입력 정보를 실시간으로 연동해 상담 대기 시간을 단축시키는 통합 솔루션입니다.',
    themeColor: 'from-pink-600 to-indigo-700',
    techStack: [
      'React 18',
      'TypeScript',
      'Vite',
      'React Router v7',
      'Zustand',
      'Vanilla Extract',
      'Axios',
      '@react-oauth/google',
      'Lucide React',
    ],
    architecture: [
      '사용자 역할별 도메인 분리: 상담사 업무 공간과 고객용 채널(customer)을 디렉터리 수준으로 분리하여 권한 제어 및 확장성 확보',
      '레이어 엄격 분리: UI 로직(pages/components), 전역 상태(store), API 호출(api), 타입 정의(types)를 분리해 유지보수 효율 극대화',
      '정적 타이핑 및 스타일 안정성: API 응답/Props 타입 사전 정의 및 Vanilla Extract 도입으로 런타임 에러 차단',
    ],
    features: [
      '대시보드-실시간 상담-이력 검색으로 이어지는 상담원 업무 프로세스 전담 구현',
      '고객이 대기 중 체크한 사전 FAQ 및 서류 준비 현황을 상담사 화면으로 실시간 전송·출력하는 데이터 브릿지 구현',
      '고객 성향 키워드 태그 시각화 및 나의 메모, 실시간 키워드 등 위젯 형태의 대시보드 UI 구현',
      '수만 건의 이력 데이터 중 필요한 정보를 빠르게 추출하는 멀티 필터링 및 페이지네이션 구현',
    ],
    troubleshooting: [
      {
        problem:
          '상담사의 업무 상태(업무 시작/정지) 변화가 상담 수락 여부 등 여러 하위 컴포넌트와 페이지에 걸쳐 복잡하게 공유되어야 하는 문제',
        solution:
          'Zustand를 활용해 상담사 상태 및 실시간 상담 데이터를 전역 스토어로 설계하여 Prop Drilling 방지 및 단일 데이터 흐름 구축',
        result:
          '페이지 간 전환 시에도 데이터 누락 없는 안정적인 정보 전달 보장 및 코드 복잡도 감소',
      },
      {
        problem:
          '대량의 상담 이력 리스트(수만 건 가정) 조회 및 렌더링 시 발생할 수 있는 브라우저 성능 저하 우려',
        solution:
          '상담 카테고리 및 담당자별 멀티 필터링 로직을 설계하고 페이지네이션(Pagination)을 적용하여 렌더링 부하 분산',
        result: '대용량 데이터 환경에서도 쾌적한 검색 속도와 즉각적인 UI 응답성 확보',
      },
    ],
    githubUrl: 'https://github.com/LG-URECA-3',
    demoUrl: 'https://shorturl.at/LVDIU',
  },
  {
    id: 'file-cleaner',
    title: 'File Cleaner',
    subtitle: '자동 파일 분류, 미리보기 및 복원 기능을 제공하는 Electron 데스크톱 애플리케이션',
    category: 'Desktop App',
    period: '2026.11 (개인 프로젝트)',
    team: '1명 (100% 개인 개발)',
    role: '기획, UI/UX 설계, 프론트엔드 및 Electron 메인 프로세스 연동 전담',
    description:
      '웹 브라우저의 한계를 넘어 로컬 환경의 복잡한 파일들을 확장자 및 규칙에 따라 자동으로 분류하고, 실수로 이동된 파일을 되돌리기(Undo) 및 복원할 수 있는 실용적인 데스크톱 유틸리티 앱입니다.',
    themeColor: 'from-indigo-600 to-slate-800',
    techStack: ['React 19', 'TypeScript', 'Electron', 'Vite', 'Tailwind CSS', 'Lucide React'],
    architecture: [
      '프로세스 분리 설계: UI 렌더링을 담당하는 React(렌더러 프로세스)와 로컬 파일 시스템을 제어하는 Node.js(메인 프로세스) 역할 분리',
      '컴포넌트 모듈화: 파일 리스트, 미리보기 모달(Preview Modal), 실행 취소 히스토리 등 기능별 컴포넌트 독립 설계',
    ],
    features: [
      '지정된 폴더 내 파일들의 확장자 및 규칙 기반 자동 분류 기능',
      '실수로 분류된 작업을 즉시 되돌리는 실행 취소(Undo) 및 복원(Restore) 시스템',
      '파일을 직접 열지 않고도 내용을 확인하는 인앱 미리보기 모달(Preview Modal) 구현',
      '시스템 트레이(System Tray) 백그라운드 상주 및 작업 완료 실시간 알림 제공',
    ],
    troubleshooting: [
      {
        problem:
          '렌더러 프로세스(React)에서 로컬 운영체제의 파일 시스템에 직접 접근할 때 발생하는 보안 및 권한 제어 문제',
        solution:
          'Electron의 Preload 스크립트와 IPC(Inter-Process Communication) 통신 채널을 구축하여 허용된 파일 작업만 비동기로 안전하게 수행하도록 설계',
        result:
          '보안성을 유지하면서도 로컬 파일 이동·복원 결과를 UI에 즉각 반영하는 안정적인 데스크톱 환경 구축',
      },
      {
        problem:
          '다수의 파일을 일괄 이동한 직후 사용자가 실수를 인지했을 때 개별 파일을 일일이 원래 경로로 되돌리기 번거로운 UX 한계',
        solution:
          '파일 이동 작업 시 이전 경로와 변경 경로 메타데이터를 히스토리 상태로 기록하는 Undo/Restore 로직 구현',
        result:
          '클릭 한 번으로 직전 분류 작업을 안전하게 롤백할 수 있어 사용자의 심리적 안정감 및 앱 실용성 극대화',
      },
    ],
    githubUrl: 'https://github.com/Ydh0622/file-cleaner',
  },
];