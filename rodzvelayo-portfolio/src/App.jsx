import Header from './components/Header';
import Hero from './components/Hero';
import Background from './components/Background';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Galaxy from './components/Galaxy';
import GradualBlur from './components/GradualBlur';
import AnimatedContent from './components/AnimatedContent';
import './App.css';

function App() {
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh', overflowY: 'auto' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Galaxy
          saturation={0.9}
          rotationSpeed={0.05}
          starSpeed={0.3}
          speed={0.6}
          mouseRepulsion={false}
          mouseInteraction={false}
          hueShift={300}
          glowIntensity={0.5}
          transparent={false}
        />
      </div>
      <Header />
      <main>
        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
          toggleOnScroll={true}
        >
          <Hero />
        </AnimatedContent>
        
        <AnimatedContent
          distance={120}
          direction="vertical"
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.2}
          delay={0.1}
          toggleOnScroll={true}
        >
          <Background />
        </AnimatedContent>
        
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.3}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={0.95}
          threshold={0.2}
          delay={0.2}
          toggleOnScroll={true}
        >
          <Projects />
        </AnimatedContent>
        
        <AnimatedContent
          distance={100}
          direction="vertical"
          duration={1.1}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          scale={0.95}
          threshold={0.2}
          delay={0.15}
          toggleOnScroll={true}
        >
          <Skills />
        </AnimatedContent>
        
        <AnimatedContent
          distance={120}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0}
          animateOpacity
          threshold={0.2}
          delay={0.1}
          toggleOnScroll={true}
        >
          <Contact />
        </AnimatedContent>
      </main>
      
      <GradualBlur
        target="page"
        position="bottom"
        height="3rem"
        strength={3}
        divCount={8}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
      <GradualBlur
        target="page"
        position="top"
        height="3rem"
        strength={3}
        divCount={8}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  );
}

export default App;
