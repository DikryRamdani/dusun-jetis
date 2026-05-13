import "leaflet/dist/leaflet.css";

export default function InteractiveMap() {
  // Google Maps iframe embed for Desa Segarjaya
  return (
    <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Peta Desa Segarjaya"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1220.535293375186!2d107.15894478299865!3d-6.034698735586265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a2ed014fac50b%3A0x732ff05aa27cb26d!2sKANTOR%20DESA%20SEGARJAYA%20Daerah%20Khusus%20Cagar%20Betawi!5e1!3m2!1sid!2sid!4v1768296246774!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
