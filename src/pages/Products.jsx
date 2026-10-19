import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import { companyInfo } from '../data/companyInfo';
import { 
  Store, 
  CreditCard, 
  ShoppingBag, 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Products() {
  const shopCategories = [
    {
      icon: Store,
      title: "किराना और ग्रोसरी स्टोर रैक",
      desc: "राशन, पैकेट वाले सामान और रोजमर्रा की जरूरतों के लिए मजबूत शेल्विंग।"
    },
    {
      icon: CreditCard,
      title: "शॉप काउंटर और बिलिंग काउंटर",
      desc: "कैश ड्रॉअर, बिलिंग मशीन और ग्राहकों को सामान देने के लिए उपयोगी काउंटर।"
    },
    {
      icon: ShoppingBag,
      title: "जनरल स्टोर और डिस्प्ले रैक",
      desc: "स्टेशनरी, कॉस्मेटिक्स और रिटेल सामान को सुव्यवस्थित रखने के लिए मल्टी-टियर रैक।"
    }
  ];

  return (
    <>
      <SEO 
        title="शॉप रैक और काउंटर कैटलॉग – Dilip Wood Works, चंडीगढ़"
        description="नई दुकान के लिए शॉप रैक, किराना शेल्विंग, ग्रोसरी डिस्प्ले और बिलिंग काउंटर। नया कैटलॉग जल्द लाइव होगा। तुरंत साइज व कोटेशन के लिए संपर्क करें।"
        canonical="/products"
      />

      {/* Header banner */}
      <section className="bg-stone-900 text-white py-14 lg:py-20 border-b border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-full inline-flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>शॉप रैक और काउंटर कैटलॉग</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4 mb-4">
            नई दुकान के लिए शॉप रैक और काउंटर
          </h1>
          <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
            किराना दुकान, ग्रोसरी स्टोर, जनरल स्टोर और रिटेल दुकानों के लिए मजबूत, टिकाऊ और उपयोगी शॉप रैक व काउंटर।
          </p>
        </div>
      </section>

      {/* Updating Soon Main Announcement Section */}
      <section className="py-16 sm:py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
            {/* Top accent badge header */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 sm:px-10 py-5 text-white flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2.5">
                <Clock className="w-5 h-5 text-amber-200 animate-pulse" />
                <span className="text-sm sm:text-base font-bold tracking-wide">
                  कैटलॉग अपडेट हो रहा है (Updating Soon)
                </span>
              </div>
              <span className="text-xs font-semibold bg-stone-950/40 text-amber-100 px-3 py-1 rounded-full border border-amber-300/30">
                चंडीगढ़ वर्कशॉप में काम चालू है
              </span>
            </div>

            {/* Content body */}
            <div className="p-6 sm:p-10 lg:p-12 text-center md:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug mb-4">
                नया शॉप रैक और काउंटर कैटलॉग जल्द ही लाइव किया जा रहा है
              </h2>
              
              <p className="text-base text-stone-600 leading-relaxed mb-8">
                हम नई दुकानों के लिए विशेष रूप से डिज़ाइन किए गए लकड़ी व कमर्शियल रैक, किराना डिस्प्ले और बिलिंग काउंटरों के नए मॉडल और फोटो इस पेज पर जल्द जोड़ रहे हैं। इस बीच, अगर आप नई दुकान खोल रहे हैं, तो आप अपनी दुकान का साइज और जरूरत सीधे हमसे साझा कर सकते हैं।
              </p>

              {/* What we make to order */}
              <div className="mb-10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-4 flex items-center justify-center md:justify-start space-x-2">
                  <span>उपलब्ध निर्माण व कस्टमाइजेशन:</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {shopCategories.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx}
                        className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-300 transition-colors flex items-start space-x-3.5 text-left"
                      >
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-stone-900 mb-1">{item.title}</h4>
                          <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* How to order / Inquire in 3 easy steps */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-5 sm:p-6 mb-10">
                <h4 className="text-sm font-bold text-stone-900 mb-3 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>दुकान के लिए रैक या काउंटर कैसे बनवाएं?</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm text-stone-700">
                  <div className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                    <span>दुकान की खाली जगह या दीवार की नाप लें</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                    <span>WhatsApp पर साइज या फोटो शेयर करें</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                    <span>उचित बजट और मजबूत मटेरियल पर चर्चा करें</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Call */}
              <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={companyInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl shadow-md transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp पर साइज भेजें</span>
                </a>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="inline-flex items-center justify-center space-x-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-xl shadow-md transition-all duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>कॉल करें: {companyInfo.phone}</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl transition-colors border border-stone-300"
                >
                  <MapPin className="w-4 h-4 text-stone-600" />
                  <span>वर्कशॉप का पता</span>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection 
        title="नई दुकान की शुरुआत के लिए सही सलाह चाहिए?"
        subtitle="किराना, ग्रोसरी या जनरल स्टोर के लिए कितने रैक और किस साइज का काउंटर सही रहेगा, इस पर सीधे हमारे कारीगर से सलाह लें।"
        primaryText="सीधे संपर्क करें"
      />
    </>
  );
}
