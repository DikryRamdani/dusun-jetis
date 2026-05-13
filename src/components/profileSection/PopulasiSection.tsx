import { motion } from "framer-motion";

export default function PopulasiSection() {
  const populasi = [
    { label: "Total Penduduk", value: "6.883", icon: "👥" },
    { label: "Kepala Keluarga", value: "2.414", icon: "🏠" },
    { label: "Laki-laki", value: "3.381", icon: "👨" },
    { label: "Perempuan", value: "3.502", icon: "👩" },
  ];

  return (
    <div
      id="populasi"
      className="w-full px-6 sm:px-10 lg:px-16 py-16 bg-zinc-50"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {populasi.map((item, index) => (
          <motion.div
            key={item.label}
            className="bg-white rounded-2xl p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-4xl mb-3 block">{item.icon}</span>
            <p className="text-3xl font-bold text-lime-500">{item.value}</p>
            <p className="text-zinc-600 mt-2">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
