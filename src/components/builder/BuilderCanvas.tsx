import { WebsiteSection } from "@/pages/WebsiteBuilder";
import EditableSection from "./EditableSection";

interface BuilderCanvasProps {
  sections: WebsiteSection[];
  websiteColors: { primary: string; secondary: string };
  onUpdateSection: (id: string, updates: Partial<WebsiteSection>) => void;
}

const BuilderCanvas = ({
  sections,
  websiteColors,
  onUpdateSection,
}: BuilderCanvasProps) => {
  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="bg-white rounded-lg shadow-elegant overflow-hidden">
        <style>
          {`
            .builder-preview {
              --color-primary: ${websiteColors.primary};
              --color-secondary: ${websiteColors.secondary};
            }
          `}
        </style>
        <div className="builder-preview">
          {sections
            .filter((section) => section.visible)
            .map((section) => (
              <EditableSection
                key={section.id}
                section={section}
                onUpdate={(updates) => onUpdateSection(section.id, updates)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BuilderCanvas;
