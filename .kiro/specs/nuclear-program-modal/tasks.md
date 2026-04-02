# Implementation Plan: Modal Program Nuklir

## Overview

Implementasi akan dilakukan secara incremental dengan membangun komponen modal dari struktur dasar hingga fitur lengkap. Setiap task akan menghasilkan kode yang dapat dijalankan dan terintegrasi dengan task sebelumnya. Testing akan dilakukan sebagai sub-tasks untuk memvalidasi setiap komponen yang dibangun.

## Tasks

- [ ] 1. Setup struktur folder dan file dasar
  - Buat folder `app/frontend/src/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/modals/5_program_nuklir/`
  - Buat file `index.tsx` dengan komponen skeleton
  - Buat interface props dasar (isOpen, onClose, userCountryData)
  - Implementasi conditional rendering (return null jika !isOpen atau !userCountryData)
  - _Requirements: 1.1, 1.2, 12.2_

- [ ] 2. Implementasi struktur modal dasar dan overlay
  - [ ] 2.1 Buat overlay backdrop dengan styling sesuai design
    - Implementasi div overlay dengan classes: `bg-black/80 backdrop-blur-md z-[200]`
    - Implementasi animasi fade-in
    - _Requirements: 2.2, 9.5_
  
  - [ ] 2.2 Buat container modal dengan styling konsisten
    - Implementasi container dengan classes: `bg-zinc-950 border border-zinc-800 rounded-[40px]`
    - Implementasi shadow dan positioning
    - Implementasi max-width dan max-height untuk responsiveness
    - _Requirements: 9.2, 9.3, 9.4, 10.4_
  
  - [ ]* 2.3 Write property test untuk modal visibility
    - **Property 1: Modal Visibility Control**
    - **Validates: Requirements 2.1, 11.2**

- [ ] 3. Implementasi header modal
  - [ ] 3.1 Buat header section dengan ikon dan judul
    - Implementasi ikon Radiation dengan styling: `p-3 bg-yellow-500/10 rounded-2xl border border-yellow-500/20 text-yellow-500`
    - Implementasi judul "Program Nuklir Nasional" dengan styling sesuai design
    - Implementasi subjudul "National Nuclear Program"
    - Implementasi styling header: `px-8 py-6 border-b border-zinc-800/50 bg-zinc-900/30`
    - _Requirements: 4.1, 4.2, 4.3, 4.5_
  
  - [ ] 3.2 Implementasi tombol close
    - Buat button dengan ikon X
    - Wire onClick handler ke onClose callback
    - Implementasi styling button sesuai design
    - Tambahkan aria-label untuk accessibility
    - _Requirements: 4.4, 13.3_
  
  - [ ]* 3.3 Write unit test untuk close button interaction
    - Test bahwa clicking close button memanggil onClose
    - **Property 2: Close Button Interaction**
    - **Validates: Requirements 3.1**

- [ ] 4. Implementasi helper functions untuk data processing
  - [ ] 4.1 Buat function getReadinessColor
    - Implementasi logic untuk return colors berdasarkan percentage
    - Return rose colors untuk < 33%
    - Return yellow colors untuk 33-66%
    - Return emerald colors untuk > 66%
    - _Requirements: 5.4, 5.5, 5.6_
  
  - [ ] 4.2 Buat function getOperationalStatus
    - Implementasi logic untuk return status berdasarkan percentage
    - Return "Belum Dimulai" untuk 0%
    - Return "Dalam Pengembangan" untuk 1-99%
    - Return "Operasional Penuh" untuk 100%
    - _Requirements: 8.1, 8.2, 8.3_
  
  - [ ]* 4.3 Write property test untuk color selection
    - **Property 4: Color Selection Based on Readiness**
    - **Validates: Requirements 5.4, 5.5, 5.6**
  
  - [ ]* 4.4 Write property test untuk status text
    - **Property 6: Status Text for Development Phase**
    - **Validates: Requirements 8.2**
  
  - [ ]* 4.5 Write unit tests untuk edge cases
    - Test 0% menampilkan "Belum Dimulai"
    - Test 100% menampilkan "Operasional Penuh"
    - _Requirements: 8.1, 8.3_

- [ ] 5. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Implementasi data extraction dan validation
  - [ ] 6.1 Extract data program nuklir dari userCountryData
    - Gunakan optional chaining untuk akses nested properties
    - Implementasi nullish coalescing untuk default value 0
    - Implementasi clamping untuk nilai di luar range 0-100
    - _Requirements: 12.1, 12.3, 12.4_
  
  - [ ] 6.2 Calculate derived values
    - Calculate warheadCount: Math.floor(readiness / 10)
    - Calculate launchSystems: Math.floor(readiness / 20)
    - Calculate enrichmentCapacity: sama dengan readiness
    - _Requirements: 7.2, 7.3, 7.4_
  
  - [ ]* 6.3 Write unit tests untuk data validation
    - Test undefined data returns 0%
    - Test nilai < 0 di-clamp ke 0
    - Test nilai > 100 di-clamp ke 100
    - _Requirements: 12.1_

