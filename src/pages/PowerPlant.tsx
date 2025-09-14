import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { RotateCcw, Zap, Settings, Scale } from "lucide-react";

const PowerPlant = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <img 
            src="/src/assets/energy-city-3.png"
            alt="KiteGen Power Plant Technology"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                The KiteGen Power Plant
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Revolutionary design concepts that transform wind energy generation
              </p>
            </div>
          </div>
        </section>

        {/* Radical Change of Perspective */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Radical Change of Perspective
              </h2>
              <Card className="p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">Traditional Wind Turbines</h3>
                    <ul className="space-y-3">
                      <li>• Fixed position, limited to ground-level winds</li>
                      <li>• Massive towers and foundations</li>
                      <li>• Single turbine per tower</li>
                      <li>• Limited by Betz limit (59.3% efficiency)</li>
                      <li>• High material and maintenance costs</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">KiteGen Approach</h3>
                    <ul className="space-y-3">
                      <li>• Dynamic movement accessing multiple altitudes</li>
                      <li>• Minimal ground infrastructure</li>
                      <li>• Multiple kites per generator unit</li>
                      <li>• Can exceed Betz limit through crosswind motion</li>
                      <li>• 90% less material requirements</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <p className="text-lg text-center">
                Instead of bringing the generator to the wind, KiteGen brings the wind to the generator 
                through intelligent kite systems that fly in crosswind patterns, maximizing energy capture.
              </p>
            </div>
          </div>
        </section>

        {/* Kite Steering Unit */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Kite Steering Unit (KSU)
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <div className="flex items-start mb-6">
                  <Settings className="h-8 w-8 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Advanced Control System</h3>
                    <p className="text-lg mb-4">
                      The Kite Steering Unit is the brain of the KiteGen system, providing precise control over 
                      kite flight patterns through sophisticated algorithms and real-time wind analysis.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      <li>• Real-time wind speed and direction monitoring</li>
                      <li>• GPS-based position tracking</li>
                      <li>• Automated flight path optimization</li>
                      <li>• Safety systems and emergency protocols</li>
                      <li>• Remote monitoring and control capabilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">Technical Specifications:</h4>
                    <ul className="space-y-2">
                      <li>• Operating altitude: 200-1000 meters</li>
                      <li>• Tether length: up to 1000 meters</li>
                      <li>• Control response time: &lt; 0.1 seconds</li>
                      <li>• Wind speed range: 3-25 m/s</li>
                      <li>• Autonomous operation up to 6 months</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Carousel and Stem Configurations */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              "Carousel" and "Stem" Configurations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Carousel Configuration */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <RotateCcw className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Carousel Configuration</h3>
                </div>
                <p className="text-lg mb-6">
                  Multiple kites arranged in a circular pattern, each following optimized flight paths 
                  to maximize energy extraction while minimizing interference.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Advantages:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Continuous power generation</li>
                      <li>• Scalable to gigawatt capacity</li>
                      <li>• Optimal for large installations</li>
                      <li>• Reduced land use per MW</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Applications:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Utility-scale power plants</li>
                      <li>• Industrial complexes</li>
                      <li>• Grid stabilization services</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Stem Configuration */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Zap className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Stem Configuration</h3>
                </div>
                <p className="text-lg mb-6">
                  Single or paired kite systems optimized for smaller installations and specific 
                  applications requiring precise power output control.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Advantages:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Lower initial investment</li>
                      <li>• Easier maintenance</li>
                      <li>• Flexible deployment</li>
                      <li>• Modular expansion capability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Applications:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Distributed generation</li>
                      <li>• Remote installations</li>
                      <li>• Maritime applications</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Modular Design */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Modular, Scalable Design
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="flex items-start mb-6">
                  <Scale className="h-8 w-8 text-primary mr-4 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Unprecedented Scalability</h3>
                    <p className="text-lg mb-6">
                      KiteGen's modular design allows for seamless scaling from kilowatt-scale residential 
                      systems to gigawatt-scale power plants, adapting to any energy requirement.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3 MW</div>
                    <div className="text-sm font-semibold mb-2">Single Unit</div>
                    <div className="text-sm text-muted-foreground">Standard generator capacity per kite system</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">150 MW</div>
                    <div className="text-sm font-semibold mb-2">Standard Plant</div>
                    <div className="text-sm text-muted-foreground">50-unit installation capacity</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1+ GW</div>
                    <div className="text-sm font-semibold mb-2">Mega Plant</div>
                    <div className="text-sm text-muted-foreground">Large-scale carousel configuration</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Power Density Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Power Density & Land Use Comparison
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Wind Turbines</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Power Density:</span>
                      <span className="font-bold">2-5 W/m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Land Use (150 MW):</span>
                      <span className="font-bold">30-75 km²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material per MW:</span>
                      <span className="font-bold">200-400 tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Foundation:</span>
                      <span className="font-bold">1000+ m³ concrete</span>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">KiteGen</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Power Density:</span>
                      <span className="font-bold text-primary">50-200 W/m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Land Use (150 MW):</span>
                      <span className="font-bold text-primary">0.75-3 km²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Material per MW:</span>
                      <span className="font-bold text-primary">20-40 tons</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Foundation:</span>
                      <span className="font-bold text-primary">Minimal/None</span>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <p className="text-lg">
                  <span className="font-bold text-primary">10-40x higher power density</span> and 
                  <span className="font-bold text-primary">90% less land use</span> compared to traditional wind farms
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default PowerPlant;