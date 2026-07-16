import Link from 'next/link';

export default function Home() {
  return (
    <main className="landing">
      <div className="landing-center">
        <h1 className="landing-brand">
          slick<span className="landing-cursor" aria-hidden="true" />
        </h1>
        <a className="landing-email" href="mailto:bhaskar@slick.wtf">
          bhaskar@slick.wtf
        </a>
        <Link className="landing-cv" href="/cv">
          cv →
        </Link>
      </div>
      <div className="landing-footer">slick .</div>
    </main>
  );
}
