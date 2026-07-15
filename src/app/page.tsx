const experience = [
  {
    role: 'Software Developer',
    company: 'Amdocs',
    period: "Jan '24 — Present",
    location: 'Gurugram, India',
    bullets: [
      'Built Trace, a RAG-based GenAI assistant on enterprise billing system documentation, using LangGraph for multi-step query → retrieve → generate workflows.',
      'Implemented doc ingestion (chunk → embed → pgvector), semantic retrieval, and metadata-aware tools for grounded answers.',
      'Added LLM-as-judge quality checks with regeneration on low faithfulness/safety failures; supported SSE streaming and voice STT/TTS.',
      'Partnered with cross-functional teams to identify high-leverage AI use cases in SDLC and translated them into deployable solutions.',
    ],
  },
  {
    role: 'Functional Test Engineer',
    company: 'Amdocs',
    period: "Sep '22 — Jan '24",
    location: 'Pune, India',
    bullets: [
      'Built deep expertise in telecom BSS and billing systems, applied to designing AI features and grounding LLM retrieval over enterprise data.',
      'Introduced GenAI-assisted testing workflows for test case generation and defect triage.',
      'Owned test strategy across 8+ major releases for VodafoneThree UK, including on-site assignment in Reading, UK.',
    ],
  },
];

const skills = [
  { label: 'LLMs & GenAI', value: 'OpenAI API, Prompt Engineering, Function Calling, Agentic Workflows' },
  { label: 'RAG', value: 'pgvector, Embeddings, ChromaDB, Semantic Search, Chunking' },
  { label: 'Languages', value: 'Python, FastAPI, SQL, Java' },
  { label: 'Tools', value: 'Git, Unix/Linux, CI/CD, REST APIs' },
  { label: 'Domain', value: 'Telecom BSS, CRM, Billing, Order Management' },
];

export default function Home() {
  return (
    <main className="container">
      <header>
        <h1 className="hero-name">Bhaskar Bhardwaj</h1>
        <p className="hero-title">AI Engineer · GenAI, LLMs, RAG, Agentic AI</p>
        <nav className="hero-links">
          <a href="mailto:bbhardwaj.work@gmail.com">Email</a>
          <a href="tel:+919161571397">+91 9161571397</a>
          <a href="https://www.linkedin.com/in/bhaskar-bhardwaj" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/notbhaskarr" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <span>Gurugram, India</span>
        </nav>
      </header>

      <section>
        <p className="section-label">About</p>
        <p className="about-text">
          AI Engineer with 3+ years spanning software development, functional test engineering,
          and applied GenAI/LLM engineering. Currently building LLM-powered assistants, RAG pipelines,
          and agentic workflows integrated with enterprise backend and billing systems.
          Seeking roles to design and deploy LLM applications end-to-end.
        </p>
      </section>

      <section>
        <p className="section-label">Experience</p>
        {experience.map((job) => (
          <article key={`${job.role}-${job.period}`} className="job">
            <div className="job-header">
              <span className="job-title">{job.role}</span>
              <span className="job-company">{job.company}</span>
            </div>
            <p className="job-meta">
              {job.period} · {job.location}
            </p>
            <ul>
              {job.bullets.map((bullet) => (
                <li key={bullet.slice(0, 48)}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <p className="section-label">Skills</p>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.label} className="skill-row">
              <span className="skill-label">{skill.label}</span>
              <span className="skill-value">{skill.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="section-label">Education</p>
        <div className="item-row">
          <p className="item-title">Bachelor of Engineering (BE) — GPA 9.04</p>
          <p className="item-sub">
            Savitribai Phule Pune University · Jul &apos;19 — Jul &apos;22 · Honours, Data Science
          </p>
        </div>
      </section>

      <section>
        <p className="section-label">Certifications</p>
        <div className="item-row">
          <p className="item-title">Microsoft Certified: Azure AI Engineer Associate (AI-102)</p>
          <p className="item-sub">Microsoft · Nov &apos;25</p>
        </div>
        <div className="item-row">
          <p className="item-title">Test Architect</p>
          <p className="item-sub">Amdocs · Dec &apos;23</p>
        </div>
      </section>

      <section>
        <p className="section-label">Publication</p>
        <div className="item-row">
          <p className="item-title">NFT Marketplace Based on Ethereum Blockchain</p>
          <p className="item-sub">
            IJARSCT, Vol 02, Issue 03, May 2022 · DOI 10.48175/IJRSET-3729
          </p>
        </div>
      </section>

      <section>
        <p className="section-label">Selected Project</p>
        <div className="item-row">
          <p className="item-title">
            <a href="https://github.com/notbhaskarr/trace" target="_blank" rel="noopener noreferrer">
              Trace
            </a>
            {' '}
            — RAG GenAI Assistant
          </p>
          <p className="item-sub">LangGraph · FastAPI · pgvector · SSE streaming · Voice STT/TTS</p>
          <div className="tags">
            {['RAG', 'LangGraph', 'FastAPI', 'pgvector', 'LLM Eval'].map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Bhaskar Bhardwaj</span>
        <a href="mailto:bbhardwaj.work@gmail.com">bbhardwaj.work@gmail.com</a>
      </footer>
    </main>
  );
}
