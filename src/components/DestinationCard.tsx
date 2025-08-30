import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  duration: string;
  rating: number;
  passengers: number;
  category: "Earth" | "Mars" | "Moon" | "Space Station";
}

interface DestinationCardProps {
  destination: Destination;
  onBook: (id: string) => void;
}

const DestinationCard = ({ destination, onBook }: DestinationCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Earth": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Mars": return "bg-red-500/20 text-red-400 border-red-500/30";
      case "Moon": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Space Station": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <div className="card-holo rounded-xl overflow-hidden group">
      {/* Destination Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
        
        {/* Category Badge */}
        <Badge className={`absolute top-4 left-4 ${getCategoryColor(destination.category)}`}>
          {destination.category}
        </Badge>
        
        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-deep-space/70 backdrop-blur-sm rounded-full px-2 py-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{destination.rating}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">
          {destination.name}
        </h3>
        <p className="text-muted-foreground mb-4">
          {destination.location}
        </p>
        
        {/* Stats */}
        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{destination.passengers} max</span>
          </div>
        </div>
        
        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">
              {destination.price.toLocaleString()} ₡
            </span>
            <span className="text-sm text-muted-foreground ml-1">
              / person
            </span>
          </div>
          <Button 
            variant="neon" 
            size="sm"
            onClick={() => onBook(destination.id)}
            className="pulse-glow"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;