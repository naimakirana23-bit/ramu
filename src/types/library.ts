export type CollectionCategory = 'ebook' | 'komik' | 'arsip';

export type AccessRight =
  | 'Akses Terbuka (CC BY-NC)'
  | 'Baca di Tempat (Wi-Fi Ramu)'
  | 'Anggota Ramu';

export interface DublinCoreMetadata {
  judul: string;
  penulis: string;
  subjek: string;
  format: string;
  hakAkses: AccessRight;
}

export interface EbookPage {
  chapter: string;
  content: string[];
}

export interface ComicPanel {
  pageNumber: number;
  sceneTitle: string;
  visualDescription: string;
  dialogue: { speaker: string; line: string }[];
  tone: 'oat' | 'sage' | 'clay' | 'espresso';
}

export interface ArchivePlateDetails {
  location: string;
  yearCaptured: string;
  cameraSpec: string;
  curatorNote: string;
  dimensions: string;
}

export interface LibraryItem {
  id: string;
  accessionNumber: string;
  category: CollectionCategory;
  year: string;
  durationOrLength: string;
  coverImage?: string;
  coverTone: 'sage' | 'clay' | 'espresso' | 'oat';
  coverMotif: 'botanical' | 'comic' | 'archival' | 'architecture';
  synopsis: string;
  dublinCore: DublinCoreMetadata;
  ebookPages?: EbookPage[];
  comicPanels?: ComicPanel[];
  archivePlate?: ArchivePlateDetails;
}

export interface ExhibitionChapter {
  index: string;
  title: string;
  narrative: string;
  figureCaption: string;
  image: string;
  linkedItemIds: string[];
}

export interface ThematicExhibition {
  id: string;
  editionLabel: string;
  title: string;
  subtitle: string;
  curator: string;
  period: string;
  heroImage: string;
  foreword: string;
  chapters: ExhibitionChapter[];
}

export interface RamuPairing {
  id: string;
  brewName: string;
  brewOriginOrBase: string;
  tastingNotes: string;
  readingMood: string;
  baristaNote: string;
  recommendedItemId: string;
}
