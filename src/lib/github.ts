import axios from 'axios';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  created_at: string;
  topics: string[];
}

export interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

/**
 * 사용자의 GitHub 저장소 목록을 가져옵니다.
 */
export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await axios.get<GitHubRepo[]>(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
    );
    return response.data;
  } catch (error) {
    console.error('GitHub 저장소를 가져오는 중 오류가 발생했습니다:', error);
    return [];
  }
}

/**
 * 사용자의 GitHub 프로필 정보를 가져옵니다.
 */
export async function fetchGitHubProfile(username: string): Promise<GitHubProfile | null> {
  try {
    const response = await axios.get<GitHubProfile>(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    console.error('GitHub 프로필을 가져오는 중 오류가 발생했습니다:', error);
    return null;
  }
}

/**
 * 특정 저장소에 대한 자세한 정보를 가져옵니다.
 */
export async function fetchGitHubRepoDetail(owner: string, repo: string): Promise<GitHubRepo | null> {
  try {
    const response = await axios.get<GitHubRepo>(
      `https://api.github.com/repos/${owner}/${repo}`
    );
    return response.data;
  } catch (error) {
    console.error('GitHub 저장소 상세 정보를 가져오는 중 오류가 발생했습니다:', error);
    return null;
  }
} 