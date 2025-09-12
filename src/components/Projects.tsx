import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "KiteGen STEM",
      location: "Ground-based Configuration",
      capacity: "3 MW",
      status: "Operational",
      description: "A 3 MW KiteGen generator in the 'Stem' configuration where the wing pulls the cables that, through a pulley system, activate the alternators on ground, which in turn produce electricity.",
      features: ["Pulley system activation", "Ground-based alternators", "Proven technology"],
      link: "/power-plant"
    },
    {
      title: "KiteGen STEM off-Shore",
      location: "Offshore Implementation",
      capacity: "3 MW",
      status: "Development",
      description: "A Revolutionary Approach to Wind Energy - extending the proven STEM technology to offshore environments for enhanced wind capture.",
      features: ["Offshore deployment", "Enhanced wind access", "Marine environment adaptation"],
      link: "/applications"
    },
    {
      title: "KiteGen Carousel",
      location: "Advanced Configuration",
      capacity: "5 MW",
      status: "Testing",
      description: "The KiteGen system optimizes energy generation by maintaining constant cable tension while adjusting length for optimal wing trajectories.",
      features: ["Constant cable tension", "Optimized trajectories", "Advanced control systems"],
      link: "/features-benefits"
    },
    {
      title: "Kitegen Nigeria",
      location: "Nigeria Expansion",
      capacity: "Variable",
      status: "Planning Phase",
      description: "Kitegen's Expansion into Nigeria - bringing innovative wind energy technology to meet Nigeria's growing energy demands.",
      features: ["Local market adaptation", "Scalable deployment", "Energy independence"],
      link: "/case-studies"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Operational":
        return "bg-secondary text-secondary-foreground";
      case "Development":
        return "bg-primary text-primary-foreground";
      case "Testing":
        return "bg-accent text-accent-foreground";
      case "Planning Phase":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 gradient-sky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the renewable energy revolution across Nigeria with strategic project implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="h-full shadow-soft hover:shadow-energy transition-smooth">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                  <div className="text-right">
                    <div className="flex items-center text-primary font-semibold">
                      <Zap className="h-4 w-4 mr-1" />
                      {project.capacity}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  {project.location}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-primary">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={project.link}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-energy">
          <h3 className="text-3xl font-bold mb-4">
            Partner with Nigeria's Energy Future
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing Nigeria's energy landscape. We're actively seeking 
            partners, investors, and communities interested in sustainable energy solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="energy" size="lg" asChild>
              <Link to="/development">Partner With Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/development">Investment Opportunities</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;