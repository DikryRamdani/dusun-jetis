import "leaflet/dist/leaflet.css";

export default function MapDesa() {
  // Google Maps iframe embed for Desa Segarjaya
  return (
    <div className="w-full h-100 rounded-xl overflow-hidden shadow-lg">
      <iframe
        title="Peta Desa Segarjaya"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8210.745704904919!2d107.16031742965673!3d-6.0349837656369925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a2e926a904c8b%3A0x45cfbddb47f7f7ed!2sSegarjaya%2C%20Kec.%20Batujaya%2C%20Karawang%2C%20Jawa%20Barat!5e1!3m2!1sid!2sid!4v1768297209738!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
