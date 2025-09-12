import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Wind, DollarSign, Leaf, Zap, Wrench, MapPin, TrendingDown } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import advantagesImage from "@/assets/cityscape-2.jpg";

const KeyAdvantages = () => {
  const advantages = [
    {
      title: "Access to Stronger Winds",
      icon: Wind,
      description: "High-altitude winds are 2-3x stronger than ground-level winds",
      details: [
        "Consistent 20-40 m/s wind speeds at altitude",
        "Less turbulence and more laminar flow",
        "Higher energy density available 24/7",
        "Access to jet streams at optimal altitudes"
      ],
      impact: "8-27x more power generation potential"
    },
    {
      title: "Lower Infrastructure Costs",
      icon: DollarSign,
      description: "90% reduction in material requirements compared to wind turbines",
      details: [
        "No massive concrete foundations required",
        "Minimal ground infrastructure",
        "Reduced transportation and installation costs",
        "Lower site preparation requirements"
      ],
      impact: "47% lower capital costs per MW"
    },
    {
      title: "Minimal Environmental Impact",
      icon: Leaf,
      description: "Smallest ecological footprint of any utility-scale power generation",
      details: [
        "95% less land use per MW generated",
        "No permanent habitat disruption",
        "Minimal visual pollution",
        "Reduced noise levels (<35 dB)"
      ],
      impact: "99% reduction in environmental disturbance"
    },
    {
      title: "Higher Energy Density & Scalability",
      icon: Zap,
      description: "Superior power-to-space ratio enables unprecedented scalability",
      details: [
        "10-40x higher power density than wind farms",
        "Modular design allows flexible scaling",
        "Can reach gigawatt capacity on small footprint",
        "Efficient land use for maximum energy output"
      ],
      impact: "Scalable from MW to GW installations"
    },
    {
      title: "Lower Maintenance",
      icon: Wrench,
      description: "Simplified systems with fewer moving parts reduce maintenance needs",
      details: [
        "No high-altitude maintenance required",
        "Automated kite landing for service",
        "Longer component lifecycles",
        "Remote monitoring and diagnostics"
      ],
      impact: "52% lower O&M costs"
    },
    {
      title: "Decentralized/Grid Independence",
      icon: MapPin,
      description: "Can operate independently or provide distributed generation",
      details: [
        "Suitable for remote and off-grid locations",
        "Can provide baseload or peaking power",
        "Grid stabilization services capability",
        "Energy storage integration ready"
      ],
      impact: "Universal deployment flexibility"
    },
    {
      title: "Competitive LCOE",
      icon: TrendingDown,
      description: "Levelized Cost of Energy competitive with all energy sources",
      details: [
        "$30-40 per MWh average LCOE",
        "50% lower than offshore wind",
        "Competitive with natural gas",
        "Economics improve with scale"
      ],
      impact: "Lowest cost renewable energy source"
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
                Key Advantages of KiteGen
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Revolutionary benefits that make KiteGen the future of renewable energy
              </p>
            </div>
          </div>
        </section>

        {/* Advantages Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why KiteGen Outperforms All Alternatives
              </h2>
              <p className="text-xl max-w-4xl mx-auto">
                KiteGen technology addresses every major limitation of current renewable energy sources 
                while providing unprecedented advantages in cost, efficiency, and environmental impact.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <advantage.icon className="h-12 w-12 text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                      <p className="text-lg text-muted-foreground mb-4">{advantage.description}</p>
                      <div className="bg-primary/10 p-3 rounded-lg mb-4">
                        <p className="font-bold text-primary">{advantage.impact}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {advantage.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technology Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 font-bold">Metric</th>
                    <th className="text-center py-4 px-6 font-bold">Solar PV</th>
                    <th className="text-center py-4 px-6 font-bold">Wind Turbines</th>
                    <th className="text-center py-4 px-6 font-bold">Nuclear</th>
                    <th className="text-center py-4 px-6 font-bold text-primary">KiteGen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Capacity Factor</td>
                    <td className="text-center py-4 px-6">15-25%</td>
                    <td className="text-center py-4 px-6">25-35%</td>
                    <td className="text-center py-4 px-6">85-95%</td>
                    <td className="text-center py-4 px-6 font-bold text-primary">60-70%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">LCOE ($/MWh)</td>
                    <td className="text-center py-4 px-6">40-60</td>
                    <td className="text-center py-4 px-6">60-80</td>
                    <td className="text-center py-4 px-6">80-120</td>
                    <td className="text-center py-4 px-6 font-bold text-primary">30-40</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Land Use (ha/MW)</td>
                    <td className="text-center py-4 px-6">2-4</td>
                    <td className="text-center py-4 px-6">47</td>
                    <td className="text-center py-4 px-6">1-2</td>
                    <td className="text-center py-4 px-6 font-bold text-primary">0.2</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Material (tons/MW)</td>
                    <td className="text-center py-4 px-6">40-60</td>
                    <td className="text-center py-4 px-6">200-400</td>
                    <td className="text-center py-4 px-6">2000+</td>
                    <td className="text-center py-4 px-6 font-bold text-primary">20-40</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Emissions (g CO₂/kWh)</td>
                    <td className="text-center py-4 px-6">40-50</td>
                    <td className="text-center py-4 px-6">10-20</td>
                    <td className="text-center py-4 px-6">10-15</td>
                    <td className="text-center py-4 px-6 font-bold text-primary">5-10</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Lifespan (years)</td>
                    <td className="text-center py-4 px-6">25-30</td>
                    <td className="text-center py-4 px-6">20-25</td>
                    <td className="text-center py-4 px-6">40-60</td>
                    <td className="text-center py-4 px-6 font-bold text-primary">30-40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Advantage Analysis */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Detailed Advantage Analysis
            </h2>
            
            <div className="space-y-16">
              {/* Wind Access */}
              <div className="max-w-4xl mx-auto">
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <Wind className="h-12 w-12 text-primary mr-4" />
                    <h3 className="text-3xl font-bold">Superior Wind Access</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Ground-Level Wind (0-100m)</h4>
                      <ul className="space-y-2">
                        <li>• Average speed: 6-12 m/s</li>
                        <li>• High turbulence and variability</li>
                        <li>• Limited by surface roughness</li>
                        <li>• Intermittent availability</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4">High-Altitude Wind (200-1000m)</h4>
                      <ul className="space-y-2">
                        <li>• Average speed: 20-40 m/s</li>
                        <li>• Smooth, laminar flow</li>
                        <li>• Consistent and predictable</li>
                        <li>• Available 70%+ of the time</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-8 bg-primary/10 p-6 rounded-lg">
                    <p className="text-lg font-bold text-center">
                      Power increases with the cube of wind speed: 2x wind speed = 8x power output
                    </p>
                  </div>
                </Card>
              </div>

              {/* Cost Advantage */}
              <div className="max-w-4xl mx-auto">
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <DollarSign className="h-12 w-12 text-primary mr-4" />
                    <h3 className="text-3xl font-bold">Unmatched Cost Efficiency</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">90%</div>
                      <div className="font-bold mb-2">Less Materials</div>
                      <div className="text-sm text-muted-foreground">Steel, concrete, and rare earth elements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">47%</div>
                      <div className="font-bold mb-2">Lower CAPEX</div>
                      <div className="text-sm text-muted-foreground">Capital expenditure per MW installed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">52%</div>
                      <div className="font-bold mb-2">Lower OPEX</div>
                      <div className="text-sm text-muted-foreground">Operations and maintenance costs</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Environmental Advantage */}
              <div className="max-w-4xl mx-auto">
                <Card className="p-8">
                  <div className="flex items-center mb-6">
                    <Leaf className="h-12 w-12 text-primary mr-4" />
                    <h3 className="text-3xl font-bold">Environmental Leadership</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Minimal Footprint</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Land use per MW:</span>
                          <span className="font-bold text-primary">0.2 hectares</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Foundation material:</span>
                          <span className="font-bold text-primary">None required</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Visual impact:</span>
                          <span className="font-bold text-primary">Minimal</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Noise level:</span>
                          <span className="font-bold text-primary">&lt;35 dB</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4">Wildlife Protection</h4>
                      <ul className="space-y-2">
                        <li>• High-altitude operation above bird corridors</li>
                        <li>• Visible kite systems with predictable paths</li>
                        <li>• No spinning blade hazards</li>
                        <li>• Minimal habitat disruption</li>
                        <li>• Automated collision avoidance systems</li>
                      </ul>
                    </div>
                  </div>
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

export default KeyAdvantages;