import { useMemo, useState } from 'react';
import { Bookmark, BookmarkCheck, Eye, Search, X } from 'lucide-react';
import type {
  AccessRight,
  CollectionCategory,
  LibraryItem,
} from '../types/library';
import { ItemCoverArt } from './ItemCoverArt';

interface CatalogSectionProps {
  items: LibraryItem[];
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectItem: (item: LibraryItem) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}

const CATEGORY_TABS: { id: 'all' | CollectionCategory; label: string }[] = [
  { id: 'all', label: 'Semua Koleksi' },
  { id: 'ebook', label: 'E-Book' },
  { id: 'komik', label: 'Komik Digital' },
  { id: 'arsip', label: 'Fotografi & Arsip Visual' },
];

const ACCESS_FILTERS: { id: 'all' | AccessRight; label: string }[] = [
  { id: 'all', label: 'Semua Hak Akses' },
  { id: 'Akses Terbuka (CC BY-NC)', label: 'Akses Terbuka' },
  { id: 'Baca di Tempat (Wi-Fi Ramu)', label: 'Baca di Tempat' },
  { id: 'Anggota Ramu', label: 'Anggota Ramu' },
];

function getCategoryLabel(category: CollectionCategory): string {
  switch (category) {
    case 'ebook':
      return 'E-Book';
    case 'komik':
      return 'Komik Digital';
    case 'arsip':
      return 'Fotografi / Arsip Visual';
  }
}

