import SEO from '../components/SEO';
import ContactForm from '../components/ContactForm';
import { companyInfo } from '../data/companyInfo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  ExternalLink,
  Navigation
} from 'lucide-react';

export default function Contact() {
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyInfo.address.full)}`;

  return (
    <>
      <SEO 
        title="Contact Us & Workshop Studio Visit"
        description="Visit Dilip Wood Works on Milk Pind Road near Botanical Garden, Sarangpur, Chandigarh or contact +91 9872703528 for custom solid wood inquiries."
        canonical="/contact"
      />

      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-14 lg:py-18 border-b border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            Connect With Our Artisans
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Contact Dilip Wood Works
          </h1>
          <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
            Have a custom dining table concept, kitchen blueprint, or architectural project in Chandigarh Tricity? Reach out to discuss wood species, timelines, and transparent estimates.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            
            {/* Left Column: Direct Contact Info & Workshop Cards */}
            <div className="lg:col-span-5 space-y-8">
              
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">
                  Direct Workshop Contact
                </h2>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Call or visit our studio in Sarangpur. We warmly welcome clients and architects to inspect timbers and oversee work in progress.
                </p>
              </div>

              {/* Verified Contact Card */}
              <div className="bg-white rounded-3xl p-7 border border-stone-200/90 shadow-sm space-y-6">
                
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-0.5">
                      Phone / Mobile
                    </span>
                    <a
                      href={`tel:${companyInfo.phoneRaw}`}
                      className="text-base font-bold text-stone-900 hover:text-amber-800 transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">Available for calls & consultation</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-0.5">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-base font-bold text-stone-900 hover:text-amber-800 transition-colors break-all"
                    >
                      {companyInfo.email}
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">Send drawings, PDFs & mood boards</p>
                  </div>
                </div>

                {/* Physical Workshop Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-0.5">
                      Workshop & Mill Location
                    </span>
                    <address className="not-italic text-sm text-stone-800 leading-relaxed font-medium">
                      {companyInfo.address.full}
                    </address>
                    <a
                      href={googleMapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-amber-700 hover:text-amber-900 mt-2 space-x-1"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Driving Directions</span>
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4 pt-2 border-t border-stone-100">
                  <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-700 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1">
                    <span className="font-bold uppercase tracking-wider text-stone-500 block">
                      Visiting Hours
                    </span>
                    <p className="text-stone-800 font-semibold">{companyInfo.hours.weekdays}</p>
                    <p className="text-stone-500">{companyInfo.hours.sunday}</p>
                  </div>
                </div>

              </div>

              {/* WhatsApp Quick Box */}
              <div className="bg-gradient-to-br from-emerald-800 to-emerald-950 text-white rounded-3xl p-7 shadow-lg relative overflow-hidden">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold">Fast WhatsApp Response</h3>
                </div>
                <p className="text-xs text-emerald-100 leading-relaxed mb-5">
                  Have quick photos of your space or a voice note with your idea? Message master artisan Dilip Sharma directly.
                </p>
                <a
                  href={companyInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-white text-emerald-950 font-bold px-6 py-3 rounded-full text-xs shadow-md hover:bg-emerald-50 transition-colors"
                >
                  <span>Chat on WhatsApp (+91 9872703528)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full">
                  Custom Blueprint Inquiry
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-3 mb-2">
                  Request a Formal Project Quotation
                </h2>
                <p className="text-sm text-stone-600">
                  Fill in your details below and our team will get in touch to review specifications and provide an accurate cost estimate.
                </p>
              </div>

              <ContactForm />
            </div>

          </div>

          {/* Interactive Google Map Section */}
          <div className="mt-20 pt-14 border-t border-stone-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Workshop Location Map
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Located near Botanical Garden, Milk Pind Road, Sarangpur, Chandigarh
                </p>
              </div>

              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors self-start sm:self-auto shadow-sm"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden border border-stone-300 shadow-xl bg-stone-200 aspect-[16/7] w-full relative">
              <iframe
                title="Dilip Wood Works Location Map"
                src={companyInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
