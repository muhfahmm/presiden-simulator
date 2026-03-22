import { CountryData } from "../../types";

export const KONSUMSI_PERTAHANAN = {
  prison: 2,             // MW per unit
  barracks: 5,           // MW per unit
  armory: 2,             // MW per unit
  tank_hangar: 5,        // MW per unit
  military_academy: 10   // MW per unit
};

export const KONSUMSI_FLEET = {
  darat: {
    main_battle_tank: 0.5,    // MW per unit
    apc: 0.2,                   // MW per unit
    artileri_berat: 0.3         // MW per unit
  },
  laut: {
    kapal_induk: 100,           // MW per unit
    kapal_destroyer: 30,         // MW per unit
    kapal_selam_nuklir: 80      // MW per unit
  },
  udara: {
    jet_tempur_stealth: 5,     // MW per unit
    helikopter_serang: 2,       // MW per unit
    pesawat_pengintai: 3        // MW per unit
  }
};

export const KONSUMSI_STRATEGIC = {
  command_center: 15,          // MW per unit
  military_air_base: 30,       // MW per unit
  military_naval_base: 35,     // MW per unit
  arms_factory: 40,            // MW per unit
  space_program: 80            // MW per unit
};

export function hitungKonsumsiPertahanan(defense: CountryData["sector_defense"]) {
  return (
    defense.prison * KONSUMSI_PERTAHANAN.prison +
    defense.barracks * KONSUMSI_PERTAHANAN.barracks +
    defense.armory * KONSUMSI_PERTAHANAN.armory +
    defense.tank_hangar * KONSUMSI_PERTAHANAN.tank_hangar +
    defense.military_academy * KONSUMSI_PERTAHANAN.military_academy
  );
}
