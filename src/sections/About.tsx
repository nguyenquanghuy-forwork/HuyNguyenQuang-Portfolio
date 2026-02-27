import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden glass p-4">
              <img 
                src="https://picsum.photos/seed/huy/800/800" 
                alt="Nguyen Quang Huy" 
                className="w-full h-full object-cover rounded-[32px]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Architecting <span className="text-gradient">Robust</span> Solutions
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              I am a Software Engineer with over 3 years of experience, specializing in .NET backend development for large-scale enterprise systems.
            </p>
            <p className="text-white/60 mb-10 leading-relaxed">
              My core expertise lies in ASP.NET Core Web API, Clean Architecture, Microservices, and CQRS patterns. I focus on designing scalable, maintainable systems that deliver high performance under heavy loads.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white/90">Education</h4>
                  <p className="text-sm text-white/50">Ton Duc Thang University</p>
                  <p className="text-xs text-white/40">Software Development (GPA: 7.68)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Award className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white/90">Focus</h4>
                  <p className="text-sm text-white/50">Scalable Systems</p>
                  <p className="text-xs text-white/40">Clean Architecture & Microservices</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-xl glass border-white/5 text-sm text-white/60">
                #CleanArchitecture
              </div>
              <div className="px-4 py-2 rounded-xl glass border-white/5 text-sm text-white/60">
                #Microservices
              </div>
              <div className="px-4 py-2 rounded-xl glass border-white/5 text-sm text-white/60">
                #CQRS
              </div>
              <div className="px-4 py-2 rounded-xl glass border-white/5 text-sm text-white/60">
                #EnterpriseAPI
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
