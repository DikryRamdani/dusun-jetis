import { motion } from "framer-motion";

const OrgNode = ({
  title,
  detail,
  delay,
}: {
  title: string;
  detail: string;
  delay: number;
}) => (
  <motion.div
    className="bg-white rounded-2xl p-6 border-b-4 border-lime-500 shadow-[0_0_40px_-15px_rgba(0,0,0,0.1)] relative text-center w-full max-w-[280px] z-10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-500 text-white p-2 rounded-xl shadow-md">
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    </div>
    <h3 className="text-lg font-bold text-zinc-900 mt-2">{title}</h3>
    <p className="mt-2 text-zinc-500 text-sm leading-relaxed">{detail}</p>
  </motion.div>
);

export default function StrukturOrganisasiSection() {
  return (
    <div id="struktur-organisasi" className="w-full bg-zinc-50/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-lime-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="px-6 sm:px-10 lg:px-16 py-20 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lime-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Pemerintahan
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Struktur Organisasi Dusun
          </h2>
          <p className="mt-4 text-zinc-600 text-lg">
            Susunan kelembagaan yang mendukung pelayanan dan kegiatan warga
            Dusun Jetis.
          </p>
        </motion.div>

        {/* Tree Structure */}
        <div className="flex flex-col items-center w-full">
          {/* Level 1: Lurah */}
          <OrgNode
            title="Lurah"
            detail="Pimpinan pemerintahan di tingkat kelurahan"
            delay={0.1}
          />

          <div className="w-0.5 h-8 md:h-12 bg-lime-300"></div>

          {/* Level 2: Dukuh */}
          <OrgNode
            title="Dukuh"
            detail="Koordinator wilayah dusun dan pengayom warga"
            delay={0.2}
          />

          <div className="w-0.5 h-8 md:h-12 bg-lime-300"></div>

          {/* Level 3 Container */}
          <div className="relative w-full max-w-5xl">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-0 left-[16.66%] right-[16.66%] h-0.5 bg-lime-300"></div>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative pt-0 md:pt-10">
              {/* Level 3: Node 1 */}
              <div className="relative flex flex-col items-center w-full md:w-1/3">
                <div className="md:hidden w-0.5 h-8 bg-lime-300 -mt-8 mb-0"></div>
                <div className="hidden md:block absolute top-[-2.5rem] left-1/2 w-0.5 h-10 bg-lime-300"></div>
                <OrgNode
                  title="Ketua RT (RT 21 - 24)"
                  detail="Penghubung layanan dan kegiatan warga di tingkat RT"
                  delay={0.3}
                />
              </div>

              {/* Level 3: Node 2 */}
              <div className="relative flex flex-col items-center w-full md:w-1/3">
                <div className="md:hidden w-0.5 h-8 bg-lime-300 -mt-8 mb-0"></div>
                <div className="hidden md:block absolute top-[-2.5rem] left-1/2 w-0.5 h-10 bg-lime-300"></div>
                <OrgNode
                  title="Lembaga Kemasyarakatan"
                  detail="Pokgiat, PKK, Posyandu, Dasawisma, LINMAS, Karang Taruna, Kelompok Tani, Jaga Warga"
                  delay={0.4}
                />
              </div>

              {/* Level 3: Node 3 */}
              <div className="relative flex flex-col items-center w-full md:w-1/3">
                <div className="md:hidden w-0.5 h-8 bg-lime-300 -mt-8 mb-0"></div>
                <div className="hidden md:block absolute top-[-2.5rem] left-1/2 w-0.5 h-10 bg-lime-300"></div>
                <OrgNode
                  title="Organisasi Keagamaan"
                  detail="Takmir masjid dan kelompok kesenian"
                  delay={0.5}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
