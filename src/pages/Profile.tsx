import {
  BatasDesaSection,
  JamOperasionalSection,
  LembagaKemasyarakatanSection,
  ProfilKepalaDusunSection,
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
      <VisiMisiSection />
      <LembagaKemasyarakatanSection />
      <BatasDesaSection />
      <JamOperasionalSection />
    </section>
  );
}
