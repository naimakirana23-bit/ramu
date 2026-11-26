import { TukuCupLogo } from './TukuCupLogo';

export function Footer() {
  return (
    <footer className="bg-[#221A14] text-[#D5CBB8] border-t border-[#3B2E24]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-[#3B2E24]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <TukuCupLogo variant="inverted" className="w-8 h-8" />
              <span className="font-display text-2xl font-semibold text-[#F6F2EA]">
                Ramu
              </span>
            </div>
            <p className="mt-3 font-display italic text-base text-[#F6F2EA]">
              Ruang Meramu Kopi, Ide, dan Ilmu
            </p>
            <p className="mt-2 text-xs text-[#A99B8C] leading-relaxed">
              Perpustakaan digital kafe yang mengarsipkan e-book, komik
              independen, dan dokumentasi visual berstandar Dublin Core.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#8F7F70] mb-3">
                Navigasi
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#about" className="hover:text-[#F6F2EA] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    className="hover:text-[#F6F2EA] transition-colors"
                  >
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#pameran"
                    className="hover:text-[#F6F2EA] transition-colors"
                  >
                    Pameran Digital Tematik
                  </a>
                </li>
                <li>
                  <a
                    href="#apa-yang-diramu"
                    className="hover:text-[#F6F2EA] transition-colors"
                  >
                    Apa yang diRAMU
                  </a>
                </li>
                <li>
                  <a
                    href="#visit-us"
                    className="hover:text-[#F6F2EA] transition-colors"
                  >
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#8F7F70] mb-3">
                Kedai Cipete
              </p>
              <ul className="space-y-2 text-xs text-[#C5B8A5]">
                <li>Jl. Cipete Raya No. 28</li>
                <li>Jakarta Selatan 12410</li>
                <li className="tabular-nums">Buka 08.00 – 22.00 WIB</li>
                <li>halo@ramupustaka.id</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#8F7F70]">
          <p>© 2026 Perpustakaan Digital & Kedai Seduh Ramu.</p>
          <p className="font-mono">
            Skema Katalog: Dublin Core Sederhana (Judul · Penulis · Subjek ·
            Format · Hak Akses)
          </p>
        </div>
      </div>
    </footer>
  );
}
