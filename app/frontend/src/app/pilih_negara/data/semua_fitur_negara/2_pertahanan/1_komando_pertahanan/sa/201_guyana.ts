import { guyana_intelijen } from "../../2_intelijen/sa/201_guyana";

export const guyana_strategis = {
    "waktu_respon": 6,
    "intelijen": 14,
    "status_nuklir": false,
    "intel_radar": guyana_intelijen,
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 3,
      "misi_sabotase": 31,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  } as const;
