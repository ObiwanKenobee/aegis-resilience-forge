import { Shield, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8" />
              <span className="text-2xl font-bold">AEGIS Resilience</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Weatherproofing Justice. Healing Beyond the Storm. 
              AI-powered platform ensuring equitable disaster preparedness for all communities.
            </p>
            <Button variant="accent" className="mb-6">
              Request Demo
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/solution" className="hover:text-primary-foreground transition-colors">Solution</a></li>
              <li><a href="/urgency" className="hover:text-primary-foreground transition-colors">Why Now</a></li>
              <li><a href="/impact" className="hover:text-primary-foreground transition-colors">Impact</a></li>
              <li><a href="/demo" className="hover:text-primary-foreground transition-colors">Demo</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@aegisresilience.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) AEGIS-01</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Houston, TX | Oakland, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 AEGIS Resilience. All rights reserved. Building justice into climate resilience.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;