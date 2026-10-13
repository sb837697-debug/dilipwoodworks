import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASection';
import { products } from '../data/products';
import { Search, Filter, RotateCcw, Trees, Sparkles, ArrowRight } from 'lucide-react';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTimber, setSelectedTimber] = useState('All');

  // Extract unique categories
  const categories = ['All', 'Dining & Living', 'Bedrooms & Storage', 'Doors & Architectural', 'Modular Kitchens', 'Commercial & Study'];
  const timberTypes = ['All', 'Burma Teak', 'Indian Sheesham', 'American White Oak', 'American Walnut'];

  // Update category and sync search param
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedTimber('All');
    setSearchParams({});
  };

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category match
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

      // Timber match
      const matchesTimber = selectedTimber === 'All' || product.timberOptions?.some(t => t.toLowerCase().includes(selectedTimber.toLowerCase()));

      // Search match (name, description, timber, category)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.keyBenefits?.some(b => b.toLowerCase().includes(q));

      return matchesCategory && matchesTimber && matchesSearch;
    });
  }, [selectedCategory, selectedTimber, searchQuery]);

  return (
    <>
      <SEO 
        title="Custom Woodwork & Furniture Catalog"
        description="Browse handcrafted solid Burma Teak dining tables, sheesham bedroom suites, custom modular kitchens, and architectural pivot doors by Dilip Wood Works."
        canonical="/products"
      />

      {/* Header banner */}
      <section className="bg-stone-900 text-white py-14 lg:py-18 border-b border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            Artisan Catalog
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Custom Furniture & Architectural Works
          </h1>
          <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
            Every piece is custom handcrafted to order in our Sarangpur workshop using seasoned solid hardwoods, traditional interlocking joinery, and non-toxic finishes.
          </p>
        </div>
      </section>

      {/* Filter and Search toolbar */}
      <section className="py-8 bg-stone-100/80 border-b border-stone-200 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dining, teak, wardrobe, pivot door..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-stone-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Timber species filter dropdown */}
            <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 hidden sm:inline">
                Wood Species:
              </span>
              <select
                value={selectedTimber}
                onChange={(e) => setSelectedTimber(e.target.value)}
                className="px-4 py-2.5 rounded-full border border-stone-300 bg-white text-xs sm:text-sm font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
              >
                {timberTypes.map((t) => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All Wood Species' : t}
                  </option>
                ))}
              </select>

              {(selectedCategory !== 'All' || selectedTimber !== 'All' || searchQuery) && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 px-3 py-2 rounded-full hover:bg-stone-200 transition-colors"
                  title="Reset all filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? products.length 
                : products.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 flex items-center space-x-1.5 ${
                    selectedCategory === cat
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    selectedCategory === cat ? 'bg-amber-700 text-amber-100' : 'bg-stone-100 text-stone-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Product Catalog Grid */}
      <section className="py-16 bg-stone-50 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 text-sm text-stone-500">
            <p>
              Showing <strong className="text-stone-900 font-bold">{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'custom work' : 'custom works'}
            </p>
            {selectedCategory !== 'All' && (
              <span className="text-xs font-medium text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                Filtered by: {selectedCategory}
              </span>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-3xl p-12 text-center max-w-xl mx-auto border border-stone-200 shadow-sm my-10">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4 border border-amber-200">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                No matching pieces found
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                We couldn't find any works matching your filters or search term "{searchQuery}". Remember, everything we create is completely bespoke!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleResetFilters}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors"
                >
                  Clear All Filters
                </button>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-amber-600 text-white text-xs font-bold hover:bg-amber-700 transition-colors"
                >
                  Inquire Custom Blueprint
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection 
        title="Can't Find Your Exact Dimensions in the Catalog?"
        subtitle="Every product shown above can be adjusted in length, width, timber species, and finish stain. We also build 100% custom designs from your architectural CAD blueprints."
        primaryText="Request Custom Dimensions Quote"
      />
    </>
  );
}
