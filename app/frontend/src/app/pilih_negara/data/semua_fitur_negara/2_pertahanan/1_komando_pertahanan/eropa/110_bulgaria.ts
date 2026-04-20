import { bulgaria_intelijen } from "../../2_intelijen/eropa/110_bulgaria";

export const bulgaria_strategis = {
    "waktu_respon": 35,
    "intelijen": 35,
    "status_nuklir": false,
    "intel_radar": bulgaria_intelijen,
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 33,
      "misi_sabotase": 10,
      "manajemen_wilayah": 8,
      "program_nuklir": 0 }
  } as const;
