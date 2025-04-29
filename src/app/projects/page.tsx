"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import { motion } from 'framer-motion';

export default function ProjectsPage(): React.ReactNode {
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
            <h1 className="text-4xl font-bold mb-6">프로젝트</h1>
            <p className="text-gray-400 text-lg">
              NestJS와 FastAPI를 활용해 개발한 백엔드 프로젝트들입니다.
              각 프로젝트는 확장성, 성능, 보안을 중점으로 설계되었습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 