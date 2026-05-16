import { motion } from "framer-motion";

export default function Contact() {
  const kontakInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      judul: "WhatsApp Bapak Eka Wulanjari",
      detail: "Kepala Dusun — (+62) 898-5513-942",
      link: "https://wa.me/628985513942?text=Halo%20Bapak%20Eka%20Wulanjari%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20dusun.",
      linkText: "Chat WhatsApp",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
      judul: "Email",
      detail: "dusunjetispatalan@gmail.com",
      link: "mailto:dusunjetispatalan@gmail.com",
      linkText: "Kirim Email",
    },
  ];

  const jamOperasional = [
    { hari: "Senin - Kamis", jam: "08:00 - 15:00 WIB" },
    { hari: "Jumat", jam: "08:00 - 11:00 WIB" },
    { hari: "Sabtu - Minggu", jam: "Tutup" },
  ];

  // const layanan = [
  // 	"Surat Pengantar KTP/KK",
  // 	"Surat Keterangan Domisili",
  // 	"Surat Keterangan Usaha",
  // 	"Surat Keterangan Tidak Mampu",
  // 	"Legalisir Dokumen",
  // 	"Pendaftaran Penduduk Baru",
  // ];

  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mt-[60px] pt-[60px]">
        {/* Background Image */}
        <img
          src="public/image/heroSection.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle black gradient overlay (like profil hero) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />

        {/* Smooth fade to the next section (white) */}
        <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Informasi Kontak (contact list stacked + jam operasional on the side) */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lime-600 font-semibold text-sm tracking-widest uppercase mb-3">
              Hubungi Kami
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
              Kontak & Informasi Layanan
            </h2>
            <p className="mt-4 text-zinc-600">
              Untuk respon lebih cepat, silakan hubungi petugas desa melalui
              WhatsApp.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Centered kontak cards (stacked vertically, up to any number) */}
            <div className="md:col-span-3 flex flex-col gap-6 items-center">
              {kontakInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 hover:shadow-lg hover:border-lime-300 transition-all w-full max-w-3xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center text-lime-600 mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                    {info.judul}
                  </h3>
                  <p className="text-zinc-600 text-sm mb-4">{info.detail}</p>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lime-600 hover:text-lime-700 font-medium text-sm"
                  >
                    {info.linkText}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Right: Jam Operasional */}
            <motion.div
              className="md:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-zinc-200"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center text-lime-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900">
                  Jam Operasional
                </h3>
              </div>
              <div className="space-y-4">
                {jamOperasional.map((jadwal, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-zinc-100 last:border-0"
                  >
                    <span className="text-zinc-700 font-medium">
                      {jadwal.hari}
                    </span>
                    <span
                      className={`font-semibold ${jadwal.jam === "Tutup" ? "text-red-500" : "text-lime-500"}`}
                    >
                      {jadwal.jam}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
