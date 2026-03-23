import { energiProduksiRate } from "../../electricity";

export const mineralKritisRate = {
  gold_mine: {
    no: 1,
    production: 5,
    unit: "kg",
    desc: "Tambang Emas",
    income: 500, // In Miliar
    dataKey: "gold",
    buildTime: 30
  },
  uranium_mine: {
    no: 2,
    production: 0.8,
    unit: "kg",
    desc: "Tambang Uranium",
    income: 750,
    dataKey: "uranium",
    buildTime: 45
  },
  coal_mine: {
    no: 3,
    production: 120,
    unit: "ton",
    desc: "Tambang Batubara",
    income: 120,
    dataKey: "coal",
    buildTime: 20
  },
  oil_well: {
    no: 4,
    production: 85,
    unit: "barrel",
    desc: "Sumur Minyak Bumi",
    income: 350,
    dataKey: "oil",
    buildTime: 40
  },
  gas_well: {
    no: 5,
    production: 150,
    unit: "mcf",
    desc: "Sumur Gas Alam",
    income: 280,
    dataKey: "gas",
    buildTime: 35
  },
  salt_mine: {
    no: 6,
    production: 45,
    unit: "ton",
    desc: "Tambang Garam",
    income: 50,
    dataKey: "salt",
    buildTime: 15
  },
  nickel_mine: {
    no: 7,
    production: 35,
    unit: "ton",
    desc: "Tambang Nikel",
    income: 200,
    dataKey: "nickel",
    buildTime: 25
  },
  lithium_mine: {
    no: 8,
    production: 25,
    unit: "ton",
    desc: "Tambang Lithium",
    income: 600,
    dataKey: "lithium",
    buildTime: 35
  },
  copper_mine: {
    no: 9,
    production: 28,
    unit: "ton",
    desc: "Tambang Tembaga",
    income: 180,
    dataKey: "copper",
    buildTime: 25
  },
  aluminum_mine: {
    no: 10,
    production: 40,
    unit: "ton",
    desc: "Tambang Bauksit",
    income: 140,
    dataKey: "aluminum",
    buildTime: 25
  },
  rare_earth_mine: {
    no: 11,
    production: 1.5,
    unit: "ton",
    desc: "Tambang Logam Tanah Jarang",
    income: 900,
    dataKey: "rare_earth",
    buildTime: 60
  },
  iron_ore_mine: {
    no: 12,
    production: 210,
    unit: "ton",
    desc: "Tambang Biji Besi",
    income: 150,
    dataKey: "iron_ore",
    buildTime: 20
  },
  ...energiProduksiRate
};
