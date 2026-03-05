import { Shield, Fingerprint, Activity, Eye, Target, CheckCircle2, ArrowRight, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import AvajenHeader from "@/components/AvajenHeader";
import AvajenFooter from "@/components/AvajenFooter";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg-b.jpg";

const LandingPageB = () => {
  return (
    <div className="min-h-screen bg-background">
      <AvajenHeader />

      {/* Hero */}
      <section
        className="relative min-h-[100vh] flex items-center pt-20"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl">
            <ScrollReveal delay={0.1}>
              <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Free IT Assessment
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
                Is Your IT Helping Your Business{" "}
                <span className="text-blue-accent">Perform?</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-primary-foreground/70 mb-4 leading-relaxed max-w-xl">
                Real estate firms rely on technology to manage investments, properties, financial systems, and investor communications. But many leadership teams aren't fully confident their environment is secure, reliable, and scalable.
              </p>
              <p className="text-primary-foreground/60 mb-8">
                Our Free IT Confidence Check helps you quickly determine whether your technology is supporting your business — or quietly creating risk.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" className="text-base px-8 py-6">
                  <ClipboardCheck className="mr-2 h-5 w-5" />
                  Take the Free IT Confidence Check
                </Button>
                <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                  Schedule a Strategy Review
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Hidden Issues */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                  Comprehensive IT Solutions
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Built for Confident{" "}
                  <span className="text-blue-accent">Business Decisions</span>
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Most companies only evaluate their IT after something breaks. But hidden issues often exist long before that.
                </p>
              </div>
            </ScrollReveal>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {[
                "Security gaps in financial systems",
                "Inconsistent controls across properties",
                "Limited visibility into devices and access",
                "Reactive support instead of proactive oversight",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-4 bg-secondary/50 border border-border rounded-lg p-5">
                    <CheckCircle2 className="h-5 w-5 text-blue-accent flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                The IT Confidence Check helps identify whether your environment is operating the way it should.
              </p>
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                Start the IT Confidence Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What the Check Evaluates */}
      <section className="section-navy py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Assessment Areas
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
                What the IT Confidence Check{" "}
                <span className="text-blue-accent">Evaluates</span>
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <StaggerItem><AssessmentCard icon={Shield} title="Security of Financial & Investor Systems" description="Are the systems that handle capital, wires, and investor communications properly protected?" /></StaggerItem>
            <StaggerItem><AssessmentCard icon={Fingerprint} title="Identity & Access Controls" description="Who has access to what — and how is that access secured?" /></StaggerItem>
            <StaggerItem><AssessmentCard icon={Activity} title="Operational Stability" description="Are systems monitored and maintained proactively to prevent disruption?" /></StaggerItem>
            <StaggerItem><AssessmentCard icon={Eye} title="Portfolio-Wide Visibility" description="Can your organization see devices, risks, and technology health across properties and offices?" /></StaggerItem>
            <StaggerItem><AssessmentCard icon={Target} title="Strategic IT Alignment" description="Is your technology supporting business growth, acquisitions, and operational efficiency?" /></StaggerItem>
            <StaggerItem>
              <div className="flex items-center justify-center bg-navy-light/30 border border-navy-medium/30 rounded-xl p-8 h-full">
                <div className="text-center">
                  <p className="text-primary-foreground/60 text-sm mb-4">Takes just a few minutes</p>
                  <Button variant="hero" className="px-6">
                    Start Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* What Happens After */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <ScrollReveal>
            <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Next Steps
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              What Happens After the{" "}
              <span className="text-blue-accent">Assessment?</span>
            </h2>
            <p className="text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
              Once completed, you'll receive a confidence score indicating how your environment compares to modern IT best practices.
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Review Internally", desc: "Use the results to evaluate your current IT posture with your leadership team." },
              { step: "02", title: "Discuss with Your Provider", desc: "Share findings with your current IT provider and ask informed questions." },
              { step: "03", title: "Talk to Our Team", desc: "Schedule a brief strategy session to explore opportunities for improvement." },
            ].map(({ step, title, desc }) => (
              <StaggerItem key={step}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-blue-accent/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading font-bold text-blue-accent text-lg">{step}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What is Performance-Driven IT */}
      <section className="section-navy py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                  Our Philosophy
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                  What Is Performance-Driven{" "}
                  <span className="text-blue-accent">IT?</span>
                </h2>
                <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                  Traditional IT focuses on fixing problems when they occur. Performance-Driven IT focuses on preventing problems while improving operational efficiency.
                </p>
                <ul className="space-y-3">
                  {["Secure financial operations", "Reliable business systems", "Scalable infrastructure", "Investor-grade operational controls"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-blue-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-6 text-primary-foreground">Built for Real Estate Organizations</h3>
                <ul className="space-y-3">
                  {["Real estate investments", "Development projects", "Asset management portfolios", "Investor reporting", "Multi-entity operations"].map((item) => (
                    <li key={item} className="flex items-center gap-4 bg-navy-light/50 border border-navy-medium/30 rounded-lg p-4 text-primary-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-blue-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-navy py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Curious How Your IT Environment{" "}
              <span className="text-blue-accent">Stacks Up?</span>
            </h2>
            <p className="text-primary-foreground/70 mb-10 text-lg leading-relaxed">
              The IT Confidence Check takes just a few minutes and can reveal hidden risks or opportunities within your technology environment.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-base px-10 py-6">
                <ClipboardCheck className="mr-2 h-5 w-5" />
                Take the Free IT Confidence Check
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-10 py-6">
                Schedule a 30-Minute IT Strategy Review
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <AvajenFooter />
    </div>
  );
};

const AssessmentCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) => (
  <div className="bg-navy-light/30 border border-navy-medium/30 rounded-xl p-8 hover:border-blue-accent/30 transition-all duration-300 h-full">
    <div className="bg-blue-accent/10 rounded-xl p-3 w-fit mb-4">
      <Icon className="h-6 w-6 text-blue-accent" />
    </div>
    <h3 className="font-heading font-semibold mb-2 text-primary-foreground">{title}</h3>
    <p className="text-sm text-primary-foreground/60 leading-relaxed">{description}</p>
  </div>
);

export default LandingPageB;