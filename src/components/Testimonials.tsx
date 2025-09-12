import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex M.",
      role: "Environmental Engineer",
      content: "Kitegen is a game-changer in the renewable energy industry. Their innovative technology is truly setting new standards for sustainable power."
    },
    {
      name: "Maria T.",
      role: "Clean Energy Investor",
      content: "The future of energy is here with Kitegen. Their innovative approach offers a truly scalable and eco-friendly solution for global power needs."
    },
    {
      name: "Sara L.",
      role: "Sustainability Advocate",
      content: "I'm excited to see how Kitegen is making wind energy more efficient and accessible. It's exactly what the world needs for a cleaner future."
    },
    {
      name: "Ethan S.",
      role: "Climate Change Researcher",
      content: "Kitegen's technology is impressive – it's not only cost-effective but also a major step toward reducing our reliance on fossil fuels."
    },
    {
      name: "James R.",
      role: "Renewable Energy Expert",
      content: "Kitegen's ability to harness high-altitude winds is incredible. This could be the breakthrough we've been waiting for in the energy sector."
    },
    {
      name: "Lena H.",
      role: "Renewable Energy Consultant",
      content: "Kitegen is paving the way for a more sustainable future. Their approach to wind energy could reshape the entire industry."
    }
  ];

  return (
    <section className="py-20 gradient-sky">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What Experts Are Saying: Positive Feedback on KiteGen Innovation
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full shadow-soft hover:shadow-energy transition-smooth">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">– {testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;