import { useState } from 'react';
import { ShieldCheck, Sparkles, Check } from 'lucide-react';

export default function TimberShowcase() {
  const timbers = [
    {
      id: "teak",
      name: "Burma Teak (Tectona grandis)",
      tag: "The Gold Standard",
      description: "Naturally saturated with protective organic oils and silica, teak resists moisture, monsoons, and termites better than almost any other commercial wood.",
      grain: "Tight, linear grain with rich golden-amber honey tones.",
      hardness: "1,155 Janka",
      bestFor: "Dining Suites, Main Entrance Pivot Doors, Luxury Modular Kitchens",
      moisture: "< 10% Kiln Dried"
    },
    {
      id: "sheesham",
      name: "Indian Sheesham (North Indian Rosewood)",
      tag: "Regal Heritage Character",
      description: "Extremely dense and hard-wearing with majestic dark chocolate and amber swirls. Native to Punjab and Rajasthan, perfectly acclimatized to local weather.",
      grain: "Expressive wild swirls and deep contrasting mineral veins.",
      hardness: "1,780 Janka (Extremely hard)",
      bestFor: "Heritage Wardrobes, Heavy King Beds, Bookshelves & Accent Furniture",
      moisture: "< 9% Seasoned"
    },
    {
      id: "oak",
      name: "American White Oak (Quercus alba)",
      tag: "Architectural Modernism",
      description: "Celebrated by modern architects for neutral warm hues, fine medullary rays, and outstanding dimensional stability under indoor climate control.",
      grain: "Straight, prominent open grain with light golden wheat tones.",
      hardness: "1,360 Janka",
      bestFor: "Slat Wall Panelling, Minimalist Consoles, Modern Dining Tables",
      moisture: "< 8% Kiln Dried"
    },
    {
      id: "walnut",
      name: "Black Walnut (Juglans nigra)",
      tag: "Executive Luxury",
      description: "Prized worldwide for its rich chocolate-espresso tones and velvety touch under organic Danish oil finishes. A true luxury statement.",
      grain: "Soft wavy figuring with occasional dramatic fiddleback curls.",
      hardness: "1,010 Janka",
      bestFor: "Executive Desks, Boardroom Tables, Master Bedroom Suites",
      moisture: "< 8% Seasoned"
    }
  ];

  const [activeTab, setActiveTab] = useState(timbers[0]);

  return (
    <section className="py-20 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            Our Certified Timbers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            Master-Grade Woods, Responsibly Seasoned
          </h2>
          <p className="text-base text-stone-300 leading-relaxed">
            The secret to furniture that never cracks or loosens lies in selecting first-grade hardwoods dried to the exact equilibrium moisture content of North India.
          </p>
        </div>

        {/* Timber Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {timbers.map((timber) => (
            <button
              key={timber.id}
              onClick={() => setActiveTab(timber)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                activeTab.id === timber.id
                  ? 'bg-amber-500 text-stone-950 shadow-md scale-105'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700/60'
              }`}
            >
              {timber.name.split(' (')[0]}
            </button>
          ))}
        </div>

        {/* Selected Timber Detail Card */}
        <div className="max-w-4xl mx-auto bg-stone-950/80 rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-stone-800">
            <div>
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase block mb-1">
                {activeTab.tag}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {activeTab.name}
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{activeTab.moisture}</span>
            </div>
          </div>

          <p className="text-stone-300 text-base leading-relaxed mb-8">
            {activeTab.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
              <span className="text-xs text-stone-400 block mb-1">Natural Grain & Tone</span>
              <p className="text-sm font-medium text-white">{activeTab.grain}</p>
            </div>

            <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
              <span className="text-xs text-stone-400 block mb-1">Hardness & Density</span>
              <p className="text-sm font-medium text-amber-400">{activeTab.hardness}</p>
            </div>

            <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
              <span className="text-xs text-stone-400 block mb-1">Ideal Architecture</span>
              <p className="text-sm font-medium text-white">{activeTab.bestFor}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
