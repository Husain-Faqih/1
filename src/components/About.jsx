import { motion } from "framer-motion";
import { Download, Code2, Award, Globe, ArrowUpRight } from "lucide-react";
import "../styles/About.css";
import profileImg from "../assets/profile.png";

function About() {
  const statsData = [
    {
      id: 1,
      icon: <Code2 size={20} />,
      count: "11",
      title: "TOTAL PROJECTS",
      subtitle: "Innovative web solutions crafted",
    },
    {
      id: 2,
      icon: <Award size={20} />,
      count: "7",
      title: "ACHIVEMENT",
      subtitle: "Awards & achihvements earned",
    },
    {
      id: 3,
      icon: <Globe size={20} />,
      count: "3",
      title: "YEARS OF EXPERIENCE",
      subtitle: "Continuous learning journey",
    },
  ];

  return (
    <motion.section
      className="about-section"
      id="about"
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="about-glow"></div>

      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <p className="about-subtitle">
            ✨ Transforming ideas into digital experiences ✨
          </p>
        </div>

        {/* Top Grid: Bio + Image */}
        <div className="about-main-grid">
          {/* Kiri: Bio & Text */}
          <div className="about-text-content">
            <span className="greeting-text">Hello, I'm</span>
            <h1 className="name-title">Husain</h1>
            <p className="bio-description">
              I'm a frontend developer who enjoys building modern, responsive,
              and interactive websites. I focus on writing clean code while
              creating interfaces that are simple, intuitive, and enjoyable to
              use.
            </p>

            {/* Action Buttons */}
            <div className="about-buttons">
              <a href="/cv.pdf" download className="btn-cv">
                <Download size={18} /> Download CV
              </a>
              <a href="#projects" className="btn-projects">
                <Code2 size={18} /> View Projects
              </a>
            </div>
          </div>

          <div className="about-image-wrapper">
            <div className="avatar-glow"></div>
            <div className="avatar-frame">
              <img src={profileImg} alt="Husain" className="avatar-img" />
            </div>
          </div>
        </div>

        <div className="about-stats-grid">
          {statsData.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-header">
                <div className="stat-icon">{stat.icon}</div>
                <span className="stat-number">{stat.count}</span>
              </div>
              <div className="stat-body">
                <div className="stat-title-wrapper">
                  <h3>{stat.title}</h3>
                  <ArrowUpRight size={16} className="stat-arrow" />
                </div>
                <p>{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default About;
