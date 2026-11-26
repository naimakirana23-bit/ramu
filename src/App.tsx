import { useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ApaYangDiramuSection } from './components/ApaYangDiramuSection';
import { CatalogSection } from './components/CatalogSection';
import { ExhibitionSection } from './components/ExhibitionSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ItemDetailModal } from './components/ItemDetailModal';
import { VisitUsSection } from './components/VisitUsSection';
import {
  APA_YANG_DIRAMU,
  LIBRARY_ITEMS,
  THEMATIC_EXHIBITIONS,
} from './data/ramuData';
import type { LibraryItem } from './types/library';

const STORAGE_KEY = 'ramu_rak_seduh_ids';

export function App() {
  const [selectedItem, setSelectedItem] = useState<LibraryItem | null>(null);
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return ['eb-01', 'km-01'];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : ['eb-01', 'km-01'];
    } catch {
      return ['eb-01', 'km-01'];
    }
  });

  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
      // Ignore storage quota errors
    }
  }, [savedIds]);

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExploreCatalog = () => {
    const el = document.getElementById('collections');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        searchInputRef.current?.focus({ preventScroll: true });
      }, 450);
    }
  };

  const handleExploreExhibition = () => {
    const el = document.getElementById('pameran');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F2EA] text-[#221A14]">
      <Header onOpenCatalog={handleExploreCatalog} />

      <main className="flex-1">
        <HeroSection
          totalCatalogCount={LIBRARY_ITEMS.length}
          onExploreCatalog={handleExploreCatalog}
          onExploreExhibition={handleExploreExhibition}
        />

        <AboutSection />

        <CatalogSection
          items={LIBRARY_ITEMS}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onSelectItem={(item) => setSelectedItem(item)}
          searchInputRef={searchInputRef}
        />

        <ExhibitionSection
          exhibitions={THEMATIC_EXHIBITIONS}
          allItems={LIBRARY_ITEMS}
          onSelectItem={(item) => setSelectedItem(item)}
        />

        <ApaYangDiramuSection
          pairings={APA_YANG_DIRAMU}
          allItems={LIBRARY_ITEMS}
          onSelectItem={(item) => setSelectedItem(item)}
        />

        <VisitUsSection />
      </main>

      <Footer />

      <ItemDetailModal
        item={selectedItem}
        isSaved={selectedItem ? savedIds.includes(selectedItem.id) : false}
        onToggleSave={handleToggleSave}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}

export default App;
