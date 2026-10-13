import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';
import { blogPosts } from '../data/blogPosts';
import { Search, Calendar, Clock, ArrowRight, BookOpen, RotateCcw } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(4); // Load More pagination

  // Extract unique categories
  const categories = ['All', 'Timber Knowledge', 'Craftsmanship & Techniques', 'Care & Maintenance', 'Architectural Trends', "Buyer's Guide", 'Finishing & Polish'];

  // Identify featured post
  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  // Filter blog posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q) ||
        post.tags?.some(t => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  const handleReset = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setVisibleCount(4);
  };

  return (
    <>
      <SEO 
        title="Woodcraft Journal & Timber Guides"
        description="Master carpentry insights, Burma Teak vs Sheesham timber guides, monsoon wood care, and interior joinery trends from Dilip Wood Works in Chandigarh."
        canonical="/blog"
      />

      {/* Header Banner */}
      <section className="bg-stone-900 text-white py-14 lg:py-18 border-b border-stone-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-1 rounded-full">
            The Artisan's Journal
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-4 mb-4">
            Master Woodcraft & Care Guides
          </h1>
          <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed">
            Educational insights, timber species analysis, and generational maintenance secrets shared directly by our master carpenters in Sarangpur, Chandigarh.
          </p>
        </div>
      </section>

      {/* Featured Article Spotlight (when not searching) */}
      {!searchQuery && selectedCategory === 'All' && featuredPost && (
        <section className="py-12 bg-stone-100/60 border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-0 group">
              
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-stone-100">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                  Featured Insight
                </span>
              </div>

              <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 text-xs text-stone-500 mb-3">
                    <span className="text-amber-800 font-bold uppercase tracking-wider">{featuredPost.category}</span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {featuredPost.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-4 group-hover:text-amber-800 transition-colors leading-tight">
                    <Link to={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <span className="text-xs font-semibold text-stone-600">
                    By {featuredPost.author}
                  </span>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center space-x-2 text-sm font-bold text-amber-700 hover:text-amber-900 transition-colors"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, timber tips, care guides..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-stone-300 bg-stone-50 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
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

            {/* Total count & reset */}
            <div className="flex items-center space-x-3 text-xs text-stone-500">
              <span>Showing {filteredPosts.length} articles</span>
              {(selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={handleReset}
                  className="inline-flex items-center space-x-1 font-semibold text-amber-800 hover:underline"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(4);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-amber-400 shadow-md'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Listing Grid */}
      <section className="py-16 bg-stone-50 min-h-[450px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {displayedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>

              {/* Functional Load More button */}
              {hasMore && (
                <div className="mt-14 text-center">
                  <button
                    onClick={handleLoadMore}
                    className="inline-flex items-center space-x-2 bg-white border border-stone-300 hover:border-amber-600 text-stone-800 hover:text-amber-900 font-bold px-8 py-3.5 rounded-full text-sm shadow-sm hover:shadow transition-all"
                  >
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <span>Load More Articles ({filteredPosts.length - visibleCount} remaining)</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-3xl p-12 text-center max-w-xl mx-auto border border-stone-200 shadow-sm my-8">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
                No matching articles found
              </h3>
              <p className="text-sm text-stone-600 mb-6">
                We couldn't find any guides matching "{searchQuery}". Try browsing by categories or clear your search term.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-stone-900 text-white text-xs font-bold"
              >
                Reset Search
              </button>
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection 
        title="Have Questions About Timber for Your Space?"
        subtitle="Speak directly with master craftsman Dilip Sharma. We provide complimentary timber selection guidance for architects and homeowners in Chandigarh."
        primaryText="Book Workshop Consultation"
      />
    </>
  );
}
