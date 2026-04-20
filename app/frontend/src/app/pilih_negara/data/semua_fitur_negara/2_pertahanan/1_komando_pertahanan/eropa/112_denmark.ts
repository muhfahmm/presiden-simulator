import { denmark_intelijen } from "../../2_intelijen/eropa/112_denmark";

export const denmark_strategis = {
    "waktu_respon": 22,
    "intelijen": 24,
    "status_nuklir": false,
    "intel_radar": denmark_intelijen,
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 11,
      "misi_sabotase": 38,
      "manajemen_wilayah": 31,
      "program_nuklir": 0 }
  } as const;
