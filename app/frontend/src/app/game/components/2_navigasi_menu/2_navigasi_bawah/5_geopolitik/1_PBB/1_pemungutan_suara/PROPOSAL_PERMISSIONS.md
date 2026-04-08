# Sistem Izin Proposal PBB

## Deskripsi

Sistem ini mengatur siapa saja yang dapat mengajukan Rancangan Resolusi, Sanksi, dan Embargo di PBB.

## Aturan Dasar

### 1. Anggota Dewan Keamanan (UNSC)
- Dapat mengajukan semua jenis proposal (Resolusi, Sanksi, Embargo)
- Memerlukan status sebagai anggota UNSC
- Tidak ada batasan jumlah proposal

### 2. Negara Istimewa (Privileged Countries)
- **Country 207** memiliki hak istimewa penuh
- Dapat mengajukan semua jenis proposal **tanpa harus menjadi anggota UNSC**
- Tidak perlu memenuhi persyaratan UNSC

### 3. Negara Biasa
- **TIDAK dapat** mengajukan proposal
- Hanya dapat memilih untuk setuju/abstain/tolak pada proposal yang ada

## Implementasi

### File Utama

1. **proposalPermissions.ts**
   - Logika inti untuk mengecek izin proposal
   - Fungsi validasi proposal
   - Manajemen daftar negara istimewa

2. **useProposalPermissions.ts**
   - React Hook untuk mengelola state izin proposal
   - Integrasi dengan komponen UI

### Fungsi Utama

#### `checkProposalPermission(countryName, isUNSCMember)`
Mengecek apakah negara dapat mengajukan proposal.

```typescript
const permission = checkProposalPermission('207', false);
// {
//   canPropose: true,
//   reason: 'Negara ini memiliki hak istimewa untuk mengajukan proposal',
//   requiresUNSC: false
// }
```

#### `isPrivilegedCountry(countryName)`
Mengecek apakah negara adalah negara istimewa.

```typescript
const isPrivileged = isPrivilegedCountry('207'); // true
```

#### `validateProposal(proposerCountry, targetCountry, isUNSCMember, proposalType)`
Validasi lengkap sebelum proposal diajukan.

```typescript
const validation = validateProposal('207', 'Indonesia', false, 'sanction');
// {
//   isValid: true,
//   errors: []
// }
```

#### `canProposeType(countryName, isUNSCMember, proposalType)`
Mengecek apakah negara dapat mengajukan tipe proposal tertentu.

```typescript
const canPropose = canProposeType('207', false, 'embargo'); // true
```

### Manajemen Negara Istimewa

#### Menambah Negara Istimewa
```typescript
import { addPrivilegedCountry } from './utils/proposalPermissions';

addPrivilegedCountry('India');
```

#### Menghapus Negara Istimewa
```typescript
import { removePrivilegedCountry } from './utils/proposalPermissions';

removePrivilegedCountry('207');
```

#### Mendapatkan Daftar Negara Istimewa
```typescript
import { getPrivilegedCountries } from './utils/proposalPermissions';

const privileged = getPrivilegedCountries(); // ['207']
```

## Penggunaan di Komponen

### Menggunakan Hook

```typescript
import { useProposalPermissions } from './utils/useProposalPermissions';

export function MyComponent() {
  const {
    canPropose,
    isPrivileged,
    isUNSCMember,
    permissionReason,
    validateProposalSubmission,
  } = useProposalPermissions('207', false);

  if (!canPropose) {
    return <div>{permissionReason}</div>;
  }

  const handleSubmit = () => {
    const validation = validateProposalSubmission('207', 'Indonesia', 'sanction');
    if (!validation.isValid) {
      console.error(validation.errors);
      return;
    }
    // Lanjutkan dengan pengajuan proposal
  };

  return (
    <button onClick={handleSubmit}>
      Ajukan Proposal
    </button>
  );
}
```

### Menggunakan Fungsi Langsung

```typescript
import {
  checkProposalPermission,
  validateProposal,
} from './utils/proposalPermissions';

// Cek izin
const permission = checkProposalPermission('207', false);
if (!permission.canPropose) {
  console.error(permission.reason);
  return;
}

// Validasi proposal
const validation = validateProposal('207', 'Indonesia', false, 'embargo');
if (!validation.isValid) {
  console.error(validation.errors);
  return;
}

// Lanjutkan dengan pengajuan proposal
```

## Integrasi dengan PemungutanSuaraTab

Untuk mengintegrasikan dengan `PemungutanSuaraTab.tsx`:

```typescript
import { useProposalPermissions } from './utils/useProposalPermissions';

export default function PemungutanSuaraTab() {
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [isUNSCMember, setIsUNSCMember] = useState(false);

  const {
    canPropose,
    isPrivileged,
    permissionReason,
    validateProposalSubmission,
  } = useProposalPermissions(userCountry, isUNSCMember);

  // Tampilkan pesan jika tidak dapat mengajukan proposal
  if (!canPropose) {
    return (
      <div className="p-4 bg-red-900/20 border border-red-500 rounded">
        <p className="text-red-400">{permissionReason}</p>
      </div>
    );
  }

  // Tampilkan badge jika negara istimewa
  if (isPrivileged) {
    return (
      <div className="p-2 bg-gold-900/20 border border-gold-500 rounded">
        <p className="text-gold-400">Status: Negara Istimewa</p>
      </div>
    );
  }

  // Lanjutkan dengan UI normal
  return (
    // ... UI komponen
  );
}
```

## Skenario Penggunaan

### Skenario 1: Country 207 Mengajukan Embargo
```typescript
const validation = validateProposal('207', 'Indonesia', false, 'embargo');
// isValid: true (Country 207 dapat mengajukan tanpa UNSC)
```

### Skenario 2: Negara Biasa Mengajukan Resolusi
```typescript
const validation = validateProposal('India', false, 'resolution');
// isValid: false
// errors: ['Hanya anggota Dewan Keamanan PBB atau negara istimewa yang dapat mengajukan proposal']
```

### Skenario 3: Anggota UNSC Mengajukan Sanksi
```typescript
const validation = validateProposal('USA', true, 'sanction');
// isValid: true (Anggota UNSC dapat mengajukan)
```

### Skenario 4: Negara Mengajukan Proposal Terhadap Diri Sendiri
```typescript
const validation = validateProposal('207', '207', false, 'embargo');
// isValid: false
// errors: ['Tidak dapat mengajukan proposal terhadap diri sendiri']
```

## Perubahan di Masa Depan

Untuk menambah negara istimewa baru atau mengubah aturan:

1. Edit `PRIVILEGED_COUNTRIES` di `proposalPermissions.ts`
2. Atau gunakan fungsi `addPrivilegedCountry()` secara dinamis
3. Perubahan akan langsung berlaku di semua komponen yang menggunakan sistem ini

## Catatan Penting

- Country 207 adalah negara khusus dengan hak istimewa penuh
- Sistem ini dapat diperluas untuk mendukung lebih banyak negara istimewa
- Validasi dilakukan di sisi klien dan harus juga divalidasi di sisi server
- Semua proposal masih harus melalui voting 30 hari sebelum disetujui
