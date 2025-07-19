import { 
  Brain, 
  Users, 
  Building, 
  Shield, 
  Heart, 
  Activity,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Predictive Vulnerability Engine",
      description: "AI-powered analysis identifying at-risk communities before disasters strike, enabling proactive protection.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Community Resilience Navigator",
      description: "Connects communities with local resources, emergency plans, and mutual aid networks.",
      color: "text-earth-dark"
    },
    {
      icon: Building,
      title: "Critical Infrastructure Simulation",
      description: "Models infrastructure vulnerabilities and optimal resource allocation during emergencies.",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Misinformation Shield",
      description: "Real-time detection and counter-messaging of disaster-related misinformation in vulnerable communities.",
      color: "text-primary-glow"
    },
    {
      icon: Heart,
      title: "Ethical Aid Distribution Engine",
      description: "Ensures fair and equitable distribution of emergency resources based on actual need and vulnerability.",
      color: "text-earth"
    },
    {
      icon: Activity,
      title: "Post-Disaster Health Tracker",
      description: "Monitors community health indicators and mental wellness in disaster aftermath.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Six Modules for{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Complete Protection
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our integrated platform combines predictive analytics, community engagement, 
            and ethical AI to create comprehensive disaster resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg p-8 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 border border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-muted rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="bg-gradient-hero rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Seamlessly Integrated for Maximum Impact
          </h3>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            All six modules work together, sharing data and insights to create 
            a comprehensive shield of protection for vulnerable communities.
          </p>
          <Button variant="accent" size="lg" className="text-lg px-8 py-4">
            Explore the Solution
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;