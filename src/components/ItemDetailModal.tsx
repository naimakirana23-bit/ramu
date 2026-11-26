import { useEffect, useState } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import type { LibraryItem } from '../types/library';
import { ItemCoverArt } from './ItemCoverArt';

interface ItemDetailModalProps {
  item: LibraryItem | null;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onClose: () => void;
}

export function ItemDetailModal({
  item,
  isSaved,
  onToggleSave,
  onClose,
}: ItemDetailModalProps) {
  const [pageIdx, setPageIdx] = useState(0);
  const [textScale, setTextScale] = useState<'sm' | 'md' | 'lg'>('md');
  const [darkPaper, setDarkPaper] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setPageIdx(0);
    setZoomed(false);
    setCopied(false);
  }, [item?.id]);

  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [item, onClose]);

  if (!item) return null;

  const dc = item.dublinCore;

  const handleCopyCitation = async () => {
    const citation = `${dc.penulis}. "${dc.judul}". ${dc.subjek}. Format: ${dc.format}. Hak Akses: ${dc.hakAkses}. Perpustakaan Digital Ramu (${item.accessionNumber}).`;
    try {
      await navigator.clipboard.writeText(citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const ebookPages = item.ebookPages ?? [];
  const comicPanels = item.comicPanels ?? [];

  const textSizeClass =
    textScale === 'sm'
      ? 'text-sm leading-relaxed'
      : textScale === 'lg'
        ? 'text-lg leading-loose'
        : 'text-base leading-relaxed';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dc-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#221A14]/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#F6F2EA] border border-[#D5CBB8] rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-5 sm:px-7 py-4 bg-[#F6F2EA]/95 backdrop-blur-xs border-b border-[#D5CBB8]">
          <div className="min-w-0">
            <p className="text-xs font-mono uppercase tracking-widest text-[#7D6E60] truncate">
              Rekaman Dublin Core · {item.accessionNumber}
            </p>
            <h2
              id="modal-dc-title"
              className="font-display text-lg sm:text-xl font-semibold text-[#221A14] truncate"
            >
              {dc.judul}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onToggleSave(item.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-[#ECE5D8] text-[#9C5132] border-[#9C5132]'
                  : 'border-[#D5CBB8] text-[#5C4D40] hover:text-[#221A14]'
              }`}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Tersimpan</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Simpan</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Tutup jendela baca"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg border border-[#D5CBB8] text-[#221A14] hover:bg-[#ECE5D8] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body Grid: Left Dublin Core Accession Table | Right Interactive Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left: Dublin Core Metadata */}
          <aside className="lg:col-span-5 p-5 sm:p-7 border-b lg:border-b-0 lg:border-r border-[#D5CBB8] bg-[#ECE5D8]/40 space-y-6">
            <ItemCoverArt
              item={item}
              className="w-full aspect-[4/3] rounded-lg"
            />

            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#7D6E60] mb-3">
                Metadata Dublin Core Sederhana
              </h3>
              <dl className="divide-y divide-[#D5CBB8] border-y border-[#D5CBB8] text-sm">
                <div className="py-2.5">
                  <dt className="text-xs font-mono text-[#7D6E60]">
                    Judul (dc:title)
                  </dt>
                  <dd className="mt-0.5 font-medium text-[#221A14]">
                    {dc.judul}
                  </dd>
                </div>
                <div className="py-2.5">
                  <dt className="text-xs font-mono text-[#7D6E60]">
                    Penulis (dc:creator)
                  </dt>
                  <dd className="mt-0.5 text-[#221A14]">{dc.penulis}</dd>
                </div>
                <div className="py-2.5">
                  <dt className="text-xs font-mono text-[#7D6E60]">
                    Subjek (dc:subject)
                  </dt>
                  <dd className="mt-0.5 text-[#5C4D40]">{dc.subjek}</dd>
                </div>
                <div className="py-2.5">
                  <dt className="text-xs font-mono text-[#7D6E60]">
                    Format (dc:format)
                  </dt>
                  <dd className="mt-0.5 font-mono text-xs text-[#221A14]">
                    {dc.format}
                  </dd>
                </div>
                <div className="py-2.5">
                  <dt className="text-xs font-mono text-[#7D6E60]">
                    Hak Akses (dc:rights)
                  </dt>
                  <dd className="mt-0.5 font-medium text-[#9C5132]">
                    {dc.hakAkses}
                  </dd>
                </div>
              </dl>
            </div>

            <button
              type="button"
              onClick={handleCopyCitation}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-lg border border-[#D5CBB8] bg-[#F6F2EA] hover:bg-[#ECE5D8] text-[#221A14] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#465B43]" />
                  <span>Sitasi Dublin Core Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Sitasi Dublin Core</span>
                </>
              )}
            </button>
          </aside>

          {/* Right: Tailored Digital Reader / Viewer */}
          <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between">
            {/* E-BOOK READER */}
            {item.category === 'ebook' && ebookPages.length > 0 && (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#D5CBB8]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#465B43]">
                      Pembaca E-Book Ramu
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="inline-flex border border-[#D5CBB8] rounded-md overflow-hidden">
                        {(['sm', 'md', 'lg'] as const).map((sz) => (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => setTextScale(sz)}
                            className={`px-2.5 py-1 text-xs font-mono cursor-pointer ${
                              textScale === sz
                                ? 'bg-[#465B43] text-[#F6F2EA]'
                                : 'bg-[#F6F2EA] text-[#5C4D40]'
                            }`}
                          >
                            {sz === 'sm' ? 'A-' : sz === 'md' ? 'A' : 'A+'}
                          </button>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => setDarkPaper((p) => !p)}
                        className="px-2.5 py-1 text-xs border border-[#D5CBB8] rounded-md text-[#5C4D40] hover:text-[#221A14] cursor-pointer"
                      >
                        {darkPaper ? 'Kertas Terang' : 'Mode Malam'}
                      </button>
                    </div>
                  </div>

                  <div
                    className={`mt-5 p-6 sm:p-8 rounded-xl border transition-colors ${
                      darkPaper
                        ? 'bg-[#221A14] text-[#ECE5D8] border-[#44362B]'
                        : 'bg-[#FBF9F5] text-[#221A14] border-[#D5CBB8]'
                    }`}
                  >
                    <p className="text-xs font-mono uppercase tracking-widest opacity-70 mb-3">
                      {ebookPages[pageIdx].chapter}
                    </p>
                    <div className={`space-y-4 font-display ${textSizeClass}`}>
                      {ebookPages[pageIdx].content.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#D5CBB8] flex items-center justify-between">
                  <button
                    type="button"
                    disabled={pageIdx === 0}
                    onClick={() => setPageIdx((p) => Math.max(0, p - 1))}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-[#D5CBB8] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Bab Sebelumnya</span>
                  </button>
                  <span className="text-xs font-mono text-[#7D6E60] tabular-nums">
                    Bagian {pageIdx + 1} / {ebookPages.length}
                  </span>
                  <button
                    type="button"
                    disabled={pageIdx >= ebookPages.length - 1}
                    onClick={() =>
                      setPageIdx((p) => Math.min(ebookPages.length - 1, p + 1))
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-[#D5CBB8] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span>Bab Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* KOMIK DIGITAL READER */}
            {item.category === 'komik' && comicPanels.length > 0 && (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#D5CBB8]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9C5132]">
                      Pembaca Komik Digital
                    </span>
                    <span className="text-xs font-mono text-[#7D6E60] tabular-nums">
                      Halaman {comicPanels[pageIdx].pageNumber} dari{' '}
                      {comicPanels.length}
                    </span>
                  </div>

                  <div className="mt-5 rounded-xl border-2 border-[#221A14] bg-[#FBF9F5] p-5 sm:p-6 space-y-5">
                    <div className="flex items-center justify-between border-b border-[#D5CBB8] pb-3">
                      <h4 className="font-display text-lg font-semibold text-[#221A14]">
                        {comicPanels[pageIdx].sceneTitle}
                      </h4>
                      <span className="text-xs font-mono text-[#7D6E60] tabular-nums">
                        PANEL 0{comicPanels[pageIdx].pageNumber}
                      </span>
                    </div>

                    {/* Visual scene panel frame */}
                    <div className="p-4 rounded-lg bg-[#ECE5D8] border border-[#D5CBB8] text-sm text-[#5C4D40] italic">
                      [Adegan Visual]: {comicPanels[pageIdx].visualDescription}
                    </div>

                    {/* Comic dialogue bubbles */}
                    <div className="space-y-3">
                      {comicPanels[pageIdx].dialogue.map((line, i) => (
                        <div
                          key={i}
                          className="p-3.5 rounded-lg bg-[#F6F2EA] border border-[#D5CBB8]"
                        >
                          <p className="text-xs font-mono uppercase tracking-wider text-[#465B43] font-semibold">
                            {line.speaker}
                          </p>
                          <p className="mt-1 text-sm text-[#221A14]">
                            “{line.line}”
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#D5CBB8] flex items-center justify-between">
                  <button
                    type="button"
                    disabled={pageIdx === 0}
                    onClick={() => setPageIdx((p) => Math.max(0, p - 1))}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-[#D5CBB8] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Panel Sebelumnya</span>
                  </button>
                  <button
                    type="button"
                    disabled={pageIdx >= comicPanels.length - 1}
                    onClick={() =>
                      setPageIdx((p) => Math.min(comicPanels.length - 1, p + 1))
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium rounded-lg border border-[#D5CBB8] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                  >
                    <span>Panel Berikutnya</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* FOTOGRAFI / ARSIP VISUAL VIEWER */}
            {item.category === 'arsip' && item.archivePlate && (
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between gap-3 pb-4 border-b border-[#D5CBB8]">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#465B43]">
                      Meja Terang Arsip Visual
                    </span>
                    <button
                      type="button"
                      onClick={() => setZoomed((z) => !z)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md border border-[#D5CBB8] hover:bg-[#ECE5D8] cursor-pointer"
                    >
                      {zoomed ? (
                        <>
                          <ZoomOut className="w-3.5 h-3.5" />
                          <span>Perkecil</span>
                        </>
                      ) : (
                        <>
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>Perbesar Pelat</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mt-5 rounded-xl overflow-hidden border border-[#D5CBB8] bg-[#221A14]">
                    <div
                      className={`transition-transform duration-300 origin-center ${
                        zoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                      }`}
                      onClick={() => setZoomed((z) => !z)}
                    >
                      <ItemCoverArt
                        item={item}
                        className="w-full aspect-[4/3]"
                      />
                    </div>
                  </div>

                  <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#ECE5D8]/50 border border-[#D5CBB8] text-xs">
                    <div>
                      <dt className="font-mono text-[#7D6E60]">Lokasi Rekam</dt>
                      <dd className="mt-0.5 font-medium text-[#221A14]">
                        {item.archivePlate.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[#7D6E60]">Tahun & Resolusi</dt>
                      <dd className="mt-0.5 font-medium text-[#221A14] tabular-nums">
                        {item.archivePlate.yearCaptured} ·{' '}
                        {item.archivePlate.dimensions}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="font-mono text-[#7D6E60]">
                        Perangkat & Emulsi
                      </dt>
                      <dd className="mt-0.5 text-[#5C4D40]">
                        {item.archivePlate.cameraSpec}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-4 text-sm text-[#5C4D40] leading-relaxed">
                    {item.archivePlate.curatorNote}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
