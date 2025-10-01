import React, { useState, useEffect } from 'react';

const Carousel = ({ items, title, icon, gradient, autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && items.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isPlaying, items.length, interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false); // Stop auto-play when user manually navigates
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    setIsPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="relative">
      {/* Carousel Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div className="flex items-center space-x-3">
          <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
            {icon}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{title}</h2>
        </div>
        
        {/* Controls */}
        <div className="flex items-center space-x-3">
          {/* Play/Pause Button */}
          {items.length > 1 && (
            <button
              onClick={togglePlayPause}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          )}
          
          {/* Navigation Arrows */}
          {items.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                title="Previous"
              >
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                title="Next"
              >
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Carousel Content */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-200">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        {items.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 ease-out"
              style={{ 
                width: `${((currentIndex + 1) / items.length) * 100}%` 
              }}
            />
          </div>
        )}
      </div>

      {/* Dots Indicator */}
      {items.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {items.length > 1 && (
        <div className="text-center mt-3">
          <span className="text-sm text-slate-500">
            {currentIndex + 1} of {items.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default Carousel;
