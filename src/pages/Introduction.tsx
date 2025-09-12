import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Wind, Zap, Leaf, DollarSign } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import introductionImage from "@/assets/industrial-1.jpg";

const Introduction = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <VideoBackground 
            fallbackImage={introductionImage}
            className="absolute inset-0"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-5xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                  KiteGen Technology
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
                  Revolutionary high-altitude wind energy harvesting technology that transforms how we generate renewable power
                </p>
              </div>
            </div>
          </VideoBackground>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Overview of KiteGen Technology
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg mb-6">
                  KiteGen represents a paradigm shift in renewable energy generation. Instead of relying on ground-based wind turbines, 
                  KiteGen harnesses the power of high-altitude winds using advanced tethered kite systems that operate at altitudes 
                  where winds are stronger, more consistent, and more reliable.
                </p>
                <p className="text-lg mb-6">
                  Our technology leverages the fundamental physics of wind energy at higher altitudes, where wind speeds are typically 
                  2-3 times stronger than at ground level. This allows for exponentially greater energy capture with significantly 
                  reduced infrastructure requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differences from Traditional Wind Turbines */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Differences from Traditional Wind Turbines
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Traditional Wind Turbines</h3>
                <ul className="space-y-3">
                  <li>• Limited to ground-level wind speeds (typically 6-15 m/s)</li>
                  <li>• Massive concrete foundations and steel towers</li>
                  <li>• High material costs and transportation challenges</li>
                  <li>• Intermittent power generation</li>
                  <li>• Visual and noise pollution</li>
                  <li>• Limited scalability due to physical constraints</li>
                </ul>
              </Card>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">KiteGen Technology</h3>
                <ul className="space-y-3">
                  <li>• Access to high-altitude winds (20-40 m/s)</li>
                  <li>• Minimal ground infrastructure</li>
                  <li>• 90% less material requirements</li>
                  <li>• More consistent power generation</li>
                  <li>• Minimal visual and environmental impact</li>
                  <li>• Highly scalable and modular design</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Key Benefits
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Higher Efficiency</h3>
                <p>Access to winds 2-3x stronger than ground level, resulting in 8-27x more power generation</p>
              </Card>
              <Card className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Lower Material Cost</h3>
                <p>90% reduction in material requirements compared to traditional wind turbines</p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Minimal Environmental Impact</h3>
                <p>Smaller footprint, no foundation requirements, and reduced visual pollution</p>
              </Card>
              <Card className="p-6 text-center">
                <Wind className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Consistent Power</h3>
                <p>High-altitude winds are more stable and consistent than ground-level winds</p>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Introduction;