import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import ContactForm from '../components/ContactForm';
import { products } from '../data/products';
import { companyInfo } from '../data/companyInfo';
import { trackViewContent, trackContact } from '../utils/metaPixel';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Ruler, 
  Trees, 
  Sparkles, 
  MessageSquare, 
  Phone,
  Share2,
  Check
} from 'lucide-react';

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.slug === slug);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  useEffect(() => {
    if (product) {
      trackViewContent({
        contentName: product.name,
        contentId: product.id,
        contentType: 'product'
      });
    }
  }, [product]);

  // If product not found
  if (!product) {
    return (
      <div className="py-24 max-w-xl mx-auto px-4 text-center">
        <SEO title="Product Not Found" />
        <h1 className="font-serif text-3xl font-bold text-stone-900 mb-3">Woodcraft Piece Not Found</h1>
        <p className="text-stone-600 mb-6">The item you are searching for might have been updated or moved.</p>
        <Link
          to="/products"
          className="inline-flex items-center space-x-2 bg-stone-900 text-amber-400 font-bold px-6 py-3 rounded-full text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products Catalog</span>
        </Link>
      </div>
    );
  }

  const gallery = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Dilip Wood Works, I am interested in commissioning "${product.name}" (${window.location.href}). Please share quotation details.`
  );

  return (
    <>
      <SEO 
        title={product.name}
        description={product.shortDescription}
        canonical={`/products/${product.slug}`}
        ogImage={product.image}
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "image": product.image,
          "description": product.shortDescription,
          "brand": {
            "@type": "Brand",
            "name": "Dilip Wood Works"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
          }
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-stone-100 border-b border-stone-200 text-xs py-3 px-4 sm:px-6 lg:px-8 text-stone-600">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-amber-800">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-amber-800">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${encodeURIComponent(product.category)}`} className="hover:text-amber-800">{product.category}</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium truncate max-w-xs">{product.name}</span>
        </div>
      </div>

      <div className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            
            {/* Gallery Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone-200 shadow-xl border border-stone-200">
                <img
                  src={gallery[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <span className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-amber-300 text-xs font-semibold px-3.5 py-1 rounded-full border border-stone-700/60">
                  {product.category}
                </span>
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx 
                          ? 'border-amber-600 ring-2 ring-amber-500/30 scale-105' 
                          : 'border-stone-300 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Artisan Workshop Guarantee Box */}
              <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm space-y-3">
                <h4 className="font-serif text-base font-bold text-stone-900 flex items-center">
                  <ShieldCheck className="w-5 h-5 text-amber-600 mr-2" />
                  <span>The Dilip Wood Works Craftsmanship Pledge</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Every order is custom-built inside our Sarangpur mill. We invite you to visit our workshop during construction to inspect the internal joints and moisture certification before the final polish is applied.
                </p>
              </div>
            </div>

            {/* Product Meta & Actions Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100/80 px-3 py-1 rounded-full">
                  Custom Handcrafted
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-3 mb-2 leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm font-serif italic text-amber-800">
                  {product.tagline}
                </p>
              </div>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Key Highlights */}
              <div className="bg-stone-100/80 rounded-2xl p-5 border border-stone-200/80 space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                  Artisan Engineering Highlights
                </h3>
                {product.keyBenefits?.map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-stone-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Specifications Matrix */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                  Specifications & Material Options
                </h3>
                <div className="bg-white rounded-2xl border border-stone-200 divide-y divide-stone-100 overflow-hidden text-xs sm:text-sm">
                  <div className="p-3.5 flex justify-between">
                    <span className="text-stone-500">Timber Options</span>
                    <span className="font-bold text-stone-900">{product.timberOptions?.join(', ')}</span>
                  </div>
                  <div className="p-3.5 flex justify-between">
                    <span className="text-stone-500">Finish Options</span>
                    <span className="font-bold text-stone-900">{product.finishOptions?.join(', ')}</span>
                  </div>
                  <div className="p-3.5 flex justify-between">
                    <span className="text-stone-500">Standard Dimensions</span>
                    <span className="font-bold text-stone-900 text-right">{product.dimensions}</span>
                  </div>
                  <div className="p-3.5 flex justify-between">
                    <span className="text-stone-500">Lead Time</span>
                    <span className="font-bold text-amber-700">{product.leadTime}</span>
                  </div>
                  {product.specifications && Object.entries(product.specifications).map(([key, val], idx) => (
                    <div key={idx} className="p-3.5 flex justify-between">
                      <span className="text-stone-500">{key}</span>
                      <span className="font-semibold text-stone-900">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commission Action Buttons */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowInquiryForm(!showInquiryForm)}
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold px-6 py-3.5 rounded-full text-sm shadow-md transition-all active:scale-98"
                  >
                    <span>{showInquiryForm ? "Hide Inquiry Form" : "Request Custom Quote"}</span>
                  </button>

                  <a
                    href={`https://wa.me/${companyInfo.phoneRaw}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackContact({ method: 'whatsapp', contentName: `Product WhatsApp: ${product.name}` })}
                    className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-full text-sm shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    onClick={() => trackContact({ method: 'phone', contentName: `Product Call: ${product.name}` })}
                    className="flex items-center hover:text-stone-900 transition-colors font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-amber-600" />
                    <span>Direct Call: {companyInfo.phone}</span>
                  </a>

                  <button
                    onClick={handleCopyLink}
                    className="flex items-center hover:text-stone-900 transition-colors font-medium"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                        <span className="text-emerald-700">Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5 mr-1" />
                        <span>Share Piece</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Inline Custom Inquiry Form Accordion */}
          {showInquiryForm && (
            <div className="mt-14 pt-12 border-t border-stone-300 animate-fadeIn">
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    Inquire About "{product.name}"
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Please provide your room dimensions, desired wood finish, and address for shipping/installation.
                  </p>
                </div>
                <ContactForm prefillSubject={`Custom Commission: ${product.name}`} />
              </div>
            </div>
          )}

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-14 border-t border-stone-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    More Works in {product.category}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">Complementary architectural pieces crafted in the same timber line</p>
                </div>
                <Link
                  to="/products"
                  className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center space-x-1"
                >
                  <span>View All Works</span>
                  <span>›</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
