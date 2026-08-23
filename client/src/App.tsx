import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Sports } from './components/Sports';
import { Education } from './components/Education';
import { Goals } from './components/Goals';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FloatingContact } from './components/FloatingContact';

export function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#0b1120' }}>
      {/* Sticky Glassmorphism Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Sports />
        <Education />
        <Goals />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Recruiter Quick Connect Widget */}
      <FloatingContact />

      {/* Interactive Resume PDF Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}

export default App;
