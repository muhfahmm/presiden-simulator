# Dokumen Requirements: Modal Program Nuklir

## Pendahuluan

Modal Program Nuklir adalah fitur antarmuka pengguna yang menampilkan informasi detail tentang program nuklir negara pemain dalam game strategi geopolitik. Modal ini akan muncul ketika pemain mengklik card "Program Nuklir" di halaman Komando Pertahanan, memberikan visualisasi komprehensif tentang status pengembangan nuklir, kapabilitas strategis, dan informasi terkait program nuklir nasional.

## Glosarium

- **Modal**: Komponen antarmuka pengguna yang muncul di atas konten utama dan memerlukan interaksi pengguna untuk ditutup
- **Card_Program_Nuklir**: Elemen UI di halaman Komando Pertahanan yang menampilkan persentase kesiapan program nuklir
- **Sistem_Modal**: Komponen React yang mengelola tampilan dan perilaku modal program nuklir
- **Data_Program_Nuklir**: Objek data yang berisi informasi program nuklir dari `data.militer_strategis.operasi_strategis.program_nuklir`
- **Persentase_Kesiapan**: Nilai numerik 0-100 yang menunjukkan tingkat kesiapan program nuklir
- **Tema_Aplikasi**: Skema warna zinc/dark theme dengan accent colors yang konsisten di seluruh aplikasi

## Requirements

### Requirement 1: Struktur Folder dan File

**User Story:** Sebagai developer, saya ingin struktur folder yang terorganisir dengan baik, sehingga kode modal program nuklir mudah ditemukan dan dipelihara.

#### Acceptance Criteria

1. THE Sistem_Modal SHALL dibuat dalam folder `app/frontend/src/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/modals/5_program_nuklir/`
2. THE Sistem_Modal SHALL memiliki file utama bernama `index.tsx` di dalam folder `5_program_nuklir`
3. WHERE komponen tambahan diperlukan, THE Sistem_Modal SHALL menyimpan komponen tersebut dalam folder `5_program_nuklir`

### Requirement 2: Aktivasi Modal

**User Story:** Sebagai pemain, saya ingin membuka modal program nuklir dengan mengklik card yang sesuai, sehingga saya dapat melihat detail program nuklir saya.

#### Acceptance Criteria

1. WHEN pemain mengklik Card_Program_Nuklir di halaman Komando Pertahanan, THEN THE Sistem_Modal SHALL menampilkan modal program nuklir
2. WHEN modal program nuklir ditampilkan, THEN THE Sistem_Modal SHALL menampilkan overlay gelap di belakang modal
3. WHEN modal program nuklir ditampilkan, THEN THE Sistem_Modal SHALL memblokir interaksi dengan konten di belakang modal
4. WHEN modal program nuklir ditampilkan, THEN THE Sistem_Modal SHALL menampilkan animasi fade-in dengan durasi 300ms

### Requirement 3: Penutupan Modal

**User Story:** Sebagai pemain, saya ingin menutup modal program nuklir dengan mudah, sehingga saya dapat kembali ke halaman Komando Pertahanan.

#### Acceptance Criteria

1. WHEN pemain mengklik tombol close (X) di modal, THEN THE Sistem_Modal SHALL menutup modal dan kembali ke halaman Komando Pertahanan
2. WHEN modal ditutup, THEN THE Sistem_Modal SHALL menghapus overlay gelap
3. WHEN modal ditutup, THEN THE Sistem_Modal SHALL mengembalikan interaksi dengan konten utama

### Requirement 4: Header Modal

**User Story:** Sebagai pemain, saya ingin melihat header yang jelas dan informatif di modal, sehingga saya tahu saya sedang melihat informasi program nuklir.

#### Acceptance Criteria

1. THE Sistem_Modal SHALL menampilkan ikon Radiation di header dengan styling `p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 text-yellow-500`
2. THE Sistem_Modal SHALL menampilkan judul "Program Nuklir Nasional" dengan styling `text-2xl font-black text-white tracking-tight italic uppercase`
3. THE Sistem_Modal SHALL menampilkan subjudul "National Nuclear Program" dengan styling `text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em]`
4. THE Sistem_Modal SHALL menampilkan tombol close dengan ikon X di pojok kanan atas header
5. THE Sistem_Modal SHALL menerapkan styling header `px-8 py-6 border-b border-zinc-800/50 flex items-center justify-between bg-zinc-900/30`

