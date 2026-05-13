import { motion } from "framer-motion";

export default function SejarahSection() {
  return (
    <div id="sejarah" className="w-full bg-white">
      <div className="px-6 sm:px-10 lg:px-16 py-16">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lime-500 font-semibold text-base tracking-widest uppercase mb-3">
            Sejarah
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-zinc-900">
            Sejarah Dusun Jetis
          </h2>
        </motion.div>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative pl-8 border-l-4 border-lime-400">
            <div className="mb-8">
              <div className="absolute -left-3 w-6 h-6 bg-lime-400 rounded-full border-4 border-white" />
              <h3 className="text-xl font-bold text-zinc-900">
                Asal-Usul Nama Dusun Jetis
              </h3>
              <p className="mt-2 text-zinc-600 leading-7">
                Dusun Jetis dahulu memiliki beragam penyebutan sesuai dengan ciri khas dan letak wilayahnya. 
                Dalam kehidupan sehari-hari, masyarakat mengenal beberapa nama seperti Jetis Kecamatan, 
                Jetis Tanjung karena berdekatan dengan Dusun Tanjung, Jetis Pande yang merujuk pada keberadaan bengkel andong, 
                serta Jetis Roda yang dikenal sebagai tempat pembuatan roda secara manual. 
                Penamaan tersebut menjadi bagian dari identitas wilayah dan menunjukkan aktivitas masyarakat pada masa itu.
              </p>
            </div>
            <div className="mb-8">
              <div className="absolute -left-3 w-6 h-6 bg-lime-400 rounded-full border-4 border-white" />
              <h3 className="text-xl font-bold text-zinc-900">
                Sejarah Bengkel Andong dan Kerajinan Roda
              </h3>
              <p className="mt-2 text-zinc-600 leading-7">
                Perkembangan bengkel andong di Dusun Jetis bermula dari kedatangan seorang perajin dari wilayah timur 
                Jokteng yang awalnya membuka usaha di Bakulan. Perajin tersebut kemudian diajak oleh dukuh pertama untuk 
                pindah ke Jetis. Seiring waktu, usaha tersebut berkembang menjadi bengkel andong dan gerobak yang cukup 
                dikenal masyarakat. Keberadaan bengkel ini turut menjadikan Jetis dikenal sebagai pusat pembuatan roda dan 
                perbaikan andong secara tradisional.
              </p>
            </div>
            <div>
              <div className="absolute -left-3 w-6 h-6 bg-lime-400 rounded-full border-4 border-white" />
              <h3 className="text-xl font-bold text-zinc-900">
                Perubahan Wilayah Administratif Dusun Jetis
              </h3>
              <p className="mt-2 text-zinc-600 leading-7">
                Secara historis, pada tanggal 11 November 1947 Dusun Jetis dahulu masuk dalam wilayah Kalurahan Kralas. 
                Namun karena kondisi wilayah dinilai kurang efisien dan jalur administrasinya terkesan berbelok-belok, 
                kemudian dilakukan penataan ulang wilayah. Setelah penataan tersebut, Dusun Jetis resmi masuk ke wilayah 
                Patalan hingga sekarang.
              </p>
            </div>
            <div>
              <div className="absolute -left-3 w-6 h-6 bg-lime-400 rounded-full border-4 border-white" />
              <h3 className="text-xl font-bold text-zinc-900">
                Sejarah Kepemimpinan Dusun Jetis
              </h3>
              <p className="mt-2 text-zinc-600 leading-7">
                Pada masa awal, kepemimpinan Dusun Jetis dipegang oleh Harjo Utomo sebagai dukuh pertama. 
                Kepemimpinan kemudian dilanjutkan secara turun-temurun oleh anaknya, Noto Diharjo. 
                Seiring perkembangan zaman, sistem penunjukan dukuh berubah menjadi melalui pemilihan warga. 
                Setelah itu, kepemimpinan dilanjutkan oleh Mbah Margo Utomo, kemudian Sagiyana sebagai dukuh keempat, 
                dan saat ini dijabat oleh Eka Wulanjari.
              </p>
            </div>
            <div>
              <div className="absolute -left-3 w-6 h-6 bg-lime-400 rounded-full border-4 border-white" />
              <h3 className="text-xl font-bold text-zinc-900">
                Kehidupan dan Mata Pencaharian Masyarakat
              </h3>
              <p className="mt-2 text-zinc-600 leading-7">
                Pada masa dahulu, mayoritas masyarakat Dusun Jetis bekerja sebagai petani dan penderes, 
                yaitu mengambil nira dari pohon kelapa untuk kebutuhan sehari-hari maupun dijual kembali. 
                Selain itu, di wilayah selatan tepatnya di RT 24 terdapat area yang dikenal dengan nama Kalangan, 
                yang dahulu digunakan sebagai tempat kegiatan mengadu ayam. Kehidupan masyarakat pada masa 
                itu masih sangat erat dengan aktivitas pertanian dan tradisi lokal.
              </p>
            </div>
            <div>
              <div className="absolute -left-3 w-6 h-6 bg-lime-400 rounded-full border-4 border-white" />
              <h3 className="text-xl font-bold text-zinc-900">
                Penataan Wilayah dan Administrasi Dusun Jetis
              </h3>
              <p className="mt-2 text-zinc-600 leading-7">
                Dusun Jetis juga memiliki peninggalan sejarah berupa saluran air dari masa Belanda yang 
                dahulu digunakan untuk mengalirkan air menuju pabrik gula di Sumberagung. 
                Dalam perkembangan administrasi wilayah, penomoran RT yang sebelumnya belum teratur 
                kemudian ditata ulang sekitar tahun 2000-an menjadi lebih sistematis dari nomor 1 
                hingga 88 untuk mempermudah pendataan warga. Beberapa ketua RT awal yang dikenal 
                masyarakat antara lain Sajiman (RT 21), Raji (RT 22), Marsodiryo (RT 23), dan Slamet (RT 24). 
                Selain itu, wilayah seperti Bakulan, Gaduh, Kralas, Gerselo, dan Kategan yang dahulu terdiri 
                dari beberapa bagian kemudian digabungkan menjadi 20 padukuhan seperti yang dikenal saat ini.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
