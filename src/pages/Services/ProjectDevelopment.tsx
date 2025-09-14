import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, MapPin, Calendar, Target, Zap, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDevelopment = () => {
  const developmentPhases = [
    {
      phase: "Phase 1",
      title: "Site Assessment & Feasibility",
      duration: "2-4 months",
      status: "Planning",
      description: "Comprehensive evaluation of wind resources, terrain, and technical feasibility",
      deliverables: [
        "Wind resource assessment",
        "Site survey and analysis",
        "Environmental impact study",
        "Technical feasibility report",
        "Preliminary project design"
      ]
    },
    {
      phase: "Phase 2",
      title: "Project Design & Engineering",
      duration: "3-6 months",
      status: "Design",
      description: "Detailed engineering design and system optimization for site-specific conditions",
      deliverables: [
        "System configuration design",
        "Electrical integration plan",
        "Control system architecture",
        "Safety and compliance documentation",
        "Cost estimation and timeline"
      ]
    },
    {
      phase: "Phase 3",
      title: "Regulatory & Permitting",
      duration: "4-8 months",
      status: "Compliance",
      description: "Navigate regulatory requirements and obtain necessary permits and approvals",
      deliverables: [
        "Environmental permits",
        "Aviation authority approvals",
        "Grid connection agreements",
        "Construction permits",
        "Safety certifications"
      ]
    },
    {
      phase: "Phase 4",
      title: "Construction & Installation",
      duration: "6-12 months",
      status: "Implementation",
      description: "System manufacturing, site preparation, and installation of equipment",
      deliverables: [
        "Ground station construction",
        "System installation",
        "Grid interconnection",
        "Testing and commissioning",
        "Performance validation"
      ]
    }
  ];

  const services = [
    {
      title: "Site Selection & Assessment",
      description: "Comprehensive analysis of potential locations using advanced wind modeling and terrain analysis",
      icon: MapPin,
      features: ["Wind resource mapping", "Terrain suitability", "Access and logistics", "Environmental considerations"]
    },
    {
      title: "Technical Design",
      description: "Custom system design optimized for site-specific conditions and energy requirements",
      icon: Settings,
      features: ["System configuration", "Power optimization", "Control systems", "Safety protocols"]
    },
    {
      title: "Project Management",
      description: "End-to-end project coordination ensuring on-time, on-budget delivery",
      icon: Users,
      features: ["Timeline management", "Stakeholder coordination", "Risk mitigation", "Quality assurance"]
    },
    {
      title: "Regulatory Support",
      description: "Expert guidance through permitting processes and regulatory compliance",
      icon: FileText,
      features: ["Permit applications", "Environmental compliance", "Aviation approvals", "Grid agreements"]
    }
  ];

  const projectTypes = [
    {
      type: "Utility-Scale",
      capacity: "10-100 MW",
      timeline: "18-36 months",
      investment: "$15-50M",
      description: "Large-scale installations for grid-level power generation"
    },
    {
      type: "Commercial",
      capacity: "1-10 MW",
      timeline: "12-24 months",
      investment: "$2-15M",
      description: "Medium-scale systems for industrial and commercial applications"
    },
    {
      type: "Distributed",
      capacity: "100kW-1MW",
      timeline: "6-12 months",
      investment: "$200K-2M",
      description: "Smaller systems for communities and specialized applications"
    },
    {
      type: "Pilot Projects",
      capacity: "50-500kW",
      timeline: "3-8 months",
      investment: "$100K-1M",
      description: "Demonstration and testing installations"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Planning":
        return "bg-blue-100 text-blue-800";
      case "Design":
        return "bg-purple-100 text-purple-800";
      case "Compliance":
        return "bg-yellow-100 text-yellow-800";
      case "Implementation":
        return "bg-green-100 text-green-800";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <img 
          src="/src/assets/energy-night-2.png"
          alt="Project Development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Project <span className="gradient-primary bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              From concept to commissioning, we manage every aspect of your airborne wind energy project 
              to ensure successful delivery and optimal performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="energy" size="lg" asChild>
                <Link to="/development">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 4-phase approach ensures successful project delivery from initial assessment to full operation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {developmentPhases.map((phase, index) => (
              <Card key={index} className="shadow-soft hover:shadow-energy transition-smooth">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className={getStatusColor(phase.status)}>{phase.status}</Badge>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary">{phase.duration}</div>
                      <div className="text-sm text-muted-foreground">Duration</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <span className="text-white font-bold text-lg">{phase.phase.split(' ')[1]}</span>
                    </div>
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Deliverables</h4>
                  <ul className="space-y-2">
                    {phase.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive project development services tailored to your specific requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-energy transition-smooth">
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-center justify-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Project Types</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We develop projects of all scales, from pilot installations to utility-scale wind farms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectTypes.map((project, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-energy transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl">{project.type}</CardTitle>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-primary">{project.capacity}</div>
                      <div className="text-sm text-muted-foreground">Capacity Range</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{project.timeline}</div>
                      <div className="text-sm text-muted-foreground">Timeline</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-semibold text-secondary mb-2">{project.investment}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
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
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experienced team is ready to guide you through every step of your 
              airborne wind energy project development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="energy" size="lg" asChild>
                <Link to="/development">Contact Our Team</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/reports">Download Brochure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDevelopment;