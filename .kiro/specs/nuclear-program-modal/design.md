# Dokumen Design: Modal Program Nuklir

## Overview

Modal Program Nuklir adalah komponen React berbasis TypeScript yang menampilkan informasi detail tentang program nuklir negara pemain. Modal ini mengikuti pola desain yang sama dengan modal lain dalam aplikasi (seperti MisiSeranganModal), menggunakan zinc/dark theme dengan accent colors kuning/hijau untuk mencerminkan tema nuklir.

Komponen ini akan diimplementasikan sebagai modal overlay full-screen dengan container terpusat yang menampilkan:
- Header dengan ikon dan judul
- Persentase kesiapan program nuklir yang besar dan menonjol
- Progress bar visual
- Grid informasi detail tentang berbagai aspek program nuklir
- Status operasional program

## Architecture

### Component Structure

```
5_program_nuklir/
├── index.tsx                 # Komponen utama modal
└── types.ts                  # Type definitions (opsional)
```

### Component Hierarchy

```
ProgramNuklirModal (index.tsx)
├── Overlay (backdrop)
├── Modal Container
│   ├── Header
│   │   ├── Icon + Title
│   │   └── Close Button
│   ├── Content Area (scrollable)
│   │   ├── Main Status Card
│   │   │   ├── Percentage Display
│   │   │   └── Progress Bar
│   │   ├── Detail Grid
│   │   │   ├── Warhead Info Card
│   │   │   ├── Launch System Card
│   │   │   ├── Enrichment Card
│   │   │   └── Development Status Card
│   │   └── Operational Status Badge
```

### State Management

Modal ini menggunakan React state lokal untuk:
- Tidak ada state internal yang kompleks diperlukan
- Semua data berasal dari props `userCountryData`
- State `isOpen` dikelola oleh parent component (PertahananModal)

### Data Flow

```
PertahananModal
    ↓ (props: isOpen, onClose, userCountryData)
ProgramNuklirModal
    ↓ (extract data)
data.militer_strategis.operasi_strategis.program_nuklir
    ↓ (render)
UI Components
```

## Components and Interfaces

### ProgramNuklirModal Component

**Props Interface:**

```typescript
interface ProgramNuklirModalProps {
  isOpen: boolean;              // Kontrol visibility modal
  onClose: () => void;          // Callback untuk menutup modal
  userCountryData: CountryData; // Data negara pemain
}
```

**Component Signature:**

```typescript
export default function ProgramNuklirModal({ 
  isOpen, 
  onClose, 
  userCountryData 
}: ProgramNuklirModalProps): JSX.Element | null
```

### Helper Functions

**getReadinessColor:**
```typescript
function getReadinessColor(percentage: number): {
  text: string;
  bg: string;
  border: string;
  gradient: string;
}
```
Mengembalikan objek warna berdasarkan persentase kesiapan:
- 0-33%: rose colors (merah)
- 34-66%: yellow colors (kuning)
- 67-100%: emerald colors (hijau)

**getOperationalStatus:**
```typescript
function getOperationalStatus(percentage: number): {
  label: string;
  color: string;
}
```
Mengembalikan status operasional berdasarkan persentase:
- 0%: "Belum Dimulai" (zinc)
- 1-99%: "Dalam Pengembangan" (yellow)
- 100%: "Operasional Penuh" (emerald)

## Data Models

### CountryData Interface (Existing)

```typescript
interface CountryData {
  name_id: string;
  name_en: string;
  militer_strategis: {
    operasi_strategis: {
      program_nuklir: number; // 0-100
      // ... other fields
    };
    intel_radar?: {
      // ... fields
    };
  };
  armada_militer: {
    // ... fields
  };
  // ... other fields
}
```

### Nuclear Program Data Structure

Data program nuklir yang akan ditampilkan:

```typescript
interface NuclearProgramData {
  readiness: number;           // Persentase kesiapan (0-100)
  warheadCount: number;        // Jumlah hulu ledak (derived dari readiness)
  launchSystems: number;       // Jumlah sistem peluncuran (derived)
  enrichmentCapacity: number;  // Kapasitas pengayaan % (derived)
  developmentPhase: string;    // Fase pengembangan (derived)
}
```

