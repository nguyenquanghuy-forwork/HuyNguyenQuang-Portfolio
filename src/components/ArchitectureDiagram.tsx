import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Zap, MessageSquare, Share2, ArrowRight } from 'lucide-react';

interface ArchitectureNodeProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

const ArchitectureNode = ({ icon, label, value, color }: ArchitectureNodeProps) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center gap-3 p-4 rounded-2xl glass border-white/10 w-full md:w-48 text-center"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color} bg-opacity-10 mb-2`}>
      {icon}
    </div>
    <div className="space-y-1">
      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{label}</p>
      <p className="text-xs font-bold text-white/90">{value}</p>
    </div>
  </motion.div>
);

interface ArchitectureDiagramProps {
  api: string;
  mq: string;
  db: string;
  cache: string;
  realtime?: string;
}

const ArchitectureDiagram = ({ api, mq, db, cache, realtime }: ArchitectureDiagramProps) => {
  return (
    <div className="relative py-12 px-6 rounded-[32px] bg-white/5 border border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
      
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-12">
        {/* API Layer */}
        <ArchitectureNode 
          icon={<Server className="text-primary" />} 
          label="API Layer" 
          value={api} 
          color="bg-primary"
        />

        <div className="hidden md:block">
          <ArrowRight className="text-white/20" />
        </div>

        <div className="flex flex-col gap-8">
          {/* Message Queue */}
          <ArchitectureNode 
            icon={<MessageSquare className="text-secondary" />} 
            label="Messaging" 
            value={mq} 
            color="bg-secondary"
          />
          
          {/* Realtime */}
          {realtime && (
            <ArchitectureNode 
              icon={<Zap className="text-yellow-400" />} 
              label="Real-time" 
              value={realtime} 
              color="bg-yellow-400"
            />
          )}
        </div>

        <div className="hidden md:block">
          <ArrowRight className="text-white/20" />
        </div>

        <div className="flex flex-col gap-8">
          {/* Database */}
          <ArchitectureNode 
            icon={<Database className="text-accent" />} 
            label="Storage" 
            value={db} 
            color="bg-accent"
          />
          
          {/* Cache */}
          <ArchitectureNode 
            icon={<Share2 className="text-emerald-400" />} 
            label="Caching" 
            value={cache} 
            color="bg-emerald-400"
          />
        </div>
      </div>

      {/* Connection Lines (Visual Decor) */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10 hidden md:block" />
    </div>
  );
};

export default ArchitectureDiagram;
