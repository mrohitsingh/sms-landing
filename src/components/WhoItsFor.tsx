"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Users, Globe } from "lucide-react";

const targets = [
  {
    title: "K-12 Schools",
    description: "Manage multiple branches, student lifecycles, and parent communication from a single dashboard.",
    icon: Building2,
  },
  {
    title: "Colleges & Universities",
    description: "Handle complex course structures, credit systems, and advanced academic reporting.",
    icon: GraduationCap,
  },
  {
    title: "Coaching Institutes",
    description: "Streamline batch management, attendance, and competitive exam performance tracking.",
    icon: Users,
  },
  {
    title: "Multi-Campus Groups",
    description: "Enterprise-grade multi-tenant architecture for franchises and educational groups.",
    icon: Globe,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } }
};

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="bg-muted py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Built for Education</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">One Platform, Every Institution</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you&apos;re a local school or a global education group, Edvnt scales with your needs.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4"
          >
            {targets.map((target) => (
              <motion.div 
                variants={cardVariants}
                key={target.title} 
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-background/60 backdrop-blur-sm border border-border sm:hover:border-primary/30 sm:hover:shadow-xl sm:hover:shadow-primary/5 transition-all duration-300 sm:hover:-translate-y-2 group"
              >
                <div className="mb-6 rounded-2xl bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <target.icon className="h-8 w-8" />
                </div>
                <div className="flex flex-auto flex-col">
                  <p className="text-xl font-bold leading-7 text-foreground mb-3">{target.title}</p>
                  <p className="text-base leading-7 text-muted-foreground">{target.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
