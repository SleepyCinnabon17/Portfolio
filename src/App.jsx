import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import './styles.css';

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="nav-logo">Shruti Verma ✦</NavLink>
      <ul>
        <li><NavLink to="/#about">About</NavLink></li>
        <li><NavLink to="/#skills">Skills</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/#experience">Experience</NavLink></li>
        <li><NavLink to="/#publications">Research</NavLink></li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <p className="footer-name">Shruti Verma</p>
      <p>AI &amp; ML Engineer · Mahindra University · Hyderabad, India</p>
      <div className="footer-links">
        <a href="https://github.com/SleepyCinnabon17" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://shrutimakesthings.vercel.app/" target="_blank" rel="noreferrer">Portfolio</a>
        <a href="https://linkedin.com/in/shruti-verma-539251298" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:se23uari116@mahindrauniversity.edu.in">Email</a>
      </div>
      <p style={{ marginTop: '1.5rem', fontSize: '0.78rem', opacity: 0.4 }}>Made with ✦ and a lot of pink</p>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
