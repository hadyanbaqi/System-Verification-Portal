
import React, { useState, useEffect } from 'react';

/**
 * App Component - Final Optimized Version
 * 
 * Features:
 * - Immediate progress bar animation (0-100% in 400ms)
 * - Delayed CTA entry (500ms fade-in, 600ms active)
 * - "Redirecting..." feedback on click
 * - 600ms post-click delay for maximum ad network compatibility
 * - Enhanced haptic feedback on CTA click
 */
const App: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const AD_LINK = "https://www.effectivegatecpm.com/andwp6bvj?key=cf4cf2b4095128df4f93401bee0f8baa";

  useEffect(() => {
    // 1. Progress Bar Animation: 0 to 100% in 400ms
    const startTime = Date.now();
    const duration = 400;
    
    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(100, (elapsed / duration) * 100);
      setProgress(nextProgress);
      
      if (nextProgress < 100) {
        requestAnimationFrame(animateProgress);
      }
    };
    requestAnimationFrame(animateProgress);

    // 2. CTA Fade-in at 500ms
    const timerFade = setTimeout(() => {
      setShowButton(true);
    }, 500);

    // 3. CTA Active (clickable) at 600ms
    const timerActive = setTimeout(() => {
      setIsClickable(true);
    }, 600);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerActive);
    };
  }, []);

  const triggerHaptic = () => {
    if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
      // Use a distinct "short tap" pattern: 10ms vibrate, 20ms pause, 10ms vibrate
      window.navigator.vibrate([10, 20, 10]);
    }
  };

  const handleContinue = () => {
    if (!isClickable || isRedirecting) return;
    
    setIsRedirecting(true);
    triggerHaptic(); // Enhanced haptic feedback
    
    // Final Version Redirect Logic: 600ms delay with text feedback
    setTimeout(() => {
      window.location.href = AD_LINK;
    }, 600);
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-[#FFFFFF] text-[#0F172A] select-none touch-none overflow-hidden font-sans">
      <div className="flex flex-col h-full w-full max-w-sm mx-auto px-6 py-8 sm:py-12 overflow-y-auto no-scrollbar">
        
        <div className="flex-grow flex flex-col items-center justify-center">
          
          {/* Headline Section */}
          <div className="mb-6 sm:mb-8 text-center w-full">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-[#0F172A]">
              Your Content Is Ready
            </h1>
            <p className="text-[#64748B] text-sm sm:text-base leading-relaxed">
              Optimized for your device. You may proceed.
            </p>
          </div>

          {/* Progress Box */}
          <div className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 mb-8 shadow-sm flex flex-col items-center">
            
            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-[#16A34A] rounded-full transition-all duration-75 ease-out" 
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Progress Percentage */}
            <div className="mb-3">
              <span className="font-mono text-xs font-bold text-[#16A34A] tracking-wider uppercase">
                {progress >= 100 ? '100% COMPLETE' : `${Math.floor(progress)}% OPTIMIZING`}
              </span>
            </div>

            {/* Status Text */}
            <div className="text-center">
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#64748B] font-semibold">
                {progress >= 100 ? 'OPTIMIZATION FINISHED' : 'PREPARING ASSETS...'}
              </p>
            </div>
          </div>

          {/* Primary Call to Action */}
          <div className="w-full transition-all duration-300" style={{ opacity: showButton ? 1 : 0 }}>
            <button 
              id="cta"
              onClick={handleContinue}
              disabled={!isClickable}
              className={`block w-full min-h-[56px] py-4 sm:py-5 font-bold rounded-xl text-base sm:text-lg text-center transition-all duration-200 shadow-lg touch-manipulation outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isRedirecting 
                  ? 'bg-[#1D4ED8] text-white opacity-90 cursor-default' 
                  : isClickable 
                    ? 'bg-[#2563EB] text-white active:bg-[#1D4ED8] active:scale-[0.98] shadow-blue-200' 
                    : 'bg-[#94A3B8] text-white cursor-not-allowed'
              }`}
              style={{ pointerEvents: isClickable ? 'auto' : 'none' }}
            >
              {isRedirecting ? 'Redirecting...' : 'Continue'}
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-8 pb-2 w-full text-center">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#94A3B8] font-mono leading-relaxed max-w-[280px] mx-auto opacity-70">
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
