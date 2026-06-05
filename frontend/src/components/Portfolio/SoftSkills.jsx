import React from 'react';
import { Card } from '../ui/card';
import { Lightbulb, Users, MessageSquare, Brain, Zap, BookOpen, Clock, Target, Search, Sparkles, Languages as LanguagesIcon } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';

const iconMap = {
  Lightbulb,
  Users,
  MessageSquare,
  Brain,
  Zap,
  BookOpen,
  Clock,
  Target,
  Search,
  Sparkles
};

export const SoftSkills = ({ data }) => {
  return (
    <section id="soft-skills" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <AnimatedHeading>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Soft <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Beyond code — the human skills that make me a complete full stack engineer
              </p>
            </AnimatedHeading>
          </div>

          {/* Soft Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
            {data.softSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Sparkles;
              return (
                <Card
                  key={skill.name}
                  className="p-6 group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <h3 className="font-bold text-sm group-hover:text-cyan-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                      {skill.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Languages Section */}
          <div className="mt-20">
            <div className="text-center mb-12 animate-fade-in">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                <LanguagesIcon className="inline-block w-8 h-8 mr-2 text-cyan-500" />
                <span className="bg-gradient-to-r from-blue-400 to-amber-500 bg-clip-text text-transparent">Languages</span>
              </h3>
              <p className="text-muted-foreground">Communication is key</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {data.languages.map((language, index) => (
                <Card
                  key={language.name}
                  className="p-4 sm:p-8 group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                        {language.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{language.level}</p>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {language.proficiency}%
                    </div>
                  </div>
                  <div className="relative h-3 bg-accent rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${language.proficiency}%` }}
                    ></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
