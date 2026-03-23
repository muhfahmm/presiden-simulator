import { energiProduksiRate } from "../../electricity";

export const mineralKritisRate = {
  gold_mine: {
    no: 1,
    production: 5,
    unit: "kg",
    desc: "Produksi Emas murni per hari",
    income: 500, // In Miliar
    dataKey: "gold",
    buildTime: 30
  },
  uranium_mine: {
    no: 2,
    production: 0.8,
    unit: "kg",
    desc: "Ekstraksi Uranium per hari",
    income: 750,
    dataKey: "uranium",
    buildTime: 45
  },
  coal_mine: {
    no: 3,
    production: 120,
    unit: "ton",
    desc: "Batu bara kualitas tinggi per hari",
    income: 120,
    dataKey: "coal",
    buildTime: 20
  },
  oil_well: {
    no: 4,
    production: 85,
    unit: "barrel",
    desc: "Minyak mentah per hari",
    income: 350,
    dataKey: "oil",
    buildTime: 40
  },
  gas_well: {
    no: 5,
    production: 150,
    unit: "mcf",
    desc: "Gas alam per hari",
    income: 280,
    dataKey: "gas",
    buildTime: 35
  },
  salt_mine: {
    no: 6,
    production: 45,
    unit: "ton",
    desc: "Garam industri per hari",
    income: 50,
    dataKey: "salt",
    buildTime: 15
  },
  nickel_mine: {
    no: 7,
    production: 35,
    unit: "ton",
    desc: "Biji Nikel per hari",
    income: 200,
    dataKey: "nickel",
    buildTime: 25
  },
  lithium_mine: {
    no: 8,
    production: 25,
    unit: "ton",
    desc: "Biji Lithium (Baterai) per hari",
    income: 600,
    dataKey: "lithium",
    buildTime: 35
  },
  copper_mine: {
    no: 9,
    production: 28,
    unit: "ton",
    desc: "Biji Tembaga per hari",
    income: 180,
    dataKey: "copper",
    buildTime: 25
  },
  aluminum_mine: {
    no: 10,
    production: 40,
    unit: "ton",
    desc: "Bijih Aluminium (Bauksit) per hari",
    income: 140,
    dataKey: "aluminum",
    buildTime: 25
  },
  rare_earth_mine: {
    no: 11,
    production: 1.5,
    unit: "ton",
    desc: "Logam tanah jarang per hari",
    income: 900,
    dataKey: "rare_earth",
    buildTime: 60
  },
  iron_ore_mine: {
    no: 12,
    production: 210,
    unit: "ton",
    desc: "Biji Besi per hari",
    income: 150,
    dataKey: "iron_ore",
    buildTime: 20
  },
  ...energiProduksiRate
};
