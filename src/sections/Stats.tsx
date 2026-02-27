import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Enterprise Projects", value: 10, suffix: "+" },
    { label: "Large Systems", value: 5, suffix: "+" },
    { label: "Commitment", value: 100, suffix: "%" }
  ];

  return (
    <section className="py-20 bg-background/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">
                <Counter value={stat.value} />{stat.suffix}
              </div>
              <div className="text-sm text-white/40 font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    if (!hasStarted) return;
    
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, hasStarted]);

  return (
    <motion.span
      onViewportEnter={() => setHasStarted(true)}
    >
      {count}
    </motion.span>
  );
};

export default Stats;
