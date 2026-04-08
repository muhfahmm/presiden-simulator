# Analisis Modal Hub Perdagangan Strategis

## Karakteristik Utama

### 1. Dimensi & Layout
- **Ukuran**: `max-w-[95vw]` x `h-[82vh]` - menggunakan 95% lebar dan 82% tinggi viewport
- **Layout**: 3-kolom dengan sidebar kiri (320px) + sidebar tengah (320px) + area utama (flex-1)
- **Overflow**: Setiap kolom memiliki scroll independen

### 2. Struktur Header
```tsx
- Icon + Judul + Subtitle
- Kas Negara (real-time)
- Navigasi Waktu
- Action buttons (Ship icon + Close)
```

### 3. Sidebar Kiri - Mitra Dagang
- List negara mitra
- Status aktif/pending
- Selection state dengan highlight
- Scroll independen

### 4. Sidebar Tengah - Komoditas
- 6 Kategori collapsible:
  1. Mineral Kritis (12 items)
  2. Manufaktur (6 items)
  3. Produksi Pangan (12 items)
  4. Pengolahan (5 items)
  5. Medis (1 item)
  6. Militer (1 item)
- Animasi expand/collapse
- Icon per item
- Status availability (0 = disabled)

### 5. Area Utama
- Tab switching: Impor | Ekspor | Histori | Berita
- Conditional rendering berdasarkan selection
- Chart & visualisasi
- Execution modals
- Partner list di bawah

### 6. Fitur Interaktif
- Real-time budget updates
- Dynamic pricing
- Trade execution flow
- History tracking
- News feed

## Rekomendasi untuk Modal Kepuasan

### Layout Serupa (3-Kolom)

#### Sidebar Kiri: Kategori Analisis
- Overview Nasional
- Analisis Regional
- Demografi
- Tren Historis

#### Sidebar Tengah: Sektor Kepuasan
1. **Ekonomi** (4 sub-items)
   - Harga Pokok
   - Pajak
   - Lapangan Kerja
   - Upah & Gaji

2. **Sosial** (4 sub-items)
   - Pendidikan
   - Kesehatan
   - Perumahan
   - Keamanan

3. **Politik** (4 sub-items)
   - Kebebasan Sipil
   - Transparansi
   - Partisipasi
   - Stabilitas

4. **Infrastruktur** (4 sub-items)
   - Transportasi
   - Utilitas
   - Internet
   - Sanitasi

5. **Lingkungan** (4 sub-items)
   - Kualitas Udara
   - Air Bersih
   - Ruang Hijau
   - Pengelolaan Sampah

6. **Budaya & Hiburan** (4 sub-items)
   - Fasilitas Olahraga
   - Seni & Budaya
   - Pariwisata
   - Media & Hiburan

#### Area Utama: Tabs & Detail
- **Tab 1: Overview** - Dashboard utama dengan metrics
- **Tab 2: Sektor Detail** - Breakdown per sektor
- **Tab 3: Tren & Proyeksi** - Chart historis & forecast
- **Tab 4: Rekomendasi** - AI-powered suggestions

### Fitur Tambahan
- Heat map kepuasan per region
- Comparison dengan negara lain
- Event timeline yang mempengaruhi kepuasan
- Sentiment analysis dari "rakyat"
- Policy impact simulator

## Ukuran File
- PerdaganganModal.tsx: ~960 lines
- Target KepuasanModal: ~800-1000 lines
