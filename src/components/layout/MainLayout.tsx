"use client";

import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps): React.ReactNode {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
} 