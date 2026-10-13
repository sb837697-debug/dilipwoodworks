import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Home, Compass, Phone, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

export default function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found (404)" 
        description="The page you requested could not be found. Explore Dilip Wood Works custom furniture and carpentry services."
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 bg-stone-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center bg-white p-10 sm:p-14 rounded-3xl border border-stone-200 shadow-xl">
          
          <span className="font-mono text-xs font-bold text-amber-700 bg-amber-100 border border-amber-200 px-3 py-1 rounded-full uppercase tracking-widest">
            Error 404
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-4 mb-3">
            Off the Woodworking Trail
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-8">
            The page or catalog item you are looking for has been moved, re-sawn, or does not exist. Let's get you back to our workshop.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all"
            >
              <Home className="w-4 h-4 text-stone-950" />
              <span>Return Home</span>
            </Link>

            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-stone-900 hover:bg-stone-800 text-white font-bold px-6 py-3 rounded-full text-sm transition-all"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Browse Catalog</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-stone-100 text-xs text-stone-500">
            Need urgent assistance? Call our workshop at{' '}
            <a href={`tel:${companyInfo.phoneRaw}`} className="text-amber-800 font-bold hover:underline">
              {companyInfo.phone}
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
