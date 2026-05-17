export default function ProfileHeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden -mt-[60px] pt-[60px]">
      <img
        src="/image/heroSection.webp"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
