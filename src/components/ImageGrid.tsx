// replaced Image component with native <img>
import { motion } from "framer-motion";
import { useMemo } from "react";

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGridProps {
  images: ImageItem[];
  columns?: 2 | 3 | 4;
  featured?: number | "random"; // index gambar yang lebih besar, atau "random"
}

export default function ImageGrid({
  images,
  columns = 3,
  featured,
}: ImageGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
  };

  // Hitung featured index (random atau manual)
  const featuredIndex = useMemo(() => {
    if (featured === "random") {
      return Math.floor(Math.random() * images.length);
    }
    return featured;
  }, [featured, images.length]);

  const hasFeatured = featuredIndex !== undefined;

  // Aspect ratio tailwind (16:9 untuk normal, 32:9 untuk featured)
  const aspectNormal = "aspect-[16/9]";
  const aspectFeatured = "aspect-[32/9]";

  return (
    <div
      className={`grid ${gridCols[columns]} gap-4`}
      style={hasFeatured ? { gridTemplateRows: "repeat(2, 200px)" } : undefined}
    >
      {images.map((image, index) => {
        const isFeatured = featuredIndex === index;
        return (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-2xl shadow-lg group ${isFeatured ? "col-span-2 row-span-2" : ""} ${isFeatured ? aspectFeatured : aspectNormal}`}
            style={!hasFeatured ? { height: "200px" } : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {image.caption && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white text-sm font-medium p-4">
                  {image.caption}
                </p>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
