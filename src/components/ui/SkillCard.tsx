"use client";

import React from 'react';
import { SkillItem } from '@/data/skills';

interface SkillCardProps {
  skill: SkillItem;
}

export default function SkillCard({ skill }: SkillCardProps): React.ReactNode {
  const levelBars = [];
  for (let i = 1; i <= 5; i++) {
    levelBars.push(
      <div
        key={i}
        className={`h-1.5 w-3 rounded-full ${
          i <= skill.level ? 'bg-blue-500' : 'bg-gray-700'
        }`}
      />
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-4 transition-all hover:bg-gray-700">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium text-lg">{skill.name}</h3>
        <div className="flex gap-1">{levelBars}</div>
      </div>
      {skill.description && (
        <p className="text-gray-400 text-sm">{skill.description}</p>
      )}
    </div>
  );
} 