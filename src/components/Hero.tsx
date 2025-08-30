import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-space-travel.jpg";
import { Rocket, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-deep-space/80 via-deep-space/60 to-deep-space/90" />
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-blue rounded-full pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="float">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent leading-tight">
            TeleportHub
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-4">
            Travel Beyond Earth • Mars • Moon • Space Stations
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            Book your next interplanetary journey with cutting-edge teleportation pods, 
            hyperloop networks, and luxury space shuttles. The future of travel is here.
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            <Rocket className="mr-2 h-5 w-5" />
            Book Your Journey
          </Button>
          <Button variant="ghost-neon" size="lg" className="text-lg px-8 py-4">
            <Globe className="mr-2 h-5 w-5" />
            Explore Destinations
          </Button>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="card-holo rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Teleportation</h3>
            <p className="text-muted-foreground">
              Travel across galaxies in seconds with our quantum teleportation technology
            </p>
          </div>
          
          <div className="card-holo rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Multi-Planet Network</h3>
            <p className="text-muted-foreground">
              Access to Earth cities, Mars colonies, Moon bases, and space stations
            </p>
          </div>
          
          <div className="card-holo rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Comfort</h3>
            <p className="text-muted-foreground">
              Luxury cabins with artificial gravity and panoramic space views
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;