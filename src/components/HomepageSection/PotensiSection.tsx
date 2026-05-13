// replaced Image component with native <img>
import { useState, useEffect } from "react";
import type { TouchEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PotensiCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 639px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  const slides = [
    {
      title: "Penggilingan Padi",
      desc: "Mengolah hasil pertanian warga, Jetis memiliki layanan penggilingan padi yang membantu operasional musim panen dan mendukung ketahanan pangan lokal.",
      image: "/Image/Pertanian/PanoPT1.webp",
      imageMobile: "/Image/Mobile/PT_mobile.webp",
    },
    {
      title: "Sentra Bibit Jamur",
      desc: "Produksi bibit jamur mandiri yang dilakukan dengan proses sterilisasi dan pembibitan terkontrol agar hasil panen stabil dan siap diedarkan ke pasar pertanian.",
      image: "/Image/Tambak Ikan/PanoTI1.webp",
      imageMobile: "/Image/Mobile/TI_mobile.webp",
    },
    {
      title: "Bengkel Andong Pandawa Lima",
      desc: "Meneruskan jejak sejarah kereta tradisional dengan keahlian pembuatan roda dan reparasi andong turun-temurun ala Jetis Pande.",
      image: "/Image/Pantai Pulau Putri/PanoPPP1.webp",
      imageMobile: "/Image/Mobile/PPP_mobile.webp",
    },
    {
      title: "Bengkel Andong Pak Hono",
      desc: "Jasa perbaikan dan pembuatan andong yang terus mewarisi teknik tradisional manual sejak era keemasan Jetis Roda.",
      image: "/Image/Sekam Bakar/SB2.webp",
      imageMobile: "/Image/Mobile/SB_mobile.webp",
    },
    {
      title: "Sentra Jamu Tradisional",
      desc: "Mengolah tanaman empon-empon pekarangan menjadi produk jamu segar seperti kunyit asam dan seruni yang berkualitas dan menyehatkan.",
      image: "/Image/Rumah Dodol/PanoRD1.webp",
      imageMobile: "/Image/Mobile/RD_mobile.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Touch handlers for swipe
  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section id="potensi" className="relative">
      <div
        className="group relative h-screen min-h-[700px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Top curved divider */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0L1440 0L1440 60C1440 60 1320 120 720 120C120 120 0 60 0 60L0 0Z"
              fill="#f4f4f5"
            />
          </svg>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 transition-opacity duration-700 overflow-hidden">
          <img
            src={
              isMobile
                ? slides[currentSlide].imageMobile ?? slides[currentSlide].image
                : slides[currentSlide].image
            }
            alt={slides[currentSlide].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.p
                className="text-lime-400 font-medium text-sm tracking-wide uppercase mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Potensi Desa
              </motion.p>

              {/* Title with animation */}
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentSlide}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
              </AnimatePresence>

              {/* Stats removed per request */}

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${currentSlide}`}
                  className="mt-4 text-lg text-zinc-200 leading-relaxed max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {slides[currentSlide].desc}
                </motion.p>
              </AnimatePresence>

              {/* CTA Button */}
              {/* <a
							href="#galeri"
							className="mt-6 inline-flex items-center gap-2 bg-lime-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-lime-600 transition"
						>
							Lihat Galeri
							<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
							</svg>
						</a> */}
            </div>
          </div>
        </div>

        {/* Navigation Arrows - Only visible on desktop, slide in on hover */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-r-full items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0"
          aria-label="Previous slide"
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
          onClick={nextSlide}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-l-full items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0"
          aria-label="Next slide"
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? "w-10 h-4 bg-white/70"
                  : "w-4 h-4 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom curved divider */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L1440 120L1440 60C1440 60 1320 0 720 0C120 0 0 60 0 60L0 120Z"
              fill="#f4f4f5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
