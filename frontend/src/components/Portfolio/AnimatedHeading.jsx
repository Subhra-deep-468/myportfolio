import React from 'react';

export const AnimatedHeading = ({ children, className = "" }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Animated grid background */}
      <div className="heading-grid"></div>
      
      {/* Orbiting circles */}
      <div className="heading-orbit"></div>
      <div className="heading-orbit heading-orbit-2"></div>
      
      {/* Floating dots */}
      <div className="heading-dots">
        <span className="heading-dot" style={{ top: '10%', left: '5%', animationDelay: '0s' }}></span>
        <span className="heading-dot" style={{ top: '80%', left: '90%', animationDelay: '1s' }}></span>
        <span className="heading-dot" style={{ top: '30%', left: '95%', animationDelay: '2s' }}></span>
        <span className="heading-dot" style={{ top: '70%', left: '10%', animationDelay: '3s' }}></span>
        <span className="heading-dot" style={{ top: '50%', left: '0%', animationDelay: '1.5s' }}></span>
        <span className="heading-dot" style={{ top: '20%', left: '50%', animationDelay: '2.5s' }}></span>
        <span className="heading-dot" style={{ top: '90%', left: '40%', animationDelay: '0.5s' }}></span>
        <span className="heading-dot" style={{ top: '5%', left: '70%', animationDelay: '3.5s' }}></span>
      </div>
      
      {/* Pulse glow */}
      <div className="heading-bg-wrapper"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
