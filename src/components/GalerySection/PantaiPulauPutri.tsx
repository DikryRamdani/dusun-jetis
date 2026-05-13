import SectionHeader from "../SectionHeader";
import ImageCarousel from "../ImageCarousel";

export default function PantaiPulauPutri() {
  const images = [
    { src: "/Image/Pantai Pulau Putri/PPP1.webp", alt: "Pantai Pulau Putri 1" },
    { src: "/Image/Pantai Pulau Putri/PPP2.webp", alt: "Pantai Pulau Putri 2" },
    {
      src: "/Image/Pantai Pulau Putri/PanoPPP1.webp",
      alt: "Pantai Pulau Putri 3",
    },
    {
      src: "/Image/Pantai Pulau Putri/PanoPPP2.webp",
      alt: "Pantai Pulau Putri 4",
    },
  ];

  return (
    <section
      id="galeri-pantai-pulau-putri"
      className="w-full px-6 sm:px-10 lg:px-16 py-16 bg-zinc-50"
    >
      <div className="mb-12">
        <SectionHeader label="" title="Pantai Pulau Putri" centered />
        <p className="mt-4 text-center max-w-3xl mx-auto text-zinc-600">
          Keindahan pantai dengan pasir putih, kegiatan budaya, dan panorama
          laut yang memikat.
        </p>
      </div>
      <ImageCarousel images={images} autoScrollInterval={5000} />
    </section>
  );
}
