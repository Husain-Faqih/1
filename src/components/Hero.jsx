import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";
import heroSvg from "../assets/svg/Hero.svg";
import "../styles/Hero.css";

function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.92]);
  const blurValue = useTransform(
    scrollY,
    [0, 400],
    ["blur(0px)", "blur(12px)"],
  );
  const y = useTransform(scrollY, [0, 400], [0, -50]);

  const techStack = ["HTML5", "CSS3", "JavaScript", "React"];

  const slideFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.3,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <motion.section
      className="hero"
      id="home"
      style={{ opacity, scale, filter: blurValue, y }}
    >
      <div className="hero-glow"></div>

      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <span className="status-dot"></span>
            Available for opportunities
          </motion.div>

          <motion.h1
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Frontend
          </motion.h1>

          <motion.h2
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            I create modern, responsive, and interactive websites with clean
            code and thoughtful user experiences.
          </motion.p>

          <motion.div
            className="hero-tech-stack"
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="hero-buttons"
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <a href="#portfolio" className="btn btn-primary">
              View My Work
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="hero-social"
            variants={slideFromLeft}
            initial="hidden"
            animate="visible"
            custom={0.7}
          >
            <a
              href="https://github.com/Husain-Faqih"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://x.com/ryukazekun776"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter"
            >
              <FaXTwitter size={20} />
            </a>

            <a
              href="https://www.instagram.com/m.husain.f.4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>

            <span className="social-line"></span>
            <span className="social-text">Let's build something great.</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          variants={slideFromRight}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-media-wrapper">
            <div className="media-ambient-glow"></div>
            <img
              src={heroSvg}
              alt="Frontend Developer Illustration"
              className="hero-animation-media floating-svg"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;
