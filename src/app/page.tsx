import { JetBrains_Mono } from 'next/font/google';

const slickFont = JetBrains_Mono({
  subsets: ['latin'],
  weight: '500',
});

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-center">
        <h1 className={`landing-brand ${slickFont.className}`}>
          slick<span className="landing-cursor">_</span>
        </h1>
      </div>
      <div className="landing-footer">slick .</div>
    </main>
  );
}
