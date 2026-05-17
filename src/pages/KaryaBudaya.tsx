import { PotensiEkonomiSection, KegiatanDusunSection } from "../components/KarbudSection";

export default function KaryaBudaya() {
  return (
    <section className="w-full bg-zinc-100">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mt-[60px] pt-[60px]">
        {/* Background Image */}
        <img
          src="/Image/heroSection.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
        {/* Smooth fade to the next section (white) */}
        <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Potensi Ekonomi Section */}
      <PotensiEkonomiSection />

      {/* Kegiatan Dusun Section */}
      <KegiatanDusunSection />
    </section>
  );
}
