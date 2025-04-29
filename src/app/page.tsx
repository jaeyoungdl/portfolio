"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaServer, FaDatabase, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';
import dynamic from 'next/dynamic';

// 클라이언트 측에서만 렌더링되도록 동적 임포트
const GuestbookSection = dynamic(
  () => import('@/components/guestbook/GuestbookSection'),
  { ssr: false }
);

export default function Home(): React.ReactNode {
  const featuredProjects = projects.slice(0, 3);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">안녕하세요, 저는 </span>
                <span className="text-blue-400">이재영</span>
                <span className="text-white">입니다</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                마이크로서비스 백엔드 전문가 | NestJS & FastAPI 개발자
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
                확장 가능하고 안정적이며 유지보수가 용이한 백엔드 솔루션 설계에 전문성을 갖추고 있습니다. 
                마이크로서비스 아키텍처, RESTful API, 분산 시스템을 구축하는 일을 좋아합니다.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                프로젝트 보기
              </Link>
              <Link
                href="/contact"
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                연락하기
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-center mt-12 space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">전문 분야</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-400 mb-4">
                <FaServer size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">백엔드 아키텍처</h3>
              <p className="text-gray-400">
                마이크로서비스, 서버리스 아키텍처, 이벤트 기반 시스템 등 다양한 백엔드 아키텍처 설계 및 구현 경험을 보유하고 있습니다.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-400 mb-4">
                <FaDatabase size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">데이터 시스템</h3>
              <p className="text-gray-400">
                관계형 및 NoSQL 데이터베이스, 캐싱 솔루션, 메시지 큐 등 데이터 시스템 설계와 최적화에 전문성을 갖추고 있습니다.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-blue-400 mb-4">
                <FaCloud size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">클라우드 및 DevOps</h3>
              <p className="text-gray-400">
                Docker, Kubernetes를 활용한 컨테이너화 및 오케스트레이션, CI/CD 파이프라인 구축, 클라우드 인프라 관리 경험을 보유하고 있습니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">주요 프로젝트</h2>
            <Link
              href="/projects"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              모든 프로젝트 보기
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Guestbook Section */}
      <GuestbookSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">함께 일하고 싶으신가요?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            새로운 프로젝트나 협업에 관심이 있으시다면 언제든지 연락해 주세요.
            백엔드 시스템 구축, API 개발, 마이크로서비스 아키텍처 설계 등 다양한 분야에서 도움을 드릴 수 있습니다.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors inline-block"
          >
            연락하기
          </Link>
        </div>
      </section>
    </MainLayout>
  );
}
