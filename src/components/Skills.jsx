import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaMobileScreenButton,
  FaRobot,
  FaBrain,
  FaPython,
} from "react-icons/fa6";
import "../styles/Skills.css";
import { linearGradient } from "framer-motion/client";

function Skills() {
  const skillsData = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
    { name: "Artificial Intelligence", icon: FaRobot, color: "#10A37F" },
    { name: "Prompt Engineering", icon: FaBrain, color: "#9664C4" },
    { name: "Responsive Design", icon: FaMobileScreenButton, color: "#391998" },
    { name: "Python", icon: FaPython, color: "#306998" }, // Warna asli logo Python (Biru)
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-header">
          <p className="section-label">MY SKILLS</p>
          <h2>
            Technologies & <span>Tools.</span>
          </h2>
          <p className="skills-description">
            Here are the technologies and tools I often use for create modern
            web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="skill-card"
                style={{ "--brand-color": skill.color }}
              >
                <div className="skill-icon-wrapper">
                  <IconComponent className="skill-icon" />
                </div>
                <h3>{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
