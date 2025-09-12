import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    label: "Introduction",
    href: "/introduction"
  }, {
    label: "Applications",
    href: "/applications"
  }, {
    label: "Technology",
    href: "/power-plant"
  }, {
    label: "Research",
    href: "/research"
  }, {
    label: "Reports",
    href: "/reports"
  }, {
    label: "Development",
    href: "/development"
  }];
  const services = [
    { name: "Airborne Wind Energy Systems", href: "/services/airborne-wind-energy" },
    { name: "Project Development", href: "/services/project-development" },
    { name: "Energy Consulting", href: "/services/energy-consulting" },
    { name: "Partnership Opportunities", href: "/services/partnership-opportunities" }
  ];
  const socialLinks = [{
    icon: Linkedin,
    href: "#",
    label: "LinkedIn"
  }, {
    icon: Twitter,
    href: "#",
    label: "Twitter"
  }, {
    icon: Facebook,
    href: "#",
    label: "Facebook"
  }];
  return <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent mb-4">
              Kitegen Energy Nigeria Ltd
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Pioneering the future of renewable energy in Nigeria through innovative 
              airborne wind technology. Committed to sustainable energy solutions that 
              drive economic growth while protecting our environment.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-background/80">
                <Mail className="h-4 w-4" />
                <span>admin@kitegen.com</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <Phone className="h-4 w-4" />
                <span>+234 (0) 910 860 2468</span>
              </div>
              <div className="flex items-center space-x-3 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>154, Sapele road, by poles Street, Benin city, Edo State, Nigeria.</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => <li key={index}>
                  <Link to={link.href} className="text-background/80 hover:text-accent transition-smooth">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => <li key={index}>
                  <Link to={service.href} className="text-background/80 hover:text-accent transition-smooth text-sm">
                    {service.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-background/60 text-sm">
            © {currentYear} Kitegen Energy Nigeria Ltd. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-background/60 text-sm mr-2">Follow us:</span>
            {socialLinks.map((social, index) => <Button key={index} variant="ghost" size="icon" className="text-background/60 hover:text-accent hover:bg-background/10" asChild>
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-4 w-4" />
                </a>
              </Button>)}
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-background/60 hover:text-accent transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-accent transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;