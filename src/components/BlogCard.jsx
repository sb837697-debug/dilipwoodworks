import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      {/* Blog Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-amber-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Meta tags */}
        <div className="flex items-center space-x-4 text-xs text-stone-500 mb-3">
          <span className="flex items-center">
            <Calendar className="w-3.5 h-3.5 mr-1 text-amber-600" />
            {post.date}
          </span>
          <span className="text-stone-300">•</span>
          <span className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1 text-amber-600" />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-stone-900 mb-2.5 group-hover:text-amber-800 transition-colors leading-snug">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        <p className="text-sm text-stone-600 mb-4 line-clamp-3 leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        {/* Author & Read more */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-2 text-xs text-stone-600">
            <User className="w-3.5 h-3.5 text-stone-400" />
            <span className="font-medium truncate max-w-[140px]">{post.author}</span>
          </div>

          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 group/btn transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded p-1"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-700 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
