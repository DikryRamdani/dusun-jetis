import { motion } from "framer-motion";

export default function JamOperasionalSection() {
  const jadwalOperasional = [
    { hari: "Senin - Kamis", jam: "08:00 - 15:00 WIB" },
    { hari: "Jumat", jam: "08:00 - 11:00 WIB" },
    { hari: "Sabtu - Minggu", jam: "Libur" },
  ];

  return (
    <div
      id="jam-operasional"
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
          Layanan
        </p>
        <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
          Jam Operasional Kantor Desa
        </h2>
      </motion.div>
      <motion.div
        className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="space-y-4">
          {jadwalOperasional.map((jadwal) => (
            <div
              key={jadwal.hari}
              className={`flex items-center justify-between p-4 rounded-lg ${jadwal.jam === "Libur" ? "bg-zinc-100" : "bg-lime-50"}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${jadwal.jam === "Libur" ? "bg-zinc-300" : "bg-lime-400"}`}
                >
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-zinc-900">
                  {jadwal.hari}
                </span>
              </div>
              <span
                className={`font-medium ${jadwal.jam === "Libur" ? "text-zinc-500" : "text-lime-600"}`}
              >
                {jadwal.jam}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-zinc-500 text-sm">
          * Jam operasional dapat berubah pada hari libur nasional
        </p>
      </motion.div>
    </div>
  );
}
