import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative h-screen min-h-[500px] md:min-h-150 overflow-hidden -mt-[60px] pt-[60px]"
    >
      {/* Background Video with zoom animation */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 0.8, 0.2, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        <video
          src="/video/VidProfilDesa.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.p
              className="text-lime-400 font-medium text-sm tracking-wide uppercase mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.28,
                ease: [0.22, 0.8, 0.2, 1],
              }}
              style={{ willChange: "transform, opacity" }}
            >
              Selamat Datang
            </motion.p>

            {/* Title */}
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease: [0.22, 0.8, 0.2, 1],
              }}
              style={{ willChange: "transform, opacity" }}
            >
              Dusun Jetis
            </motion.h2>

            {/* Description */}
            <motion.p
              className="mt-4 text-lg text-zinc-200 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.68,
                ease: [0.22, 0.8, 0.2, 1],
              }}
              style={{ willChange: "transform, opacity" }}
            >
              Dusun Jetis adalah dusun yang asri dan sarat akan sejarah budaya, 
              dengan masyarakat yang menjunjung tinggi semangat gotong royong 
              dan kemandirian ekonomi.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom fade to content */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-zinc-100 to-transparent pointer-events-none"></div>
    </section>
  );
}
