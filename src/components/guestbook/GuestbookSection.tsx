"use client";

import { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  email: string | null;
  createdAt: string;
  updatedAt: string;
}

// 아바타 색상 매핑
const avatarColorMap: Record<string, string> = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  red: 'bg-red-600',
  purple: 'bg-purple-600',
  orange: 'bg-orange-600',
  teal: 'bg-teal-600',
  pink: 'bg-pink-600',
  indigo: 'bg-indigo-600',
  amber: 'bg-amber-600',
  cyan: 'bg-cyan-600',
};

export default function GuestbookSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchEntries = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/guestbook');
      if (!response.ok) {
        throw new Error('방명록을 불러오는 중 오류가 발생했습니다.');
      }
      const data = await response.json();
      setEntries(data);
    } catch (err) {
      console.error('방명록 로딩 오류:', err);
      setError('방명록을 불러오지 못했습니다. 나중에 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  useEffect(() => {
    // 새 메시지 추가 후 스크롤 이동
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [entries]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      setError('메시지를 입력해주세요.');
      return;
    }
    
    try {
      setIsSubmitting(true);
      setError(null);
      
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
        }),
      });
      
      if (!response.ok) {
        throw new Error('방명록 작성 중 오류가 발생했습니다.');
      }
      
      setMessage('');
      fetchEntries();
    } catch (err) {
      setError(err instanceof Error ? err.message : '방명록 작성 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'yyyy년 M월 d일', { locale: ko });
  };

  // 아바타 색상 클래스 가져오기
  const getAvatarColorClass = (color: string | null) => {
    if (!color || !avatarColorMap[color]) {
      return 'bg-gray-600'; // 기본 색상
    }
    return avatarColorMap[color];
  };

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">방문 기록</h2>
        
        <div className="bg-gray-800 rounded-lg p-6">
          {/* 입력 폼 */}
          <form onSubmit={handleSubmit} className="mb-8">
            {error && (
              <div className="p-2 mb-4 bg-red-900/60 text-red-200 text-sm rounded">
                {error}
              </div>
            )}
            
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="메시지를 입력하세요..."
                className="bg-gray-700 text-white border-0 rounded p-2 flex-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 bg-blue-600 text-white rounded text-sm ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? '...' : '작성'}
              </button>
            </div>
          </form>

          {/* 방명록 메시지 목록 */}
          <div className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center p-4">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-400"></div>
              </div>
            ) : entries.length === 0 ? (
              <div className="text-center py-4 text-gray-400">
                첫 번째 방명록을 남겨보세요!
              </div>
            ) : (
              entries.map((entry) => (
                <div key={entry.id} className="border-b border-gray-700 pb-4 last:border-b-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 ${getAvatarColorClass(entry.email)} rounded-full flex items-center justify-center text-sm text-white`}>
                      {entry.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-white">{entry.name}</div>
                      <div className="text-xs text-gray-400">{formatDate(entry.createdAt)}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 ml-11">{entry.message}</p>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
} 