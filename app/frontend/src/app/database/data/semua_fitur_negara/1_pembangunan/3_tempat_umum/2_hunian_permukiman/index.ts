export interface HunianData {
  rumah_subsidi?: number;
  apartemen?: number;
  mansion?: number;
}

export const hunianRate = {
  rumah_subsidi: {
    biaya_pembangunan: 4000,
    waktu_pembangunan: 7,
    biaya_pemeliharaan: 5,
    konsumsi_listrik: 1,
    kapasitas: 4,
    label: "Rumah Subsidi",
    desc: "Hunian Rakyat"
  },
  apartemen: {
    biaya_pembangunan: 12000,
    waktu_pembangunan: 15,
    biaya_pemeliharaan: 25,
    konsumsi_listrik: 10,
    kapasitas: 50,
    label: "Apartemen Modern",
    desc: "Hunian Vertikal"
  },
  mansion: {
    biaya_pembangunan: 50000,
    waktu_pembangunan: 30,
    biaya_pemeliharaan: 100,
    konsumsi_listrik: 50,
    kapasitas: 10,
    label: "Mansion Mewah",
    desc: "Hunian Eksklusif"
  }
};

export * from "./afrika";
export * from "./asia";
export * from "./eropa";
export * from "./na";
export * from "./sa";
export * from "./oceania";
