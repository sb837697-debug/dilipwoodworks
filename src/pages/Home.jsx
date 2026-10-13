import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import BenefitCard from '../components/BenefitCard';
import HowItWorks from '../components/HowItWorks';
import TimberShowcase from '../components/TimberShowcase';
import CTASection from '../components/CTASection';
import { products } from '../data/products';
import { companyInfo } from '../data/companyInfo';
import { 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Clock, 
  Sparkles, 
  Wrench, 
  BadgePercent,
  CheckCircle2,
  MapPin,
  Phone
} from 'lucide-react';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  const benefits = [
    {
      icon: ShieldCheck,
      title: "100% Kiln-Seasoned Hardwoods",
      description: "We use only FAS-certified Burma Teak, Indian Sheesham, and Oak kiln-dried to under 10% moisture content to prevent seasonal warping in North Indian weather.",
      badge: "Zero Warping"
    },
    {
      icon: Layers,
      title: "Traditional Mortise & Tenon",
      description: "Generational durability achieved through hand-cut wood-to-wood interlocking joints and oak drawbore dowels—never weak flat-pack corner screws.",
      badge: "Generational Joinery"
    },
    {
      icon: Clock,
      title: "Punctual Delivery Timelines",
      description: "Clear milestone commitments from initial blueprint sign-off to workshop progress photos and scheduled white-glove installation.",
      badge: "On-Time Guarantee"
    },
    {
      icon: Sparkles,
      title: "Custom 3D CAD Dimensioning",
      description: "Every wardrobe, dining suite, and kitchen is tailor-engineered to your exact room blueprints and architectural specifications.",
      badge: "Made to Measure"
    },
    {
      icon: Wrench,
      title: "Dedicated Artisan Aftercare",
      description: "Direct access to our master carpenters for long-term care, seasonal lubrication of pivot hardware, and organic re-waxing services.",
      badge: "Lifetime Support"
    },
    {
      icon: BadgePercent,
      title: "Direct Workshop Pricing",
      description: "Order directly from our Sarangpur woodworking shop. Enjoy pure artisan quality without middleman retail showroom markups.",
      badge: "Artisan Direct"
    }
  ];

  return (
    <>
      <SEO 
        title="Rack Manufacturer in Chandigarh | Dilip Wood Works"
        description="Dilip Wood Works is a trusted rack manufacturer in Chandigarh, offering custom wooden racks, shop racks, display racks, and shop counters."
        canonical="/"
      />

      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-200">
                Signature Collections
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3">
                Featured Woodcraft Works
              </h2>
              <p className="text-base text-stone-600 mt-2 max-w-xl">
                Explore handpicked architectural pieces crafted by our master woodworkers, tailored for luxury Chandigarh residences.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center space-x-2 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors group shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Mobile View All CTA */}
          <div className="mt-12 text-center md:hidden">
            <Link
              to="/products"
              className="w-full inline-flex items-center justify-center space-x-2 bg-stone-900 text-amber-400 font-bold px-6 py-3.5 rounded-xl text-sm"
            >
              <span>Explore All Products & Works</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-stone-950 text-white border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
              The Dilip Wood Works Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
              Why Discerning Homeowners Choose Our Woodcraft
            </h2>
            <p className="text-base text-stone-300 leading-relaxed">
              Every curve, mortise, and chamfer is executed with precision. We never compromise on raw timber quality or joint integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <BenefitCard
                key={idx}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                badge={benefit.badge}
              />
            ))}
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Timber & Materials Showcase */}
      <TimberShowcase />

      {/* Workshop & Heritage Trust Spotlight */}
      <section className="py-20 bg-stone-50 border-b border-stone-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-stone-200">
                <img
                  src="/dining-furniture.jpg"
                  alt="Dilip Wood Works custom teak dining suite"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-stone-900 text-white p-6 rounded-2xl shadow-xl border border-stone-800 max-w-xs">
                <p className="text-xs text-amber-400 uppercase tracking-wider font-bold mb-1">Authentic Guarantee</p>
                <p className="text-sm font-serif text-stone-200">"We never use MDF or hollow board shortcuts where real timber belongs."</p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-200">
                Artisan Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-snug">
                Located in Sarangpur, Rooted in Decades of Wood Mastery
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Operating right on Milk Pind Road near the Botanical Garden in Sarangpur, Chandigarh, Dilip Wood Works provides an open-door workshop experience. Homeowners, interior architects, and contractors are invited to inspect their timber logs, feel raw grain samples, and watch master joinery taking shape.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3">
                {companyInfo.stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center">
                    <p className="font-serif text-2xl font-bold text-amber-700">{stat.value}</p>
                    <p className="text-xs text-stone-500 mt-1 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3.5 rounded-full text-sm shadow-md transition-colors"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Visit Our Workshop</span>
                </Link>
                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center space-x-2 border border-stone-300 hover:bg-white text-stone-800 font-semibold px-6 py-3.5 rounded-full text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call {companyInfo.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTASection />
    </>
  );
}
