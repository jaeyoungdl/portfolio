"use client";

import React from 'react';
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { GitHubRepo } from '@/lib/github';
import { motion } from 'framer-motion';

interface GitHubRepoCardProps {
  repo: GitHubRepo;
  index: number;
}

export default function GitHubRepoCard({ repo, index }: GitHubRepoCardProps): React.ReactNode {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg p-5 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <a 
          href={repo.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-medium text-blue-400 hover:underline"
        >
          {repo.name}
        </a>
        <div className="flex items-center text-gray-400 text-sm">
          <div className="flex items-center mr-3">
            <FaStar className="mr-1" />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className="flex items-center">
            <FaCodeBranch className="mr-1" />
            <span>{repo.forks_count}</span>
          </div>
        </div>
      </div>

      {repo.description && (
        <p className="text-gray-300 mb-4 text-sm">{repo.description}</p>
      )}

      <div className="flex justify-between items-center">
        <div className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">
          {repo.language || '기타'}
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub className="mr-1" /> 저장소 방문
        </a>
      </div>
    </motion.div>
  );
} 