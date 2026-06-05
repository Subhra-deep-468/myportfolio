import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import { AnimatedHeading } from './AnimatedHeading';

const VISIBLE_TECHS = 5;

export const Projects = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'React.js', 'Node.js', 'AI APIs', 'MongoDB', 'TypeScript'];

  const filteredProjects = selectedFilter === 'All'
    ? data.projects
    : data.projects.filter(p => p.technologies.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <AnimatedHeading>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                A showcase of my work in full-stack development and AI integration
              </p>
            </AnimatedHeading>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? 'default' : 'outline'}
                onClick={() => setSelectedFilter(filter)}
                className={`transition-all duration-300 transform hover:scale-105 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25'
                    : 'hover:border-cyan-500 hover:text-cyan-500'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => {
              const extraTechs = project.technologies.length - VISIBLE_TECHS;
              return (
                <Card
                  key={project.id}
                  className="group overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-[1.02] animate-fade-in cursor-pointer flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => window.open(project.demo || project.github, '_blank', 'noopener,noreferrer')}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

                    {/* Hover icons */}
                    <div
                      className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-background/90 backdrop-blur-sm hover:bg-cyan-600 hover:text-white text-foreground transition-all duration-300 transform hover:scale-110 shadow-lg"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-background/90 backdrop-blur-sm hover:bg-gray-700 hover:text-white text-foreground transition-all duration-300 transform hover:scale-110 shadow-lg"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 flex flex-col flex-1 gap-3">
                    {/* Title + Category */}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      {project.category && (
                        <Badge className="shrink-0 bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-600/30">
                          {project.category}
                        </Badge>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap items-center gap-2 mt-auto">
                      {project.technologies.slice(0, VISIBLE_TECHS).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-accent hover:bg-cyan-600/20 hover:text-cyan-400 hover:border-cyan-500 transition-all duration-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {extraTechs > 0 && (
                        <span className="text-xs text-muted-foreground">+{extraTechs} more</span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-3 border-t border-border" onClick={(e) => e.stopPropagation()}>
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-muted-foreground text-sm font-medium cursor-not-allowed opacity-50">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </span>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-cyan-500 hover:text-cyan-400 text-sm font-medium transition-all duration-300 transform hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
