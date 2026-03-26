export interface ProduksiBarang {
  id: string;
  name: string;
  unit: string;
}

export const produksiBarang: ProduksiBarang[] = [
  { id: "stok_pangan", name: "Stok Nasional", unit: "Padi, Jagung, Daging (Ton)" },
  { id: "konsumsi", name: "Tingkat Konsumsi", unit: "Kebutuhan harian berdasarkan populasi" },
  { id: "swasembada", name: "Indeks Swasembada", unit: "Persentase produksi sendiri vs impor" }
];
