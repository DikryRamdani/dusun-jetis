import { motion } from "framer-motion";

export default function ProfilKepalaDusunSection() {
  return (
    <div id="profil-kepala-dusun" className="w-full bg-white">
      <div className="px-6 sm:px-10 lg:px-16 py-16">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lime-500 font-semibold text-base tracking-widest uppercase mb-3">
            Kepemimpinan
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Profil Kepala Dusun
          </h2>
          <p className="mt-4 text-zinc-600">
            Informasi singkat mengenai pemimpin Dusun Jetis saat ini.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-zinc-50 rounded-2xl p-8 shadow-sm border border-zinc-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img
              src="/Image/Pak Dukuh dan peta_/IMG_9474.jpg"
              alt="Eka Wulanjari - Kepala Dusun Jetis"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover object-[center_-20px] border-4 border-lime-100 shadow-sm shrink-0"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-zinc-900">
                Eka Wulanjari
              </h3>
              <p className="text-lime-600 font-semibold mt-1">
                Kepala Dusun Jetis (Sejak 2019)
              </p>
              <p className="mt-4 text-zinc-600 leading-7">
                Lahir di Bantul pada 28 September 1982. Sebelum menjabat sebagai
                dukuh, beliau bekerja sebagai buruh masa. Dengan dukungan warga,
                beliau dipercaya memimpin Dusun Jetis dan mendorong pembangunan
                yang damai, rukun, serta menjunjung adat dan budaya lokal.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
