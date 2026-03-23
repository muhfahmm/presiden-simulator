import { CountryData } from "../types";

// 1. Konsumsi Ekstraksi (Mining)
export const KONSUMSI_EKSTRAKSI = {
  aluminum: 30, gold: 10, iron_ore: 15, coal: 15, gas: 20, salt: 5,
  lithium: 25, oil: 25, nickel: 20, rare_earth: 35, copper: 15, uranium: 40
};

export function hitungKonsumsiEkstraksi(extraction: CountryData["sector_extraction"]) {
  return (
    (extraction.aluminum ?? 0) * KONSUMSI_EKSTRAKSI.aluminum +
    (extraction.gold ?? 0) * KONSUMSI_EKSTRAKSI.gold +
    (extraction.iron_ore ?? 0) * KONSUMSI_EKSTRAKSI.iron_ore +
    (extraction.coal ?? 0) * KONSUMSI_EKSTRAKSI.coal +
    (extraction.gas ?? 0) * KONSUMSI_EKSTRAKSI.gas +
    (extraction.salt ?? 0) * KONSUMSI_EKSTRAKSI.salt +
    (extraction.lithium ?? 0) * KONSUMSI_EKSTRAKSI.lithium +
    (extraction.oil ?? 0) * KONSUMSI_EKSTRAKSI.oil +
    (extraction.nickel ?? 0) * KONSUMSI_EKSTRAKSI.nickel +
    (extraction.rare_earth ?? 0) * KONSUMSI_EKSTRAKSI.rare_earth +
    (extraction.copper ?? 0) * KONSUMSI_EKSTRAKSI.copper +
    (extraction.uranium ?? 0) * KONSUMSI_EKSTRAKSI.uranium
  );
}

// 2. Konsumsi Produksi & Manufaktur
export const KONSUMSI_PRODUKSI = {
  semiconductor: 50, car: 20, motorcycle: 15, smelter: 100, concrete_cement: 30,
  wood: 5, mineral_water: 2, sugar: 10, bread: 2, pharmacy: 10,
  fertilizer: 20, meat_processing: 5, instant_noodle: 10
};

export function hitungKonsumsiProduksi(manufacturing: CountryData["sector_manufacturing"]) {
  return (
    (manufacturing.semiconductor ?? 0) * KONSUMSI_PRODUKSI.semiconductor +
    (manufacturing.car ?? 0) * KONSUMSI_PRODUKSI.car +
    (manufacturing.motorcycle ?? 0) * KONSUMSI_PRODUKSI.motorcycle +
    (manufacturing.smelter ?? 0) * KONSUMSI_PRODUKSI.smelter +
    (manufacturing.concrete_cement ?? 0) * KONSUMSI_PRODUKSI.concrete_cement +
    (manufacturing.wood ?? 0) * KONSUMSI_PRODUKSI.wood +
    (manufacturing.mineral_water ?? 0) * KONSUMSI_PRODUKSI.mineral_water +
    (manufacturing.sugar ?? 0) * KONSUMSI_PRODUKSI.sugar +
    (manufacturing.bread ?? 0) * KONSUMSI_PRODUKSI.bread +
    (manufacturing.pharmacy ?? 0) * KONSUMSI_PRODUKSI.pharmacy +
    (manufacturing.fertilizer ?? 0) * KONSUMSI_PRODUKSI.fertilizer +
    (manufacturing.meat_processing ?? 0) * KONSUMSI_PRODUKSI.meat_processing +
    (manufacturing.instant_noodle ?? 0) * KONSUMSI_PRODUKSI.instant_noodle
  );
}

// 3. Konsumsi Pertanian & Peternakan
export const KONSUMSI_AGRI = {
  rice: 0.2, wheat: 0.1, corn: 0.1, tubers: 0.1, soy: 0.1, palm_oil: 1,
  tea: 0.1, coffee: 0.3, cocoa: 0.2, sugarcane: 1, vegetables: 0.2
};

export const KONSUMSI_PETERNAKAN = {
  chicken: 0.05, poultry: 0.05, dairy_cow: 0.5, beef_cow: 0.2,
  sheep_goat: 0.1, shrimp: 1, fish: 0.5, shellfish: 0.3
};

export function hitungKonsumsiPangan(agriculture: CountryData["sector_agriculture"], livestock: CountryData["sector_livestock"]) {
  const totalAgri = Object.keys(KONSUMSI_AGRI).reduce((total, key) => {
    return total + ((agriculture as any)[key] ?? 0) * (KONSUMSI_AGRI as any)[key];
  }, 0);
  
  const totalLivestock = Object.keys(KONSUMSI_PETERNAKAN).reduce((total, key) => {
    return total + ((livestock as any)[key] ?? 0) * (KONSUMSI_PETERNAKAN as any)[key];
  }, 0);

  return totalAgri + totalLivestock;
}

