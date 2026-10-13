import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function CTASection({
  title = "Ready to Commission Your Bespoke Woodwork?",
  subtitle = "Whether you need a custom dining table for your new villa, handcrafted doors, or a complete modular teak kitchen in Chandigarh, our master artisans are ready to bring your vision to life.",
  primaryText = "Contact Our Workshop",
  secondaryText = "Explore Our Products"
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white py-16 lg:py-20 border-t border-b border-stone-800">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full mb-4">
          Chandigarh Tricity & Punjab
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-5">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed mb-8">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-8 py-3.5 rounded-full text-base shadow-xl hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>{primaryText}</span>
            <ArrowRight className="w-5 h-5 text-stone-950" />
          </Link>

          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-stone-800/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200"
          >
            <span>{secondaryText}</span>
          </Link>
        </div>

        {/* Quick direct phone badge */}
        <div className="mt-8 pt-8 border-t border-stone-800/80 flex flex-wrap items-center justify-center gap-6 text-sm text-stone-400">
          <span className="flex items-center">
            <Phone className="w-4 h-4 text-amber-500 mr-2" />
            Direct Call: <a href={`tel:${companyInfo.phoneRaw}`} className="text-amber-400 font-medium ml-1.5 hover:underline">{companyInfo.phone}</a>
          </span>
          <span className="hidden sm:inline text-stone-600">•</span>
          <span className="flex items-center">
            <MessageSquare className="w-4 h-4 text-emerald-500 mr-2" />
            <a href={companyInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-white transition-colors">
              Fast WhatsApp Inquiries
            </a>
          </span>
        </div>

      </div>
    </section>
  );
}
