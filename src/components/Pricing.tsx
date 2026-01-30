import Link from "next/link";

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

  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Simple Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">Transparent plans for every institution</p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose the best plan for your institution. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-start gap-y-6 sm:mt-20 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col rounded-3xl p-8 ring-1 ring-border transition-all hover:translate-y-[-8px] ${
                tier.featured
                  ? "bg-primary text-primary-foreground shadow-2xl scale-105 z-10 ring-primary"
                  : "bg-background text-foreground hover:shadow-xl"
              }`}
            >
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
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className={`h-6 w-5 flex-none ${tier.featured ? "text-primary-foreground" : "text-primary"}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.176a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.price === "Custom" ? "#contact" : "#request-demo"}
                className={`mt-8 block rounded-xl px-3.5 py-2.5 text-center text-sm font-bold shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-secondary"
                }`}
              >
                {tier.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
