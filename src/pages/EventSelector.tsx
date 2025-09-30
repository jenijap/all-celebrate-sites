import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Briefcase, Cake, Calendar, Gift, Users, ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const eventTypes = [
  {
    id: "wedding",
    icon: Heart,
    title: "Wedding",
    description: "Celebrate your special day with an elegant wedding website",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "corporate",
    icon: Briefcase,
    title: "Corporate Event",
    description: "Professional event pages for conferences and seminars",
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "birthday",
    icon: Cake,
    title: "Birthday Party",
    description: "Fun and colorful websites for birthday celebrations",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "anniversary",
    icon: Calendar,
    title: "Anniversary",
    description: "Celebrate years of love and togetherness",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "baby-shower",
    icon: Gift,
    title: "Baby Shower",
    description: "Sweet websites for welcoming new arrivals",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "social",
    icon: Users,
    title: "Social Gathering",
    description: "Perfect for reunions and group celebrations",
    color: "from-violet-500 to-purple-500",
  },
];

const EventSelector = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (selectedEvent) {
      navigate(`/builder/${selectedEvent}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              What are you
              <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
                celebrating?
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your event type to get started with a customized template
            </p>
          </div>

          {/* Event Type Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event, index) => (
              <Card
                key={event.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 ${
                  selectedEvent === event.id
                    ? "ring-2 ring-primary shadow-elegant"
                    : "border-border/50"
                } bg-gradient-card backdrop-blur-sm animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedEvent(event.id)}
              >
                <CardContent className="p-6 space-y-4">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300`}
                  >
                    <event.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  {selectedEvent === event.id && (
                    <div className="flex items-center gap-2 text-primary font-medium text-sm animate-fade-in">
                      <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
                      Selected
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Button */}
          {selectedEvent && (
            <div className="flex justify-center animate-fade-in">
              <Button
                variant="hero"
                size="lg"
                onClick={handleContinue}
                className="group"
              >
                Continue to Templates
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default EventSelector;
