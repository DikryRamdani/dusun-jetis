import { motion } from "framer-motion";

interface LembagaItem {
  title: string;
  leader: string;
  description: string;
  activities: string[];
  image?: string;
}

export default function LembagaKemasyarakatanSection() {
  const lembaga: LembagaItem[] = [
    {
      title: "Kelompok Kegiatan (POKGIAT)",
      leader: "Bapak Mujiono",
      description:
        "Wadah partisipasi warga untuk merencanakan, melaksanakan, dan mengelola kegiatan pembangunan serta sosial kemasyarakatan.",
      activities: [
        "Pertemuan warga malam Jumat Kliwon",
        "Musyawarah kebutuhan dusun",
        "Pengelolaan inventaris dusun",
      ],
      image: "/Image/Klompok Kegiatan (POKGIAT)/IMG-20260501-WA0131.webp",
    },
    {
      title: "PKK Dusun",
      leader: "Pengurus PKK",
      description:
        "Organisasi pemberdayaan perempuan untuk meningkatkan kesejahteraan keluarga dan pelaksanaan program pokok PKK.",
      activities: [
        "Pertemuan rutin bulanan",
        "Edukasi keterampilan produktif",
        "Pengelolaan sampah dan kas umum",
      ],
      image: "/Image/PKK/IMG-20260501-WA0093.webp",
    },
    {
      title: "Posyandu",
      leader: "Bu Dukuh dan Kader Posyandu",
      description:
        "Layanan kesehatan dasar untuk balita, ibu, dan lansia yang dikelola secara terstruktur dan rutin.",
      activities: [
        "Penimbangan dan pengukuran balita",
        "Pemberian vitamin dan screening kesehatan",
        "Kunjungan rumah pasien",
      ],
    },
    {
      title: "Karang Taruna",
      leader: "Agus Nurhidayat (2023–2026)",
      description:
        "Organisasi kepemudaan yang aktif dalam kegiatan sosial, kepemudaan, dan pemberdayaan masyarakat.",
      activities: [
        "Kerja bakti dan kegiatan sosial",
        "Peringatan hari besar",
        "Program pemberdayaan pemuda",
      ],
    },
    {
      title: "Dasawisma",
      leader: "Koordinator Dasawisma",
      description:
        "Kelompok ibu-ibu per RT yang memperkuat hubungan sosial dan kegiatan kemasyarakatan.",
      activities: [
        "Arisan dan dana sosial",
        "Dukungan kegiatan warga",
        "Penguatan solidaritas RT",
      ],
    },
    {
      title: "Takmir Masjid",
      leader: "Pak Suwandi",
      description:
        "Pengelola kegiatan masjid dan aktivitas keagamaan di lingkungan dusun.",
      activities: [
        "Salat berjamaah dan pengajian",
        "Peringatan hari besar Islam",
        "Pembinaan kehidupan religius",
      ],
    },
    {
      title: "Kelompok Tani (POKTAN)",
      leader: "Bapak Wagio",
      description:
        "Organisasi petani untuk meningkatkan produktivitas dan kesejahteraan melalui kerja sama dan perencanaan bersama.",
      activities: [
        "Musyawarah pengelolaan lahan",
        "Koordinasi irigasi",
        "Peningkatan hasil pertanian",
      ],
    },
    {
      title: "Jaga Warga",
      leader: "Bapak Muhammad Iqbal Alfirdaus",
      description:
        "Mitra pemerintah dalam keamanan dan ketertiban lingkungan, termasuk tata tertib dusun.",
      activities: [
        "Pengawasan keamanan lingkungan",
        "Penyelesaian masalah sosial",
        "Sosialisasi tata tertib dusun",
      ],
    },
  ];

  return (
    <div id="lembaga-kemasyarakatan" className="w-full bg-white">
      <div className="px-6 sm:px-10 lg:px-16 py-16">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lime-500 font-semibold text-base tracking-widest uppercase mb-3">
            Lembaga Dusun
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Lembaga Kemasyarakatan
          </h2>
          <p className="mt-4 text-zinc-600">
            Struktur lembaga dan organisasi yang mendukung pembangunan
            partisipatif di Dusun Jetis.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {lembaga.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-zinc-50 rounded-2xl p-6 shadow-sm border border-zinc-200 hover:shadow-lg transition-shadow flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              {item.image && (
                <div className="w-full h-48 mb-6 overflow-hidden rounded-xl bg-zinc-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              )}
              <p className="text-lime-600 text-sm font-semibold uppercase tracking-wide">
                {item.leader}
              </p>
              <h3 className="text-xl font-bold text-zinc-900 mt-2">
                {item.title}
              </h3>
              <p className="text-zinc-600 mt-3 leading-7">
                {item.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {item.activities.map((activity) => (
                  <li key={activity} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lime-400" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
