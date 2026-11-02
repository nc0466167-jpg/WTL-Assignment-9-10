
"use client";

import { useState } from "react";

const projects = [
  {
    name: "Foodex",
    category: "Food Delivery App",
    description:
      "A user-friendly food delivery app designed to make ordering food simple and enjoyable.",
    number: "01",
  },
  {
    name: "EasyPay",
    category: "Fintech App",
    description:
      "A simple and secure payment experience with clean navigation and easy transactions.",
    number: "02",
  },
  {
    name: "EduLearn",
    category: "Education App",
    description:
      "An online learning platform that helps students explore courses and learn easily.",
    number: "03",
  },
  {
    name: "ShopEasy",
    category: "E-commerce App",
    description:
      "A modern shopping experience with intuitive product browsing and smooth checkout.",
    number: "04",
  },
  {
    name: "Medicare",
    category: "Healthcare App",
    description:
      "A healthcare application designed to make appointments and medical services accessible.",
    number: "05",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          N<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-contact">
            Contact Me
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span></span> Available for opportunities
          </div>

          <p className="intro">Hello, I'm</p>

          <h1>
            Nikita
            <br />
            <span>Chaudhari.</span>
          </h1>

          <h2>UI/UX Designer & Frontend Developer</h2>

          <p className="hero-description">
            MCA Student passionate about creating modern,
            user-friendly and visually beautiful digital
            experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>05+</h3>
              <p>UI/UX Projects</p>
            </div>

            <div>
              <h3>Figma</h3>
              <p>Design Tool</p>
            </div>

            <div>
              <h3>MCA</h3>
              <p>2026–27</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>

          <div className="profile-card">
            <div className="profile-top">
              <span>PORTFOLIO / 2026</span>
              <span>✦</span>
            </div>

            <div className="profile-circle">
              <img
                src="/profile.jpeg"
                alt="Nikita Chaudhari"
                className="profile-photo"
              />
            </div>

            <h3>Nikita Chaudhari</h3>
            <p>Designing with purpose.</p>

            <div className="profile-tags">
              <span>UI/UX</span>
              <span>Figma</span>
              <span>Frontend</span>
            </div>
          </div>

          <div className="floating-card float-one">
            ✦ Creative Design
          </div>

          <div className="floating-card float-two">
            <span>✧</span> User Experience
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">01 / ABOUT ME</div>

        <h2 className="section-title">
          Designing digital
          <br />
          <span>experiences that matter.</span>
        </h2>

        <div className="about-card">
          <p>
            I am Nikita Chaudhari, an MCA student and aspiring
            UI/UX Designer with a passion for creating simple,
            beautiful and user-friendly interfaces.
          </p>

          <p>
            I enjoy transforming ideas into meaningful digital
            experiences using creativity, design thinking and
            modern tools like Figma.
          </p>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-label">02 / SELECTED WORK</div>

        <div className="section-heading">
          <h2 className="section-title">
            My Creative <span>Projects.</span>
          </h2>

          <p>Ideas transformed into digital experiences.</p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card project-${index + 1}`}
              key={project.name}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <span>↗</span>
              </div>

              <div className="project-art">
                <div className="art-circle">
                  {project.name.charAt(0)}
                </div>
              </div>

              <div className="project-info">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <span className="project-link">
                  UI/UX Case Study <span>↗</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-label">03 / MY EXPERTISE</div>

        <h2 className="section-title">
          Skills & <span>Tools.</span>
        </h2>

        <div className="skills-grid">
          <div className="skill-card">
            <span>✦</span>
            <h3>UI/UX Design</h3>
            <p>Wireframing, User Research, Prototyping</p>
          </div>

          <div className="skill-card">
            <span>◈</span>
            <h3>Figma</h3>
            <p>UI Design, Components, Auto Layout</p>
          </div>

          <div className="skill-card">
            <span>⌘</span>
            <h3>Frontend</h3>
            <p>HTML, CSS, Responsive Design</p>
          </div>

          <div className="skill-card">
            <span>✧</span>
            <h3>Graphic Design</h3>
            <p>Visual Design, Color, Typography</p>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-box">
          <div className="section-label">04 / GET IN TOUCH</div>

          <h2>
            Let's create
            <br />
            something <span>amazing.</span>
          </h2>

          <p>
            I am open to internship and job opportunities.
            Let's connect and create something meaningful.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="primary-button"
          >
            Let's Connect ↗
          </a>
        </div>
      </section>

      <footer>
        <a href="#" className="logo">
          N<span>.</span>
        </a>

        <p>Designed with creativity by Nikita Chaudhari © 2026</p>

        <a href="#home">Back to Top ↑</a>
      </footer>
    </main>
  );
}
