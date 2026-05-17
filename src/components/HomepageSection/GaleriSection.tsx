import SectionHeader from "../SectionHeader";
import ImageCarousel from "../ImageCarousel";

export default function GaleriSection() {
  const galleries = [
    { src: "/Image/Bengkel Andong Pak Hono_/DSC03541.webp", alt: "Galeri Dusun Jetis 1" },
    { src: "/Image/Sentra Bibit Jamur/IMG_8471.webp", alt: "Galeri Dusun Jetis 3" },
    { src: "/Image/Penggilingan Padi/DSC03556.webp", alt: "Galeri Dusun Jetis 4" },
    { src: "/Image/Bengkel Andong Pandawa Lima_/DSC03564.webp", alt: "Galeri Dusun Jetis 5" },
    { src: "/Image/Klompok Kegiatan (POKGIAT)/IMG-20260501-WA0131.webp", alt: "Galeri Dusun Jetis 6" },
    { src: "/Image/PKK/IMG-20260501-WA0063.webp", alt: "Galeri Dusun Jetis 7" },
    { src: "/Image/SENTRA JAMU_/DSC03641.webp", alt: "Galeri Dusun Jetis 8" },
  ];

  return (
    <section
      id="galeri"
      className="w-full bg-zinc-100 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <SectionHeader
          label="Dokumentasi"
          title="Galeri Dusun Jetis"
          description="Beberapa momen dan potensi dari Dusun Jetis yang terabadikan dalam galeri foto."
        />
        <div className="mt-8">
          <ImageCarousel images={galleries} autoScrollInterval={5000} />
        </div>
      </div>
    </section>
  );
}
