import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                Professional <span className="text-gradient">Resume</span>
              </h1>
              <p className="text-white/60">
                Detailed overview of my professional experience, education, and technical skills.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://www.canva.com/design/DAF3_QVN56E/0hq9_bvbSOIo4mlQ3Psh6w/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
              >
                <ExternalLink size={18} />
                <span>Open in Canva</span>
              </a>
            </div>
          </div>

          {/* Canva Embed */}
          <div className="glass p-4 rounded-[32px] border-white/10 overflow-hidden">
            <div style={{
              position: 'relative',
              width: '100%',
              height: 0,
              paddingTop: '141.4286%',
              paddingBottom: 0,
              boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
              overflow: 'hidden',
              borderRadius: '16px',
              willChange: 'transform'
            }}>
              <iframe 
                loading="lazy" 
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  border: 'none',
                  padding: 0,
                  margin: 0
                }}
                src="https://www.canva.com/design/DAF3_QVN56E/0hq9_bvbSOIo4mlQ3Psh6w/view?embed" 
                allowFullScreen={true}
                allow="fullscreen"
                title="Nguyen Quang Huy Resume"
              >
              </iframe>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-white/40 text-sm mb-6">
              Can't see the resume? <a href="https://www.canva.com/design/DAF3_QVN56E/0hq9_bvbSOIo4mlQ3Psh6w/view" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Click here to view it directly.</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
