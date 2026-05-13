import SectionHeader from "../SectionHeader";
import ImageCarousel from "../ImageCarousel";

export default function BalaiDesa() {
  const images = [
    { src: "/Image/Kantor Desa/KD1.webp", alt: "Balai Desa 1" },
    { src: "/Image/Kantor Desa/KD2.webp", alt: "Balai Desa 2" },
    { src: "/Image/Kantor Desa/KD3.webp", alt: "Balai Desa 3" },
    { src: "/Image/Kantor Desa/KD4.webp", alt: "Balai Desa 4" },
  ];

  return (
    <section
      id="galeri-balai-desa"
      className="w-full px-6 sm:px-10 lg:px-16 py-16 bg-white"
    >
      <div className="mb-12">
        <SectionHeader label="" title="Balai Desa" centered />
        <p className="mt-4 text-center max-w-3xl mx-auto text-zinc-600">
          Tempat pelayanan dan kegiatan masyarakat Desa Segarjaya.
        </p>
      </div>
      <ImageCarousel images={images} autoScrollInterval={5000} />
    </section>
  );
}
