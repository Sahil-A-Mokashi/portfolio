import { useState } from 'react'
import { ArrowUpRight, GitBranch, Mail, ArrowRight, Menu, X, Database, Cloud, Code2, GraduationCap, MapPin } from 'lucide-react'
import './App.css'

type Project = {
  title: string
  description: string
  tags: string[]
  href?: string
}

const projects: Project[] = [
  {
    title: 'Autonomous Data Quality Monitoring',
    description:
      'A Flask-based platform for profiling datasets, detecting quality issues, predicting risk and generating actionable reports across data-lake and warehouse workflows.',
    tags: ['Python', 'Flask', 'SQL', 'AI/ML', 'Data Quality'],
  },
  {
    title: 'PointPay SQL Database',
    description:
      'A relational database project covering customers, orders, wallets, returns and transactional logic with constraints, functions and triggers.',
    tags: ['SQL Server', 'Database Design', 'UDFs', 'Triggers'],
  },
  {
    title: 'Cloud Data Engineering Pipelines',
    description:
      'Production-oriented ETL and data-processing work using PySpark, Databricks, Azure Data Factory and Delta Lake, with medallion-style architecture.',
    tags: ['PySpark', 'Databricks', 'ADF', 'Azure', 'Delta Lake'],
  },
]

const skills = [
  'Python', 'SQL', 'PySpark', 'Databricks', 'Azure Data Factory', 'Azure',
  'Delta Lake', 'ETL / ELT', 'Data Warehousing', 'Data Lakes', 'Flask', 'Git',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Sahil Mokashi home">
          <span className="brand-mark">SM</span>
          <span>Sahil Mokashi</span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Data Engineer · Dublin, Ireland</p>
            <h1>Building reliable data systems that turn <span>complex data</span> into useful decisions.</h1>
            <p className="hero-text">
              Data Engineer with 4+ years of experience building cloud data pipelines and analytics solutions using Python, SQL, PySpark, Databricks and Azure. Currently pursuing an MSc in Information Systems with Computing at Dublin Business School.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View my work <ArrowUpRight size={17} /></a>
              <a className="button secondary" href="#contact">Get in touch</a>
            </div>
            <div className="quick-links">
              <a href="https://github.com/Sahil-A-Mokashi" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/sahil-mokashi" target="_blank" rel="noreferrer"><Code2 size={17} /> LinkedIn</a>
              <a href="#contact"><Mail size={17} /> Contact</a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Data engineering illustration">
            <div className="visual-grid" />
            <div className="data-card card-one"><Database size={20} /><span>Data pipelines</span><strong>Reliable</strong></div>
            <div className="data-card card-two"><Cloud size={20} /><span>Cloud platforms</span><strong>Scalable</strong></div>
            <div className="data-card card-three"><Code2 size={20} /><span>Engineering</span><strong>Practical</strong></div>
            <div className="core-node"><span>DATA</span><strong>→</strong><span>VALUE</span></div>
          </div>
        </section>

        <section id="about" className="section-wrap section-block">
          <div className="section-heading"><span>01</span><h2>About</h2></div>
          <div className="about-grid">
            <div>
              <p className="large-copy">I enjoy solving the parts of data engineering that sit between messy real-world data and dependable systems.</p>
              <p>My experience spans data engineering, ETL pipelines, distributed processing and cloud platforms. I've worked with large-scale data workflows in banking and consumer-goods environments and I'm now expanding that experience through postgraduate study in Dublin.</p>
            </div>
            <div className="facts">
              <div><MapPin size={18} /><span>Dublin, Ireland</span></div>
              <div><GraduationCap size={18} /><span>MSc Information Systems with Computing</span></div>
              <div><Database size={18} /><span>Data Engineering · Analytics · Cloud</span></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-wrap section-block">
          <div className="section-heading"><span>02</span><h2>Experience</h2></div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">2025 — 2026</div>
              <div><h3>Data Engineer · Sigmoid Analytics</h3><p>Worked on data engineering initiatives for a global consumer-goods environment, using Python, PySpark, SQL and cloud data technologies.</p><div className="tag-row"><span>PySpark</span><span>Python</span><span>SQL</span><span>Cloud</span></div></div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">2022 — 2025</div>
              <div><h3>Senior Software Engineer · Persistent Systems</h3><p>Built and supported data engineering solutions for banking workloads, working across Azure Data Factory, Databricks, PySpark and SQL.</p><div className="tag-row"><span>Databricks</span><span>ADF</span><span>Azure</span><span>Delta Lake</span></div></div>
            </article>
          </div>
        </section>

        <section id="projects" className="section-wrap section-block">
          <div className="section-heading"><span>03</span><h2>Selected projects</h2></div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href="#contact" className="project-link">Discuss project <ArrowUpRight size={16} /></a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-wrap section-block skills-block">
          <div className="section-heading"><span>04</span><h2>Toolkit</h2></div>
          <div className="skills-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section id="contact" className="section-wrap contact-section">
          <div>
            <p className="eyebrow">05 · Contact</p>
            <h2>Let's build something useful with data.</h2>
            <p>I'm open to Data Engineering, Data Analytics and Software Engineering opportunities in Ireland and Europe.</p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="https://www.linkedin.com/in/sahil-mokashi" target="_blank" rel="noreferrer">Contact me <Mail size={17} /></a>
            <a className="button secondary" href="https://www.linkedin.com/in/sahil-mokashi" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <span>© {new Date().getFullYear()} Sahil Mokashi</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
