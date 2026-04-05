import { rusia_intelijen } from "../../2_intelijen/eropa/140_rusia";

export const rusia_strategis = {
    "waktu_respon": 6,
    "intelijen": 15,
    "status_nuklir": true,
    "intel_radar": rusia_intelijen,
    "operasi_strategis": { "misi_serangan": 10,
      "misi_mata_mata": 36,
      "misi_sabotase": 7,
      "manajemen_wilayah": 37,
      "program_nuklir": 100 }
  } as const;
