export interface Pajak {
  id: string;
  name: string;
  source: string;
}

export const manajemenPajak: Pajak[] = [
  { id: "pph", name: "Pajak Penghasilan (PPh)", source: "Residensial" },
  { id: "korporasi", name: "Pajak Korporasi", source: "Komersial & Pabrik" },
  { id: "barang_mewah", name: "Pajak Barang Mewah", source: "Hotel Bintang 5 & Mobil Mewah" },
  { id: "cukai", name: "Cukai", source: "Tembakau & Alkohol" }
];
