import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, Award, Users, Lightbulb, Target, BookOpen } from "lucide-react";

const Research = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <img 
            src="/src/assets/energy-industrial-1.png"
            alt="KiteGen Research"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40"></div>
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                KiteGen Research
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
                Leading innovation in airborne wind energy since 2007
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Founded 2007</h3>
                  <p>Over 17 years of pioneering research in airborne wind energy</p>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">40+ Patents</h3>
                  <p>Comprehensive intellectual property portfolio protecting innovations</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                  <p>Multidisciplinary engineers and researchers from leading institutions</p>
                </div>
              </div>

              <Card className="p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                <p className="text-lg text-center mb-6">
                  KiteGen Research S.r.l. is dedicated to revolutionizing renewable energy through 
                  innovative airborne wind energy systems that harness the power of high-altitude winds 
                  with unprecedented efficiency and minimal environmental impact.
                </p>
                <p className="text-center">
                  Founded in 2007 in Turin, Italy, we have been at the forefront of developing 
                  breakthrough technologies that make renewable energy more accessible, efficient, 
                  and economically viable for global adoption.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Research Areas */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Key Research Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Aerodynamics & Flight Control</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Advanced Kite Design</h4>
                    <p>Development of high-performance kites optimized for crosswind flight patterns and energy generation</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Flight Path Optimization</h4>
                    <p>AI-driven algorithms for maximum energy extraction through optimal flight trajectory calculations</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Stability & Control Systems</h4>
                    <p>Real-time control systems ensuring safe and efficient operation in various wind conditions</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Tethering Technology</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">High-Strength Materials</h4>
                    <p>Research into advanced composite materials for lightweight, durable tethering systems</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Dynamic Load Management</h4>
                    <p>Systems to handle variable loads and forces during different flight phases</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Tether Monitoring</h4>
                    <p>Real-time monitoring systems for tether integrity and performance optimization</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <BookOpen className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Energy Conversion</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Generator Optimization</h4>
                    <p>Development of high-efficiency generators designed for variable-speed operation</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Power Electronics</h4>
                    <p>Advanced power conditioning systems for grid integration and power quality</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Energy Storage Integration</h4>
                    <p>Research into optimal energy storage solutions for consistent power delivery</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Automation & AI</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">Machine Learning</h4>
                    <p>AI systems for predictive maintenance, weather analysis, and performance optimization</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Autonomous Operation</h4>
                    <p>Fully automated systems requiring minimal human intervention for operation</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Safety Protocols</h4>
                    <p>Advanced safety systems with multiple redundancies and emergency procedures</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Ecological Research */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Ecological Impact Research
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="p-8">
                <p className="text-lg mb-6">
                  Our comprehensive ecological research program ensures that KiteGen technology 
                  not only provides clean energy but also minimizes environmental impact across 
                  all operational aspects.
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4">Wildlife Impact Studies</h4>
                    <ul className="space-y-2">
                      <li>• Bird and bat migration pattern analysis</li>
                      <li>• High-altitude ecosystem research</li>
                      <li>• Noise impact assessments</li>
                      <li>• Visual impact evaluations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4">Lifecycle Analysis</h4>
                    <ul className="space-y-2">
                      <li>• Material sourcing and recyclability</li>
                      <li>• Manufacturing carbon footprint</li>
                      <li>• End-of-life disposal strategies</li>
                      <li>• Comparative environmental benefits</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Industry Collaborations */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Industry Collaborations
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Academic Partnerships</h3>
                  <p className="mb-4">
                    Collaborations with leading universities and research institutions worldwide 
                    to advance airborne wind energy technology.
                  </p>
                  <ul className="space-y-2">
                    <li>• Politecnico di Torino</li>
                    <li>• TU Delft (Netherlands)</li>
                    <li>• Freiburg University (Germany)</li>
                    <li>• International research consortiums</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Industrial Partners</h3>
                  <p className="mb-4">
                    Strategic partnerships with industry leaders to accelerate technology 
                    development and commercialization.
                  </p>
                  <ul className="space-y-2">
                    <li>• Saipem S.p.A partnership</li>
                    <li>• Material suppliers</li>
                    <li>• Component manufacturers</li>
                    <li>• Energy companies</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Future Vision
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <Card className="p-8">
                <p className="text-lg mb-6">
                  Our vision is to make KiteGen technology the leading renewable energy solution 
                  globally, providing clean, affordable, and accessible energy to communities worldwide.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Technology Leadership</h4>
                    <p>Maintaining our position at the forefront of airborne wind energy innovation</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Global Deployment</h4>
                    <p>Scaling KiteGen technology for worldwide renewable energy adoption</p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Sustainable Future</h4>
                    <p>Contributing to a carbon-neutral world through revolutionary clean energy</p>
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

export default Research;