import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';
import { blogPosts } from '../data/blogPosts';
import { companyInfo } from '../data/companyInfo';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Check, 
  MessageSquare,
  BookmarkCheck,
  Tag
} from 'lucide-react';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [copiedLink, setCopiedLink] = useState(false);

  if (!post) {
    return (
      <div className="py-24 max-w-xl mx-auto px-4 text-center">
        <SEO title="Article Not Found" />
        <h1 className="font-serif text-3xl font-bold text-stone-900 mb-3">Article Not Found</h1>
        <p className="text-stone-600 mb-6">The woodcraft guide you are looking for has been moved or does not exist.</p>
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 bg-stone-900 text-amber-400 font-bold px-6 py-3 rounded-full text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Blog</span>
        </Link>
      </div>
    );
  }

  // Related posts (excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || true))
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`Check out this woodworking guide from Dilip Wood Works: "${post.title}" - ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={post.image}
        ogType="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": post.image,
          "author": {
            "@type": "Person",
            "name": post.author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dilip Wood Works",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dilipwoodworks.com/hero-workshop.jpg"
            }
          },
          "datePublished": "2026-10-10",
          "description": post.excerpt
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-stone-100 border-b border-stone-200 text-xs py-3 px-4 sm:px-6 lg:px-8 text-stone-600">
        <div className="max-w-4xl mx-auto flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-amber-800">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-amber-800">Woodcraft Blog</Link>
          <span>/</span>
          <span className="text-stone-900 font-medium truncate max-w-sm">{post.title}</span>
        </div>
      </div>

      <article className="py-12 lg:py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Article Header */}
          <header className="mb-10 text-center sm:text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3.5 py-1 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight mb-5">
              {post.title}
            </h1>

            <p className="text-lg text-stone-600 leading-relaxed mb-6 font-normal">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-t border-b border-stone-200 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center space-x-5">
                <span className="flex items-center font-medium text-stone-900">
                  <User className="w-4 h-4 mr-1.5 text-amber-600" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1.5 text-amber-600" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1.5 text-amber-600" />
                  {post.readTime}
                </span>
              </div>

              {/* Social sharing buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={shareOnWhatsApp}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-semibold transition-colors border border-emerald-200"
                  title="Share on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-stone-200/80 text-stone-800 hover:bg-stone-300 text-xs font-semibold transition-colors"
                  title="Copy Article Link"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden mb-12 shadow-xl border border-stone-200 bg-stone-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[360px] sm:h-[480px] object-cover"
            />
          </div>

          {/* Article Body with rich typography */}
          <div 
            className="prose prose-stone prose-lg max-w-none text-stone-800 leading-relaxed space-y-6 [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-bold [&>h2]:text-stone-900 [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:font-serif [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-stone-900 [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:text-base [&>p]:sm:text-lg [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>blockquote]:border-l-4 [&>blockquote]:border-amber-600 [&>blockquote]:pl-5 [&>blockquote]:italic [&>blockquote]:text-stone-700 [&>blockquote]:my-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider flex items-center mr-2">
                <Tag className="w-3.5 h-3.5 mr-1" />
                Topics:
              </span>
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-stone-300 text-stone-700 text-xs px-3 py-1 rounded-full font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* In-Article Author Bio & Direct Action Card */}
          <div className="mt-12 p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white font-serif text-2xl font-bold flex items-center justify-center shrink-0 shadow-md">
              DW
            </div>
            <div className="space-y-2 flex-grow">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Written by Dilip Wood Works Artisans
                </h3>
                <span className="text-xs text-amber-800 font-semibold">Sarangpur Studio</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                We are a bespoke woodworking and architectural joinery shop located on Milk Pind Road, near the Botanical Garden, Sarangpur, Chandigarh. We specialize in custom solid timber commissions.
              </p>
              <div className="pt-2 flex flex-wrap gap-3 justify-center sm:justify-start">
                <Link
                  to="/products"
                  className="text-xs font-bold bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors shadow-sm"
                >
                  Explore Our Timber Works
                </Link>
                <Link
                  to="/contact"
                  className="text-xs font-bold bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-800 transition-colors"
                >
                  Schedule Workshop Visit
                </Link>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-stone-200">
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-8">
                Related Woodcraft Insights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <BlogCard key={rel.id} post={rel} />
                ))}
              </div>
            </div>
          )}

        </div>
      </article>

      <CTASection 
        title="Commission Your Next Furniture Piece"
        subtitle="Now that you understand timber grades and joinery, let our workshop build your custom dream furniture."
      />
    </>
  );
}
