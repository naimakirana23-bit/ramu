export function AboutSection() {
  const dublinCoreFields = [
    {
      element: 'dc:title',
      label: 'Judul',
      desc: 'Nama karya utama, edisi zine, atau deskripsi singkat pelat arsip visual.',
    },
    {
      element: 'dc:creator',
      label: 'Penulis',
      desc: 'Nama penulis, ilustrator komik, fotografer, atau kolektif penerbit.',
    },
    {
      element: 'dc:subject',
      label: 'Subjek',
      desc: 'Topik tematik untuk menautkan gagasan lintas buku, komik, dan arsip.',
    },
    {
      element: 'dc:format',
      label: 'Format',
      desc: 'Spesifikasi berkas digital (EPUB, PDF, CBZ, TIFF, JPEG) beserta ukuran.',
    },
    {
      element: 'dc:rights',
      label: 'Hak Akses',
      desc: 'Kejelasan izin baca: Akses Terbuka, Baca di Tempat, atau Anggota Ramu.',
    },
  ];

  return (
    <section id="about" className="border-b border-[#D5CBB8] bg-[#ECE5D8]/45">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Narrative essay */}
          <div className="lg:col-span-6">
            <p className="text-xs font-mono uppercase tracking-widest text-[#7D6E60] mb-3">
              01. Tentang Ramu
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#221A14] leading-tight text-balance">
              Kedai kopi tetangga yang tumbuh bersama ingatan dan bacaan warga.
            </h2>

            <div className="mt-6 space-y-4 text-[#5C4D40] leading-relaxed text-[15px] sm:text-base max-w-prose">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:font-semibold first-letter:text-[#221A14] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none">
                Ramu lahir dari kebiasaan sederhana anak muda kota: mencari
                secangkir kopi jujur di pagi hari, lalu berakhir berjam-jam
                membaca esai, membalik komik zine, atau membedah arsip foto
                lama di meja yang sama.
              </p>
              <p>
                Alih-alih membiarkan rak buku hanya menjadi dekorasi kafe, kami
                membangun perpustakaan digital yang terstruktur. Pengunjung bisa
                membaca langsung lewat peramban, menyimpan daftar bacaan ke Rak
                Seduh pribadi, dan menelusuri keterkaitan antara kopi Nusantara,
                arsitektur ruang kota, dan karya kreatif independen.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#D5CBB8] grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <h3 className="font-display text-lg font-semibold text-[#221A14]">
                  Meramu Kopi
                </h3>
                <p className="mt-1 text-sm text-[#5C4D40] leading-relaxed">
                  Biji pilihan dari Gayo hingga Bajawa, diseduh hangat atau
                  dingin dengan resep ramah harian.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#221A14]">
                  Meramu Ide
                </h3>
                <p className="mt-1 text-sm text-[#5C4D40] leading-relaxed">
                  Komik zine lokal dan pameran tematik yang memantik diskusi
                  santai lintas disiplin.
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-[#221A14]">
                  Meramu Ilmu
                </h3>
                <p className="mt-1 text-sm text-[#5C4D40] leading-relaxed">
                  Katalogisasi terbuka agar pengetahuan komunitas mudah dicari
                  dan diwariskan.
                </p>
              </div>
            </div>
          </div>

          {/* Dublin Core standard breakdown */}
          <div className="lg:col-span-6">
            <div className="bg-[#F6F2EA] border border-[#D5CBB8] rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#9C5132] mb-2">
                  Standar Katalogisasi
                </p>
                <h3 className="font-display text-2xl font-semibold text-[#221A14]">
                  Metadata Dublin Core Sederhana
                </h3>
                <p className="mt-2 text-sm text-[#5C4D40] leading-relaxed">
                  Setiap e-book, komik digital, dan pelat arsip visual di Ramu
                  dicatat menggunakan lima elemen inti Dublin Core agar mudah
                  ditelusuri, dikutip, dan dipahami hak aksesnya.
                </p>

                <dl className="mt-6 divide-y divide-[#D5CBB8] border-y border-[#D5CBB8]">
                  {dublinCoreFields.map((field) => (
                    <div
                      key={field.element}
                      className="py-3.5 grid grid-cols-12 gap-3 items-baseline"
                    >
                      <dt className="col-span-4 sm:col-span-4">
                        <span className="block text-sm font-semibold text-[#221A14]">
                          {field.label}
                        </span>
                        <span className="block text-xs font-mono text-[#7D6E60]">
                          {field.element}
                        </span>
                      </dt>
                      <dd className="col-span-8 sm:col-span-8 text-sm text-[#5C4D40] leading-snug">
                        {field.desc}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <p className="mt-5 text-xs text-[#7D6E60]">
                Seluruh catatan katalog dapat dibuka di modal detail setiap item
                untuk melihat nomor aksesi dan menyalin sitasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
