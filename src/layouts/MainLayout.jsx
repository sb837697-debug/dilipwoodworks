import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { trackPageView, trackContact } from '../utils/metaPixel';

export default function MainLayout() {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  // Scroll to top and track SPA page view upon navigating to a new route
  useEffect(() => {
    window.scrollTo(0, 0);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Trigger Meta PageView via unified Pixel & Conversions API
    trackPageView(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-500 selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      {/* Floating Quick Action Widget */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
        <a
          href={companyInfo.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact({ method: 'whatsapp', contentName: 'Floating WhatsApp Widget' })}
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          aria-label="Direct WhatsApp Message"
          title="Chat with Master Artisan on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
