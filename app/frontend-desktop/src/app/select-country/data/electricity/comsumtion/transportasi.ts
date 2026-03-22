import { CountryData } from "../../types";

export const KONSUMSI_TRANSPORTASI = {
  bicycle_path: 0,       // MW per unit
  subway: 20,            // MW per unit
  railway: 15,           // MW per unit
  highway: 3,            // MW per unit
  sea_port: 25,          // MW per unit
  airport: 30,           // MW per unit
  bus_terminal: 5,       // MW per unit
  helipad: 2             // MW per unit
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
