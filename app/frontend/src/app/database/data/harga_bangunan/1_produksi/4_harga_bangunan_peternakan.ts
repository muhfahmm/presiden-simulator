import { SektorPeternakan } from "@/app/database/data/types/3_produksi/types";

export const peternakanRate = {
  poultry_farm: {
    key: "poultry_farm",
    dataKey: "ayam_unggas",
    desc: "Peternakan Unggas",
    production: 1000,
    unit: "EKOR",
    maintenanceCost: 20,
    buildTime: 30,
    buildCost: 15,
    lowongan_kerja: 100
  },
  dairy_farm: {
    key: "dairy_farm",
    dataKey: "sapi_perah",
    desc: "Peternakan Sapi Perah",
    production: 500,
    unit: "LITER",
    maintenanceCost: 40,
    buildTime: 60,
    buildCost: 15,
    lowongan_kerja: 150
  },
  cattle_farm: {
    key: "cattle_farm",
    dataKey: "sapi_potong",
    desc: "Peternakan Sapi Potong",
    production: 100,
    unit: "EKOR",
    maintenanceCost: 60,
    buildTime: 90,
    buildCost: 15,
    lowongan_kerja: 120
  },
  sheep_farm: {
    key: "sheep_farm",
    dataKey: "domba_kambing",
    desc: "Peternakan Domba & Kambing",
    production: 200,
    unit: "EKOR",
    maintenanceCost: 30,
    buildTime: 60,
    buildCost: 15,
    lowongan_kerja: 80
  }
};
