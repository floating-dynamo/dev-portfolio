import { Menu, X, Code, Home, User, FolderOpen, Wrench, Mail, Briefcase, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: Home, type: 'scroll' },
    { href: '#about', label: 'About', icon: User, type: 'scroll' },
    { href: '#experience', label: 'Experience', icon: Briefcase, type: 'scroll' },
    { href: '#projects', label: 'Projects', icon: FolderOpen, type: 'scroll' },
    { href: '#skills', label: 'Skills', icon: Wrench, type: 'scroll' },
    { href: '/resources', label: 'Resources', icon: BookOpen, type: 'route' },
    { href: '#contact', label: 'Contact', icon: Mail, type: 'scroll' },
  ];

  const handleNavigation = (link: typeof navLinks[0]) => {
    if (link.type === 'route') {
      navigate(link.href);
      setIsMenuOpen(false);
    } else {
      // If we're on resources page and clicking a scroll link, go to home first
      if (location.pathname === '/resources') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-2 cursor-pointer">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-xl font-bold text-white" style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}>Sridhar Maskeri</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.type === 'route') {
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link)}
                  className="text-slate-300 hover:text-green-400 transition-colors duration-200 font-medium"
                >
                  {link.label}
                </button>
              );
            })}
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
                    onClick={() => handleNavigation(link)}
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
