import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Play, Download, FileText, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Demo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            See AEGIS{" "}
            <span className="bg-gradient-to-r from-accent to-earth bg-clip-text text-transparent">
              in Action
            </span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Experience how AEGIS Resilience transforms disaster preparedness through 
            our interactive demo and comprehensive resources.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Platform Overview</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Watch our 3-minute overview to see how AEGIS Resilience protects vulnerable 
                communities through predictive analytics and community-centered design.
              </p>
              <Button variant="hero" size="lg" className="mr-4">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Live Demo
              </Button>
            </div>
            <div className="bg-gradient-subtle rounded-lg p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                <div className="text-foreground font-semibold">3-Minute Platform Demo</div>
                <div className="text-muted-foreground">Click to play video</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-elegant text-center">
              <Download className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">One-Page Overview</h3>
              <p className="text-muted-foreground mb-6">Complete platform summary for stakeholders</p>
              <Button variant="outline" className="w-full">
                Download PDF
              </Button>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-elegant text-center">
              <FileText className="h-12 w-12 text-earth-dark mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Case Study Report</h3>
              <p className="text-muted-foreground mb-6">Detailed Houston pilot program results</p>
              <Button variant="outline" className="w-full">
                Download Report
              </Button>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-elegant text-center">
              <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-4">Live Demonstration</h3>
              <p className="text-muted-foreground mb-6">Personalized demo for your community</p>
              <Button variant="hero" className="w-full">
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;