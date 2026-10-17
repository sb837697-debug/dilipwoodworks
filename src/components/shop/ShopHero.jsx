import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageSquare, Store, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 text-white py-16 lg:py-24 border-b border-stone-800">
      {/* Decorative ambient background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-amber-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Experience Badge */}
            <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>सरंगपुर, चंडीगढ़ | Dilip Wood Works</span>
            </div>

            {/* Main H1 Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2]">
              नई दुकान के लिए शॉप रैक और काउंटर –{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Dilip Wood Works, चंडीगढ़
              </span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl font-serif font-semibold text-amber-200/90 leading-snug">
              नई दुकान खोल रहे हैं? सही रैक और काउंटर के साथ करें शुरुआत
            </h2>

            {/* Paragraphs from User Content */}
            <div className="space-y-4 text-stone-300 text-base sm:text-lg leading-relaxed">
              <p>
                नई दुकान खोलने के लिए सही जगह, सामान और बजट की योजना बनाना जरूरी है। दुकान में सामान व्यवस्थित रखने, ग्राहकों को प्रोडक्ट आसानी से दिखाने और उपलब्ध जगह का बेहतर इस्तेमाल करने के लिए अच्छे रैक और काउंटर महत्वपूर्ण भूमिका निभाते हैं।
              </p>
              <p>
                <strong className="text-white font-semibold">Dilip Wood Works, सरंगपुर, चंडीगढ़</strong> में हम नई दुकान खोलने वाले दुकानदारों के लिए शॉप रैक और काउंटर तैयार करते हैं। हमारा उद्देश्य आपकी दुकान की जरूरत, उपलब्ध जगह और बजट के अनुसार उपयोगी विकल्प उपलब्ध कराने में मदद करना है।
              </p>
              <p>
                चाहे आप किराना स्टोर, ग्रोसरी शॉप, जनरल स्टोर या दूसरी रिटेल दुकान खोल रहे हों, अपनी जरूरत के अनुसार रैक और काउंटर के डिजाइन पर हमसे चर्चा कर सकते हैं।
              </p>
              <p className="font-medium text-amber-300">
                नई दुकान खोलने की तैयारी कर रहे हैं? आज ही हमसे संपर्क करें।
              </p>
            </div>

            {/* CTA Buttons: हमारे प्रोडक्ट देखें | हमसे संपर्क करें */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-7 py-3.5 rounded-full text-base shadow-xl hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>हमारे प्रोडक्ट देखें</span>
                <ArrowRight className="w-5 h-5 text-stone-950" />
              </Link>

              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-stone-800/90 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200"
              >
                <span>हमसे संपर्क करें</span>
              </Link>

              <a
                href={companyInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-full text-base transition-all duration-200 shadow-md"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp पूछताछ</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left border-t border-stone-800/80">
              <div className="flex items-center space-x-2 text-stone-300">
                <Store className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">किराना व रिटेल रैक</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">मजबूत टिकाऊ वुडवर्क</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-300 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">सीधा वर्कशॉप रेट्स</span>
              </div>
            </div>

          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-amber-700/20 rounded-2xl blur-lg opacity-75" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700/80 bg-stone-950">
                <div className="relative h-[380px] sm:h-[420px] w-full overflow-hidden bg-stone-900 flex items-center justify-center">
                  <img
                    src="/workshop-shelving-rack.png"
                    alt="किराना और शॉप के लिए मॉड्यूलर वुडन रैक - Dilip Wood Works Sarangpur Chandigarh"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center space-x-1.5 bg-stone-900/90 backdrop-blur-md text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30 shadow-md">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>सरंगपुर वर्कशॉप निर्मित</span>
                    </span>
                  </div>

                  {/* Floating Bottom Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-stone-900/95 backdrop-blur-md border border-stone-700/80 text-left shadow-lg">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-sm sm:text-base font-serif font-bold text-white">
                          मॉड्यूलर शॉप रैक व बिलिंग काउंटर
                        </h3>
                        <p className="text-xs text-stone-300 mt-0.5">
                          किराना, ग्रोसरी व जनरल स्टोर के अनुकूल साइज में तैयार
                        </p>
                      </div>
                      <a
                        href={`tel:${companyInfo.phoneRaw}`}
                        className="shrink-0 bg-amber-500 hover:bg-amber-600 text-stone-950 text-xs font-bold px-3 py-2 rounded-lg transition-colors flex items-center space-x-1"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>कॉल करें</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Sub-bar below image */}
                <div className="bg-stone-950 p-3.5 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                  <span className="font-medium text-amber-400">
                    📍 मिल्क पिंड रोड, बॉटनिकल गार्डन, सरंगपुर
                  </span>
                  <span>9:00 AM – 7:30 PM</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