export function CatalogSection({
  items,
  savedIds,
  onToggleSave,
  onSelectItem,
  searchInputRef,
}: CatalogSectionProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | CollectionCategory
  >('all');
  const [selectedAccess, setSelectedAccess] = useState<'all' | AccessRight>(
    'all'
  );
  const [onlySaved, setOnlySaved] = useState(false);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (onlySaved && !savedIds.includes(item.id)) return false;
      if (selectedCategory !== 'all' && item.category !== selectedCategory)
        return false;
      if (
        selectedAccess !== 'all' &&
        item.dublinCore.hakAkses !== selectedAccess
      )
        return false;

      if (!q) return true;

      const dc = item.dublinCore;
      return (
        dc.judul.toLowerCase().includes(q) ||
        dc.penulis.toLowerCase().includes(q) ||
        dc.subjek.toLowerCase().includes(q) ||
        dc.format.toLowerCase().includes(q) ||
        dc.hakAkses.toLowerCase().includes(q) ||
        item.accessionNumber.toLowerCase().includes(q)
      );
    });
  }, [items, query, selectedCategory, selectedAccess, onlySaved, savedIds]);

  const resetFilters = () => {
    setQuery('');
    setSelectedCategory('all');
    setSelectedAccess('all');
    setOnlySaved(false);
  };

  return (
    <section id="collections" className="border-b border-[#D5CBB8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#D5CBB8]">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#7D6E60] mb-2">
              02. Collections · Katalog & Akses Digital
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#221A14] text-balance">
              Jelajahi Katalog Perpustakaan Ramu
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#5C4D40] max-w-2xl">
              Telusuri e-book, komik digital, dan fotografi/arsip visual. Setiap
              entri dilengkapi metadata Dublin Core dan pembaca digital langsung.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setOnlySaved((prev) => !prev)}
              aria-pressed={onlySaved}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                onlySaved
                  ? 'bg-[#9C5132] text-[#F6F2EA] border-[#9C5132]'
                  : 'bg-[#ECE5D8] text-[#221A14] border-[#D5CBB8] hover:bg-[#E2D9C8]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span className="tabular-nums">
                Rak Seduh Saya ({savedIds.length})
              </span>
            </button>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#7D6E60] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                ref={searchInputRef}
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari judul, penulis, subjek, atau format..."
                aria-label="Cari koleksi katalog Ramu"
                className="w-full pl-10 pr-9 py-2.5 text-sm bg-[#F6F2EA] border border-[#D5CBB8] rounded-lg text-[#221A14] placeholder:text-[#7D6E60] focus:outline-none focus:ring-2 focus:ring-[#465B43]"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Hapus kata kunci pencarian"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#7D6E60] hover:text-[#221A14] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category segmented control */}
            <div
              role="group"
              aria-label="Filter jenis koleksi"
              className="flex flex-wrap items-center gap-1 p-1 bg-[#ECE5D8] border border-[#D5CBB8] rounded-lg"
            >
              {CATEGORY_TABS.map((tab) => {
                const active = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#465B43] text-[#F6F2EA]'
                        : 'text-[#5C4D40] hover:text-[#221A14]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Access rights filter row + result count */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#7D6E60] mr-1">
                Hak Akses:
              </span>
              {ACCESS_FILTERS.map((af) => {
                const active = selectedAccess === af.id;
                return (
                  <button
                    key={af.id}
                    type="button"
                    onClick={() => setSelectedAccess(af.id)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      active
                        ? 'bg-[#221A14] text-[#F6F2EA] border-[#221A14]'
                        : 'bg-transparent text-[#5C4D40] border-[#D5CBB8] hover:border-[#7D6E60] hover:text-[#221A14]'
                    }`}
                  >
                    {af.label}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-[#7D6E60] font-mono tabular-nums">
              Menampilkan {filteredItems.length} dari {items.length} entri
            </p>
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredItems.length === 0 ? (
          <div className="mt-10 p-10 text-center border border-[#D5CBB8] rounded-xl bg-[#ECE5D8]/40">
            <p className="font-display text-xl text-[#221A14]">
              Tidak ada koleksi yang sesuai dengan filter Anda.
            </p>
            <p className="mt-2 text-sm text-[#5C4D40]">
              Coba ubah kata kunci pencarian atau atur ulang filter kategori dan
              hak akses.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-5 px-4 py-2 text-xs font-semibold text-[#F6F2EA] bg-[#465B43] hover:bg-[#384A35] rounded-lg transition-colors cursor-pointer"
            >
              Atur Ulang Filter
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isSaved = savedIds.includes(item.id);
              const dc = item.dublinCore;
              return (
                <article
                  key={item.id}
                  className="group flex flex-col justify-between bg-[#F6F2EA] border border-[#D5CBB8] rounded-xl p-5 transition-colors duration-150 hover:border-[#7D6E60]"
                >
                  <div>
                    {/* Quiet single-line unboxed kicker */}
                    <div className="flex items-center justify-between gap-2 text-xs text-[#7D6E60] mb-3">
                      <span className="font-medium text-[#465B43]">
                        {getCategoryLabel(item.category)}
                      </span>
                      <span className="font-mono tabular-nums">
                        {item.accessionNumber}
                      </span>
                    </div>

                    {/* Cover artwork */}
                    <button
                      type="button"
                      onClick={() => onSelectItem(item)}
                      className="w-full text-left block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#465B43] rounded-lg cursor-pointer"
                      aria-label={`Buka detail dan baca ${dc.judul}`}
                    >
                      <ItemCoverArt
                        item={item}
                        className="w-full aspect-[4/3] rounded-lg"
                      />
                    </button>

                    {/* Title & Synopsis */}
                    <h3 className="mt-4 font-display text-xl font-semibold text-[#221A14] leading-snug">
                      <button
                        type="button"
                        onClick={() => onSelectItem(item)}
                        className="text-left hover:text-[#9C5132] transition-colors cursor-pointer"
                      >
                        {dc.judul}
                      </button>
                    </h3>
                    <p className="mt-2 text-sm text-[#5C4D40] leading-relaxed line-clamp-2">
                      {item.synopsis}
                    </p>

                    {/* Simple Dublin Core 5-field summary */}
                    <dl className="mt-4 pt-3 border-t border-[#D5CBB8] space-y-1.5 text-xs">
                      <div className="flex justify-between gap-3">
                        <dt className="text-[#7D6E60] shrink-0">Penulis</dt>
                        <dd className="text-[#221A14] font-medium text-right truncate">
                          {dc.penulis}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-[#7D6E60] shrink-0">Subjek</dt>
                        <dd className="text-[#5C4D40] text-right truncate">
                          {dc.subjek}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-[#7D6E60] shrink-0">Format</dt>
                        <dd className="font-mono text-[#5C4D40] text-right truncate">
                          {dc.format}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt className="text-[#7D6E60] shrink-0">Hak Akses</dt>
                        <dd className="text-[#9C5132] font-medium text-right truncate">
                          {dc.hakAkses}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-5 pt-4 border-t border-[#D5CBB8] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectItem(item)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#F6F2EA] bg-[#465B43] hover:bg-[#384A35] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Baca & Metadata</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onToggleSave(item.id)}
                      aria-pressed={isSaved}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isSaved
                          ? 'bg-[#ECE5D8] text-[#9C5132] border-[#9C5132]'
                          : 'bg-transparent text-[#5C4D40] border-[#D5CBB8] hover:text-[#221A14] hover:border-[#7D6E60]'
                      }`}
                    >
                      {isSaved ? (
                        <>
                          <BookmarkCheck className="w-3.5 h-3.5" />
                          <span>Tersimpan</span>
                        </>
                      ) : (
                        <>
                          <Bookmark className="w-3.5 h-3.5" />
                          <span>Simpan</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
