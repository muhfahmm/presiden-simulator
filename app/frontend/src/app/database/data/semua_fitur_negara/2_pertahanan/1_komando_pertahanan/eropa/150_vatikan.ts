import { vatikan_intelijen } from "../../2_intelijen/eropa/150_vatikan";

export const vatikan_strategis = {
    "waktu_respon": 37,
    "intelijen": 39,
    "status_nuklir": false,
    "intel_radar": vatikan_intelijen,
    "operasi_strategis": { "misi_serangan": 39,
      "misi_mata_mata": 28,
      "misi_sabotase": 23,
      "manajemen_wilayah": 25,
      "program_nuklir": 0 }
  } as const;
