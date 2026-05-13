import { motion } from "framer-motion";
import MapDesa from "../MapDesa";

export default function BatasDesaSection() {
  const batasWilayah = [
    { arah: "Utara", desa: "Laut Jawa" },
    { arah: "Selatan", desa: "Desa Segaran" },
    { arah: "Timur", desa: "Desa Baturaden dan Desa Karyabakti" },
    {
      arah: "Barat",
      desa: "Desa Telagajaya dan Desa Tanjung Pakis",
    },
  ];

  return (
    <div
      id="batas-desa"
      className="w-full px-6 sm:px-10 lg:px-16 py-16 bg-zinc-50"
    >
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-lime-500 font-semibold text-base tracking-widest uppercase mb-3">
          Wilayah
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
          Batas Desa Segarjaya
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-zinc-900 mb-6">
            Batas Wilayah
          </h3>
          <div className="space-y-4">
            {batasWilayah.map((batas) => (
              <div
                key={batas.arah}
                className="flex items-center gap-4 p-3 bg-zinc-50 rounded-lg"
              >
                <div className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">{batas.arah}</p>
                  <p className="text-zinc-600 text-sm">{batas.desa}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="bg-white rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-full min-h-75 bg-zinc-200 flex items-center justify-center">
            <div className="text-center p-8">
              <MapDesa />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
