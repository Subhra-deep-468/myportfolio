import React from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { AnimatedHeading } from './AnimatedHeading';

export const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <AnimatedHeading>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Internship <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-muted-foreground">Building skills through hands-on learning</p>
            </AnimatedHeading>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Animated Vertical Line */}
            <div className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2"></div>

            {data.experience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-cyan-500/50 animate-pulse"></div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <Card className="p-6 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-105 group">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                        <Briefcase className="w-6 h-6 text-cyan-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-muted-foreground font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3 mb-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground leading-relaxed">{resp}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-accent hover:bg-cyan-600/20 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}

            {/* Education Section */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-blue-400 to-amber-500 bg-clip-text text-transparent">Education</span>
              </h3>
              
              <div className="space-y-6">
                {data.education.map((edu, index) => (
                  <Card
                    key={edu.id}
                    className="p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-[1.02] animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                        {edu.highlights && edu.highlights.length > 0 && (
                          <ul className="mt-3 space-y-1">
                            {edu.highlights.map((highlight, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-cyan-500 mt-1">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-cyan-500">{edu.cgpa}</div>
                        <div className="text-sm text-muted-foreground">{edu.duration}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
