import './Skills.css';
import LogoLoop from './LogoLoop';
import { 
  SiJavascript, SiKotlin, SiPhp, SiPython, SiTypescript,
  SiReact, SiBootstrap, SiTailwindcss,
  SiDotnet, SiNodedotjs, SiPostman,
  SiFirebase, SiMongodb, SiMysql,
  SiGithub, SiVercel
} from 'react-icons/si';
import { DiJava, DiMsqlServer } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';

function Skills() {
  const languages = [
    { node: <TbBrandCSharp />, title: "C#" },
    { node: <DiJava />, title: "Java" },
    { node: <SiJavascript />, title: "JavaScript" },
    { node: <SiKotlin />, title: "Kotlin" },
    { node: <SiPhp />, title: "PHP" },
    { node: <SiPython />, title: "Python" },
    { node: <SiTypescript />, title: "TypeScript" },
  ];

  const frontend = [
    { node: <SiReact />, title: "React" },
    { node: <SiBootstrap />, title: "Bootstrap" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
  ];

  const backend = [
    { node: <SiDotnet />, title: ".NET" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <SiPostman />, title: "Postman" },
  ];

  const databases = [
    { node: <SiFirebase />, title: "Firebase" },
    { node: <DiMsqlServer />, title: "Microsoft SQL Server" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiMysql />, title: "MySQL" },
  ];

  const tools = [
    { node: <SiGithub />, title: "GitHub" },
    { node: <SiVercel />, title: "Vercel" },
  ];

  const renderLogoWithLabel = (item) => (
    <div className="tech-item-wrapper">
      {item.node}
      <span className="tech-label">{item.title}</span>
    </div>
  );

  return (
    <section id="skills" className="skills-tech">
      <div className="container">
        <h2 className="section-title-tech">Tech Stack</h2>
        
        <div className="tech-columns">
          <div className="tech-column">
            <h3 className="tech-category-title">Languages</h3>
            <div className="logo-loop-wrapper">
              <LogoLoop
                logos={languages.map(item => ({
                  ...item,
                  node: renderLogoWithLabel(item)
                }))}
                direction="up"
                speed={25}
                logoHeight={90}
                gap={40}
                pauseOnHover
              />
            </div>
          </div>

          <div className="tech-column">
            <h3 className="tech-category-title">Frontend</h3>
            <div className="logo-loop-wrapper">
              <LogoLoop
                logos={frontend.map(item => ({
                  ...item,
                  node: renderLogoWithLabel(item)
                }))}
                direction="up"
                speed={25}
                logoHeight={90}
                gap={40}
                pauseOnHover
              />
            </div>
          </div>

          <div className="tech-column">
            <h3 className="tech-category-title">Backend</h3>
            <div className="logo-loop-wrapper">
              <LogoLoop
                logos={backend.map(item => ({
                  ...item,
                  node: renderLogoWithLabel(item)
                }))}
                direction="up"
                speed={25}
                logoHeight={90}
                gap={40}
                pauseOnHover
              />
            </div>
          </div>

          <div className="tech-column">
            <h3 className="tech-category-title">Databases</h3>
            <div className="logo-loop-wrapper">
              <LogoLoop
                logos={databases.map(item => ({
                  ...item,
                  node: renderLogoWithLabel(item)
                }))}
                direction="up"
                speed={25}
                logoHeight={90}
                gap={40}
                pauseOnHover
              />
            </div>
          </div>

          <div className="tech-column">
            <h3 className="tech-category-title">Tools</h3>
            <div className="logo-loop-wrapper">
              <LogoLoop
                logos={tools.map(item => ({
                  ...item,
                  node: renderLogoWithLabel(item)
                }))}
                direction="up"
                speed={25}
                logoHeight={90}
                gap={40}
                pauseOnHover
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
