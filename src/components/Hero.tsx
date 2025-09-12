import { Button } from "@/components/ui/button";
import { ArrowRight, Wind, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import VideoBackground from "@/components/VideoBackground";
import heroImage from "@/assets/hero-kites.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground 
        fallbackImage={heroImage}
        className="absolute inset-0"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Innovative Kite Technology
            <span className="block gradient-hero bg-clip-text text-transparent mt-2">
              for Renewable Energy
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto leading-relaxed">
            Explore Kitegen's cutting-edge wind energy technology, harnessing powerful kites to provide sustainable, efficient, and eco-friendly energy solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/introduction">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/15 border-white/40 text-white hover:bg-white/25 backdrop-blur-sm" asChild>
              <Link to="/applications">Our Projects</Link>
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/15 backdrop-blur-md rounded-xl border border-white/20">
              <Wind className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2 text-white">High Altitude</h3>
              <p className="text-white/90 text-sm text-center leading-relaxed">Accessing stronger, more consistent winds at altitude</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/15 backdrop-blur-md rounded-xl border border-white/20">
              <Zap className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2 text-white">Clean Energy</h3>
              <p className="text-white/90 text-sm text-center leading-relaxed">100% renewable energy with minimal environmental impact</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/15 backdrop-blur-md rounded-xl border border-white/20">
              <ArrowRight className="h-12 w-12 mb-4 text-white" />
              <h3 className="text-lg font-semibold mb-2 text-white">Innovation</h3>
              <p className="text-white/90 text-sm text-center leading-relaxed">Cutting-edge technology for Nigeria's energy independence</p>
            </div>
          </div>
        </div>
        </div>
      </VideoBackground>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;