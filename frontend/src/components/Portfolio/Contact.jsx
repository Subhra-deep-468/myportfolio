import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Mail, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { AnimatedHeading } from './AnimatedHeading';

export const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success('Message sent successfully! I\'ll get back to you soon.');

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <AnimatedHeading>
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
            </AnimatedHeading>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 transform hover:scale-105 group animate-slide-left">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                    <Mail className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href={`mailto:${data.personalInfo.email}`} className="font-medium hover:text-cyan-400 transition-colors">
                      {data.personalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-105 group animate-slide-left" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-amber-500/20 group-hover:from-blue-500/30 group-hover:to-amber-500/30 transition-all">
                    <User className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-400 transition-colors">
                      Connect with me
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 transform hover:scale-105 group animate-slide-left" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-amber-500/20 to-cyan-500/20 group-hover:from-amber-500/30 group-hover:to-cyan-500/30 transition-all">
                    <MessageSquare className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-amber-400 transition-colors">
                      View my work
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 animate-slide-right">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fade-in">
                    <div className="p-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 animate-bounce">
                      <CheckCircle2 className="w-16 h-16 text-cyan-500" />
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent!</h3>
                    <p className="text-muted-foreground text-center">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Your Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or just say hi!"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="transition-all duration-300 focus:ring-2 focus:ring-cyan-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
