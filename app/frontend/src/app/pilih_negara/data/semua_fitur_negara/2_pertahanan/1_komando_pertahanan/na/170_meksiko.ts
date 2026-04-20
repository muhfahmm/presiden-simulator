import { meksiko_intelijen } from "../../2_intelijen/na/170_meksiko";

export const meksiko_strategis = {
    "waktu_respon": 27,
    "intelijen": 21,
    "status_nuklir": true,
    "intel_radar": meksiko_intelijen,
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 34,
      "misi_sabotase": 8,
      "manajemen_wilayah": 12,
      "program_nuklir": 80 }
  } as const;
