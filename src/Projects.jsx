import { Link } from 'react-router-dom';
import './styles.css';

/* ── DATA ────────────────────────────────────────────── */
const projects = [
  {
    date: 'Dec 2025 – Jan 2026',
    title: 'SOAP-Based Healthcare LLM',
    desc: 'Domain-specific LLM that generates structured SOAP notes from doctor–patient conversations, cutting note-prep time by 60% in pilot tests. Fine-tuned on 100K+ curated clinical records with an 18% BLEU score improvement over baseline.',
    tags: ['Python', 'PyTorch', 'HuggingFace', 'LangChain', 'CUDA'],
    link: 'https://github.com/SleepyCinnabon17',
  },
  {
    date: 'Aug 2025 – Dec 2025',
    title: 'NLP & NLU Foundations',
    desc: 'Built a custom Word2Vec (CBOW & Skip-gram) model with 28% semantic similarity improvement. Implemented TF-IDF from scratch, multilingual pipelines with Hindi stopword removal (-35% noise), and BPE tokenisation.',
    tags: ['Python', 'Pandas', 'NLTK', 'Transformers'],
    link: 'https://github.com/SleepyCinnabon17',
  },
  {
    date: 'Feb 2026 – Mar 2026',
    title: 'Prompt Engineering Pipeline',
    desc: 'Assembled structured prompt pipelines using Zero-shot, Few-shot, and CoT techniques. Built a RAG pipeline with FAISS and all-MiniLM-L6-v2 embeddings, improving factual grounding by 32% over baseline prompting.',
    tags: ['Python', 'Groq API', 'FAISS', 'NumPy'],
    link: 'https://github.com/SleepyCinnabon17',
  },
  {
    date: 'Mar 2024 – Apr 2024',
    title: 'Smart Parking Lot System',
    desc: 'Multi-floor OOP parking management system with live slot guidance. Reduced average slot-search time from 4.5 to 2.8 minutes — a 38% improvement. Full Java backend and Swing GUI.',
    tags: ['Java', 'Java Swing', 'OOP'],
    link: 'https://github.com/SleepyCinnabon17',
  },
  {
    date: 'March 2026',
    title: 'Cell–Cell Communication via Deep Learning',
    desc: 'Hybrid ResNet-style model integrating gene expression features with relational structure, improving prediction accuracy by ~15%. Applied residual connections to stabilise training on high-dimensional biological data, reducing loss convergence time by ~25%.',
    tags: ['DNN', 'CNN', 'ResNet', 'ANN'],
    link: 'https://github.com/SleepyCinnabon17',
  },
];

/* ── COMPONENT ───────────────────────────────────────── */
export default function Projects() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* PAGE HEADER */}
      <div style={pageHeaderStyle}>
        <p className="section-label">✦ Projects</p>
        <h1 style={pageTitleStyle}>Things I've built</h1>
        <p style={pageSubStyle}>
          A collection of AI, ML, and software projects — from healthcare LLMs to parking systems.
        </p>
        <Link to="/" style={backLinkStyle}>← Back to Home</Link>
      </div>

      {/* PROJECTS GRID */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 4rem 6rem' }}>
        <div style={gridStyle}>
          {projects.map(({ date, title, desc, tags, link }) => (
            <div
              key={title}
              style={cardStyle}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--rose)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(192,108,132,0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--blush)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', letterSpacing: '0.08em', marginBottom: '0.7rem' }}>{date}</div>
              <h3 style={cardTitleStyle}>{title}</h3>
              <p style={cardDescStyle}>{desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
                {tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                style={projectLinkStyle}
                onMouseEnter={e => e.currentTarget.style.gap = '0.7rem'}
                onMouseLeave={e => e.currentTarget.style.gap = '0.4rem'}
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ── STYLES ──────────────────────────────────────────── */
const pageHeaderStyle = {
  textAlign: 'center',
  padding: '4rem 2rem 3rem',
  borderBottom: '1px solid var(--blush)',
  position: 'relative',
  zIndex: 1,
};
const pageTitleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  color: 'var(--text-dark)',
  marginBottom: '1rem',
};
const pageSubStyle = {
  fontSize: '1rem', color: 'var(--text-mid)',
  maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7,
};
const backLinkStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
  fontSize: '0.85rem', color: 'var(--deep-rose)',
  textDecoration: 'none', fontWeight: 500,
};
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '1.8rem',
};
const cardStyle = {
  background: 'var(--white)',
  border: '1px solid var(--blush)',
  borderRadius: '20px',
  padding: '2rem',
  transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
  display: 'flex', flexDirection: 'column',
};
const cardTitleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: '1.25rem',
  color: 'var(--text-dark)',
  marginBottom: '0.8rem',
};
const cardDescStyle = {
  fontSize: '0.9rem', color: 'var(--text-mid)',
  lineHeight: 1.75, flex: 1, marginBottom: '1.2rem',
};
const projectLinkStyle = {
  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
  fontSize: '0.85rem', color: 'var(--deep-rose)',
  textDecoration: 'none', fontWeight: 500,
  marginTop: 'auto', transition: 'gap 0.2s',
};
