import type {
  LibraryItem,
  RamuPairing,
  ThematicExhibition,
} from '../types/library';

export const HERO_IMAGE = '/src/assets/images/ramu_hero_cafe_1795659940083.jpg';
export const EXHIBITION_ARCHIVE_IMAGE =
  '/src/assets/images/exhibition_kopi_archive_1795659940873.jpg';
export const EBOOK_COVER_IMAGE =
  '/src/assets/images/ebook_urban_botany_1795659940567.jpg';
export const COMIC_COVER_IMAGE =
  '/src/assets/images/comic_kedai_zine_1795659941932.jpg';
export const PHOTO_ARCHIVE_IMAGE =
  '/src/assets/images/photo_arsip_pasar_1795659942586.jpg';

export const LIBRARY_ITEMS: LibraryItem[] = [
  {
    id: 'eb-01',
    accessionNumber: 'RAMU-EB-2026-001',
    category: 'ebook',
    year: '2025',
    durationOrLength: '148 hlm',
    coverImage: EBOOK_COVER_IMAGE,
    coverTone: 'sage',
    coverMotif: 'botanical',
    synopsis:
      'Kumpulan esai intim tentang memori meja makan, tanaman pekarangan tropis, dan bagaimana resep keluarga bertahan melampaui perpindahan kota.',
    dublinCore: {
      judul: 'Cahaya di Timur: Sebuah Novel tentang Keluarga & Kenangan',
      penulis: 'Asri Lestari',
      subjek: 'Sastra Kontemporer · Memori Ruang & Botani Tropis',
      format: 'EPUB / PDF Terbuka (4.2 MB)',
      hakAkses: 'Akses Terbuka (CC BY-NC)',
    },
    ebookPages: [
      {
        chapter: 'Bab 01 — Daun Kopi dan Jendela Timur',
        content: [
          'Setiap pagi pukul setengah tujuh, cahaya matahari Cipete selalu jatuh miring tepat di bibir cangkir keramik buatan ibu. Tidak pernah tergesa, tidak pernah terlalu silau.',
          'Di halaman belakang yang hanya tersisa tiga meter persegi, pohon kopi liberika warisan kakek masih berbuah jarang-jarang. Daunnya yang tebal menyimpan debu jalanan Jakarta Selatan, namun selalu mengilap kembali setiap selesai hujan sore.',
          'Kami belajar meramu percakapan seperti meramu seduhan pagi: sedikit sabar menunggu air turun, sedikit berani menerima rasa pahit yang jujur.',
        ],
      },
      {
        chapter: 'Bab 02 — Peta Aroma di Lemari Kayu',
        content: [
          'Di balik pintu lemari kayu jati yang engselnya berderit pelan, nenek menyimpan stoples kaca berisi kapulaga, cengkeh, dan catatan belanja sejak tahun 1984.',
          'Membaca ulang daftar belanja itu terasa seperti membaca arsip sejarah ekonomi rumah tangga. Harga gula merah, ongkos becak, dan catatan kecil di pinggir kertas tentang siapa yang datang berkunjung sore itu.',
          'Ilmu sering kali bersembunyi di tempat-tempat paling domestik—di antara catatan dapur, pot terakota, dan obrolan ringan sebelum berangkat kerja.',
        ],
      },
    ],
  },
  {
    id: 'eb-02',
    accessionNumber: 'RAMU-EB-2026-002',
    category: 'ebook',
    year: '2026',
    durationOrLength: '112 hlm',
    coverTone: 'clay',
    coverMotif: 'architecture',
    synopsis:
      'Studi arsitektur mikro mengenai kedai kopi gang, ruang ketiga anak muda urban, dan material lokal berbiaya rendah seperti bata ekspos dan terakota.',
    dublinCore: {
      judul: 'Arsitektur Ruang Ketiga: Tipologi Kedai Kopi & Perpustakaan Gang',
      penulis: 'Nadia Pramudita & Raka Wicaksono',
      subjek: 'Arsitektur Urban · Ruang Publik & Budaya Kafe',
      format: 'PDF Interaktif (8.7 MB)',
      hakAkses: 'Baca di Tempat (Wi-Fi Ramu)',
    },
    ebookPages: [
      {
        chapter: 'Bagian 1 — Dari Warung ke Ruang Baca Komunal',
        content: [
          'Gelombang kedai kopi tetangga di Indonesia mengubah cara generasi muda memaknai ruang tinggalnya. Ketika apartemen dan kamar kos semakin ringkas, ruang kerja dan ruang berkumpul berpindah ke meja komunal berjarak lima menit jalan kaki.',
          'Kehadiran rak buku di sudut kedai bukan sekadar pemanis interior. Ia mengembalikan ritme membaca lambat di tengah kota yang terbiasa terburu-buru.',
        ],
      },
      {
        chapter: 'Bagian 2 — Material Bumi dan Akustik Hening',
        content: [
          'Plesteran kapur warna gandum, kayu sungkai, dan lantai semen poles meredam pantulan suara mesin espresso agar percakapan tetap hangat tanpa memekakkan telinga.',
          'Pencahayaan alami dari kisi kayu menciptakan gradasi waktu yang jujur: pengunjung tahu kapan pagi berakhir dan senja mulai turun tanpa melihat jam ponsel.',
        ],
      },
    ],
  },
  {
    id: 'eb-03',
    accessionNumber: 'RAMU-EB-2026-003',
    category: 'ebook',
    year: '2024',
    durationOrLength: '96 hlm',
    coverTone: 'espresso',
    coverMotif: 'botanical',
    synopsis:
      'Panduan praktis literasi arsip komunitas untuk pegiat zine, pengelola perpustakaan independen, dan kolektif kreatif berbasis katalog Dublin Core.',
    dublinCore: {
      judul: 'Merawat Ingatan Kolektif: Pengantar Katalogisasi Dublin Core untuk Komunitas',
      penulis: 'Dimas Pradipta',
      subjek: 'Ilmu Perpustakaan · Katalogisasi Digital & Arsip Warga',
      format: 'EPUB / Markdown (2.1 MB)',
      hakAkses: 'Akses Terbuka (CC BY-NC)',
    },
    ebookPages: [
      {
        chapter: 'Pendahuluan — Mengapa Arsip Kecil Tetap Penting',
        content: [
          'Tidak semua pengetahuan penting terbit lewat penerbit besar. Zine fotokopian, buku menu kedai tua, poster gig akustik, dan foto pasar pagi sering luput dari katalog perpustakaan resmi.',
          'Dengan lima belas elemen dasar Dublin Core—yang bisa diringkas menjadi lima inti: Judul, Penulis, Subjek, Format, dan Hak Akses—siapa pun bisa membangun katalog yang rapi dan dapat dipertukarkan.',
        ],
      },
      {
        chapter: 'Prinsip 5 Elemen Sederhana',
        content: [
          '1. Judul: Nama resmi karya atau deskripsi ringkas arsip. 2. Penulis: Kreator, ilustrator, atau fotografer. 3. Subjek: Topik agar pembaca menemukan keterhubungan gagasan. 4. Format: Jenis berkas digital dan ukurannya. 5. Hak Akses: Kejelasan etis siapa yang boleh membaca dan menggandakan.',
        ],
      },
    ],
  },
  {
    id: 'km-01',
    accessionNumber: 'RAMU-KM-2026-004',
    category: 'komik',
    year: '2025',
    durationOrLength: '36 panel',
    coverImage: COMIC_COVER_IMAGE,
    coverTone: 'clay',
    coverMotif: 'comic',
    synopsis:
      'Komik zine slice-of-life tentang dua ilustrator lepas di Bandung dan Jakarta yang bertukar sketsa sambil memesan es kopi susu setiap senja.',
    dublinCore: {
      judul: 'Sketsa & Senja: Sebuah Zine dari Bandung',
      penulis: 'Klara Mahendra & Bagas Setyo',
      subjek: 'Komik Independen · Kehidupan Urban & Sketsa Kafe',
      format: 'CBZ / Webtoon Vertikal (14.5 MB)',
      hakAkses: 'Akses Terbuka (CC BY-NC)',
    },
    comicPanels: [
      {
        pageNumber: 1,
        sceneTitle: 'Panel 01 — Sudut Jalan Jam Lima Sore',
        visualDescription:
          'Lampu gantung tembaga menyala hangat di balik jendela kayu kedai kopi sudut jalan. Hujan rintik memantulkan warna jingga di aspal.',
        dialogue: [
          {
            speaker: 'Klara',
            line: 'Kalau hujan begini, tinta kuasnya lebih lambat kering. Untung meja pojok masih kosong.',
          },
          {
            speaker: 'Bagas',
            line: 'Pesan es kopi susu gula aren dua ya, biar ide halaman empat ikut cair.',
          },
        ],
        tone: 'clay',
      },
      {
        pageNumber: 2,
        sceneTitle: 'Panel 02 — Bertukar Buku Sketsa',
        visualDescription:
          'Dua buku sketsa terbuka bersebelahan di meja kayu. Gelas kaca berisi es kopi susu berembun di antara pena gambar dan penghapus karet.',
        dialogue: [
          {
            speaker: 'Bagas',
            line: 'Garis perspektif warung ini dapet banget suasananya. Ini gedung dekat stasiun lama kan?',
          },
          {
            speaker: 'Klara',
            line: 'Iya, aku gambar waktu nunggu kereta terakhir. Besok kita arsipkan ke rak komik digital Ramu yuk.',
          },
        ],
        tone: 'oat',
      },
      {
        pageNumber: 3,
        sceneTitle: 'Panel 03 — Cetakan Pertama Zine',
        visualDescription:
          'Tumpukan zine tipis berjilid jahit benang diletakkan di rak perpustakaan kafe bersama secangkir kopi tubruk panas.',
        dialogue: [
          {
            speaker: 'Barista Ramu',
            line: 'Selamat datang di katalog bulan ini! Kode aksesnya sudah kutulis di kartu Dublin Core.',
          },
        ],
        tone: 'sage',
      },
    ],
  },
  {
    id: 'km-02',
    accessionNumber: 'RAMU-KM-2026-005',
    category: 'komik',
    year: '2026',
    durationOrLength: '24 panel',
    coverTone: 'sage',
    coverMotif: 'comic',
    synopsis:
      'Komik strip humor ringan tentang keseharian barista perpustakaan yang harus menjelaskan bedanya katalog DDC dan seduhan V60.',
    dublinCore: {
      judul: 'Catatan Meja Bar: Barista yang Merangkap Pustakawan',
      penulis: 'Tama Nurhadi',
      subjek: 'Komik Strip · Humor Profesi & Budaya Kopi',
      format: 'Webcomic PNG / PDF (9.8 MB)',
      hakAkses: 'Baca di Tempat (Wi-Fi Ramu)',
    },
    comicPanels: [
      {
        pageNumber: 1,
        sceneTitle: 'Panel 01 — Salah Tanya Rak',
        visualDescription:
          'Pengunjung berdiri bingung di depan rak komik sambil memegang kertas daftar belanja dan gelas matcha dingin.',
        dialogue: [
          {
            speaker: 'Pengunjung',
            line: 'Mas, buku tentang proses giling basah kopi Gayo di rak mana ya?',
          },
          {
            speaker: 'Tama',
            line: 'Mau yang berbentuk e-book, komik sejarah, atau mau langsung cicip biji kopinya di bar?',
          },
        ],
        tone: 'sage',
      },
      {
        pageNumber: 2,
        sceneTitle: 'Panel 02 — Katalogisasi Darurat',
        visualDescription:
          'Tama menempelkan label kertas kraft pada binder zine baru sambil menunggu air mendidih di ketel leher angsa.',
        dialogue: [
          {
            speaker: 'Tama',
            line: 'Suhu air 92 derajat, metadata Dublin Core sudah lengkap. Mari meramu pagi!',
          },
        ],
        tone: 'espresso',
      },
    ],
  },
  {
    id: 'km-03',
    accessionNumber: 'RAMU-KM-2026-006',
    category: 'komik',
    year: '2024',
    durationOrLength: '42 panel',
    coverTone: 'oat',
    coverMotif: 'comic',
    synopsis:
      'Novel grafis pendek tanpa banyak dialog tentang perjalanan biji kopi dari kebun berkabut di Flores hingga menjadi teman begadang mahasiswa desain.',
    dublinCore: {
      judul: 'Dari Kabut Bajawa ke Meja Begadang',
      penulis: 'Sinta Wijaya',
      subjek: 'Novel Grafis · Agraria Kopi & Perjalanan Visual',
      format: 'CBZ Resolusi Tinggi (22.4 MB)',
      hakAkses: 'Anggota Ramu',
    },
    comicPanels: [
      {
        pageNumber: 1,
        sceneTitle: 'Panel 01 — Embun Pagi di Lereng Gunung',
        visualDescription:
          'Siluet pepohonan pelindung dan ceri kopi merah tua di antara kabut biru keabuan pagi pegunungan.',
        dialogue: [
          {
            speaker: 'Narator',
            line: 'Di ketinggian 1.400 meter, waktu berjalan mengikuti musim petik, bukan tenggat waktu klien.',
          },
        ],
        tone: 'sage',
      },
      {
        pageNumber: 2,
        sceneTitle: 'Panel 02 — Lampu Meja Pukul 02.15',
        visualDescription:
          'Meja kerja penuh sketsa arsitektur, laptop menyala hangat, dan sisa seduhan cold brew di gelas bening.',
        dialogue: [
          {
            speaker: 'Narator',
            line: 'Sebelas hari perjalanan darat dan laut tiba dalam satu tegukan yang menjaga mata tetap terjaga.',
          },
        ],
        tone: 'clay',
      },
    ],
  },
  {
    id: 'ar-01',
    accessionNumber: 'RAMU-AR-2026-007',
    category: 'arsip',
    year: '1998–2025',
    durationOrLength: '18 pelat foto',
    coverImage: PHOTO_ARCHIVE_IMAGE,
    coverTone: 'espresso',
    coverMotif: 'archival',
    synopsis:
      'Dokumentasi fotografi analog 35mm mengenai warung kopi rakyat, atap genteng terakota, dan pagi hari di gang pemukiman Jawa sebelum gelombang kedai modern.',
    dublinCore: {
      judul: 'Warung Kopi Pak De & Topografi Pagi Gang Pemukiman',
      penulis: 'Kolektif Lensa Kampung (Arsip Donasi Hendro Kusumo)',
      subjek: 'Fotografi Dokumenter · Warung Kopi Rakyat & Arsitektur Vernakular',
      format: 'TIFF Arsip / JPEG Web (38.0 MB)',
      hakAkses: 'Akses Terbuka (CC BY-NC)',
    },
    archivePlate: {
      location: 'Kotagede & Pasar Ngasem, Yogyakarta',
      yearCaptured: '2004 (Didigitalisasi 2025)',
      cameraSpec: 'Leica M6 · Lensa 35mm f/2 · Film Kodak Portra 400',
      dimensions: '4200 × 3150 px (300 DPI)',
      curatorNote:
        'Pelat ini merekam interaksi paling purba antara kopi seduh panci, meja kayu sederhana, dan pertukaran kabar warga sebelum papan tanda neon masuk ke gang-gang kota.',
    },
  },
  {
    id: 'ar-02',
    accessionNumber: 'RAMU-AR-2026-008',
    category: 'arsip',
    year: '1978–1984',
    durationOrLength: '24 pelat & catatan',
    coverImage: EXHIBITION_ARCHIVE_IMAGE,
    coverTone: 'oat',
    coverMotif: 'archival',
    synopsis:
      'Bundel arsip fisik hasil digitalisasi meliputi lembar kontak foto panen kopi Gayo, buku catatan uji cita rasa tulisan tangan, dan rancangan kemasan vintage.',
    dublinCore: {
      judul: 'Ledger Arsip Kopi Nusantara: Panen Gayo & Catatan Cupping 1983',
      penulis: 'Arsip Perdagangan Kopi Rakyat (Kurasi Perpustakaan Ramu)',
      subjek: 'Arsip Sejarah · Kopi Gayo Sumatra & Catatan Uji Cita Rasa',
      format: 'PDF Arsip & JPEG Kontak Film (44.6 MB)',
      hakAkses: 'Akses Terbuka (CC BY-NC)',
    },
    archivePlate: {
      location: 'Dataran Tinggi Gayo, Aceh Tengah',
      yearCaptured: 'Oktober 1983',
      cameraSpec: 'Nikon FM2 · Roll Film Tri-X 400 & Portra Archive Scan',
      dimensions: '4800 × 3600 px (300 DPI)',
      curatorNote:
        'Catatan tulisan tangan tertanggal 14 Oktober 1983 mendokumentasikan metode Giling Basah (Wet-Hulled) dengan deskripsi rasa cedar, tanah basah, dan cokelat hitam.',
    },
  },
  {
    id: 'ar-03',
    accessionNumber: 'RAMU-AR-2026-009',
    category: 'arsip',
    year: '2022–2026',
    durationOrLength: '32 pelat foto',
    coverImage: HERO_IMAGE,
    coverTone: 'sage',
    coverMotif: 'archival',
    synopsis:
      'Seri foto dokumenter cahaya pagi di ruang baca independen, perpustakaan komunitas, dan toko buku alternatif di Jakarta Selatan dan Bandung.',
    dublinCore: {
      judul: 'Cahaya Pagi di Meja Travertine: Studi Ruang Baca Independen',
      penulis: 'Rania Alatas',
      subjek: 'Fotografi Interior · Perpustakaan Komunitas & Kafe Baca',
      format: 'JPEG Resolusi Penuh (29.5 MB)',
      hakAkses: 'Baca di Tempat (Wi-Fi Ramu)',
    },
    archivePlate: {
      location: 'Cipete & Kemang, Jakarta Selatan',
      yearCaptured: '2025',
      cameraSpec: 'Fujifilm X-Pro3 · 23mm f/1.4 · Simulasi Film Klasik',
      dimensions: '4608 × 2592 px',
      curatorNote:
        'Mengamati gestur membaca publik di tengah era gawai: buku cetak, zine, dan perangkat digital saling berdampingan di atas satu meja batu alam.',
    },
  },
];

