// motion import removed (unused)
import PantaiPulauPutri from "../components/GalerySection/PantaiPulauPutri";
import Pertanian from "../components/GalerySection/Pertanian";
import SekamBakar from "../components/GalerySection/SekamBakar";
import BalaiDesa from "../components/GalerySection/BalaiDesa";
import RumahDodol from "../components/GalerySection/RumahDodol";
import TambakIkan from "../components/GalerySection/TambakIkan";
import MajelisTalimArRidho from "../components/GalerySection/MajelisTalimArRidho";

export default function Galeri() {
  return (
    <section className="w-full bg-zinc-100">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mt-[60px] pt-[60px]">
        {/* Background Image */}
        <img
          src="public/image/heroSection.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Subtle black gradient overlay (like profil hero) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
        {/* Smooth fade to the next section (white) */}
        <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Title Section
			<section className="bg-white border-b-4 border-black">
				<div className="max-w-4xl mx-auto py-16 px-4 text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold text-lime-600 tracking-tight">Galeri Desa</h1>
					<p className="mt-4 text-zinc-600">Kumpulan dokumentasi, kegiatan, dan potret kehidupan di desa kami.</p>
				</div>
			</section> */}

      {/* Gallery Sections */}
      <PantaiPulauPutri />
      <Pertanian />
      <SekamBakar />
      <BalaiDesa />
      <RumahDodol />
      <TambakIkan />
      <MajelisTalimArRidho />
    </section>
  );
}
