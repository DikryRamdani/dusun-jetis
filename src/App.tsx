import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
const Galery = lazy(() => import("./pages/Galery"));
const Contact = lazy(() => import("./pages/Contact"));
const Profile = lazy(() => import("./pages/Profile"));
const KaryaBudaya = lazy(() => import("./pages/KaryaBudaya"));
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Suspense
        fallback={<div className="px-4 sm:px-6 lg:px-8 py-16">Memuat...</div>}
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/galeri" element={<Galery />} />
          <Route path="/kontak" element={<Contact />} />
          <Route path="/profil" element={<Profile />} />
          <Route path="/karya-budaya" element={<KaryaBudaya />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}
