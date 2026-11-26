import { useState } from 'react';
import { ArrowDownRight, BookOpen } from 'lucide-react';
import { HERO_IMAGE } from '../data/ramuData';
import { TukuCupLogo } from './TukuCupLogo';

interface HeroSectionProps {
  totalCatalogCount: number;
  onExploreCatalog: () => void;
  onExploreExhibition: () => void;
}

export function HeroSection({
  totalCatalogCount,
  onExploreCatalog,
  onExploreExhibition,
}: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="top" className="border-b border-[#D5CBB8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left editorial column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#7D6E60] mb-4">
                Perpustakaan Digital & Kedai Seduh · Cipete, Jakarta Selatan
              </p>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold text-[#221A14] leading-[1.08] tracking-tight text-balance">
                Ruang Meramu Kopi, Ide, dan Ilmu
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#5C4D40] leading-relaxed max-w-xl">
                Ramu memadukan kehangatan kedai kopi tetangga dengan katalog
                perpustakaan digital terbuka. Nikmati seduhan lokal sambil
                menjelajahi koleksi e-book, komik independen, dan arsip visual
                berstandar Dublin Core.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onExploreCatalog}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#F6F2EA] bg-[#465B43] hover:bg-[#384A35] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#465B43]"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Buka Katalog Digital</span>
                </button>

                <button
                  type="button"
                  onClick={onExploreExhibition}
                  className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-[#221A14] hover:text-[#9C5132] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#465B43] rounded-lg"
                >
                  <span>Pameran Digital Tematik</span>
                  <ArrowDownRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quiet curatorial colophon strip at base of text column */}
            <div className="mt-10 pt-6 border-t border-[#D5CBB8] flex items-center gap-4 text-xs text-[#5C4D40]">
              <TukuCupLogo className="w-8 h-8 shrink-0" />
              <div>
                <p className="font-medium text-[#221A14]">
                  Katalog Berstandar Dublin Core Sederhana
                </p>
                <p className="text-[#7D6E60] mt-0.5">
                  Judul · Penulis · Subjek · Format · Hak Akses
                </p>
              </div>
            </div>
          </div>

          {/* Right visual marquee column */}
          <div className="lg:col-span-6">
            <figure className="h-full flex flex-col">
              <div className="relative flex-1 min-h-[280px] sm:min-h-[360px] rounded-xl overflow-hidden border border-[#D5CBB8] bg-[#ECE5D8]">
                {!imgError ? (
                  <img
                    src={HERO_IMAGE}
                    alt="Suasana ruang baca Ramu dengan rak buku kayu, meja batu travertine, dan secangkir kopi dingin di bawah cahaya pagi"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full lg:h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#ECE5D8] to-[#DFD5C5]">
                    <TukuCupLogo className="w-14 h-14 mb-3" />
                    <p className="font-display text-xl text-[#221A14]">
                      Ruang Baca & Kedai Seduh Ramu
                    </p>
                  </div>
                )}
              </div>
              <figcaption className="mt-2.5 text-xs font-display italic text-[#7D6E60]">
                Fig. 0 — Sudut meja komunal travertine dan rak zine di Ruang Baca
                Ramu, Cipete Raya.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-width Operational Utility Ribbon */}
        <div className="mt-10 pt-6 border-t border-[#D5CBB8] grid grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#7D6E60]">
              Jam Operasional
            </p>
            <p className="mt-1 font-medium text-[#221A14] tabular-nums">
              Setiap Hari · 08.00–22.00 WIB
            </p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#7D6E60]">
              Katalog Digital
            </p>
            <p className="mt-1 font-medium text-[#221A14] tabular-nums">
              {totalCatalogCount} Koleksi Terkurasi
            </p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#7D6E60]">
              Akses Perpustakaan
            </p>
            <p className="mt-1 font-medium text-[#221A14]">
              Terbuka & Wi-Fi Lokal Ramu
            </p>
          </div>
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-[#7D6E60]">
              Tiga Ragam Koleksi
            </p>
            <p className="mt-1 font-medium text-[#221A14]">
              E-Book · Komik · Arsip Visual
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
