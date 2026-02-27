"use client";

import { motion } from "framer-motion";
import { Lock, Key, ShieldCheck, HardDrive, CheckCircle } from "lucide-react";

export default function Security() {
  const points = [
    {
      title: "Tenant Data Isolation",
      description: "Proprietary multi-tenant architecture ensuring your data is never shared or leaked between institutions.",
      icon: Lock,
    },
    {
      title: "Role-Based Access Control",
      description: "Granular permissions for staff, teachers, and admins to ensure zero-trust security.",
      icon: Key,
    },
    {
      title: "Enterprise Encryption",
      description: "Industry-standard AES-256 encryption for data at rest and TLS 1.3 for data in transit.",
      icon: ShieldCheck,
    },
    {
      title: "Regular Backups",
      description: "Automated daily backups with multi-region failover to ensure 99.99% data availability.",
      icon: HardDrive,
    },
  ];

  return (
    <section id="security" className="bg-foreground text-background py-24 sm:py-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
        <div className="h-96 w-96 bg-primary rounded-full"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 blur-3xl opacity-10 pointer-events-none">
        <div className="h-96 w-96 bg-secondary rounded-full"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary">Security First</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-pretty">Enterprise-Grade Compliance</p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Edvnt is built on a foundation of security. We understand the sensitivity of educational data and implement rigorous standards to protect it.
            </p>
            
            <div className="mt-10 space-y-8">
              {points.map((point, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={point.title} 
                  className="flex gap-4 group"
                >
                  <div className="text-primary mt-1 transform group-hover:scale-110 transition-transform">
                    <point.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
            className="mt-16 lg:mt-0"
          >
            <div className="bg-background/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl ring-1 ring-inset ring-white/10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-tighter text-white">Certified Security</h4>
                  <p className="text-sm text-gray-400">GDPR & Data Privacy Compliant</p>
                </div>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
                  <div className="h-full w-3/4 bg-primary/70 animate-pulse rounded"></div>
                </div>
                <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                <div className="flex gap-4 mt-6">
                  <div className="h-16 flex-1 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 animate-ping opacity-20"></div>
                    <span className="text-xs font-bold tracking-widest uppercase text-primary mb-1">Status</span>
                    <span className="text-sm font-semibold text-white">Active</span>
                  </div>
                  <div className="h-16 flex-1 bg-white/5 rounded-xl border border-white/10 flex flex-col items-center justify-center">
                    <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-1">Encrypted</span>
                    <span className="text-sm font-semibold text-white">AES-256</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
