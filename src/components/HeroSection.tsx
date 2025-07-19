import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-climate-justice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Communities working together for climate resilience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-primary-foreground mb-2" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Weatherproofing{" "}
            <span className="bg-gradient-to-r from-accent to-earth bg-clip-text text-transparent">
              Justice
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
            Healing Beyond the Storm
          </p>
          
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            AI-powered platform ensuring equitable disaster preparedness and response for vulnerable communities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20">
              Partner with Us
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Users className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-foreground">10K+</div>
              <div className="text-primary-foreground/80">Communities Served</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Zap className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-foreground">95%</div>
              <div className="text-primary-foreground/80">Accuracy Rate</div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary-foreground">24/7</div>
              <div className="text-primary-foreground/80">Protection</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;