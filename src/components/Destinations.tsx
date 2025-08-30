import { useState } from "react";
import DestinationCard from "./DestinationCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import marsImage from "@/assets/mars-destination.jpg";
import moonImage from "@/assets/moon-destination.jpg";
import earthImage from "@/assets/earth-future-city.jpg";

// Mock destinations data
const destinations = [
  {
    id: "1",
    name: "New Tokyo Spire",
    location: "Earth • Japan",
    image: earthImage,
    price: 2500,
    duration: "15 min",
    rating: 4.9,
    passengers: 8,
    category: "Earth" as const,
  },
  {
    id: "2", 
    name: "Olympus City",
    location: "Mars • Olympus Mons",
    image: marsImage,
    price: 125000,
    duration: "6 hours",
    rating: 4.8,
    passengers: 12,
    category: "Mars" as const,
  },
  {
    id: "3",
    name: "Luna Vista Base",
    location: "Moon • Mare Tranquillitatis",
    image: moonImage,
    price: 75000,
    duration: "3 hours", 
    rating: 4.7,
    passengers: 6,
    category: "Moon" as const,
  },
  {
    id: "4",
    name: "Europa Station Alpha",
    location: "Europa • Jupiter System",
    image: moonImage,
    price: 350000,
    duration: "2 days",
    rating: 4.9,
    passengers: 4,
    category: "Space Station" as const,
  },
  {
    id: "5",
    name: "Neo Singapore",
    location: "Earth • Southeast Asia",
    image: earthImage,
    price: 1800,
    duration: "12 min",
    rating: 4.8,
    passengers: 10,
    category: "Earth" as const,
  },
  {
    id: "6",
    name: "Red Canyon Resort",
    location: "Mars • Valles Marineris",
    image: marsImage,
    price: 98000,
    duration: "5.5 hours",
    rating: 4.6,
    passengers: 8,
    category: "Mars" as const,
  },
];

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", "Earth", "Mars", "Moon", "Space Station"];
  
  const filteredDestinations = selectedCategory === "All" 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  const handleBooking = (destinationId: string) => {
    // This will be connected to Supabase later
    console.log("Booking destination:", destinationId);
    // For now, just show an alert
    alert("Connect to Supabase to enable booking functionality!");
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Popular Destinations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the most sought-after locations across the solar system. 
            From Earth's megacities to Mars colonies and beyond.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "neon" : "ghost-neon"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onBook={handleBooking}
            />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="ghost-neon" size="lg">
            Load More Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;