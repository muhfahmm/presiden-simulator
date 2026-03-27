import { CountryData } from "../index";

export const KAPASITAS_LISTRIK_METADATA = {
  pembangkit_listrik_tenaga_nuklir: {
    no: 1,
    production: 1000,
    unit: "MW",
    desc: "PLTN (Fisi Nuklir)",
    maintenanceCost: 80,
    buildTime: 365,
    lowongan_kerja: 800
  },
  pembangkit_listrik_tenaga_air: {
    no: 2,
    production: 100,
    unit: "MW",
    desc: "PLTA (Hidroelektrik)",
    maintenanceCost: 15,
    buildTime: 180,
    lowongan_kerja: 150
  },
  pembangkit_listrik_tenaga_surya: {
    no: 3,
    production: 20,
    unit: "MW",
    desc: "PLTS (Panel Surya)",
    maintenanceCost: 2,
    buildTime: 30,
    lowongan_kerja: 40
  },
  pembangkit_listrik_tenaga_uap: {
    no: 4,
    production: 500,
    unit: "MW",
    desc: "PLTU (Tenaga Uap)",
    maintenanceCost: 40,
    buildTime: 120,
    lowongan_kerja: 450
  },
  pembangkit_listrik_tenaga_gas: {
    no: 5,
    production: 300,
    unit: "MW",
    desc: "PLTG (Gas Alam)",
    maintenanceCost: 25,
    buildTime: 90,
    lowongan_kerja: 250
  },
  pembangkit_listrik_tenaga_angin: {
    no: 6,
    production: 10,
    unit: "MW",
    desc: "PLTB (Angin)",
    maintenanceCost: 3,
    buildTime: 45,
    lowongan_kerja: 20
  }
};

export const KAPASITAS_LISTRIK = Object.fromEntries(
  Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, val]) => [key, val.production])
) as Record<keyof typeof KAPASITAS_LISTRIK_METADATA, number>;

export function hitungTotalKapasitas(electricity: CountryData["sektor_listrik"]) {
  return (
    (electricity.pembangkit_listrik_tenaga_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_nuklir +
    (electricity.pembangkit_listrik_tenaga_air ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_air +
    (electricity.pembangkit_listrik_tenaga_surya ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_surya +
    (electricity.pembangkit_listrik_tenaga_uap ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_uap +
    (electricity.pembangkit_listrik_tenaga_gas ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_gas +
    (electricity.pembangkit_listrik_tenaga_angin ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_angin
  );
}

export function hitungOutputPLTN(electricity: CountryData["sektor_listrik"]) {
  return (electricity.pembangkit_listrik_tenaga_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_nuklir;
}
