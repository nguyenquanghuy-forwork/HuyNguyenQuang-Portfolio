import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-primary" />,
      label: "Phone",
      value: "0394456614",
      href: "tel:0394456614"
    },
    {
      icon: <Mail className="text-secondary" />,
      label: "Email",
      value: "nguyenquanghuy.forwork@gmail.com",
      href: "mailto:nguyenquanghuy.forwork@gmail.com"
    },
    {
      icon: <MapPin className="text-accent" />,
      label: "Location",
      value: "Ho Chi Minh City",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's build <span className="text-gradient">scalable</span> systems together.
              </h2>
              <p className="text-white/60 text-lg mb-12 leading-relaxed">
                I'm always open to discussing enterprise backend architecture, .NET development, or potential collaborations on large-scale systems.
              </p>

              <div className="space-y-8">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/40 font-medium uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="text-xl font-bold text-white/80 group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-6 mt-12">
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary transition-all hover:scale-110">
                  <Github size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:text-primary transition-all hover:scale-110">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[40px] border-white/10 relative"
            >
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/60 ml-1">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-primary/50 outline-none transition-all text-white resize-none"
                  />
                </div>
                <button className="w-full py-5 rounded-2xl bg-primary text-white font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all active:scale-95">
                  Send Message <Send size={18} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
