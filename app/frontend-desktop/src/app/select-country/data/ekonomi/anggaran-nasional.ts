export interface Anggaran {
  id: string;
  name: string;
  components: string[];
}

export const anggaranNasional: Anggaran[] = [
  { id: "revenue", name: "Total Revenue", components: ["Pajak", "Ekspor", "Devisa Pariwisata"] },
  { id: "expenditure", name: "Total Expenditure", components: ["Perawatan Bangunan", "Gaji Polisi/Militer", "Subsidi Pangan"] },
  { id: "cash_balance", name: "Saldo Kas", components: ["Sisa dana untuk pembangunan"] }
];
