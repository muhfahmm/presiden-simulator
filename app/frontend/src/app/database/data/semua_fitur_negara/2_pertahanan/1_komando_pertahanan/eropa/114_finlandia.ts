import { finlandia_intelijen } from "../../2_intelijen/eropa/114_finlandia";

export const finlandia_strategis = {
    "waktu_respon": 40,
    "intelijen": 4,
    "status_nuklir": true,
    "intel_radar": finlandia_intelijen,
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 17,
      "misi_sabotase": 12,
      "manajemen_wilayah": 2,
      "program_nuklir": 80 }
  } as const;
