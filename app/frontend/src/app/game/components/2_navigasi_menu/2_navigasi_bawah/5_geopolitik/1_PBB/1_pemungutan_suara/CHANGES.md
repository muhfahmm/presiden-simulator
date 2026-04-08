# Perubahan Sistem Izin Proposal

## Ringkasan
Sistem izin proposal telah diperbarui untuk memungkinkan **Country 207** mengajukan Rancangan Resolusi, Sanksi, dan Embargo **tanpa harus menjadi anggota Dewan Keamanan PBB**.

## File yang Diubah

### 1. VoteVisualization.tsx
**Perubahan:**
- Menambahkan import `checkProposalPermission` dari `proposalPermissions.ts`
- Menambahkan prop `userCountry` untuk mengidentifikasi negara user
- Mengubah logika dari `isUNSCMember` menjadi `canPropose` yang menggunakan sistem izin baru
- Pesan error sekarang dinamis berdasarkan alasan penolakan

**Sebelum:**
```typescript
{!isUNSCMember && (
  <div>Hanya Anggota Dewan Keamanan...</div>
)}
disabled={!selectedCountry || !isUNSCMember}
```

**Sesudah:**
```typescript
const permission = checkProposalPermission(userCountry, isUNSCMember);
const canPropose = permission.canPropose;

{!canPropose && (
  <div>{permission.reason}</div>
)}
disabled={!selectedCountry || !canPropose}
```

### 2. PemungutanSuaraTab.tsx
**Perubahan:**
- Menambahkan prop `userCountry` ke komponen `VoteVisualization`
- Memastikan `userCountry` tersedia untuk pengecekan izin

### 3. proposalPermissions.ts
**Perubahan:**
- Menambahkan variasi nama untuk Country 207: `'207'`, `'Country 207'`, `'207 Country'`
- Meningkatkan logika pencocokan nama dengan normalisasi dan case-insensitive matching
- Fungsi `isPrivilegedCountry()` sekarang lebih fleksibel dalam mengenali Country 207

## Hasil

### Sebelum Perubahan
- ❌ Country 207 tidak dapat mengajukan proposal jika bukan anggota UNSC
- ❌ Pesan error statis dan tidak informatif

### Sesudah Perubahan
- ✅ Country 207 dapat mengajukan proposal tanpa UNSC
- ✅ Anggota UNSC tetap dapat mengajukan proposal
- ✅ Negara biasa tidak dapat mengajukan proposal
- ✅ Pesan error dinamis dan informatif
- ✅ Sistem dapat diperluas untuk negara istimewa lainnya

## Testing

Untuk memverifikasi perubahan:

1. **Login sebagai Country 207 (bukan UNSC member)**
   - Tombol "Ajukan Resolusi Ke PBB" harus **ENABLED**
   - Tidak ada pesan error

2. **Login sebagai negara biasa (bukan UNSC member)**
   - Tombol "Ajukan Resolusi Ke PBB" harus **DISABLED**
   - Pesan error: "Hanya anggota Dewan Keamanan PBB atau negara istimewa yang dapat mengajukan proposal"

3. **Login sebagai anggota UNSC**
   - Tombol "Ajukan Resolusi Ke PBB" harus **ENABLED**
   - Tidak ada pesan error

## Catatan Teknis

- Sistem menggunakan normalisasi nama untuk matching yang lebih robust
- Pencocokan case-insensitive untuk menghindari masalah dengan variasi penulisan
- Semua perubahan backward compatible dengan sistem voting yang ada
