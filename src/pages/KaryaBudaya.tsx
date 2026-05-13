import { motion } from "framer-motion";
import { PotensiEkonomiSection } from "../components/profileSection";

interface KegiatanItem {
  title: string;
  category: string;
  origin?: string;
  description: string;
}

export default function KaryaBudaya() {
  const kegiatan: KegiatanItem[] = [
    {
      title: "Gotong Royong & Kerja Bakti",
      category: "Lingkungan",
      origin: "Akar budaya masyarakat agraris Jetis yang terus hidup dan dipertahankan sejak awal mula terbentuknya dusun.",
      description: "Kerja bakti rutin membersihkan selokan dan lingkungan sekitar dengan semangat kebersamaan antar warga.",
    },
    {
      title: "Transformasi Area 'Kalangan' (RT 24)",
      category: "Pemberdayaan Sosial",
      origin: "Dahulu dikenal sebagai 'Kalangan', tempat kegiatan mengadu ayam pada masa lalu. Kini area tersebut bertransformasi menjadi ruang kegiatan positif seiring berkembangnya kesadaran sosial warga.",
      description: "Wilayah RT 24 yang sarat akan sejarah sosial, kini aktif mendukung berbagai program pemberdayaan dan kegiatan kemasyarakatan modern Dusun Jetis.",
    },
    {
      title: "Syawalan dan Ramadhan",
      category: "Kegiatan Keagamaan",
      origin: "Warisan religius turun-temurun untuk mempererat silaturahmi antar warga yang terus digalakkan oleh takmir dan pemuka agama.",
      description: "Silaturahmi pasca Idul Fitri, pengajian, serta kegiatan Ramadhan yang menjaga keharmonisan warga Dusun Jetis.",
    },
    {
      title: "Pelestarian Mainan Tradisional",
      category: "Budaya",
      description: "Mengajak anak-anak memainkan permainan tradisional agar budaya lokal tetap lestari di tengah gempuran digitalisasi.",
    },
    {
      title: "Mitigasi Bencana & Pemilahan Sampah",
      category: "Lingkungan & Keselamatan",
      description: "Sosialisasi kesiapsiagaan bencana bersama BPBD dan edukasi pemilahan sampah rumah tangga.",
    },
    {
      title: "Lomba Anak-anak & Fun Learning",
      category: "Edukasi Anak",
      description: "Kegiatan belajar kreatif, ecoprint, pemutaran film edukatif, dan perlombaan HUT RI untuk meningkatkan kreativitas anak.",
    },
    {
      title: "Kelompok Wanita Tani (KWT)",
      category: "Pemberdayaan Ekonomi",
      description: "Sosialisasi pertanian dan pengolahan hasil tani bagi ibu-ibu untuk memperkuat ekonomi keluarga selaras dengan potensi agrikultur dusun.",
    },
    {
      title: "Digitalisasi Desa (Data & Sosmed)",
      category: "Administrasi Modern",
      description: "Pendataan penduduk ke format digital serta pembuatan akun media digital sebagai sarana informasi dusun.",
    },
  ];

  return (
    <section className="w-full bg-zinc-100">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mt-[60px] pt-[60px]">
        {/* Background Image */}
        <img
          src="public/image/heroSection.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
        {/* Smooth fade to the next section (white) */}
        <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Title Section
      <section className="bg-white py-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-lime-600 tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Karya & Budaya
          </motion.h1>
          <motion.p
            className="text-zinc-600 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Menyelami denyut nadi kehidupan Dusun Jetis melalui potensi ekonomi lokal dan semangat kegiatan sosial warganya yang mengakar kuat pada sejarah.
          </motion.p>
        </div>
      </section> */}

      {/* Potensi Ekonomi Section */}
      <PotensiEkonomiSection />

      {/* Kegiatan Dusun Section */}
      <section id="kegiatan-dusun" className="px-6 sm:px-10 lg:px-16 py-20 bg-zinc-50 relative border-t border-zinc-200">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lime-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Budaya Sosial
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Dinamika Kegiatan Warga
          </h2>
          <p className="mt-4 text-zinc-600 text-lg">
            Dari pelestarian warisan masa lalu hingga inovasi pemberdayaan masyarakat modern.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {kegiatan.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 hover:shadow-lg transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-lime-600 text-sm font-semibold uppercase tracking-wide">
                {item.category}
              </p>
              <h3 className="text-xl font-bold text-zinc-900 mt-2">
                {item.title}
              </h3>

              {item.origin && (
                <div className="mt-4 bg-zinc-50 rounded-xl p-4 border border-zinc-100 flex gap-3 items-start">
                  <svg className="w-5 h-5 text-zinc-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-zinc-600 text-sm leading-relaxed italic">
                    <span className="font-semibold not-italic text-zinc-700">Sejarah & Nilai: </span>
                    {item.origin}
                  </p>
                </div>
              )}

              <p className="text-zinc-600 mt-4 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
