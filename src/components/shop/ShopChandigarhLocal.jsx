import { MapPin, Phone, MessageSquare, Camera, Navigation, Store } from 'lucide-react';
import { companyInfo } from '../../data/companyInfo';

export default function ShopChandigarhLocal() {
  const whatsappPhotoShareUrl = `https://wa.me/91${companyInfo.phoneRaw}?text=${encodeURIComponent(
    'नमस्ते Dilip Wood Works, मैं अपनी नई दुकान के लिए रैक और काउंटर के डिजाइन/साइज की फोटो साझा करना चाहता हूं।'
  )}`;

  return (
    <section className="py-20 bg-stone-100/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text & Location Details */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-300">
              <MapPin className="w-3.5 h-3.5 text-amber-700" />
              <span>लोकल वर्कशॉप सेवा</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              चंडीगढ़ और आसपास के दुकानदारों के लिए
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong className="text-stone-900 font-semibold">Dilip Wood Works</strong>, मिल्क पिंड रोड, बॉटनिकल गार्डन के पास, सरंगपुर, चंडीगढ़ में स्थित है।
              </p>
              <p>
                अगर आप किराना स्टोर, ग्रोसरी शॉप, जनरल स्टोर या दूसरी रिटेल दुकान खोलने की योजना बना रहे हैं, तो रैक और काउंटर के लिए हमसे संपर्क करें।
              </p>
              <p className="bg-amber-50/90 p-4 rounded-xl border border-amber-200/90 text-stone-800 font-medium">
                आप अपनी दुकान का साइज, जरूरत या पसंद के डिजाइन की फोटो साझा कर सकते हैं, ताकि आपकी जरूरत को बेहतर तरीके से समझा जा सके।
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href={whatsappPhotoShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-md transition-all duration-200"
              >
                <Camera className="w-5 h-5" />
                <span>डिजाइन या साइज की फोटो WhatsApp करें</span>
              </a>

              <a
                href={`tel:${companyInfo.phoneRaw}`}
                className="inline-flex items-center space-x-2 bg-stone-900 hover:bg-stone-800 text-amber-400 font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-md transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>कॉल करें {companyInfo.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Location Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-7 sm:p-8 border border-stone-200 shadow-xl space-y-6">
              
              <div className="flex items-center space-x-3 pb-5 border-b border-stone-100">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    हमारी वर्कशॉप पर आएं
                  </h3>
                  <p className="text-xs text-stone-500">
                    सरंगपुर, चंडीगढ़ (Botanical Garden के पास)
                  </p>
                </div>
              </div>

              {/* Address Box */}
              <div className="space-y-3 text-sm text-stone-700">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">वर्कशॉप का पता:</span>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                      मिल्क पिंड रोड, बॉटनिकल गार्डन के पास, सरंगपुर, चंडीगढ़
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Navigation className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-stone-900">कवर किए जाने वाले क्षेत्र:</span>
                    <p className="text-stone-600 text-xs sm:text-sm mt-0.5">
                      चंडीगढ़, मोहाली, पंचकूला, जीरकपुर, खरड़ और आसपास के क्षेत्र
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo Share Helper Box */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs text-stone-600 space-y-2">
                <div className="flex items-center space-x-2 font-bold text-stone-800">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>फोटो शेयरिंग टिप:</span>
                </div>
                <p>
                  अपनी खाली दुकान का वीडियो या फोटो WhatsApp पर भेजें। हमारे कारीगर तुरंत आपकी जगह के अनुसार रैक और काउंटर का सुझाव देंगे।
                </p>
              </div>

              <a
                href={companyInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center space-x-2 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-bold py-3 px-4 rounded-xl border border-emerald-200 text-sm transition-colors"
              >
                <span>WhatsApp पर तुरंत चैट करें</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
