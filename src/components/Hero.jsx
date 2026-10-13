import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Award, Ruler, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function Hero() {
  const highlights = [
    { icon: ShieldCheck, text: "100% Kiln-Dried Hardwood" },
    { icon: Award, text: "25+ Years Master Craftsmanship" },
    { icon: Ruler, text: "Bespoke Made-to-Measure" },
    { icon: Sparkles, text: "Direct Artisan Pricing" },
  ];

  // Real workshop showcases
  const heroSlides = [
    {
      id: "desk",
      image: "/workshop-study-desk.png",
      title: "Custom Executive Study Desk",
      subtitle: "Handcrafted in Sarangpur Workshop with Brass Ring Pulls",
      badge: "Real Workshop Build",
      link: "/products/workshop-custom-study-desk"
    },
    {
      id: "rack",
      image: "/workshop-shelving-rack.png",
      title: "Modular 25-Grid Display Rack",
      subtitle: "Heavy-Duty Pigeonhole Storage on Workshop Floor",
      badge: "Workshop Floor Photo",
      link: "/products/modular-pigeonhole-display-rack"
    },
    {
      id: "workshop",
      image: "/hero-workshop.jpg",
      title: "Master Studio & Joinery Mill",
      subtitle: "Milk Pind Road, Near Botanical Garden, Sarangpur",
      badge: "Chandigarh Workshop",
      link: "/products"
    },
    {
      id: "dining",
      image: "/dining-furniture.jpg",
      title: "Pierre Jeanneret Style Dining Suite",
      subtitle: "Solid Burma Teak with Fluted Wood Panelling",
      badge: "Signature Collection",
      link: "/products/imperial-teak-dining-table"
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto rotate slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const activeSlide = heroSlides[currentSlideIndex];

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
              At <strong className="text-white font-semibold">Dilip Wood Works</strong>, we shape raw, seasoned Burma Teak, Indian Sheesham, and White Oak into bespoke dining suites, luxury study desks, modular storage racks, and architectural statement doors. No flimsy flat-packs—only pure, heirloom-grade joinery.
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

          {/* Right Hero Image Card with Workshop Showcase Slider */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-amber-700/20 rounded-2xl blur-lg opacity-75" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700/80 bg-stone-950 group">
                <div className="relative h-[380px] sm:h-[430px] w-full overflow-hidden bg-stone-900 flex items-center justify-center">
                  <img
                    key={activeSlide.id}
                    src={activeSlide.image}
                    alt={activeSlide.title}
                    className="w-full h-full object-cover transition-all duration-700 animate-fadeIn"
                    loading="eager"
                  />

                  {/* Gradient vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center space-x-1.5 bg-stone-900/90 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>{activeSlide.badge}</span>
                    </span>
                  </div>

                  {/* Floating Workshop Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/95 backdrop-blur-md border border-stone-700/80 text-left shadow-lg">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h2 className="text-sm sm:text-base font-serif font-bold text-white truncate">
                          {activeSlide.title}
                        </h2>
                        <p className="text-xs text-stone-300 truncate mt-0.5">
                          {activeSlide.subtitle}
                        </p>
                      </div>
                      <Link
                        to={activeSlide.link}
                        className="shrink-0 bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1"
                      >
                        <span>View</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Interactive Slide Switcher Buttons */}
                <div className="bg-stone-950 p-3 border-t border-stone-800 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider pl-1">
                    Workshop Showcase:
                  </span>
                  <div className="flex items-center space-x-1.5">
                    {heroSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlideIndex(idx)}
                        aria-label={`Show ${slide.title}`}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all ${
                          currentSlideIndex === idx
                            ? 'bg-amber-500 text-stone-950 font-bold shadow'
                            : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
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
