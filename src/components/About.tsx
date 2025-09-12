import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Leaf, Target } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const achievements = [
    "First airborne wind energy company in Nigeria",
    "Partnership with international Kitegen technology",
    "Commitment to sustainable energy solutions",
    "Focus on energy independence for Nigeria"
  ];

  const values = [
    {
      icon: Globe,
      title: "Global Innovation",
      description: "Bringing world-class airborne wind energy technology to Nigeria"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Contributing to a greener future through clean, renewable energy"
    },
    {
      icon: Target,
      title: "Energy Security",
      description: "Supporting Nigeria's journey toward energy independence and reliability"
    }
  ];

  return (
    <section id="about" className="py-20 gradient-sky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Kitegen Energy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of renewable energy in Nigeria through innovative airborne wind technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Why The World Needs KiteGen</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As the world faces the growing challenges of climate change and the depletion of traditional energy sources, 
              there is an urgent need for innovative solutions to meet our energy demands sustainably. Kitegen offers a 
              groundbreaking approach to harnessing wind energy, utilizing high-altitude kites to capture stronger, more 
              consistent winds that traditional turbines cannot reach.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This technology provides a cleaner, more efficient way to generate power, reducing reliance on fossil fuels 
              and contributing to global efforts to combat climate change. Kitegen's technology has the potential to 
              revolutionize the renewable energy sector by making wind power more accessible and affordable.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Unlike conventional wind farms, which are limited by land space and wind patterns, Kitegen's kites can operate 
              at higher altitudes where wind speeds are more reliable. This means they can generate more power with less 
              infrastructure, making it a scalable and cost-effective solution for countries around the world.
            </p>

            <Button variant="energy" size="lg" asChild>
              <Link to="/power-plant">Learn More About Our Technology</Link>
            </Button>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-energy transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;