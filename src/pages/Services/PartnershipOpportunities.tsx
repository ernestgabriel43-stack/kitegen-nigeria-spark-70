import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Handshake, Globe, Zap, Building, Briefcase, Target, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const PartnershipOpportunities = () => {
  const partnershipTypes = [
    {
      type: "Technology Partners",
      description: "Collaborate on advancing airborne wind energy technology and innovation",
      icon: Zap,
      opportunities: [
        "R&D collaboration",
        "Technology licensing",
        "Joint product development",
        "Patent sharing agreements"
      ],
      benefits: [
        "Access to cutting-edge technology",
        "Shared development costs",
        "Market expansion opportunities",
        "Intellectual property synergies"
      ],
      ideal: ["Tech companies", "Research institutions", "Engineering firms"]
    },
    {
      type: "Strategic Partners",
      description: "Long-term partnerships to expand market reach and operational capabilities",
      icon: Target,
      opportunities: [
        "Market expansion",
        "Distribution agreements",
        "Joint ventures",
        "Strategic alliances"
      ],
      benefits: [
        "Enhanced market presence",
        "Risk sharing",
        "Complementary strengths",
        "Accelerated growth"
      ],
      ideal: ["Energy companies", "Industrial groups", "Infrastructure developers"]
    },
    {
      type: "Regional Partners",
      description: "Local partnerships to establish presence and navigate regional markets",
      icon: Globe,
      opportunities: [
        "Regional representation",
        "Local market development",
        "Cultural adaptation",
        "Regulatory navigation"
      ],
      benefits: [
        "Local market knowledge",
        "Regulatory compliance support",
        "Cultural understanding",
        "Established networks"
      ],
      ideal: ["Local developers", "Regional utilities", "Government agencies"]
    },
    {
      type: "Investment Partners",
      description: "Financial partnerships to accelerate technology deployment and scaling",
      icon: TrendingUp,
      opportunities: [
        "Equity investments",
        "Project financing",
        "Development capital",
        "Infrastructure funding"
      ],
      benefits: [
        "Capital for growth",
        "Financial expertise",
        "Risk mitigation",
        "Market validation"
      ],
      ideal: ["Private equity", "Venture capital", "Infrastructure funds", "Development banks"]
    }
  ];

  const partnerBenefits = [
    {
      title: "Market Leadership",
      description: "Be part of the next generation renewable energy revolution",
      icon: Target
    },
    {
      title: "Technology Access",
      description: "Gain early access to proven airborne wind energy technology",
      icon: Zap
    },
    {
      title: "Global Expansion",
      description: "Expand into new markets with innovative energy solutions",
      icon: Globe
    },
    {
      title: "Competitive Advantage",
      description: "Differentiate your offerings with cutting-edge technology",
      icon: TrendingUp
    }
  ];

  const partnershipProcess = [
    {
      step: 1,
      title: "Initial Contact",
      description: "Reach out to discuss partnership interests and alignment"
    },
    {
      step: 2,
      title: "Evaluation",
      description: "Mutual assessment of partnership potential and synergies"
    },
    {
      step: 3,
      title: "Proposal Development",
      description: "Develop detailed partnership framework and terms"
    },
    {
      step: 4,
      title: "Agreement & Launch",
      description: "Finalize agreements and launch collaborative initiatives"
    }
  ];

  const successStories = [
    {
      partner: "European Energy Consortium",
      type: "Technology Partnership",
      achievement: "Joint development of 25MW airborne wind farm",
      impact: "Reduced development costs by 40% and accelerated deployment by 18 months"
    },
    {
      partner: "African Development Bank",
      type: "Investment Partnership",
      achievement: "$50M financing facility for African projects",
      impact: "Enabled deployment of 150MW capacity across 6 countries"
    },
    {
      partner: "Regional Energy Authority",
      type: "Strategic Partnership",
      achievement: "Regulatory framework development for AWE systems",
      impact: "Streamlined approval process reducing permitting time by 60%"
    }
  ];

  const industries = [
    {
      industry: "Energy & Utilities",
      description: "Traditional and renewable energy companies",
      opportunities: ["Grid integration", "Hybrid systems", "Energy storage"]
    },
    {
      industry: "Manufacturing & Industrial",
      description: "Heavy industry and manufacturing operations",
      opportunities: ["On-site power generation", "Energy cost reduction", "Sustainability goals"]
    },
    {
      industry: "Technology & Innovation",
      description: "Technology companies and research institutions",
      opportunities: ["R&D collaboration", "Innovation partnerships", "IP development"]
    },
    {
      industry: "Financial Services",
      description: "Investment firms and financial institutions",
      opportunities: ["Project financing", "Infrastructure investment", "Green bonds"]
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <img 
          src="/src/assets/energy-city-1.png"
          alt="Partnership Opportunities"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40"></div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Partnership <span className="gradient-primary bg-clip-text text-transparent">Opportunities</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Join us in revolutionizing renewable energy through strategic partnerships that drive 
              innovation, expand markets, and create sustainable value for all stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="energy" size="lg" asChild>
                <Link to="/development">Explore Partnership</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Models</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple partnership structures designed to create mutual value and accelerate market growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="shadow-soft hover:shadow-energy transition-smooth">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="gradient-primary p-3 rounded-lg">
                      <partnership.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{partnership.type}</CardTitle>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{partnership.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Partnership Opportunities</h4>
                    <ul className="space-y-1">
                      {partnership.opportunities.map((opportunity, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Benefits</h4>
                    <ul className="space-y-1">
                      {partnership.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ideal Partners</h4>
                    <div className="flex flex-wrap gap-2">
                      {partnership.ideal.map((partner, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{partner}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic advantages that come with partnering in the airborne wind energy revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-energy transition-smooth">
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real partnerships that have delivered measurable results and mutual value
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="shadow-soft hover:shadow-energy transition-smooth">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{story.type}</Badge>
                  <CardTitle className="text-xl">{story.partner}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Achievement</h4>
                      <p className="text-sm text-muted-foreground">{story.achievement}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Impact</h4>
                      <p className="text-sm text-primary">{story.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Target Industries</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key industry sectors where partnerships can create significant value and impact
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="shadow-soft hover:shadow-energy transition-smooth">
                <CardHeader>
                  <CardTitle className="text-2xl">{industry.industry}</CardTitle>
                  <p className="text-muted-foreground">{industry.description}</p>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-3">Partnership Opportunities</h4>
                    <ul className="space-y-2">
                      {industry.opportunities.map((opportunity, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <Handshake className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to developing successful, long-term partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipProcess.map((step, index) => (
              <Card key={index} className="text-center shadow-soft hover:shadow-energy transition-smooth">
                <CardContent className="p-6">
                  <div className="gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-sky">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-card rounded-2xl p-8 md:p-12 shadow-energy">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the airborne wind energy revolution and create lasting value through 
              strategic partnership opportunities tailored to your organization's goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="energy" size="lg" asChild>
                <Link to="/development">Start Partnership Discussion</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/reports">Download Partnership Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PartnershipOpportunities;