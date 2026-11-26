import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { LibraryItem, ThematicExhibition } from '../types/library';

interface ExhibitionSectionProps {
  exhibitions: ThematicExhibition[];
  allItems: LibraryItem[];
  onSelectItem: (item: LibraryItem) => void;
}

export function ExhibitionSection({
  exhibitions,
  allItems,
  onSelectItem,
}: ExhibitionSectionProps) {
  const [activeId, setActiveId] = useState(exhibitions[0]?.id ?? '');
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const activeExhibition =
    exhibitions.find((e) => e.id === activeId) ?? exhibitions[0];

  if (!activeExhibition) return null;

  const findItem = (id: string) => allItems.find((item) => item.id === id);

  return (
    <section
      id="pameran"
      className="border-b border-[#D5CBB8] bg-[#221A14] text-[#F6F2EA]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        {/* Header & Exhibition Room Switcher */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#44362B]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#C5B8A5] mb-2">
              03. Layanan Digital · Pameran Digital Tematik
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#F6F2EA] tracking-wide text-balance">
              Ruang Pamer Kuratorial Ramu
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#D5CBB8] max-w-2xl">
              Pameran virtual berkala yang merangkai arsip fotografi, catatan
              sejarah kopi, dan komik independen dalam satu narasi ruang baca.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Pilih Pameran Digital Tematik"
            className="flex flex-wrap gap-2 shrink-0"
          >
            {exhibitions.map((exh, idx) => {
              const isActive = exh.id === activeExhibition.id;
              return (
                <button
                  key={exh.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveId(exh.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#F6F2EA] text-[#221A14] border-[#F6F2EA]'
                      : 'bg-transparent text-[#D5CBB8] border-[#4D3D31] hover:border-[#9C5132] hover:text-[#F6F2EA]'
                  }`}
                >
                  <span className="tabular-nums">Pameran 0{idx + 1}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Exhibition Foreword */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-widest text-[#D89A7E]">
              {activeExhibition.editionLabel}
            </p>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#F6F2EA] leading-snug text-balance">
              {activeExhibition.title}
            </h3>
            <p className="mt-3 text-sm text-[#D5CBB8] leading-relaxed">
              {activeExhibition.subtitle}
            </p>

            <div className="mt-6 pt-5 border-t border-[#44362B] space-y-2 text-xs text-[#C5B8A5]">
              <p>
                <span className="text-[#8F7F70]">Kurator:</span>{' '}
                {activeExhibition.curator}
              </p>
              <p className="tabular-nums">
                <span className="text-[#8F7F70]">Periode Pameran:</span>{' '}
                {activeExhibition.period}
              </p>
            </div>

            <p className="mt-6 text-[15px] text-[#E6DDD0] leading-relaxed">
              {activeExhibition.foreword}
            </p>
          </div>

          {/* Exhibition Chapters & Artifacts */}
          <div className="lg:col-span-7 space-y-8">
            {activeExhibition.chapters.map((chapter) => {
              const imgKey = `${activeExhibition.id}-${chapter.index}`;
              const hasFailed = failedImages[imgKey];

              return (
                <div
                  key={chapter.index}
                  className="bg-[#2D231B] border border-[#44362B] rounded-xl p-5 sm:p-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-start">
                    <div className="sm:col-span-5">
                      <figure>
                        <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#3B2E24] border border-[#4D3D31]">
                          {!hasFailed ? (
                            <img
                              src={chapter.image}
                              alt={chapter.figureCaption}
                              referrerPolicy="no-referrer"
                              onError={() =>
                                setFailedImages((prev) => ({
                                  ...prev,
                                  [imgKey]: true,
                                }))
                              }
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center p-4 text-center text-xs text-[#C5B8A5]">
                              Arsip Visual Bab {chapter.index}
                            </div>
                          )}
                        </div>
                        <figcaption className="mt-2 text-xs font-display italic text-[#C5B8A5] leading-snug">
                          {chapter.figureCaption}
                        </figcaption>
                      </figure>
                    </div>

                    <div className="sm:col-span-7 flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-widest text-[#D89A7E]">
                          Bab {chapter.index}
                        </p>
                        <h4 className="mt-1 font-display text-xl font-semibold text-[#F6F2EA]">
                          {chapter.title}
                        </h4>
                        <p className="mt-2.5 text-sm text-[#D5CBB8] leading-relaxed">
                          {chapter.narrative}
                        </p>
                      </div>

                      {/* Linked Catalog Artifacts */}
                      <div className="mt-5 pt-4 border-t border-[#44362B]">
                        <p className="text-[11px] font-mono uppercase tracking-wider text-[#A99B8C] mb-2">
                          Koleksi Terkait dalam Pameran
                        </p>
                        <div className="space-y-2">
                          {chapter.linkedItemIds.map((itemId) => {
                            const linked = findItem(itemId);
                            if (!linked) return null;
                            return (
                              <button
                                key={linked.id}
                                type="button"
                                onClick={() => onSelectItem(linked)}
                                className="w-full flex items-center justify-between gap-3 px-3 py-2 text-left text-xs rounded-lg bg-[#221A14] hover:bg-[#382C23] border border-[#44362B] transition-colors cursor-pointer"
                              >
                                <span className="truncate font-medium text-[#F6F2EA]">
                                  {linked.dublinCore.judul}
                                </span>
                                <span className="inline-flex items-center gap-1 text-[#D89A7E] shrink-0 whitespace-nowrap">
                                  <span>Inspeksi</span>
                                  <ArrowUpRight className="w-3.5 h-3.5" />
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
