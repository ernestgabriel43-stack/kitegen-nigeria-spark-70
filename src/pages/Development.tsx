import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Target, Users, DollarSign, Calendar, Award } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import developmentImage from "@/assets/industrial-2.jpg";

const Development = () => {
  const milestones = [
    { phase: "Phase 1", period: "2024-2025", title: "3MW Generator Tests", status: "In Progress", description: "Full-scale prototype testing and validation" },
    { phase: "Phase 2", period: "2025-2026", title: "Patent Portfolio", status: "Ongoing", description: "Securing intellectual property rights globally" },
    { phase: "Phase 3", period: "2026-2027", title: "Industrial Plan", status: "Planning", description: "Manufacturing scale-up and supply chain development" },
    { phase: "Phase 4", period: "2027-2028", title: "Commercial Deployment", status: "Future", description: "First commercial installations worldwide" }
  ];

  const investmentOpportunities = [
    {
      type: "Series A",
      amount: "$50M",
      purpose: "Prototype completion and testing",
      timeline: "2024-2025",
      returns: "Technology validation, IP portfolio, market positioning"
    },
    {
      type: "Series B",
      amount: "$150M",
      purpose: "Manufacturing setup and first commercial plants",
      timeline: "2025-2026",
      returns: "Revenue generation, market leadership, scalable operations"
    },
    {
      type: "Growth Capital",
      amount: "$500M+",
      purpose: "Global expansion and gigawatt-scale deployment",
      timeline: "2026+",
      returns: "Market dominance, massive scale economies, IPO potential"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <VideoBackground 
            fallbackImage={developmentImage}
            className="absolute inset-0"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                  Development & Investments
                </h1>
                <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                  Join the energy revolution through strategic partnerships and investment opportunities
                </p>
              </div>
            </div>
          </VideoBackground>
        </section>

        {/* Medium-term Development */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Foreseen Medium-term Development
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{milestone.title}</h3>
                          <p className="text-muted-foreground">{milestone.phase} • {milestone.period}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        milestone.status === 'Ongoing' ? 'bg-green-100 text-green-800' :
                        milestone.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {milestone.status}
                      </div>
                    </div>
                    <p className="text-lg">{milestone.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3MW Generator Tests */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              3MW Generator Test Program
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Full-Scale Prototype Testing</h3>
                </div>
                <p className="text-lg mb-6">
                  Our comprehensive testing program validates KiteGen technology at commercial scale, 
                  demonstrating real-world performance and reliability under various conditions.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3 MW</div>
                    <div className="text-sm font-semibold mb-2">Generator Capacity</div>
                    <div className="text-sm text-muted-foreground">Commercial-scale testing unit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1000m</div>
                    <div className="text-sm font-semibold mb-2">Maximum Altitude</div>
                    <div className="text-sm text-muted-foreground">High-altitude wind access</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">18</div>
                    <div className="text-sm font-semibold mb-2">Test Months</div>
                    <div className="text-sm text-muted-foreground">Comprehensive validation period</div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold mb-4">Key Testing Objectives:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li>• Power output validation</li>
                      <li>• System reliability testing</li>
                      <li>• Weather resistance evaluation</li>
                      <li>• Automated operation verification</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Safety systems validation</li>
                      <li>• Grid integration testing</li>
                      <li>• Maintenance procedures optimization</li>
                      <li>• Performance monitoring systems</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment Opportunities */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Investment Opportunities in KiteGen S.p.A
            </h2>
            <div className="space-y-8">
              {investmentOpportunities.map((opportunity, index) => (
                <Card key={index} className="p-8">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{opportunity.type}</h3>
                      <p className="text-3xl font-bold">{opportunity.amount}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Purpose</h4>
                      <p className="text-sm">{opportunity.purpose}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Timeline</h4>
                      <p className="text-sm">{opportunity.timeline}</p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Expected Returns</h4>
                      <p className="text-sm">{opportunity.returns}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="mr-4">
                Investment Information
              </Button>
              <Button variant="outline" size="lg">
                Schedule Investor Meeting
              </Button>
            </div>
          </div>
        </section>

        {/* Open Days & Community */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Open Days & Supporter Community
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Calendar className="h-12 w-12 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Open Days Events</h3>
                </div>
                <p className="text-lg mb-6">
                  Experience KiteGen technology firsthand through our regular open days, 
                  featuring live demonstrations, technical presentations, and Q&A sessions.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold">Monthly Demo Days</h4>
                    <p className="text-sm text-muted-foreground">First Saturday of each month</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold">Investor Presentations</h4>
                    <p className="text-sm text-muted-foreground">Quarterly business updates</p>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-bold">Technical Workshops</h4>
                    <p className="text-sm text-muted-foreground">Bi-annual deep-dive sessions</p>
                  </div>
                </div>
                <Button className="w-full mt-6">Register for Next Event</Button>
              </Card>

              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-12 w-12 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Supporter Community</h3>
                </div>
                <p className="text-lg mb-6">
                  Join our growing community of supporters, investors, and technology enthusiasts 
                  who believe in the future of high-altitude wind energy.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2,500+</div>
                    <div className="text-sm">Community Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-sm">Investors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm">Partner Organizations</div>
                  </div>
                </div>
                <Button className="w-full">Join Community</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnerships and Funding */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Partnerships and Funding
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="p-6">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Strategic Partnerships</h3>
                  <ul className="space-y-2">
                    <li>• Research institutions and universities</li>
                    <li>• Energy companies and utilities</li>
                    <li>• Government agencies and regulators</li>
                    <li>• Manufacturing and supply chain partners</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <Rocket className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">Funding Sources</h3>
                  <ul className="space-y-2">
                    <li>• Venture capital and private equity</li>
                    <li>• Government grants and incentives</li>
                    <li>• Corporate strategic investments</li>
                    <li>• International development funds</li>
                  </ul>
                </Card>
              </div>
              
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Invest in KiteGen?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Market Opportunity</h4>
                    <p className="text-sm">$2+ trillion global energy market transformation</p>
                  </div>
                  <div className="text-center">
                    <Target className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Competitive Advantage</h4>
                    <p className="text-sm">Proprietary technology with 40+ patents</p>
                  </div>
                  <div className="text-center">
                    <Rocket className="h-12 w-12 text-primary mx-auto mb-3" />
                    <h4 className="font-bold mb-2">Growth Potential</h4>
                    <p className="text-sm">Scalable technology with global applications</p>
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

export default Development;