import Link from "next/link";
import Image from "next/image";

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
          <div className="flex flex-col justify-center animate-fade-in lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Trusted by 500+ Institutions Worldwide
            </div>
            
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
              <div className="flex gap-4">
                {/* Visual placeholders for integrations */}
                <div className="h-6 w-24 bg-muted rounded"></div>
                <div className="h-6 w-24 bg-muted rounded"></div>
                <div className="h-6 w-24 bg-muted rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 lg:col-span-5 lg:mt-0 flex items-center">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none group">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/20 to-secondary/20 blur-2xl group-hover:opacity-100 transition-opacity duration-500 opacity-70"></div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-muted shadow-2xl ring-1 ring-border group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex h-full w-full flex-col">
                  <div className="flex items-center justify-between border-b bg-muted/50 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="h-4 w-3/4 rounded bg-primary/20 animate-pulse"></div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 rounded bg-muted"></div>
                      <div className="h-20 rounded bg-muted"></div>
                      <div className="h-20 rounded bg-muted"></div>
                    </div>
                    <div className="flex-1 rounded-lg bg-white/50 dark:bg-black/50 p-4">
                      <div className="space-y-3">
                        <div className="h-2 w-full rounded bg-muted"></div>
                        <div className="h-2 w-5/6 rounded bg-muted"></div>
                        <div className="h-2 w-4/6 rounded bg-muted"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
