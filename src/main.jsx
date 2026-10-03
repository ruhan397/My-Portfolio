import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, Database, Monitor, GraduationCap, MapPin
} from "lucide-react";
import "./styles.css";

const skills = [
  { name: "C", level: "Programming", icon: Code2 },
  { name: "Java", level: "Programming", icon: Code2 },
  { name: "React", level: "Frontend", icon: Monitor },
  { name: "HTML", level: "Frontend", icon: Monitor },
  { name: "CSS", level: "Frontend", icon: Monitor },
];

const projects = [
  
  {
    title: "ParkSmart Terminal",
    description:
      "A terminal-based parking management project designed to handle parking-related operations efficiently.",
    image: " /ParkSmart.JPG ",
      tags: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "MotoGT",
    description:
      "A modern car accessories and dent & paint platform designed for MotoGT. It brings automotive products and professional dent & paint services into one seamless digital experience.",
      image: "/MGT.JPG",
      tags: ["React", "Javascript", "CSS"],
  },
  {
    title: "Temperature Converter",
    description:
      "A simple temperature conversion application that converts temperature values between different temperature units.",
    image: "/TConverter.PNG",
      tags: ["C", "Programming", "Logic"],
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive portfolio website built to showcase my skills,projects,education and experience.",
      image: "/Portfolio.jpg",
      tags: ["React", "Tailwind CSS"],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">
      <header className="navbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">M</span>
          <span>Muzahidul<span className="brand-dot">.</span></span>
        </a>

        <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> Computer Science & Engineering</div>
            <h1>Building ideas into <em>digital experiences.</em></h1>
            <p className="hero-text">
              I'm <strong>Muzahidul Islam</strong>, a CSE student at Metropolitan University Bangladesh,
              interested in frontend development, programming, and creating clean user experiences.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View My Work <ArrowUpRight size={18} /></a>
              <a className="btn secondary" href="#contact">Let's Connect</a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={16} /> Sylhet, Bangladesh</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="grid-lines"></div>
            <div className="profile-placeholder">
              <img src="/ruhan_397.jpeg" alt="Muzahidul Islam" />
            </div>
            <div className="floating-card card-one">
              <Code2 size={18} />
              <div><strong>Frontend</strong><small>React Developer</small></div>
            </div>
            <div className="floating-card card-two">
              <span className="status-dot"></span>
              <div><strong>Available</strong><small>For new projects</small></div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-label">01 / About</div>
          <div className="about-grid">
            <div>
              <h2>Curious mind.<br /><span>Practical builder.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I enjoy turning ideas into useful and visually polished digital products.
                My current focus is strengthening my frontend development skills while building
                a strong foundation in programming and computer science.
              </p>
              <p>
                I believe good software should not only work well, but also feel simple and
                intuitive to the person using it.
              </p>
              <div className="education-card">
                <GraduationCap size={22} />
                <div>
                  <small>Currently studying</small>
                  <strong>B.Sc. in Computer Science & Engineering</strong>
                  <span>Metropolitan University Bangladesh</span>
                  <small>2024 – 27</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section-label">02 / Skills</div>
          <div className="section-heading">
            <h2>Tools I work with.</h2>
            <p>A growing toolkit built through university work, practice, and personal projects.</p>
          </div>
          <div className="skills-grid">
            {skills.map(({ name, level, icon: Icon }) => (
              <div className="skill-card" key={name}>
                <div className="skill-icon"><Icon size={21} /></div>
                <div><h3>{name}</h3><span>{level}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section-label">03 / Selected Work</div>
          <div className="section-heading projects-heading">
            <h2>Things I've built.</h2>
            <p>Sample project cards are included. Replace these with your actual university or personal projects.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <div className="project-content">
                  <img 
                      src={project.image}
                      alt={project.tittle}
                        className="project-image"
                        />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <button className="project-arrow" aria-label={`Open ${project.title}`}><ArrowUpRight size={21} /></button>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-inner">
            <div className="section-label">04 / Contact</div>
            <h2>Have an idea?<br /><em>Let's talk.</em></h2>
            <p>I'm always interested in learning, collaborating, and working on meaningful projects.</p>
            <a className="contact-email" href="mailto:mujahidruhan09@gmail.com">
              <Mail size={19} /> mujahidruhan09@gmail.com
            </a>
            <div className="socials">
              <a href="https://github.com/ruhan397/" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/mujahidul-islam-770582345/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Muzahidul Islam</span>
        <span>Designed & built with React.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
