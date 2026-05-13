import HeroSection from "../components/HomepageSection/HeroSection";
import ProfilSection from "../components/HomepageSection/ProfilSection";
import PotensiSection from "../components/HomepageSection/PotensiSection";
import GaleriSection from "../components/HomepageSection/GaleriSection";
import KontakSection from "../components/HomepageSection/KontakSection";
export default function Homepage() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-800 overflow-x-hidden">
      <HeroSection />
      <ProfilSection />
      <PotensiSection />
      <GaleriSection />
      <KontakSection />
    </div>
  );
}
