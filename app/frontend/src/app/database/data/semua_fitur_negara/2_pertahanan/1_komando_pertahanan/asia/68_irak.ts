import { irak_intelijen } from "../../2_intelijen/asia/68_irak";

export const irak_strategis = {
    "waktu_respon": 12,
    "intelijen": 23,
    "status_nuklir": false,
    "intel_radar": irak_intelijen,
    "operasi_strategis": { "misi_serangan": 26,
      "misi_mata_mata": 33,
      "misi_sabotase": 16,
      "manajemen_wilayah": 13,
      "program_nuklir": 0 }
  } as const;
