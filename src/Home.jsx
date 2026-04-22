import { Link } from 'react-router-dom';
import './styles.css';

/* ── DATA ────────────────────────────────────────────── */
const skills = [
  {
    icon: '🐍',
    title: 'Languages',
    tags: ['Python', 'C', 'C++', 'C#', 'Java', 'SQL', 'HTML/CSS', 'MATLAB'],
  },
  {
    icon: '🤖',
    title: 'AI / ML Frameworks',
    tags: ['PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'NLTK', 'FAISS', 'sentence-transformers'],
  },
  {
    icon: '🌐',
    title: 'Web Frameworks',
    tags: ['React', 'Node.js', 'Flask', 'FastAPI', 'Material-UI', 'WordPress'],
  },
  {
    icon: '🛠️',
    title: 'Developer Tools',
    tags: ['Git', 'Docker', 'AWS', 'GCP', 'Jupyter', 'ChromaDB', 'Godot', 'Unity'],
  },
  {
    icon: '🖥️',
    title: 'Operating Systems',
    tags: ['Linux', 'Windows', 'Unix', 'MS-DOS'],
  },
  {
    icon: '🔬',
    title: 'Specialisations',
    tags: ['LLM Fine-Tuning', 'NLP/NLU', 'Computer Vision', 'RAG', 'Prompt Engineering', 'Deep Learning'],
  },
];

const experience = [
  {
    date: '2024 – 2025',
    title: 'Vice President, Erudite Debate & Literature Club',
    org: 'Mahindra University',
    desc: 'Chosen as the youngest Vice-President in club history. Led literature competitions, poetry workshops, and debates. Represented the university at IIT Madras British Parliamentary Debate 2025 — placed Top 20 out of 500+ participants.',
  },
  {
    date: 'Aug 2025',
    title: 'Conference Delegate & Volunteer',
    org: 'ICETCI 2025 — International Conference on Emerging Trends in Computational Intelligence',
    desc: 'Spearheaded conference operations including participant coordination, session logistics, and academic paper publishing. Engaged directly with researchers and pioneers in computational intelligence.',
  },
  {
    date: '2023 – 2026',
    title: 'Volunteer',
    org: 'University Social & Technical Initiatives',
    desc: "Coordinated the university's annual blood donation drive and community donation programs for orphanages. Supported the E-Summit as part of the Entrepreneurship Club, handling registrations and event execution.",
  },
];

const publications = [
  {
    journal: 'Under Review · Water Energy Nexus, KeAi',
    title: '"Innovative Integration of Renewable Energy Systems and Advanced Materials for Sustainable Seawater Desalination"',
    desc: 'Investigates the integration of salt-based Phase Change Materials (PCMs) for thermal energy storage with renewable-powered Capacitive Deionisation (CDI) systems, enabling energy-efficient, modular desalination in off-grid environments. Analyses thermodynamic performance and energy efficiency of PCM-assisted systems.',
  },
  {
    journal: 'Course Research · 2024',
    title: 'Predictive Modeling of Seaweed Biomass Harvesting for Marine CO₂ Sequestration',
    desc: 'Designed a Multi-Modal CNN–LSTM predictive framework to estimate seaweed biomass growth and long-term CO₂ sequestration potential from spatiotemporal environmental data. Integrated satellite-derived geospatial features (Sentinel-2, MODIS, Landsat-8) with oceanographic datasets from NOAA and Copernicus Marine Services.',
  },
];

/* ── COMPONENT ───────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={heroStyle}>
        <div className="hero-inner" style={heroInnerStyle}>
          <div className="hero-eyebrow" style={eyebrowStyle}>✦ AI & Machine Learning Engineer</div>
          <h1 style={h1Style}>Hi, I'm <em style={{ fontStyle: 'italic', color: 'var(--deep-rose)' }}>Shruti</em></h1>
          <p className="hero-sub" style={heroSubStyle}>Building intelligent systems with curiosity &amp; care</p>
          <p className="hero-desc" style={heroDescStyle}>
            B.Tech student at Mahindra University specialising in AI &amp; ML. I build healthcare LLMs, NLP pipelines,
            computer vision models, and everything in between — with a love for research and clean code.
          </p>
          <div className="hero-links" style={heroLinksStyle}>
            <a href="https://github.com/SleepyCinnabon17" className="btn-primary" target="_blank" rel="noreferrer">↗ GitHub</a>
            <a href="https://shrutimakesthings.vercel.app/" className="btn-outline" target="_blank" rel="noreferrer">✦ Live Portfolio</a>
            <a href="https://linkedin.com/in/shruti-verma-539251298" className="btn-outline" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="hero-stats" style={heroStatsStyle}>
            {[['5+', 'Projects'], ['2', 'Publications'], ['6+', 'Languages'], ['2027', 'Graduating']].map(([num, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', color: 'var(--deep-rose)', fontWeight: 600, lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '0.3rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ABOUT */}
      <section id="about">
        <p className="section-label">✦ About Me</p>
        <h2 className="section-title">A little about Shruti</h2>
        <div style={aboutGridStyle}>
          <div className="about-text">
            <p style={aboutParaStyle}>
              I'm a third-year AI &amp; Machine Learning student at Mahindra University's Ecole Centrale School of Engineering in Hyderabad, India. My coursework spans Machine Learning, Deep Learning, NLP, Generative AI, Computer Vision, and Statistical Modeling.
            </p>
            <p style={aboutParaStyle}>
              I love working at the intersection of healthcare and AI — my SOAP-note LLM project, for instance, aims to reduce note-preparation time for doctors by 60%. I also have a passion for NLP, having built everything from Word2Vec models from scratch to full RAG pipelines.
            </p>
            <p style={aboutParaStyle}>
              Outside of tech, I represented my university at the IIT Madras British Parliamentary Debate and placed Top 20 out of 500+ participants — the youngest Vice-President in my debate club's history.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="info-card">
              <h4>Contact</h4>
              <ul className="contact-list">
                <li>📍 Hyderabad, India</li>
                <li>📱 <a href="tel:+916303944980">+91-630-394-4980</a></li>
                <li>✉️ <a href="mailto:se23uari116@mahindrauniversity.edu.in">se23uari116@mahindrauniversity.edu.in</a></li>
                <li>🔗 <a href="https://linkedin.com/in/shruti-verma-539251298" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li>💻 <a href="https://github.com/SleepyCinnabon17" target="_blank" rel="noreferrer">GitHub</a></li>
                <li>🌐 <a href="https://shrutimakesthings.vercel.app/" target="_blank" rel="noreferrer">Portfolio</a></li>
              </ul>
            </div>
            <div className="info-card">
              <h4>Education</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 500 }}>B.Tech in AI &amp; ML</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-mid)', marginTop: '0.2rem' }}>Mahindra University · 2023 – 2027</p>
            </div>
            <div className="info-card">
              <h4>Languages</h4>
              <div className="tag-list">
                {['English', 'Hindi', 'Japanese', 'Spanish', 'French', 'ASL'].map(l => (
                  <span key={l} className="tag">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* SKILLS */}
      <section id="skills">
        <p className="section-label">✦ Technical Skills</p>
        <h2 className="section-title">What I work with</h2>
        <div style={skillsGridStyle}>
          {skills.map(({ icon, title, tags }) => (
            <div key={title} className="skill-card" style={skillCardStyle}>
              <div style={skillIconStyle}>{icon}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-dark)', marginBottom: '0.8rem' }}>{title}</h3>
              <div className="tag-list">
                {tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* PROJECTS TEASER */}
      <section id="projects" style={{ textAlign: 'center' }}>
        <p className="section-label">✦ Projects</p>
        <h2 className="section-title" style={{ display: 'inline-block' }}>Things I've built</h2>
        <p style={{ color: 'var(--text-mid)', marginBottom: '2rem', fontSize: '1rem' }}>
          From healthcare LLMs to NLP pipelines — see the full collection.
        </p>
        <Link to="/projects" className="btn-primary">View All Projects →</Link>
      </section>

      <div className="section-divider" />

      {/* EXPERIENCE */}
      <section id="experience">
        <p className="section-label">✦ Experience</p>
        <h2 className="section-title">Where I've shown up</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {experience.map(({ date, title, org, desc }) => (
            <div key={title} style={expItemStyle}>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', paddingTop: '0.2rem', lineHeight: 1.5 }}>{date}</div>
              <div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-dark)', marginBottom: '0.2rem' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--deep-rose)', marginBottom: '0.6rem', fontStyle: 'italic' }}>{org}</p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.75 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* PUBLICATIONS */}
      <section id="publications">
        <p className="section-label">✦ Research</p>
        <h2 className="section-title">Publications &amp; Papers</h2>
        {publications.map(({ journal, title, desc }) => (
          <div key={title} style={pubCardStyle}>
            <span style={pubJournalStyle}>{journal}</span>
            <h3 style={pubTitleStyle}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', lineHeight: 1.8 }}>{desc}</p>
          </div>
        ))}
      </section>
    </>
  );
}

