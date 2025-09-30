import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Eye, Palette, LayoutTemplate } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface BuilderToolbarProps {
  websiteTitle: string;
  onTitleChange: (title: string) => void;
  websiteColors: { primary: string; secondary: string };
  onColorsChange: (colors: { primary: string; secondary: string }) => void;
  onPublish: () => void;
  onChangeTemplate: () => void;
}

const BuilderToolbar = ({
  websiteTitle,
  onTitleChange,
  websiteColors,
  onColorsChange,
  onPublish,
  onChangeTemplate,
}: BuilderToolbarProps) => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left: Brand + Title */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl hidden sm:inline">EventSite</span>
          </div>
          
          <div className="h-8 w-px bg-border" />
          
          <Input
            value={websiteTitle}
            onChange={(e) => onTitleChange(e.target.value)}
            placeholder="Your Event Name"
            className="max-w-xs"
          />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onChangeTemplate}
          >
            <LayoutTemplate className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Change Template</span>
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm">
                <Palette className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Colors</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 bg-popover">
              <div className="space-y-4">
                <h3 className="font-semibold">Website Colors</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <label className="text-sm w-24">Primary</label>
                    <input
                      type="color"
                      value={websiteColors.primary}
                      onChange={(e) =>
                        onColorsChange({ ...websiteColors, primary: e.target.value })
                      }
                      className="w-12 h-12 rounded border cursor-pointer"
                    />
                    <Input
                      value={websiteColors.primary}
                      onChange={(e) =>
                        onColorsChange({ ...websiteColors, primary: e.target.value })
                      }
                      className="flex-1"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-sm w-24">Secondary</label>
                    <input
                      type="color"
                      value={websiteColors.secondary}
                      onChange={(e) =>
                        onColorsChange({ ...websiteColors, secondary: e.target.value })
                      }
                      className="w-12 h-12 rounded border cursor-pointer"
                    />
                    <Input
                      value={websiteColors.secondary}
                      onChange={(e) =>
                        onColorsChange({ ...websiteColors, secondary: e.target.value })
                      }
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Button variant="ghost" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            <span className="hidden sm:inline">Preview</span>
          </Button>

          <Button variant="hero" size="sm" onClick={onPublish}>
            Publish
          </Button>
        </div>
      </div>
    </header>
  );
};

export default BuilderToolbar;
