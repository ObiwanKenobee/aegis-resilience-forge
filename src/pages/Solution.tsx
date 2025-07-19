import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Brain, 
  Users, 
  Building, 
  Shield, 
  Heart, 
  Activity,
  ArrowRight,
  CheckCircle,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Solution = () => {
  const modules = [
    {
      icon: Brain,
      title: "Predictive Vulnerability Engine",
      description: "Advanced AI algorithms analyze climate data, demographic information, and infrastructure vulnerabilities to identify at-risk communities 48-72 hours before disaster strikes.",
      features: [
        "Machine learning climate prediction models",
        "Social vulnerability indexing",
        "Real-time data integration from 50+ sources",
        "Community-specific risk scoring"
      ],
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Community Resilience Navigator",
      description: "Connects communities with hyperlocal resources, emergency contacts, and mutual aid networks through culturally competent, multilingual interfaces.",
      features: [
        "Neighborhood resource mapping",
        "Peer-to-peer communication networks",
        "Cultural liaison integration",
        "Multi-language emergency guides"
      ],
      color: "text-earth-dark"
    },
    {
      icon: Building,
      title: "Critical Infrastructure Simulation",
      description: "Models infrastructure vulnerabilities and optimizes resource allocation using digital twin technology and predictive analytics.",
      features: [
        "Power grid vulnerability modeling",
        "Transportation route optimization", 
        "Hospital capacity forecasting",
        "Supply chain disruption prediction"
      ],
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Misinformation Shield",
      description: "Real-time detection and counter-messaging of disaster-related misinformation using natural language processing and community verification.",
      features: [
        "Social media misinformation detection",
        "Trusted messenger amplification",
        "Fact-checking automation",
        "Community verification networks"
      ],
      color: "text-primary-glow"
    },
    {
      icon: Heart,
      title: "Ethical Aid Distribution Engine",
      description: "Ensures fair and equitable distribution of emergency resources using algorithmic fairness principles and community input.",
      features: [
        "Bias-free allocation algorithms",
        "Community equity scoring",
        "Transparent decision logging",
        "Real-time distribution tracking"
      ],
      color: "text-earth"
    },
    {
      icon: Activity,
      title: "Post-Disaster Health Tracker",
      description: "Monitors community health indicators and mental wellness in disaster aftermath through privacy-preserving health surveillance.",
      features: [
        "Mental health screening tools",
        "Community health dashboards",
        "Healthcare resource coordination", 
        "Long-term recovery tracking"
      ],
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              The Complete AEGIS{" "}
              <span className="bg-gradient-to-r from-accent to-earth bg-clip-text text-transparent">
                Solution
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              From AEGIS Core to AEGIS Resilience: Six integrated modules working together 
              to create comprehensive protection for vulnerable communities.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="accent" size="lg">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                Download Overview
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Evolution */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Evolution: From Core to Resilience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AEGIS Resilience represents our commitment to comprehensive community protection, 
              expanding beyond initial emergency response to full lifecycle disaster management.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-elegant mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">The AEGIS Journey</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">AEGIS Core (2023)</div>
                      <div className="text-muted-foreground">Initial emergency response platform</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <div className="font-semibold text-foreground">AEGIS Resilience (2024)</div>
                      <div className="text-muted-foreground">Comprehensive disaster lifecycle management</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-subtle rounded-lg p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Enhancements</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Predictive analytics for prevention</li>
                  <li>• Community-centered design</li>
                  <li>• Ethical AI implementation</li>
                  <li>• Multi-language accessibility</li>
                  <li>• Long-term recovery tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Modules */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Six Modules, One Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Each module is designed with community input and ethical AI principles, 
              working together to create unprecedented disaster resilience.
            </p>
          </div>

          <div className="space-y-16">
            {modules.map((module, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg p-8 shadow-elegant animate-slide-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-lg mr-4">
                        <module.icon className={`h-8 w-8 ${module.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{module.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    <Button variant="outline" className="hover:bg-muted">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-gradient-subtle rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {module.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Platform Architecture
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on secure, scalable infrastructure with privacy-first design and 
              community sovereignty at its core.
            </p>
          </div>

          <div className="bg-gradient-hero rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Community?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a demonstration to see how AEGIS Resilience can strengthen 
              your community's disaster preparedness and response capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-lg px-8 py-4">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solution;