import { motion } from "framer-motion";

export default function VisiMisiSection() {
  const misiItems = [
    "Menjalankan serta melestarikan adat istiadat dan budaya sebaik mungkin.",
    "Memanfaatkan serta mengembangkan potensi dusun.",
    "Mengutamakan musyawarah mufakat dalam pengambilan keputusan Dusun.",
    "Senantiasa bergotong royong dalam pembangunan dusun.",
  ];

  return (
    <div id="visi-misi" className="w-full bg-zinc-50">
      <div className="px-6 sm:px-10 lg:px-16 py-16">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lime-500 font-semibold text-base tracking-widest uppercase mb-3">
            Arah Pembangunan
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Visi & Misi Desa
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="bg-lime-400 rounded-2xl p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Visi</h3>
            <p className="text-lg leading-8 text-lime-50">
              &quot;Mewujudkan masyarakat yang demokratis, rukun, aman serta
              memegang teguh adat istiadat dan budaya dengan beradaptasi sesuai
              perkembangan zaman.&quot;
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-2xl p-8 border border-zinc-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">Misi</h3>
            <ul className="space-y-3">
              {misiItems.map((misi, i) => (
                <li key={misi} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-lime-400 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-zinc-700 leading-7">{misi}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
