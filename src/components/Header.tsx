import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <Scale className="h-6 w-6" />
          <span>LegalLeap</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
          <Link to="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Services
          </Link>
          <Link to="/faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <Button asChild variant="default" className="hidden md:flex">
          <Link to="/contact">Book Consultation</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;