# 💰 Sanksi Ekonomi (Economic Sanction) - Logic

Folder ini berisi logic untuk mengelola "Sanksi Ekonomi" yang merupakan satu-satunya opsi dalam kategori Sanksi.

**Fitur Utama:** Sanksi Ekonomi dapat dilakukan **kapan saja** tanpa perlu voting 30 hari terlebih dahulu.

## 📁 Struktur

```
1_sanksi_ekonomi/
├── useSanksiEkonomi.ts          # Hook untuk state management
├── sanksiEkonomiEffects.ts      # Fungsi untuk menghitung & menerapkan efek
├── index.ts                     # Export file
└── README.md                    # Dokumentasi ini
```

## 🧠 Fungsi-Fungsi

### `useSanksiEkonomi()`

Hook untuk mengelola state Sanksi Ekonomi.

```typescript
const {
  state,                    // { isActive, duration, targetCountry, isApplied, canApplyAnytime }
  activate,                 // () => void
  setDuration,              // (duration: string) => void
  setTargetCountry,         // (country: string | null) => void
  apply,                    // () => void
  reset,                    // () => void
  validate,                 // () => boolean
} = useSanksiEkonomi();
```

**State Properties:**
- `isActive` - Apakah sanksi sedang aktif
- `duration` - Durasi sanksi (1 Bulan, 3 Bulan, dll)
- `targetCountry` - Negara target sanksi
- `isApplied` - Apakah sanksi sudah diterapkan
- `canApplyAnytime` - Dapat dilakukan kapan saja (selalu true)

### `calculateSanksiEkonomiEffect()`

Menghitung efek dari Sanksi Ekonomi.

```typescript
const effect = calculateSanksiEkonomiEffect();
// Returns: {
//   revenueReduction: 25,
//   buildingCostIncrease: 15,
//   tradeImpact: 20,
//   approvalRatingImpact: -1
// }
```

### `applySanksiEkonomiEffect(duration, targetCountry, gameState)`

Menerapkan efek sanksi ke game state.

```typescript
const updatedState = applySanksiEkonomiEffect(
  '3 Bulan',
  'Malaysia',
  currentGameState
);
```

**Efek yang Diterapkan:**
1. ✅ Mengurangi Daily Revenue 25%
2. ✅ Menaikkan Building Cost 15%
3. ✅ Mengurangi Trade Efficiency 20%
4. ✅ Mengurangi Approval Rating -1%

### `checkSanksiEkonomiActive(gameState)`

Mengecek apakah Sanksi Ekonomi sedang aktif.

```typescript
if (checkSanksiEkonomiActive(currentGameState)) {
  console.log('Sanksi Ekonomi sedang aktif');
}
```

### `removeSanksiEkonomiEffect(gameState)`

Menghapus efek sanksi dari game state (ketika sanksi berakhir).

```typescript
const updatedState = removeSanksiEkonomiEffect(currentGameState);
```

### `getSanksiEkonomiDuration(gameState)`

Dapatkan durasi Sanksi Ekonomi dalam hari.

```typescript
const durationDays = getSanksiEkonomiDuration(currentGameState);
```

### `getSanksiEkonomiRemainingDays(gameState, currentGameDay)`

Dapatkan sisa hari Sanksi Ekonomi.

```typescript
const remainingDays = getSanksiEkonomiRemainingDays(currentGameState, 5);
```

## 📊 Efek Sanksi

### Sanksi Ekonomi (Economic Sanction)

**Deskripsi:**
Pembatasan akses keuangan dan pembekuan aset negara di bank internasional.

**Efek Sistemik:**
- 📉 Daily Revenue: **-25%**
- 📈 Building Cost: **+15%**
- 🚫 Trade Efficiency: **-20%**
- 😞 Approval Rating: **-1%**

**Durasi:**
- 1 Bulan (30 hari)
- 3 Bulan (90 hari)
- 6 Bulan (180 hari)
- 9 Bulan (270 hari)
- 1 Tahun (365 hari)

**Keunikan:**
- ⚡ Dapat dilakukan **kapan saja**
- ⚡ Tidak perlu voting 30 hari
- ⚡ Efek langsung diterapkan

## 🔄 Alur Penggunaan

