'use client';

import { useCallback, useState } from 'react';

const EMAIL = 'bhaskar@slick.wtf';

export default function EmailChip({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }, []);

  return (
    <div className="landing-email-wrap">
      <button
        type="button"
        className={`landing-email-chip ${className ?? ''}`}
        onClick={handleCopy}
        aria-label={copied ? 'Email copied' : `Copy ${EMAIL}`}
      >
        {copied ? 'copied' : EMAIL}
      </button>
      <a className="landing-email-mail" href={`mailto:${EMAIL}`}>
        mail →
      </a>
    </div>
  );
}
