import React from 'react';
import { Card } from '../ui/card';
import { Award, Trophy, CheckCircle2, Calendar } from 'lucide-react';

export const Achievements = ({ data }) => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Achievements & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Recognition and credentials that showcase my journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <Award className="w-7 h-7 text-cyan-500" />
                </div>
                <h3 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Certifications</span>
                </h3>
              </div>

              <div className="space-y-4">
                {data.certifications.map((cert, index) => (
                  <Card
                    key={cert.id}
                    className="p-6 group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 animate-slide-left relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all flex-shrink-0">
                        <Award className="w-6 h-6 text-cyan-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h4 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">
                            {cert.name}
                          </h4>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground bg-accent px-2 py-1 rounded-full">
                            <Calendar className="w-3 h-3" />
                            {cert.date}
                          </div>
                        </div>
                        <p className="text-sm text-cyan-500 font-medium mb-2">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500/20 to-cyan-500/20">
                  <Trophy className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-3xl font-bold">
                  <span className="bg-gradient-to-r from-amber-400 to-cyan-500 bg-clip-text text-transparent">Achievements</span>
                </h3>
              </div>

              <Card className="p-6 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 animate-slide-right">
                <div className="space-y-4">
                  {data.achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 group animate-slide-up p-3 rounded-lg hover:bg-accent/50 transition-all duration-300"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="p-1 rounded-full bg-gradient-to-br from-amber-500/20 to-cyan-500/20 group-hover:from-amber-500/40 group-hover:to-cyan-500/40 transition-all flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-5 h-5 text-amber-500" />
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-cyan-500 mb-1">2+</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-amber-500 mb-1">6+</div>
                  <div className="text-xs text-muted-foreground">Achievements</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-accent/50 backdrop-blur-sm hover:bg-accent transition-all duration-300 transform hover:scale-105">
                  <div className="text-2xl font-bold text-blue-500 mb-1">NPM</div>
                  <div className="text-xs text-muted-foreground">Package Published</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
