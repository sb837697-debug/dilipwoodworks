import { Link } from 'react-router-dom';
import { MessageSquare, Ruler, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ShopProcessSteps() {
  const steps = [
    {
      stepNumber: "01",
      stepLabel: "पहला चरण",
      icon: MessageSquare,
      title: "अपनी जरूरत बताएं",
      description: "हमें बताएं कि आप किस तरह की दुकान खोल रहे हैं, दुकान का अनुमानित साइज क्या है और आप किस प्रकार का सामान बेचेंगे।",
      highlight: "दुकान का प्रकार और साइज साझा करें"
    },
    {
      stepNumber: "02",
      stepLabel: "दूसरा चरण",
      icon: Ruler,
      title: "डिजाइन और मटेरियल पर चर्चा करें",
      description: "अपनी जगह और बजट के अनुसार रैक की व्यवस्था, काउंटर का साइज, मटेरियल और उपलब्ध डिजाइन के बारे में जानकारी लें।",
      highlight: "बजट व मटेरियल के बेहतरीन विकल्प"
    },
    {
      stepNumber: "03",
      stepLabel: "तीसरा चरण",
      icon: CheckCircle2,
      title: "ऑर्डर कन्फर्म करें",
      description: "डिजाइन, कीमत और अन्य जरूरी जानकारी तय होने के बाद ऑर्डर कन्फर्म करें और काम पूरा होने तथा डिलीवरी के अनुमानित समय के बारे में जानकारी लें।",
      highlight: "समय पर डिलीवरी और फिनिशिंग"
    }
  ];

  return (
    <section className="py-20 bg-stone-100/80 border-b border-stone-200" id="order-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            सरल और पारदर्शी प्रक्रिया
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-4 mb-4 leading-snug">
            नई दुकान के लिए रैक और काउंटर कैसे बनवाएं?
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            सिर्फ तीन आसान चरणों में अपनी दुकान की जरूरत, स्पेस और बजट के अनुसार बेहतरीन रैक और काउंटर तैयार करवाएं।
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-stone-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 relative flex flex-col group hover:-translate-y-1.5"
              >
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-amber-600/30 group-hover:text-amber-600 transition-colors">
                    {step.stepNumber}
                  </span>
                  <div className="w-13 h-13 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Step Sub-label */}
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                  {step.stepLabel}
                </span>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6 flex-grow">
                  {step.description}
                </p>

                {/* Bottom Highlight */}
                <div className="pt-4 border-t border-stone-100 text-xs font-semibold text-amber-900 flex items-center justify-between">
                  <span>✓ {step.highlight}</span>
                  <span className="text-stone-400">Step {idx + 1} of 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA Link */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 text-sm sm:text-base font-bold text-amber-800 hover:text-amber-950 group"
          >
            <span>पहला चरण शुरू करें — अपनी जरूरत और दुकान का साइज बताएं</span>
            <ArrowRight className="w-4 h-4 text-amber-800 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