// 4. Konsumsi Pertahanan (Defense)
export const KONSUMSI_PERTAHANAN = {
  prison: 2, barracks: 5, armory: 2, tank_hangar: 5, military_academy: 10
};

export const KONSUMSI_STRATEGIC = {
  command_center: 15, military_air_base: 30, military_naval_base: 35,
  arms_factory: 40, space_program: 80
};

export const KONSUMSI_FLEET = {
  darat: { main_battle_tank: 0.5, apc: 0.2, artileri_berat: 0.3 },
  laut: { kapal_induk: 100, kapal_destroyer: 30, kapal_selam_nuklir: 80 },
  udara: { jet_tempur_stealth: 5, helikopter_serang: 2, pesawat_pengintai: 3 }
};

export function hitungKonsumsiPertahanan(defense: CountryData["sector_defense"]) {
  return (
    (defense.prison ?? 0) * KONSUMSI_PERTAHANAN.prison +
    (defense.barracks ?? 0) * KONSUMSI_PERTAHANAN.barracks +
    (defense.armory ?? 0) * KONSUMSI_PERTAHANAN.armory +
    (defense.tank_hangar ?? 0) * KONSUMSI_PERTAHANAN.tank_hangar +
    (defense.military_academy ?? 0) * KONSUMSI_PERTAHANAN.military_academy
  );
}

// 5. Konsumsi Sosial
export const KONSUMSI_SOSIAL = {
  education: {
    kindergarten: 0.5, elementary_school: 1, middle_school: 2, high_school: 3,
    university: 10, education_institute: 5, laboratory: 15, observatory: 8,
    research_center: 20, development_center: 15
  },
  health: { large_hospital: 20, small_hospital: 5, diagnostic_center: 10 },
  sports: { swimming_pool: 5, racing_circuit: 15, stadium: 10, international_stadium: 20 },
  law: { police_academy: 10, police_station: 3, police_car_fleet: 0.1, prosecution_office: 5, court: 10, legal_aid_center: 3 }
};

export function hitungKonsumsiSosial(social: CountryData["sector_social"]) {
  const edu = social.education || {};
  const health = social.health || {};
  const sports = social.sports || {};
  const law = social.law || {};

  const totalEdu = Object.keys(KONSUMSI_SOSIAL.education).reduce((total, key) => 
    total + ((edu as any)[key] ?? 0) * (KONSUMSI_SOSIAL.education as any)[key], 0);
  
  const totalHealth = Object.keys(KONSUMSI_SOSIAL.health).reduce((total, key) => 
    total + ((health as any)[key] ?? 0) * (KONSUMSI_SOSIAL.health as any)[key], 0);
  
  const totalSports = Object.keys(KONSUMSI_SOSIAL.sports).reduce((total, key) => 
    total + ((sports as any)[key] ?? 0) * (KONSUMSI_SOSIAL.sports as any)[key], 0);
  
  const totalLaw = Object.keys(KONSUMSI_SOSIAL.law).reduce((total, key) => 
    total + ((law as any)[key] ?? 0) * (KONSUMSI_SOSIAL.law as any)[key], 0);

  return totalEdu + totalHealth + totalSports + totalLaw;
}

// 6. Konsumsi Transportasi
export const KONSUMSI_TRANSPORTASI = {
  bicycle_path: 0, subway: 20, railway: 15, highway: 3, sea_port: 25, airport: 30, bus_terminal: 5, helipad: 2
};

export function hitungKonsumsiTransportasi(infra: CountryData["infrastructure"]) {
  return (
    (infra.bicycle_path ?? 0) * KONSUMSI_TRANSPORTASI.bicycle_path +
    (infra.subway ?? 0) * KONSUMSI_TRANSPORTASI.subway +
    (infra.railway ?? 0) * KONSUMSI_TRANSPORTASI.railway +
    (infra.highway ?? 0) * KONSUMSI_TRANSPORTASI.highway +
    (infra.sea_port ?? 0) * KONSUMSI_TRANSPORTASI.sea_port +
    (infra.airport ?? 0) * KONSUMSI_TRANSPORTASI.airport +
    (infra.bus_terminal ?? 0) * KONSUMSI_TRANSPORTASI.bus_terminal +
    (infra.helipad ?? 0) * KONSUMSI_TRANSPORTASI.helipad
  );
}

export function hitungTotalKonsumsiNasional(data: CountryData) {
  return (
    hitungKonsumsiEkstraksi(data.sector_extraction) +
    hitungKonsumsiProduksi(data.sector_manufacturing) +
    hitungKonsumsiPangan(data.sector_agriculture, data.sector_livestock) +
    hitungKonsumsiPertahanan(data.sector_defense) +
    hitungKonsumsiSosial(data.sector_social) +
    hitungKonsumsiTransportasi(data.infrastructure)
  );
}
