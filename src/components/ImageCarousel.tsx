// replaced Image component with native <img>
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import type { TouchEvent } from "react";

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
  aspect?: string; // e.g. "aspect-[16/9]"
  autoScrollInterval?: number; // ms
}

export default function ImageCarousel({
  images,
  aspect = "aspect-[16/9]",
  autoScrollInterval,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const minSwipeDistance = 50;

  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  // Track visibility for auto-scroll
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScrollInterval || !isInView) return;
    const interval = setInterval(() => {
      next();
    }, autoScrollInterval);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoScrollInterval, images.length, isInView]);

  // Touch handlers
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) next();
    else if (distance < -minSwipeDistance) prev();
  };

  return (
    <div className="relative w-full mx-auto" ref={containerRef}>
      <div
        className={`overflow-hidden rounded-2xl shadow-lg bg-zinc-200 ${aspect}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative"
          >
            <img
              src={images[current].src}
              alt={images[current].alt}
              className="absolute inset-0 w-full h-full object-cover select-none"
              draggable={false}
            />
            {images[current].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  {images[current].caption}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Controls */}
      <button
        aria-label="Sebelumnya"
        onClick={prev}
        className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-zinc-700 rounded-full p-2 shadow transition"
        style={{ zIndex: 2 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        aria-label="Selanjutnya"
        onClick={next}
        className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-zinc-700 rounded-full p-2 shadow transition"
        style={{ zIndex: 2 }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full ${idx === current ? "bg-lime-500/80" : "bg-zinc-400/50"} transition`}
            aria-label={`Pilih gambar ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