### Requirement 5: Tampilan Persentase Kesiapan Utama

**User Story:** Sebagai pemain, saya ingin melihat persentase kesiapan program nuklir saya dengan jelas, sehingga saya dapat memahami status pengembangan nuklir saya.

#### Acceptance Criteria

1. THE Sistem_Modal SHALL menampilkan Persentase_Kesiapan dari Data_Program_Nuklir dalam format persentase (0-100%)
2. THE Sistem_Modal SHALL menampilkan persentase dengan ukuran font besar dan menonjol
3. THE Sistem_Modal SHALL menggunakan warna yang sesuai dengan tingkat kesiapan (merah untuk rendah, kuning untuk sedang, hijau untuk tinggi)
4. WHEN Persentase_Kesiapan kurang dari 33%, THEN THE Sistem_Modal SHALL menggunakan warna merah (rose-500)
5. WHEN Persentase_Kesiapan antara 33% dan 66%, THEN THE Sistem_Modal SHALL menggunakan warna kuning (yellow-500)
6. WHEN Persentase_Kesiapan lebih dari 66%, THEN THE Sistem_Modal SHALL menggunakan warna hijau (emerald-500)

### Requirement 6: Visualisasi Progress Bar

**User Story:** Sebagai pemain, saya ingin melihat visualisasi grafis dari kemajuan program nuklir, sehingga saya dapat dengan cepat memahami seberapa jauh program telah berkembang.

#### Acceptance Criteria

1. THE Sistem_Modal SHALL menampilkan progress bar yang merepresentasikan Persentase_Kesiapan
2. THE Sistem_Modal SHALL mengisi progress bar sesuai dengan nilai Persentase_Kesiapan
3. THE Sistem_Modal SHALL menggunakan gradient warna yang sesuai dengan tingkat kesiapan pada progress bar
4. THE Sistem_Modal SHALL menampilkan progress bar dengan animasi transisi smooth ketika nilai berubah

### Requirement 7: Informasi Detail Program

**User Story:** Sebagai pemain, saya ingin melihat informasi detail tentang berbagai aspek program nuklir, sehingga saya dapat memahami kapabilitas nuklir saya secara komprehensif.

#### Acceptance Criteria

1. THE Sistem_Modal SHALL menampilkan informasi tentang status pengembangan senjata nuklir
2. THE Sistem_Modal SHALL menampilkan informasi tentang jumlah hulu ledak yang tersedia (jika ada)
3. THE Sistem_Modal SHALL menampilkan informasi tentang sistem peluncuran yang tersedia
4. THE Sistem_Modal SHALL menampilkan informasi tentang kapabilitas pengayaan uranium
5. THE Sistem_Modal SHALL menampilkan setiap informasi dalam card terpisah dengan ikon yang sesuai
6. THE Sistem_Modal SHALL menggunakan styling konsisten dengan Tema_Aplikasi untuk setiap card informasi

### Requirement 8: Status Operasional

**User Story:** Sebagai pemain, saya ingin melihat status operasional program nuklir, sehingga saya tahu apakah program saya aktif, dalam pengembangan, atau belum dimulai.

#### Acceptance Criteria

1. WHEN Persentase_Kesiapan adalah 0%, THEN THE Sistem_Modal SHALL menampilkan status "Belum Dimulai"
2. WHEN Persentase_Kesiapan antara 1% dan 99%, THEN THE Sistem_Modal SHALL menampilkan status "Dalam Pengembangan"
3. WHEN Persentase_Kesiapan adalah 100%, THEN THE Sistem_Modal SHALL menampilkan status "Operasional Penuh"
4. THE Sistem_Modal SHALL menampilkan status dengan badge berwarna yang sesuai

### Requirement 9: Konsistensi Styling

