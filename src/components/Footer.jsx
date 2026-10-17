import { Link } from 'react-router-dom';
import { Hammer, Phone, Mail, MapPin, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { products } from '../data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Top featured categories / products for quick footer discovery
  const productCategories = [
    { name: "Dining & Living Collections", path: "/products?category=Dining%20%26%20Living" },
    { name: "Bedrooms & Solid Wardrobes", path: "/products?category=Bedrooms%20%26%20Storage" },
    { name: "Architectural & Grand Doors", path: "/products?category=Doors%20%26%20Architectural" },
    { name: "Bespoke Modular Kitchens", path: "/products?category=Modular%20Kitchens" },
    { name: "Commercial & Executive Desks", path: "/products?category=Commercial%20%26%20Study" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "All Products & Works", path: "/products" },
    { name: "Woodcraft Guides & Blog", path: "/blog" },
    { name: "Contact & Workshop Visit", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Craftsmanship", path: "/terms" },
  ];

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800/80">
      {/* Upper footer CTA highlight bar */}
      <div className="border-b border-stone-800/80 py-8 px-4 sm:px-6 lg:px-8 bg-stone-900/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-white">Have a Custom Woodwork Design in Mind?</h2>
              <p className="text-sm text-stone-400">Share your blueprint, room sketches, or inspiration photos directly with our master artisan.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={companyInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-600 text-stone-950 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md"
            >
              <Phone className="w-4 h-4 text-stone-950" />
              <span>Call: {companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Craftsmanship */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-lg bg-stone-950 border border-amber-500/40 flex items-center justify-center p-1 shadow-md group-hover:scale-105 group-hover:border-amber-400 transition-all duration-300">
                <img src="/favicon.png" alt="Dilip Wood Works Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-tight text-white block leading-tight group-hover:text-amber-400 transition-colors">
                  DILIP
                </span>
                <span className="text-[10px] uppercase tracking-widest text-amber-500 font-semibold block">
                  WOOD WORKS
                </span>
              </div>
            </Link>
            <p className="text-sm text-stone-400 leading-relaxed">
              Serving Chandigarh, Mohali, Panchkula, and Punjab with bespoke solid hardwood furniture, architectural joinery, and artisanal cabinetry built to endure generations.
            </p>
            <div className="pt-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                Kiln-Dried Hardwoods Only
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-stone-400 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="text-amber-600/60 mr-1.5 group-hover:translate-x-1 transition-transform">›</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Custom Solutions */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Our Craft
            </h3>
            <ul className="space-y-2.5 text-sm">
              {productCategories.map((cat, idx) => (
                <li key={idx}>
                  <Link
                    to={cat.path}
                    className="text-stone-400 hover:text-amber-400 transition-colors flex items-center group"
                  >
                    <span className="text-amber-600/60 mr-1.5 group-hover:translate-x-1 transition-transform">›</span>
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact & Workshop */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Workshop & Studio
            </h3>
            
            <div className="flex items-start space-x-3 text-sm text-stone-300">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <address className="not-italic leading-relaxed text-stone-300 text-xs">
                {companyInfo.address.full}
              </address>
            </div>

            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="text-stone-300 hover:text-amber-400 transition-colors font-medium text-xs"
              >
                {companyInfo.phone}
              </a>
            </div>

            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-stone-300 hover:text-amber-400 transition-colors text-xs"
              >
                {companyInfo.email}
              </a>
            </div>

            <div className="flex items-start space-x-3 text-xs text-stone-400 pt-1">
              <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p>{companyInfo.hours.weekdays}</p>
                <p className="text-stone-500">{companyInfo.hours.sunday}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom copyright & compliance bar */}
      <div className="border-t border-stone-900 py-6 px-4 sm:px-6 lg:px-8 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {companyInfo.name}. All Rights Reserved. Handcrafted in Sarangpur, Chandigarh.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-stone-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-stone-400 transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-stone-400 transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
