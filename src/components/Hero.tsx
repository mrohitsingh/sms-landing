"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Chrome, Database, MessageSquare } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-24 sm:pt-32 sm:pb-40">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -z-10 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-[-10%]" aria-hidden="true">
        <svg fill="none" viewBox="0 0 1024 1024" className="absolute top-0 left-1/2 h-[64rem] w-[64rem] -translate-x-1/2" strokeWidth="2">
          <circle cx="512" cy="512" r="512" fill="url(#pattern)" fillOpacity="0.1" />
          <defs>
            <radialGradient id="pattern">
              <stop stopColor="#4f46e5" />
              <stop offset="1" stopColor="#3730a3" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex w-max items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Trusted by 500+ Institutions Worldwide
            </motion.div>
            
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Modern ERP for <span className="text-primary italic">Future-Ready</span> Schools.
            </h1>
            
            <p className="mt-8 text-lg leading-8 text-muted-foreground sm:text-xl">
              Edvnt is a secure, multi-tenant school management system designed to streamline administration, empower teachers, and engage parents. All-in-one, cloud-born, and enterprise-grade.
            </p>
            
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#request-demo"
                className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-primary-foreground shadow-xl transition-all hover:bg-secondary hover:shadow-primary/25 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Request a Demo
              </Link>
              <Link
                href="#pricing"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-border bg-background px-8 text-base font-bold text-foreground transition-all hover:bg-muted hover:border-primary/20 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Start Free Trial
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6 grayscale opacity-60">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Compatible with:</span>
              <div className="flex gap-6 items-center">
                {/* Visual placeholders for integrations */}
                <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <div className="h-8 w-8 rounded bg-[#F4B400]/10 flex items-center justify-center text-[#F4B400]">
                    <Chrome className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-foreground">Google</span>
                </div>
                <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <div className="h-8 w-8 rounded-full bg-[#0078D4]/10 flex items-center justify-center text-[#0078D4]">
                    <Database className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-foreground">Microsoft</span>
                </div>
                <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <div className="h-8 w-8 rounded bg-[#4A154B]/10 flex items-center justify-center text-[#4A154B]">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-foreground">Slack</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 sm:mt-24 lg:col-span-5 lg:mt-0 flex items-center"
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-foreground/5 backdrop-blur-xl border border-border/50 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex h-full w-full flex-col bg-gradient-to-br from-white/10 to-transparent dark:from-white/5">
                  <div className="flex items-center justify-between border-b border-border/50 bg-black/5 px-4 py-3 backdrop-blur-md">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                      <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></div>
                      <div className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    </div>
                    <div className="h-4 w-1/3 rounded bg-foreground/10"></div>
                  </div>
                  <div className="flex flex-1 gap-4 p-4">
                    {/* Sidebar mockup */}
                    <div className="w-16 hidden sm:flex flex-col gap-3 border-r border-border/50 pr-4">
                      <div className="h-8 w-8 rounded bg-primary/20 mb-4"></div>
                      <div className="h-8 w-8 rounded-lg bg-foreground/5 sm:hover:bg-foreground/10 transition-colors"></div>
                      <div className="h-8 w-8 rounded-lg bg-foreground/5 sm:hover:bg-foreground/10 transition-colors"></div>
                      <div className="h-8 w-8 rounded-lg bg-foreground/5 sm:hover:bg-foreground/10 transition-colors"></div>
                    </div>
                    
                    {/* Main content mockup */}
                    <div className="flex-1 flex flex-col gap-4">
                      <div className="flex justify-between items-center">
                        <div className="h-5 w-32 rounded bg-foreground/10"></div>
                        <div className="h-8 w-24 rounded-full bg-primary/20"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-24 rounded-xl bg-foreground/5 border border-border/50 p-4 flex flex-col justify-between sm:hover:bg-foreground/10 transition-colors">
                          <div className="h-3 w-16 rounded bg-foreground/20"></div>
                          <div className="h-6 w-24 rounded bg-primary/40"></div>
                        </div>
                        <div className="h-24 rounded-xl bg-foreground/5 border border-border/50 p-4 flex flex-col justify-between sm:hover:bg-foreground/10 transition-colors">
                          <div className="h-3 w-16 rounded bg-foreground/20"></div>
                          <div className="h-6 w-24 rounded bg-secondary/40"></div>
                        </div>
                      </div>
                      
                      <div className="flex-1 rounded-xl bg-foreground/5 border border-border/50 p-4 mt-2">
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded-full bg-emerald-500/20"></div>
                            <div className="h-2 w-full rounded bg-foreground/10"></div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded-full bg-amber-500/20"></div>
                            <div className="h-2 w-5/6 rounded bg-foreground/10"></div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="h-6 w-6 rounded-full bg-primary/20"></div>
                            <div className="h-2 w-4/6 rounded bg-foreground/10"></div>
                          </div>
                        </div>
                      </div>
                    </div>
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
