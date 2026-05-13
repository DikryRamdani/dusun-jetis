import { motion } from "framer-motion";

interface PotensiEkonomiItem {
  title: string;
  subtitle: string;
  origin: string;
  description: string;
  highlights: string[];
}

export default function PotensiEkonomiSection() {
  const potensiEkonomi: PotensiEkonomiItem[] = [
    {
      title: "Bengkel Andong Pandawa Lima",
      subtitle: "Kerajinan transportasi tradisional",
      origin: "Berawal dari perajin ahli Jokteng yang diundang dukuh pertama, memunculkan julukan 'Jetis Pande'.",
      description:
        "Usaha turun-temurun yang melayani pembuatan dan reparasi andong, termasuk kereta tradisional. Keahlian dirawat melalui pengalaman dan standar kerja tradisi yang ketat.",
      highlights: [
        "Pembuatan dan reparasi andong",
        "Jejak sejarah kereta tradisional",
        "Pemasaran berbasis rekomendasi",
      ],
    },
    {
      title: "Bengkel Andong Pak Hono",
      subtitle: "Jasa perbaikan dan pembuatan andong",
      origin: "Meneruskan era kejayaan 'Jetis Roda', mempertahankan teknik manual pembuatan roda peninggalan leluhur.",
      description:
        "Salah satu bengkel andong terkemuka di Dusun Jetis yang meneruskan tradisi kerajinan roda dan transportasi tradisional. Melayani reparasi hingga pembuatan andong baru.",
      highlights: [
        "Reparasi andong tradisional",
        "Pembuatan roda dan gerobak",
        "Meneruskan warisan Jetis Pande",
      ],
    },
    {
      title: "Sentra Bibit Jamur",
      subtitle: "Produksi bibit jamur mandiri",
      origin: "Lahir dari semangat inovasi agrikultur warga untuk beradaptasi dengan kebutuhan pasar tani modern.",
      description:
        "Produksi bibit jamur dilakukan dengan proses sterilisasi, pembibitan, dan pengendalian kualitas agar hasil panen stabil dan siap dipasarkan ke pasar pertanian.",
      highlights: [
        "Proses sterilisasi log bibit",
        "Skala produksi rutin",
        "Distribusi ke pasar pertanian",
      ],
    },
    {
      title: "Sentra Jamu",
      subtitle: "Produk herbal rumahan",
      origin: "Berakar dari tradisi warga mengolah empon-empon pekarangan yang resepnya diwariskan secara turun-temurun.",
      description:
        "Produksi jamu tradisional seperti seruni dan kunyit asam dengan bahan empon-empon lokal. Diolah secara terbatas agar tetap segar dan berkualitas.",
      highlights: [
        "Bahan baku empon-empon",
        "Pengolahan manual dan segar",
        "Izin UMKM dan pasar lokal",
      ],
    },
    {
      title: "Penggilingan Padi",
      subtitle: "Layanan pengolahan hasil panen",
      origin: "Evolusi dari sejarah panjang masyarakat Jetis yang mayoritas berprofesi sebagai petani sejak zaman dahulu.",
      description:
        "Penggilingan padi melayani warga dusun dan desa sekitar. Proses meliputi pengupasan hingga menjadi beras siap konsumsi dengan mesin yang terus diperbarui.",
      highlights: [
        "Melayani lintas desa",
        "Operasional mengikuti musim panen",
        "Dukungan ketahanan pangan",
      ],
    },
  ];

  return (
    <div id="potensi-ekonomi" className="w-full bg-white relative">
      <div className="px-6 sm:px-10 lg:px-16 py-16 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lime-500 font-semibold text-base tracking-widest uppercase mb-3">
            Potensi Ekonomi
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Kekuatan Usaha Lokal
          </h2>
          <p className="mt-4 text-zinc-600">
            Ragam usaha dan kegiatan ekonomi lokal yang menjadi penggerak
            kesejahteraan masyarakat Dusun Jetis.
          </p>
        </motion.div>

        {/* Highlight Card Sejarah */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl p-8 border border-lime-100 shadow-sm relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute top-[-20%] right-[-5%] p-8 opacity-5 pointer-events-none">
            <svg className="w-64 h-64 text-lime-900" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
          </div>
          <h3 className="text-xl font-bold text-lime-900 mb-3 relative z-10">Warisan Jetis Pande & Jetis Roda</h3>
          <p className="text-lime-800 leading-relaxed relative z-10">
            Akar perekonomian Dusun Jetis telah tumbuh sejak lama. Bermula dari kedatangan perajin andong dari wilayah Jokteng di masa kepemimpinan dukuh pertama, dusun ini perlahan dikenal luas sebagai <strong>Jetis Pande</strong> dan <strong>Jetis Roda</strong>—pusat pembuatan roda dan reparasi andong tradisional. Semangat kemandirian ini terus diwariskan hingga melahirkan berbagai potensi usaha inovatif di masa kini.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {potensiEkonomi.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-zinc-50 rounded-2xl p-6 shadow-sm border border-zinc-100 hover:shadow-lg transition-all hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <p className="text-lime-600 text-sm font-semibold uppercase tracking-wide">
                {item.subtitle}
              </p>
              <h3 className="text-xl font-bold text-zinc-900 mt-2">
                {item.title}
              </h3>
              
              {/* Origin Badge */}
              <div className="mt-4 bg-lime-100/50 rounded-xl p-4 border border-lime-100 flex gap-3 items-start">
                <svg className="w-5 h-5 text-lime-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477-4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <p className="text-lime-800 text-sm leading-relaxed italic">
                  <span className="font-semibold not-italic">Asal-usul: </span>
                  {item.origin}
                </p>
              </div>

              <p className="text-zinc-600 mt-4 leading-relaxed">
                {item.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-zinc-700">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-lime-500 shrink-0" />
                    <span>{highlight}</span>
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
