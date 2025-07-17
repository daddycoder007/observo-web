import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Github, BookOpen, Download } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
        : "bg-transparent"
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/Observo.png"
              alt="Observo Logo"
              className="w-32 h-30"
            />
        </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#features" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 hover:scale-105"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 hover:scale-105"
            >
              How it Works
            </a>
            <a 
              href="#architecture" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 hover:scale-105"
            >
              Architecture
            </a>
            <a 
              href="/docs" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 hover:scale-105 flex items-center space-x-1"
            >
              <BookOpen className="w-4 h-4" />
              <span>Docs</span>
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="btn-ghost">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button className="btn-primary">
              <Download className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200 animate-fade-in-down">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </a>
              <a 
                href="#architecture" 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Architecture
              </a>
              <a 
                href="/docs" 
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                <span>Documentation</span>
              </a>
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full btn-ghost">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button className="w-full btn-primary">
                  <Download className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};