- [ ] 7. Implementasi main status card (persentase dan progress bar)
  - [ ] 7.1 Buat card untuk menampilkan persentase kesiapan
    - Display persentase dengan font besar dan menonjol
    - Gunakan warna dari getReadinessColor
    - Implementasi styling card sesuai design
    - _Requirements: 5.1, 5.2_
  
  - [ ] 7.2 Implementasi progress bar
    - Buat progress bar container dengan styling
    - Implementasi filled bar dengan width berdasarkan persentase
    - Gunakan gradient warna dari getReadinessColor
    - Implementasi transition animation untuk smooth changes
    - _Requirements: 6.1, 6.2, 6.3_
  
  - [ ]* 7.3 Write property test untuk percentage display
    - **Property 3: Percentage Display**
    - **Validates: Requirements 5.1**
  
  - [ ]* 7.4 Write property test untuk progress bar width
    - **Property 5: Progress Bar Width Mapping**
    - **Validates: Requirements 6.2**

- [ ] 8. Implementasi detail information grid
  - [ ] 8.1 Buat grid layout untuk detail cards
    - Implementasi responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
    - _Requirements: 10.1, 10.3_
  
  - [ ] 8.2 Buat card untuk Warhead Information
    - Display warheadCount dengan ikon yang sesuai
    - Implementasi styling card konsisten dengan tema
    - _Requirements: 7.2, 7.5, 7.6_
  
  - [ ] 8.3 Buat card untuk Launch Systems
    - Display launchSystems dengan ikon yang sesuai
    - Implementasi styling card konsisten dengan tema
    - _Requirements: 7.3, 7.5, 7.6_
  
  - [ ] 8.4 Buat card untuk Enrichment Capacity
    - Display enrichmentCapacity dengan ikon yang sesuai
    - Implementasi styling card konsisten dengan tema
    - _Requirements: 7.4, 7.5, 7.6_
  
  - [ ] 8.5 Buat card untuk Development Status
    - Display status dari getOperationalStatus
    - Implementasi badge dengan warna yang sesuai
    - _Requirements: 7.1, 8.4_
  
  - [ ]* 8.6 Write unit tests untuk detail cards
    - Test semua cards ter-render dengan data yang benar
    - Test ikon yang sesuai ditampilkan
    - _Requirements: 7.5_

- [ ] 9. Implementasi keyboard accessibility
  - [ ] 9.1 Implementasi Escape key handler
    - Setup useEffect untuk listen keyboard events
    - Handle Escape key press untuk close modal
    - Cleanup event listener on unmount
    - _Requirements: 13.1_
  
  - [ ]* 9.2 Write property test untuk keyboard interaction
    - **Property 7: Keyboard Accessibility (Escape Key)**
    - **Validates: Requirements 13.1**

- [ ] 10. Implementasi scrollable content area
  - Buat content wrapper dengan overflow-y-auto
  - Implementasi styling: `flex-1 overflow-y-auto p-8`
  - Ensure content dapat di-scroll ketika melebihi viewport height
  - _Requirements: 10.5_

- [ ] 11. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 12. Integrasi dengan PertahananModal
  - [ ] 12.1 Update PertahananModal untuk import ProgramNuklirModal
    - Import komponen dari `./modals/5_program_nuklir`
    - _Requirements: 11.4_
  
  - [ ] 12.2 Tambahkan state management untuk modal visibility
    - Buat state atau check activeMenu untuk "Komando Pertahanan:Program Nuklir"
    - _Requirements: 11.1, 11.2_
  
  - [ ] 12.3 Wire onClick handler pada Card Program Nuklir
    - Update onClick handler untuk set activeMenu
    - Pass correct props ke ProgramNuklirModal
    - _Requirements: 2.1, 11.1_
  
  - [ ] 12.4 Render ProgramNuklirModal component
    - Render modal dengan props: isOpen, onClose, userCountryData
    - Implementasi onClose untuk reset activeMenu
    - _Requirements: 11.3, 11.4_
  
  - [ ]* 12.5 Write integration tests
    - Test clicking card membuka modal
    - Test modal menerima correct props
    - Test closing modal updates parent state
    - _Requirements: 11.1, 11.2, 11.3_

- [ ] 13. Final polish dan accessibility improvements
  - [ ] 13.1 Tambahkan ARIA attributes
    - Tambahkan role="dialog" pada modal container
    - Tambahkan aria-modal="true"
    - Tambahkan aria-labelledby untuk title
    - _Requirements: 13.3_
  
  - [ ] 13.2 Verify responsive behavior
    - Test pada berbagai ukuran layar
    - Ensure layout menyesuaikan dengan baik
    - _Requirements: 10.1, 10.2, 10.3_
  
  - [ ] 13.3 Verify styling consistency
    - Compare dengan MisiSeranganModal
    - Ensure colors dan spacing konsisten
    - _Requirements: 9.1, 9.6_

- [ ] 14. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- Implementation menggunakan TypeScript dan React hooks
- Styling menggunakan Tailwind CSS classes
- Testing menggunakan fast-check untuk property-based tests
