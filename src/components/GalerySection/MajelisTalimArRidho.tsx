import SectionHeader from "../SectionHeader";
import ImageCarousel from "../ImageCarousel";

export default function MajelisTalimArRidho() {
  const images = [
    {
      src: "/Image/Majelis Talim ArRidho/MTAR1.webp",
      alt: "Majelis Ta'lim Ar-Ridho 1",
    },
    {
      src: "/Image/Majelis Talim ArRidho/MTAR2.webp",
      alt: "Majelis Ta'lim Ar-Ridho 2",
    },
    {
      src: "/Image/Majelis Talim ArRidho/MTAR3.webp",
      alt: "Majelis Ta'lim Ar-Ridho 3",
    },
    {
      src: "/Image/Majelis Talim ArRidho/MTAR4.webp",
      alt: "Majelis Ta'lim Ar-Ridho 4",
    },
  ];

  return (
    <section
      id="galeri-majelis"
      className="w-full px-6 sm:px-10 lg:px-16 py-16 bg-zinc-50"
    >
      <div className="mb-12">
        <SectionHeader label="" title="Majelis Ta'lim Ar-Ridho" centered />
        <p className="mt-4 text-center max-w-3xl mx-auto text-zinc-600">
          Pusat kegiatan keagamaan dan sosial yang memperkuat pendidikan agama.
        </p>
      </div>
      <ImageCarousel images={images} autoScrollInterval={5000} />
    </section>
  );
}
