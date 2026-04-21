import React, { useState, useEffect } from 'react';
import { Sparkles, UtensilsCrossed, Wine } from 'lucide-react';

interface LoadingScreenProps {
  onFinish?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Curating Excellence...",
    "Preparing Your Venue...",
    "Perfecting the Menu...",
    "Setting the Ambiance..."
  ];

  // Generate random particles for the champagne bubble effect
  const [particles] = useState(() => 
    Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 4 + 3}s`,
      animationDelay: `${Math.random() * 2}s`,
      size: `${Math.random() * 4 + 2}px`,
      opacity: Math.random() * 0.5 + 0.1
    }))
  );

  useEffect(() => {
    // Cycle through elegant loading messages
    const messageTimer = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);

    // Simulate progress
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          if (onFinish) setTimeout(onFinish, 800); // 800ms delay for smoothness
          return 100;
        }
        return prev + 1;
      });
    }, 45); // Approx 4.5 seconds total
    
    return () => {
      clearInterval(messageTimer);
      clearInterval(progressTimer);
    };
  }, [onFinish]);

  // Calculate SVG Circle properties for progress
  const circleRadius = 76;
  const circleCircumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circleCircumference - (progress / 100) * circleCircumference;

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Montserrat:wght@200;300;400&display=swap');
          
          .font-serif-premium {
            font-family: 'Playfair Display', serif;
          }
          
          .font-sans-elegant {
            font-family: 'Montserrat', sans-serif;
          }

          .gold-gradient-text {
            background: linear-gradient(135deg, #E6C875 0%, #FFEDAB 25%, #D4AF37 50%, #997A15 75%, #FBF5B7 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            background-size: 200% auto;
            animation: shine 5s ease-in-out infinite alternate;
          }

          @keyframes shine {
            0% { background-position: 0% center; }
            100% { background-position: 200% center; }
          }

          @keyframes float-up {
            0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
            20% { opacity: var(--max-opacity); }
            80% { opacity: var(--max-opacity); }
            100% { transform: translateY(-20vh) scale(1.2); opacity: 0; }
          }

          .bubble {
            position: absolute;
            bottom: -20px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #ffffff, #D4AF37);
            box-shadow: 0 0 8px rgba(212, 175, 55, 0.3);
            animation: float-up infinite linear;
          }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(212,175,55,0.3)); transform: scale(1); }
            50% { filter: drop-shadow(0 0 25px rgba(212,175,55,0.7)); transform: scale(1.05); }
          }

          .animate-pulse-glow {
            animation: pulse-glow 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* The Luxurious Loading Screen */}
      <div 
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-all duration-[1200ms] ease-in-out"
      >
        {/* Dynamic Spotlight Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15)_0%,transparent_60%)] pointer-events-none" />
        
        {/* Champagne Bubbles System */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p, i) => (
            <div 
              key={i} 
              className="bubble"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: p.animationDuration,
                animationDelay: p.animationDelay,
                '--max-opacity': p.opacity
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-lg px-6">
          
          {/* Creative Circular Progress & Emblem Centerpiece */}
          <div className="relative w-56 h-56 flex items-center justify-center mb-10 group">
            
            {/* Background dashed ornamental ring */}
            <svg className="absolute inset-0 w-full h-full animate-[spin-slow_24s_linear_infinite]" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="76" fill="none" stroke="rgba(212,175,55,0.15)" strokeWidth="0.5" strokeDasharray="2 6" />
            </svg>

            {/* Main Progress Ring - Animates naturally with state */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 160 160">
              <circle 
                cx="80" 
                cy="80" 
                r={circleRadius} 
                fill="none" 
                stroke="url(#goldGradient)" 
                strokeWidth="1.5" 
                strokeLinecap="round"
                strokeDasharray={circleCircumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-500 ease-out"
                style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.5))' }}
              />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BF953F" />
                  <stop offset="50%" stopColor="#FCF6BA" />
                  <stop offset="100%" stopColor="#B38728" />
                </linearGradient>
              </defs>
            </svg>

            {/* Inner Floating Emblem */}
            <div className="relative flex flex-col items-center justify-center text-[#E6C875] animate-pulse-glow">
              <Wine strokeWidth={1} className="w-14 h-14 mb-2 opacity-90" />
              <div className="flex gap-3 items-center">
                <div className="w-4 h-[1px] bg-[#D4AF37]/50" />
                <UtensilsCrossed strokeWidth={1} className="w-5 h-5 opacity-70" />
                <Sparkles strokeWidth={1.5} className="w-4 h-4 opacity-90" />
                <div className="w-4 h-[1px] bg-[#D4AF37]/50" />
              </div>
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="text-4xl md:text-5xl font-serif-premium tracking-wide mb-6 text-center">
            <span className="gold-gradient-text">haus of veloura Events</span>
          </h1>

          {/* Dynamic Loading Message with Elegant Tracking */}
          <div className="h-8 relative overflow-hidden w-full flex justify-center mb-8 font-sans-elegant">
            {messages.map((msg, index) => (
              <p
                key={index}
                className={`absolute text-[#B3B3B3] text-xs md:text-sm tracking-[0.3em] uppercase transition-all duration-1000 ease-in-out ${
                  currentMessage === index 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : 'opacity-0 transform translate-y-6 scale-95'
                }`}
              >
                {msg}
              </p>
            ))}
          </div>

          {/* Minimalist Numeric Progress */}
          <div className="flex items-center gap-6 text-[#D4AF37] font-serif-premium text-lg opacity-90">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/40" />
            <span className="w-14 text-center tabular-nums italic tracking-wider">{Math.round(progress)}%</span>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/40" />
          </div>

        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
