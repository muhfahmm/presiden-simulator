import { peru_intelijen } from "../../2_intelijen/sa/204_peru";

export const peru_strategis = {
    "waktu_respon": 30,
    "intelijen": 17,
    "status_nuklir": false,
    "intel_radar": peru_intelijen,
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 32,
      "misi_sabotase": 14,
      "manajemen_wilayah": 28,
      "program_nuklir": 0 }
  } as const;
