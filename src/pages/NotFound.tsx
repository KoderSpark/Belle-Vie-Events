import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal text-white px-6">
      <div className="text-center max-w-lg">
        <h1 className="mb-6 text-7xl md:text-8xl font-serif text-[#c2a15b]">404</h1>
        <h2 className="text-2xl md:text-3xl font-serif italic mb-6">Page Not Found</h2>
        <p className="mb-10 text-white/60 font-sans leading-relaxed">
          The celebration you're looking for might have moved, or the invitation has expired. 
          Let us guide you back to the beginning.
        </p>
        <a 
          href="/" 
          className="inline-block bg-[#c2a15b] text-white px-10 py-4 rounded-sm font-sans tracking-widest uppercase text-xs font-semibold hover:opacity-90 transition-all"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
