const AvajenFooter = () => {
  return (
    <footer className="section-navy border-t border-navy-medium/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading text-xl font-bold tracking-wider mb-4">AVAJEN</h3>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Performance-Driven IT for organizations that demand more from technology.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Managed IT</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">IT Consulting</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-primary-foreground/80">Free Tools</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="/landing-b" className="hover:text-primary-foreground transition-colors">IT Confidence Check</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">28 Questions Guide</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-medium/30 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} AVAJEN. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AvajenFooter;
