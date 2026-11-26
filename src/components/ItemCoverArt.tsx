import { useState } from 'react';
import { BookOpen, Camera, Layers } from 'lucide-react';
import type { LibraryItem } from '../types/library';

interface ItemCoverArtProps {
  item: LibraryItem;
  className?: string;
}

const TONE_MAP = {
  sage: {
    bg: 'bg-[#DCE2D6]',
    ink: 'text-[#243022]',
    accent: '#465B43',
    border: 'border-[#B9C5B1]',
  },
  clay: {
    bg: 'bg-[#EADAD0]',
    ink: 'text-[#3A1E13]',
    accent: '#9C5132',
    border: 'border-[#D5BBA9]',
  },
  espresso: {
    bg: 'bg-[#32271F]',
    ink: 'text-[#F6F2EA]',
    accent: '#D5CBB8',
    border: 'border-[#4D3D31]',
  },
  oat: {
    bg: 'bg-[#EAE2D3]',
    ink: 'text-[#221A14]',
    accent: '#7D6E60',
    border: 'border-[#D5CBB8]',
  },
};

export function ItemCoverArt({ item, className = '' }: ItemCoverArtProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const palette = TONE_MAP[item.coverTone];

  if (item.coverImage && !imgFailed) {
    return (
      <div
        className={`relative overflow-hidden bg-[#ECE5D8] ${className}`}
      >
        <img
          src={item.coverImage}
          alt={item.dublinCore.judul}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  const CategoryIcon =
    item.category === 'ebook'
      ? BookOpen
      : item.category === 'komik'
        ? Layers
        : Camera;

  return (
    <div
      className={`relative overflow-hidden p-5 flex flex-col justify-between border ${palette.bg} ${palette.ink} ${palette.border} ${className}`}
    >
      {/* Subtle archival geometric linework */}
      <svg
        viewBox="0 0 240 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        {item.coverMotif === 'architecture' && (
          <>
            <path
              d="M40 160V75C40 42 75 20 120 20C165 20 200 42 200 75V160"
              stroke={palette.accent}
              strokeWidth="1.5"
            />
            <path
              d="M70 160V85C70 60 92 44 120 44C148 44 170 60 170 85V160"
              stroke={palette.accent}
              strokeWidth="1.2"
            />
            <line
              x1="20"
              y1="125"
              x2="220"
              y2="125"
              stroke={palette.accent}
              strokeWidth="1"
            />
          </>
        )}
        {item.coverMotif === 'botanical' && (
          <>
            <circle
              cx="120"
              cy="80"
              r="54"
              stroke={palette.accent}
              strokeWidth="1.2"
            />
            <path
              d="M120 26V134M120 80C138 62 155 60 165 65M120 96C100 78 85 75 74 82"
              stroke={palette.accent}
              strokeWidth="1.3"
            />
          </>
        )}
        {item.coverMotif === 'comic' && (
          <>
            <rect
              x="18"
              y="18"
              width="95"
              height="60"
              stroke={palette.accent}
              strokeWidth="1.4"
            />
            <rect
              x="125"
              y="18"
              width="97"
              height="124"
              stroke={palette.accent}
              strokeWidth="1.4"
            />
            <rect
              x="18"
              y="88"
              width="95"
              height="54"
              stroke={palette.accent}
              strokeWidth="1.4"
            />
          </>
        )}
        {item.coverMotif === 'archival' && (
          <>
            <rect
              x="24"
              y="24"
              width="192"
              height="112"
              stroke={palette.accent}
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <circle
              cx="120"
              cy="80"
              r="28"
              stroke={palette.accent}
              strokeWidth="1.4"
            />
          </>
        )}
      </svg>

      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest opacity-80">
        <span>{item.accessionNumber}</span>
        <CategoryIcon className="w-4 h-4" />
      </div>

      <div className="relative z-10 mt-6">
        <p className="font-display text-lg sm:text-xl font-semibold leading-snug line-clamp-3">
          {item.dublinCore.judul}
        </p>
        <p className="mt-2 text-xs opacity-80 truncate">
          {item.dublinCore.penulis}
        </p>
      </div>
    </div>
  );
}
