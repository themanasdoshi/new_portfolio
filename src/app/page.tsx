import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Research from '@/components/Research';
import Extracurricular from '@/components/Extracurricular';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Research />
        <Extracurricular />
        <Contact />
      </main>
      <Footer className="relative z-10" />
    </div>
  );
}
