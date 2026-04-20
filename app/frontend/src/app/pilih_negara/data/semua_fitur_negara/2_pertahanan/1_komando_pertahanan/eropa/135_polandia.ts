import { polandia_intelijen } from "../../2_intelijen/eropa/135_polandia";

export const polandia_strategis = {
    "waktu_respon": 3,
    "intelijen": 15,
    "status_nuklir": false,
    "intel_radar": polandia_intelijen,
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 24,
      "misi_sabotase": 36,
      "manajemen_wilayah": 13,
      "program_nuklir": 0 }
  } as const;
