import { useState } from 'react';
import { Check, Clock, MapPin, Wifi } from 'lucide-react';

type LandmarkId = 'ramu' | 'mrt' | 'halte' | 'sepeda';

const LANDMARKS: Record<
  LandmarkId,
  { title: string; distance: string; note: string }
> = {
  ramu: {
    title: 'Kedai & Perpustakaan Digital Ramu',
    distance: 'Jl. Cipete Raya No. 28',
    note: 'Bangunan berplester tanah liat di sebelah toko keramik. Tersedia akses Wi-Fi arsip lokal.',
  },
  mrt: {
    title: 'Stasiun MRT Cipete Raya',
    distance: '320 m · ±4 menit jalan kaki',
    note: 'Keluar melalui Pintu Timur arah Jalan Cipete Raya, lurus melewati persimpangan pertama.',
  },
  halte: {
    title: 'Halte Bus Pengumpan Cipete',
    distance: '180 m · ±2 menit jalan kaki',
    note: 'Terhubung langsung dengan rute Blok M – Pondok Labu.',
  },
  sepeda: {
    title: 'Rak Parkir Sepeda Komunal',
    distance: 'Teras Depan Ramu',
    note: 'Kapasitas 12 sepeda dengan kunci gembok gratis dari meja kasir.',
  },
};

