"use client";

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import React from 'react';

export default function Footer(): React.ReactNode {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">이재영</h3>
            <p className="text-sm text-gray-400">백엔드 개발자 | NestJS & FastAPI 스페셜리스트</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/jaeyoungdl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-gray-400 hover:text-white transition"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500">
            © {currentYear} 이재영. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6 text-sm">
              <Link href="/" className="text-gray-500 hover:text-white transition">
                홈
              </Link>
              <Link href="/projects" className="text-gray-500 hover:text-white transition">
                프로젝트
              </Link>
              <Link href="/skills" className="text-gray-500 hover:text-white transition">
                기술 스택
              </Link>
              <Link href="/github" className="text-gray-500 hover:text-white transition">
                깃허브
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-white transition">
                연락처
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 