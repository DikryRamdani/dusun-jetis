// replaced Image component with native <img>
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProfilSection() {
  return (
    <section
      id="profil"
      className="w-full bg-zinc-100 min-h-screen flex items-center"
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.08,
                    ease: [0.22, 0.8, 0.2, 1],
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <img
                    src="/Image/Posyandu/IMG-20260426-WA0033.webp"
                    alt="Dusun Jetis 1"
                    className="w-full h-52 lg:h-60 object-cover"
                  />
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.28,
                    ease: [0.22, 0.8, 0.2, 1],
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <img
                    src="/Image/Bengkel Andong Pandawa Lima_/DSC03564.webp"
                    alt="Dusun Jetis 2"
                    className="w-full h-52 lg:h-60 object-cover"
                  />
                </motion.div>
              </div>

              <div className="space-y-4 pt-10">
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.18,
                    ease: [0.22, 0.8, 0.2, 1],
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <img
                    src="/Image/Sentra Bibit Jamur/IMG_8471.webp"
                    alt="Dusun Jetis 3"
                    className="w-full h-52 lg:h-60 object-cover"
                  />
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.38,
                    ease: [0.22, 0.8, 0.2, 1],
                  }}
                  style={{ willChange: "transform, opacity" }}
                >
                  <img
                    src="/Image/Penggilingan Padi/DSC03556.webp"
                    alt="Dusun Jetis 4"
                    className="w-full h-52 lg:h-60 object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Decoration */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: 0.6,
                ease: [0.22, 0.8, 0.2, 1],
              }}
              style={{ willChange: "transform, opacity" }}
            >
              <div className="w-20 h-20 bg-lime-400 rounded-full shadow-lg border-[7px] border-white" />
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.65,
              delay: 0.28,
              ease: [0.22, 0.8, 0.2, 1],
            }}
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-lime-500 font-semibold text-base tracking-widest uppercase mb-3">
              Tentang Kami
            </p>

            <h3 className="text-4xl lg:text-5xl font-bold text-zinc-900">
              Dusun Jetis
            </h3>

            <p className="mt-5 text-zinc-600 leading-8 text-lg">
              Dusun Jetis yang terletak di Patalan, Bantul, menyimpan 
              potensi sejarah dan kemandirian ekonomi yang kuat. Dengan keramahan 
              warganya, dusun ini terus berkembang mengelola warisan budaya, 
              kerajinan roda tradisional, hingga program pemberdayaan masyarakat yang 
              inovatif dan saling menguatkan.
            </p>

            <Link
              to="/profil"
              className="mt-8 inline-flex items-center gap-2 bg-lime-400 text-white px-7 py-3.5 rounded-lg font-medium text-lg hover:bg-lime-500 transition"
            >
              Baca Selengkapnya
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
