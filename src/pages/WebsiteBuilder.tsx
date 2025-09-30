import { useState } from "react";
import { useParams } from "react-router-dom";
import BuilderToolbar from "@/components/builder/BuilderToolbar";
import BuilderCanvas from "@/components/builder/BuilderCanvas";
import TemplatePicker from "@/components/builder/TemplatePicker";
import { toast } from "sonner";

export interface WebsiteSection {
  id: string;
  type: "hero" | "details" | "schedule" | "rsvp" | "gallery" | "location";
  title: string;
  content: string;
  bgColor?: string;
  textColor?: string;
  visible: boolean;
}

const WebsiteBuilder = () => {
  const { eventType } = useParams<{ eventType: string }>();
  const [showTemplatePicker, setShowTemplatePicker] = useState(true);
  const [sections, setSections] = useState<WebsiteSection[]>([]);
  const [websiteTitle, setWebsiteTitle] = useState("");
  const [websiteColors, setWebsiteColors] = useState({
    primary: "#8b5cf6",
    secondary: "#ec4899",
  });

  const handleTemplateSelect = (template: any) => {
    setSections(template.sections);
    setWebsiteTitle(template.title);
    setWebsiteColors(template.colors);
    setShowTemplatePicker(false);
    toast.success("Template loaded! Start customizing your website.");
  };

  const updateSection = (id: string, updates: Partial<WebsiteSection>) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, ...updates } : section
      )
    );
  };

  const handlePublish = () => {
    toast.success("Website published successfully!");
    // Here you would typically save to database
    console.log("Publishing website:", { websiteTitle, sections, websiteColors });
  };

  if (showTemplatePicker) {
    return (
      <TemplatePicker
        eventType={eventType || "wedding"}
        onSelectTemplate={handleTemplateSelect}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <BuilderToolbar
        websiteTitle={websiteTitle}
        onTitleChange={setWebsiteTitle}
        websiteColors={websiteColors}
        onColorsChange={setWebsiteColors}
        onPublish={handlePublish}
        onChangeTemplate={() => setShowTemplatePicker(true)}
      />
      
      <div className="flex-1 overflow-auto">
        <BuilderCanvas
          sections={sections}
          websiteColors={websiteColors}
          onUpdateSection={updateSection}
        />
      </div>
    </div>
  );
};

export default WebsiteBuilder;
