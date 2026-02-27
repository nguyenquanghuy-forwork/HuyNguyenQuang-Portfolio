import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Server, Database, MessageSquare } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/project/${project.id}`}>
      <motion.div
        whileHover={{ y: -10 }}
        className="group relative glass p-8 rounded-[40px] border-white/10 hover:border-primary/50 transition-all duration-500 h-full flex flex-col"
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <Server className="text-primary" />
            </div>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-white/40 text-sm font-medium mb-6">{project.subtitle}</p>
          
          <p className="text-white/60 text-sm line-clamp-3 mb-8 flex-grow">
            {project.overview}
          </p>

          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              <Database size={12} />
              {project.architecture.database.split(' ')[0]}
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
              <MessageSquare size={12} />
              {project.architecture.messageQueue.split(' ')[0]}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
