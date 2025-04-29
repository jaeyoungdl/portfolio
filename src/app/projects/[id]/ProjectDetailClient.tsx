"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { Project } from '@/data/projects';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps): React.ReactNode {
  const frameworkColor = {
    NestJS: 'bg-red-500/20 text-red-400',
    FastAPI: 'bg-green-500/20 text-green-400',
    Both: 'bg-purple-500/20 text-purple-400',
  }[project.backendFramework];

  return (
    <MainLayout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              모든 프로젝트로 돌아가기
            </Link>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                  <h1 className="text-3xl font-bold">{project.title}</h1>
                  <span className={`px-3 py-1 rounded-full text-sm ${frameworkColor}`}>
                    {project.backendFramework}
                  </span>
                </div>

                <p className="text-lg text-gray-300 mb-8">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mb-10">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-md font-medium transition-colors flex items-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-medium transition-colors flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      라이브 데모
                    </a>
                  )}
                </div>

                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-4">주요 기능</h2>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <div className="min-w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.architecture && (
                  <div className="mb-10">
                    <h2 className="text-xl font-bold mb-4">아키텍처</h2>
                    <p className="text-gray-300">{project.architecture}</p>
                  </div>
                )}

                {project.highlights && (
                  <div>
                    <h2 className="text-xl font-bold mb-4">주요 성과</h2>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <div className="min-w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 