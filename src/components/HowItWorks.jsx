import { MessageSquare, Compass, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Consultation & Blueprint Review",
      description: "Discuss your space requirements, architectural drawings, or rough concept sketches. We conduct on-site dimension audits across Chandigarh Tricity.",
      detail: "CAD & 3D visualization support"
    },
    {
      number: "02",
      icon: Compass,
      title: "Timber Selection & Artisan Joinery",
      description: "Select your desired wood species (Burma Teak, Sheesham, Oak) and grain pattern. Our master carpenters hand-cut interlocking joints in our Sarangpur workshop.",
      detail: "Kiln-dried to <10% moisture"
    },
    {
      number: "03",
      icon: Truck,
      title: "Finishing & White-Glove Fitting",
      description: "Multi-coat organic hardwax oil or PU polish is hand-buffed. Our installation crew delivers and fits your custom pieces with millimeter precision.",
      detail: "Clean on-site installation"
    }
  ];

  return (
    <section className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-200">
            Three Simple Steps
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-4 mb-4">
            How Your Custom Woodwork Comes to Life
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            From initial sketch to generational centerpiece, our transparent process ensures flawless results without surprises.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col group hover:-translate-y-1"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-bold text-amber-600/30 group-hover:text-amber-600 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-grow">
                  {step.description}
                </p>

                <div className="pt-4 border-t border-stone-100 text-xs font-semibold text-amber-800 flex items-center justify-between">
                  <span>{step.detail}</span>
                  <span className="text-stone-400">Step {idx + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Sub-Action */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-sm font-bold text-amber-800 hover:text-amber-950 group"
          >
            <span>Ready to start step 1? Book your consultation</span>
            <ArrowRight className="w-4 h-4 text-amber-800 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
