import Link from 'next/link';
import { JetBrains_Mono } from 'next/font/google';
import EmailChip from './EmailChip';

const slickFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: '500',
});

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-center">
        <Link href="/cv" className={`landing-brand landing-brand-link ${slickFont.className}`}>
          slick<span className="landing-cursor">_</span>
        </Link>
        <EmailChip className={slickFont.className} />
      </div>
    </main>
  );
}
