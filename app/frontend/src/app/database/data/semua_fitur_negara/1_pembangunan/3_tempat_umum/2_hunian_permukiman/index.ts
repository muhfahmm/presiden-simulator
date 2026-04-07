export interface HunianData {
  rumah_subsidi?: number;
  apartemen?: number;
  mansion?: number;
}

export const hunianRate = {
  rumah_subsidi: {
    biaya_pembangunan: 35000000,
    waktu_pembangunan: 7,

    konsumsi_listrik: 45,
    kapasitas: 450,
    label: "Perumahan Subsidi Rakyat",
    deskripsi: "Hunian Terpadu Masyarakat Terjangkau"
  },
  apartemen: {
    biaya_pembangunan: 85000000,
    waktu_pembangunan: 14,

    konsumsi_listrik: 350,
    kapasitas: 5500,
    label: "Apartemen Modern & High-Rise",
    deskripsi: "Hunian Vertikal Kepadatan Tinggi"
  },
  mansion: {
    biaya_pembangunan: 125000000,
    waktu_pembangunan: 21,

    konsumsi_listrik: 400,
    kapasitas: 50,
    label: "Kompleks Mansion Mewah",
    deskripsi: "Hunian Eksklusif Kelas Atas"
  }
};

export * from "./afrika";
export * from "./asia";
export * from "./eropa";
export * from "./na";
export * from "./sa";
export * from "./oceania";
