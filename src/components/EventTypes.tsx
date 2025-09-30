import { Card, CardContent } from "@/components/ui/card";
import { Heart, Briefcase, Cake, Calendar, Gift, Users } from "lucide-react";

const eventTypes = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Create your dream wedding website with RSVP, photo galleries, and more",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional event pages for conferences, seminars, and company celebrations",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Fun and colorful websites for milestone birthdays and celebrations",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Anniversaries",
    description: "Elegant pages to celebrate years of love and togetherness",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Gift,
    title: "Baby Showers",
    description: "Sweet and adorable websites for welcoming new arrivals",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Users,
    title: "Social Gatherings",
    description: "Perfect for reunions, parties, and any group celebrations",
    gradient: "from-violet-500 to-purple-500",
  },
];

const EventTypes = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Every Occasion,
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              Beautifully Celebrated
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our collection of stunning templates designed for any event
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => (
            <Card 
              key={event.title}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer border-border/50 bg-gradient-card backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${event.gradient} flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300`}>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
