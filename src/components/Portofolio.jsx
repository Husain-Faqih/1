import React, { useState } from "react";
import {
  Code,
  Award,
  Layers,
  ExternalLink,
  ArrowLeft,
  Star,
} from "lucide-react";
import landingPage from "../assets/Landing-Page.png";
import todoList from "../assets/Todo-List.png";
import displayLogin from "../assets/Display-Login.png";
import greetingBirthday from "../assets/Greeting-Birthday.png";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaRobot,
  FaBrain,
  FaPython,
  FaMobileAlt,
  FaGithub,
} from "react-icons/fa";
import "../styles/Portofolio.css";

function Portofolio() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Landing Page",
      description:
        "Modern landing page website with responsive display, smooth animations, and attractive UI/UX.",
      fullDescription:
        "Landing page modern yang dirancang khusus untuk memberikan pengalaman visual intuitif dengan responsivitas tinggi di berbagai ukuran layar.",
      image: landingPage,
      tags: ["React", "CSS3", "JavaScript"],
      github: "https://github.com/Husain-Faqih/landing-page",
      demo: "https://tangerine-salamander-62e20f.netlify.app/",
      totalTech: 3,
      totalFeatures: 3,
      keyFeatures: [
        "Responsive layout untuk tampilan desktop dan mobile",
        "Komponen terstruktur dan mudah dikembangkan",
        "Desain modern berbasis tampilan dark mode",
      ],
    },
    {
      id: 2,
      title: "To-Do List Web",
      description:
        "Interactive daily task manager app to add, edit, and remove activities with local storage features.",
      fullDescription:
        "Aplikasi pengelolaan tugas harian interaktif yang dilengkapi fitur penyimpanan lokal (LocalStorage) sehingga data tetap tersimpan saat halaman dimuat ulang.",
      image: todoList,
      tags: ["React", "CSS3", "LocalStorage"],
      github: "https://github.com/Husain-Faqih/todo-list-react",
      demo: "https://quiet-praline-4342c0.netlify.app/",
      totalTech: 3,
      totalFeatures: 4,
      keyFeatures: [
        "Tambah, ubah, dan hapus tugas harian",
        "Penyimpanan otomatis dengan LocalStorage browser",
        "Antarmuka pengguna yang bersih dan simpel",
      ],
    },
    {
      id: 3,
      title: "Greeting Birthday",
      description: "A simple greeting birthday website-based",
      fullDescription:
        "Website ucapan ulang tahun interaktif sederhana dengan elemen visual khas dan pesan personal.",
      image: greetingBirthday,
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Husain-Faqih/birthday",
      demo: "https://buka-aja-97.netlify.app/",
      totalTech: 3,
      totalFeatures: 2,
      keyFeatures: [
        "Tampilan kartu ucapan interaktif",
        "AnimasiCSS dan fungsionalitas JavaScript sederhana",
      ],
    },
    {
      id: 4,
      title: "Display Login",
      description: "A simple website-based login display",
      fullDescription:
        "Desain antarmuka login web sederhana yang berfokus pada struktur form yang bersih dan rapi.",
      image: displayLogin,
      tags: ["HTML5", "CSS3"],
      github: "https://github.com/Husain-Faqih/Display-login",
      demo: "https://eclectic-eclair-05dca3.netlify.app/",
      totalTech: 2,
      totalFeatures: 2,
      keyFeatures: [
        "Form input login responsif",
        "Validasi form dasar dan styling murni CSS",
      ],
    },
  ];

  const achievementsData = [
    {
      id: 1,
      title: "Juara 2 Karate",
      year: "2023",
      issuer: "Kejuaraan Olahraga",
      description: "Juara 2 dalam bidang olahraga karate.",
    },
  ];

  const techStack = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
    { name: "Artificial Intelligence", icon: FaRobot, color: "#10A37F" },
    { name: "Prompt Engineering", icon: FaBrain, color: "#9664C4" },
    { name: "Responsive Design", icon: FaMobileAlt, color: "#391998" },
    { name: "Python", icon: FaPython, color: "#306998" },
  ];

  return (
    <section className="portfolio-section" id="portofolio">
      <div className="portfolio-container">
        {/* TAMPILAN DETAIL PROJECT */}
        {selectedProject ? (
          <div className="project-detail-view">
            <div className="detail-navigation">
              <button
                className="back-btn"
                onClick={() => {
                  setSelectedProject(null);
                  document
                    .getElementById("portofolio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <ArrowLeft size={18} /> Back
              </button>
              <span className="breadcrumb">
                Projects &gt; {selectedProject.title}
              </span>
            </div>

            <div className="detail-content-grid">
              {/* Sisi Kiri: Deskripsi & Teknologi */}
              <div className="detail-main-info">
                <h1 className="detail-title">{selectedProject.title}</h1>
                <p className="detail-description">
                  {selectedProject.fullDescription ||
                    selectedProject.description}
                </p>

                <div className="detail-stats">
                  <div className="stat-card">
                    <span className="stat-num">
                      {selectedProject.totalTech || selectedProject.tags.length}
                    </span>
                    <span className="stat-label">Total Teknologi</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-num">
                      {selectedProject.totalFeatures || 3}
                    </span>
                    <span className="stat-label">Fitur Utama</span>
                  </div>
                </div>

                <div className="detail-actions">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                  >
                    <FaGithub size={16} /> Github
                  </a>
                </div>

                <div className="detail-tech-section">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags-wrapper">
                    {selectedProject.tags.map((tech, i) => (
                      <span key={i} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sisi Kanan: Gambar & Key Features */}
              <div className="detail-sidebar-info">
                <div className="detail-image-wrapper">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>

                <div className="key-features-card">
                  <h3>
                    <Star size={18} color="#a78bfa" /> Key Features
                  </h3>
                  <ul>
                    {(
                      selectedProject.keyFeatures || [
                        "Responsive design for all devices.",
                        "Interactive UI components.",
                      ]
                    ).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* TAMPILAN UTAMA PORTOFOLIO */
          <>
            <div className="portfolio-header">
              <h2>Portfolio Showcase</h2>
              <p>
                Explore my journey through projects, achievements, and technical
                expertise. Each section represents a milestone in my continuous
                learning path.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="portfolio-tabs-wrapper">
              <div className="portfolio-tabs">
                <button
                  className={`tab-btn ${
                    activeTab === "projects" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("projects")}
                >
                  <Code size={18} />
                  <span>Projects</span>
                </button>

                <button
                  className={`tab-btn ${
                    activeTab === "achievements" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("achievements")}
                >
                  <Award size={18} />
                  <span>Achievements</span>
                </button>

                <button
                  className={`tab-btn ${activeTab === "tech" ? "active" : ""}`}
                  onClick={() => setActiveTab("tech")}
                >
                  <Layers size={18} />
                  <span>Tech Stack</span>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="portfolio-content">
              {/* Content 1: Projects */}
              {activeTab === "projects" && (
                <div className="projects-grid">
                  {projectsData.map((project, index) => (
                    <div key={project.id || index} className="project-card">
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="project-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tech">
                          {project.tags.map((item, tIndex) => (
                            <span key={tIndex} className="tech-badge">
                              {item}
                            </span>
                          ))}
                        </div>
                        <div className="project-links">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <ExternalLink size={16} /> Demo
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size={16} /> Code
                          </a>

                          <button
                            className="btn-detail"
                            onClick={() => {
                              setSelectedProject(project);
                              document
                                .getElementById("portofolio")
                                ?.scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            Detail
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Content 2: Achievements */}
              {activeTab === "achievements" && (
                <div className="achievements-grid">
                  {achievementsData.map((item, index) => (
                    <div key={item.id || index} className="achievement-card">
                      <div className="achievement-badge">
                        <Award size={24} />
                      </div>
                      <div className="achievement-info">
                        <span className="achievement-year">{item.year}</span>
                        <h3>{item.title}</h3>
                        <h4>{item.issuer}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Content 3: Tech Stack */}
              {activeTab === "tech" && (
                <div className="tech-grid">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <div key={index} className="tech-card">
                        <div className="tech-icon-wrapper">
                          <IconComponent
                            className="tech-icon"
                            style={{ color: tech.color }}
                          />
                        </div>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Portofolio;
