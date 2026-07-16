const coreArsenal = [
  {
    label: 'LLMs & GenAI',
    value: 'OpenAI API, Prompt Engineering, Structured Outputs, Agentic Workflows, Cursor',
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
    period: "Jan '24 — June '26",
    duration: '2 yr 5 mos',
    location: 'Gurugram, India',
    mode: 'Hybrid',
    bullets: [
      'Built Swift, a RAG-based GenAI assistant on enterprise billing system documentation, using LangGraph for multi-step query → retrieve → generate workflows, improving delivery efficiency by 30%.',
      'Implemented doc ingestion (chunk → embed → pgvector), semantic retrieval, and metadata-aware tools (date, location, recent docs) for grounded answers.',
      'Pinpointed and implemented necessary high-leverage AI use cases in the software development lifecycle enhancing functionality and performance.',
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
    skills: ['Test Strategy', 'Test Automation', 'Change Management', 'Telecom BSS'],
  },
];

const projects = [
  {
    name: 'GETitDONE',
    subtitle: 'Task delegation system with peer accountability',
    description:
      'Delegate tasks, track progress, and recognize the people who get things done with you.',
    href: 'https://letsgetitdone.vercel.app/demo',
    logo: '/logos/getitdone.svg',
    logoClass: 'logo-img--getitdone',
  },
  {
    name: 'Trace',
    subtitle: 'AI native journal',
    description:
      'LangGraph orchestration, FastAPI, pgvector semantic search, SSE streaming, and voice STT/TTS.',
    href: 'https://letstrace.vercel.app/whytrace',
    logo: '/logos/trace.svg',
    logoClass: 'logo-img--trace',
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

export default function CvPage() {
  return (
    <div className="page">
      <header className="profile-header">
        <h1 className="profile-name">Bhaskar Bhardwaj</h1>
        <p className="profile-headline">
          <strong>AI Engineer</strong> | <strong>GenAI</strong>, <strong>LLMs</strong>,{' '}
          <strong>RAG</strong>, <strong>Agentic AI</strong>
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
            <strong>AI Engineer</strong> with 3.5+ years of experience spanning software development,
            functional test engineering, and applied <strong>GenAI</strong>/<strong>LLM</strong>{' '}
            engineering. Currently building <strong>LLM-powered assistants</strong>,{' '}
            <strong>Retrieval-Augmented Generation (RAG)</strong> pipelines, and{' '}
            <strong>agentic workflows</strong> integrated with enterprise backend and billing systems
            at Amdocs.
          </p>
          <p>
            Seeking <strong>AI Engineer</strong> roles to design and deploy{' '}
            <strong>LLM applications</strong>, <strong>RAG pipelines</strong>, and{' '}
            <strong>agentic systems</strong> end-to-end.
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
        <h2 className="section-title">Experience</h2>
        <div className="company-block">
          <img
            src="/logos/amdocs.jpg"
            alt="Amdocs"
            className="logo-img logo-img--amdocs"
            width={36}
            height={36}
          />
          <div>
            <div className="company-header">
              <p className="company-name">Amdocs</p>
              <p className="company-tenure">Full-time · 3 yrs 5 mos</p>
            </div>
            <div className="roles-timeline">
              {amdocsRoles.map((role) => (
                <article key={role.title} className="role-item">
                  <div className="role-header">
                    <p className="role-title">{role.title}</p>
                    <p className="role-location">
                      {role.location} · {role.mode}
                    </p>
                  </div>
                  <p className="role-meta">
                    {role.period} · {role.duration}
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
            <img
              src={project.logo}
              alt={project.name}
              className={`logo-img ${project.logoClass}`}
              width={48}
              height={48}
            />
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
                {project.name === 'GETitDONE' || project.name === 'Trace'
                  ? 'Open demo →'
                  : 'View on GitHub →'}
              </a>
            </div>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Education</h2>
        <div className="list-item">
          <img
            src="/logos/sppu.png"
            alt="Savitribai Phule Pune University"
            className="logo-img logo-img--contain"
            width={48}
            height={48}
          />
          <div>
            <p className="item-title">Savitribai Phule Pune University</p>
            <p className="item-sub">Bachelor of Engineering – BE, Computer Engineering</p>
            <p className="item-sub">Jul 2018 – Jul 2022 · Grade: 9.04</p>
            <p className="item-sub">Honours, Data Science Specialization</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Licenses &amp; certifications</h2>
        <div className="list-item">
          <img
            src="/logos/azure-ai-102.png"
            alt="Microsoft Certified Azure AI Engineer Associate"
            className="logo-img logo-img--contain"
            width={48}
            height={48}
          />
          <div>
            <p className="item-title">Microsoft Certified: Azure AI Engineer Associate (AI-102)</p>
            <p className="item-sub">Microsoft · Issued Nov 2025</p>
          </div>
        </div>
        <div className="list-item">
          <img
            src="/logos/amdocs.jpg"
            alt="Amdocs"
            className="logo-img logo-img--amdocs"
            width={36}
            height={36}
          />
          <div>
            <p className="item-title">Test Architect</p>
            <p className="item-sub">Amdocs · Issued Dec 2023</p>
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
