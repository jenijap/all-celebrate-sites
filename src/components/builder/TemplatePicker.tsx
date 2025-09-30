import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";

interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  sections: any[];
  title: string;
  colors: { primary: string; secondary: string };
}

interface TemplatePickerProps {
  eventType: string;
  onSelectTemplate: (template: Template) => void;
}

const getTemplatesByType = (eventType: string): Template[] => {
  const baseTemplates = {
    wedding: [
      {
        id: "elegant-wedding",
        name: "Elegant Romance",
        description: "Classic and sophisticated design for your special day",
        thumbnail: "gradient-primary",
        title: "Sarah & John's Wedding",
        colors: { primary: "#db2777", secondary: "#f472b6" },
        sections: [
          {
            id: "hero",
            type: "hero",
            title: "We're Getting Married!",
            content: "Join us as we celebrate our love\nSaturday, June 15th, 2024",
            visible: true,
          },
          {
            id: "details",
            type: "details",
            title: "Our Story",
            content: "We met in college and have been inseparable ever since. After 5 wonderful years together, we're excited to start this new chapter of our lives.",
            visible: true,
          },
          {
            id: "schedule",
            type: "schedule",
            title: "Schedule",
            content: "Ceremony: 4:00 PM\nCocktail Hour: 5:30 PM\nReception: 6:30 PM\nDancing: 8:00 PM",
            visible: true,
          },
          {
            id: "location",
            type: "location",
            title: "Venue",
            content: "The Grand Ballroom\n123 Celebration Ave\nNew York, NY 10001",
            visible: true,
          },
        ],
      },
      {
        id: "modern-wedding",
        name: "Modern Minimalist",
        description: "Clean and contemporary design with focus on content",
        thumbnail: "from-purple-500 to-indigo-500",
        title: "Emma & Michael",
        colors: { primary: "#8b5cf6", secondary: "#6366f1" },
        sections: [
          {
            id: "hero",
            type: "hero",
            title: "Emma & Michael",
            content: "Together with their families, invite you to celebrate their wedding",
            visible: true,
          },
          {
            id: "details",
            type: "details",
            title: "The Details",
            content: "Date: August 20, 2024\nTime: 5:00 PM\nDress Code: Cocktail Attire",
            visible: true,
          },
        ],
      },
    ],
    birthday: [
      {
        id: "fun-birthday",
        name: "Birthday Bash",
        description: "Colorful and festive design perfect for celebrations",
        thumbnail: "from-yellow-400 to-pink-500",
        title: "Alex's 30th Birthday",
        colors: { primary: "#f59e0b", secondary: "#ec4899" },
        sections: [
          {
            id: "hero",
            type: "hero",
            title: "Let's Celebrate!",
            content: "Join us for Alex's 30th Birthday Party\nSaturday, March 15th at 7 PM",
            visible: true,
          },
          {
            id: "details",
            type: "details",
            title: "Party Details",
            content: "Get ready for an unforgettable night of music, dancing, and celebration!",
            visible: true,
          },
        ],
      },
    ],
    corporate: [
      {
        id: "professional-corporate",
        name: "Professional Summit",
        description: "Clean and professional design for corporate events",
        thumbnail: "from-blue-600 to-indigo-600",
        title: "Annual Tech Summit 2024",
        colors: { primary: "#2563eb", secondary: "#4f46e5" },
        sections: [
          {
            id: "hero",
            type: "hero",
            title: "Annual Tech Summit 2024",
            content: "Join industry leaders for three days of innovation and networking",
            visible: true,
          },
          {
            id: "schedule",
            type: "schedule",
            title: "Event Schedule",
            content: "Day 1: Keynote Speakers\nDay 2: Workshops & Sessions\nDay 3: Networking Event",
            visible: true,
          },
        ],
      },
    ],
  };

  return baseTemplates[eventType as keyof typeof baseTemplates] || baseTemplates.wedding;
};

const TemplatePicker = ({ eventType, onSelectTemplate }: TemplatePickerProps) => {
  const navigate = useNavigate();
  const templates = getTemplatesByType(eventType);
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleSelect = () => {
    const template = templates.find((t) => t.id === selectedTemplate);
    if (template) {
      onSelectTemplate(template);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/create")}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </div>

          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold">
              Choose Your
              <span className="block mt-2 bg-gradient-primary bg-clip-text text-transparent">
                Template
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pick a starting point for your {eventType} website. You can customize everything later.
            </p>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <Card
                key={template.id}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 ${
                  selectedTemplate === template.id
                    ? "ring-2 ring-primary shadow-elegant"
                    : "border-border/50"
                } bg-gradient-card backdrop-blur-sm animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <CardContent className="p-0">
                  <div
                    className={`h-48 bg-gradient-to-br ${template.thumbnail} rounded-t-lg flex items-center justify-center text-white`}
                  >
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">{template.title}</h3>
                      <p className="text-white/80 text-sm mt-2">Preview</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold">{template.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {template.description}
                        </p>
                      </div>
                      {selectedTemplate === template.id && (
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-scale-in">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Continue Button */}
          {selectedTemplate && (
            <div className="flex justify-center animate-fade-in">
              <Button
                variant="hero"
                size="lg"
                onClick={handleSelect}
                className="group"
              >
                Start Building
                <Check className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TemplatePicker;
