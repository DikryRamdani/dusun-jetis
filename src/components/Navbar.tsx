// replaced Image component with native <img>
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [galeriOpen, setGaleriOpen] = useState(false);
  const [mobileGaleriOpen, setMobileGaleriOpen] = useState(false);
  const navigate = useNavigate();

  // Mobile navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only apply hide/show on mobile (< 640px)
      if (window.innerWidth < 640) {
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          // Scrolling down - hide navbar
          setShowNavbar(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    const handleTouch = () => {
      // Show navbar when user touches screen (mobile only)
      if (window.innerWidth < 640) {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouch);
    };
  }, [lastScrollY]);

  // Smooth navigation handler
  const handleNavigation = (href: string, closeMenu = true) => {
    if (closeMenu) {
      setOpen(false);
      setGaleriOpen(false);
      setMobileGaleriOpen(false);
    }

    // Handle hash links for smooth scroll
    if (href.includes("#")) {
      const [path, hash] = href.split("#");

      // If we're on the same page, just scroll
      if (!path || window.location.pathname === path) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }

      // Navigate to new page then scroll
      navigate(href);
      return;
    }

    // Regular page navigation
    navigate(href);
  };

  return (
    <div>
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 bg-white border-b border-zinc-200`}
        initial={{ y: -100 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between sm:grid sm:grid-cols-3">
          <Link
            to="/"
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <img
              src="/favicon.ico"
              alt="Logo Desa Segarjaya"
              width={36}
              height={36}
              className="w-[36px] h-[36px]"
            />
            <div className="leading-tight">
              <p className="text-sm text-lime-600 font-medium">Profil Desa</p>
              <h1 className="text-lg sm:text-xl font-semibold text-zinc-900">
                Desa Segarjaya
              </h1>
            </div>
          </Link>
          <nav className="hidden sm:flex items-center justify-center gap-6 text-sm mx-auto text-zinc-900">
            <button
              onClick={() => handleNavigation("/")}
              className="hover:text-lime-600 transition-colors"
            >
              Beranda
            </button>
            <button
              onClick={() => handleNavigation("/profil")}
              className="hover:text-lime-600 transition-colors"
            >
              Profil
            </button>
            <button
              onClick={() => handleNavigation("/karya-budaya")}
              className="hover:text-lime-600 transition-colors"
            >
              Karya & Budaya
            </button>

            {/* Dropdown Galeri */}
            <div className="relative">
              <button
                className="flex items-center gap-1 hover:text-lime-600 transition-colors"
                onClick={() => setGaleriOpen((v) => !v)}
              >
                Galeri
                <motion.svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  animate={{ rotate: galeriOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19 9-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {galeriOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-1 w-56 bg-white border border-zinc-200 rounded-lg shadow-lg py-2 z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => handleNavigation("/galeri#galeri-pantai")}
                      className="block w-full text-left px-4 py-2 hover:bg-zinc-50 transition-colors"
                    >
                      Pantai Pulau Putri
                    </button>
                    <button
                      onClick={() =>
                        handleNavigation("/galeri#galeri-pertanian")
                      }
                      className="block w-full text-left px-4 py-2 hover:bg-zinc-50 transition-colors"
                    >
                      Pertanian
                    </button>
                    <button
                      onClick={() => handleNavigation("/galeri#galeri-sekam")}
                      className="block w-full text-left px-4 py-2 hover:bg-zinc-50 transition-colors"
                    >
                      Sekam Bakar
                    </button>
                    <button
                      onClick={() => handleNavigation("/galeri#galeri-balai")}
                      className="block w-full text-left px-4 py-2 hover:bg-zinc-50 transition-colors"
                    >
                      Balai Desa
                    </button>
                    <button
                      onClick={() =>
                        handleNavigation("/galeri#galeri-isra-miraj")
                      }
                      className="block w-full text-left px-4 py-2 hover:bg-zinc-50 transition-colors"
                    >
                      Isra Mi&apos;raj
                    </button>
                    <button
                      onClick={() => handleNavigation("/galeri#galeri-tambak")}
                      className="block w-full text-left px-4 py-2 hover:bg-zinc-50 transition-colors"
                    >
                      Tambak Ikan
                    </button>
                    <button
                      onClick={() => handleNavigation("/galeri#galeri-majelis")}
                      className="block w-full text-left px-4 py-2 hover:bg-zinc-50 transition-colors"
                    >
                      Majelis Abah Hanafi
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={() => handleNavigation("/kontak")}
              className="hover:text-lime-600 transition-colors"
            >
              Kontak
            </button>
          </nav>
          <div className="flex justify-end">
            <button
              type="button"
              aria-label="Buka menu"
              aria-expanded={open}
              className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-zinc-300 text-zinc-700 hover:bg-zinc-50 transition-colors"
              onClick={() => setOpen((v) => !v)}
            >
              <motion.div
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="7" x2="21" y2="7"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="17" x2="21" y2="17"></line>
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="sm:hidden absolute inset-x-0 top-full z-50 bg-white border-b border-zinc-200 shadow-sm"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-4 py-3 flex flex-col gap-1 text-sm">
                <button
                  onClick={() => handleNavigation("/")}
                  className="py-2 px-2 rounded hover:bg-zinc-50 text-left transition-colors text-zinc-900"
                >
                  Beranda
                </button>
                <button
                  onClick={() => handleNavigation("/profil")}
                  className="py-2 px-2 rounded hover:bg-zinc-50 text-left transition-colors text-zinc-900"
                >
                  Profil
                </button>
                <button
                  onClick={() => handleNavigation("/karya-budaya")}
                  className="py-2 px-2 rounded hover:bg-zinc-50 text-left transition-colors text-zinc-900"
                >
                  Karya & Budaya
                </button>

                {/* Mobile Galeri Dropdown */}
                <button
                  className="py-2 px-2 rounded hover:bg-zinc-50 flex items-center justify-between w-full text-left transition-colors text-zinc-900"
                  onClick={() => setMobileGaleriOpen((v) => !v)}
                >
                  Galeri
                  <motion.svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    animate={{ rotate: mobileGaleriOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19 9-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {mobileGaleriOpen && (
                    <motion.div
                      className="pl-4 flex flex-col gap-1 overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={() =>
                          handleNavigation("/galeri#galeri-pantai")
                        }
                        className="py-2 px-2 rounded hover:bg-zinc-50 text-zinc-900 text-left transition-colors"
                      >
                        Pantai Pulau Putri
                      </button>
                      <button
                        onClick={() =>
                          handleNavigation("/galeri#galeri-pertanian")
                        }
                        className="py-2 px-2 rounded hover:bg-zinc-50 text-zinc-900 text-left transition-colors"
                      >
                        Pertanian
                      </button>
                      <button
                        onClick={() => handleNavigation("/galeri#galeri-sekam")}
                        className="py-2 px-2 rounded hover:bg-zinc-50 text-zinc-900 text-left transition-colors"
                      >
                        Sekam Bakar
                      </button>
                      <button
                        onClick={() => handleNavigation("/galeri#galeri-balai")}
                        className="py-2 px-2 rounded hover:bg-zinc-50 text-zinc-900 text-left transition-colors"
                      >
                        Balai Desa
                      </button>
                      <button
                        onClick={() =>
                          handleNavigation("/galeri#galeri-isra-miraj")
                        }
                        className="py-2 px-2 rounded hover:bg-zinc-50 text-zinc-900 text-left transition-colors"
                      >
                        Isra Mi&apos;raj
                      </button>
                      <button
                        onClick={() =>
                          handleNavigation("/galeri#galeri-tambak")
                        }
                        className="py-2 px-2 rounded hover:bg-zinc-50 text-zinc-900 text-left transition-colors"
                      >
                        Tambak Ikan
                      </button>
                      <button
                        onClick={() =>
                          handleNavigation("/galeri#galeri-majelis")
                        }
                        className="py-2 px-2 rounded hover:bg-zinc-50 text-zinc-900 text-left transition-colors"
                      >
                        Majelis Abah Hanafi
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  onClick={() => handleNavigation("/kontak")}
                  className="py-2 px-2 rounded hover:bg-zinc-50 text-left transition-colors text-zinc-900"
                >
                  Kontak
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer for fixed navbar */}
      <div className="h-[60px]"></div>
    </div>
  );
}
