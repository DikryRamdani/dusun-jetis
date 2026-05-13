import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ContactCard from "../ContactCard";

export default function KontakSection() {
  const WhatsAppIcon = (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  const EmailIcon = (
    <svg
      className="w-8 h-8 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );

  return (
    <section id="kontak" className="w-full bg-white py-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lime-600 font-medium text-sm tracking-widest uppercase mb-3">
              Hubungi Kami
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 mb-4">
              Ada Pertanyaan?
            </h2>
            <p className="text-zinc-600 text-lg max-w-2xl mx-auto mb-10">
              Jangan ragu untuk menghubungi kami. Tim dusun siap membantu Anda!
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactCard
              href="https://wa.me/6285883913894"
              icon={WhatsAppIcon}
              iconBgColor="bg-green-500"
              title="WhatsApp Operator Desa"
              subtitle="Respon cepat di jam kerja"
              value="(+62) 858-8391-3894"
              external
            />
            <ContactCard
              href="mailto:segarjaya.pemdes.karawangkab@gmail.com"
              icon={EmailIcon}
              iconBgColor="bg-zinc-700"
              title="Email Dusun"
              subtitle="Untuk keperluan resmi"
              value="dusun.jetis@gmail.com"
            />
          </motion.div>

          {/* Info Selengkapnya Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 bg-lime-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-lime-700 transition-all hover:scale-105 shadow-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Info Selengkapnya
            </Link>
            <p className="text-zinc-600 text-sm mt-4">
              Jam operasional, layanan, dan informasi lengkap lainnya
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