export const THEMATIC_EXHIBITIONS: ThematicExhibition[] = [
  {
    id: 'exh-01',
    editionLabel: 'Pameran Digital Tematik 01 · Edisi Musim Hujan',
    title: 'Giling Basah & Kertas Tulis: Jejak Arsip Kopi Nusantara',
    subtitle:
      'Menelusuri ingatan visual perkebunan, buku catatan uji cita rasa tahun 1983, hingga lahirnya kedai kopi gang masa kini.',
    curator: 'Dikurasi oleh Tim Arsip Ramu & Kolektif Lensa Kampung',
    period: 'November 2026 — Februari 2027',
    heroImage: EXHIBITION_ARCHIVE_IMAGE,
    foreword:
      'Secangkir kopi yang kita pegang hari ini membawa jejak panjang agronomis dan budaya visual. Pameran digital ini menyatukan lembar kontak film 35mm era 1980-an, buku catatan cupping tulisan tangan, dan potret warung kopi rakyat yang bertahan di lorong kota.',
    chapters: [
      {
        index: '01',
        title: 'Ledger 1983 dan Bahasa Rasa Awal',
        narrative:
          'Sebelum istilah specialty coffee populer di kota besar, para penyortir dan pedagang biji kopi sudah mencatat profil rasa dengan tinta pena di atas kertas buku kas. Deskripsi seperti cedar, earthy, dan giling basah menjadi bukti ketelitian lokal.',
        figureCaption:
          'Fig. 1 — Lembar kontak panen 1983–1984 dan buku ledger catatan cupping Gayo yang didigitalisasi oleh Ramu.',
        image: EXHIBITION_ARCHIVE_IMAGE,
        linkedItemIds: ['ar-02', 'eb-03'],
      },
      {
        index: '02',
        title: 'Warung Gang sebagai Ruang Publik Pertama',
        narrative:
          'Jauh sebelum meja komunal kafe modern hadir, bangku kayu warung kopi di bawah atap genteng terakota sudah menjadi pusat pertukaran berita lingkungan, diskusi buruh, dan persinggahan pagi.',
        figureCaption:
          'Fig. 2 — Warung Kopi Pak De di bawah cahaya pagi, dipotret menggunakan film 35mm sebagai bagian dari Arsip Lensa Kampung.',
        image: PHOTO_ARCHIVE_IMAGE,
        linkedItemIds: ['ar-01', 'eb-02'],
      },
    ],
  },
  {
    id: 'exh-02',
    editionLabel: 'Pameran Digital Tematik 02 · Fokus Kreator Muda',
    title: 'Zine, Spidol, dan Kopi Susu: Suara Kolektif Ruang Ketiga',
    subtitle:
      'Bagaimana komikus independen dan penulis muda memanfaatkan sudut kafe sebagai studio gambar dan ruang penerbitan mikro.',
    curator: 'Dikurasi oleh Klara Mahendra & Pustakawan Ramu',
    period: 'Desember 2026 — Maret 2027',
    heroImage: COMIC_COVER_IMAGE,
    foreword:
      'Pameran ini merayakan kelahiran zine komik dan buku sastra indie yang ditulis, digambar, dan disebarkan dari meja-meja kedai kopi tetangga. Setiap karya diarsipkan dengan metadata Dublin Core agar tidak hilang ditelan linimasa media sosial.',
    chapters: [
      {
        index: '01',
        title: 'Meja Pojok sebagai Studio Gambar Terbuka',
        narrative:
          'Ketika biaya sewa studio kian mahal, kedai kopi berskala hangat menjadi tempat lahirnya kolaborasi lintas disiplin—ilustrator bertemu penulis, penata letak berdiskusi dengan fotografer.',
        figureCaption:
          'Fig. 1 — Ilustrasi sampul zine Sketsa & Senja yang merangkum suasana kedai kopi sudut kota saat senja.',
        image: COMIC_COVER_IMAGE,
        linkedItemIds: ['km-01', 'km-02'],
      },
      {
        index: '02',
        title: 'Cahaya Pagi dan Ritme Membaca Lambat',
        narrative:
          'Ruang baca Ramu dirancang untuk mengembalikan kedekatan fisik dengan teks maupun komik digital dalam suasana tenang yang hangat.',
        figureCaption:
          'Fig. 2 — Suasana ruang baca Ramu dengan rak kayu ek dan meja travertine di bawah sinar matahari pagi.',
        image: HERO_IMAGE,
        linkedItemIds: ['eb-01', 'ar-03'],
      },
    ],
  },
];

