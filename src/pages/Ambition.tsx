import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { TrendingUp, Battery, Fuel, Wind, Target, Zap } from "lucide-react";

const Ambition = () => {
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
                KiteGen Ambition
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Addressing the global energy crisis with revolutionary high-altitude wind power
              </p>
            </div>
          </div>
        </section>

        {/* Global Energy Problem */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Global Energy Challenge
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <p className="text-lg mb-6">
                  The world faces an unprecedented energy crisis. Rising global demand, climate change concerns, 
                  and the depletion of fossil fuel resources require immediate action. Current renewable energy 
                  technologies, while promising, face significant limitations in efficiency, cost, and scalability.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4 text-primary">Current Challenges:</h4>
                    <ul className="space-y-2">
                      <li>• Growing global energy demand</li>
                      <li>• Climate change acceleration</li>
                      <li>• Fossil fuel resource depletion</li>
                      <li>• Renewable energy limitations</li>
                      <li>• Grid stability and intermittency issues</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4 text-primary">Urgent Requirements:</h4>
                    <ul className="space-y-2">
                      <li>• Scalable clean energy solutions</li>
                      <li>• Cost-competitive alternatives</li>
                      <li>• Minimal environmental impact</li>
                      <li>• Global accessibility</li>
                      <li>• Energy security and independence</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ERoEI Analysis */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              ERoEI: Energy Return on Energy Investment
            </h2>
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-center mb-8">
                ERoEI measures how much energy a technology produces compared to the energy required 
                to build and maintain it. Higher ERoEI values indicate more efficient energy sources.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center">
                  <Battery className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Solar PV</h3>
                  <div className="text-3xl font-bold text-yellow-500 mb-2">8-12:1</div>
                  <p className="text-sm">Limited by material intensity and efficiency constraints</p>
                </Card>

                <Card className="p-6 text-center">
                  <Wind className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Wind Turbines</h3>
                  <div className="text-3xl font-bold text-blue-500 mb-2">15-25:1</div>
                  <p className="text-sm">Constrained by Betz limit and material requirements</p>
                </Card>

                <Card className="p-6 text-center">
                  <Fuel className="h-12 w-12 text-red-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Nuclear</h3>
                  <div className="text-3xl font-bold text-red-500 mb-2">10-15:1</div>
                  <p className="text-sm">High construction costs and decommissioning requirements</p>
                </Card>

                <Card className="p-6 text-center border-2 border-primary">
                  <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">KiteGen</h3>
                  <div className="text-3xl font-bold text-primary mb-2">100+:1</div>
                  <p className="text-sm">Revolutionary efficiency through minimal material use</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Peak Oil & Fossil Fuel Decline */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Peak Oil & The Fossil Fuel Transition
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">The Fossil Fuel Reality</h3>
                    <p className="mb-4">
                      We are approaching peak oil production while global energy demand continues to rise. 
                      The declining ERoEI of fossil fuels makes them increasingly expensive and 
                      environmentally devastating to extract.
                    </p>
                    <ul className="space-y-2">
                      <li>• Conventional oil reserves declining</li>
                      <li>• Increasing extraction complexity</li>
                      <li>• Rising environmental costs</li>
                      <li>• Geopolitical instability</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">The Renewable Imperative</h3>
                    <p className="mb-4">
                      The transition to renewable energy is not just an environmental necessity 
                      but an economic imperative. Technologies with high ERoEI will dominate 
                      the future energy landscape.
                    </p>
                    <ul className="space-y-2">
                      <li>• Economic competitiveness</li>
                      <li>• Energy security benefits</li>
                      <li>• Climate change mitigation</li>
                      <li>• Technological independence</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* High-Altitude Wind Game Changer */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              High-Altitude Wind: The Game Changer
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <div className="text-center mb-6">
                  <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Untapped Energy Resource</h3>
                </div>
                <p className="text-lg text-center mb-6">
                  High-altitude winds represent the largest untapped renewable energy resource on Earth. 
                  These winds are stronger, more consistent, and available worldwide, offering unprecedented 
                  potential for global energy production.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold mb-2">Wind Speed</h4>
                    <div className="text-2xl font-bold text-primary">2-3x Stronger</div>
                    <p className="text-sm">Compared to ground-level winds</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold mb-2">Consistency</h4>
                    <div className="text-2xl font-bold text-primary">95% Uptime</div>
                    <p className="text-sm">Reliable high-altitude wind patterns</p>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold mb-2">Global Potential</h4>
                    <div className="text-2xl font-bold text-primary">100x Current</div>
                    <p className="text-sm">Energy demand can be met</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Carousel & Stem Designs */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Revolutionary Design Concepts
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Carousel Configuration</h3>
                <p className="mb-6">
                  The carousel design represents the ultimate scalable solution for industrial-scale 
                  energy production. Multiple kites operate in synchronized patterns around a central 
                  generator, capable of producing gigawatts of clean energy.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Scalability Potential:</h4>
                    <ul className="space-y-1">
                      <li>• 50-unit plants: 150 MW capacity</li>
                      <li>• Large installations: 1+ GW capacity</li>
                      <li>• Modular expansion capability</li>
                      <li>• Continuous power generation</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Stem Configuration</h3>
                <p className="mb-6">
                  The stem design provides flexible, distributed energy solutions perfect for 
                  smaller installations, remote locations, and specialized applications requiring 
                  precise power control.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Versatility Benefits:</h4>
                    <ul className="space-y-1">
                      <li>• 3 MW standard capacity per unit</li>
                      <li>• Rapid deployment capability</li>
                      <li>• Maritime and remote applications</li>
                      <li>• Lower initial investment</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Astonishing ERoEI Analysis */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Astonishing ERoEI Analysis
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="text-center mb-8">
                  <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold">ERoEI &gt; 100:1</h3>
                  <p className="text-lg">The highest energy return of any renewable technology</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Why KiteGen Achieves Superior ERoEI:</h4>
                    <ul className="space-y-2">
                      <li>• 90% less material than wind turbines</li>
                      <li>• Minimal infrastructure requirements</li>
                      <li>• Long operational lifespan (30+ years)</li>
                      <li>• High capacity factors (&gt;60%)</li>
                      <li>• Low maintenance requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Economic Implications:</h4>
                    <ul className="space-y-2">
                      <li>• Lowest LCOE among renewables</li>
                      <li>• Rapid return on investment</li>
                      <li>• Reduced financing costs</li>
                      <li>• Higher profit margins</li>
                      <li>• Accelerated deployment potential</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                  <h4 className="font-bold mb-4 text-center">The ERoEI Advantage</h4>
                  <p className="text-center">
                    With an ERoEI exceeding 100:1, KiteGen technology can power the entire global 
                    economy while using a fraction of the resources required by conventional energy 
                    systems. This represents a paradigm shift toward true energy abundance.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Vision for the Future
              </h2>
              <Card className="p-8">
                <p className="text-xl mb-6">
                  KiteGen represents more than just another renewable energy technology – 
                  it's the key to unlocking true energy abundance while preserving our planet.
                </p>
                <p className="text-lg">
                  By harnessing the vast, untapped power of high-altitude winds with unprecedented 
                  efficiency, we can transition to a sustainable energy future that supports continued 
                  economic growth, technological advancement, and improved quality of life for all humanity.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Ambition;