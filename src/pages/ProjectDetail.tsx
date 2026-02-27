import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Cpu, Database, Globe, Layers, Layout, Server, Zap } from 'lucide-react';
import { projects } from '../data/projects';
import ArchitectureDiagram from '../components/ArchitectureDiagram';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </motion.button>

        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              {project.title}
            </h1>
            <p className="text-2xl text-gradient font-medium">
              {project.subtitle}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column: Content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Overview */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-6">Overview</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                {project.overview}
              </p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8">My Responsibilities</h2>
              <div className="grid gap-6">
                {project.responsibilities.map((resp, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <p className="text-white/70 leading-relaxed">{resp}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* System Architecture */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8">System Architecture</h2>
              <ArchitectureDiagram 
                api={project.architecture.api}
                mq={project.architecture.messageQueue}
                db={project.architecture.database}
                cache={project.architecture.caching}
                realtime={project.architecture.realtime}
              />
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/40 mb-8">Business Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.impact.map((imp, i) => (
                  <div key={i} className="p-6 rounded-2xl glass border-primary/20 bg-primary/5">
                    <p className="text-white/90 font-medium">{imp}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-12">
            {/* Tech Stack */}
            <section className="glass p-8 rounded-[32px]">
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                <Cpu size={20} className="text-primary" />
                Tech Stack
              </h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.backend.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">Database</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.database.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">Infrastructure</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.infrastructure.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">{t}</span>
                    ))}
                  </div>
                </div>

                {project.techStack.frontend && (
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-4">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.frontend.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Screenshots */}
            <section className="space-y-6">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Layout size={20} className="text-secondary" />
                Key Interfaces
              </h3>
              {project.screenshots.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-white/10">
                  <img 
                    src={src} 
                    alt={`${project.title} screenshot ${i+1}`} 
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
