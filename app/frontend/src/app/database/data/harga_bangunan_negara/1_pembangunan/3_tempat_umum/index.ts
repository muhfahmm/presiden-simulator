import { infrastrukturRate } from "./1_db_infrastruktur";
import { pendidikanRate } from "./2_db_pendidikan";
import { kesehatanRate } from "./3_db_kesehatan";
import { hukumRate } from "./4_db_hukum";
import { olahragaRate } from "./5_db_olahraga";
import { komersialRate } from "./6_db_komersial";
import { hiburanRate } from "./7_db_hiburan";

// Gabungkan semua rate sosial untuk kompatibilitas UI
export const sosialRate = {
  ...pendidikanRate,
  ...kesehatanRate,
  ...hukumRate,
  ...olahragaRate,
  ...komersialRate,
  ...hiburanRate,
};

// Export individual rates and the main infrastructure rate
export { infrastrukturRate };
export * from "./1_db_infrastruktur";
export * from "./2_db_pendidikan";
export * from "./3_db_kesehatan";
export * from "./4_db_hukum";
export * from "./5_db_olahraga";
export * from "./6_db_komersial";
export * from "./7_db_hiburan";
