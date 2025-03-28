'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('ana_ekran');
  const location = useLocation();
  const navigate = useNavigate();

  // Güncel URL'ye bağlı olarak aktif sekmeyi günceller
  useEffect(() => {
    const path = location.pathname.slice(1) || 'ana_ekran';
    setActiveSection(path);
  }, [location]);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (section: string) => {
    const path = section === 'ana_ekran' ? '/' : `/${section}`;
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neon/30 bg-black/95 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Sol Kısım: Logo */}
        <div className="flex flex-shrink-0">
          <Link
            to="/"
            onClick={() => handleNavigation('ana_ekran')}
            className="relative font-bold text-xl text-neon hover:text-neon-pulse transition-all"
          >
            <span className="glitch-text">Cyberia Project</span>
            <span className="absolute inset-0 h-full w-full animate-pulse bg-neon/10 pointer-events-none"></span>
          </Link>
        </div>

        {/* Orta Kısım: Menü Linkleri */}
        <nav className="hidden md:flex justify-center flex-grow">
          <ul className="flex gap-6">
            {['ana_ekran', 'hakkımızda', 'kullanan_yerler', 'manifestomuz'].map((section) => (
              <li key={section}>
                <Link
                  to={section === 'ana_ekran' ? '/' : `/${section}`}
                  onClick={() => handleNavigation(section)}
                  className={`text-sm font-mono tracking-widest px-3 py-2 cursor-pointer transition-all ${
                    activeSection === section
                      ? 'text-neon border-b-2 border-neon glow'
                      : 'text-gray-400 hover:text-neon hover:glitch-text'
                  }`}
                >
                  {`>_${section.toUpperCase()}`}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sağ Kısım: JOIN_MATRIX Butonu */}
        <div className="flex items-center justify-end flex-shrink-0">
          <div className="flex items-center justify-end flex-shrink-0">
            <Link
              to="/join"
              onClick={() => handleNavigation('join')}
              className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] neon-shadow"
            >
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00f2ff_0%,#00a3ff_50%,#000000_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black px-6 py-2 font-mono text-sm text-neon backdrop-blur-3xl hover:bg-black/80 transition-all">
                <span className="glitch-text">Gruba katıl</span>
              </span>
            </Link>
          </div>

          {/* Mobil Menü İkonu */}
          <button
            className="ml-4 md:hidden text-neon hover:text-neon-pulse transition-all"
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8 animate-flicker" />
            ) : (
              <Menu className="h-8 w-8 animate-flicker" />
            )}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t border-neon/20 bg-black/90 terminal-style">
          <nav className="flex flex-col gap-4">
            <ul className="flex flex-col gap-4">
              {['ana_ekran', 'hakkımızda', 'kullanan_yerler', 'manifestomuz'].map((section) => (
                <li key={section}>
                  <Link
                    to={section === 'ana_ekran' ? '/' : `/${section}`}
                    onClick={() => handleNavigation(section)}
                    className={`w-full text-left font-mono text-sm tracking-widest px-3 py-2 cursor-pointer transition-all ${
                      activeSection === section
                        ? 'text-neon border-l-4 border-neon glow'
                        : 'text-gray-400 hover:text-neon hover:border-l-4 hover:border-neon/50'
                    }`}
                  >
                    {`>> ${section.toUpperCase()}`}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;