import Link from "next/link";

export default function Footer() {
  const categories = [
    {
      title: "Solutions",
      links: [
        { label: "K-12 Schools", href: "#who-its-for" },
        { label: "Colleges", href: "#who-its-for" },
        { label: "Coaching", href: "#who-its-for" },
        { label: "Multi-Campus", href: "#who-its-for" },
      ],
    },
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Security", href: "#security" },
        { label: "Pricing", href: "#pricing" },
        { label: "Roadmap", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Reviews", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "GDPR", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold italic">
                E
              </div>
              <span className="text-xl font-bold tracking-tight">Edvnt</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-8">
              The next-generation multi-tenant ERP for educational institutions. Cloud-based, secure, and built for scale.
            </p>
            <div className="flex gap-4">
              {/* Social icons placeholders */}
              <div className="h-5 w-5 bg-muted rounded"></div>
              <div className="h-5 w-5 bg-muted rounded"></div>
              <div className="h-5 w-5 bg-muted rounded"></div>
            </div>
          </div>
          
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Edvnt Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-semibold text-muted-foreground">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
