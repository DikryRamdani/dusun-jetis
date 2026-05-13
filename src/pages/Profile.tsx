import {
  BatasDesaSection,
  JamOperasionalSection,
  LembagaKemasyarakatanSection,
  PopulasiSection,
  ProfilKepalaDusunSection,
  PotensiDesaSection,
  ProfileHeroSection,
  SejarahSection,
  StrukturOrganisasiSection,
  VisiMisiSection,
} from "../components/profileSection";

export default function Profile() {
  return (
    <section className="w-full bg-zinc-100">
      <ProfileHeroSection />
      <SejarahSection />
      <StrukturOrganisasiSection />
      <ProfilKepalaDusunSection />
      {/* <PopulasiSection /> */}
      <LembagaKemasyarakatanSection />
      {/* <PotensiDesaSection /> */}
      <BatasDesaSection />
      <VisiMisiSection />
      <JamOperasionalSection />
    </section>
  );
}
