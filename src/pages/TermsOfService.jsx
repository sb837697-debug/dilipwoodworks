import SEO from '../components/SEO';
import { companyInfo } from '../data/companyInfo';
import { Link } from 'react-router-dom';
import { ArrowLeft, Hammer } from 'lucide-react';

export default function TermsOfService() {
  return (
    <>
      <SEO 
        title="Terms of Craftsmanship & Service"
        description="Terms of craftsmanship, warranty commitments, and commissioning policies of Dilip Wood Works."
        canonical="/terms"
      />

      <section className="bg-stone-900 text-white py-12 border-b border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 mb-4">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Terms of Craftsmanship & Service
          </h1>
          <p className="text-xs text-stone-400 mt-2">
            Dilip Wood Works • Sarangpur, Chandigarh (Punjab 140901)
          </p>
        </div>
      </section>

      <div className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm text-stone-700 leading-relaxed space-y-6 text-sm sm:text-base">
          
          <div className="flex items-center space-x-3 text-amber-900 bg-amber-50 p-4 rounded-xl border border-amber-200">
            <Hammer className="w-6 h-6 shrink-0 text-amber-700" />
            <p className="text-xs sm:text-sm font-medium">
              We stand behind every mortise, tenon, and dovetail joint crafted in our studio with unconditional pride and generational integrity.
            </p>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">1. Bespoke Commissioning Process</h2>
          <p>
            Custom woodworking projects commence upon mutual approval of final dimensions, timber species selection (e.g. Burma Teak, Indian Sheesham, Oak), finish sheen, and receipt of the agreed milestone advance.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">2. Natural Timber Character</h2>
          <p>
            Solid hardwood is a natural organic material. Grain swirls, mineral veins, and subtle color tone variations are authentic hallmarks of genuine timber and reflect the natural life of the tree. While we kiln-dry timber to optimal equilibrium moisture content (&lt;10%), slight micro-expansion during severe monsoons is normal behavior of living wood.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">3. Structural Craftsmanship Warranty</h2>
          <p>
            All custom solid wood pieces carry a structural integrity guarantee against joint failure, mortise separation, and manufacturing defects. Our team provides direct warranty assistance from our Sarangpur studio.
          </p>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">4. Delivery and On-Site Installation</h2>
          <p>
            Delivery dates are provided as estimated milestone targets. Our crew conducts white-glove delivery, assembly, and alignment across Chandigarh Tricity (Chandigarh, Mohali, Panchkula) and wider Punjab.
          </p>
        </div>
      </div>
    </>
  );
}
