"use client";

import { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

type ImageCarouselProps = {
  images: string[];
  autoPlayInterval?: number;
  className?: string;
};

export default function ImageCarousel({ 
  images, 
  autoPlayInterval = 3000, // Faster default transition
  className = "" 
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(0);

  // Auto-advance slides when autoplay is on
  useEffect(() => {
    if (!images.length || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [images, autoPlayInterval, isAutoPlaying]);

  // Navigation functions
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Threshold of 50px for swipe
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go next
        goToNext();
      } else {
        // Swipe right, go prev
        goToPrev();
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        goToNext();
        setIsAutoPlaying(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  // Don't render if no images
  if (!images.length) return null;

  // Variants for animation
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  return (
    <div 
      className={`relative w-full overflow-hidden rounded-xl shadow-2xl ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main image container */}
      <div className="relative aspect-[16/9] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout" custom={1}>
          <motion.div
            key={currentIndex}
            custom={1}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 }
            }}
            className="absolute inset-0"
          >
            {images[currentIndex].startsWith('data:image') || images[currentIndex].startsWith('http') ? (
              <div className="relative w-full h-full">
                <img
                  src={images[currentIndex]}
                  alt={`Carousel image ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                <span className="text-2xl font-bold">Image {currentIndex + 1}</span>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Image counter */}
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Controls that fade in on hover */}
      <div 
        className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button
          onClick={() => {
            goToPrev();
            setIsAutoPlaying(false);
          }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors transform hover:scale-110"
          aria-label="Previous image"
        >
          <FaChevronLeft size={24} />
        </button>
        
        <button
          onClick={() => {
            goToNext();
            setIsAutoPlaying(false);
          }}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors transform hover:scale-110"
          aria-label="Next image"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Bottom control bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
        <div className="flex items-center justify-between">
          {/* Play/Pause button */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isAutoPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
          </button>
          
          {/* Dots navigation */}
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 