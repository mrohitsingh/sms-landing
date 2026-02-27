"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Fingerprint, FileText, CreditCard, Bell } from "lucide-react";

const features = [
  {
    name: "Student Management",
    description: "Complete student profile management, from admission to graduation, with automated records.",
    icon: Users,
  },
  {
    name: "Academic Management",
    description: "Manage courses, batches, subjects, and timetables with an intuitive drag-and-drop interface.",
    icon: BookOpen,
  },
  {
    name: "Attendance & Leave",
    description: "Biometric and RFID integration for automated attendance tracking and leave management.",
    icon: Fingerprint,
  },
  {
    name: "Exams & Reports",
    description: "Automated exam scheduling, grading, and generation of printable report cards and transcripts.",
    icon: FileText,
  },
  {
    name: "Fees & Payments",
    description: "Secure online fee collection with multiple gateways and automated receipt generation.",
    icon: CreditCard,
  },
  {
    name: "Communication Hub",
    description: "Integrated SMS, email, and app notifications to keep parents and staff always in sync.",
    icon: Bell,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/30 -skew-y-2 transform -z-10 origin-bottom-left" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Everything You Need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-pretty">Comprehensive School ERP Powered by AI</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Edvnt provides a unified experience for administrators, teachers, and parents with powerful modules.
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.name} 
                variants={itemVariants}
                className="relative pl-16 group"
              >
                <dt className="text-base font-bold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
