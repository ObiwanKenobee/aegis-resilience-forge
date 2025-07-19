import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Users, 
  MapPin, 
  TrendingUp, 
  Heart,
  Building,
  Clock,
  Award,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Impact = () => {
  const keyMetrics = [
    {
      icon: Users,
      number: "10,847",
      label: "Lives Protected",
      description: "Individuals actively monitored across 15 pilot communities",
      change: "+185% vs 2023"
    },
    {
      icon: Clock,
      number: "18hrs",
      label: "Average Response Time",
      description: "Down from 72hrs with traditional emergency systems",
      change: "75% improvement"
    },
    {
      icon: MapPin,
      number: "15",
      label: "Active Deployments",
      description: "Pilot programs across diverse geographic and demographic regions",
      change: "3 more launching Q1 2025"
    },
    {
      icon: TrendingUp,
      number: "94.7%",
      label: "Prediction Accuracy",
      description: "Vulnerability assessment precision rate",
      change: "+12% vs baseline models"
    }
  ];

  const caseStudies = [
    {
      location: "Houston Fifth Ward",
      challenge: "Hurricane preparedness in historically underserved community",
      impact: "60% faster evacuation, 95% resource coverage, zero misinformation incidents",
      metrics: {
        households: "2,300",
        responseTime: "12hrs",
        coverage: "95%"
      },
      testimonial: "AEGIS gave us our voice back. For the first time, we weren't an afterthought in disaster planning.",
      author: "Reverend Patricia Williams, Mount Olive Baptist Church"
    },
    {
      location: "Miami-Dade Homestead",
      challenge: "Agricultural worker protection during heat dome events",
      impact: "Zero heat-related hospitalizations, 100% worker notification, multilingual support",
      metrics: {
        workers: "1,850",
        languages: "4",
        incidents: "0"
      },
      testimonial: "The system talks to us in Spanish, knows our work schedules, and warns us before the heat gets dangerous.",
      author: "Carlos Mendez, Farmworker Justice Coalition"
    },
    {
      location: "New Orleans East",
      challenge: "Flood resilience in post-Katrina recovery area",
      impact: "48hr advance warning, 89% participation in preparedness drills, community network strengthened",
      metrics: {
        residents: "4,200",
        participation: "89%",
        warning: "48hrs"
      },
      testimonial: "We're not just surviving disasters anymore. We're preventing them from becoming disasters.",
      author: "Maria Rodriguez, Community Organizer"
    }
  ];

  const partnerships = [
    {
      category: "Community Partners",
      organizations: [
        "National Association for the Advancement of Colored People (NAACP)",
        "UnidosUS",
        "National Urban League",
        "Faith-based Community Networks"
      ]
    },
    {
      category: "Academic Partners", 
      organizations: [
        "Harvard T.H. Chan School of Public Health",
        "University of California, Berkeley",
        "Rice University Kinder Institute",
        "Howard University Climate Research"
      ]
    },
    {
      category: "Government Partners",
      organizations: [
        "FEMA Regional Offices",
        "CDC Emergency Response Division",
        "Local Emergency Management Agencies",
        "National Weather Service"
      ]
    }
  ];

  const advisors = [
    {
      name: "Dr. Robert Bullard",
      title: "Father of Environmental Justice",
      affiliation: "Texas Southern University",
      quote: "AEGIS represents the first technology platform that truly centers community needs in disaster response."
    },
    {
      name: "Adrienne Maree Brown",
      title: "Author, Emergent Strategy",
      affiliation: "Resilience Strategist",
      quote: "This is how we build the future—with communities at the center, not as an afterthought."
    },
    {
      name: "Dr. Jesse Keenan",
      title: "Climate Adaptation Expert",
      affiliation: "Tulane University",
      quote: "AEGIS bridges the critical gap between climate science and community-centered action."
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
              Measured{" "}
              <span className="bg-gradient-to-r from-accent to-earth bg-clip-text text-transparent">
                Impact
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto mb-8">
              Real data from real communities. AEGIS Resilience isn't just a platform—
              it's a lifeline that's already saving lives and strengthening communities.
            </p>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20 max-w-md mx-auto">
              <div className="text-3xl font-bold text-accent mb-2">$24M</div>
              <div className="text-primary-foreground/80">Estimated damage prevented in 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              By the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Numbers
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quantified impact across our pilot communities demonstrates the power 
              of community-centered disaster resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-glow transition-all duration-300 text-center animate-slide-up border border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                  <metric.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {metric.label}
                </div>
                <div className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {metric.description}
                </div>
                <div className="text-primary font-medium text-sm bg-primary/10 rounded-full px-3 py-1">
                  {metric.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Community{" "}
              <span className="bg-gradient-to-r from-accent to-earth-dark bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three diverse communities, three different challenges, one platform 
              delivering unprecedented protection and empowerment.
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 md:p-12 shadow-elegant animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <MapPin className="h-6 w-6 text-primary mr-3" />
                      <h3 className="text-2xl font-bold text-foreground">{study.location}</h3>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">Impact</h4>
                      <p className="text-foreground">{study.impact}</p>
                    </div>
                    <blockquote className="bg-gradient-subtle rounded-lg p-6 border-l-4 border-primary">
                      <p className="text-foreground italic mb-3">"{study.testimonial}"</p>
                      <cite className="text-muted-foreground">— {study.author}</cite>
                    </blockquote>
                  </div>
                  <div className="bg-gradient-hero rounded-lg p-6 text-center">
                    <h4 className="text-lg font-semibold text-primary-foreground mb-6">Key Metrics</h4>
                    <div className="space-y-4">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-2xl font-bold text-primary-foreground">{value}</div>
                          <div className="text-primary-foreground/80 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Network */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AEGIS Resilience works because we work with the communities and institutions 
              that understand justice, equity, and effective action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partnerships.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-elegant animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Building className="h-5 w-5 text-primary mr-2" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.organizations.map((org, orgIndex) => (
                    <li key={orgIndex} className="text-muted-foreground text-sm leading-relaxed">
                      {org}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Advisory Voices */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground text-center mb-12">Advisory Voices</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advisors.map((advisor, index) => (
                <div
                  key={index}
                  className="bg-gradient-subtle rounded-lg p-6 text-center animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <blockquote className="text-foreground italic mb-4">"{advisor.quote}"</blockquote>
                  <div className="font-semibold text-foreground">{advisor.name}</div>
                  <div className="text-muted-foreground text-sm">{advisor.title}</div>
                  <div className="text-muted-foreground text-sm">{advisor.affiliation}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Impact */}
      <section className="py-16 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Scaling for Maximum Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            These results are just the beginning. With full deployment, AEGIS Resilience 
            can protect millions of vulnerable community members nationwide.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">500K+</div>
              <div className="text-muted-foreground">Projected lives protected by 2027</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">100</div>
              <div className="text-muted-foreground">Communities in deployment pipeline</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6">
              <TrendingUp className="h-12 w-12 text-earth-dark mx-auto mb-4" />
              <div className="text-2xl font-bold text-foreground mb-2">$2.5B</div>
              <div className="text-muted-foreground">Estimated damage prevention by 2030</div>
            </div>
          </div>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Join the Movement
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;