// replaced Image component with native <img>
import { motion } from "framer-motion";

interface AnimatedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  delay?: number;
  hoverScale?: boolean;
}

export default function AnimatedImage({
  src,
  alt,
  width = 800,
  height = 600,
  fill = false,
  className = "object-cover",
  containerClassName = "",
  delay = 0,
  hoverScale = true,
}: AnimatedImageProps) {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden shadow-lg ${containerClassName}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay }}
      whileHover={hoverScale ? { scale: 1.03 } : undefined}
    >
      {fill ? (
        <img
          src={src}
          alt={alt}
          className={`${className} ${hoverScale ? "hover:scale-105 transition-transform duration-500" : ""} absolute inset-0 w-full h-full object-cover`}
        />
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full ${className} ${hoverScale ? "hover:scale-105 transition-transform duration-500" : ""}`}
        />
      )}
    </motion.div>
  );
}
