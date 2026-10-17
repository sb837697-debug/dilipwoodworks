import { Sparkles, BadgePercent, Maximize2, Store, MapPin, CheckCircle2 } from 'lucide-react';

export default function ShopWhyChooseUs() {
  const reasons = [
    {
      icon: Sparkles,
      title: "उपयोगी डिजाइन",
      description: "ऐसे रैक और काउंटर के विकल्प जो आपकी दुकान में सामान व्यवस्थित रखने में मदद करें।",
      badge: "प्रैक्टिकल लेआउट"
    },
    {
      icon: BadgePercent,
      title: "बजट के अनुसार विकल्प",
      description: "अपनी जरूरत और बजट के बारे में बताएं और उपलब्ध डिजाइन तथा मटेरियल की जानकारी लें।",
      badge: "किफायती व पारदर्शी"
    },
    {
      icon: Maximize2,
      title: "दुकान की जगह का बेहतर इस्तेमाल",
      description: "रैक और काउंटर की सही योजना से दुकान में सामान रखने और ग्राहकों के आने-जाने के लिए जगह व्यवस्थित की जा सकती है।",
      badge: "स्पेस ऑप्टिमाइज़ेशन"
    },
    {
      icon: Store,
      title: "नई दुकान खोलने वालों के लिए उपयोगी समाधान",
      description: "अगर आप पहली बार किराना स्टोर खोल रहे हैं या नई रिटेल दुकान शुरू कर रहे हैं, तो अपनी जरूरत के अनुसार रैक और काउंटर के विकल्पों पर चर्चा कर सकते हैं।",
      badge: "नई दुकानों के लिए स्पेशल"
    },
    {
      icon: MapPin,
      title: "वर्कशॉप से सीधा संपर्क",
      description: "सरंगपुर, चंडीगढ़ स्थित हमारी वर्कशॉप से संपर्क करके अपनी दुकान के लिए रैक और काउंटर की जरूरत बताएं।",
      badge: "डायरेक्ट कारीगर"
    }
  ];

  return (
    <section className="py-20 bg-stone-950 text-white border-b border-stone-800 relative overflow-hidden">
      {/* Subtle ambient light accents */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            भरोसेमंद वुडक्राफ्ट
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
            Dilip Wood Works को क्यों चुनें?
          </h2>
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
            चंडीगढ़, मोहाली और पंचकूला में नई रिटेल दुकानों और किराना स्टोर्स के लिए टिकाऊ, आकर्षक और उपयोगी समाधान।
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-stone-900/90 rounded-2xl p-7 sm:p-8 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 relative flex flex-col group hover:-translate-y-1 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-amber-300/90 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-800/60">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Bottom Trust Tag */}
                <div className="pt-4 border-t border-stone-800/80 flex items-center text-xs text-stone-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" />
                  <span>Dilip Wood Works क्वालिटी वादा</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
