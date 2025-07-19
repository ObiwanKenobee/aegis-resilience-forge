import { AlertTriangle, Users, MapPin, Clock } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Growing Climate Disasters",
      description: "Climate emergencies are increasing 5x faster than predicted, disproportionately affecting vulnerable communities.",
      stat: "300% increase"
    },
    {
      icon: Users,
      title: "Inequitable Response",
      description: "Current disaster systems leave marginalized communities waiting longer for aid and resources.",
      stat: "2-3x longer wait"
    },
    {
      icon: MapPin,
      title: "Poor Targeting",
      description: "Aid distribution lacks precision, missing the most vulnerable while duplicating efforts elsewhere.",
      stat: "40% misdirected"
    },
    {
      icon: Clock,
      title: "Reactive Systems",
      description: "Emergency response happens after damage is done, missing opportunities for prevention.",
      stat: "72hr delay average"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Crisis We're{" "}
            <span className="bg-gradient-to-r from-accent to-earth-dark bg-clip-text text-transparent">
              Solving
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Climate disasters are becoming more frequent and severe, but our response systems 
            aren't keeping pace—especially for the communities that need help most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up border border-border/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                <problem.icon className="h-6 w-6 text-accent" />
              </div>
              
              <div className="text-2xl font-bold text-accent mb-2">
                {problem.stat}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              We can't wait for the next disaster to act
            </h3>
            <p className="text-muted-foreground mb-6">
              Every minute of delay means more lives at risk. AEGIS Resilience transforms 
              how we prepare for, respond to, and recover from climate disasters.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;