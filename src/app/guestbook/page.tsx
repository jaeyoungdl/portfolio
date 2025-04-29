"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// 클라이언트 측에서만 렌더링되도록 동적 임포트
const GuestbookSection = dynamic(
  () => import('@/components/guestbook/GuestbookSection'),
  { ssr: false }
);

export default function GuestbookPage(): React.ReactNode {
  return (
    <MainLayout>
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold mb-3">방명록</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              방문해 주셔서 감사합니다. 간단한 메시지를 남겨주세요!
            </p>
          </motion.div>
        </div>
      </div>
      
      <GuestbookSection />
    </MainLayout>
  );
} 