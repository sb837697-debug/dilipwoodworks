import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Trees } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-stone-700/60">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-1.5 text-xs text-amber-700 font-semibold mb-2">
          <Trees className="w-3.5 h-3.5 text-amber-600" />
          <span>{product.timberOptions?.slice(0, 2).join(' • ')}</span>
        </div>

        <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-800 transition-colors leading-snug">
          <Link to={`/products/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        <p className="text-sm text-stone-600 mb-4 line-clamp-2 leading-relaxed flex-grow">
          {product.shortDescription}
        </p>

        {/* Key Highlight */}
        {product.keyBenefits?.[0] && (
          <div className="bg-stone-50 border border-stone-200/80 rounded-xl p-3 mb-5 flex items-start space-x-2 text-xs text-stone-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span className="line-clamp-2 font-medium">{product.keyBenefits[0]}</span>
          </div>
        )}

        {/* Footer Card Action */}
        <div className="pt-2 border-t border-stone-100 flex items-center justify-between mt-auto">
          <span className="text-xs text-stone-500 font-medium">
            Lead time: {product.leadTime || "3-4 Weeks"}
          </span>

          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-amber-700 hover:text-amber-900 group/btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded p-1"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 text-amber-700 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
