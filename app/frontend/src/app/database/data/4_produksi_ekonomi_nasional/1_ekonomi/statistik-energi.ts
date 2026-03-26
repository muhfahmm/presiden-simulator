export interface Energi {
  id: string;
  name: string;
  description: string;
}

export const statistikEnergi: Energi[] = [
  { id: "kapasitas", name: "Total Kapasitas", description: "Jumlah MW dari seluruh pembangkit" },
  { id: "beban", name: "Beban Nasional", description: "Kebutuhan listrik dari Pabrik, Mall, dan Apartemen" },
  { id: "status", name: "Status Energi", description: "Keseimbangan Produksi vs Konsumsi" }
];
