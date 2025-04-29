"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';

interface NavLink {
  path: string;
  label: string;
}

const navLinks: NavLink[] = [
  { path: '/', label: '홈' },
  { path: '/projects', label: '프로젝트' },
  { path: '/skills', label: '기술 스택' },
  { path: '/github', label: '깃허브' },
  { path: '/guestbook', label: '방명록' },
  { path: '/contact', label: '연락처' },
];

export default function Header(): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            이재영 <span className="text-blue-400">백엔드 개발자</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium transition-colors ${
                pathname === link.path
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-800 px-4 py-2"
        >
          <nav className="flex flex-col space-y-3 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium block py-2 ${
                  pathname === link.path
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
} 