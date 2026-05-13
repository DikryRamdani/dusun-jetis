import SectionHeader from "../SectionHeader";
import ImageCarousel from "../ImageCarousel";

export default function SekamBakar() {
  const images = [
    { src: "/Image/Sekam Bakar/SB1.webp", alt: "Sekam Bakar 1" },
    { src: "/Image/Sekam Bakar/SB2.webp", alt: "Sekam Bakar 2" },
    { src: "/Image/Sekam Bakar/SB3.webp", alt: "Sekam Bakar 3" },
    { src: "/Image/Sekam Bakar/SB4.webp", alt: "Sekam Bakar 4" },
  ];

  return (
    <section
      id="galeri-sekam-bakar"
      className="w-full px-6 sm:px-10 lg:px-16 py-16 bg-zinc-50"
    >
      <div className="mb-12">
        <SectionHeader label="" title="Sekam Bakar" centered />
        <p className="mt-4 text-center max-w-3xl mx-auto text-zinc-600">
          Pemanfaatan sekam padi menjadi produk bernilai tambah untuk pertanian
          dan usaha lokal.
        </p>
      </div>
      <ImageCarousel images={images} autoScrollInterval={5000} />
    </section>
  );
}
