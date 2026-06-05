import React, { useState, useEffect } from 'react';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { AnimatedHeading } from './AnimatedHeading';

export const Skills = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedLevels, setAnimatedLevels] = useState({});

  useEffect(() => {
    // Animate progress bars when category changes
    const timer = setTimeout(() => {
      const newLevels = {};
      data.skills[activeCategory]?.items.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedLevels(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 100);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory, data.skills]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <AnimatedHeading>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit for building modern, scalable applications
              </p>
            </AnimatedHeading>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {data.skills.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-accent text-muted-foreground hover:bg-accent/80'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <Card className="p-4 sm:p-8 backdrop-blur-sm bg-card/50 border-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
            <div className="space-y-6">
              {data.skills[activeCategory]?.items.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-lg group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-cyan-500">
                      {animatedLevels[skill.name] || 0}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress
                      value={animatedLevels[skill.name] || 0}
                      className="h-3 bg-accent"
                    />
                    <div
                      className="absolute top-0 left-0 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${animatedLevels[skill.name] || 0}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Skill Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center p-6 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-cyan-500 mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Total Skills</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-500 mb-2">6</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-amber-500 mb-2">3+</div>
              <div className="text-sm text-muted-foreground">Years Learning</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent transition-all duration-300 transform hover:scale-105">
              <div className="text-3xl font-bold text-cyan-500 mb-2">AI/ML</div>
              <div className="text-sm text-muted-foreground">Specialization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
