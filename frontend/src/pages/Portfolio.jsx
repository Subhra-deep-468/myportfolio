import React, { useEffect } from 'react';
import { Hero } from '../components/Portfolio/Hero';
import { About } from '../components/Portfolio/About';
import { Skills } from '../components/Portfolio/Skills';
import { SoftSkills } from '../components/Portfolio/SoftSkills';
import { Projects } from '../components/Portfolio/Projects';
import { Experience } from '../components/Portfolio/Experience';
import { Achievements } from '../components/Portfolio/Achievements';
import { Contact } from '../components/Portfolio/Contact';
import { Header } from '../components/Portfolio/Header';
import { Footer } from '../components/Portfolio/Footer';
import { portfolioData } from '../mock';

const Portfolio = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills data={portfolioData} />
        <SoftSkills data={portfolioData} />
        <Projects data={portfolioData} />
        <Experience data={portfolioData} />
        <Achievements data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      <Footer data={portfolioData} />
    </div>
  );
};

export default Portfolio;
