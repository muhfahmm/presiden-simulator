import {
  Zap, ShieldCheck, Scale, Shield, Globe, Factory, TrendingUp,
  Flame, Leaf, Anchor, AlertTriangle, Handshake, Users, Gavel,
  Eye, Lock, Cpu, TreePine, Waves, Power, Swords, BookOpen, 
  BarChart3, Landmark, Network, Radio, HeartPulse, HardDrive, 
  Fingerprint, Briefcase, Bitcoin, Target, Ship, Satellite, 
  Baby, Flag, Music, UserCheck
} from "lucide-react";

export interface Law {
  id: number;
  title: string;
  description: string;
  plus: string;
  minus: string;
  status: "Aktif" | "Rancangan";
  category: string;
  icon: any;
  color: string;
}

export const MOCK_LAWS: Law[] = [
  // === INDUSTRI ===
  {
    id: 1,
    title: "Otomasi Industri",
    description: "Implementasi teknologi robotika dan AI di sektor manufaktur untuk efisiensi maksimal.",
    plus: "Kecepatan produksi di semua Pabrik naik 25%, biaya operasional harian turun.",
    minus: "Angka pengangguran naik tajam, Approval Rating dari kelas pekerja (buruh) turun.",
    status: "Rancangan",
    category: "Industri",
    icon: Cpu,
    color: "text-purple-500"
  },
  {
    id: 2,
    title: "Standarisasi Produk Ekspor",
    description: "Penetapan standar kualitas nasional wajib bagi seluruh komoditas ekspor.",
    plus: "Nilai jual komoditas di Jalur Perdagangan Dunia naik 15%, devisa negara meningkat.",
    minus: "Biaya produksi di semua kartu pabrik naik 10% karena standar bahan baku yang lebih mahal.",
    status: "Rancangan",
    category: "Industri",
    icon: TrendingUp,
    color: "text-indigo-400"
  },
  {
    id: 19,
    title: "Hilirisasi Industri",
    description: "Kebijakan larangan ekspor bahan mentah untuk mendorong pembangunan unit pengolahan dalam negeri.",
    plus: "Nilai ekspor produk olahan naik 40%, menciptakan ribuan lapangan kerja teknis.",
    minus: "Investasi awal sangat besar, membutuhkan subsidi energi besar untuk operasional smelter.",
    status: "Rancangan",
    category: "Industri",
    icon: Factory,
    color: "text-orange-500"
  },
  {
    id: 26,
    title: "Sertifikasi TKDN Ketat",
    description: "Kewajiban penggunaan komponen dalam negeri minimal 60% untuk seluruh produk teknologi.",
    plus: "Industri pendukung dalam negeri tumbuh pesat, ketergantungan impor suku cadang nol.",
    minus: "Harga produk elektronik dan mesin naik 20%, menghambat penetrasi pasar teknologi murah.",
    status: "Rancangan",
    category: "Industri",
    icon: HardDrive,
    color: "text-blue-400"
  },
  {
    id: 27,
    title: "Zona Ekonomi Khusus",
    description: "Penetapan wilayah tertentu sebagai pusat industri dengan nol pajak korporasi.",
    plus: "Menarik investor asing raksasa secara instan, devisa negara melonjak ribuan persen.",
    minus: "Ketimpangan ekonomi antar wilayah meningkat, wilayah non-kawasan tertinggal jauh.",
    status: "Rancangan",
    category: "Industri",
    icon: Factory,
    color: "text-yellow-500"
  },

  // === KEAMANAN ===
  {
    id: 3,
    title: "Izin Kepemilikan Senjata",
    description: "Regulasi yang mengizinkan warga sipil memiliki senjata api dengan persyaratan ketat.",
    plus: "Meningkatkan skor Pertahanan Sipil, rakyat akan membantu melawan jika ada invasi militer.",
    minus: "Tingkat Kriminalitas dan risiko kerusuhan bersenjata di dalam negeri meningkat.",
    status: "Rancangan",
    category: "Keamanan",
    icon: Shield,
    color: "text-cyan-500"
  },
  {
    id: 4,
    title: "Sensor Informasi Global",
    description: "Pembatasan akses informasi internasional demi keamanan ideologis negara.",
    plus: "Menghentikan penurunan Approval Rating saat terjadi krisis ekonomi atau skandal pemerintah.",
    minus: "Menurunkan Inovasi Teknologi karena akses informasi luar negeri yang dibatasi.",
    status: "Rancangan",
    category: "Keamanan",
    icon: Lock,
    color: "text-sky-400"
  },
  {
    id: 24,
    title: "Kedaulatan Ruang Udara",
    description: "Peningkatan sistem deteksi udara dan radar pengintai di seluruh perbatasan kedaulatan.",
    plus: "Menghentikan aktivitas intelijen udara asing, meningkatkan wibawa pertahanan nasional.",
    minus: "Biaya operasional jet interceptor naik 30%, memicu ketegangan diplomatik di wilayah perbatasan.",
    status: "Rancangan",
    category: "Keamanan",
    icon: Radio,
    color: "text-sky-500"
  },
  {
    id: 28,
    title: "Unit Polisi Siber G20",
    description: "Pembentukan satuan elit keamanan siber untuk melindungi infrastruktur kritikal.",
    plus: "Menghentikan serangan hacker pada perbankan dan listrik nasional secara total.",
    minus: "Memerlukan biaya operasional teknologi tinggi yang sangat mahal setiap hari.",
    status: "Rancangan",
    category: "Keamanan",
    icon: Fingerprint,
    color: "text-cyan-400"
  },
  {
    id: 29,
    title: "Identitas Tunggal Digital",
    description: "Integrasi seluruh data kependudukan ke dalam satu sistem identitas biometrik digital.",
    plus: "Efisiensi birokrasi maksimal, mempermudah pelacakan pelaku kejahatan keuangan (Korupsi).",
    minus: "Risiko kebocoran data pribadi massal, memicu isu pelanggaran privasi warga.",
    status: "Rancangan",
    category: "Keamanan",
    icon: Lock,
    color: "text-emerald-500"
  },

  // === EKONOMI ===
  {
    id: 5,
    title: "Eksploitasi Sumber Daya Nasional",
    description: "Percepatan ekstraksi mineral dan energi untuk mendongkrak devisa negara.",
    plus: "Output dari Tambang & Rig Minyak naik 30%, pendapatan harian melonjak tajam.",
    minus: "Risiko bencana lingkungan naik, Health Score warga di sekitar tambang menurun.",
    status: "Rancangan",
    category: "Ekonomi",
    icon: Scale,
    color: "text-emerald-500"
  },
  {
    id: 20,
    title: "Pajak Kekayaan Ekstrim",
    description: "Pemberlakuan pajak tambahan bagi warga negara dengan aset di atas ambang batas sangat tinggi.",
    plus: "Pendapatan negara dari pajak naik pesat, memperkecil jurang kesenjangan sosial.",
    minus: "Risiko pelarian modal ke luar negeri meningkat karena investor menarik aset mereka.",
    status: "Rancangan",
    category: "Ekonomi",
    icon: Landmark,
    color: "text-emerald-600"
  },
  {
    id: 30,
    title: "Nasionalisasi Strategis",
    description: "Pengambilalihan aset perusahaan asing yang mengelola sumber daya alam vital.",
    plus: "Seluruh keuntungan dari sektor vital masuk 100% ke kas negara tanpa bagi hasil.",
    minus: "Hubungan dengan investor asing hancur, memicu embargo ekonomi internasional.",
    status: "Rancangan",
    category: "Ekonomi",
    icon: Landmark,
    color: "text-amber-500"
  },
  {
    id: 31,
    title: "Subsidi UMKM Digital",
    description: "Pemberian modal bunga nol persen bagi usaha kecil yang beralih ke platform digital.",
    plus: "Ekonomi kerakyatan tumbuh mandiri, menurunkan angka pengangguran secara efektif.",
    minus: "Beban anggaran negara untuk subsidi bunga bank dan pelatihan teknis sangat besar.",
    status: "Rancangan",
    category: "Ekonomi",
    icon: Briefcase,
    color: "text-blue-400"
  },
  {
    id: 32,
    title: "Pajak Transaksi Kripto",
    description: "Penetapan pajak final untuk setiap transaksi aset digital dan kripto.",
    plus: "Sumber pendapatan baru dari ekonomi digital, mengatur aliran dana gelap internasional.",
    minus: "Menghambat pertumbuhan inovasi teknologi finansial (Fintech) di dalam negeri.",
    status: "Rancangan",
    category: "Ekonomi",
    icon: Bitcoin,
    color: "text-orange-400"
  },

  // === MILITER & PERTAHANAN ===
  {
    id: 6,
    title: "Doktrin Pertahanan Mandiri",
    description: "Kebijakan prioritas alutsista buatan dalam negeri dan swasembada pertahanan.",
    plus: "Biaya pemeliharaan Alutsista buatan dalam negeri turun 30%, meningkatkan Nasionalisme warga.",
    minus: "Waktu riset teknologi militer baru menjadi 2x lebih lama karena tidak menggunakan bantuan teknologi asing.",
    status: "Rancangan",
    category: "Militer & Pertahanan",
    icon: Swords,
    color: "text-amber-500"
  },
  {
    id: 7,
    title: "Wajib Militer Nasional",
    description: "Kewajiban dinas militer bagi seluruh warga negara usia produktif.",
    plus: "Kecepatan rekrutmen unit Infanteri naik 50%, biaya pelatihan gratis, meningkatkan Nasionalisme.",
    minus: "Produksi di Sektor Industri turun 20% karena tenaga kerja usia produktif ditarik ke barak.",
    status: "Rancangan",
    category: "Militer & Pertahanan",
    icon: Users,
    color: "text-orange-500"
  },
  {
    id: 33,
    title: "Pertahanan Rudal Jauh",
    description: "Pengadaan sistem radar dan peluncur rudal pencegat jarak jauh.",
    plus: "Memberikan perlindungan total dari serangan udara and rudal balistik negara asing.",
    minus: "Biaya pemeliharaan yang sangat mahal, memicu perlombaan senjata regional.",
    status: "Rancangan",
    category: "Militer & Pertahanan",
    icon: Target,
    color: "text-red-500"
  },
  {
    id: 34,
    title: "Modernisasi Armada Laut",
    description: "Pembangunan kapal perang kelas perusak (Destroyer) secara massal di galangan lokal.",
    plus: "Mengamankan jalur perdagangan laut dan ZEE dari pencurian sumber daya alam.",
    minus: "Waktu konstruksi yang sangat lama dan biaya material baja yang sangat tinggi.",
    status: "Rancangan",
    category: "Militer & Pertahanan",
    icon: Ship,
    color: "text-blue-500"
  },
  {
    id: 35,
    title: "Program Satelit Militer",
    description: "Peluncuran satelit komunikasi dan intai khusus militer ke orbit rendah bumi.",
    plus: "Akurasi serangan unit militer and intelijen medan perang tersedia real-time 24/7.",
    minus: "Risiko kegagalan peluncuran tinggi, biaya pengembangan ruang angkasa sangat fantastis.",
    status: "Rancangan",
    category: "Militer & Pertahanan",
    icon: Satellite,
    color: "text-purple-400"
  },

  // === SOSIAL & KEPENDUDUKAN ===
  {
    id: 8,
    title: "Kontrol Media & Informasi",
    description: "Regulasi ketat terhadap konten media dan arus informasi dalam negeri.",
    plus: "Menekan tingkat Radikalisme dan Kriminalitas, serta menghentikan penurunan Approval Rating saat terjadi krisis.",
    minus: "Menurunkan Indeks Demokrasi, memicu kecaman internasional (PBB), dan pariwisata menurun.",
    status: "Rancangan",
    category: "Sosial & Kependudukan",
    icon: Eye,
    color: "text-rose-500"
  },
  {
    id: 9,
    title: "Jaminan Sosial Semesta",
    description: "Penyediaan perlindungan sosial menyeluruh bagi seluruh lapisan masyarakat.",
    plus: "Approval Rating warga ekonomi bawah stabil di angka tinggi, risiko demo 0%.",
    minus: "Pengeluaran anggaran negara harian sangat membengkak, memicu inflasi jika kas negara tipis.",
    status: "Rancangan",
    category: "Sosial & Kependudukan",
    icon: Handshake,
    color: "text-pink-400"
  },
  {
    id: 23,
    title: "Infrastruktur Pendidikan Digital",
    description: "Program nasional untuk memastikan seluruh sekolah memiliki akses internet cepat dan perangkat digital.",
    plus: "Kualitas SDM naik pesat, mempercepat inovasi teknologi dan literasi digital dalam negeri.",
    minus: "Biaya pengeluaran anggaran negara sangat besar untuk pengadaan infrastruktur jaringan (Lansekap Digital).",
    status: "Rancangan",
    category: "Sosial & Kependudukan",
    icon: Network,
    color: "text-blue-500"
  },
  {
    id: 25,
    title: "Layanan Kesehatan Mental Nasional",
    description: "Penyediaan fasilitas konseling dan dukungan kesehatan mental gratis di tingkat puskesmas.",
    plus: "Tingkat produktivitas warga naik, angka kriminalitas skala kecil (akibat stres) menurun.",
    minus: "Beban sistem kesehatan nasional (BPJS) meningkat signifikan karena tingginya permintaan layanan.",
    status: "Rancangan",
    category: "Sosial & Kependudukan",
    icon: HeartPulse,
    color: "text-rose-400"
  },
  {
    id: 36,
    title: "Program Keluarga Berencana",
    description: "Sosialisasi dan pemberian insentif bagi keluarga dengan maksimal dua anak.",
    plus: "Pertumbuhan penduduk terkontrol, beban fasilitas kesehatan dan sekolah berkurang.",
    minus: "Risiko penurunan populasi (Aging Population) yang mengurangi tenaga kerja muda di masa depan.",
    status: "Rancangan",
    category: "Sosial & Kependudukan",
    icon: Baby,
    color: "text-rose-500"
  },

  // === ENERGI & LINGKUNGAN ===
  {
    id: 10,
    title: "UU Transisi Hijau Paksa",
    description: "Kewajiban peralihan total ke energi terbarukan bagi seluruh sektor industri.",
    plus: "Health Score warga naik, menarik minat investor teknologi tinggi dari negara maju.",
    minus: "Produksi dari Tambang Batubara & Minyak turun 50%, pendapatan harian dari sektor tersebut anjlok.",
    status: "Rancangan",
    category: "Energi & Lingkungan",
    icon: Leaf,
    color: "text-green-400"
  },
  {
    id: 11,
    title: "Monopoli Energi Negara",
    description: "Pengambilalihan penuh sektor ketenagalistrikan oleh pemerintah.",
    plus: "Harga Listrik untuk rakyat bisa diatur sangat murah, meningkatkan kepuasan warga.",
    minus: "Inovasi teknologi energi terhenti, biaya pemeliharaan seluruh pembangkit ditanggung total oleh anggaran negara.",
    status: "Rancangan",
    category: "Energi & Lingkungan",
    icon: Power,
    color: "text-yellow-400"
  },
  {
    id: 12,
    title: "Eksploitasi Laut Dalam",
    description: "Program pengeboran lepas pantai skala besar untuk memaksimalkan produksi minyak.",
    plus: "Produksi Rig Minyak naik 40%, pendapatan harian melonjak tajam.",
    minus: "Risiko bencana lingkungan (Oil Spill) meningkat, menghancurkan pendapatan dari sektor Pariwisata.",
    status: "Rancangan",
    category: "Energi & Lingkungan",
    icon: Waves,
    color: "text-blue-400"
  },
  {
    id: 13,
    title: "Prioritas Listrik Industri",
    description: "Jaminan pasokan listrik penuh bagi sektor industri and pertahanan saat krisis.",
    plus: "Produksi Pabrik & Alutsista tetap 100% meski terjadi krisis energi.",
    minus: "Pemadaman bergilir di sektor Residensial, memicu kemarahan rakyat (Approval Rating turun tajam).",
    status: "Rancangan",
    category: "Energi & Lingkungan",
    icon: Zap,
    color: "text-orange-400"
  },
  {
    id: 22,
    title: "Biofuel Mandatori",
    description: "Kewajiban pencampuran bahan bakar hayati dalam seluruh distribusi BBM nasional.",
    plus: "Ketergantungan impor BBM turun 25%, mendukung kemandirian petani lokal (Sawit/Tebu).",
    minus: "Harga pangan berisiko naik karena alih fungsi lahan pertanian ke sektor energi (bahan bakar).",
    status: "Rancangan",
    category: "Energi & Lingkungan",
    icon: Flame,
    color: "text-amber-600"
  },

  // === HUKUM & KETERTIBAN ===
  {
    id: 14,
    title: "Restorasi Hukuman Mati",
    description: "Pemberlakuan kembali hukuman mati untuk kejahatan berat dan terorisme.",
    plus: "Menurunkan angka Kriminalitas dan Radikalisme secara instan dan signifikan.",
    minus: "Hubungan diplomatik dengan negara-negara demokrasi (EU/Barat) memburuk, skor Hak Asasi Manusia anjlok.",
    status: "Rancangan",
    category: "Hukum & Ketertiban",
    icon: Gavel,
    color: "text-red-500"
  },
  {
    id: 15,
    title: "Pengawasan Biometrik Massal",
    description: "Sistem pengenalan wajah dan data biometrik terintegrasi di seluruh kota.",
    plus: "Angka Kriminalitas turun hingga 50%, agen spionase asing lebih mudah tertangkap.",
    minus: "Indeks Demokrasi anjlok, memicu gelombang demo terkait privasi di ibu kota.",
    status: "Rancangan",
    category: "Hukum & Ketertiban",
    icon: Eye,
    color: "text-violet-400"
  },
  {
    id: 16,
    title: "Darurat Sipil",
    description: "Pemberian wewenang darurat kepada pemerintah untuk mengendalikan situasi krisis.",
    plus: "Kamu bisa membubarkan Demo/Protes secara paksa tanpa menurunkan stabilitas negara.",
    minus: "Pariwisata mati total, investor asing menarik modalnya (Capital Flight).",
    status: "Rancangan",
    category: "Hukum & Ketertiban",
    icon: AlertTriangle,
    color: "text-red-400"
  },
  {
    id: 21,
    title: "Audit Transparansi Pejabat",
    description: "Kewajiban audit berkala dan publikasi seluruh aliran dana pejabat tinggi negara.",
    plus: "Indeks Korupsi turun drastis, meningkatkan kepercayaan investor internasional secara signifikan.",
    minus: "Memicu perlawanan politik internal dan risiko ketidakstabilan di dalam birokrasi pemerintahan.",
    status: "Rancangan",
    category: "Hukum & Ketertiban",
    icon: Scale,
    color: "text-zinc-300"
  },
  {
    id: 37,
    title: "Kedaulatan Yudisial",
    description: "Menjamin kemandirian hakim dari campur tangan eksekutif dan legislatif.",
    plus: "Hukum tegak tanpa intervensi politik, kepastian hukum bagi investor asing terjamin.",
    minus: "Kecepatan pengambilan keputusan pemerintah bisa terhambat oleh gugatan hukum hukum sipil.",
    status: "Rancangan",
    category: "Hukum & Ketertiban",
    icon: Scale,
    color: "text-zinc-400"
  },

  // === HUBUNGAN INTERNASIONAL ===
  {
    id: 17,
    title: "Netralitas Absolut",
    description: "Deklarasi resmi non-blok dan netralitas abadi dalam konflik internasional.",
    plus: "Terhindar dari konflik antar negara besar, fokus anggaran 100% pada ekonomi dan rakyat.",
    minus: "Tidak bisa membeli Alutsista canggih dari negara adidaya, tidak punya pelindung jika terjadi invasi mendadak.",
    status: "Rancangan",
    category: "Hubungan Internasional",
    icon: Anchor,
    color: "text-teal-400"
  },
  {
    id: 18,
    title: "Zona Perdagangan Bebas",
    description: "Penghapusan tarif dan hambatan perdagangan dengan seluruh mitra global.",
    plus: "Harga barang impor murah, pendapatan dari Jalur Perdagangan Dunia naik 25%.",
    minus: "Industri kecil dalam negeri bangkrut karena tidak bisa bersaing dengan produk asing.",
    status: "Rancangan",
    category: "Hubungan Internasional",
    icon: Globe,
    color: "text-cyan-400"
  },
  {
    id: 38,
    title: "Pakta Pertahanan Regional",
    description: "Perjanjian pertahanan kolektif dengan negara-negara di kawasan yang sama.",
    plus: "Mendapatkan jaminan keamanan sekutu, biaya militer nasional bisa lebih efisien.",
    minus: "Kehilangan kedaulatan luar negeri penuh, terseret jika sekutu terlibat perang.",
    status: "Rancangan",
    category: "Hubungan Internasional",
    icon: Flag,
    color: "text-blue-500"
  },
  {
    id: 39,
    title: "Pertukaran Budaya Global",
    description: "Program beasiswa internasional dan festival kebudayaan di luar negeri.",
    plus: "Meningkatkan Soft Power dan citra positif negara, pariwisata naik signifikan.",
    minus: "Memerlukan biaya diplomasi budaya yang besar tanpa hasil ekonomi instan.",
    status: "Rancangan",
    category: "Hubungan Internasional",
    icon: Music,
    color: "text-indigo-400"
  },
  {
    id: 40,
    title: "Perjanjian Ekstradisi",
    description: "Perjanjian penangkapan dan pemulangan buronan kriminal antar negara mitra.",
    plus: "Mempermudah penangkapan koruptor dan penjahat yang melarikan diri ke luar negeri.",
    minus: "Membutuhkan koordinasi diplomatik rumit dan biaya operasional intelijen luar negeri.",
    status: "Rancangan",
    category: "Hubungan Internasional",
    icon: UserCheck,
    color: "text-cyan-500"
  },
];
