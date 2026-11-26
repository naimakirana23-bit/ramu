import { ArrowUpRight, Coffee } from 'lucide-react';
import type { LibraryItem, RamuPairing } from '../types/library';
import { ItemCoverArt } from './ItemCoverArt';

interface ApaYangDiramuSectionProps {
  pairings: RamuPairing[];
  allItems: LibraryItem[];
  onSelectItem: (item: LibraryItem) => void;
}

export function ApaYangDiramuSection({
  pairings,
  allItems,
  onSelectItem,
}: ApaYangDiramuSectionProps) {
  return (
    <section
      id="apa-yang-diramu"
      className="border-b border-[#D5CBB8] bg-[#ECE5D8]/55"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D5CBB8]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#7D6E60] mb-2">
              04. Apa yang diRAMU · Rekomendasi Kurasi
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#221A14] text-balance">
              Padu Padan Seduhan & Bacaan Pilihan
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C4D40] max-w-2xl">
              Setiap bulan, barista dan pustakawan Ramu meramu rekomendasi
              pasangan minuman dan koleksi digital sesuai suasana baca Anda.
            </p>
          </div>
          <p className="text-xs font-mono text-[#7D6E60] shrink-0">
            Edisi Kurasi · November 2026
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pairings.map((pair, idx) => {
            const matchedItem = allItems.find(
              (item) => item.id === pair.recommendedItemId
            );
            if (!matchedItem) return null;

            return (
              <article
                key={pair.id}
                className="bg-[#F6F2EA] border border-[#D5CBB8] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Quiet header line */}
                  <div className="flex items-center justify-between gap-3 text-xs text-[#7D6E60] pb-4 border-b border-[#D5CBB8]">
                    <span className="font-mono tabular-nums text-[#9C5132] font-medium">
                      Racikan 0{idx + 1}
                    </span>
                    <span>{pair.readingMood}</span>
                  </div>

                  {/* Coffee side */}
                  <div className="mt-4 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#ECE5D8] border border-[#D5CBB8] flex items-center justify-center shrink-0 text-[#465B43]">
                      <Coffee className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[#221A14]">
                        {pair.brewName}
                      </h3>
                      <p className="text-xs text-[#7D6E60] mt-0.5">
                        {pair.brewOriginOrBase} · {pair.tastingNotes}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-[#5C4D40] leading-relaxed">
                    {pair.baristaNote}
                  </p>
                </div>

                {/* Recommended reading preview */}
                <div className="mt-6 pt-5 border-t border-[#D5CBB8]">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[#7D6E60] mb-3">
                    Pasangan Bacaan yang Direkomendasikan
                  </p>

                  <button
                    type="button"
                    onClick={() => onSelectItem(matchedItem)}
                    className="group w-full text-left flex items-center gap-4 p-3 rounded-lg bg-[#ECE5D8]/60 hover:bg-[#ECE5D8] border border-[#D5CBB8] transition-colors cursor-pointer"
                  >
                    <ItemCoverArt
                      item={matchedItem}
                      className="w-20 h-16 rounded-md shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-base font-semibold text-[#221A14] group-hover:text-[#465B43] transition-colors truncate">
                        {matchedItem.dublinCore.judul}
                      </p>
                      <p className="text-xs text-[#5C4D40] truncate mt-0.5">
                        {matchedItem.dublinCore.penulis} ·{' '}
                        {matchedItem.dublinCore.format}
                      </p>
                      <p className="text-xs text-[#9C5132] font-medium mt-1 inline-flex items-center gap-1">
                        <span>Buka & Baca Sekarang</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </p>
                    </div>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
