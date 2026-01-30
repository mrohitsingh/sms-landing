import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
              <span className="text-xl font-bold italic">E</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">Edvnt</span>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center md:gap-8">
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Features</Link>
          <Link href="#who-its-for" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Who It&apos;s For</Link>
          <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Pricing</Link>
          <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="hidden sm:inline-flex text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Log in
          </Link>
          <Link
            href="#request-demo"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:bg-secondary hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
