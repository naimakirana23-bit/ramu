import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { TukuCupLogo } from './TukuCupLogo';

interface HeaderProps {
  onOpenCatalog: () => void;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Apa yang diRAMU', href: '#apa-yang-diramu' },
  { label: 'Visit Us', href: '#visit-us' },
];

export function Header({ onOpenCatalog }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F6F2EA]/95 backdrop-blur-sm border-b border-[#D5CBB8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark + Tuku-inspired cup emblem (single line) */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-[#221A14] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#465B43] rounded-md py-1"
        >
          <TukuCupLogo className="w-7 h-7 shrink-0" />
          <span className="font-display text-2xl font-semibold tracking-tight leading-none">
            Ramu
          </span>
        </a>

        {/* Zone 2: 4 single-line navigation links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5C4D40]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#221A14] hover:underline underline-offset-4 decoration-[#9C5132] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#465B43] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenCatalog}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-[#F6F2EA] bg-[#465B43] hover:bg-[#384A35] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#465B43]"
          >
            Jelajahi Katalog
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#D5CBB8] text-[#221A14] hover:bg-[#ECE5D8] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D5CBB8] bg-[#F6F2EA] px-4 py-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block py-2.5 px-3 text-sm font-medium text-[#221A14] hover:bg-[#ECE5D8] rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCatalog();
            }}
            className="w-full mt-2 py-2.5 px-4 text-sm font-semibold text-[#F6F2EA] bg-[#465B43] hover:bg-[#384A35] rounded-lg transition-colors cursor-pointer"
          >
            Jelajahi Katalog
          </button>
        </div>
      )}
    </header>
  );
}
