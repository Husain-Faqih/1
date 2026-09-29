import React, { useEffect, useState } from "react";
import { Menu, X, Code } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Kunci scroll body saat mobile menu terbuka
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Listener scroll untuk background navbar & penentuan active section
  useEffect(() => {
    const handleScroll = () => {
      // Toggle state navbar background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Deteksi active section berdasarkan posisi scroll
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop - 150 &&
          window.scrollY < sectionTop + sectionHeight - 150
        ) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Portofolio", href: "#portofolio", id: "portofolio" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <a
        href="#home"
        className="logo"
        onClick={(e) => handleScrollTo(e, "home")}
      >
        <Code className="logo-icon" size={14} />
        <span className="logo-text">Sain</span>
      </a>

      {/* Backdrop overlay saat mobile menu terbuka */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}

      <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={activeSection === link.id ? "active" : ""}
            onClick={(e) => handleScrollTo(e, link.id)}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Navbar;
