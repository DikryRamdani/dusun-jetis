import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  lightMode?: boolean; // untuk background gelap
}

export default function SectionHeader({
  label,
  title,
  description,
  centered = false,
  lightMode = false,
}: SectionHeaderProps) {
  const containerClass = centered ? "text-center max-w-3xl mx-auto" : "";

  const labelColor = lightMode ? "text-lime-200" : "text-lime-600";
  const titleColor = lightMode ? "text-white" : "text-zinc-900";
  const descColor = lightMode ? "text-zinc-200" : "text-zinc-600";

  return (
    <div className={containerClass}>
      <motion.p
        className={`${labelColor} font-semibold text-sm tracking-widest uppercase mb-2`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 0.8, 0.2, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        {label}
      </motion.p>
      <motion.h3
        className={`text-3xl lg:text-4xl font-bold ${titleColor}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 0.8, 0.2, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        {title}
      </motion.h3>
      {description && (
        <motion.p
          className={`mt-4 ${descColor} leading-7 max-w-2xl ${centered ? "mx-auto" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 0.8, 0.2, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
