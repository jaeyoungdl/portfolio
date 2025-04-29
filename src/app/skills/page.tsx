"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { skills } from '@/data/skills';
import SkillCard from '@/components/ui/SkillCard';
import { motion } from 'framer-motion';

export default function SkillsPage(): React.ReactNode {
  return (
    <MainLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto mb-16 text-center"
          >
            <h1 className="text-4xl font-bold mb-6">기술 스택</h1>
            <p className="text-gray-400 text-lg">
              백엔드 개발에 활용하는 다양한 기술 스택입니다. 
              확장 가능하고 안정적인 백엔드 시스템을 만들기 위해 지속적으로 새로운 기술을 학습하고 적용하고 있습니다.
            </p>
          </motion.div>

          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-6">{skillCategory.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategory.items.map((skill, index) => (
                  <SkillCard key={`${skillCategory.category}-${skill.name}`} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
} 