/* ── INLINE STYLES ───────────────────────────────────── */
const heroStyle = {
  minHeight: '100vh',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  padding: '8rem 4rem 4rem',
  position: 'relative',
  maxWidth: 'unset',
};
const heroInnerStyle = { maxWidth: '900px', textAlign: 'center' };
const eyebrowStyle = {
  display: 'inline-block',
  fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase',
  color: 'var(--deep-rose)', background: 'var(--soft-pink)',
  padding: '0.4rem 1.2rem', borderRadius: '100px',
  marginBottom: '1.8rem', border: '1px solid var(--rose)',
  animation: 'fadeUp 0.7s ease 0.1s both',
};
const h1Style = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.1,
  color: 'var(--text-dark)', marginBottom: '0.3rem',
  animation: 'fadeUp 0.7s ease 0.25s both',
};
const heroSubStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
  color: 'var(--text-light)', fontStyle: 'italic',
  marginBottom: '2rem',
  animation: 'fadeUp 0.7s ease 0.35s both',
};
const heroDescStyle = {
  fontSize: '1rem', color: 'var(--text-mid)',
  maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.8,
  animation: 'fadeUp 0.7s ease 0.45s both',
};
const heroLinksStyle = {
  display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap',
  marginBottom: '3rem',
  animation: 'fadeUp 0.7s ease 0.55s both',
};
const heroStatsStyle = {
  display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap',
  animation: 'fadeUp 0.7s ease 0.65s both',
};
const aboutGridStyle = {
  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start',
};
const aboutParaStyle = { color: 'var(--text-mid)', lineHeight: 1.85, marginBottom: '1.2rem', fontSize: '0.98rem' };
const skillsGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' };
const skillCardStyle = {
  background: 'var(--white)', border: '1px solid var(--blush)',
  borderRadius: '16px', padding: '1.8rem',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};
const skillIconStyle = {
  width: '42px', height: '42px', background: 'var(--soft-pink)',
  borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontSize: '1.3rem', marginBottom: '1rem',
};
const expItemStyle = {
  display: 'grid', gridTemplateColumns: '180px 1fr', gap: '2rem',
  padding: '2rem 0', borderBottom: '1px solid var(--blush)',
};
const pubCardStyle = {
  background: 'linear-gradient(135deg, var(--soft-pink), var(--white))',
  border: '1px solid var(--rose)', borderRadius: '20px',
  padding: '2.5rem', marginBottom: '1.5rem',
};
const pubJournalStyle = {
  display: 'inline-block', fontSize: '0.8rem', color: 'var(--mauve)',
  background: 'var(--blush)', padding: '0.3rem 0.9rem', borderRadius: '100px',
  marginBottom: '0.8rem', border: '1px solid var(--rose)',
  fontWeight: 500, letterSpacing: '0.04em',
};
const pubTitleStyle = {
  fontFamily: "'Playfair Display', serif", fontSize: '1.2rem',
  color: 'var(--text-dark)', marginBottom: '0.6rem', fontStyle: 'italic',
};
