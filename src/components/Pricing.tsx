"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      id: "tier-starter",
      price: "$99",
      description: "Perfect for single-branch schools and coaching institutes.",
      features: [
        "Up to 250 Students",
        "Student & Academic Management",
        "Basic Reports",
        "Email Support",
      ],
      buttonText: "Start Free Trial",
      featured: false,
    },
    {
      name: "Pro",
      id: "tier-pro",
      price: "$249",
      description: "Best for growing schools needing advanced automation.",
      features: [
        "Up to 1000 Students",
        "Everything in Starter",
        "Fees & Online Payments",
        "SMS & App Notifications",
        "Attendance Integration",
        "Priority Support",
      ],
      buttonText: "Request a Demo",
      featured: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      price: "Custom",
      description: "For multi-campus groups and large universities.",
      features: [
        "Unlimited Students",
        "Multi-Branch Architecture",
        "Custom Branding",
        "Dedicated Account Manager",
        "On-premise Deployment Option",
        "24/7 Phone Support",
      ],
      buttonText: "Contact Sales",
      featured: false,
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-base font-semibold leading-7 text-primary">Simple Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Transparent plans for every institution</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the best plan for your institution. No hidden fees, cancel anytime.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-start gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8"
        >
          {tiers.map((tier) => (
            <motion.div
              variants={cardVariants}
              key={tier.id}
              className={`flex flex-col rounded-3xl p-8 ring-1 transition-all duration-300 relative group flex-1 h-full ${
                tier.featured
                  ? "bg-primary text-primary-foreground shadow-[0_0_40px_-10px_rgba(67,56,202,0.4)] sm:scale-105 z-10 ring-primary border-0"
                  : "bg-background/60 backdrop-blur-sm text-foreground hover:shadow-xl ring-border hover:ring-primary/30"
              }`}
            >
              {tier.featured && (
                <div className="absolute -inset-[1px] rounded-[1.5rem] ring-2 ring-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              )}
              {tier.featured && (
                <div className="absolute top-0 right-6 translate-y-[-50%] bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className={`text-lg font-bold leading-7 ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className={`text-4xl font-extrabold tracking-tight ${tier.featured ? "text-primary-foreground" : "text-foreground"}`}>
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className={`text-sm font-semibold ${tier.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    /month
                  </span>
                )}
              </p>
              <p className={`mt-6 text-sm leading-6 ${tier.featured ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {tier.description}
              </p>
              <ul className={`mt-8 space-y-3 text-sm leading-6 ${tier.featured ? "text-primary-foreground" : "text-muted-foreground"}`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <Check className={`h-5 w-5 flex-none ${tier.featured ? "text-primary-foreground" : "text-primary"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex-1 flex flex-col justify-end">
                <Link
                  href={tier.price === "Custom" ? "#contact" : "#request-demo"}
                  className={`block rounded-xl px-3.5 py-3 text-center text-sm font-bold shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:-translate-y-1 ${
                    tier.featured
                      ? "bg-white text-primary hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      : "bg-primary text-white hover:bg-secondary"
                  }`}
                >
                  {tier.buttonText}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
