export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  icon?: string;
  level: 1 | 2 | 3 | 4 | 5; // 1: 기초, 5: 전문가
  description?: string;
}

export const skills: Skill[] = [
  {
    category: '백엔드 프레임워크',
    items: [
      {
        name: 'NestJS',
        level: 5,
        description: '마이크로서비스 아키텍처, 인증 시스템, RESTful API 등 다양한 백엔드 서비스 개발에 활용'
      },
      {
        name: 'FastAPI',
        level: 5,
        description: '고성능 비동기 API 개발, 데이터 파이프라인, 실시간 서비스 구현에 활용'
      },
      {
        name: 'Express.js',
        level: 4,
        description: '가볍고 유연한 웹 서버 구현에 활용'
      },
      {
        name: 'Django',
        level: 3,
        description: '관리자 패널, 콘텐츠 관리 시스템 등 구현에 활용'
      }
    ]
  },
  {
    category: '언어',
    items: [
      {
        name: 'TypeScript',
        level: 5,
        description: '타입 안전성을 갖춘 확장 가능한 백엔드 애플리케이션 개발'
      },
      {
        name: 'JavaScript',
        level: 5,
        description: 'Node.js 환경에서의 서버 애플리케이션 개발'
      },
      {
        name: 'Python',
        level: 4,
        description: 'FastAPI, 데이터 처리, 머신러닝 모델 통합'
      },
      {
        name: 'Go',
        level: 3,
        description: '고성능 마이크로서비스 및 유틸리티 구현'
      }
    ]
  },
  {
    category: '데이터베이스',
    items: [
      {
        name: 'PostgreSQL',
        level: 5,
        description: '복잡한 관계형 데이터 모델링 및 고급 쿼리 최적화'
      },
      {
        name: 'MongoDB',
        level: 4,
        description: '확장 가능한 문서 기반 데이터 저장 및 집계 파이프라인'
      },
      {
        name: 'Redis',
        level: 4,
        description: '캐싱, 세션 저장, 메시지 브로커, 레이트 리밋팅 등 활용'
      },
      {
        name: 'Elasticsearch',
        level: 3,
        description: '전문 검색, 로그 및 이벤트 데이터 분석'
      }
    ]
  },
  {
    category: '클라우드 및 인프라',
    items: [
      {
        name: 'Docker',
        level: 5,
        description: '애플리케이션 컨테이너화 및 개발-운영 환경 일관성 확보'
      },
      {
        name: 'Kubernetes',
        level: 4,
        description: '마이크로서비스 오케스트레이션 및 자동 스케일링'
      },
      {
        name: 'AWS',
        level: 4,
        description: 'EC2, Lambda, S3, RDS, DynamoDB 등 클라우드 서비스 구성'
      },
      {
        name: 'CI/CD',
        level: 4,
        description: 'GitHub Actions, Jenkins를 활용한 지속적 통합 및 배포 파이프라인 구축'
      }
    ]
  },
  {
    category: '개발 방법론 및 도구',
    items: [
      {
        name: 'RESTful API',
        level: 5,
        description: '확장성 있는 API 설계 및 구현'
      },
      {
        name: 'GraphQL',
        level: 4,
        description: '효율적인 데이터 쿼리 및 타입 안전성 보장'
      },
      {
        name: 'Microservices',
        level: 4,
        description: '분산 시스템 설계 및 서비스 간 통신 패턴 구현'
      },
      {
        name: 'TDD',
        level: 4,
        description: '테스트 주도 개발로 안정적인 코드 베이스 구축'
      }
    ]
  },
  {
    category: '메시지 큐 및 스트리밍',
    items: [
      {
        name: 'RabbitMQ',
        level: 4,
        description: '분산 시스템에서의 안정적인 메시지 브로커링'
      },
      {
        name: 'Apache Kafka',
        level: 4,
        description: '대용량 이벤트 스트리밍 및 실시간 데이터 파이프라인'
      },
      {
        name: 'WebSockets',
        level: 4,
        description: '실시간 양방향 통신 구현'
      }
    ]
  },
  {
    category: '인증 및 보안',
    items: [
      {
        name: 'JWT',
        level: 5,
        description: '안전한 사용자 인증 및 권한 관리'
      },
      {
        name: 'OAuth 2.0',
        level: 4,
        description: '서드파티 인증 통합'
      },
      {
        name: 'Security Best Practices',
        level: 4,
        description: 'OWASP 기반 취약점 방지 및 안전한 API 설계'
      }
    ]
  }
]; 