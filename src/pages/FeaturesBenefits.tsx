import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Zap, BarChart, Leaf, Wrench, TrendingUp, Globe } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import featuresImage from "@/assets/cityscape-aerial.jpg";

const FeaturesBenefits = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <VideoBackground 
            fallbackImage={featuresImage}
            className="absolute inset-0"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Features & Benefits
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                  The science behind KiteGen and its revolutionary advantages
                </p>
              </div>
            </div>
          </VideoBackground>
        </section>

        {/* Science Behind KiteGen */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The Science Behind KiteGen
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Traction and Recovery Phases</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Traction Phase</h4>
                    <p className="mb-4">
                      During the traction phase, kites fly in crosswind patterns at high speed, 
                      generating tremendous aerodynamic forces that pull the tether and drive 
                      the ground-based generator.
                    </p>
                    <ul className="space-y-2">
                      <li>• High-speed crosswind flight patterns</li>
                      <li>• Maximum aerodynamic force generation</li>
                      <li>• Direct mechanical energy production</li>
                      <li>• Can exceed Betz limit efficiency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Recovery Phase</h4>
                    <p className="mb-4">
                      In the recovery phase, the kite is reeled back in with minimal resistance, 
                      using only a fraction of the energy generated during traction, creating 
                      a net positive energy cycle.
                    </p>
                    <ul className="space-y-2">
                      <li>• Low-resistance kite positioning</li>
                      <li>• Minimal energy consumption</li>
                      <li>• Automated repositioning system</li>
                      <li>• Continuous cycle optimization</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Revolutionary Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">High-Altitude Operation</h3>
                </div>
                <p>
                  Operates at altitudes of 200-1000 meters, accessing stronger and more 
                  consistent winds unavailable to traditional turbines.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Wrench className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Full Automation</h3>
                </div>
                <p>
                  Advanced control systems provide autonomous operation with minimal 
                  human intervention, reducing operational costs significantly.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <BarChart className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Ultimate Scalability</h3>
                </div>
                <p>
                  Modular design allows scaling from residential kW systems to 
                  industrial GW installations seamlessly.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Minimal Land Use</h3>
                </div>
                <p>
                  Requires 90% less land than conventional wind farms while 
                  delivering higher power density per square meter.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Zap className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Dynamic Positioning</h3>
                </div>
                <p>
                  Kites can move to optimal wind positions in real-time, 
                  maximizing energy capture throughout changing conditions.
                </p>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Leaf className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Eco-Friendly Design</h3>
                </div>
                <p>
                  Minimal environmental impact with no noise pollution, 
                  reduced wildlife interference, and recyclable components.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Transformational Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Efficiency Advantages</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Superior Energy Capture</h4>
                    <p>Can exceed the theoretical Betz limit through crosswind motion, achieving efficiencies above 59.3%</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Capacity Factor</h4>
                    <p>Higher capacity factors due to access to more consistent high-altitude winds</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Power Density</h4>
                    <p>10-40x higher power density compared to conventional wind farms</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Economic Benefits</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Lower LCOE</h4>
                    <p>Significantly reduced levelized cost of electricity through material and operational savings</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Reduced Infrastructure</h4>
                    <p>90% less material requirements and minimal foundation costs</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Faster Deployment</h4>
                    <p>Quicker installation and commissioning compared to traditional wind farms</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Environmental Benefits</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Minimal Footprint</h4>
                    <p>Dramatically reduced land use while preserving natural habitats</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Wildlife Protection</h4>
                    <p>Reduced bird and bat mortality through high-altitude operation</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Material Efficiency</h4>
                    <p>Lower carbon footprint through reduced material and transport requirements</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Energy Independence</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Distributed Generation</h4>
                    <p>Enables local energy production reducing grid dependency</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Global Accessibility</h4>
                    <p>Viable in regions with insufficient ground-level wind resources</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Grid Stability</h4>
                    <p>Consistent power output contributes to grid stabilization</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default FeaturesBenefits;