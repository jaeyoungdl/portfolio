"use client";

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps): React.ReactNode {
  const frameworkColor = {
    NestJS: 'bg-red-500/20 text-red-400',
    FastAPI: 'bg-green-500/20 text-green-400',
    Both: 'bg-purple-500/20 text-purple-400',
  }[project.backendFramework];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <Link href={`/projects/${project.id}`} className="block">
            <h3 className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </Link>
          <span className={`text-xs px-2 py-1 rounded-full ${frameworkColor}`}>
            {project.backendFramework}
          </span>
        </div>

        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
          <div className="flex space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
              aria-label="GitHub 저장소"
            >
              <FaGithub className="w-4 h-4" />
              <span>코드</span>
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm"
                aria-label="데모 페이지"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
                <span>데모</span>
              </a>
            )}
          </div>
          <Link
            href={`/projects/${project.id}`}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            자세히 보기
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 