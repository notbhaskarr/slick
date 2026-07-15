import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bhaskar Bhardwaj — AI Engineer',
  description: 'AI Engineer specializing in LLMs, RAG, and agentic systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
