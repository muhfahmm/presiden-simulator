import { malaysia_intelijen } from "../../2_intelijen/asia/81_malaysia";

export const malaysia_strategis = {
    "waktu_respon": 16,
    "intelijen": 1,
    "status_nuklir": false,
    "intel_radar": malaysia_intelijen,
    "operasi_strategis": { "misi_serangan": 3,
      "misi_mata_mata": 34,
      "misi_sabotase": 36,
      "manajemen_wilayah": 21,
      "program_nuklir": 0 }
  } as const;
