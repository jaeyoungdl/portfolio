import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// 랜덤 익명 이름 생성을 위한 배열
const anonymousNames = [
  '익명의 개발자',
  '익명의 방문자',
  '익명의 코더',
  '익명의 탐험가',
  '익명의 엔지니어',
  '익명의 프로그래머',
  '익명의 해커',
  '익명의 디자이너',
  '익명의 기획자',
  '익명의 학생',
  '익명의 사용자',
  '익명의 테스터',
  '익명의 분석가',
  '익명의 컨설턴트',
  '익명의 데이터과학자',
  '익명의 게이머',
  '익명의 작가',
  '익명의 독자',
  '익명의 관리자'
];

// 아바타 색상 배열
const avatarColors = [
  'blue',
  'green',
  'red',
  'purple',
  'orange',
  'teal',
  'pink',
  'indigo',
  'amber',
  'cyan'
];

// 랜덤 이름 생성 함수
function getRandomAnonymousName(): string {
  const randomIndex = Math.floor(Math.random() * anonymousNames.length);
  return anonymousNames[randomIndex];
}

// 랜덤 색상 생성 함수
function getRandomAvatarColor(): string {
  const randomIndex = Math.floor(Math.random() * avatarColors.length);
  return avatarColors[randomIndex];
}

export async function GET() {
  try {
    const entries = await prisma.guestbookEntry.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(entries);
  } catch (error) {
    console.error('방명록 조회 중 오류 발생:', error);
    return NextResponse.json(
      { error: '방명록을 불러오는 중 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json(
        { error: '메시지는 필수 입력 항목입니다' },
        { status: 400 }
      );
    }
    
    // 랜덤 익명 이름 생성
    const randomName = getRandomAnonymousName();
    
    // 여기서는 색상 정보를 이메일 필드에 저장합니다
    // 이메일 필드를 재활용하여 색상 데이터를 저장
    const avatarColor = getRandomAvatarColor();
    
    const entry = await prisma.guestbookEntry.create({
      data: {
        name: randomName,
        message,
        email: avatarColor
      }
    });
    
    return NextResponse.json(entry);
  } catch (error) {
    console.error('방명록 생성 중 오류 발생:', error);
    return NextResponse.json(
      { error: '방명록을 저장하는 중 오류가 발생했습니다' },
      { status: 500 }
    );
  }
}