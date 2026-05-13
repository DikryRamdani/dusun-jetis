import SectionHeader from "../SectionHeader";
import ImageCarousel from "../ImageCarousel";

export default function TambakIkan() {
  const images = [
    { src: "/Image/Tambak Ikan/TI1.webp", alt: "Tambak Ikan 1" },
    { src: "/Image/Tambak Ikan/TI2.webp", alt: "Tambak Ikan 2" },
    { src: "/Image/Tambak Ikan/TI3.webp", alt: "Tambak Ikan 3" },
    { src: "/Image/Tambak Ikan/TI4.webp", alt: "Tambak Ikan 4" },
  ];

  return (
    <section
      id="galeri-tambak-ikan"
      className="w-full px-6 sm:px-10 lg:px-16 py-16 bg-zinc-50"
    >
      <div className="mb-12">
        <SectionHeader label="" title="Tambak Ikan" centered />
        <p className="mt-4 text-center max-w-3xl mx-auto text-zinc-600">
          Budidaya tambak yang mendukung perekonomian lokal dan penyediaan
          produk laut segar.
        </p>
      </div>
      <ImageCarousel images={images} autoScrollInterval={5000} />
    </section>
  );
}
