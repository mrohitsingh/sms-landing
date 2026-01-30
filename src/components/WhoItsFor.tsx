export default function WhoItsFor() {
  const targets = [
    {
      title: "K-12 Schools",
      description: "Manage multiple branches, student lifecycles, and parent communication from a single dashboard.",
      icon: "🏫",
    },
    {
      title: "Colleges & Universities",
      description: "Handle complex course structures, credit systems, and advanced academic reporting.",
      icon: "🏛️",
    },
    {
      title: "Coaching Institutes",
      description: "Streamline batch management, attendance, and competitive exam performance tracking.",
      icon: "📝",
    },
    {
      title: "Multi-Campus Groups",
      description: "Enterprise-grade multi-tenant architecture for franchises and educational groups.",
      icon: "🌐",
    },
  ];

  return (
    <section id="who-its-for" className="bg-muted/50 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary uppercase tracking-widest">Built for Education</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">One Platform, Every Institution</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you&apos;re a local school or a global education group, Edvnt scales with your needs.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {targets.map((target) => (
              <div key={target.title} className="flex flex-col items-center text-center p-8 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-xl transition-all hover:translate-y-[-4px]">
                <dt className="text-4xl mb-4">{target.icon}</dt>
                <dd className="flex flex-auto flex-col">
                  <p className="text-xl font-bold leading-7 text-foreground mb-3">{target.title}</p>
                  <p className="text-base leading-7 text-muted-foreground">{target.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
