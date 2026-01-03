import './Contact.css';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

function Contact() {
  const socials = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/Rodzs' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/rodzvelayo' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/rodz.oyalev/' },
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/rodz.oyalevv' }
  ];

  return (
    <section id="contact" className="contact-modern">
      <div className="container">
        <h2 className="section-title-contact">Connect With Me</h2>
        <div className="social-icons">
          {socials.map((social, idx) => (
            <a key={idx} href={social.url} className="social-icon" target="_blank" rel="noopener noreferrer">
              <div className="icon-circle">{social.icon}</div>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
        <footer className="footer">
          <p>© 2026 Rodz Velayo. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
