const experience = [
  {
    role: 'Software Developer',
    company: 'Amdocs',
    period: "Jan '24 — Present",
    duration: '1 yr+',
    location: 'Gurugram, India · Hybrid',
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
    duration: '1 yr 5 mos',
    location: 'Pune, India · On-site',
    bullets: [
      'Built deep expertise in telecom BSS and billing systems, applied to designing AI features and grounding LLM retrieval over enterprise data.',
      'Introduced GenAI-assisted testing workflows for test case generation and defect triage.',
      'Owned test strategy across 8+ major releases for VodafoneThree UK, including on-site assignment in Reading, UK.',
    ],
  },
];

const skillGroups = [
  {
    label: 'GenAI Stack',
    skills: ['LLMs', 'RAG', 'LangGraph', 'OpenAI API', 'Prompt Engineering', 'pgvector'],
  },
  {
    label: 'Languages & Frameworks',
    skills: ['Python', 'FastAPI', 'SQL', 'Java'],
  },
  {
    label: 'Domain',
    skills: ['Telecom BSS', 'Billing', 'Order Management', 'CRM'],
  },
];

const projects = [
  {
    name: 'GETitDONE',
    description:
      'A task delegation system with peer accountability — assign tasks, track progress, and recognize the people who get things done with you.',
    href: 'https://letsgetitdone.vercel.app/demo',
    icon: '✓',
    iconClass: 'project-icon--todo',
    tags: ['Tasks', 'Delegation', 'Peers', 'Realtime'],
    cta: 'Open demo →',
  },
  {
    name: 'Trace',
    description:
      'A RAG-based GenAI assistant over enterprise billing documentation — semantic search, LangGraph orchestration, and voice interaction.',
    href: 'https://github.com/notbhaskarr/trace',
    icon: '◈',
    iconClass: 'project-icon--trace',
    tags: ['RAG', 'LangGraph', 'FastAPI', 'Voice'],
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
          <p className="profile-headline">
            AI Engineer · GenAI, LLMs, RAG, Agentic AI · SDE @ Amdocs
          </p>
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
          </nav>
        </div>
      </header>

      <div className="layout">
        <main>
          <section className="card">
            <h2 className="card-title">About</h2>
            <div className="about-text">
              <p>
                AI Engineer with 3+ years spanning software development, functional test engineering,
                and applied GenAI/LLM engineering. I started on the testing side — telecom billing,
                BSS, production releases — then moved into building production LLM systems.
              </p>
              <p>
                Currently building LLM-powered assistants, RAG pipelines, and agentic workflows
                integrated with enterprise backend and billing systems. I sit at the intersection
                of deep domain knowledge and hands-on AI engineering.
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
                    {job.period} · {job.duration} · {job.location}
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
              <p className="side-item-title">Savitribai Phule Pune University</p>
              <p className="side-item-sub">
                Bachelor of Engineering (BE), Computer Engineering · GPA 9.04
              </p>
              <p className="side-item-sub">Jul 2019 — Jul 2022 · Honours, Data Science</p>
            </div>
          </section>

          <section className="card">
            <h2 className="card-title">Publications</h2>
            <div className="side-item">
              <p className="side-item-title">NFT Marketplace Based on Ethereum Blockchain</p>
              <p className="side-item-sub">
                IJARSCT, Vol 02, Issue 03, May 2022 · DOI 10.48175/IJRSET-3729
              </p>
            </div>
          </section>
        </main>

        <aside>
          <section className="card">
            <h2 className="card-title">Skills</h2>
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <p className="skill-group-label">{group.label}</p>
                <div className="skill-pills">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="card">
            <h2 className="card-title">Licenses & certifications</h2>
            <div className="side-item">
              <p className="side-item-title">Microsoft Certified: Azure AI Engineer Associate (AI-102)</p>
              <p className="side-item-sub">Microsoft · Nov 2025</p>
            </div>
            <div className="side-item">
              <p className="side-item-title">Test Architect</p>
              <p className="side-item-sub">Amdocs · Dec 2023</p>
            </div>
          </section>

          <section className="card">
            <h2 className="card-title">Resume</h2>
            <p className="side-item-sub">Download the latest version.</p>
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
