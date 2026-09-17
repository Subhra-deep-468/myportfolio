import React, { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from '../ThemeProvider';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // iOS-safe scroll lock: saves scroll position, uses position:fixed trick
  useEffect(() => {
    if (isMobileMenuOpen) {
      scrollYRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

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
      setIsMobileMenuOpen(false);
      // small delay so scroll-lock cleanup fires first
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  };

  return (
    <>
      {/* ── Header bar: z-40 so backdrop + drawer sit above it ── */}
      <header
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-b border-border shadow-lg'
            : 'bg-transparent'
        }`}
        style={{ zIndex: 40 }}
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
                  className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu button */}
            <div className="flex items-center gap-3">
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

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden rounded-full hover:bg-accent transition-all duration-300"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── Backdrop: z-50, above header, below drawer ── */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0"
          style={{ zIndex: 50, background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* ── Drawer: z-60, above everything ── */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed left-0 top-0 w-[85vw] max-w-[340px] flex flex-col overflow-hidden animate-slide-right"
          style={{
            zIndex: 60,
            top: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #0d1b3e 0%, #1a1040 50%, #0d2040 100%)',
          }}
        >
          {/* Stars */}
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

          {/* Drawer header — padding-top uses safe-area for notched phones */}
          <div
            className="relative z-10 flex items-center justify-between px-5 pb-5 border-b border-white/10 flex-shrink-0"
            style={{
              paddingTop: 'calc(env(safe-area-inset-top, 0px) + 20px)',
              background: 'linear-gradient(90deg, #1e3a8a55, #7c3aed44)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
                SC
              </div>
              <div className="min-w-0">
                <p className="font-bold text-white text-sm truncate">Subhradeep Chakraborty</p>
                <p className="text-xs text-cyan-400">Full Stack Developer</p>
              </div>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0 ml-2"
              aria-label="Close menu"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Nav items */}
          <div
            className="relative z-10 flex-1 px-4 py-6 overflow-y-auto"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
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

          {/* Theme toggle — padding-bottom for home indicator */}
          <div
            className="relative z-10 px-4 pt-4 border-t border-white/10 flex-shrink-0"
            style={{ paddingBottom: 'max(20px, env(safe-area-inset-bottom, 0px))' }}
          >
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                {theme === 'dark'
                  ? <Sun className="w-5 h-5 text-amber-400" />
                  : <Moon className="w-5 h-5 text-blue-400" />}
                <span className="text-white font-medium text-sm">
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
              </div>
              <div className={`w-10 h-5 rounded-full transition-all duration-300 relative ${theme === 'dark' ? 'bg-cyan-500' : 'bg-white/20'}`}>
                <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-all duration-300 ${theme === 'dark' ? 'left-5' : 'left-0.5'}`} />
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
