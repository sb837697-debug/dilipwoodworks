import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';
import { trackContact } from '../../utils/metaPixel';

export default function ShopContactSection() {
  const whatsappUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${encodeURIComponent(
    'नमस्ते Dilip Wood Works, मैं अपनी नई दुकान के लिए शॉप रैक और काउंटर के बारे में जानकारी लेना चाहता हूं।'
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 text-white py-20 border-t border-b border-stone-800" id="contact-section">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full mb-4">
            आज ही संपर्क करें
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            नई दुकान खोल रहे हैं? रैक और काउंटर के लिए संपर्क करें
          </h2>

          <div className="space-y-3 text-stone-300 text-base sm:text-lg leading-relaxed">
            <p>
              अपनी नई दुकान के लिए शॉप रैक और काउंटर की जरूरत पर चर्चा करने के लिए <strong className="text-white">Dilip Wood Works</strong> से संपर्क करें।
            </p>
            <p>
              हमें अपनी दुकान की जगह, सामान और बजट के बारे में बताएं और उपलब्ध विकल्पों की जानकारी प्राप्त करें।
            </p>
          </div>
        </div>

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                फोन
              </span>
              <p className="text-stone-300 text-xs mb-3">
                सीधे वर्कशॉप पर कॉल करें:
              </p>
              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="text-lg font-bold text-white hover:text-amber-300 transition-colors block"
              >
                +91 9872703528
              </a>
            </div>
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>कॉल करें</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                ईमेल
              </span>
              <p className="text-stone-300 text-xs mb-3">
                विस्तृत जानकारी या एस्टीमेट के लिए:
              </p>
              <a
                href={`mailto:${companyInfo.email}`}
                className="text-sm sm:text-base font-semibold text-white hover:text-amber-300 transition-colors break-all block"
              >
                sb612589@gmail.com
              </a>
            </div>
            <a
              href={`mailto:${companyInfo.email}`}
              className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>ईमेल भेजें</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Address */}
          <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                वर्कशॉप का पता
              </span>
              <p className="text-stone-300 text-xs mb-2">
                सरंगपुर, चंडीगढ़:
              </p>
              <address className="not-italic text-sm text-stone-200 leading-relaxed font-medium">
                मिल्क पिंड रोड, बॉटनिकल गार्डन के पास, सरंगपुर, चंडीगढ़
              </address>
            </div>
            <a
              href={companyInfo.mapEmbedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>गूगल मैप देखें</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                वर्कशॉप का समय
              </span>
              <div className="space-y-2 text-xs text-stone-300 mt-2">
                <div>
                  <span className="font-semibold text-white block">सोमवार से शनिवार:</span>
                  <span>सुबह 9:00 बजे से शाम 7:30 बजे तक</span>
                </div>
                <div className="pt-1 border-t border-stone-800 text-amber-300/90 font-medium">
                  रविवार: पहले से अपॉइंटमेंट लेकर आएं
                </div>
              </div>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact({ method: 'whatsapp', contentName: 'Shop Page Appointment Booking' })}
              className="mt-6 inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>अपॉइंटमेंट बुक करें</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Closing Final Callout Box */}
        <div className="bg-gradient-to-r from-amber-600/20 via-amber-500/20 to-amber-700/20 rounded-2xl p-8 sm:p-10 border border-amber-500/30 text-center max-w-4xl mx-auto shadow-2xl">
          <p className="font-serif text-xl sm:text-2xl font-bold text-amber-300 mb-6 leading-relaxed">
            Dilip Wood Works से आज ही संपर्क करें और अपनी नई दुकान के रैक और काउंटर की योजना शुरू करें।
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              onClick={() => trackContact({ method: 'phone', contentName: 'Shop Page Bottom Call Button' })}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-8 py-3.5 rounded-full text-base shadow-xl transition-all"
            >
              <Phone className="w-5 h-5 text-stone-950" />
              <span>कॉल करें +91 9872703528</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContact({ method: 'whatsapp', contentName: 'Shop Page Bottom WhatsApp Button' })}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3.5 rounded-full text-base shadow-xl transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp पर संदेश भेजें</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
