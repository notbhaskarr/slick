const topSkills = [
  'LLMs',
  'RAG',
  'LangGraph',
  'Python',
  'FastAPI',
  'pgvector',
  'Prompt Engineering',
];

const coreArsenal = [
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

const amdocsRoles = [
  {
    title: 'Software Developer',
    period: "Jan '24 — Present",
    duration: '1 yr+',
    location: 'Gurugram, India',
    mode: 'Hybrid',
    bullets: [
      'Built Trace, a RAG-based GenAI assistant on enterprise billing system documentation, using LangGraph for multi-step query → retrieve → generate workflows.',
      'Implemented doc ingestion (chunk → embed → pgvector), semantic retrieval, and metadata-aware tools (date, location, recent docs) for grounded answers.',
      'Added LLM-as-judge quality checks with regeneration on low faithfulness/safety failures; supported SSE streaming and voice STT/TTS interaction.',
      'Partnered with cross-functional teams to identify high-leverage AI use cases in the software development lifecycle (SDLC) and translated them into deployable solutions.',
    ],
    skills: ['New Business Development', 'LLMs', 'RAG', 'Scope Management'],
  },
  {
    title: 'Functional Test Engineer',
    period: "Sep '22 — Jan '24",
    duration: '1 yr 5 mos',
    location: 'Pune, India',
    mode: 'On-site',
    bullets: [
      'Built deep expertise in telecom Business Support Systems (BSS) and billing systems, later applied directly to designing AI features and grounding LLM retrieval over enterprise data.',
      'Introduced GenAI-assisted testing workflows, an early adoption of LLMs to accelerate test case generation and defect triage.',
      'Owned test strategy across 8+ major releases for VodafoneThree UK, a digital transformation program, including an on-site assignment in Reading, UK supporting flagship iPhone and Samsung launches, providing strong production-deployment experience.',
    ],
    skills: ['Python', 'SQL', 'Test Automation', 'GenAI-Assisted STLC', 'Telecom BSS'],
  },
];

const projects = [
  {
    name: 'GETitDONE',
    subtitle: 'Task delegation system with peer accountability',
    description:
      'Delegate tasks, track progress, and recognize the people who get things done with you.',
    href: 'https://letsgetitdone.vercel.app/demo',
    icon: '✓',
    skills: ['Tasks', 'Peers', 'Delegation', 'Realtime'],
  },
  {
    name: 'Trace',
    subtitle: 'RAG GenAI Assistant',
    description:
      'LangGraph orchestration, FastAPI, pgvector semantic search, SSE streaming, and voice STT/TTS.',
    href: 'https://github.com/notbhaskarr/trace',
    icon: '◈',
    skills: ['RAG', 'LangGraph', 'FastAPI', 'pgvector', 'LLM Eval'],
  },
];

function SkillTags({ skills }: { skills: string[] }) {
  return (
    <p className="skill-tags">
      {skills.map((skill, i) => (
        <span key={skill}>
          {i > 0 && ' · '}
          <span className="skill-tag-link">{skill}</span>
        </span>
      ))}
    </p>
  );
}

export default function Home() {
  return (
    <div className="page">
      <header className="profile-header">
        <h1 className="profile-name">Bhaskar Bhardwaj</h1>
        <p className="profile-headline">
          AI Engineer | GenAI, LLMs, RAG, Agentic AI
        </p>
        <p className="profile-location">Gurugram, Haryana, India</p>
        <p className="profile-contact">
          <a href="tel:+919161571397">+91 9161571397</a>
          <span className="sep">|</span>
          <a href="mailto:bbhardwaj.work@gmail.com">bbhardwaj.work@gmail.com</a>
        </p>
      </header>

      <section className="section">
        <h2 className="section-title">About</h2>
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
          <div className="core-arsenal">
            <p className="core-arsenal-title">Core Arsenal:</p>
            <ul>
              {coreArsenal.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="top-skills-box">
          <span className="top-skills-label">Top skills</span>
          <span className="top-skills-list">{topSkills.join(' · ')}</span>
          <span className="top-skills-arrow" aria-hidden="true">›</span>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Experience</h2>
        <div className="company-block">
          <div className="company-logo" aria-hidden="true">
            <div className="company-logo-inner" />
          </div>
          <div>
            <div className="company-header">
              <p className="company-name">Amdocs</p>
              <p className="company-tenure">Full-time · 3 yrs 5 mos</p>
            </div>
            <div className="roles-timeline">
              {amdocsRoles.map((role) => (
                <article key={role.title} className="role-item">
                  <p className="role-title">{role.title}</p>
                  <p className="role-meta">
                    {role.period} · {role.duration}
                  </p>
                  <p className="role-location">
                    {role.location} · {role.mode}
                  </p>
                  <ul className="role-bullets">
                    {role.bullets.map((bullet) => (
                      <li key={bullet.slice(0, 48)}>{bullet}</li>
                    ))}
                  </ul>
                  <SkillTags skills={role.skills} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Projects</h2>
        {projects.map((project) => (
          <div key={project.name} className="list-item">
            <div className="item-logo item-logo--project" aria-hidden="true">
              {project.icon}
            </div>
            <div>
              <p className="item-title">
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
                {' · '}
                {project.subtitle}
              </p>
              <p className="item-desc">{project.description}</p>
              <a
                href={project.href}
                className="item-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name === 'GETitDONE' ? 'Open demo →' : 'View on GitHub →'}
              </a>
              <SkillTags skills={project.skills} />
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="list-item">
          <div className="item-logo item-logo--edu" aria-hidden="true">
            SPPU
          </div>
          <div>
            <p className="item-title">Savitribai Phule Pune University</p>
            <p className="item-sub">Bachelor of Engineering – BE, Computer Engineering</p>
            <p className="item-sub">Jul 2019 – Jul 2022 · Grade: 9.04</p>
            <p className="item-sub">Honours, Data Science Specialization</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Licenses &amp; certifications</h2>
        <div className="list-item">
          <div className="item-logo item-logo--cert" aria-hidden="true">
            MS
          </div>
          <div>
            <p className="item-title">Microsoft Certified: Azure AI Engineer Associate (AI-102)</p>
            <p className="item-sub">Microsoft · Issued Nov 2025</p>
            <SkillTags skills={['Azure OpenAI', 'LLMs', 'AI Engineering']} />
          </div>
        </div>
        <div className="list-item">
          <div className="item-logo item-logo--cert" aria-hidden="true">
            A
          </div>
          <div>
            <p className="item-title">Test Architect</p>
            <p className="item-sub">Amdocs · Issued Dec 2023</p>
            <SkillTags skills={['Test Strategy', 'Change Management', 'Telecom BSS']} />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Publications</h2>
        <div>
          <p className="item-title">NFT Marketplace Based on Ethereum Blockchain</p>
          <p className="item-sub">
            International Journal of Advanced Research in Science, Communication and Technology · May
            22, 2022
          </p>
          <p className="pub-authors">
            Yogiraj Gupta, <strong>Bhaskar Bhardwaj</strong>, Aasit Vora, Yogesh Sharma, &quot;NFT
            Marketplace Based on Ethereum Blockchain,&quot; International Journal of Advanced Research
            in Science, Communication and Technology, Vol 02, Issue 03, May 2022,
          </p>
          <a
            href="https://doi.org/10.48175/IJRSET-3729"
            className="pub-doi"
            target="_blank"
            rel="noopener noreferrer"
          >
            DOI 10.48175/IJRSET-3729
          </a>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Bhaskar Bhardwaj</span>
        <span>
          <a href="https://www.linkedin.com/in/bhaskar-bhardwaj" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {' · '}
          <a href="https://github.com/notbhaskarr" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' · '}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </span>
      </footer>
    </div>
  );
}
