import { malta_intelijen } from "../../2_intelijen/eropa/130_malta";

export const malta_strategis = {
    "waktu_respon": 3,
    "intelijen": 36,
    "status_nuklir": false,
    "intel_radar": malta_intelijen,
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 35,
      "misi_sabotase": 13,
      "manajemen_wilayah": 14,
      "program_nuklir": 0 }
  } as const;
