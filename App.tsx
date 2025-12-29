
import React from 'react';

/**
 * App Component
 * 
 * A high-fidelity, mobile-first system verification landing page.
 * Optimized for responsiveness and high-conversion via a single direct CTA.
 * Adheres to a minimalist, developer-centric aesthetic.
 */
const App: React.FC = () => {
  const handleHaptic = (intensity: number) => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(intensity);
    }
  };

  const AD_LINK = "https://www.effectivegatecpm.com/andwp6bvj?key=cf4cf2b4095128df4f93401bee0f8baa";

  return (
    <div className="fixed inset-0 flex flex-col bg-[#FFFFFF] text-[#0F172A] select-none touch-none overflow-hidden">
      {/* 
        The "fixed inset-0" ensures the container takes the full visual viewport, 
        handling mobile browser address bar quirks better than 100vh.
      */}
      
      <div className="flex flex-col h-full w-full max-w-sm mx-auto px-6 py-8 sm:py-12 overflow-y-auto no-scrollbar">
        {/* 
          Main Content Wrapper - centered content with footer naturally positioned.
        */}
        <div className="flex-grow flex flex-col items-center justify-center">
          
          {/* System Status Label */}
          <div className="mb-3 text-center">
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#64748B] opacity-80">
              SYSTEM STATUS
            </span>
          </div>

          {/* Headline Section */}
          <div className="mb-6 sm:mb-8 text-center w-full">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 break-words">
              Your Device Is Eligible
            </h1>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Verification required to continue.
            </p>
          </div>

          {/* System Checklist Section */}
          <div className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 sm:p-6 mb-8 shadow-sm">
            <ul className="font-mono text-[10px] sm:text-[12px] space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <span className="text-[#16A34A] font-bold mr-3 mt-0.5 shrink-0">[OK]</span>
                <span className="text-[#334155] uppercase leading-tight tracking-wide">
                  Device compatibility verified
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#16A34A] font-bold mr-3 mt-0.5 shrink-0">[OK]</span>
                <span className="text-[#334155] uppercase leading-tight tracking-wide">
                  Mobile access enabled
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#16A34A] font-bold mr-3 mt-0.5 shrink-0">[OK]</span>
                <span className="text-[#334155] uppercase leading-tight tracking-wide">
                  Secure connection established
                </span>
              </li>
            </ul>
          </div>

          {/* Primary Call to Action - Standard <a> for best redirect compatibility */}
          <div className="w-full">
            <a 
              href={AD_LINK}
              className="block w-full py-4 sm:py-5 bg-[#2563EB] text-white font-bold rounded-xl text-base sm:text-lg text-center no-underline active:bg-[#1D4ED8] active:scale-[0.98] transition-all duration-75 shadow-md touch-manipulation outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onPointerDown={() => handleHaptic(10)}
            >
              Continue Verification
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-8 pb-2 w-full text-center">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-mono leading-relaxed max-w-[280px] mx-auto">
            Information only. Proceed at your own discretion.
          </p>
        </footer>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
