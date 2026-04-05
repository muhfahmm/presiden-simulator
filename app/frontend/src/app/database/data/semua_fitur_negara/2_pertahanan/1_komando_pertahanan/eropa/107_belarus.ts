import { belarus_intelijen } from "../../2_intelijen/eropa/107_belarus";

export const belarus_strategis = {
    "waktu_respon": 1,
    "intelijen": 24,
    "status_nuklir": false,
    "intel_radar": belarus_intelijen,
    "operasi_strategis": { "misi_serangan": 30,
      "misi_mata_mata": 31,
      "misi_sabotase": 15,
      "manajemen_wilayah": 26,
      "program_nuklir": 0 }
  } as const;
