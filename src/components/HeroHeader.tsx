// replaced Image component with native <img>
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroHeaderProps {
  backgroundImage?: string;
  backgroundVideo?: string;
  label: string;
  title: string;
  description?: string;
  children?: ReactNode; // untuk tombol atau konten tambahan
  height?: "full" | "half"; // full screen atau setengah
}

export default function HeroHeader({
  backgroundImage,
  backgroundVideo,
  label,
  title,
  description,
  children,
  height = "half",
}: HeroHeaderProps) {
  const heightClass =
    height === "full" ? "h-screen min-h-[500px]" : "h-[50vh] min-h-[400px]";

  return (
    <section
      className={`relative ${heightClass} overflow-hidden -mt-[60px] pt-[60px]`}
    >
      {/* Background */}
      {backgroundVideo ? (
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <video
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.p
              className="text-lime-400 font-medium text-sm tracking-wide uppercase mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {label}
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                className="mt-4 text-lg text-zinc-200 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {description}
              </motion.p>
            )}

            {children && (
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                {children}
              </motion.div>
            )}
          </div>
        </div>
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
    </section>
  );
}
