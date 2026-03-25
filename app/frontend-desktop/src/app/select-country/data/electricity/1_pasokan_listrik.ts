import { CountryData } from "../types";

export const KAPASITAS_LISTRIK_METADATA = {
  pembangkit_surya: {
    no: 1,
    production: 20,
    unit: "MW",
    desc: "PLTS (Panel Surya)",
    maintenanceCost: 2,
    buildTime: 30
  },
  pembangkit_angin: {
    no: 2,
    production: 10,
    unit: "MW",
    desc: "PLTB (Angin)",
    maintenanceCost: 3,
    buildTime: 45
  },
  pembangkit_air: {
    no: 3,
    production: 100,
    unit: "MW",
    desc: "PLTA (Hidroelektrik)",
    maintenanceCost: 15,
    buildTime: 180
  },
  pembangkit_nuklir: {
    no: 4,
    production: 1000,
    unit: "MW",
    desc: "PLTN (Fisi Nuklir)",
    maintenanceCost: 80,
    buildTime: 365
  },
  pembangkit_termal: {
    no: 5,
    production: 500,
    unit: "MW",
    desc: "PLT Thermal",
    maintenanceCost: 40,
    buildTime: 120
  },
  pembangkit_gas: {
    no: 6,
    production: 300,
    unit: "MW",
    desc: "PLTG (Gas Alam)",
    maintenanceCost: 25,
    buildTime: 90
  }
};

export const KAPASITAS_LISTRIK = Object.fromEntries(
  Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, val]) => [key, val.production])
) as Record<keyof typeof KAPASITAS_LISTRIK_METADATA, number>;

export function hitungTotalKapasitas(electricity: CountryData["sektor_listrik"]) {
  return (
    (electricity.pembangkit_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_nuklir +
    (electricity.pembangkit_air ?? 0) * KAPASITAS_LISTRIK.pembangkit_air +
    (electricity.pembangkit_surya ?? 0) * KAPASITAS_LISTRIK.pembangkit_surya +
    (electricity.pembangkit_termal ?? 0) * KAPASITAS_LISTRIK.pembangkit_termal +
    (electricity.pembangkit_gas ?? 0) * KAPASITAS_LISTRIK.pembangkit_gas +
    (electricity.pembangkit_angin ?? 0) * KAPASITAS_LISTRIK.pembangkit_angin
  );
}

export function hitungOutputPLTN(electricity: CountryData["sektor_listrik"]) {
  return (electricity.pembangkit_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_nuklir;
}
