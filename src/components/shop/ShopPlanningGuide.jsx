import { Link } from 'react-router-dom';
import { Package, Users, Receipt, ArrowRight, Lightbulb } from 'lucide-react';

export default function ShopPlanningGuide() {
  const guidePoints = [
    {
      icon: Package,
      title: "प्रोडक्ट और स्टोरेज प्लानिंग",
      detail: "दुकान में कौन-कौन से प्रोडक्ट रखे जाएंगे और उनके लिए कितनी गहरी व ऊंची शेल्विंग चाहिए।"
    },
    {
      icon: Users,
      title: "ग्राहकों के आने-जाने की जगह",
      detail: "दुकान में ग्राहकों के चलने-फिरने और सामान देखने के लिए पर्याप्त वॉकवे स्पेस सुनिश्चित करें।"
    },
    {
      icon: Receipt,
      title: "बिलिंग काउंटर की सही दिशा",
      detail: "बिलिंग काउंटर का साइज और स्थान ऐसा हो जहां से पूरी दुकान पर नजर रखी जा सके और ग्राहक सुविधा से भुगतान कर सकें।"
    }
  ];

  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-amber-50/80 via-white to-stone-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-amber-200/80 shadow-sm relative overflow-hidden">
          
          {/* Decorative ambient background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-200">
              <Lightbulb className="w-4 h-4 text-amber-700" />
              <span>प्लानिंग टिप्स</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              नई दुकान की तैयारी को बनाएं आसान
            </h2>

            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              <p>
                नई किराना या ग्रोसरी दुकान खोलते समय कई चीजों की योजना बनानी पड़ती है। दुकान शुरू होने से पहले रैक और काउंटर की योजना बनाने से उपलब्ध जगह को व्यवस्थित करने में मदद मिल सकती है।
              </p>
              <p>
                इस बात पर ध्यान दें कि दुकान में कौन-कौन से प्रोडक्ट रखे जाएंगे, ग्राहकों के आने-जाने के लिए कितनी जगह चाहिए और बिलिंग काउंटर कहां होना चाहिए।
              </p>
              <p className="font-semibold text-stone-900">
                Dilip Wood Works में आप अपनी जरूरत के अनुसार शॉप रैक और काउंटर के विकल्पों पर चर्चा कर सकते हैं।
              </p>
            </div>

            {/* 3 Visual Key Factors */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {guidePoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:border-amber-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 mb-2">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center space-x-2 bg-stone-900 hover:bg-stone-800 text-amber-400 hover:text-amber-300 font-bold px-8 py-3.5 rounded-full text-base shadow-md transition-all"
              >
                <span>अपनी दुकान के लेआउट पर चर्चा करें</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
