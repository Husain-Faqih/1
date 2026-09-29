import { Mail, MapPin, Send } from "lucide-react";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import "../styles/Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Pesan terkirim! (Fitur form ini bisa dihubungkan ke EmailJS/Formspree)",
    );
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/62882008208842",
      color: "#25D366",
    },
    {
      name: "Linkedin",
      icon: FaLinkedinIn,
      url: "https://linkedin.com/in/#",
      color: "#0a66c2",
    },
    {
      name: "Twitter",
      icon: FaXTwitter,
      url: "https://x.com/ryukazekun776",
      color: "#ffffff",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/m.husain.f.4/",
      color: "#e4405f",
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <div className="status-badge">
            <span className="status-dot"></span>
            Available for new projects
          </div>
          <p className="section-label">GET IN TOUCH</p>
          <h2>
            Let's Talk For <span>Next Projects.</span>
          </h2>
          <p className="contact-description">
            Have a great idea in mind or looking for a collaborative discussion
            to bring a project to life? I am always open to new opportunities,
            creative partnerships, and insightful conversations. Don't hesitate
            to reach out to me directly—let's connect and make it happen!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <Mail className="contact-icon" size={20} />
              <div>
                <h4>Email</h4>
                <p>mhusainfaqihuddin@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" size={20} />
              <div>
                <h4>Location</h4>
                <p>Indonesia, Semarang</p>
              </div>
            </div>
          </div>

          {/* FIX 2: Menambahkan mapping socialLinks agar tombol medsos tampil di layar */}
          <div className="contact-socials">
            <p className="socials-label">Connect with me:</p>
            <div className="socials-grid">
              {socialLinks.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    style={{ "--hover-color": item.color }}
                    aria-label={item.name}
                  >
                    <IconComponent size={18} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-submit">
            Send Message <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
