import { useState } from "react";
import { WebsiteSection } from "@/pages/WebsiteBuilder";
import { Pencil, GripVertical, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface EditableSectionProps {
  section: WebsiteSection;
  onUpdate: (updates: Partial<WebsiteSection>) => void;
}

const EditableSection = ({ section, onUpdate }: EditableSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(section.title);
  const [editContent, setEditContent] = useState(section.content);

  const handleSave = () => {
    onUpdate({ title: editTitle, content: editContent });
    setIsEditing(false);
  };

  const getSectionStyles = () => {
    const baseStyles = "relative p-12 transition-all duration-300";
    
    switch (section.type) {
      case "hero":
        return `${baseStyles} min-h-[400px] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white flex items-center justify-center text-center`;
      case "details":
        return `${baseStyles} bg-gray-50`;
      case "schedule":
        return `${baseStyles} bg-white`;
      case "rsvp":
        return `${baseStyles} bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10`;
      case "gallery":
        return `${baseStyles} bg-white`;
      case "location":
        return `${baseStyles} bg-gray-50`;
      default:
        return `${baseStyles} bg-white`;
    }
  };

  return (
    <div
      className={`group ${getSectionStyles()}`}
      style={{
        backgroundColor: section.bgColor,
        color: section.textColor,
      }}
    >
      {/* Edit Controls */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
        <Button
          variant="premium"
          size="sm"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Pencil className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="bg-white/90 hover:bg-white"
        >
          <GripVertical className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="bg-white/90 hover:bg-white text-destructive"
          onClick={() => onUpdate({ visible: false })}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      {isEditing ? (
        <div className="max-w-3xl mx-auto space-y-4 bg-white p-6 rounded-lg">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Section Title
            </label>
            <Input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              placeholder="Section title"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Section Content
            </label>
            <Textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              placeholder="Section content"
              rows={6}
            />
          </div>
          <div className="flex gap-2">
            <Button onClick={handleSave} variant="default">
              Save Changes
            </Button>
            <Button
              onClick={() => {
                setEditTitle(section.title);
                setEditContent(section.content);
                setIsEditing(false);
              }}
              variant="ghost"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{section.title}</h2>
          <div className="text-lg whitespace-pre-wrap">{section.content}</div>
        </div>
      )}
    </div>
  );
};

export default EditableSection;