**Data Derivation Logic:**

Karena saat ini hanya ada satu field `program_nuklir` (persentase), kita akan derive data lainnya:

```typescript
const readiness = userCountryData.militer_strategis.operasi_strategis?.program_nuklir ?? 0;

// Derived values (simulasi untuk UI)
const warheadCount = Math.floor(readiness / 10); // 0-10 warheads
const launchSystems = Math.floor(readiness / 20); // 0-5 systems
const enrichmentCapacity = readiness; // Same as readiness
const developmentPhase = getDevelopmentPhase(readiness);
```

## Correctness Properties

*Property adalah karakteristik atau perilaku yang harus berlaku untuk semua eksekusi sistem yang valid - pada dasarnya, pernyataan formal tentang apa yang harus dilakukan sistem. Property berfungsi sebagai jembatan antara spesifikasi yang dapat dibaca manusia dan jaminan kebenaran yang dapat diverifikasi mesin.*


### Property 1: Modal Visibility Control
*For any* state value of `isOpen` (true/false), the modal component should render when `isOpen` is true and return null when `isOpen` is false
**Validates: Requirements 2.1, 11.2**

### Property 2: Close Button Interaction
*For any* rendered modal, clicking the close button should invoke the `onClose` callback function exactly once
**Validates: Requirements 3.1**

### Property 3: Percentage Display
*For any* valid percentage value (0-100), the modal should display that exact percentage value in the UI
**Validates: Requirements 5.1**

### Property 4: Color Selection Based on Readiness
*For any* percentage value, the color selection function should return rose colors when percentage < 33, yellow colors when percentage is between 33-66 (inclusive), and emerald colors when percentage > 66
**Validates: Requirements 5.4, 5.5, 5.6**

### Property 5: Progress Bar Width Mapping
*For any* percentage value (0-100), the progress bar width should be proportional to that percentage value
**Validates: Requirements 6.2**

### Property 6: Status Text for Development Phase
*For any* percentage value between 1 and 99 (inclusive), the operational status should display "Dalam Pengembangan"
**Validates: Requirements 8.2**

### Property 7: Keyboard Accessibility (Escape Key)
*For any* open modal, pressing the Escape key should trigger the `onClose` callback function
**Validates: Requirements 13.1**

## Error Handling

### Data Validation

**Missing or Invalid Data:**
- Jika `userCountryData` adalah null atau undefined, komponen return null (tidak render)
- Jika `program_nuklir` tidak tersedia, gunakan nilai default 0
- Gunakan optional chaining (`?.`) untuk semua akses nested properties
- Gunakan nullish coalescing (`??`) untuk memberikan fallback values

```typescript
if (!isOpen || !userCountryData) return null;

const readiness = userCountryData.militer_strategis?.operasi_strategis?.program_nuklir ?? 0;
```

**Out of Range Values:**
- Jika persentase < 0, clamp ke 0
- Jika persentase > 100, clamp ke 100

```typescript
const clampedReadiness = Math.max(0, Math.min(100, readiness));
```

### Event Handling

**Close Button Click:**
- Pastikan `onClose` callback ada sebelum dipanggil
- Gunakan optional chaining untuk safety

```typescript
const handleClose = () => {
  onClose?.();
};
```

**Keyboard Events:**
- Listen untuk Escape key press
- Cleanup event listener saat component unmount
- Hanya aktif ketika modal terbuka

```typescript
useEffect(() => {
  if (!isOpen) return;
  
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose?.();
    }
  };
  
  window.addEventListener('keydown', handleEscape);
  return () => window.removeEventListener('keydown', handleEscape);
}, [isOpen, onClose]);
```

### UI Error States

**No Data Available:**
- Tampilkan placeholder atau empty state jika tidak ada data
- Berikan pesan informatif kepada user

**Rendering Errors:**
- Wrap komponen dengan error boundary (di level parent)
- Log errors untuk debugging

