import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Factory, Zap, Globe, TrendingUp, Target, Rocket } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import mobileBg1 from "@/assets/mobile-bg-1.jpg";

const FutureScenarios = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <VideoBackground mobileImage={mobileBg1} />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Future Scenarios
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Envisioning the transformation of global energy infrastructure
              </p>
            </div>
          </div>
        </section>

        {/* Industrial Plan - 50 Machines */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Phase I: Industrial Demonstration Plant
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Factory className="h-12 w-12 text-primary mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">50-Machine Plant (150 MW)</h3>
                    <p className="text-lg text-muted-foreground">Proving commercial viability at scale</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Technical Specifications:</h4>
                    <ul className="space-y-2">
                      <li>• 50 KiteGen units @ 3 MW each</li>
                      <li>• Total capacity: 150 MW</li>
                      <li>• Land requirement: 1-2 km²</li>
                      <li>• Capacity factor: &gt;60%</li>
                      <li>• Annual production: ~800 GWh</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Strategic Objectives:</h4>
                    <ul className="space-y-2">
                      <li>• Demonstrate commercial viability</li>
                      <li>• Validate performance projections</li>
                      <li>• Optimize operational procedures</li>
                      <li>• Train operational personnel</li>
                      <li>• Establish supply chain</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Timeline</h4>
                  <p>2025-2027 deployment phase</p>
                </Card>
                <Card className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Investment</h4>
                  <p>€150-200 million</p>
                </Card>
                <Card className="p-6 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-bold mb-2">Impact</h4>
                  <p>Powers 100,000+ homes</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Gigawatt-Scale Potential */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Phase II: Gigawatt-Scale Deployment
            </h2>
            <div className="max-w-6xl mx-auto">
              <Card className="p-8 mb-8">
                <div className="text-center mb-8">
                  <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold">1+ GW Power Plants</h3>
                  <p className="text-lg">Industrial-scale energy production facilities</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <h4 className="font-bold mb-4">Small GW Plant</h4>
                    <div className="text-2xl font-bold text-primary mb-2">1 GW</div>
                    <ul className="space-y-1 text-sm">
                      <li>• 334 KiteGen units</li>
                      <li>• 3-5 km² land area</li>
                      <li>• Powers 750,000 homes</li>
                      <li>• €1-1.5 billion investment</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold mb-4">Large GW Plant</h4>
                    <div className="text-2xl font-bold text-primary mb-2">5 GW</div>
                    <ul className="space-y-1 text-sm">
                      <li>• 1,667 KiteGen units</li>
                      <li>• 10-15 km² land area</li>
                      <li>• Powers 3.75 million homes</li>
                      <li>• €4-6 billion investment</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h4 className="font-bold mb-4">Mega GW Plant</h4>
                    <div className="text-2xl font-bold text-primary mb-2">10 GW</div>
                    <ul className="space-y-1 text-sm">
                      <li>• 3,334 KiteGen units</li>
                      <li>• 20-25 km² land area</li>
                      <li>• Powers 7.5 million homes</li>
                      <li>• €8-12 billion investment</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h4 className="font-bold mb-4">Deployment Advantages:</h4>
                  <ul className="space-y-2">
                    <li>• Modular construction approach</li>
                    <li>• Phased commissioning capability</li>
                    <li>• Reduced transmission requirements</li>
                    <li>• Enhanced grid stability</li>
                    <li>• Economies of scale benefits</li>
                  </ul>
                </Card>
                <Card className="p-6">
                  <h4 className="font-bold mb-4">Strategic Locations:</h4>
                  <ul className="space-y-2">
                    <li>• Near major population centers</li>
                    <li>• Excellent high-altitude wind resources</li>
                    <li>• Existing transmission infrastructure</li>
                    <li>• Supportive regulatory environment</li>
                    <li>• Available land with minimal constraints</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Maglev Ring Plant Concept */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Phase III: Revolutionary Maglev Ring Plant
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="text-center mb-8">
                  <Rocket className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold">25 km Maglev Ring Design</h3>
                  <p className="text-lg">The ultimate expression of KiteGen technology</p>
                </div>
                
                <p className="text-lg mb-6 text-center">
                  The maglev ring concept represents the pinnacle of KiteGen engineering: 
                  a 25-kilometer circular magnetic levitation system that enables continuous, 
                  ultra-high-efficiency energy generation at unprecedented scales.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Revolutionary Features:</h4>
                    <ul className="space-y-2">
                      <li>• 25 km diameter magnetic ring</li>
                      <li>• Continuous kite motion system</li>
                      <li>• Ultra-low friction operation</li>
                      <li>• 10+ GW generation capacity</li>
                      <li>• 99%+ operational efficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Technical Advantages:</h4>
                    <ul className="space-y-2">
                      <li>• Eliminated start-stop cycles</li>
                      <li>• Maximum energy extraction</li>
                      <li>• Reduced mechanical wear</li>
                      <li>• Enhanced system longevity</li>
                      <li>• Unparalleled power density</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                  <h4 className="font-bold mb-4 text-center">Vision Timeline</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <h5 className="font-bold">2030-2035</h5>
                      <p className="text-sm">Prototype development</p>
                    </div>
                    <div>
                      <h5 className="font-bold">2035-2040</h5>
                      <p className="text-sm">First commercial plant</p>
                    </div>
                    <div>
                      <h5 className="font-bold">2040+</h5>
                      <p className="text-sm">Global deployment</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Global Transition Projections */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Global Energy Transition Projections
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* 2030 Scenario */}
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">2030 Scenario</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">KiteGen Deployment:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 10+ demonstration plants</li>
                        <li>• 1-2 GW total capacity</li>
                        <li>• 5-10 countries adoption</li>
                        <li>• Commercial manufacturing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Market Impact:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Proven technology viability</li>
                        <li>• Cost competitiveness established</li>
                        <li>• Supply chain development</li>
                        <li>• Regulatory framework adoption</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* 2040 Scenario */}
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">2040 Scenario</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">KiteGen Deployment:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 100+ GW global capacity</li>
                        <li>• 50+ countries adoption</li>
                        <li>• Multiple GW-scale plants</li>
                        <li>• Mass production achieved</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Energy Landscape:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 10% global electricity share</li>
                        <li>• Lowest cost renewable</li>
                        <li>• Grid stability enhancement</li>
                        <li>• Fossil fuel displacement</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* 2050 Scenario */}
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">2050 Scenario</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold mb-2">KiteGen Dominance:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 1+ TW global capacity</li>
                        <li>• Primary renewable source</li>
                        <li>• Universal technology adoption</li>
                        <li>• Maglev plants operational</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Global Impact:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 50%+ global electricity</li>
                        <li>• Carbon neutrality achieved</li>
                        <li>• Energy abundance realized</li>
                        <li>• Sustainable civilization</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Key Success Factors */}
              <Card className="p-8 mt-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Key Success Factors</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Technology Development:</h4>
                    <ul className="space-y-2">
                      <li>• Continued R&D investment</li>
                      <li>• Manufacturing scale-up</li>
                      <li>• Performance optimization</li>
                      <li>• Cost reduction achievements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Market Adoption:</h4>
                    <ul className="space-y-2">
                      <li>• Supportive policy frameworks</li>
                      <li>• Investment capital availability</li>
                      <li>• Industry partnerships</li>
                      <li>• Public acceptance and support</li>
                    </ul>
                  </div>
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
                Realizing the Vision
              </h2>
              <Card className="p-8">
                <p className="text-xl mb-6">
                  These future scenarios represent more than projections – they are achievable 
                  milestones on the path to global energy transformation.
                </p>
                <p className="text-lg">
                  By progressing through these phases, KiteGen technology will demonstrate its 
                  potential to solve the global energy crisis while creating unprecedented 
                  economic opportunities and environmental benefits. The future of energy is 
                  not just renewable – it's revolutionary.
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

export default FutureScenarios;