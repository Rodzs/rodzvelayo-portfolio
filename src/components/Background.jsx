import { useState } from 'react';
import './Background.css';

function Background() {
  const [activeTab, setActiveTab] = useState('education');

  // Soft skills with circular progress
  const softSkills = [
    { name: 'Project Coordination', level: 75, skills: ['Agile', 'Scrum', 'Project Planning', 'Team Leadership', 'Communication', 'Collaboration'] },
    { name: 'Application Development', level: 90, skills: ['Full Stack Development', 'Web Development', 'Mobile Development', 'Software Engineering'] },
    { name: 'Problem Solving', level: 80, skills: ['Algorithms', 'Debugging', 'Critical Thinking', 'Analysis'] }
  ];
  const [selectedCert, setSelectedCert] = useState(null);

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'University of Cebu - Banilad',
      period: '2022 - 2026',
      logo: '/images/education/uc-logo.jpg', 
      image: '/images/education/uc-campus.jpg'
    },
    {
      degree: 'Senior High School - TechVoc (ICT)',
      school: 'University of Cebu - Banilad Campus',
      period: '2020 - 2022',
      logo: '/images/education/uc-logo.jpg',
      image: '/images/education/uc-shs.jpg'
    }
  ];

  const technicalSkills = [
    { 
      name: 'Programming Languages', 
      level: 80, 
      skills: ['Java', 'C#', 'JavaScript', 'Kotlin', 'PHP'] 
    },
    { 
      name: 'Web Development', 
      level: 88, 
      skills: ['React.js', 'Node.js', 'ASP.NET Core', 'HTML/CSS'] 
    },
    { 
      name: 'Databases & Cloud', 
      level: 80, 
      skills: ['MySQL', 'SQL Server', 'MongoDB', 'Firebase'] 
    }
  ];

  const certificates = [
    {
      title: 'Alliance Jumpstart Training Program',
      issuer: 'Alliance Software Inc.',
      date: '12/2025',
      image: '/images/certificates/alliance-cert.jpg' 
    },
    {
      title: 'Hack4Gov 2024 Region 7',
      issuer: 'DICT Region 7',
      date: '07/2024',
      image: '/images/certificates/hack4gov-cert.jpg'
    },
    {
      title: 'Certificate of Merit - Dean\'s Lister',
      issuer: 'University of Cebu',
      date: '05/2023 - 06/2024',
      image: '/images/certificates/deans-lister.jpg'
    },
    {
      title: 'ICT Congress Java Quiz Competition',
      issuer: 'University of Cebu',
      date: '05/2023',
      image: '/images/certificates/quiz-competition.jpg'
    }
  ];

  return (
    <section id="background" className="background">
      <div className="background-card">
        <h2 className="background-title">Background</h2>
        <p className="background-subtitle">My education, skills, and achievements</p>
        
        <div className="tabs">
            <button 
              className={`tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Education
            </button>
            <button 
              className={`tab ${activeTab === 'skills' ? 'active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Skills
            </button>
            <button 
              className={`tab ${activeTab === 'certifications' ? 'active' : ''}`}
              onClick={() => setActiveTab('certifications')}
            >
              <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certifications
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'education' && (
              <div className="education-list">
                {education.map((edu, index) => (
                  <div key={index} className="education-item-bg">
                    <div className="edu-content">
                      <h3>{edu.degree}</h3>
                      <h4>{edu.school}</h4>
                      <p className="period">{edu.period}</p>
                    </div>
                    <div className="edu-logo-container">
                      <img 
                        src={edu.logo} 
                        alt={edu.school} 
                        className="edu-logo"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/100?text=UC';
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="skills-list-container">
                {technicalSkills.map((skillCategory, index) => (
                  <div key={index} className="skill-category">
                    <div className="skill-header">
                      <h4 className="skill-category-name">{skillCategory.name}</h4>
                      <div className="skill-level-badge">{skillCategory.level}%</div>
                    </div>
                    <div className="skill-progress-bar">
                      <div 
                        className="skill-progress-fill" 
                        style={{ width: `${skillCategory.level}%` }}
                      ></div>
                    </div>
                    <div className="skill-items">
                      {skillCategory.skills.map((skill, idx) => (
                        <span key={idx} className="skill-item-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="certifications-grid">
                {certificates.map((cert, index) => (
                  <div 
                    key={index} 
                    className="cert-card"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="cert-image-container">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=Certificate';
                        }}
                      />
                    </div>
                    <div className="cert-card-info">
                      <h4>{cert.title}</h4>
                      <p className="cert-issuer">{cert.issuer}</p>
                      <p className="cert-date-text">Issued: {cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="cert-modal" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedCert.image} 
              alt={selectedCert.title}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=Certificate';
              }}
            />
            <div className="cert-modal-info">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer}</p>
              <p className="cert-date">Issued: {selectedCert.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Background;