## Testing Strategy

### Dual Testing Approach

Fitur ini akan menggunakan kombinasi unit tests dan property-based tests untuk memastikan correctness yang komprehensif:

**Unit Tests** akan fokus pada:
- Specific examples dari rendering dengan data tertentu
- Edge cases (0%, 100%, undefined data)
- Integration dengan parent component
- Keyboard event handling (Escape key)
- Accessibility attributes (aria-labels)

**Property-Based Tests** akan fokus pada:
- Universal properties yang berlaku untuk semua input values
- Color selection logic untuk semua range persentase
- Progress bar width calculation untuk semua nilai
- Modal visibility behavior untuk semua state combinations
- Data validation dan clamping untuk semua possible inputs

### Property-Based Testing Configuration

**Library:** fast-check (untuk TypeScript/React)

**Configuration:**
- Minimum 100 iterations per property test
- Setiap test harus reference design document property
- Tag format: `Feature: nuclear-program-modal, Property {number}: {property_text}`

**Example Property Test Structure:**

```typescript
import fc from 'fast-check';

describe('Property Tests - Nuclear Program Modal', () => {
  // Feature: nuclear-program-modal, Property 4: Color Selection Based on Readiness
  it('should select correct colors for all percentage ranges', () => {
    fc.assert(
      fc.property(fc.integer({ min: 0, max: 100 }), (percentage) => {
        const colors = getReadinessColor(percentage);
        
        if (percentage < 33) {
          expect(colors.text).toContain('rose');
        } else if (percentage <= 66) {
          expect(colors.text).toContain('yellow');
        } else {
          expect(colors.text).toContain('emerald');
        }
      }),
      { numRuns: 100 }
    );
  });
});
```

### Unit Test Coverage

**Component Rendering:**
- Modal renders when isOpen is true
- Modal returns null when isOpen is false
- Modal returns null when userCountryData is null

**Data Display:**
- Displays correct percentage from data
- Displays default 0% when data is missing
- Clamps values outside 0-100 range

**User Interactions:**
- Close button calls onClose callback
- Escape key calls onClose callback
- Overlay click behavior (if implemented)

**Edge Cases:**
- 0% readiness shows "Belum Dimulai"
- 100% readiness shows "Operasional Penuh"
- 1-99% readiness shows "Dalam Pengembangan"
- Undefined/null data handling

**Accessibility:**
- Close button has aria-label
- Modal has proper ARIA attributes
- Keyboard navigation works correctly

### Integration Testing

**Parent Component Integration:**
- Modal receives correct props from PertahananModal
- activeMenu state changes trigger modal visibility
- onClose callback updates parent state correctly

**Data Flow:**
- Data from CountryData flows correctly to modal
- Derived values calculate correctly
- UI updates when data changes

## Implementation Notes

### Styling Consistency

Gunakan pattern yang sama dengan MisiSeranganModal:
- Container: `bg-zinc-950 border border-zinc-800 rounded-[40px]`
- Overlay: `bg-black/80 backdrop-blur-md z-[200]`
- Header: `px-8 py-6 border-b border-zinc-800/50 bg-zinc-900/30`
- Content: `flex-1 overflow-y-auto p-8`

### Animation

Gunakan Tailwind animation classes:
- Modal entrance: `animate-in fade-in duration-300`
- Content: `animate-in fade-in slide-in-from-bottom-2 duration-500`

### Responsive Design

Gunakan Tailwind responsive utilities:
- Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Padding: `p-4 md:p-8`
- Text size: `text-xl md:text-2xl`

### Performance Considerations

- Gunakan `useMemo` untuk derived calculations jika diperlukan
- Avoid unnecessary re-renders dengan proper dependency arrays
- Lazy load modal content jika kompleks

### Accessibility

- Tambahkan `role="dialog"` pada modal container
- Tambahkan `aria-modal="true"`
- Tambahkan `aria-labelledby` yang reference ke title
- Implement focus trap dengan library seperti `focus-trap-react`
- Ensure keyboard navigation works properly
