import SectionHeader from "../SectionHeader";
import ImageCarousel from "../ImageCarousel";

export default function Pertanian() {
  const images = [
    { src: "/Image/Pertanian/PT1.webp", alt: "Pertanian 1" },
    { src: "/Image/Pertanian/PT2.webp", alt: "Pertanian 2" },
    { src: "/Image/Pertanian/PT3.webp", alt: "Pertanian 3" },
    { src: "/Image/Pertanian/PT4.webp", alt: "Pertanian 4" },
  ];

  return (
    <section
      id="galeri-pertanian"
      className="w-full px-6 sm:px-10 lg:px-16 py-16 bg-zinc-50"
    >
      <div className="mb-12">
        <SectionHeader label="" title="Pertanian" centered />
        <p className="mt-4 text-center max-w-3xl mx-auto text-zinc-600">
          Pemanfaatan lahan sawah dan hortikultura yang mendukung ekonomi lokal.
        </p>
      </div>
      <ImageCarousel images={images} autoScrollInterval={5000} />
    </section>
  );
}
