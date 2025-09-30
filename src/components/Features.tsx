import { Card, CardContent } from "@/components/ui/card";
import { Mail, Image, CalendarCheck, Palette, Lock, Smartphone } from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Smart RSVP System",
    description: "Track guests, meal preferences, and attendance with our intuitive RSVP management",
  },
  {
    icon: Image,
    title: "Photo Galleries",
    description: "Share memories with beautiful, responsive photo galleries that look stunning on any device",
  },
  {
    icon: Palette,
    title: "Custom Themes",
    description: "Personalize every detail with our powerful theme customization tools and templates",
  },
  {
    icon: Mail,
    title: "Email Invitations",
    description: "Send beautiful digital invitations and manage guest communications effortlessly",
  },
  {
    icon: Lock,
    title: "Privacy Controls",
    description: "Keep your event private with password protection and guest list management",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Your event website looks perfect on every device, from desktop to mobile",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Everything You Need,
            <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
              Nothing You Don't
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to make your event planning seamless and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="space-y-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
