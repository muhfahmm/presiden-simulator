export interface Hutang {
  id: string;
  name: string;
  description: string;
}

export const pinjamanHutang: Hutang[] = [
  { id: "hutang_ln", name: "Hutang Luar Negeri", description: "Pinjaman dari IMF/Bank Dunia" },
  { id: "bunga_hutang", name: "Bunga Hutang", description: "Biaya rutin bulanan" },
  { id: "obligasi", name: "Surat Utang Negara (Obligasi)", description: "Pinjaman dari rakyat" }
];
