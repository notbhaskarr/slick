import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'slick.wtf',
  description: 'A suite of clean tools for people who think clearly.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
