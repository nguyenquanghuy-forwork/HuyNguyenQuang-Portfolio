import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      icon: <Server className="text-primary" />,
      skills: ["C#", "ASP.NET Core", "RESTful API", "Entity Framework", "Clean Architecture", "Microservices", "CQRS", "MediatR", "SignalR"]
    },
    {
      title: "Database",
      icon: <Database className="text-secondary" />,
      skills: ["SQL Server", "PostgreSQL", "Elasticsearch", "Redis"]
    },
    {
      title: "Messaging & Frontend",
      icon: <Globe className="text-accent" />,
      skills: ["RabbitMQ", "SMTP", "ReactJS", "React TypeScript", "Ant Design"]
    },
    {
      title: "Tools & DevOps",
      icon: <GitBranch className="text-white/60" />,
      skills: ["Gitlab", "Jenkins", "SourceTree", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Technical <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            A comprehensive stack focused on building high-performance, scalable enterprise applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl group hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/70 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
