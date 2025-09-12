import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Battery, Cloud, Gauge, Leaf, Lightbulb, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Technology = () => {
  const features = [
    {
      icon: Cloud,
      title: "High-altitude Wind Capture",
      description: "Kitegen harnesses winds at higher altitudes, where wind speeds are stronger and more consistent than at ground level, increasing efficiency."
    },
    {
      icon: Leaf,
      title: "Eco-friendly and Sustainable",
      description: "By using kites to generate energy, Kitegen reduces reliance on fossil fuels, contributing to a cleaner, greener planet."
    },
    {
      icon: Battery,
      title: "Cost-Effective",
      description: "Kitegen requires less infrastructure compared to traditional wind turbines, making it a more affordable solution for renewable energy production."
    },
    {
      icon: Gauge,
      title: "Scalable and Versatile",
      description: "The technology can be deployed in a wide range of locations, including areas with limited space, making it adaptable to diverse environments worldwide."
    }
  ];

  const specs = [
    { label: "Power Output", value: "Up to 3 MW per unit" },
    { label: "Operating Altitude", value: "200-1000 meters" },
    { label: "Wind Speed Range", value: "4-25 m/s" },
    { label: "Capacity Factor", value: "60-80%" },
    { label: "Lifespan", value: "25+ years" },
    { label: "Ground Footprint", value: "90% less than wind turbines" }
  ];

  return (
    <section id="technology" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-primary bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge airborne wind energy systems that redefine renewable energy generation
          </p>
        </div>

        {/* Technology Overview */}
        <div className="gradient-sky rounded-2xl p-8 md:p-12 mb-16 shadow-energy">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Airborne Wind Energy Systems</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our revolutionary airborne wind energy technology uses autonomous kites tethered to 
                ground stations to harvest energy from high-altitude winds. These systems can reach 
                altitudes where winds are stronger, more consistent, and available more hours per day.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                The kites fly in controlled patterns, pulling on the tether to drive generators on 
                the ground. This innovative approach provides a more efficient and cost-effective 
                solution for renewable energy generation.
              </p>
              <Button variant="energy" size="lg" asChild>
                <Link to="/features-benefits">Technical Specifications</Link>
              </Button>
            </div>

            {/* Specifications */}
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h4 className="text-2xl font-semibold mb-6">System Specifications</h4>
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border pb-2">
                    <span className="font-medium text-foreground">{spec.label}</span>
                    <span className="text-primary font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Features */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Key Features and Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="h-full shadow-soft hover:shadow-energy transition-smooth">
                <CardHeader className="text-center">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;