import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Users, 
  Building, 
  Heart, 
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const GetInvolved = () => {
  const engagementTypes = [
    {
      icon: Building,
      title: "Local Governments",
      description: "Municipal and county emergency management agencies ready to pilot community-centered disaster response.",
      benefits: [
        "Reduce emergency response times by 60%+",
        "Increase community trust and cooperation", 
        "Lower long-term disaster recovery costs",
        "Meet equity and inclusion mandates"
      ],
      action: "Schedule Pilot Discussion"
    },
    {
      icon: Heart,
      title: "Faith & Community Organizations",
      description: "Churches, community centers, and mutual aid networks serving vulnerable populations.",
      benefits: [
        "Better protect your congregants and members",
        "Coordinate with other community resources",
        "Access multilingual emergency materials",
        "Strengthen neighborhood resilience networks"
      ],
      action: "Join Community Network"
    },
    {
      icon: Users,
      title: "NGOs & Nonprofits",
      description: "Organizations focused on disaster relief, climate justice, and community development.",
      benefits: [
        "Amplify your disaster response impact",
        "Share resources across partner networks",
        "Access real-time community needs data",
        "Collaborate on equitable aid distribution"
      ],
      action: "Explore Partnership"
    }
  ];

  const fundingPartners = [
    {
      category: "Foundations",
      description: "Support community-driven climate resilience innovation",
      focus: ["Climate Justice", "Community Development", "Technology for Good", "Disaster Relief"]
    },
    {
      category: "Government Agencies", 
      description: "Scale evidence-based disaster preparedness solutions",
      focus: ["Emergency Management", "Public Health", "Housing & Urban Development", "Environmental Justice"]
    },
    {
      category: "Corporate Sponsors",
      description: "Align ESG goals with community impact",
      focus: ["Climate Adaptation", "Social Responsibility", "Community Investment", "Disaster Resilience"]
    }
  ];

  const waysToPeople = [
    {
      title: "Community Champion",
      commitment: "2-4 hours/month",
      description: "Help us connect with community members and gather feedback on platform features.",
      skills: "Community connections, cultural competency, lived experience"
    },
    {
      title: "Technical Volunteer",
      commitment: "4-8 hours/month", 
      description: "Contribute to open-source components, data analysis, or platform testing.",
      skills: "Programming, data science, UX/UI design, systems administration"
    },
    {
      title: "Policy Advocate",
      commitment: "2-6 hours/month",
      description: "Support policy initiatives that advance community-centered disaster response.",
      skills: "Policy analysis, advocacy experience, government relations"
    },
    {
      title: "Research Partner",
      commitment: "Varies",
      description: "Collaborate on academic research projects advancing climate justice and AI ethics.",
      skills: "Research methodology, academic writing, subject matter expertise"
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
              Get{" "}
              <span className="bg-gradient-to-r from-accent to-earth bg-clip-text text-transparent">
                Involved
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto mb-8">
              Climate disasters affect us all, but they don't affect us equally. 
              Join us in building the infrastructure for equitable disaster resilience.
            </p>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20 max-w-2xl mx-auto">
              <div className="text-primary-foreground/90">
                Whether you represent a community, organization, or just want to help—
                <strong> there's a place for you in this movement.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Partnerships */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partner{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Organizations
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with three types of organizations to create comprehensive 
              community protection networks.
            </p>
          </div>

          <div className="space-y-12">
            {engagementTypes.map((type, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 md:p-12 shadow-elegant animate-slide-up border border-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mr-4">
                        <type.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{type.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {type.description}
                    </p>
                    <Button variant="hero" size="lg">
                      {type.action}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  <div className="bg-gradient-subtle rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      {type.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
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

      {/* Contact Form */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Start the{" "}
              <span className="bg-gradient-to-r from-accent to-earth-dark bg-clip-text text-transparent">
                Conversation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Tell us about your community's needs and how we can work together 
              to build resilience.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-elegant">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your full name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="organization">Organization</Label>
                  <Input id="organization" placeholder="Organization name" className="mt-2" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-2" />
                </div>
              </div>

              <div>
                <Label htmlFor="role">Your Role</Label>
                <select id="role" className="w-full mt-2 px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select your role...</option>
                  <option value="government">Government Official</option>
                  <option value="nonprofit">Nonprofit Leader</option>
                  <option value="faith">Faith Community Leader</option>
                  <option value="community">Community Organizer</option>
                  <option value="emergency">Emergency Management</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="location">Community/Region Served</Label>
                <Input id="location" placeholder="City, State or Region" className="mt-2" />
              </div>

              <div>
                <Label htmlFor="interests">Areas of Interest</Label>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Pilot Program",
                    "Community Partnership", 
                    "Funding/Sponsorship",
                    "Technical Collaboration",
                    "Policy Advocacy",
                    "Research Partnership"
                  ].map((interest) => (
                    <label key={interest} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-input" />
                      <span className="text-sm text-foreground">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="message">Tell us about your community's needs</Label>
                <Textarea 
                  id="message" 
                  placeholder="What disaster challenges does your community face? How can AEGIS Resilience help?" 
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div className="text-center">
                <Button variant="hero" size="lg" type="submit" className="text-lg px-8 py-4">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Funding Partners */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Funding{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Partners
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Scale community-driven climate resilience with strategic investment 
              in ethical technology and community empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fundingPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-elegant text-center animate-slide-up border border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{partner.category}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{partner.description}</p>
                <div className="space-y-2">
                  {partner.focus.map((area, areaIndex) => (
                    <div key={areaIndex} className="text-sm text-primary bg-primary/10 rounded-full px-3 py-1 inline-block mr-2 mb-2">
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Involvement */}
      <section className="py-16 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Individual Volunteers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every skill has a place in building community resilience. 
              Find the role that matches your passion and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {waysToPeople.map((way, index) => (
              <div
                key={index}
                className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-elegant animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">{way.title}</h3>
                  <div className="text-sm text-primary bg-primary/10 rounded-full px-3 py-1">
                    {way.commitment}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{way.description}</p>
                <div className="text-sm text-foreground">
                  <strong>Skills:</strong> {way.skills}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 mr-4">
              Volunteer Application
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-background/20 backdrop-blur-sm border-foreground/30">
              Newsletter Sign-up
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-elegant">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:hello@aegisresilience.org" className="text-primary hover:underline">
                hello@aegisresilience.org
              </a>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-elegant">
              <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a href="tel:+1555AEGIS01" className="text-primary hover:underline">
                +1 (555) AEGIS-01
              </a>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-elegant">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Locations</h3>
              <div className="text-muted-foreground">Houston, TX<br />Oakland, CA</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;