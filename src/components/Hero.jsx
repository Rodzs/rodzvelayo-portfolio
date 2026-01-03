import { useRef } from 'react';
import TextType from './TextType';
import VariableProximity from './VariableProximity';
import './Hero.css';

function Hero() {
  const containerRef = useRef(null);

  return (
    <section id="hero" className="hero" ref={containerRef}>
      <div className="hero-content">
        <div className="profile-image-container">
          <img 
            src="/images/profile-pic.png" 
            alt="Rodz Gabriel N. Velayo" 
            className="profile-image"
          />
        </div>
        <h1 className="hero-title">
          <TextType 
            text={["Rodz Gabriel N. Velayo"]}
            typingSpeed={75}
            loop={false}
            showCursor={true}
            cursorCharacter="|"
            as="span"
          />
        </h1>
        <h2 className="hero-subtitle">
          <VariableProximity
            label="College Student, Fullstack Developer"
            fromFontVariationSettings="'wght' 400"
            toFontVariationSettings="'wght' 900"
            radius={80}
            falloff="gaussian"
            containerRef={containerRef}
          />
        </h2>
        <p className="hero-description">
          <VariableProximity
            label="Bachelor of Science in Information Technology student with hands-on experience in web application development and proficient in multiple programming languages."
            fromFontVariationSettings="'wght' 300"
            toFontVariationSettings="'wght' 700"
            radius={100}
            falloff="gaussian"
            containerRef={containerRef}
          />
        </p>
      </div>
      
      <div className="contact-details-card">
        <h3>Contact Details</h3>
        <div className="contact-details-grid">
          <div className="detail-item">
            <div className="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="detail-label">Email</div>
              <a href="mailto:rodzvelayo23@gmail.com" className="detail-value">rodzvelayo23@gmail.com</a>
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="detail-label">Phone</div>
              <a className="detail-value">09947154241</a>
            </div>
          </div>
          <div className="detail-item">
            <div className="detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="detail-label">Location</div>
              <div className="detail-value">Cebu, Philippines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
