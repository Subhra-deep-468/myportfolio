import React from 'react';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { Button } from '../ui/button';

export const Hero = ({ data }) => {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = data.personalInfo.resumeUrl;
    link.download = 'Subhradeep_Chakraborty_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Twinkling Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Star layers */}
        <div className="stars-container">
          {[...Array(80)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
          {[...Array(30)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 2 + 3}s`,
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={`shooting-${i}`}
              className="shooting-star"
              style={{
                left: `${Math.random() * 50}%`,
                top: `${Math.random() * 50}%`,
                animationDelay: `${Math.random() * 10 + i * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Animated background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Avatar with animation */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-amber-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <img
                  src={data.personalInfo.avatar}
                  alt={data.personalInfo.name}
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-background shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-jump" style={{ animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-400 bg-clip-text text-transparent">
                {data.personalInfo.name}
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-muted-foreground animate-jump leading-snug max-w-6xl mx-auto" style={{ animationDelay: '0.3s' }}>
              {data.personalInfo.title}
            </h2>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-jump" style={{ animationDelay: '0.5s' }}>
              {data.personalInfo.tagline}
            </p>

            {/* Location */}
            <div className="flex items-center justify-center gap-2 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <MapPin className="w-5 h-5" />
              <span>{data.personalInfo.location}</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-accent shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={handleDownloadResume}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <a
                href={data.personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-accent hover:bg-cyan-600/20 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
              </a>
              <a
                href={data.personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-full bg-accent hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={`mailto:${data.personalInfo.email}`}
                className="group relative p-3 rounded-full bg-accent hover:bg-amber-600/20 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-amber-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full p-1">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};
