import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp, Leaf, DollarSign, MapPin, Users } from "lucide-react";
import energyIndustrialImage from "@/assets/energy-industrial-2.png";

const Reports = () => {
  const economicMetrics = [
    { label: "Capital Cost per MW", traditional: "$1.5M", kitegen: "$0.8M", savings: "47%" },
    { label: "O&M Cost per MWh", traditional: "$25", kitegen: "$12", savings: "52%" },
    { label: "Capacity Factor", traditional: "25-35%", kitegen: "60-70%", improvement: "2x" },
    { label: "LCOE ($/MWh)", traditional: "$60-80", kitegen: "$30-40", savings: "50%" }
  ];

  const environmentalMetrics = [
    { metric: "Land Use per MW", traditional: "47 hectares", kitegen: "2 hectares", improvement: "95% reduction" },
    { metric: "Material per MW", traditional: "200-400 tons", kitegen: "20-40 tons", improvement: "90% reduction" },
    { metric: "Concrete Foundation", traditional: "1000+ m³", kitegen: "Minimal/None", improvement: "99% reduction" },
    { metric: "Noise Level", traditional: "45-50 dB", kitegen: "<35 dB", improvement: "Minimal impact" }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <img 
            src={energyIndustrialImage}
            alt="KiteGen Reports"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                KiteGen Reports
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Comprehensive analysis of economic viability and environmental impact
              </p>
            </div>
          </div>
        </section>

        {/* Report Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-12 w-12 text-primary mr-4" />
                  <h2 className="text-3xl font-bold">Economic Viability Report</h2>
                </div>
                <p className="text-lg mb-6">
                  Comprehensive financial analysis demonstrating KiteGen's superior economic performance 
                  compared to traditional renewable energy technologies.
                </p>
                <Button className="w-full">Download Economic Report</Button>
              </Card>

              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Leaf className="h-12 w-12 text-primary mr-4" />
                  <h2 className="text-3xl font-bold">Environmental Impact Report</h2>
                </div>
                <p className="text-lg mb-6">
                  Detailed environmental assessment showing KiteGen's minimal ecological footprint 
                  and sustainable development benefits.
                </p>
                <Button className="w-full">Download Environmental Report</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Economic Viability Analysis */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Economic Viability Analysis
            </h2>
            
            {/* Capital Costs */}
            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6">Capital Costs & Operations</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Metric</th>
                      <th className="text-center py-3">Traditional Wind</th>
                      <th className="text-center py-3">KiteGen</th>
                      <th className="text-center py-3">Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {economicMetrics.map((metric, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 font-medium">{metric.label}</td>
                        <td className="text-center py-3">{metric.traditional}</td>
                        <td className="text-center py-3 text-primary font-bold">{metric.kitegen}</td>
                        <td className="text-center py-3 text-green-600 font-bold">
                          {metric.savings || metric.improvement}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Scalability Analysis */}
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Scalability</h3>
                <p className="text-3xl font-bold text-primary mb-2">300%</p>
                <p className="text-sm text-muted-foreground">Faster deployment than wind turbines</p>
              </Card>
              
              <Card className="p-6 text-center">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Competitiveness</h3>
                <p className="text-3xl font-bold text-primary mb-2">$35</p>
                <p className="text-sm text-muted-foreground">Average LCOE per MWh</p>
              </Card>
              
              <Card className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">ROI Period</h3>
                <p className="text-3xl font-bold text-primary mb-2">5-7</p>
                <p className="text-sm text-muted-foreground">Years for full cost recovery</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Environmental Impact Assessment */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Environmental Impact Assessment
            </h2>
            
            {/* Land Footprint */}
            <Card className="p-8 mb-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Land Footprint Analysis</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-4">Traditional Wind Farm (150 MW)</h4>
                  <ul className="space-y-2">
                    <li>• Total land area: 30-75 km²</li>
                    <li>• Turbine spacing: 5-7 rotor diameters</li>
                    <li>• Access roads: 100+ km</li>
                    <li>• Permanent structures: 50+ units</li>
                    <li>• Concrete foundations: 50,000+ m³</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">KiteGen Installation (150 MW)</h4>
                  <ul className="space-y-2">
                    <li>• Total land area: 0.75-3 km²</li>
                    <li>• Ground equipment spacing: Flexible</li>
                    <li>• Access roads: 10-20 km</li>
                    <li>• Permanent structures: 50 generators</li>
                    <li>• Concrete foundations: Minimal/None</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Environmental Metrics */}
            <div className="grid md:grid-cols-2 gap-8">
              {environmentalMetrics.map((metric, index) => (
                <Card key={index} className="p-6">
                  <h4 className="font-bold mb-3">{metric.metric}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Traditional:</span>
                      <span className="text-red-600">{metric.traditional}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>KiteGen:</span>
                      <span className="text-primary font-bold">{metric.kitegen}</span>
                    </div>
                    <div className="text-center text-green-600 font-bold mt-2">
                      {metric.improvement}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Wildlife & Emissions */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Wildlife Impact</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Traditional Wind Turbines:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 140,000-500,000 bird deaths annually (US)</li>
                      <li>• Bat mortality: 600,000+ per year</li>
                      <li>• Habitat fragmentation</li>
                      <li>• Migration pattern disruption</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">KiteGen Systems:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Visible kite systems with predictable paths</li>
                      <li>• High-altitude operation above bird flight zones</li>
                      <li>• Minimal ground disturbance</li>
                      <li>• No spinning blades at low altitudes</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Emissions & Lifecycle</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Manufacturing Phase:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 90% less steel and concrete</li>
                      <li>• Reduced transportation emissions</li>
                      <li>• Lower energy manufacturing process</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Operational Phase:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Zero operational emissions</li>
                      <li>• Minimal maintenance requirements</li>
                      <li>• No lubricants or coolants</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">End-of-Life:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• 95% recyclable materials</li>
                      <li>• No difficult-to-dispose components</li>
                      <li>• Minimal decommissioning costs</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Challenges & Mitigation */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Challenges & Mitigation Strategies
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Airspace Integration</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Challenge:</h4>
                    <p className="text-sm">Coordination with aviation authorities and air traffic control</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Mitigation:</h4>
                    <p className="text-sm">GPS tracking, automated deconfliction systems, restricted airspace designation</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Weather Dependency</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Challenge:</h4>
                    <p className="text-sm">Extreme weather conditions affecting kite operations</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Mitigation:</h4>
                    <p className="text-sm">Advanced weather forecasting, automated landing systems, storm-resistant designs</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">Public Acceptance</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold mb-2">Challenge:</h4>
                    <p className="text-sm">Familiarity with new technology and visual impact concerns</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Mitigation:</h4>
                    <p className="text-sm">Community engagement, demonstration projects, transparent communication</p>
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

export default Reports;