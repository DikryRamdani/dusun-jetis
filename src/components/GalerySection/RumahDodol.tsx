import SectionHeader from "../SectionHeader";
import ImageCarousel from "../ImageCarousel";

export default function RumahDodol() {
  const images = [
    { src: "/Image/Rumah Dodol/RD1.webp", alt: "Rumah Dodol 1" },
    { src: "/Image/Rumah Dodol/RD2.webp", alt: "Rumah Dodol 2" },
    { src: "/Image/Rumah Dodol/RD3.webp", alt: "Rumah Dodol 3" },
    { src: "/Image/Rumah Dodol/RD4.webp", alt: "Rumah Dodol 4" },
  ];

  return (
    <section
      id="galeri-rumah-dodol"
      className="w-full px-6 sm:px-10 lg:px-16 py-16 bg-zinc-50"
    >
      <div className="mb-12">
        <SectionHeader label="" title="Rumah Dodol" centered />
        <p className="mt-4 text-center max-w-3xl mx-auto text-zinc-600">
          Industri rumah tangga pembuatan dodol tradisional.
        </p>
      </div>
      <ImageCarousel images={images} autoScrollInterval={5000} />
    </section>
  );
}
