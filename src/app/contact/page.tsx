"use client";

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactPage(): React.ReactNode {
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
            <h1 className="text-4xl font-bold mb-6">연락하기</h1>
            <p className="text-gray-400 text-lg">
              프로젝트 협업, 백엔드 개발 관련 질문, 또는 그냥 인사하고 싶으시다면 언제든지 연락해 주세요.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">연락처 정보</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">이메일</h3>
                    <p className="text-gray-400">your.email@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 mt-1">
                    <FaGithub size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">GitHub</h3>
                    <a 
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 mt-1">
                    <FaLinkedin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/yourusername
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-blue-400 mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">위치</h3>
                    <p className="text-gray-400">서울특별시, 대한민국</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">메시지 보내기</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    제목
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    메시지
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
                >
                  메시지 보내기
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
} 