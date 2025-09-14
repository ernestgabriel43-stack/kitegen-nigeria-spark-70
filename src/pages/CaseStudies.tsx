import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, TrendingUp, Users, FileText, ExternalLink } from "lucide-react";
import VideoBackground from "@/components/VideoBackground";
import mobileBg7 from "@/assets/mobile-bg-7.jpg";

const CaseStudies = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <VideoBackground mobileImage={mobileBg7} />
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Case Studies & Blog
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Real-world applications and industry insights
              </p>
            </div>
          </div>
        </section>

        {/* Spain 2015 Case Study */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Featured Case Study: Spain 2015
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge variant="outline" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Spain
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    2015
                  </Badge>
                  <Badge variant="outline" className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Replacement Study
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">Replacing Wind Turbines with KiteGen Technology</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4 text-primary">Study Overview</h4>
                    <p className="mb-4">
                      A comprehensive analysis conducted in 2015 evaluated the potential for 
                      replacing existing wind turbine installations in Spain with KiteGen systems. 
                      The study examined technical feasibility, economic benefits, and environmental impact.
                    </p>
                    <ul className="space-y-2">
                      <li>• 50 existing wind farm sites analyzed</li>
                      <li>• Detailed wind resource assessment</li>
                      <li>• Economic comparison analysis</li>
                      <li>• Environmental impact evaluation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-4 text-primary">Key Findings</h4>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold">Power Generation</h5>
                        <p className="text-sm">400% increase in energy output per site</p>
                      </div>
                      <div>
                        <h5 className="font-semibold">Land Use Efficiency</h5>
                        <p className="text-sm">90% reduction in land requirements</p>
                      </div>
                      <div>
                        <h5 className="font-semibold">LCOE Improvement</h5>
                        <p className="text-sm">60% lower levelized cost of electricity</p>
                      </div>
                      <div>
                        <h5 className="font-semibold">Material Savings</h5>
                        <p className="text-sm">85% reduction in material requirements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <h4 className="font-bold mb-2">Sites Analyzed</h4>
                  <div className="text-3xl font-bold text-primary mb-2">50</div>
                  <p className="text-sm">Wind farms across Spanish regions</p>
                </Card>
                <Card className="p-6 text-center">
                  <h4 className="font-bold mb-2">Capacity Increase</h4>
                  <div className="text-3xl font-bold text-primary mb-2">4x</div>
                  <p className="text-sm">Power generation improvement</p>
                </Card>
                <Card className="p-6 text-center">
                  <h4 className="font-bold mb-2">Cost Reduction</h4>
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <p className="text-sm">Lower electricity costs</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Saipem Partnership */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Strategic Partnership: Saipem Agreement
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-12 w-12 text-primary mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">KiteGen & Saipem S.p.A Partnership</h3>
                    <p className="text-lg text-muted-foreground">Advancing offshore wind energy solutions</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4 text-primary">Partnership Objectives</h4>
                    <ul className="space-y-2">
                      <li>• Offshore KiteGen system development</li>
                      <li>• Maritime energy applications</li>
                      <li>• Joint technology advancement</li>
                      <li>• Market expansion initiatives</li>
                      <li>• Commercial deployment planning</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-4 text-primary">Saipem's Contribution</h4>
                    <ul className="space-y-2">
                      <li>• Offshore engineering expertise</li>
                      <li>• Maritime infrastructure knowledge</li>
                      <li>• Global project delivery capabilities</li>
                      <li>• Industrial manufacturing resources</li>
                      <li>• International market access</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                  <h4 className="font-bold mb-4">Strategic Impact</h4>
                  <p>
                    This partnership combines KiteGen's revolutionary technology with Saipem's 
                    world-class engineering and project delivery capabilities, positioning both 
                    companies at the forefront of the offshore renewable energy revolution.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Tech Events & Exhibitions */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technology Events & Exhibitions
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <Badge variant="outline">2024</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-3">European Wind Energy Association Conference</h3>
                  <p className="text-sm mb-4">
                    KiteGen technology demonstration and technical presentation on 
                    airborne wind energy systems.
                  </p>
                  <Badge className="text-xs">Hamburg, Germany</Badge>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <Badge variant="outline">2023</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Renewable Energy World Conference</h3>
                  <p className="text-sm mb-4">
                    Presentation on high-altitude wind energy potential and 
                    KiteGen's commercial development roadmap.
                  </p>
                  <Badge className="text-xs">Orlando, USA</Badge>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <Badge variant="outline">2023</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-3">WindEurope Technology Workshop</h3>
                  <p className="text-sm mb-4">
                    Technical workshop on innovative wind technologies and 
                    KiteGen's breakthrough in energy density.
                  </p>
                  <Badge className="text-xs">Copenhagen, Denmark</Badge>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <Badge variant="outline">2022</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-3">International Energy Agency Summit</h3>
                  <p className="text-sm mb-4">
                    Global energy transition discussion and KiteGen's role 
                    in achieving climate targets.
                  </p>
                  <Badge className="text-xs">Paris, France</Badge>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <Badge variant="outline">2022</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Airborne Wind Energy Conference</h3>
                  <p className="text-sm mb-4">
                    Specialized conference on AWE technologies featuring 
                    KiteGen's latest research developments.
                  </p>
                  <Badge className="text-xs">Milan, Italy</Badge>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="h-6 w-6 text-primary mr-2" />
                    <Badge variant="outline">2021</Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-3">Clean Energy Ministerial</h3>
                  <p className="text-sm mb-4">
                    Ministerial meeting showcasing innovative clean energy 
                    solutions and KiteGen technology potential.
                  </p>
                  <Badge className="text-xs">Virtual Event</Badge>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Updates & News */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Recent Updates & News
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                
                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <Badge variant="outline">Latest</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">January 2024</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">3MW Generator Testing Phase Completed</h3>
                  <p className="mb-4">
                    Successful completion of the 3MW generator testing phase demonstrates 
                    commercial viability of KiteGen technology. Performance metrics exceed 
                    projected specifications across all operational parameters.
                  </p>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm text-primary">Read full report</span>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <Badge variant="outline">Patent</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">November 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">New Patent Filed for Carousel Configuration</h3>
                  <p className="mb-4">
                    KiteGen Research filed a breakthrough patent for the advanced carousel 
                    configuration system, further strengthening our intellectual property 
                    portfolio in airborne wind energy.
                  </p>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm text-primary">Patent details</span>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <Badge variant="outline">Partnership</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">September 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Research Collaboration Expanded</h3>
                  <p className="mb-4">
                    New research collaborations established with leading European universities 
                    to accelerate development of next-generation airborne wind energy systems 
                    and advanced control algorithms.
                  </p>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm text-primary">Partnership announcement</span>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <Badge variant="outline">Investment</Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">June 2023</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Series A Funding Round Initiated</h3>
                  <p className="mb-4">
                    KiteGen S.p.A initiated Series A funding round to accelerate commercial 
                    development and scale manufacturing capabilities. Strong investor interest 
                    from renewable energy sector leaders.
                  </p>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm text-primary">Investment details</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe to Updates */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Stay Updated
              </h2>
              <Card className="p-8">
                <p className="text-lg mb-6">
                  Subscribe to receive the latest updates on KiteGen technology 
                  developments, research breakthroughs, and commercial milestones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  We respect your privacy. Unsubscribe at any time.
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

export default CaseStudies;