export const APA_YANG_DIRAMU: RamuPairing[] = [
  {
    id: 'pair-01',
    brewName: 'Es Kopi Susu Gula Aren Ramu',
    brewOriginOrBase: 'House Blend Arabika Gayo & Robusta Temanggung',
    tastingNotes: 'Karimel legit, kacang panggang, body creamy seimbang',
    readingMood: 'Sore santai selepas kerja atau kuliah',
    baristaNote:
      'Rasa manis gula aren yang hangat paling cocok menemani lembar demi lembar zine komik tentang kota dan persahabatan.',
    recommendedItemId: 'km-01',
  },
  {
    id: 'pair-02',
    brewName: 'V60 Flores Bajawa (Seduh Panas)',
    brewOriginOrBase: 'Single Origin Bajawa · Natural Process',
    tastingNotes: 'Cokelat hitam, rempah kayu manis, aftertaste bersih',
    readingMood: 'Fokus pagi sebelum kota mulai ramai',
    baristaNote:
      'Seduhan manual dengan kejernihan rasa yang pas untuk menyelami esai botani tropis dan memori keluarga di novel asri ini.',
    recommendedItemId: 'eb-01',
  },
  {
    id: 'pair-03',
    brewName: 'Matcha Oat Dingin Uji',
    brewOriginOrBase: 'Ceremonial Uji Matcha & Susu Oat Organik',
    tastingNotes: 'Umami lembut, herbal segar, tekstur halus tanpa rasa pahit tajam',
    readingMood: 'Riset desain & membaca arsip arsitektur',
    baristaNote:
      'Memberikan energi tenang yang stabil saat mempelajari tipologi ruang ketiga dan tata interior kedai baca.',
    recommendedItemId: 'eb-02',
  },
  {
    id: 'pair-04',
    brewName: 'Kopi Tubruk Saring Klasik',
    brewOriginOrBase: 'Robusta-Arabika Sangrai Sedang-Gelap',
    tastingNotes: 'Aroma asap halus, rempah bumi, nostalgia warung klasik',
    readingMood: 'Menjelajah arsip sejarah & fotografi analog',
    baristaNote:
      'Menghubungkan lidah dengan sejarah warung kopi kampung lewat pameran foto 35mm Pak De dan ledger tahun 1983.',
    recommendedItemId: 'ar-01',
  },
];
