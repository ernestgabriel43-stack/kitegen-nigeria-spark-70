import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Lightbulb, Target, Users, Zap, TrendingUp, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import energyWaterfrontImage from "@/assets/energy-waterfront.png";

const EnergyConsulting = () => {
  const consultingServices = [
    {
      title: "Energy Strategy Development",
      description: "Comprehensive energy planning and strategy formulation for sustainable growth",
      icon: Target,
      deliverables: [
        "Energy audit and assessment",
        "Renewable energy roadmap",
        "Cost-benefit analysis",
        "Implementation timeline",
        "ROI projections"
      ],
      duration: "4-8 weeks",
      clients: ["Governments", "Corporations", "Utilities"]
    },
    {
      title: "Feasibility Studies",
      description: "Technical and economic feasibility analysis for airborne wind energy projects",
      icon: BarChart3,
      deliverables: [
        "Wind resource assessment",
        "Technical feasibility report",
        "Financial modeling",
        "Risk analysis",
        "Market opportunity study"
      ],
      duration: "6-12 weeks",
      clients: ["Investors", "Developers", "Industries"]
    },
    {
      title: "Technology Assessment",
      description: "Expert evaluation of renewable energy technologies and solutions",
      icon: Lightbulb,
      deliverables: [
        "Technology comparison",
        "Performance benchmarking",
        "Innovation roadmap",
        "Best practice guide",
        "Recommendations report"
      ],
      duration: "3-6 weeks",
      clients: ["Tech Companies", "Research Institutes", "Startups"]
    },
    {
      title: "Regulatory Advisory",
      description: "Guidance on energy regulations, policies, and compliance requirements",
      icon: Shield,
      deliverables: [
        "Regulatory landscape analysis",
        "Compliance framework",
        "Policy recommendations",
        "Permit strategy",
        "Stakeholder engagement plan"
      ],
      duration: "2-4 weeks",
      clients: ["Government", "Policy Makers", "NGOs"]
    }
  ];

  const expertise = [
    {
      area: "Wind Energy Systems",
      description: "Deep expertise in conventional and airborne wind energy technologies",
      projects: "50+",
      icon: Zap
    },
    {
      area: "Energy Markets",
      description: "Comprehensive understanding of global energy markets and trends",
      projects: "100+",
      icon: TrendingUp
    },
    {
      area: "Project Finance",
      description: "Expertise in renewable energy project financing and investment",
      projects: "30+",
      icon: BarChart3
    },
    {
      area: "Policy & Regulation",
      description: "Knowledge of energy policies and regulatory frameworks worldwide",
      projects: "25+",
      icon: Globe
    }
  ];

  const clientSectors = [
    {
      sector: "Government & Public Sector",
      description: "National energy planning, policy development, and public infrastructure",
      services: ["Energy policy advice", "National energy strategies", "Public procurement support"],
      examples: ["Ministry of Energy", "Regional authorities", "Municipal governments"]
    },
    {
      sector: "Private Industry",
      description: "Corporate energy strategy, sustainability planning, and operational optimization",
      services: ["Corporate energy audits", "Sustainability consulting", "Supply chain optimization"],
      examples: ["Manufacturing companies", "Mining operations", "Data centers"]
    },
    {
      sector: "Financial Sector",
      description: "Investment advisory, due diligence, and risk assessment for energy projects",
      services: ["Investment due diligence", "Portfolio optimization", "Risk assessment"],
      examples: ["Investment funds", "Banks", "Insurance companies"]
    },
    {
      sector: "Utilities & Grid Operators",
      description: "Grid integration, capacity planning, and operational efficiency improvement",
      services: ["Grid integration studies", "Capacity planning", "Operational optimization"],
      examples: ["Electric utilities", "Independent operators", "Transmission companies"]
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Understanding your specific needs, challenges, and objectives"
    },
    {
      step: 2,
      title: "Proposal Development",
      description: "Customized consulting proposal with scope, timeline, and deliverables"
    },
    {
      step: 3,
      title: "Project Execution",
      description: "Systematic execution with regular updates and milestone reviews"
    },
    {
      step: 4,
      title: "Delivery & Support",
      description: "Final report delivery with ongoing support and implementation guidance"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <img 
          src={energyWaterfrontImage}
          alt="Energy Consulting"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Energy <span className="gradient-primary bg-clip-text text-transparent">Consulting</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Strategic advisory services to help organizations navigate the transition to renewable energy 
              and maximize the value of their energy investments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="energy" size="lg" asChild>
                <Link to="/development">Schedule Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link to="/reports">Download Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Consulting Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive advisory services tailored to your energy transformation goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-energy transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="secondary">{service.duration}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Deliverables</h4>
                      <ul className="space-y-1">
                        {service.deliverables.map((deliverable, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Typical Clients</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.clients.map((client, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{client}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep domain knowledge across all aspects of renewable energy and wind power
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-energy transition-smooth">
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{area.area}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">{area.projects}</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Sectors */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Sectors</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We serve clients across diverse sectors with specialized energy consulting services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {clientSectors.map((sector, index) => (
              <Card key={index} className="shadow-soft hover:shadow-energy transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl">{sector.sector}</CardTitle>
                  <p className="text-muted-foreground">{sector.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Services Provided</h4>
                      <ul className="space-y-1">
                        {sector.services.map((service, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Client Examples</h4>
                      <div className="flex flex-wrap gap-2">
                        {sector.examples.map((example, i) => (
                          <Badge key={i} variant="outline" className="text-xs">{example}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to deliver maximum value and actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-energy transition-smooth">
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-energy">
            <h2 className="text-3xl font-bold mb-4">Need Energy Strategy Guidance?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experienced consultants are ready to help you navigate the complexities 
              of renewable energy transition and strategy development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="energy" size="lg" asChild>
                <Link to="/development">Book Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default EnergyConsulting;