export function VisitUsSection() {
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkId>('ramu');
  const [name, setName] = useState('');
  const [date, setDate] = useState('2026-11-26');
  const [slot, setSlot] = useState('10.00 – 13.00 WIB');
  const [zone, setZone] = useState('Meja Komunal Travertine');
  const [brewNote, setBrewNote] = useState('Es Kopi Susu Gula Aren');
  const [bookingCode, setBookingCode] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    const randomNum = Math.floor(100 + Math.random() * 900);
    setBookingCode(`RAMU-${randomNum}`);
  };

  return (
    <section id="visit-us" className="bg-[#F6F2EA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="pb-8 border-b border-[#D5CBB8]">
          <p className="text-xs font-mono uppercase tracking-widest text-[#7D6E60] mb-2">
            05. Visit Us · Kunjungi Ruang Baca
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#221A14] text-balance">
            Mampir ke Cipete, Bawa Pulang Gagasan
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#5C4D40] max-w-2xl">
            Buka setiap hari untuk bekerja tenang, membaca zine, atau sekadar
            menikmati seduhan kopi pagi tanpa terburu-buru.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left column: Practical info + Interactive neighborhood map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#ECE5D8]/60 border border-[#D5CBB8]">
                <MapPin className="w-4 h-4 text-[#9C5132] mb-2" />
                <p className="text-xs font-mono uppercase tracking-wider text-[#7D6E60]">
                  Alamat
                </p>
                <p className="mt-1 text-sm font-medium text-[#221A14]">
                  Jl. Cipete Raya No. 28, Jakarta Selatan 12410
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#ECE5D8]/60 border border-[#D5CBB8]">
                <Clock className="w-4 h-4 text-[#465B43] mb-2" />
                <p className="text-xs font-mono uppercase tracking-wider text-[#7D6E60]">
                  Jam Buka
                </p>
                <p className="mt-1 text-sm font-medium text-[#221A14] tabular-nums">
                  Senin–Minggu
                  <br />
                  08.00 – 22.00 WIB
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#ECE5D8]/60 border border-[#D5CBB8]">
                <Wifi className="w-4 h-4 text-[#465B43] mb-2" />
                <p className="text-xs font-mono uppercase tracking-wider text-[#7D6E60]">
                  Akses Wi-Fi Lokal
                </p>
                <p className="mt-1 text-sm font-medium text-[#221A14]">
                  Gratis seluruh koleksi & e-book arsip di tempat
                </p>
              </div>
            </div>

            {/* Interactive Stylized Architectural Neighborhood Map */}
            <div className="rounded-xl border border-[#D5CBB8] bg-[#ECE5D8]/45 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h3 className="font-display text-lg font-semibold text-[#221A14]">
                  Peta Akses Sekitar Cipete Raya
                </h3>
                <span className="text-xs font-mono text-[#7D6E60]">
                  Klik titik lokasi untuk detail arah
                </span>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-[#D5CBB8] bg-[#F6F2EA]">
                <svg
                  viewBox="0 0 600 280"
                  className="w-full h-auto block"
                  role="img"
                  aria-label="Peta skematik lokasi Kedai Perpustakaan Ramu di Jalan Cipete Raya"
                >
                  {/* Background blocks */}
                  <rect width="600" height="280" fill="#F2ECE1" />
                  {/* Neighborhood blocks */}
                  <rect
                    x="25"
                    y="20"
                    width="150"
                    height="90"
                    rx="6"
                    fill="#E6DDD0"
                  />
                  <rect
                    x="215"
                    y="20"
                    width="175"
                    height="90"
                    rx="6"
                    fill="#E6DDD0"
                  />
                  <rect
                    x="430"
                    y="20"
                    width="145"
                    height="90"
                    rx="6"
                    fill="#E6DDD0"
                  />
                  <rect
                    x="25"
                    y="165"
                    width="150"
                    height="95"
                    rx="6"
                    fill="#E6DDD0"
                  />
                  <rect
                    x="215"
                    y="165"
                    width="175"
                    height="95"
                    rx="6"
                    fill="#E6DDD0"
                  />
                  <rect
                    x="430"
                    y="165"
                    width="145"
                    height="95"
                    rx="6"
                    fill="#E6DDD0"
                  />

                  {/* Main horizontal street: Jl. Cipete Raya */}
                  <rect x="0" y="124" width="600" height="28" fill="#D5CBB8" />
                  <text
                    x="300"
                    y="142"
                    textAnchor="middle"
                    fill="#5C4D40"
                    fontSize="11"
                    fontFamily="JetBrains Mono, monospace"
                  >
                    JL. CIPETE RAYA
                  </text>

                  {/* Vertical streets */}
                  <rect x="184" y="0" width="22" height="280" fill="#DDD3C2" />
                  <rect x="398" y="0" width="22" height="280" fill="#DDD3C2" />

                  {/* MRT elevated line */}
                  <line
                    x1="505"
                    y1="0"
                    x2="505"
                    y2="280"
                    stroke="#9C5132"
                    strokeWidth="2"
                    strokeDasharray="5 4"
                    opacity="0.6"
                  />

                  {/* Pin: Ramu */}
                  <g
                    onClick={() => setSelectedLandmark('ramu')}
                    className="cursor-pointer"
                  >
                    <circle
                      cx="295"
                      cy="96"
                      r={selectedLandmark === 'ramu' ? 18 : 14}
                      fill="#465B43"
                    />
                    <text
                      x="295"
                      y="100"
                      textAnchor="middle"
                      fill="#F6F2EA"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      R
                    </text>
                    <text
                      x="295"
                      y="68"
                      textAnchor="middle"
                      fill="#221A14"
                      fontSize="11"
                      fontWeight="600"
                    >
                      Ramu (No. 28)
                    </text>
                  </g>

                  {/* Pin: MRT */}
                  <g
                    onClick={() => setSelectedLandmark('mrt')}
                    className="cursor-pointer"
                  >
                    <circle
                      cx="505"
                      cy="138"
                      r={selectedLandmark === 'mrt' ? 15 : 12}
                      fill="#9C5132"
                    />
                    <text
                      x="505"
                      y="142"
                      textAnchor="middle"
                      fill="#F6F2EA"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      M
                    </text>
                    <text
                      x="505"
                      y="178"
                      textAnchor="middle"
                      fill="#221A14"
                      fontSize="10"
                      fontWeight="600"
                    >
                      MRT Cipete Raya
                    </text>
                  </g>

                  {/* Pin: Halte */}
                  <g
                    onClick={() => setSelectedLandmark('halte')}
                    className="cursor-pointer"
                  >
                    <circle
                      cx="120"
                      cy="138"
                      r={selectedLandmark === 'halte' ? 14 : 11}
                      fill="#221A14"
                    />
                    <text
                      x="120"
                      y="142"
                      textAnchor="middle"
                      fill="#F6F2EA"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      H
                    </text>
                    <text
                      x="120"
                      y="176"
                      textAnchor="middle"
                      fill="#221A14"
                      fontSize="10"
                    >
                      Halte Bus
                    </text>
                  </g>

                  {/* Pin: Parkir Sepeda */}
                  <g
                    onClick={() => setSelectedLandmark('sepeda')}
                    className="cursor-pointer"
                  >
                    <circle
                      cx="245"
                      cy="192"
                      r={selectedLandmark === 'sepeda' ? 13 : 10}
                      fill="#5C4D40"
                    />
                    <text
                      x="245"
                      y="196"
                      textAnchor="middle"
                      fill="#F6F2EA"
                      fontSize="9"
                      fontWeight="bold"
                    >
                      S
                    </text>
                    <text
                      x="245"
                      y="222"
                      textAnchor="middle"
                      fill="#221A14"
                      fontSize="10"
                    >
                      Parkir Sepeda
                    </text>
                  </g>
                </svg>
              </div>

              {/* Selected landmark readout */}
              <div className="mt-4 pt-4 border-t border-[#D5CBB8] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-[#221A14]">
                    {LANDMARKS[selectedLandmark].title}
                  </p>
                  <p className="text-xs text-[#5C4D40] mt-0.5">
                    {LANDMARKS[selectedLandmark].note}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#9C5132] shrink-0">
                  {LANDMARKS[selectedLandmark].distance}
                </span>
              </div>
            </div>
          </div>

          {/* Right column: Working seat & reading table booking form */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-[#D5CBB8] bg-[#ECE5D8]/45 p-6 sm:p-7">
              <h3 className="font-display text-2xl font-semibold text-[#221A14]">
                Reservasi Meja Baca & Akses Arsip
              </h3>
              <p className="mt-1.5 text-sm text-[#5C4D40]">
                Amankan kursi di zona hening atau meja komunal untuk membaca
                koleksi khusus Anggota dan Baca di Tempat.
              </p>

              {bookingCode ? (
                <div className="mt-6 p-5 rounded-xl bg-[#F6F2EA] border border-[#465B43]">
                  <div className="flex items-center gap-2 text-[#465B43] font-semibold text-sm">
                    <Check className="w-4 h-4" />
                    <span>Reservasi Meja Tercatat</span>
                  </div>
                  <p className="mt-2 font-mono text-lg font-semibold text-[#221A14] tabular-nums">
                    {bookingCode}
                  </p>
                  <dl className="mt-3 pt-3 border-t border-[#D5CBB8] space-y-1.5 text-xs text-[#5C4D40]">
                    <div className="flex justify-between">
                      <dt>Nama Pengunjung</dt>
                      <dd className="font-medium text-[#221A14]">{name}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Tanggal & Sesi</dt>
                      <dd className="font-medium text-[#221A14] tabular-nums">
                        {date} · {slot}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Zona Duduk</dt>
                      <dd className="font-medium text-[#221A14]">{zone}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Catatan Seduhan</dt>
                      <dd className="font-medium text-[#221A14]">{brewNote}</dd>
                    </div>
                  </dl>
                  <button
                    type="button"
                    onClick={() => {
                      setBookingCode(null);
                      setName('');
                    }}
                    className="mt-4 w-full py-2 text-xs font-semibold text-[#221A14] border border-[#D5CBB8] hover:bg-[#ECE5D8] rounded-lg transition-colors cursor-pointer"
                  >
                    Buat Reservasi Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="visit-name"
                      className="block text-xs font-medium text-[#221A14] mb-1.5"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="visit-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Kirana Saraswati"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F6F2EA] border border-[#D5CBB8] rounded-lg text-[#221A14] placeholder:text-[#7D6E60] focus:outline-none focus:ring-2 focus:ring-[#465B43]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="visit-date"
                        className="block text-xs font-medium text-[#221A14] mb-1.5"
                      >
                        Tanggal Kunjungan
                      </label>
                      <input
                        id="visit-date"
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F6F2EA] border border-[#D5CBB8] rounded-lg text-[#221A14] focus:outline-none focus:ring-2 focus:ring-[#465B43] tabular-nums"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="visit-slot"
                        className="block text-xs font-medium text-[#221A14] mb-1.5"
                      >
                        Sesi Waktu
                      </label>
                      <select
                        id="visit-slot"
                        value={slot}
                        onChange={(e) => setSlot(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F6F2EA] border border-[#D5CBB8] rounded-lg text-[#221A14] focus:outline-none focus:ring-2 focus:ring-[#465B43]"
                      >
                        <option>08.00 – 10.00 WIB</option>
                        <option>10.00 – 13.00 WIB</option>
                        <option>14.00 – 17.00 WIB</option>
                        <option>18.00 – 21.30 WIB</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="visit-zone"
                      className="block text-xs font-medium text-[#221A14] mb-1.5"
                    >
                      Pilihan Zona Baca
                    </label>
                    <select
                      id="visit-zone"
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F6F2EA] border border-[#D5CBB8] rounded-lg text-[#221A14] focus:outline-none focus:ring-2 focus:ring-[#465B43]"
                    >
                      <option>Meja Komunal Travertine</option>
                      <option>Pojok Baca Tenang (Dekat Rak Zine)</option>
                      <option>Bar Seduh & Baca Cepat</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="visit-brew"
                      className="block text-xs font-medium text-[#221A14] mb-1.5"
                    >
                      Catatan Minuman Favorit (Opsional)
                    </label>
                    <input
                      id="visit-brew"
                      type="text"
                      value={brewNote}
                      onChange={(e) => setBrewNote(e.target.value)}
                      placeholder="Contoh: V60 Bajawa atau Matcha Oat"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#F6F2EA] border border-[#D5CBB8] rounded-lg text-[#221A14] placeholder:text-[#7D6E60] focus:outline-none focus:ring-2 focus:ring-[#465B43]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 text-sm font-semibold text-[#F6F2EA] bg-[#465B43] hover:bg-[#384A35] rounded-lg transition-colors cursor-pointer"
                  >
                    Konfirmasi Meja Baca
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
