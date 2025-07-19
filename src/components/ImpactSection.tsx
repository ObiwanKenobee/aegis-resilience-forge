import { MapPin, Users, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImpactSection = () => {
  const metrics = [
    {
      icon: Users,
      number: "10,000+",
      label: "Lives Protected",
      description: "Communities actively monitored and supported"
    },
    {
      icon: Clock,
      number: "48hrs",
      label: "Response Time",
      description: "Average reduction in emergency response"
    },
    {
      icon: MapPin,
      number: "15",
      label: "Pilot Cities",
      description: "Successful deployments across diverse regions"
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "Accuracy Rate",
      description: "Precision in vulnerability prediction"
    }
  ];

  return (
    <section className="py-24 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Proven{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from our pilot programs demonstrate the power of 
            ethical AI in disaster preparedness and response.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-background rounded-full mx-auto mb-4 shadow-elegant">
                <metric.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {metric.number}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {metric.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Highlight */}
        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 md:p-12 shadow-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Houston Pilot Program Success
              </h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                During Hurricane Preparedness Season 2024, AEGIS Resilience helped Houston's 
                Fifth Ward—a historically underserved community—reduce evacuation time by 60% 
                and ensure 95% of vulnerable residents received timely emergency resources.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Identified 2,300 high-risk households 48hrs before landfall</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Coordinated with 12 local churches and community centers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Zero misinformation incidents in targeted neighborhoods</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-hero rounded-lg p-8 text-center">
                <div className="text-4xl font-bold text-primary-foreground mb-2">60%</div>
                <div className="text-primary-foreground/90 mb-4">Faster Evacuation</div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">95%</div>
                <div className="text-primary-foreground/90 mb-4">Resource Coverage</div>
                <div className="text-4xl font-bold text-primary-foreground mb-2">100%</div>
                <div className="text-primary-foreground/90">Community Trust</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to transform your community's resilience?
          </h3>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            See Our Full Impact Report
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;