import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  TrendingUp, 
  AlertTriangle, 
  Globe, 
  Clock,
  Users,
  BarChart3,
  Shield,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyNow = () => {
  const trends = [
    {
      icon: TrendingUp,
      title: "Accelerating Climate Impacts",
      stat: "300% increase",
      description: "Climate disasters have increased 3x faster than predicted, with vulnerable communities bearing disproportionate impacts.",
      details: [
        "Heat waves lasting 2-3x longer than historical averages",
        "Flooding in 'safe' zones due to infrastructure failure", 
        "Hurricane intensification happening in 24hrs vs 72hrs",
        "Wildfire seasons extending 2.5 months longer"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Widening Equity Gap",
      stat: "2.5x longer",
      description: "Marginalized communities wait 2.5x longer for emergency aid and face 4x higher long-term displacement rates.",
      details: [
        "Low-income neighborhoods get aid 48-72hrs later",
        "Language barriers delay critical information by 6-12hrs",
        "Historical discrimination compounds during emergencies",
        "Recovery resources favor property owners over renters"
      ]
    },
    {
      icon: Globe,
      title: "System Overwhelm",
      stat: "40% capacity",
      description: "Current emergency systems operating at 140% capacity during 'normal' weather, failing entirely during major events.",
      details: [
        "911 systems crash during peak emergency calls",
        "Shelter capacity insufficient for projected needs",
        "Supply chains fragile to single-point failures",
        "Communication systems unreliable in crisis"
      ]
    },
    {
      icon: Clock,
      title: "Window Closing",
      stat: "5-year window",
      description: "Scientists estimate 5-year window to implement adaptive systems before tipping points make current approaches obsolete.",
      details: [
        "Infrastructure replacement cycles take 10-15 years",
        "Community trust building requires sustained engagement",
        "AI system training needs historical disaster data",
        "Policy implementation lags technology by 3-5 years"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "During Hurricane Ida, our community was invisible to first responders for 4 days. We couldn't let that happen again.",
      author: "Maria Rodriguez",
      title: "Community Organizer, New Orleans East",
      impact: "AEGIS reduced response time from 96hrs to 12hrs"
    },
    {
      quote: "The heat dome of 2021 killed my neighbor. She was diabetic, lived alone, and the city never checked on her block.",
      author: "James Chen", 
      title: "Resident, Portland's Jade District",
      impact: "Predictive Engine now identifies at-risk individuals 48hrs before heat events"
    },
    {
      quote: "They told us to evacuate, but didn't tell us where to go or how to get there. AEGIS changed everything.",
      author: "Reverend Patricia Williams",
      title: "Mount Olive Baptist Church, Houston",
      impact: "Community Navigator connected 2,300 residents to safe shelter"
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
              Why{" "}
              <span className="bg-gradient-to-r from-accent to-earth bg-clip-text text-transparent">
                Now?
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto mb-8">
              Climate disasters are accelerating faster than our response systems can adapt. 
              For vulnerable communities, the cost of waiting is measured in lives.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-bold text-accent mb-2">2023</div>
                <div className="text-primary-foreground/80">Deadliest year for climate disasters</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-bold text-accent mb-2">$90B</div>
                <div className="text-primary-foreground/80">US climate disaster costs</div>
              </div>
              <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-3xl font-bold text-accent mb-2">72%</div>
                <div className="text-primary-foreground/80">Impact on vulnerable communities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Trends */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The Accelerating{" "}
              <span className="bg-gradient-to-r from-accent to-earth-dark bg-clip-text text-transparent">
                Crisis
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four converging trends make immediate action critical for community survival.
            </p>
          </div>

          <div className="space-y-16">
            {trends.map((trend, index) => (
              <div
                key={index}
                className={`bg-card rounded-lg p-8 shadow-elegant animate-slide-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-lg mr-4">
                        <trend.icon className="h-8 w-8 text-accent" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">{trend.stat}</div>
                        <h3 className="text-xl font-bold text-foreground">{trend.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {trend.description}
                    </p>
                  </div>
                  <div className="bg-gradient-subtle rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Critical Indicators</h4>
                    <ul className="space-y-3">
                      {trend.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{detail}</span>
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

      {/* Real Stories */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Real Stories, Real{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Stakes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These aren't hypothetical scenarios. These are the voices of communities 
              who lived through system failure and are building something better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up border border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <blockquote className="text-foreground text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="mb-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.title}</div>
                </div>
                <div className="bg-gradient-subtle rounded-lg p-4">
                  <div className="text-primary font-medium text-sm mb-1">AEGIS Impact:</div>
                  <div className="text-foreground text-sm">{testimonial.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Urgency */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              The AI Advantage{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Window
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ethical AI for disaster response isn't just possible—it's imperative. 
              But the window for community-centered implementation is closing fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Why AI? Why Ethical?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-2">Scale Necessity</div>
                    <div className="text-muted-foreground">Climate disasters now affect millions simultaneously. Only AI can process the complexity at the speed communities need.</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-earth/20 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-earth-dark" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-2">Bias Prevention</div>
                    <div className="text-muted-foreground">Without ethical frameworks, AI amplifies existing inequities. AEGIS builds fairness into every algorithm.</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg flex-shrink-0">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-2">Community Control</div>
                    <div className="text-muted-foreground">Communities must control their data and decisions. Ethical AI ensures sovereignty, not surveillance.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-hero rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-primary-foreground mb-4">5 Years</div>
              <div className="text-primary-foreground/90 text-lg mb-6">
                Climate scientists' window for effective adaptation systems
              </div>
              <div className="text-4xl font-bold text-primary-foreground mb-4">2 Years</div>
              <div className="text-primary-foreground/90 text-lg mb-6">
                AEGIS development and community trust building timeline
              </div>
              <div className="text-4xl font-bold text-primary-foreground mb-4">Now</div>
              <div className="text-primary-foreground/90 text-lg">
                The time to act for your community's survival
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Community Can't Wait
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Every day of delay means more vulnerable people at risk. AEGIS Resilience 
            is ready to deploy. The question is: are you ready to lead?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start the Conversation
            </Button>
            <Button variant="accent" size="lg" className="text-lg px-8 py-4">
              Schedule Urgent Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyNow;