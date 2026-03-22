import { CountryData } from "../../types";

export const KONSUMSI_EKSTRAKSI = {
  aluminum: 30,          // MW per unit
  coal: 15,              // MW per unit
  iron_ore: 15,          // MW per unit
  gold: 10,              // MW per unit
  salt: 5,               // MW per unit
  gas: 20,               // MW per unit
  lithium: 25,           // MW per unit
  oil: 25,               // MW per unit
  nickel: 20,            // MW per unit
  rare_earth: 35,        // MW per unit
  copper: 15,            // MW per unit
  uranium: 40            // MW per unit
};

export function hitungKonsumsiEkstraksi(extraction: CountryData["sector_extraction"]) {
  return (
    (extraction.aluminum ?? 0) * KONSUMSI_EKSTRAKSI.aluminum +
    (extraction.coal ?? 0) * KONSUMSI_EKSTRAKSI.coal +
    (extraction.iron_ore ?? 0) * KONSUMSI_EKSTRAKSI.iron_ore +
    (extraction.gold ?? 0) * KONSUMSI_EKSTRAKSI.gold +
    (extraction.salt ?? 0) * KONSUMSI_EKSTRAKSI.salt +
    (extraction.gas ?? 0) * KONSUMSI_EKSTRAKSI.gas +
    (extraction.lithium ?? 0) * KONSUMSI_EKSTRAKSI.lithium +
    (extraction.oil ?? 0) * KONSUMSI_EKSTRAKSI.oil +
    (extraction.nickel ?? 0) * KONSUMSI_EKSTRAKSI.nickel +
    (extraction.rare_earth ?? 0) * KONSUMSI_EKSTRAKSI.rare_earth +
    (extraction.copper ?? 0) * KONSUMSI_EKSTRAKSI.copper +
    (extraction.uranium ?? 0) * KONSUMSI_EKSTRAKSI.uranium
  );
}
