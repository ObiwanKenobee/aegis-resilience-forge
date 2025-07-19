import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  User, 
  Linkedin, 
  Mail, 
  Heart,
  Code,
  Shield,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  const coreTeam = [
    {
      name: "Dr. Amara Jackson",
      role: "Founder & CEO",
      bio: "Former FEMA regional director and climate justice advocate. 15 years leading emergency response in underserved communities.",
      expertise: "Emergency Management, Community Engagement",
      education: "PhD Public Policy, Harvard Kennedy School",
      location: "Houston, TX"
    },
    {
      name: "Marcus Chen",
      role: "CTO & Co-Founder", 
      bio: "Ex-Google AI researcher focused on ethical machine learning. Built predictive systems for humanitarian crisis response.",
      expertise: "Ethical AI, Predictive Analytics",
      education: "MS Computer Science, Stanford University",
      location: "Oakland, CA"
    },
    {
      name: "Dr. Sofia Rodriguez",
      role: "VP of Community Impact",
      bio: "Community organizer and public health researcher. Led COVID response in Latino communities across Texas.",
      expertise: "Community Health, Grassroots Organizing",
      education: "DrPH, University of California, Berkeley",
      location: "San Antonio, TX"
    },
    {
      name: "James Thompson",
      role: "Lead Engineer",
      bio: "Infrastructure systems architect with disaster recovery experience. Rebuilt New Orleans' emergency communications after Katrina.",
      expertise: "Systems Architecture, Crisis Communications",
      education: "BS Engineering, Tulane University",
      location: "New Orleans, LA"
    },
    {
      name: "Dr. Keisha Williams",
      role: "Director of Equity & Ethics",
      bio: "Algorithmic justice researcher and community advocate. Ensures AI systems serve communities, not surveil them.",
      expertise: "Algorithmic Fairness, Community Sovereignty",
      education: "PhD Social Work, Howard University",
      location: "Washington, DC"
    },
    {
      name: "David Kim",
      role: "Head of Partnerships",
      bio: "Former Red Cross program director. Built disaster response networks across faith-based and community organizations.",
      expertise: "Coalition Building, Emergency Logistics",
      education: "MBA, Wharton School",
      location: "Chicago, IL"
    },
    {
      name: "Dr. Maria Gonzalez",
      role: "Senior Data Scientist",
      bio: "Climate modeling expert focused on vulnerability assessment. Developed early warning systems for agricultural communities.",
      expertise: "Climate Science, Vulnerability Modeling",
      education: "PhD Atmospheric Science, NOAA",
      location: "Miami, FL"
    }
  ];

  const advisors = [
    {
      name: "Dr. Robert Bullard",
      title: "Father of Environmental Justice",
      affiliation: "Texas Southern University",
      contribution: "Strategic guidance on environmental justice integration"
    },
    {
      name: "Adrienne Maree Brown",
      title: "Author, Emergent Strategy",
      affiliation: "Resilience Strategist",
      contribution: "Community-centered design methodology"
    },
    {
      name: "Dr. Jesse Keenan",
      title: "Climate Adaptation Expert", 
      affiliation: "Tulane University",
      contribution: "Climate science and adaptation strategy"
    },
    {
      name: "Van Jones",
      title: "Social Justice Advocate",
      affiliation: "Reform Alliance",
      contribution: "Policy strategy and coalition building"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "Every decision is made with community needs and sovereignty at the center."
    },
    {
      icon: Shield,
      title: "Ethical by Design",
      description: "We build justice into our algorithms, not as an afterthought but as a foundation."
    },
    {
      icon: Users,
      title: "Inclusive Excellence",
      description: "Our strength comes from diverse perspectives, lived experiences, and collaborative leadership."
    },
    {
      icon: Code,
      title: "Radical Transparency",
      description: "Open about our methods, honest about our limitations, accountable to our communities."
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
              Meet the{" "}
              <span className="bg-gradient-to-r from-accent to-earth bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-4xl mx-auto mb-8">
              Combining deep community roots with cutting-edge technology expertise. 
              We're researchers, organizers, engineers, and advocates united by a shared mission.
            </p>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20 max-w-2xl mx-auto">
              <div className="text-primary-foreground/90">
                <strong>75% of our team</strong> comes from communities most affected by climate disasters. 
                We build solutions because we live the problems.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These aren't just words on a wall. They guide every algorithm we write, 
              every partnership we build, and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-elegant text-center hover:shadow-glow transition-all duration-300 animate-slide-up border border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Core{" "}
              <span className="bg-gradient-to-r from-accent to-earth-dark bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seven people who've dedicated their careers to the intersection of technology, 
              justice, and community resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up border border-border/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="h-12 w-12 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <div className="text-primary font-medium">{member.role}</div>
                  <div className="text-muted-foreground text-sm">{member.location}</div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-foreground text-sm">Expertise: </span>
                      <span className="text-muted-foreground text-sm">{member.expertise}</span>
                    </div>
                    <div>
                      <span className="font-medium text-foreground text-sm">Education: </span>
                      <span className="text-muted-foreground text-sm">{member.education}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Advisory{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Council
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Movement leaders and subject matter experts who guide our strategic direction 
              and ensure we stay accountable to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-elegant hover:shadow-glow transition-all duration-300 animate-slide-up border border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{advisor.name}</h3>
                    <div className="text-primary font-medium mb-1">{advisor.title}</div>
                    <div className="text-muted-foreground text-sm mb-3">{advisor.affiliation}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {advisor.contribution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-gradient-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're always looking for passionate people who share our commitment to community-centered 
            climate resilience. Whether you're a technologist, organizer, researcher, or community leader—
            there's a place for you in this movement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Technologists</h3>
              <p className="text-muted-foreground text-sm">Build ethical AI systems that serve communities</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6">
              <Users className="h-12 w-12 text-earth-dark mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Leaders</h3>
              <p className="text-muted-foreground text-sm">Guide platform development with lived experience</p>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Researchers</h3>
              <p className="text-muted-foreground text-sm">Advance the science of community resilience</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              View Open Positions
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-background/20 backdrop-blur-sm border-foreground/30">
              Partner with Us
            </Button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Questions about joining our team?{" "}
              <a href="mailto:careers@aegisresilience.org" className="text-primary hover:underline">
                careers@aegisresilience.org
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;