import { energiProduksiRate } from "../../electricity";

export const mineralKritisRate = {
  coal_mine: {
    no: 1,
    production: 120,
    unit: "ton",
    desc: "Batubara",
    dataKey: "batu_bara",
    maintenanceCost: 10,
    buildTime: 20
  },
  aluminum_mine: {
    no: 2,
    production: 40,
    unit: "ton",
    desc: "Bauksit",
    dataKey: "aluminium",
    maintenanceCost: 10,
    buildTime: 25
  },
  iron_ore_mine: {
    no: 3,
    production: 210,
    unit: "ton",
    desc: "Biji Besi",
    dataKey: "bijih_besi",
    maintenanceCost: 10,
    buildTime: 20
  },
  gold_mine: {
    no: 4,
    production: 5,
    unit: "kg",
    desc: "Emas",
    dataKey: "emas",
    maintenanceCost: 10,
    buildTime: 30
  },
  salt_mine: {
    no: 5,
    production: 45,
    unit: "ton",
    desc: "Garam",
    dataKey: "garam",
    maintenanceCost: 10,
    buildTime: 15
  },
  gas_well: {
    no: 6,
    production: 150,
    unit: "mcf",
    desc: "Gas Alam",
    dataKey: "gas_alam",
    maintenanceCost: 10,
    buildTime: 35
  },
  lithium_mine: {
    no: 7,
    production: 25,
    unit: "ton",
    desc: "Lithium",
    dataKey: "litium",
    maintenanceCost: 10,
    buildTime: 35
  },
  oil_well: {
    no: 8,
    production: 85,
    unit: "barrel",
    desc: "Minyak Bumi",
    dataKey: "minyak_bumi",
    maintenanceCost: 10,
    buildTime: 40
  },
  nickel_mine: {
    no: 9,
    production: 35,
    unit: "ton",
    desc: "Nikel",
    dataKey: "nikel",
    maintenanceCost: 10,
    buildTime: 25
  },
  rare_earth_mine: {
    no: 10,
    production: 1,
    unit: "ton",
    desc: "Tanah Jarang",
    dataKey: "logam_tanah_jarang",
    maintenanceCost: 10,
    buildTime: 60
  },
  copper_mine: {
    no: 11,
    production: 28,
    unit: "ton",
    desc: "Tembaga",
    dataKey: "tembaga",
    maintenanceCost: 10,
    buildTime: 25
  },
  uranium_mine: {
    no: 12,
    production: 1,
    unit: "kg",
    desc: "Uranium",
    dataKey: "uranium",
    maintenanceCost: 10,
    buildTime: 45
  }
};
