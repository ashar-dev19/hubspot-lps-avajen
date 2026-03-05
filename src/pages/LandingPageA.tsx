import { Shield, Eye, Monitor, Lightbulb, Building2, CheckCircle2, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AvajenHeader from "@/components/AvajenHeader";
import AvajenFooter from "@/components/AvajenFooter";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const LandingPageA = () => {
  return (
    <div className="min-h-screen bg-background">
      <AvajenHeader />

      {/* Hero */}
      <section
        className="relative min-h-[100vh] flex items-center pt-20"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-2xl">
            <ScrollReveal delay={0.1}>
              <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Performance-Driven IT
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-primary-foreground">
                Technology That Keeps Your Portfolio{" "}
                <span className="text-blue-accent">Moving</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed max-w-xl">
                You manage properties, capital, investors, and deals. Your technology should support that momentum — not slow it down.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" className="text-base px-8 py-6">
                  Schedule an IT Strategy Review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                  Learn More
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                IT Solutions
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                The Questions Real Estate Firms{" "}
                <span className="text-blue-accent">Ask About IT</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <QuestionCard
                question="Are our financial systems actually secure?"
                answer="We implement protections designed specifically for environments that handle capital flows and investor communication."
                items={["Investor communications", "Capital calls and wire transfers", "Accounting and financial systems", "Email and identity security"]}
              />
            </StaggerItem>
            <StaggerItem>
              <QuestionCard
                question="Why does IT always feel reactive?"
                answer="Performance-Driven IT focuses on preventing issues before they disrupt your business."
                items={["Continuous monitoring of systems and security", "Proactive threat detection and response", "Strategic technology planning", "Ongoing optimization and lifecycle management"]}
              />
            </StaggerItem>
            <StaggerItem>
              <QuestionCard
                question="How do we manage technology across multiple properties?"
                answer="We bring consistency and visibility across your organization by standardizing:"
                items={["Systems and device management", "Security policies", "User access controls", "Vendor and property technology environments"]}
              />
            </StaggerItem>
            <StaggerItem>
              <QuestionCard
                question="Are we prepared for audits, investors, and compliance?"
                answer="Investors increasingly expect professional operational controls around technology and security."
                items={["Secure investor communications", "Controlled document access", "Financial system protections", "Audit-ready security practices"]}
              />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Free Guide Section */}
      <section className="section-navy py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div>
                <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                  Free Download
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                  28 Questions to Ask Your IT Provider
                </h2>
                <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                  This guide includes 28 of the most important questions executives should ask their IT provider to determine whether their environment is truly secure, proactive, and professionally managed.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Security gaps", "Operational risks", "Compliance blind spots", "Areas where your IT provider may be falling short"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-blue-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-navy-light/50 border border-navy-medium/40 rounded-xl p-8">
                <h3 className="font-heading text-xl font-semibold mb-6 text-primary-foreground">Download the Guide</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-navy/60 border border-navy-medium/40 rounded-lg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-blue-accent/50"
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full px-4 py-3 bg-navy/60 border border-navy-medium/40 rounded-lg text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-blue-accent/50"
                  />
                  <Button variant="hero" className="w-full py-6 text-base">
                    <Download className="mr-2 h-5 w-5" />
                    Download the Guide
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Performance-Driven IT Looks Like */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                Our Approach
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                What Performance-Driven IT{" "}
                <span className="text-blue-accent">Looks Like</span>
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StaggerItem><FeatureCard icon={Shield} title="Identity-First Security" description="Protect access to financial systems, documents, and email with modern identity controls." /></StaggerItem>
            <StaggerItem><FeatureCard icon={Eye} title="Portfolio-Wide Visibility" description="See devices, risks, and security posture across your entire organization." /></StaggerItem>
            <StaggerItem><FeatureCard icon={Monitor} title="Proactive Monitoring" description="Identify and resolve issues before they impact operations." /></StaggerItem>
            <StaggerItem><FeatureCard icon={Lightbulb} title="Strategic IT Leadership" description="Technology planning aligned with your firm's growth and investment strategy." /></StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose AVAJEN */}
      <section className="section-navy py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-blue-accent font-heading font-semibold text-sm uppercase tracking-widest mb-3">
                  Why AVAJEN
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
                  Built for Firms{" "}
                  <span className="text-blue-accent">Like Yours</span>
                </h2>
                <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                  AVAJEN provides enterprise-grade IT leadership without the cost and complexity of building a large internal IT department.
                </p>
                <ul className="space-y-3">
                  {["Real estate investment managers", "Development firms", "Family offices", "Property portfolios", "Asset management teams"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                      <Building2 className="h-5 w-5 text-blue-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <StaggerContainer className="space-y-4" staggerDelay={0.12}>
              {[
                { label: "Investor-sensitive environments", icon: Shield },
                { label: "Financial system security", icon: Monitor },
                { label: "Multi-entity organizations", icon: Building2 },
                { label: "Rapid acquisitions and development cycles", icon: Lightbulb },
              ].map(({ label, icon: Icon }) => (
                <StaggerItem key={label}>
                  <div className="flex items-center gap-4 bg-navy-light/50 border border-navy-medium/30 rounded-lg p-5">
                    <div className="bg-blue-accent/10 rounded-lg p-3">
                      <Icon className="h-6 w-6 text-blue-accent" />
                    </div>
                    <span className="text-primary-foreground/90 font-medium">{label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-navy py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
              Ready for IT That Moves as Fast as{" "}
              <span className="text-blue-accent">Your Deals?</span>
            </h2>
            <p className="text-primary-foreground/70 mb-10 text-lg leading-relaxed">
              Let's review your current environment and identify opportunities to improve security, performance, and operational efficiency.
            </p>
            <Button variant="hero" size="lg" className="text-base px-10 py-6">
              Book a 30-Minute IT Strategy Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <AvajenFooter />
    </div>
  );
};

const QuestionCard = ({ question, answer, items }: { question: string; answer: string; items: string[] }) => (
  <div className="bg-secondary/50 border border-border rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 h-full">
    <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">"{question}"</h3>
    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{answer}</p>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
          <CheckCircle2 className="h-4 w-4 text-blue-accent mt-0.5 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string }) => (
  <div className="text-center p-6 rounded-xl border border-border bg-secondary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="bg-blue-accent/10 rounded-xl p-4 w-fit mx-auto mb-4">
      <Icon className="h-7 w-7 text-blue-accent" />
    </div>
    <h3 className="font-heading font-semibold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export default LandingPageA;