import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Home, User, FolderOpen, Wrench, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#projects', label: 'Projects', icon: FolderOpen },
    { href: '#skills', label: 'Skills', icon: Wrench },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-xl font-bold text-white" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Sridhar Maskeri</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
            <nav className="container mx-auto px-4 py-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center space-x-3 w-full py-3 text-slate-300 hover:text-green-400 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;