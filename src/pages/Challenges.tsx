import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Battery, Network, Clock, TrendingUp, Rocket, Dna } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      title: "Intermittency",
      description: "Traditional renewable sources face unpredictable generation patterns",
      solution: "KiteGen accesses consistent high-altitude winds with 70% capacity factors"
    },
    {
      title: "High Costs",
      description: "Capital and operational expenses of current renewable technologies",
      solution: "90% reduction in material costs and 50% lower LCOE than wind turbines"
    },
    {
      title: "Grid Integration",
      description: "Challenges in balancing supply and demand with variable sources",
      solution: "Modular, scalable systems that can provide grid stability services"
    }
  ];

  const opportunities = [
    {
      category: "Energy Storage",
      icon: Battery,
      description: "Advanced battery technologies and grid-scale storage solutions enable better renewable integration"
    },
    {
      category: "Smart Grids",
      icon: Network,
      description: "AI-powered grid management systems optimize energy distribution and consumption patterns"
    },
    {
      category: "Automation",
      icon: Clock,
      description: "Automated systems reduce operational costs and improve efficiency across all sectors"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="http://127.0.0.1/wp-content/uploads/2025/02/WhatsApp-Video-2025-02-06-at-2.43.18-PM.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-foreground/40"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Challenges & Future Prospects
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Addressing renewable energy challenges while embracing technological innovation
              </p>
            </div>
          </div>
        </section>

        {/* Renewable Energy Challenges */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Current Renewable Energy Challenges
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-primary">{challenge.title}</h3>
                  <p className="text-muted-foreground mb-4">{challenge.description}</p>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">KiteGen Solution:</h4>
                    <p className="text-sm">{challenge.solution}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Comparisons */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Innovation Across Industries
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">AI Revolution</h3>
                  <p>Artificial intelligence transforms industries through automation, prediction, and optimization, similar to how KiteGen revolutionizes energy generation.</p>
                </Card>
                <Card className="p-6 text-center">
                  <Dna className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Healthcare Innovation</h3>
                  <p>CRISPR and gene therapy represent breakthrough technologies that fundamentally change treatment approaches, like KiteGen changes wind energy.</p>
                </Card>
                <Card className="p-6 text-center">
                  <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Space Exploration</h3>
                  <p>Mars colonization and space technology push the boundaries of human capability and resource utilization beyond Earth.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Future Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Emerging Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="p-6">
                  <opportunity.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{opportunity.category}</h3>
                  <p>{opportunity.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                The Future of Energy
              </h2>
              <p className="text-xl mb-8">
                Just as the internet transformed communication and AI is revolutionizing computation, 
                KiteGen technology represents the next paradigm shift in energy generation. By harnessing 
                the vast energy resources of high-altitude winds, we're not just improving existing technology – 
                we're creating an entirely new category of renewable energy.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">Mars Colonization Parallel</h3>
                  <p>Like SpaceX's vision of making life multiplanetary, KiteGen aims to make clean energy abundant and accessible worldwide, solving Earth's energy challenges before we expand to other planets.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-3">CRISPR-like Impact</h3>
                  <p>Just as CRISPR enables precise genetic editing, KiteGen enables precise energy harvesting from the atmosphere's most powerful wind resources.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Challenges;