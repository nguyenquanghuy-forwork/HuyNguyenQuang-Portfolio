import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "EPLUS RESEARCH",
      role: ".NET Developer",
      period: "2025 – Present",
      description: "Developing core APIs for VNVC App and internal salary calculation modules. Serving major healthcare systems including VNVC, Tam Anh Hospital, and Eco Green.",
      responsibilities: [
        "Design & develop RESTful APIs with ASP.NET Core",
        "Handle complex business logic for salary calculation",
        "Optimize SQL Server queries for high performance",
        "Integrate systems via RabbitMQ messaging",
        "Collaborate with Mobile teams for production-ready APIs"
      ],
      tech: ["ASP.NET Core", "SQL Server", "RabbitMQ", "Clean Architecture", "Microservices"],
      isRecent: true
    },
    {
      company: "STEP MEDIA SOFTWARE VIETNAM",
      role: ".NET Developer",
      period: "5/2023 – 2/2025",
      description: "Built Go Food & Beverage management system, focusing on high-performance RESTful APIs and real-time communication.",
      responsibilities: [
        "Developed core F&B management features",
        "Optimized system performance for concurrent users",
        "Implemented real-time features using SignalR",
        "Managed distributed tasks with Redis and RabbitMQ"
      ],
      tech: ["ASP.NET Core", "RabbitMQ", "Redis", "SignalR", "Clean Architecture"]
    },
    {
      company: "FPT RETAIL – Q7 HCM",
      role: "Fullstack Developer",
      period: "5/2021 – 3/2023",
      description: "Led migration projects and warehouse booking systems for one of Vietnam's largest retail corporations.",
      responsibilities: [
        "Migrated legacy Winform apps to modern Web platforms",
        "Developed MRP Website using React and .NET Core",
        "Built Warehouse Booking system with NestJS and RabbitMQ",
        "Designed UI components using Ant Design"
      ],
      tech: ["React", ".NET Core API", "PostgreSQL", "NestJS", "RabbitMQ", "Ant Design"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Professional <span className="text-gradient">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Over 3 years of experience building enterprise-grade backend systems.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent opacity-20" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative mb-16 md:mb-24 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

              {/* Content Card */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                <div className="glass p-8 rounded-3xl hover:border-primary/30 transition-all duration-500">
                  {exp.isRecent && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider mb-4">
                      Recent
                    </span>
                  )}
                  <div className={`flex items-center gap-2 mb-2 text-primary font-mono text-sm ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{exp.company}</h3>
                  <p className="text-white/80 font-semibold mb-4">{exp.role}</p>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className={`flex flex-col gap-3 mb-6 ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className={`flex items-start gap-3 text-xs text-white/50 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                        <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
