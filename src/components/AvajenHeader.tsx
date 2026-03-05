import { Button } from "@/components/ui/button";
import avajenLogo from "@/assets/avajen-logo-white.svg";

const AvajenHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-medium/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src={avajenLogo}
            alt="Avajen"
            className="h-10 w-auto"
            loading="eager"
          />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/landing-a" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            IT Solutions
          </a>
          <a href="/landing-b" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
            IT Confidence Check
          </a>
          <Button variant="hero" size="sm">
            Schedule a Review
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default AvajenHeader;
