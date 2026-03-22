import { KAPASITAS_LISTRIK } from "./kapasitas";
import { CountryData } from "../../../types";

export function hitungTotalKapasitas(infra: CountryData["infrastructure"]) {
  return (
    infra.nuclear_plant * KAPASITAS_LISTRIK.nuclear_plant +
    infra.hydro_plant * KAPASITAS_LISTRIK.hydro_plant +
    infra.solar_plant * KAPASITAS_LISTRIK.solar_plant +
    infra.thermal_plant * KAPASITAS_LISTRIK.thermal_plant +
    infra.gas_plant * KAPASITAS_LISTRIK.gas_plant +
    infra.wind_plant * KAPASITAS_LISTRIK.wind_plant
  );
}

export function hitungOutputPLTN(infra: CountryData["infrastructure"]) {
  return infra.nuclear_plant * KAPASITAS_LISTRIK.nuclear_plant;
}
