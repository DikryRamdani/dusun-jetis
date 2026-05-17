import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/Image/Bengkel Andong Pak Hono_/DSC03541.webp", alt: "Bengkel Andong Pak Hono 1" },
  { src: "/Image/Bengkel Andong Pak Hono_/DSC03546.webp", alt: "Bengkel Andong Pak Hono 2" },
  { src: "/Image/Bengkel Andong Pandawa Lima_/DSC03564.webp", alt: "Bengkel Andong Pandawa Lima" },
  { src: "/Image/Klompok Kegiatan (POKGIAT)/IMG-20260501-WA0131.webp", alt: "POKGIAT 1" },
  { src: "/Image/Klompok Kegiatan (POKGIAT)/_storage_emulated_0_Android_media_com.whatsapp_WhatsApp_Media_WhatsApp Images_IMG-20260501-WA0175 (1).webp", alt: "POKGIAT 2" },
  { src: "/Image/Penggilingan Padi/DSC03556.webp", alt: "Penggilingan Padi 1" },
  { src: "/Image/Penggilingan Padi/DSC03557.webp", alt: "Penggilingan Padi 2" },
  { src: "/Image/PKK/IMG-20260501-WA0063.webp", alt: "PKK 1" },
  { src: "/Image/PKK/IMG-20260501-WA0093.webp", alt: "PKK 2" },
  { src: "/Image/Posyandu/IMG-20260426-WA0001.webp", alt: "Posyandu 1" },
  { src: "/Image/Posyandu/IMG-20260426-WA0002.webp", alt: "Posyandu 2" },
  { src: "/Image/SENTRA JAMU_/DSC03641.webp", alt: "Sentra Jamu 1" },
  { src: "/Image/SENTRA JAMU_/DSC03643.webp", alt: "Sentra Jamu 2" },
  { src: "/Image/Sentra Bibit Jamur/IMG_8471.webp", alt: "Sentra Bibit Jamur 1" },
  { src: "/Image/Sentra Bibit Jamur/IMG_8475.webp", alt: "Sentra Bibit Jamur 2" },
];

export default function Galeri() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const toggleZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  return (
    <section className="w-full bg-zinc-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden -mt-[60px] pt-[60px]">
        {/* Background Image */}
        <img
          src="/Image/heroSection.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/10" />
        {/* Smooth fade to the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-b from-transparent to-zinc-50" />
        

      </section>

      {/* Gallery Header */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lime-500 font-semibold text-base tracking-widest uppercase mb-3">
            Dokumentasi
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Galeri Dusun Jetis
          </h2>
          <p className="mt-4 text-zinc-600 text-lg">
            Potret kehidupan, kegiatan, dan pesona Dusun Jetis yang terabadikan dalam lensa.
          </p>
        </motion.div>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl cursor-pointer group break-inside-avoid shadow-sm hover:shadow-xl transition-shadow bg-zinc-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
              onClick={() => handleImageClick(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-zinc-900 p-2 rounded-full backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-[60] bg-black/20 rounded-full hover:bg-black/40 transition-colors"
              onClick={closeLightbox}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <motion.div 
              className={`relative max-w-full max-h-full flex items-center justify-center overflow-auto ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={toggleZoom}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className={`transition-transform duration-300 ease-out origin-center select-none ${isZoomed ? 'scale-150 sm:scale-[2]' : 'scale-100 max-h-[85vh] object-contain rounded-lg shadow-2xl'}`}
              />
            </motion.div>
            
            {/* Helper Text */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm pointer-events-none">
              Klik gambar untuk {isZoomed ? 'memperkecil' : 'memperbesar'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
