import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Hammer } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle sticky scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      {/* Top micro info bar */}
      <div className="bg-stone-950 text-stone-300 text-xs py-2 px-4 border-b border-stone-800/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-stone-300">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              Sarangpur, Chandigarh (Near Botanical Garden)
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-300">
              Workshop Hours: Mon–Sat 9:00 AM – 7:30 PM
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <a 
              href={`tel:${companyInfo.phoneRaw}`} 
              className="flex items-center text-amber-400 hover:text-amber-300 transition-colors font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 rounded px-1"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              {companyInfo.phone}
            </a>
            <span className="text-stone-600">|</span>
            <a 
              href={`mailto:${companyInfo.email}`} 
              className="flex items-center text-stone-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 rounded px-1"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-amber-500" />
              {companyInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-stone-900/95 backdrop-blur-md shadow-xl py-3 border-b border-stone-800' 
            : 'bg-stone-900 text-white py-4 border-b border-stone-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="group flex items-center space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
              aria-label="Dilip Wood Works - Home"
            >
              <div className="w-11 h-11 rounded-lg bg-stone-950 border border-amber-500/40 flex items-center justify-center p-1 shadow-md group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300">
                <img src="/favicon.png" alt="Dilip Wood Works Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block leading-tight group-hover:text-amber-400 transition-colors">
                  DILIP
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-500 font-semibold block">
                  WOOD WORKS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                      isActive
                        ? 'text-white bg-amber-600/30 text-amber-300 border border-amber-500/40'
                        : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* CTA & Phone Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href={`tel:${companyInfo.phoneRaw}`}
                className="flex items-center space-x-2 text-stone-300 hover:text-amber-400 text-sm font-medium py-2 px-3 rounded-lg hover:bg-stone-800/60 transition-colors"
                title="Call Master Craftsman"
              >
                <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 border border-amber-500/20">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{companyInfo.phone}</span>
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-semibold px-5 py-2.5 rounded-full text-sm shadow-md hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-stone-950" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="p-2 text-amber-400 hover:bg-stone-800 rounded-lg"
                aria-label="Call Dilip Wood Works"
              >
                <Phone className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-stone-300 hover:text-white hover:bg-stone-800 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-amber-400" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-stone-950/98 border-t border-stone-800 px-4 pt-3 pb-6 animate-fadeIn shadow-2xl">
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : 'text-stone-300 hover:bg-stone-900 hover:text-white'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-stone-500" />
                </NavLink>
              ))}

              <div className="pt-4 mt-2 border-t border-stone-800/80 space-y-3">
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-stone-900 text-stone-200 border border-stone-800 text-sm font-medium hover:bg-stone-800 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Call Us: {companyInfo.phone}</span>
                </a>

                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 text-sm font-semibold shadow-md active:scale-95 transition-all"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="text-center text-xs text-stone-400 pt-1">
                  Milk pind road, near Botanical garden, Sarangpur, Chandigarh
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