**User Story:** Sebagai pemain, saya ingin modal program nuklir memiliki tampilan yang konsisten dengan modal lain, sehingga pengalaman pengguna tetap kohesif.

#### Acceptance Criteria

1. THE Sistem_Modal SHALL menggunakan Tema_Aplikasi (zinc/dark theme) yang konsisten dengan modal lain
2. THE Sistem_Modal SHALL menggunakan border radius `rounded-[40px]` untuk container utama modal
3. THE Sistem_Modal SHALL menggunakan background `bg-zinc-950` dengan border `border-zinc-800`
4. THE Sistem_Modal SHALL menggunakan shadow `shadow-2xl` untuk container modal
5. THE Sistem_Modal SHALL menggunakan overlay `bg-black/80 backdrop-blur-md` dengan z-index `z-[200]`
6. THE Sistem_Modal SHALL menggunakan padding dan spacing yang konsisten dengan MisiSeranganModal

### Requirement 10: Responsivitas

**User Story:** Sebagai pemain, saya ingin modal dapat ditampilkan dengan baik di berbagai ukuran layar, sehingga saya dapat mengakses informasi program nuklir dari perangkat apa pun.

#### Acceptance Criteria

1. THE Sistem_Modal SHALL menampilkan layout yang responsif untuk layar mobile, tablet, dan desktop
2. WHEN layar berukuran kecil (mobile), THEN THE Sistem_Modal SHALL menyesuaikan layout menjadi single column
3. WHEN layar berukuran sedang atau besar, THEN THE Sistem_Modal SHALL menggunakan grid layout untuk menampilkan informasi
4. THE Sistem_Modal SHALL menggunakan max-width dan max-height yang sesuai untuk mencegah modal terlalu besar
5. THE Sistem_Modal SHALL memiliki scrollable content area ketika konten melebihi tinggi viewport

### Requirement 11: Integrasi dengan PertahananModal

**User Story:** Sebagai developer, saya ingin modal program nuklir terintegrasi dengan baik ke PertahananModal, sehingga navigasi antar modal berjalan lancar.

#### Acceptance Criteria

1. WHEN Card_Program_Nuklir diklik di PertahananModal, THEN THE Sistem_Modal SHALL mengubah state activeMenu menjadi "Komando Pertahanan:Program Nuklir"
2. WHEN activeMenu adalah "Komando Pertahanan:Program Nuklir", THEN THE Sistem_Modal SHALL menampilkan modal program nuklir
3. WHEN modal program nuklir ditutup, THEN THE Sistem_Modal SHALL mengubah activeMenu kembali menjadi "Komando Pertahanan"
4. THE Sistem_Modal SHALL menerima props `isOpen`, `onClose`, dan `userCountryData` dari PertahananModal

### Requirement 12: Penanganan Data

**User Story:** Sebagai developer, saya ingin modal menangani data dengan aman, sehingga aplikasi tidak crash ketika data tidak tersedia.

#### Acceptance Criteria

1. WHEN Data_Program_Nuklir tidak tersedia atau undefined, THEN THE Sistem_Modal SHALL menampilkan nilai default 0%
2. WHEN userCountryData tidak tersedia, THEN THE Sistem_Modal SHALL tidak merender modal
3. THE Sistem_Modal SHALL menggunakan optional chaining (?.) untuk mengakses nested properties
4. THE Sistem_Modal SHALL menggunakan nullish coalescing operator (??) untuk memberikan nilai default

### Requirement 13: Aksesibilitas

**User Story:** Sebagai pemain dengan kebutuhan aksesibilitas, saya ingin modal dapat diakses dengan keyboard dan screen reader, sehingga saya dapat menggunakan fitur ini dengan mudah.

#### Acceptance Criteria

1. THE Sistem_Modal SHALL dapat ditutup dengan menekan tombol Escape
2. THE Sistem_Modal SHALL memiliki focus trap yang mencegah tab navigation keluar dari modal
3. THE Sistem_Modal SHALL memiliki aria-label yang sesuai untuk elemen interaktif
4. THE Sistem_Modal SHALL mengembalikan focus ke elemen yang membuka modal setelah modal ditutup
