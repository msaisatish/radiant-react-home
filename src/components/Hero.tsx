import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for the best user experience",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Built with security and reliability at its core",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solution",
      description: "Grows seamlessly with your business needs",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-slide-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Welcome to the Future</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Build Something
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Transform your ideas into reality with our cutting-edge platform. 
            Fast, secure, and built for scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="group shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-accent hover:text-accent-foreground transition-colors">
              Learn More
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-24 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Hero;
