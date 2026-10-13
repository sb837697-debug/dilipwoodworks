import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Award, Ruler } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Hero() {
  const highlights = [
    { icon: ShieldCheck, text: "100% Kiln-Dried Hardwood" },
    { icon: Award, text: "25+ Years Master Craftsmanship" },
    { icon: Ruler, text: "Bespoke Made-to-Measure" },
    { icon: Sparkles, text: "Direct Artisan Pricing" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white py-16 lg:py-24 border-b border-stone-800">
      {/* Background ambient lighting pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Sarangpur, Chandigarh Artisan Workshop</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Handcrafted Woodwork, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Built to Last Generations.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              At <strong className="text-white font-semibold">Dilip Wood Works</strong>, we shape raw, seasoned Burma Teak, Indian Sheesham, and White Oak into bespoke dining suites, luxury modular kitchens, and architectural statement doors. No flimsy flat-packs—only pure, heirloom-grade joinery.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-7 py-3.5 rounded-full text-base shadow-xl hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 text-stone-950" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-stone-800/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>

            {/* Value proposition badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left border-t border-stone-800/80">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center space-x-2 text-stone-300">
                    <Icon className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-xs font-medium">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-amber-700/20 rounded-2xl blur-lg opacity-75" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700/80 bg-stone-900 group">
                <img
                  src="/hero-workshop.jpg"
                  alt="Dilip Wood Works Master Artisan Workshop in Chandigarh"
                  className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  width="800"
                  height="600"
                />

                {/* Subtle gradient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />

                {/* Floating Workshop Badge on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-stone-900/90 backdrop-blur-md border border-stone-700/70 text-left shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                        Master Studio & Mill
                      </p>
                      <h2 className="text-sm sm:text-base font-serif font-bold text-white mt-0.5">
                        Botanical Garden Road, Sarangpur
                      </h2>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                      Est. 1999
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
