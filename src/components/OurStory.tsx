import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Globe2, Leaf, Users } from "lucide-react";

const OurStory = () => {
  const goals = [
    {
      icon: Globe2,
      title: "Advance Renewable Energy",
      description: "Develop innovative kite-based technology to harness high-altitude wind power for a sustainable future."
    },
    {
      icon: Leaf,
      title: "Promote Sustainability",
      description: "Reduce reliance on fossil fuels by providing a clean, eco-friendly alternative to traditional energy sources."
    },
    {
      icon: Users,
      title: "Increase Energy Accessibility",
      description: "Make renewable energy more affordable and accessible to a wider range of industries and communities."
    },
    {
      icon: Target,
      title: "Global Expansion",
      description: "Scale the technology to be used worldwide, offering versatile solutions for diverse geographic locations."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-primary bg-clip-text text-transparent">Story</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Pioneering Excellence in Tech for Over 18 Years
          </p>
        </div>

        <div className="gradient-sky rounded-2xl p-8 md:p-12 mb-20 shadow-energy">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
            Kitegen has been pioneering excellence in renewable energy technology for over 18 years, leading the way in 
            high-altitude wind power generation. With a vision to harness the power of stronger and more consistent winds 
            at higher altitudes, Kitegen has developed groundbreaking kite-based systems that offer an efficient, scalable, 
            and eco-friendly energy solution. Over nearly two decades, the company has refined its technology, overcoming 
            challenges and continually innovating to create a more sustainable and cost-effective alternative to traditional 
            wind turbines. As the world moves towards cleaner energy sources, Kitegen's commitment to advancing wind energy 
            technology positions it at the forefront of the renewable energy revolution.
          </p>
        </div>

        {/* Mission & Goals */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mission & <span className="gradient-primary bg-clip-text text-transparent">Goals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Commitment to Excellence, Crafting Our Legacy!
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            Kitegen's goals focus on advancing sustainable energy through innovative technology, affordability, and global scalability for a cleaner future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {goals.map((goal, index) => (
            <Card key={index} className="h-full shadow-soft hover:shadow-energy transition-smooth text-center">
              <CardContent className="p-6">
                <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <goal.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{goal.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;