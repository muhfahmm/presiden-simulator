import { CountryData } from "../types";

export const KAPASITAS_LISTRIK_METADATA = {
  solar_plant: {
    no: 1,
    production: 20,
    unit: "MW",
    desc: "PLTS (Panel Surya)",
    maintenanceCost: 2,
    buildTime: 30
  },
  wind_plant: {
    no: 2,
    production: 10,
    unit: "MW",
    desc: "PLTB (Angin)",
    maintenanceCost: 3,
    buildTime: 45
  },
  hydro_plant: {
    no: 3,
    production: 100,
    unit: "MW",
    desc: "PLTA (Hidroelektrik)",
    maintenanceCost: 15,
    buildTime: 180
  },
  nuclear_plant: {
    no: 4,
    production: 1000,
    unit: "MW",
    desc: "PLTN (Fisi Nuklir)",
    maintenanceCost: 80,
    buildTime: 365
  },
  thermal_plant: {
    no: 5,
    production: 500,
    unit: "MW",
    desc: "PLT Thermal",
    maintenanceCost: 40,
    buildTime: 120
  },
  gas_plant: {
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

export function hitungTotalKapasitas(electricity: CountryData["sector_electricity"]) {
  return (
    (electricity.nuclear_plant ?? 0) * KAPASITAS_LISTRIK.nuclear_plant +
    (electricity.hydro_plant ?? 0) * KAPASITAS_LISTRIK.hydro_plant +
    (electricity.solar_plant ?? 0) * KAPASITAS_LISTRIK.solar_plant +
    (electricity.thermal_plant ?? 0) * KAPASITAS_LISTRIK.thermal_plant +
    (electricity.gas_plant ?? 0) * KAPASITAS_LISTRIK.gas_plant +
    (electricity.wind_plant ?? 0) * KAPASITAS_LISTRIK.wind_plant
  );
}

export function hitungOutputPLTN(electricity: CountryData["sector_electricity"]) {
  return (electricity.nuclear_plant ?? 0) * KAPASITAS_LISTRIK.nuclear_plant;
}
