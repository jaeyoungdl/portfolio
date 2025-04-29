export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  image?: string;
  features: string[];
  architecture?: string;
  backendFramework: 'NestJS' | 'FastAPI' | 'Both';
  category: 'API' | 'Web App' | 'Microservices' | 'DevOps' | 'Database';
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: 'ecommerce-api',
    title: 'E-Commerce API',
    description: '대규모 이커머스 플랫폼을 위한 확장 가능한 RESTful API 서비스입니다. 마이크로서비스 아키텍처를 사용하여 구현했으며, 주문 처리, 제품 관리, 사용자 인증 기능을 포함합니다.',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'Jest'],
    githubUrl: 'https://github.com/yourusername/ecommerce-api',
    features: [
      '사용자 인증 및 권한 관리 (JWT)',
      '제품 카탈로그 및 재고 관리',
      '주문 처리 및 결제 시스템 연동',
      '캐싱 전략을 통한 성능 최적화',
      '마이크로서비스 간 통신 (RabbitMQ)'
    ],
    architecture: 'Microservices',
    backendFramework: 'NestJS',
    category: 'API',
    highlights: [
      '초당 1000+ 요청 처리',
      '99.9% 업타임 달성',
      '마이크로서비스 아키텍처 구현'
    ]
  },
  {
    id: 'realtime-monitoring',
    title: '실시간 시스템 모니터링 대시보드',
    description: '대규모 인프라를 위한 실시간 모니터링 시스템입니다. 시스템 메트릭, 로그, 알림을 통합하여 관리할 수 있는 대시보드를 제공합니다.',
    technologies: ['FastAPI', 'Python', 'PostgreSQL', 'TimescaleDB', 'Redis', 'WebSockets', 'React'],
    githubUrl: 'https://github.com/yourusername/realtime-monitoring',
    demoUrl: 'https://monitoring-demo.example.com',
    features: [
      '실시간 메트릭 수집 및 시각화',
      '시스템 이벤트 및 로그 통합',
      '사용자 정의 알림 및 임계값 설정',
      '이상 탐지 및 자동 스케일링 제안',
      'WebSocket을 통한 실시간 업데이트'
    ],
    architecture: 'Monolithic with WebSocket integration',
    backendFramework: 'FastAPI',
    category: 'Web App',
    highlights: [
      '밀리초 단위의 실시간 업데이트',
      '대규모 시계열 데이터 효율적 처리',
      'AI 기반 이상 탐지 알고리즘'
    ]
  },
  {
    id: 'auth-service',
    title: '통합 인증 마이크로서비스',
    description: '다양한 서비스에서 재사용할 수 있는 인증 및 권한 관리 마이크로서비스입니다. OAuth2, JWT, SAML 등 다양한 인증 방식을 지원합니다.',
    technologies: ['NestJS', 'TypeScript', 'MongoDB', 'Redis', 'Docker', 'OAuth2', 'JWT'],
    githubUrl: 'https://github.com/yourusername/auth-service',
    features: [
      '다양한 인증 방식 지원 (OAuth2, JWT, SAML)',
      '역할 기반 권한 관리',
      'API 키 관리 및 레이트 리밋팅',
      '다중 테넌트 지원',
      '세션 관리 및 토큰 갱신'
    ],
    architecture: 'Microservice',
    backendFramework: 'NestJS',
    category: 'Microservices',
    highlights: [
      '보안 취약점 제로 달성',
      '수백 개의 클라이언트 서비스 지원',
      '99.99% 가용성'
    ]
  },
  {
    id: 'data-pipeline',
    title: '실시간 데이터 파이프라인',
    description: '대량의 데이터를 실시간으로 수집, 변환, 저장하는 파이프라인 시스템입니다. 이벤트 기반 아키텍처를 사용하여 확장성과 신뢰성을 보장합니다.',
    technologies: ['FastAPI', 'Python', 'Kafka', 'Elasticsearch', 'Docker', 'Airflow', 'AWS'],
    githubUrl: 'https://github.com/yourusername/data-pipeline',
    features: [
      '이벤트 스트림 처리 및 변환',
      '데이터 정제 및 검증',
      '다양한 데이터 소스 통합',
      '배치 및 스트리밍 처리 지원',
      '데이터 품질 모니터링'
    ],
    architecture: 'Event-driven microservices',
    backendFramework: 'FastAPI',
    category: 'Database',
    highlights: [
      '일 10억+ 이벤트 처리',
      '지연시간 100ms 이하',
      '높은 데이터 정확도'
    ]
  },
  {
    id: 'api-gateway',
    title: 'API 게이트웨이 및 서비스 메시',
    description: '마이크로서비스 환경을 위한 API 게이트웨이 및 서비스 메시 솔루션입니다. 라우팅, 로드밸런싱, 서킷브레이킹, 인증 등의 기능을 제공합니다.',
    technologies: ['NestJS', 'FastAPI', 'TypeScript', 'Python', 'Docker', 'Kubernetes', 'Istio'],
    githubUrl: 'https://github.com/yourusername/api-gateway',
    features: [
      '동적 라우팅 및 로드밸런싱',
      '서킷브레이킹 및 폴백',
      'API 키 관리 및 레이트 리밋팅',
      '요청/응답 변환 및 검증',
      '분산 트레이싱 및 모니터링'
    ],
    architecture: 'Service Mesh',
    backendFramework: 'Both',
    category: 'DevOps',
    highlights: [
      '초당 10,000+ 요청 처리',
      '지연시간 10ms 이하',
      '모든 서비스에 대한 통합 관리'
    ]
  }
]; 