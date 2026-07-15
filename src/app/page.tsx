const experience = [
  {
    role: 'Software Developer',
    company: 'Amdocs',
    period: "Jan '24 — Present",
    location: 'Gurugram, India',
    bullets: [
      'Built Trace, a RAG-based GenAI assistant on enterprise billing system documentation, using LangGraph for multi-step query → retrieve → generate workflows.',
      'Implemented doc ingestion (chunk → embed → pgvector), semantic retrieval, and metadata-aware tools (date, location, recent docs) for grounded answers.',
      'Added LLM-as-judge quality checks with regeneration on low faithfulness/safety failures; supported SSE streaming and voice STT/TTS interaction.',
      'Partnered with cross-functional teams to identify high-leverage AI use cases in the software development lifecycle (SDLC) and translated them into deployable solutions.',
    ],
  },
  {
    role: 'Functional Test Engineer',
    company: 'Amdocs',
    period: "Sep '22 — Jan '24",
    location: 'Pune, India',
    bullets: [
      'Built deep expertise in telecom Business Support Systems (BSS) and billing systems, later applied directly to designing AI features and grounding LLM retrieval over enterprise data.',
      'Introduced GenAI-assisted testing workflows, an early adoption of LLMs to accelerate test case generation and defect triage.',
      'Owned test strategy across 8+ major releases for VodafoneThree UK, a digital transformation program, including an on-site assignment in Reading, UK supporting flagship iPhone and Samsung launches, providing strong production-deployment experience.',
    ],
  },
];

const skills = [
  {
    label: 'LLMs & GenAI',
    value: 'OpenAI API, Prompt Engineering, Function Calling, Structured Outputs, Agentic Workflows, Cursor',
  },
  {
    label: 'RAG & Vector Stores',
    value: 'pgvector, Embeddings, ChromaDB, Semantic Search, Chunking Strategies',
  },
  {
    label: 'Languages & Frameworks',
    value: 'Python (primary), FastAPI, SQL, Java',
  },
  {
    label: 'Engineering Tools',
    value: 'Git, Unix/Linux, CI/CD, REST APIs, GenAI-assisted SDLC/STLC',
  },
  {
    label: 'Domain Expertise',
    value: 'Telecom BSS, CRM, Billing, Order Management, applied to enterprise AI use cases',
  },
];

const projects = [
  {
    name: 'GETitDONE',
    description:
      'Task delegation system with peer accountability — delegate tasks, track progress, and recognize the people who get things done with you.',
    href: 'https://letsgetitdone.vercel.app/demo',
    icon: '✓',
    iconClass: 'project-icon--todo',
    tags: ['Tasks', 'Peers', 'Delegation', 'Realtime'],
    cta: 'Open demo →',
  },
  {
    name: 'Trace',
    description:
      'RAG GenAI assistant — LangGraph, FastAPI, pgvector, SSE streaming, and voice STT/TTS.',
    href: 'https://github.com/notbhaskarr/trace',
    icon: '◈',
    iconClass: 'project-icon--trace',
    tags: ['RAG', 'LangGraph', 'FastAPI', 'pgvector', 'LLM Eval'],
    cta: 'View on GitHub →',
  },
];

export default function Home() {
  return (
    <div className="page">
      <header className="profile-card">
        <div className="profile-banner" />
        <div className="profile-body">
          <div className="profile-avatar" aria-hidden="true">
            BB
          </div>
          <h1 className="profile-name">Bhaskar Bhardwaj</h1>
          <p className="profile-headline">AI Engineer · GenAI, LLMs, RAG, Agentic AI</p>
          <p className="profile-meta">Gurugram, Haryana, India</p>
          <nav className="profile-links">
            <a href="mailto:bbhardwaj.work@gmail.com">bbhardwaj.work@gmail.com</a>
            <a href="tel:+919161571397">+91 9161571397</a>
            <a
              href="https://www.linkedin.com/in/bhaskar-bhardwaj"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/notbhaskarr" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </nav>
        </div>
      </header>

      <div className="layout">
        <main>
          <section className="card">
            <h2 className="card-title">About</h2>
            <div className="about-text">
              <p>
                AI Engineer with 3+ years of experience spanning software development, functional test
                engineering, and applied GenAI/LLM engineering. Currently building LLM-powered assistants,
                Retrieval-Augmented Generation (RAG) pipelines, and agentic workflows integrated with
                enterprise backend and billing systems at Amdocs.
              </p>
              <p>
                Seeking AI/ML Engineer roles to design and deploy LLM applications, RAG pipelines, and
                agentic systems end-to-end.
              </p>
            </div>
          </section>

          <section className="card">
            <h2 className="card-title">Experience</h2>
            {experience.map((job) => (
              <article key={`${job.role}-${job.period}`} className="exp-item">
                <div className="exp-logo" aria-hidden="true">
                  A
                </div>
                <div>
                  <p className="exp-role">{job.role}</p>
                  <p className="exp-company">{job.company}</p>
                  <p className="exp-meta">
                    {job.period} · {job.location}
                  </p>
                  <ul className="exp-bullets">
                    {job.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 48)}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>

          <section className="card">
            <h2 className="card-title">Projects</h2>
            <div className="project-grid">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  className="project-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-card-header">
                    <div className={`project-icon ${project.iconClass}`}>{project.icon}</div>
                    <div>
                      <p className="project-name">{project.name}</p>
                      <p className="project-desc">{project.description}</p>
                    </div>
                  </div>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="project-cta">{project.cta}</p>
                </a>
              ))}
            </div>
          </section>

          <section className="card">
            <h2 className="card-title">Education</h2>
            <div className="side-item">
              <p className="side-item-title">Bachelor of Engineering (BE) — GPA 9.04</p>
              <p className="side-item-sub">Savitribai Phule Pune University · Jul &apos;19 — Jul &apos;22</p>
              <p className="side-item-sub">Pune, India · Honours, Data Science Specialization</p>
            </div>
          </section>

          <section className="card">
            <h2 className="card-title">Publications</h2>
            <div className="side-item">
              <p className="side-item-title">NFT Marketplace Based on Ethereum Blockchain</p>
              <p className="side-item-sub">
                IJARSCT, Vol 02, Issue 03, May 2022 · DOI 10.48175/IJRSET-3729
              </p>
              <p className="side-item-sub">
                Authors: Yogiraj Gupta, Bhaskar Bhardwaj, Aasit Vora, Yogesh Sharma
              </p>
            </div>
          </section>
        </main>

        <aside>
          <section className="card">
            <h2 className="card-title">Skills</h2>
            {skills.map((skill) => (
              <div key={skill.label} className="skill-row">
                <p className="skill-row-label">{skill.label}</p>
                <p className="skill-row-value">{skill.value}</p>
              </div>
            ))}
          </section>

          <section className="card">
            <h2 className="card-title">Licenses & certifications</h2>
            <div className="side-item">
              <p className="side-item-title">Microsoft Certified: Azure AI Engineer Associate (AI-102)</p>
              <p className="side-item-sub">Microsoft · Nov &apos;25</p>
            </div>
            <div className="side-item">
              <p className="side-item-title">Test Architect</p>
              <p className="side-item-sub">Amdocs · Dec &apos;23</p>
            </div>
          </section>

          <section className="card">
            <h2 className="card-title">Resume</h2>
            <p className="side-item-sub">Download PDF</p>
            <a href="/resume.pdf" className="btn-resume" target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </section>
        </aside>
      </div>

      <footer>© {new Date().getFullYear()} Bhaskar Bhardwaj</footer>
    </div>
  );
}
