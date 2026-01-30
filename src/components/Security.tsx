export default function Security() {
  const points = [
    {
      title: "Tenant Data Isolation",
      description: "Proprietary multi-tenant architecture ensuring your data is never shared or leaked between institutions.",
      icon: "🔒",
    },
    {
      title: "Role-Based Access Control",
      description: "Granular permissions for staff, teachers, and admins to ensure zero-trust security.",
      icon: "🔑",
    },
    {
      title: "Enterprise Encryption",
      description: "Industry-standard AES-256 encryption for data at rest and TLS 1.3 for data in transit.",
      icon: "🛡️",
    },
    {
      title: "Regular Backups",
      description: "Automated daily backups with multi-region failover to ensure 99.99% data availability.",
      icon: "💾",
    },
  ];

  return (
    <section id="security" className="bg-foreground text-background py-24 sm:py-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
        <div className="h-64 w-64 bg-primary rounded-full"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary">Security First</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Enterprise-Grade Compliance</p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Edvnt is built on a foundation of security. We understand the sensitivity of educational data and implement rigorous standards to protect it.
            </p>
            
            <div className="mt-10 space-y-8">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="text-2xl">{point.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0">
            <div className="bg-muted-foreground/10 rounded-3xl p-8 border border-muted-foreground/20 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl uppercase tracking-tighter">Certified Security</h4>
                  <p className="text-sm text-muted-foreground">GDPR & Data Privacy Compliant</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-primary/20 rounded"></div>
                <div className="h-2 w-3/4 bg-primary/20 rounded"></div>
                <div className="h-16 w-full bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
                  <span className="text-xs font-bold tracking-widest uppercase text-primary">Auto-Audit Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
