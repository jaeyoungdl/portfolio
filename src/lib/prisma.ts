import { PrismaClient } from '@/generated/prisma';

// PrismaClient는 핫 리로드 시 여러 인스턴스가 생성되는 것을 방지하기 위해
// 전역 변수로 선언하고 싱글톤 패턴으로 사용합니다.
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;