import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectDetailClient from './ProjectDetailClient';

type Props = {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    return {
      title: '프로젝트를 찾을 수 없음',
      description: '요청하신 프로젝트를 찾을 수 없습니다.',
    };
  }
  
  return {
    title: `${project.title} - 이재영 포트폴리오`,
    description: project.description,
  };
}

export default function Page({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
} 