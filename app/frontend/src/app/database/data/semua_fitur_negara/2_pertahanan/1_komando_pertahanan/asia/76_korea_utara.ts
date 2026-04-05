import { korea_utara_intelijen } from "../../2_intelijen/asia/76_korea_utara";

export const korea_utara_strategis = {
    "waktu_respon": 21,
    "intelijen": 19,
    "status_nuklir": true,
    "intel_radar": korea_utara_intelijen,
    "operasi_strategis": { "misi_serangan": 40,
      "misi_mata_mata": 4,
      "misi_sabotase": 9,
      "manajemen_wilayah": 10,
      "program_nuklir": 100 }
  } as const;
