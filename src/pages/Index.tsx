import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AvajenHeader from "@/components/AvajenHeader";
import AvajenFooter from "@/components/AvajenFooter";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AvajenHeader />
      <section
        className="relative min-h-screen flex items-center"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative container mx-auto px-6 text-center">
          <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            AVAJEN — Performance-Driven IT
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-primary-foreground max-w-4xl mx-auto leading-tight">
            IT Solutions for Real Estate{" "}
            <span className="text-blue-accent">Investment & Development</span>
          </h1>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Two approaches to understanding how AVAJEN can transform your firm's technology environment.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link to="/landing-a">
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Landing Page A — IT Strategy Review
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/landing-b">
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                Landing Page B — IT Confidence Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <AvajenFooter />
    </div>
  );
};

export default Index;
