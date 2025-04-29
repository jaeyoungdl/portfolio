import { PrismaClient } from '@/generated/prisma';

// PrismaClient는 핫-리로드 시 여러 인스턴스가 생성되는 것을 방지하기 위해 전역 변수로 선언
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 개발 환경에서 여러 PrismaClient 인스턴스 생성 방지
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;