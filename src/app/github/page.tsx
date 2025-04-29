"use client";

import React, { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { motion } from 'framer-motion';
import { fetchGitHubRepos, fetchGitHubProfile, GitHubRepo, GitHubProfile } from '@/lib/github';
import GitHubRepoCard from '@/components/projects/GitHubRepoCard';
import { FaGithub, FaUsers, FaCode } from 'react-icons/fa';

export default function GitHubPage(): React.ReactNode {
  const [username] = useState('jaeyoungdl');
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const reposData = await fetchGitHubRepos(username);
        const profileData = await fetchGitHubProfile(username);
        
        setRepos(reposData);
        setProfile(profileData);
      } catch (error) {
        console.error('GitHub 데이터를 가져오는 중 오류가 발생했습니다:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

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
            <h1 className="text-4xl font-bold mb-6">GitHub 프로젝트</h1>
            <p className="text-gray-400 text-lg">
              GitHub에서 주요 오픈 소스 및 개인 프로젝트를 확인해보세요.
              백엔드 시스템 설계, API 개발, 인프라 구성 등 다양한 프로젝트를 진행하고 있습니다.
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-400 border-r-transparent"></div>
              <p className="mt-4 text-gray-400">GitHub 데이터를 불러오는 중...</p>
            </div>
          ) : (
            <>
              {profile && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gray-800 rounded-lg p-6 mb-12 max-w-4xl mx-auto"
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <img
                      src={profile.avatar_url}
                      alt={`${profile.name || profile.login} GitHub 프로필`}
                      className="w-24 h-24 rounded-full"
                    />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{profile.name || profile.login}</h2>
                      {profile.bio && <p className="text-gray-300 mb-4">{profile.bio}</p>}

                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaGithub />
                          <a
                            href={profile.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            @{profile.login}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaCode />
                          <span>{profile.public_repos} 저장소</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaUsers />
                          <span>{profile.followers} 팔로워</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {repos.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {repos.map((repo, index) => (
                    <GitHubRepoCard key={repo.id} repo={repo} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-400">표시할 저장소가 없습니다.</p>
                </div>
              )}

              <div className="mt-10 text-center">
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <FaGithub size={18} />
                  더 많은 프로젝트 확인하기
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </MainLayout>
  );
} 