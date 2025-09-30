import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl">EventSite</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Templates
          </a>
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#examples" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Examples
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            Sign In
          </Button>
          <Button 
            variant="default" 
            size="sm"
            onClick={() => navigate("/create")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
