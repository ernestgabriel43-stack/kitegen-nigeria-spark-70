import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Introduction", href: "/introduction" },
    { label: "Applications", href: "/applications" },
    { label: "Technology", href: "/power-plant" },
    { label: "Research", href: "/research" },
    { label: "Reports", href: "/reports" },
  ];

  const serviceItems = [
    { label: "Airborne Wind Energy Systems", href: "/services/airborne-wind-energy" },
    { label: "Project Development", href: "/services/project-development" },
    { label: "Energy Consulting", href: "/services/energy-consulting" },
    { label: "Partnership Opportunities", href: "/services/partnership-opportunities" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Kitegen Energy Nigeria Ltd
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-foreground hover:text-primary transition-smooth font-medium">
                Our Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {serviceItems.map((service) => (
                  <DropdownMenuItem key={service.label} asChild>
                    <Link to={service.href} className="cursor-pointer">
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="energy" size="sm" asChild>
              <Link to="/development">Development</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 gradient-sky">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Services Section */}
              <div className="px-3 py-2">
                <div className="font-medium text-foreground mb-2">Our Services</div>
                {serviceItems.map((service) => (
                  <Link
                    key={service.label}
                    to={service.href}
                    className="block px-3 py-1 text-sm text-foreground/80 hover:text-primary transition-smooth"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
              
              <div className="px-3 py-2">
                <Button variant="energy" className="w-full" asChild>
                  <Link to="/development" onClick={() => setIsMenuOpen(false)}>Development</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;