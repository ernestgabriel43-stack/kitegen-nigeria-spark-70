import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { TrendingUp, Globe, Factory, Leaf, DollarSign, Users } from "lucide-react";

const EconomicImpact = () => {
  const economicFactors = [
    {
      title: "Industrial Growth",
      icon: Factory,
      description: "Manufacturing expansion drives job creation and economic development",
      impact: "Positive GDP growth, increased employment, infrastructure development"
    },
    {
      title: "Energy Sector",
      icon: DollarSign,
      description: "Energy costs directly impact all sectors of the economy",
      impact: "Lower energy costs boost competitiveness and reduce operational expenses"
    },
    {
      title: "Globalization",
      icon: Globe,
      description: "International trade and technology transfer accelerate development",
      impact: "Market access, knowledge sharing, economic integration"
    },
    {
      title: "Technology",
      icon: TrendingUp,
      description: "Innovation drives productivity and creates new market opportunities",
      impact: "Efficiency gains, new industries, competitive advantages"
    }
  ];

  const environmentalFactors = [
    {
      title: "Climate Change",
      description: "Global warming requires urgent transition to clean energy",
      challenge: "Rising temperatures, extreme weather, sea level rise",
      solution: "KiteGen provides clean, abundant energy without emissions"
    },
    {
      title: "Resource Depletion",
      description: "Finite fossil fuel reserves necessitate renewable alternatives",
      challenge: "Peak oil, price volatility, energy security concerns",
      solution: "Unlimited wind resources with 90% less material requirements"
    },
    {
      title: "Pollution",
      description: "Air and water pollution impact health and environment",
      challenge: "Health costs, environmental degradation, ecosystem damage",
      solution: "Zero emissions during operation, minimal environmental footprint"
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
                Economic & Environmental Impact
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Balancing economic growth with environmental sustainability through innovative technology
              </p>
            </div>
          </div>
        </section>

        {/* Economic Growth vs Sustainability */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Economic Growth vs. Sustainability
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-center">The Traditional Dilemma</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4 text-primary">Economic Priorities</h4>
                    <ul className="space-y-2">
                      <li>• GDP growth and job creation</li>
                      <li>• Industrial competitiveness</li>
                      <li>• Energy security and affordability</li>
                      <li>• Short-term profit maximization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4 text-primary">Environmental Concerns</h4>
                    <ul className="space-y-2">
                      <li>• Climate change mitigation</li>
                      <li>• Resource conservation</li>
                      <li>• Ecosystem protection</li>
                      <li>• Long-term sustainability</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card className="p-8 bg-primary/5">
                <h3 className="text-2xl font-bold mb-6 text-center">KiteGen Solution</h3>
                <p className="text-lg text-center">
                  KiteGen technology eliminates the traditional trade-off between economic growth and environmental protection 
                  by providing <span className="font-bold text-primary">cheaper, cleaner energy</span> that drives both 
                  economic development and environmental sustainability.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Economic Factors */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Economic Growth Drivers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {economicFactors.map((factor, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start mb-4">
                    <factor.icon className="h-8 w-8 text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                      <p className="text-muted-foreground mb-3">{factor.description}</p>
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <p className="text-sm"><strong>Impact:</strong> {factor.impact}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Environmental Challenges */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Environmental Challenges & Solutions
            </h2>
            <div className="space-y-8">
              {environmentalFactors.map((factor, index) => (
                <Card key={index} className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-primary">{factor.title}</h3>
                  <p className="text-lg mb-6">{factor.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                      <h4 className="font-bold mb-2 text-red-700">Current Challenge</h4>
                      <p className="text-red-600">{factor.challenge}</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold mb-2 text-green-700">KiteGen Solution</h4>
                      <p className="text-green-600">{factor.solution}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Policy Framework */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Policies for Balancing Economy & Environment
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <Leaf className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Environmental Policies</h3>
                  <ul className="space-y-2">
                    <li>• Carbon pricing and emissions trading</li>
                    <li>• Renewable energy mandates</li>
                    <li>• Environmental impact assessments</li>
                    <li>• Resource efficiency standards</li>
                    <li>• Biodiversity protection measures</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Economic Policies</h3>
                  <ul className="space-y-2">
                    <li>• Green technology incentives</li>
                    <li>• Research and development funding</li>
                    <li>• Infrastructure investment programs</li>
                    <li>• Job retraining initiatives</li>
                    <li>• International trade agreements</li>
                  </ul>
                </Card>
              </div>
              
              <Card className="p-8 mt-8">
                <h3 className="text-2xl font-bold mb-6 text-center">KiteGen's Policy Impact</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Economic Benefits</h4>
                    <p className="text-sm">Lower energy costs, job creation, industrial competitiveness</p>
                  </div>
                  <div className="text-center">
                    <Leaf className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Environmental Benefits</h4>
                    <p className="text-sm">Zero emissions, minimal land use, resource conservation</p>
                  </div>
                  <div className="text-center">
                    <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Social Benefits</h4>
                    <p className="text-sm">Energy access, technological leadership, sustainable development</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Future Outlook */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                A New Economic Paradigm
              </h2>
              <p className="text-xl mb-8">
                KiteGen technology represents more than just an improvement in renewable energy – it's a 
                fundamental shift toward an economy where environmental protection enhances rather than 
                constrains economic growth.
              </p>
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">The KiteGen Economic Model</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-3">Traditional Energy Economy</h4>
                    <ul className="text-left space-y-1">
                      <li>• High energy costs limit growth</li>
                      <li>• Environmental compliance adds costs</li>
                      <li>• Resource depletion creates uncertainty</li>
                      <li>• Climate risks threaten infrastructure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3">KiteGen Energy Economy</h4>
                    <ul className="text-left space-y-1">
                      <li>• Ultra-low energy costs enable growth</li>
                      <li>• Environmental benefits create value</li>
                      <li>• Unlimited wind resources ensure security</li>
                      <li>• Climate resilience protects investments</li>
                    </ul>
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

export default EconomicImpact;