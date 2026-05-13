import SectionHeader from "../SectionHeader";
import ImageCarousel from "../ImageCarousel";

export default function GaleriSection() {
  const galleries = [
    { src: "/Image/Gapura/Gapura1.webp", alt: "Galeri 1" },
    { src: "/Image/Kantor Desa/KD1.webp", alt: "Galeri 2" },
    { src: "/Image/Majelis Talim ArRidho/MTAR1.webp", alt: "Galeri 3" },
    { src: "/Image/Pantai Pulau Putri/PPP1.webp", alt: "Galeri 4" },
    { src: "/Image/Sekam Bakar/SB2.webp", alt: "Galeri 5" },
    { src: "/Image/Rumah Dodol/RD1.webp", alt: "Galeri 6" },
    { src: "/Image/Pertanian/PT1.webp", alt: "Galeri 7" },
    { src: "/Image/Tambak Ikan/TI1.webp", alt: "Galeri 8" },
  ];

  return (
    <section
      id="galeri"
      className="w-full bg-zinc-100 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <SectionHeader
          label="Dokumentasi"
          title="Galeri Desa"
          description="Beberapa momen dan potensi dari Desa Segarjaya yang terabadikan dalam galeri foto."
        />
        <div className="mt-8">
          <ImageCarousel images={galleries} autoScrollInterval={5000} />
        </div>
      </div>
    </section>
  );
}
