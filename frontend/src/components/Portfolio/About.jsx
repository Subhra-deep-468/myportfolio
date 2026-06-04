import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '../ui/card';

export const About = ({ data }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Description */}
            <div className="space-y-6 animate-slide-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {data.about.description}
              </p>
              
              <div className="space-y-4">
                {data.about.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 group animate-slide-left"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 animate-slide-right">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  8+
                </div>
                <div className="text-sm text-muted-foreground">Projects Built</div>
              </Card>

              <Card className="p-6 text-center group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105 animate-slide-right" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-amber-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="text-sm text-muted-foreground">Internship Experience</div>
              </Card>

              <Card className="p-6 text-center group hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 transform hover:scale-105 animate-slide-right" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-cyan-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  7.92
                </div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </Card>

              <Card className="p-6 text-center group hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 animate-slide-right" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  2+
                </div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
