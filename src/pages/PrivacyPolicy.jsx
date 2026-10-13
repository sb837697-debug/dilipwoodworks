import SEO from '../components/SEO';
import { companyInfo } from '../data/companyInfo';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy policy and data protection practices of Dilip Wood Works in Sarangpur, Chandigarh."
        canonical="/privacy"
      />

      <section className="bg-stone-900 text-white py-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 mb-4">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-stone-400 mt-2">
            Last Updated: October 2026 • Dilip Wood Works, Sarangpur, Chandigarh
          </p>
        </div>
      </section>

      <div className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm text-stone-700 leading-relaxed space-y-6 text-sm sm:text-base">
          
          <div className="flex items-center space-x-3 text-amber-800 bg-amber-50 p-4 rounded-xl border border-amber-200">
            <Shield className="w-6 h-6 shrink-0" />
            <p className="text-xs sm:text-sm font-medium">
              Dilip Wood Works respects your privacy. We only collect the minimal contact details required to fulfill your custom woodworking commissions.
            </p>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">1. Information We Collect</h2>
          <p>
            When you inquire about a custom commission through our website or visit our Sarangpur workshop, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-600">
            <li>Your full name and contact telephone number / WhatsApp handle.</li>
            <li>Your email address for sending official design drawings, CAD blueprints, and quotation invoices.</li>
            <li>Delivery and installation address located within Chandigarh Tricity, Punjab, or neighboring regions.</li>
            <li>Architectural space measurements, blueprint files, and design notes you provide.</li>
          </ul>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">2. How We Use Your Information</h2>
          <p>
            The information you provide is strictly used to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone-600">
            <li>Provide precise pricing quotations and material availability schedules.</li>
            <li>Communicate milestone manufacturing updates from our carpentry shop.</li>
            <li>Coordinate logistics, on-site measurement visits, and white-glove installation.</li>
          </ul>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">3. Data Sharing & Security</h2>
          <p>
            We do not sell, rent, or lease your personal information to third-party marketing companies. Your data is accessible solely by our workshop management and logistics staff for order delivery.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">4. Contact Inquiries</h2>
          <p>
            If you have questions about your personal data or wish to have your details removed from our records, contact us directly at <a href={`mailto:${companyInfo.email}`} className="text-amber-700 underline font-semibold">{companyInfo.email}</a> or call <a href={`tel:${companyInfo.phoneRaw}`} className="text-amber-700 underline font-semibold">{companyInfo.phone}</a>.
          </p>
        </div>
      </div>
    </>
  );
}
