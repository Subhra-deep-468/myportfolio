import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from '../ThemeProvider';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Awards', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            SC
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-110"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-500" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden rounded-full hover:bg-accent transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <div className="md:hidden fixed inset-y-0 left-0 z-50 w-[85vw] max-w-sm flex flex-col overflow-hidden animate-slide-right"
              style={{ background: 'linear-gradient(135deg, #0d1b3e 0%, #1a1040 50%, #0d2040 100%)' }}
            >
              {/* Stars inside drawer */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <div key={`ds-${i}`} className="star" style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 2.5 + 1}px`,
                    height: `${Math.random() * 2.5 + 1}px`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${Math.random() * 3 + 2}s`,
                  }} />
                ))}
                {[...Array(10)].map((_, i) => (
                  <div key={`dsp-${i}`} className="sparkle" style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 2 + 3}s`,
                  }} />
                ))}
                <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Header */}
              <div className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-white/10"
                style={{ background: 'linear-gradient(90deg, #1e3a8a55, #7c3aed44)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    SC
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Subhradeep Chakraborty</p>
                    <p className="text-xs text-cyan-400">Full Stack Developer</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Nav section */}
              <div className="relative z-10 flex-1 px-4 py-6 overflow-y-auto">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4 px-2">Navigation</p>
                <div className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 font-medium text-base transition-all duration-200 animate-jump"
                      style={{ animationDelay: `${i * 0.06}s` }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dark mode toggle at bottom */}
              <div className="relative z-10 px-4 py-5 border-t border-white/10">
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-blue-400" />}
                    <span className="text-white font-medium text-sm">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </div>
                  <div className={`w-10 h-5 rounded-full transition-all duration-300 relative ${theme === 'dark' ? 'bg-cyan-500' : 'bg-white/20'}`}>
                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${theme === 'dark' ? 'left-5' : 'left-0.5'}`} />
                  </div>
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
