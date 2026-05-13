import { motion } from "framer-motion";

interface PotensiItem {
  title: string;
  description: string;
}

export default function PotensiDesaSection() {
  const potensiData: PotensiItem[] = [
    {
      title: "Pertanian",
      description:
        "Lahan subur untuk padi dengan sistem irigasi lokal sebagai sumber pangan utama dan peluang agribisnis bagi warga.",
    },
    {
      title: "Tambak",
      description:
        "Budidaya bandeng dan udang di tambak tradisional, menyokong ekonomi perikanan setempat.",
    },
    {
      title: "Pantai Pulau Putri",
      description:
        "Pantai berpasir dengan pemandangan laut yang menarik untuk wisata, rekreasi, dan kegiatan ekonomi kreatif.",
    },
    {
      title: "Sekam Bakar",
      description:
        "Pengolahan sekam padi menjadi pupuk dan media tanam, mengubah limbah menjadi nilai tambah.",
    },
    {
      title: "Majelis Ta'lim Ar-Ridho",
      description:
        "Pusat kegiatan keagamaan dan sosial yang memperkuat pendidikan agama.",
    },
    {
      title: "Rumah Dodol",
      description: "Industri rumah tangga pembuatan dodol tradisional.",
    },
  ];

  return (
    <div id="potensi-desa" className="w-full bg-white">
      <div className="px-6 sm:px-10 lg:px-16 py-16">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lime-500 font-semibold text-base tracking-widest uppercase mb-3">
            Potensi Unggulan
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Potensi Desa Segarjaya
          </h2>
          <p className="mt-4 text-zinc-600">
            Berbagai potensi yang menjadi keunggulan dan sumber penghasilan
            masyarakat desa.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {potensiData.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-zinc-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-zinc-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-2 text-zinc-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
