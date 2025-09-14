import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Factory, Ship, Zap, Tractor, AlertTriangle, Shield, Search, Building } from "lucide-react";

const Applications = () => {
  const applications = [
    {
      category: "Renewable Energy Generation",
      icon: Zap,
      items: [
        "Utility-Scale Power Production",
        "Decentralized Power Supply",
        "Grid-Scale Energy Storage Support",
        "Peak Load Management"
      ]
    },
    {
      category: "Maritime Applications",
      icon: Ship,
      items: [
        "Powering Ships & Maritime Operations",
        "Offshore Renewable Energy Farms",
        "Port Operations",
        "Deep-Sea Research Platforms"
      ]
    },
    {
      category: "Industrial & Commercial Use",
      icon: Factory,
      items: [
        "Industrial Plants",
        "Manufacturing Facilities",
        "Data Centers",
        "Mining Operations"
      ]
    },
    {
      category: "Agriculture & Rural Applications",
      icon: Tractor,
      items: [
        "Agriculture & Irrigation Systems",
        "Rural Electrification",
        "Farm Operations",
        "Greenhouse Power Supply"
      ]
    },
    {
      category: "Emergency & Disaster Relief",
      icon: AlertTriangle,
      items: [
        "Disaster Relief Operations",
        "Emergency Power Supply",
        "Temporary Infrastructure",
        "Humanitarian Aid Missions"
      ]
    },
    {
      category: "Military & Defense",
      icon: Shield,
      items: [
        "Base Energy Supply",
        "Surveillance & Communications",
        "Remote Outpost Power",
        "Mobile Defense Systems"
      ]
    },
    {
      category: "Scientific Research",
      icon: Search,
      items: [
        "Climate & Atmospheric Research",
        "Wildlife & Ocean Monitoring",
        "Remote Weather Stations",
        "Environmental Monitoring"
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <img 
            src="/src/assets/energy-city-2.png"
            alt="KiteGen Applications"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                KiteGen Applications
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Versatile solutions for diverse energy needs across industries and sectors
              </p>
            </div>
          </div>
        </section>

        {/* Applications Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((application, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <application.icon className="h-8 w-8 text-primary mr-3" />
                    <h3 className="text-xl font-bold">{application.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {application.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              
              {/* Utility Scale */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Utility-Scale Power Production</h2>
                <Card className="p-8">
                  <p className="text-lg mb-4">
                    KiteGen technology excels in large-scale power generation, capable of producing megawatts of electricity 
                    with minimal infrastructure. Our systems can be deployed in arrays to create virtual power plants that 
                    rival traditional energy facilities.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">150 MW</div>
                      <div className="text-sm text-muted-foreground">Standard Plant Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">90%</div>
                      <div className="text-sm text-muted-foreground">Less Material Use</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50%</div>
                      <div className="text-sm text-muted-foreground">Lower LCOE</div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Maritime Applications */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Maritime & Offshore Applications</h2>
                <Card className="p-8">
                  <p className="text-lg mb-4">
                    The maritime sector presents exceptional opportunities for KiteGen technology. Offshore installations 
                    can access even stronger and more consistent winds, while ship-based systems can provide auxiliary 
                    power during voyages.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li>• Offshore wind farms with 40% higher capacity factors</li>
                    <li>• Ship auxiliary power systems reducing fuel consumption by 20-30%</li>
                    <li>• Floating platforms for deep-water energy harvesting</li>
                    <li>• Port operations and marine infrastructure power supply</li>
                  </ul>
                </Card>
              </div>

              {/* Industrial Applications */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Industrial & Commercial Solutions</h2>
                <Card className="p-8">
                  <p className="text-lg mb-4">
                    Industries seeking energy independence and cost reduction can benefit significantly from KiteGen 
                    installations. The technology's scalability allows for customized solutions matching specific 
                    energy demands.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-bold mb-2">Manufacturing</h4>
                      <p>Continuous power supply for production facilities with energy cost reductions up to 60%</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Data Centers</h4>
                      <p>Reliable renewable energy for mission-critical infrastructure with 99.9% uptime</p>
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

export default Applications;