import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bhaskar Bhardwaj — AI Engineer',
  description: 'AI Engineer specializing in LLMs, RAG, and agentic systems.',
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return children;
}
