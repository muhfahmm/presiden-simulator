import { korea_selatan_intelijen } from "../../2_intelijen/asia/75_korea_selatan";

export const korea_selatan_strategis = {
    "waktu_respon": 6,
    "intelijen": 35,
    "status_nuklir": true,
    "intel_radar": korea_selatan_intelijen,
    "operasi_strategis": { "misi_serangan": 10,
      "misi_mata_mata": 29,
      "misi_sabotase": 37,
      "manajemen_wilayah": 35,
      "program_nuklir": 100 }
  } as const;
