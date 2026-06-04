import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = ({ data }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {data.personalInfo.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full Stack Developer & AI Enthusiast passionate about creating innovative digital solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-cyan-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="flex gap-4">
                <a
                  href={data.personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent hover:bg-cyan-600/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Github className="w-5 h-5 hover:text-cyan-400 transition-colors" />
                </a>
                <a
                  href={data.personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-accent hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href={`mailto:${data.personalInfo.email}`}
                  className="p-3 rounded-full bg-accent hover:bg-amber-600/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="w-5 h-5 hover:text-amber-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                © {currentYear} {data.personalInfo.name}. Built with
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                using React & Tailwind CSS
              </p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
