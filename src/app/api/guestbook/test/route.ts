import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // DB 연결 테스트
    await prisma.$connect();
    
    // GuestbookEntry 모델의 카운트를 가져옴
    const count = await prisma.guestbookEntry.count();
    
    return NextResponse.json({
      success: true,
      message: '데이터베이스 연결이 성공적으로 이루어졌습니다.',
      count: count,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('데이터베이스 연결 테스트 중 오류 발생:', error);
    return NextResponse.json(
      {
        success: false,
        error: '데이터베이스 연결에 실패했습니다.',
        details: error instanceof Error ? error.message : '알 수 없는 오류',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}