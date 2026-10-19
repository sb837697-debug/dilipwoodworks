import { Link } from 'react-router-dom';
import { Store, CreditCard, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ShopProductsSection() {
  const shopProducts = [
    {
      id: "kirana-grocery",
      number: "01",
      icon: Store,
      title: "1. किराना और ग्रोसरी स्टोर के लिए रैक",
      description: "किराना दुकान में राशन, पैकेट वाले खाद्य पदार्थ, घरेलू सामान और रोजमर्रा की जरूरतों के प्रोडक्ट व्यवस्थित रखने के लिए सही रैक जरूरी हैं। अच्छे तरीके से लगाए गए रैक दुकान की जगह का बेहतर इस्तेमाल करने और ग्राहकों को सामान आसानी से देखने में मदद करते हैं।",
      image: "/workshop-shelving-rack.png",
      tag: "किराना और ग्रोसरी स्पेशल",
      features: [
        "राशन और पैकेट वाले सामान के लिए मजबूत शेल्फ",
        "दुकान की जगह का अधिकतम इस्तेमाल",
        "ग्राहकों को प्रोडक्ट आसानी से दिखे"
      ]
    },
    {
      id: "billing-counter",
      number: "02",
      icon: CreditCard,
      title: "2. दुकान के लिए काउंटर और बिलिंग काउंटर",
      description: "दुकान का काउंटर ग्राहकों को सामान देने, बिलिंग करने और जरूरी चीजें रखने के लिए उपयोगी होता है। अपनी दुकान के साइज, काम करने के तरीके और जरूरत के अनुसार उपयुक्त काउंटर डिजाइन और साइज के बारे में हमसे चर्चा करें।",
      image: "/workshop-study-desk.png",
      tag: "बिलिंग व कैश काउंटर",
      features: [
        "बिलिंग मशीन व कैश ड्रॉअर स्पेस",
        "ग्राहकों को सामान देने के लिए चौड़ा टॉप",
        "दुकान के साइज अनुसार कस्टमाइज्ड"
      ]
    },
    {
      id: "general-store",
      number: "03",
      icon: ShoppingBag,
      title: "3. जनरल स्टोर के लिए रैक",
      description: "जनरल स्टोर में पर्सनल केयर प्रोडक्ट, स्टेशनरी, घरेलू सामान और अन्य कई तरह के प्रोडक्ट रखे जाते हैं। उपयुक्त रैक अलग-अलग सामान को व्यवस्थित रखने और दुकान को साफ-सुथरा दिखाने में मदद करते हैं।",
      image: "/workshop-shelving-rack.png",
      tag: "जनरल स्टोर शेल्विंग",
      features: [
        "स्टेशनरी व पर्सनल केयर व्यवस्थित रखें",
        "मल्टी-कंपार्टमेंट विभाजन",
        "दुकान को साफ-सुथरा व आकर्षक लुक"
      ]
    }
  ];

  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200" id="shop-products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1 rounded-full border border-amber-300">
              रिटेल और कमर्शियल समाधान
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 leading-snug">
              नई दुकानों के लिए हमारे प्रोडक्ट
            </h2>
            <p className="text-base text-stone-600 mt-2 leading-relaxed">
              किराना दुकान, ग्रोसरी स्टोर और जनरल स्टोर के लिए मजबूत, टिकाऊ और स्पेस-सेविंग रैक व काउंटर।
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors group shrink-0"
          >
            <span>सभी प्रोडक्ट देखें</span>
            <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid: 3 Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopProducts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badge Header */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center space-x-1.5 bg-stone-900/90 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                      <Icon className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.tag}</span>
                    </span>
                    <span className="font-serif text-xl font-bold text-white/80 bg-stone-900/70 px-2.5 py-0.5 rounded-lg border border-stone-700">
                      {item.number}
                    </span>
                  </div>

                  {/* Title overlay on bottom of image for small screens */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-stone-100">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-1.5 text-sm font-bold text-amber-700 hover:text-amber-900 group/link"
                    >
                      <span>डिजाइन पर चर्चा करें</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <span className="text-xs text-stone-400 font-medium">चंडीगढ़ वर्कशॉप</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA Button: सभी प्रोडक्ट देखें */}
        <div className="mt-14 text-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center space-x-2.5 bg-stone-900 hover:bg-stone-800 text-amber-400 hover:text-amber-300 font-bold px-8 py-4 rounded-xl text-base shadow-lg transition-all duration-200"
          >
            <span>सभी प्रोडक्ट देखें</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