### Step 1: Aktivasi Sanksi
```typescript
const { activate, state } = useSanksiEkonomi();
activate();
```

### Step 2: Konfigurasi
```typescript
const { setDuration, setTargetCountry } = useSanksiEkonomi();
setDuration('3 Bulan');
setTargetCountry('Malaysia');
```

### Step 3: Validasi
```typescript
const { validate } = useSanksiEkonomi();
if (validate()) {
  // Siap untuk diterapkan
}
```

### Step 4: Terapkan Efek
```typescript
const { apply } = useSanksiEkonomi();
const updatedState = applySanksiEkonomiEffect(
  state.duration,
  state.targetCountry,
  currentGameState
);
apply();
```

### Step 5: Cek Status
```typescript
const isActive = checkSanksiEkonomiActive(gameState);
const remainingDays = getSanksiEkonomiRemainingDays(gameState, currentGameDay);
```

### Step 6: Hapus Efek (Ketika Berakhir)
```typescript
const updatedState = removeSanksiEkonomiEffect(gameState);
```

## 📝 Contoh Implementasi

```typescript
import {
  useSanksiEkonomi,
  applySanksiEkonomiEffect,
  checkSanksiEkonomiActive,
} from './1_sanksi_ekonomi';

function MyComponent() {
  const sanksiEkonomi = useSanksiEkonomi();
  const [gameState, setGameState] = useState(initialGameState);

  const handleApplySanction = () => {
    if (sanksiEkonomi.validate()) {
      const updatedState = applySanksiEkonomiEffect(
        sanksiEkonomi.state.duration,
        sanksiEkonomi.state.targetCountry,
        gameState
      );
      setGameState(updatedState);
      sanksiEkonomi.apply();
    }
  };

  const handleCheckStatus = () => {
    if (checkSanksiEkonomiActive(gameState)) {
      alert('Sanksi Ekonomi sedang aktif!');
    }
  };

  return (
    <div>
      <button onClick={() => sanksiEkonomi.setDuration('3 Bulan')}>
        Set Durasi
      </button>
      <button onClick={() => sanksiEkonomi.setTargetCountry('Malaysia')}>
        Set Target
      </button>
      <button onClick={handleApplySanction}>
        Terapkan Sanksi
      </button>
      <button onClick={handleCheckStatus}>
        Cek Status
      </button>
    </div>
  );
}
```

## 🎯 Integrasi dengan PemungutanSuaraTab

File `PemungutanSuaraTab.tsx` dapat menggunakan logic ini:

```typescript
import { useSanksiEkonomi, applySanksiEkonomiEffect } from './2_sanksi/logic/1_sanksi_ekonomi';

export default function PemungutanSuaraTab() {
  const sanksiEkonomi = useSanksiEkonomi();
  
  const handleSubmit = () => {
    const newState = applySanksiEkonomiEffect(
      sanksiEkonomi.state.duration,
      sanksiEkonomi.state.targetCountry,
      currentGameState
    );
    updateGameState(newState);
  };
  
  // ... rest of component
}
```

## 📚 Tipe Data

### SanksiEkonomiState
```typescript
interface SanksiEkonomiState {
  isActive: boolean;
  duration: string;
  targetCountry: string | null;
  isApplied: boolean;
  canApplyAnytime: boolean;
}
```

### SanksiEkonomiEffect
```typescript
interface SanksiEkonomiEffect {
  name: string;
  description: string;
  effects: {
    revenueReduction: number;
    buildingCostIncrease: number;
    tradeImpact: number;
    approvalRatingImpact: number;
  };
}
```

## ✨ Keuntungan Struktur

✅ **Modular** - Logic terpisah untuk setiap sanksi
✅ **Reusable** - Hooks dapat digunakan di berbagai komponen
✅ **Testable** - Setiap fungsi dapat ditest secara independen
✅ **Maintainable** - Mudah untuk memodifikasi atau menambah fitur
✅ **Type-Safe** - TypeScript untuk type safety
✅ **Scalable** - Mudah menambah sanksi baru

## 🔗 Referensi

- **Parent:** `2_sanksi/logic/`
- **Sibling:** `useSanksi.ts`, `sanksiEffects.ts`
- **Related:** `2_sanksi/SanksiCard.tsx`
