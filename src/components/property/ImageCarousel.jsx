import { useState, useEffect, useRef, useCallback } from 'react';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const autoplayDuration = 5000;
  const transitionDuration = 600;
  const minSwipeDistance = 50;

  // Preload de imágenes
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Navegar a slide anterior
  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning, images.length]);

  // Navegar a slide siguiente
  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning, images.length]);

  // Ir a un slide específico
  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setProgress(0);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), transitionDuration);
  }, [isTransitioning, currentIndex]);

  // Autoplay con barra de progreso
  useEffect(() => {
    if (images.length <= 1 || isPaused) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / autoplayDuration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        goToNext();
      } else {
        progressRef.current = requestAnimationFrame(animate);
      }
    };

    progressRef.current = requestAnimationFrame(animate);

    return () => {
      if (progressRef.current) {
        cancelAnimationFrame(progressRef.current);
      }
    };
  }, [currentIndex, isPaused, images.length, goToNext]);

  // Touch handlers para swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e) => {
    if (!touchStart) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    const diff = currentTouch - touchStart;
    setDragOffset(diff * 0.3); // Movimiento suave durante el drag
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    setDragOffset(0);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Mouse drag handlers (para desktop)
  const onMouseDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const onMouseMove = (e) => {
    if (!isDragging || !touchStart) return;
    const currentPosition = e.clientX;
    setTouchEnd(currentPosition);
    const diff = currentPosition - touchStart;
    setDragOffset(diff * 0.3);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setDragOffset(0);
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  // Si solo hay una imagen
  if (images.length === 1) {
    return (
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  // Calcular índices
  const getImageIndex = (offset) => {
    return (currentIndex + offset + images.length) % images.length;
  };

  // Configuración de posiciones con animaciones mejoradas
  const getSlideStyle = (position) => {
    const baseStyle = {
      transition: isDragging
        ? 'none'
        : `all ${transitionDuration}ms cubic-bezier(0.32, 0.72, 0, 1)`,
      willChange: 'transform, opacity',
    };

    const offset = isDragging ? dragOffset : 0;

    const positions = {
      'far-left': {
        transform: `translateX(calc(-140% + ${offset}px)) scale(0.5) rotateY(25deg)`,
        opacity: 0.3,
        zIndex: 1,
        filter: 'brightness(0.5)',
      },
      'left': {
        transform: `translateX(calc(-70% + ${offset}px)) scale(0.75) rotateY(15deg)`,
        opacity: 0.6,
        zIndex: 2,
        filter: 'brightness(0.7)',
      },
      'center': {
        transform: `translateX(${offset}px) scale(1) rotateY(0deg)`,
        opacity: 1,
        zIndex: 10,
        filter: 'brightness(1)',
      },
      'right': {
        transform: `translateX(calc(70% + ${offset}px)) scale(0.75) rotateY(-15deg)`,
        opacity: 0.6,
        zIndex: 2,
        filter: 'brightness(0.7)',
      },
      'far-right': {
        transform: `translateX(calc(140% + ${offset}px)) scale(0.5) rotateY(-25deg)`,
        opacity: 0.3,
        zIndex: 1,
        filter: 'brightness(0.5)',
      },
    };

    return { ...baseStyle, ...positions[position] };
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        onMouseLeave();
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      style={{ perspective: '1500px', cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Contenedor 3D */}
      <div
        className="relative w-full h-full flex items-center justify-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Far Left */}
        <div
          className="absolute w-3/5 md:w-2/5 h-4/5 flex items-center justify-center pointer-events-none"
          style={getSlideStyle('far-left')}
        >
          <img
            src={images[getImageIndex(-2)]}
            alt={`${title} preview`}
            className="w-full h-full object-contain rounded-2xl"
            draggable={false}
          />
        </div>

        {/* Left */}
        <div
          className="absolute w-3/5 md:w-2/5 h-4/5 flex items-center justify-center cursor-pointer"
          style={getSlideStyle('left')}
          onClick={goToPrevious}
        >
          <img
            src={images[getImageIndex(-1)]}
            alt={`${title} previous`}
            className="w-full h-full object-contain rounded-2xl shadow-2xl"
            draggable={false}
          />
        </div>

        {/* Center - Main Image */}
        <div
          className="absolute w-4/5 md:w-3/5 h-[90%] flex items-center justify-center"
          style={getSlideStyle('center')}
        >
          <div className="relative w-full h-full">
            <img
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              className="w-full h-full object-contain rounded-2xl shadow-[0_25px_80px_-20px_rgba(0,0,0,0.7)]"
              draggable={false}
            />
            {/* Reflection effect */}
            <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-gray-900/80 to-transparent rounded-b-2xl" />
          </div>
        </div>

        {/* Right */}
        <div
          className="absolute w-3/5 md:w-2/5 h-4/5 flex items-center justify-center cursor-pointer"
          style={getSlideStyle('right')}
          onClick={goToNext}
        >
          <img
            src={images[getImageIndex(1)]}
            alt={`${title} next`}
            className="w-full h-full object-contain rounded-2xl shadow-2xl"
            draggable={false}
          />
        </div>

        {/* Far Right */}
        <div
          className="absolute w-3/5 md:w-2/5 h-4/5 flex items-center justify-center pointer-events-none"
          style={getSlideStyle('far-right')}
        >
          <img
            src={images[getImageIndex(2)]}
            alt={`${title} preview`}
            className="w-full h-full object-contain rounded-2xl"
            draggable={false}
          />
        </div>
      </div>

      {/* Edge gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-gray-900 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-gray-900 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 md:w-14 md:h-14 rounded-full
                   bg-white/10 hover:bg-white/25 backdrop-blur-md
                   border border-white/20 hover:border-white/40
                   text-white flex items-center justify-center
                   transition-all duration-300 ease-out
                   hover:scale-110 active:scale-95
                   shadow-lg hover:shadow-xl
                   disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous image"
        disabled={isTransitioning}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); goToNext(); }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 md:w-14 md:h-14 rounded-full
                   bg-white/10 hover:bg-white/25 backdrop-blur-md
                   border border-white/20 hover:border-white/40
                   text-white flex items-center justify-center
                   transition-all duration-300 ease-out
                   hover:scale-110 active:scale-95
                   shadow-lg hover:shadow-xl
                   disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next image"
        disabled={isTransitioning}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        {/* Progress Bar */}
        <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-white rounded-full transition-none"
            style={{
              width: `${progress}%`,
              transition: progress === 0 ? 'none' : 'width 100ms linear'
            }}
          />
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
              className={`rounded-full transition-all duration-300 ease-out
                ${index === currentIndex
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70 hover:scale-125'
                }`}
              aria-label={`Go to image ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 z-20
                      px-3 py-1.5 rounded-full
                      bg-black/40 backdrop-blur-md
                      border border-white/10
                      text-white text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute top-4 left-4 z-20
                        px-3 py-1.5 rounded-full
                        bg-black/40 backdrop-blur-md
                        border border-white/10
                        text-white text-sm font-medium
                        flex items-center gap-2
                        animate-fade-in">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
          Paused
        </div>
      )}

      {/* Swipe hint for mobile */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 md:hidden
                      text-white/50 text-xs flex items-center gap-1
                      animate-pulse">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Swipe to navigate
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  );
};

export default ImageCarousel;
