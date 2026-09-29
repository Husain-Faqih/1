import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Husain.DEV. All rights reserved.</p>
        <p className="footer-subtext">Built with React & Lucide Icons</p>
      </div>
    </footer>
  );
}

export default Footer;
