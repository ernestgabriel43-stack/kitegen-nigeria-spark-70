import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wind, Zap, Globe, Wrench, BarChart3, Shield, Leaf, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AirborneWindEnergy = () => {
  const systemTypes = [
    {
      title: "KiteGen STEM",
      capacity: "3-5 MW",
      configuration: "Ground-Based",
      description: "Single tethered kite system with ground-based power generation",
      features: ["Pulley system activation", "Ground alternators", "Proven reliability"],
      applications: ["Utility-scale power", "Remote locations", "Grid integration"]
    },
    {
      title: "KiteGen Carousel",
      capacity: "10-50 MW",
      configuration: "Multi-Kite Array",
      description: "Multiple kites in coordinated flight patterns for maximum efficiency",
      features: ["Constant tension", "Optimized trajectories", "Advanced control"],
      applications: ["Large-scale farms", "Industrial power", "Grid stabilization"]
    },
    {
      title: "Offshore Systems",
      capacity: "5-25 MW",
      configuration: "Marine Platform",
      description: "Specialized systems for offshore wind energy harvesting",
      features: ["Marine adaptation", "Enhanced wind access", "Weather resistant"],
      applications: ["Offshore farms", "Island power", "Maritime operations"]
    }
  ];

  const specifications = [
    { label: "Operating Altitude", value: "200-1000m", icon: Wind },
    { label: "Wind Speed Range", value: "4-25 m/s", icon: Zap },
    { label: "Capacity Factor", value: "60-80%", icon: BarChart3 },
    { label: "System Lifespan", value: "25+ years", icon: Shield },
    { label: "Land Footprint", value: "90% less vs turbines", icon: Leaf },
    { label: "Power Density", value: "5x higher", icon: Target }
  ];

  const advantages = [
    {
      title: "Higher Wind Access",
      description: "Operate at altitudes where winds are 2-3x stronger and more consistent",
      icon: Wind
    },
    {
      title: "Lower Infrastructure",
      description: "Minimal ground infrastructure compared to traditional wind farms",
      icon: Wrench
    },
    {
      title: "Scalable Design",
      description: "Modular systems can be deployed from small to utility-scale projects",
      icon: Globe
    },
    {
      title: "Environmental Impact",
      description: "Minimal noise, visual impact, and wildlife interference",
      icon: Leaf
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <img 
            src="/src/assets/hero-wind-kites.jpg"
            alt="Airborne Wind Energy Systems"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Airborne Wind Energy <span className="gradient-hero bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">Systems</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
              Revolutionary high-altitude wind energy technology that captures stronger, more consistent winds 
              with minimal environmental impact and superior efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="energy" size="lg" asChild>
                <Link to="/development">Request Quote</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/power-plant">Technical Details</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">System Configurations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our range of airborne wind energy systems designed for different applications and scales
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-energy transition-smooth">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary">{system.configuration}</Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{system.capacity}</div>
                      <div className="text-sm text-muted-foreground">Capacity</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{system.title}</CardTitle>
                  <p className="text-muted-foreground">{system.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {system.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Applications</h4>
                      <ul className="space-y-1">
                        {system.applications.map((app, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced engineering specifications that make our systems industry-leading
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-energy transition-smooth">
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <spec.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{spec.label}</h3>
                  <p className="text-2xl font-bold text-primary">{spec.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Key Advantages</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why airborne wind energy systems outperform traditional wind turbines
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-energy transition-smooth">
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <advantage.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-energy">
            <h2 className="text-3xl font-bold mb-4">Ready to Harness High-Altitude Winds?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our technical team to discuss how airborne wind energy systems can 
              meet your renewable energy requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="energy" size="lg" asChild>
                <Link to="/development">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/features-benefits">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AirborneWindEnergy;