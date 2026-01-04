import { useRef, useState, useEffect } from 'react';
import './Projects.css';

function Projects() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationRef = useRef(null);

  const projects = [
    {
      title: 'HazTrack',
      period: '08/2025 - 12/2025',
      description: 'Real-time hazard monitoring platform with interactive mapping. Enables communities to report and track environmental hazards through crowdsourced data visualization.',
      technologies: ['React.js', 'Node.js', 'Firebase', 'OpenStreetMap'],
      image: '/images/projects/haztrack.jpg',
      github: 'https://github.com/Rodzs/haztrack-web',
      demo: 'https://haztrack.vercel.app',
      role: 'Hacker/Web Developer'
    },
    {
      title: 'AlliEats',
      period: '09/2025 - 11/2025',
      description: 'AlliEats is a web-based food ordering platform built with ASP.NET Core and Razor Pages. The system provides comprehensive functionality for both administrators and customers to manage menus, place orders, and track deliveries.',
      technologies: ['ASP.NET Core', 'C#', 'SQL Server'],
      image: '/images/projects/allieats.png',
      github: 'https://github.com/Cortsvan/AlliEats',
      demo: '',
      role: 'Technical Lead'
    },
    {
      title: 'TechVent: Tech & Gadget Inventory Management System',
      period: '08/2025 - 11/2025',
      description: 'PHP-based inventory management system for tech retail businesses. Features automated stock replenishment recommendations and supplier tracking to prevent shortages.',
      technologies: ['PHP', 'JavaScript', 'CCS', 'HTML', 'MySQL'],
      image: '/images/projects/techvent.png',
      github: 'https://github.com/Cortsvan/TechVent',
      demo: 'https://cortsvan.github.io/TechVent/',
      role: 'Developer'
    },
    {
      title: 'Innovest',
      period: '02/2025 - 05/2025',
      description: 'An investment platform connecting innovators with investors. IT graduates and professionals can post their project ideas and startup concepts, while investors can discover promising opportunities and connect directly with innovators to fund their ventures.',
      technologies: ['Kotlin', 'Ktor', 'MongoDB'],
      image: '/images/projects/innovest.png',
      github: 'https://github.com/shanedesal/android_app_gradlaunch',
      demo: '',
      role: 'Lead Developer'
    },
    {
      title: 'Enrollment System',
      period: '04/2024 - 05/2024',
      description: 'An enrollment system for educational institutions that streamlines student registration, course selection, schedule management, made with ASP.NET Core and MSSQL',
      technologies: ['C#', 'ASP.NET Core', 'MSSQL'],
      image: 'https://via.placeholder.com/400x250?text=Enrollment+System',
      github: 'https://github.com/Rodzs/Enrollment-System',
      demo: '',
      role: 'Lead Developer'
    },
    {
      title: 'Boneyard Forest',
      period: '11/2023 - 12/2023',
      description: 'Retro-style 2D platformer adventure with pixel art aesthetics. Fight through hordes of undead enemies across multiple challenging levels.',
      technologies: ['Java', 'Game Development', 'Pixel Art'],
      image: '/images/projects/boneyard-forest.png',
      github: 'https://github.com/Rodzs/BoneyardForest-OOP',
      demo: '',
      role: 'Lead Developer'
    },
    {
      title: 'Feastea Inventory Management System',
      period: '03/2022 - 04/2022',
      description: 'Comprehensive inventory and POS solution for retail operations. Streamlines stock management with automated reporting and sales analytics.',
      technologies: ['Java', 'WindowsBuilder', 'phpMyAdmin', 'MySQL'],
      image: '/images/projects/feastea.png',
      github: 'https://github.com/Rodzs/Feastea-Inventory-Management-System',
      demo: '',
      role: 'Lead Developer'
    }
  ];

  // Create tripled array for infinite loop effect
  const tripleProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 420 + 32; // card width (420px) + gap (2rem = 32px)
    const singleSetWidth = projects.length * cardWidth;
    
    // Use requestAnimationFrame to set position after layout is calculated
    requestAnimationFrame(() => {
      // Set initial scroll position to middle set, ensuring first card is fully visible
      container.scrollLeft = singleSetWidth;
      container.style.scrollBehavior = 'auto';
    });

    const handleScroll = () => {
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // Use a more conservative threshold - 1.5 card widths to prevent premature jumping
      const threshold = cardWidth * 1.5;
      
      // Seamless infinite loop - reset when significantly past edges
      if (currentScroll < threshold) {
        // Near start, jump to equivalent position in middle set
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = currentScroll + singleSetWidth;
      } else if (currentScroll > maxScroll - threshold) {
        // Near end, jump to equivalent position in middle set
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = currentScroll - singleSetWidth;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [projects.length]);

  const handleMouseDown = (e) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
    lastXRef.current = e.pageX;
    lastTimeRef.current = Date.now();
    velocityRef.current = 0;
    scrollRef.current.style.cursor = 'grabbing';
    scrollRef.current.style.scrollBehavior = 'auto';
  };

  const applyMomentum = () => {
    if (!scrollRef.current || Math.abs(velocityRef.current) < 0.5) {
      return;
    }

    scrollRef.current.scrollLeft -= velocityRef.current;
    velocityRef.current *= 0.95; // Deceleration factor

    if (Math.abs(velocityRef.current) >= 0.5) {
      animationRef.current = requestAnimationFrame(applyMomentum);
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
      }
      applyMomentum();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
    applyMomentum();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const currentTime = Date.now();
    const currentX = e.pageX;
    const timeDelta = currentTime - lastTimeRef.current;
    
    if (timeDelta > 0) {
      const distance = currentX - lastXRef.current;
      velocityRef.current = distance / timeDelta * 16; // Normalize to 60fps
    }
    
    const walk = (startX - currentX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft + walk;
    
    lastXRef.current = currentX;
    lastTimeRef.current = currentTime;
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title-projects">Projects</h2>
          <p className="section-subtitle-projects">A showcase of my development work and collaborations</p>
        </div>
        <div 
          className="projects-scroll-container"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {tripleProjects.map((project, index) => (
            <div key={index} className="project-card-modern">
              <div className="project-card-bg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-bg-image" 
                  draggable="false"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Project';
                  }} 
                />
                <div className="project-overlay"></div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div>
                    <h3 className="project-title">{project.title}</h3>
                    {project.role && <span className="project-role-badge">{project.role}</span>}
                  </div>
                  <span className="project-period">{project.period}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                {project.github && (
                  <a 
                    href={project.github} 
                    className="action-btn" 
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    className="action-btn action-btn-primary" 
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
