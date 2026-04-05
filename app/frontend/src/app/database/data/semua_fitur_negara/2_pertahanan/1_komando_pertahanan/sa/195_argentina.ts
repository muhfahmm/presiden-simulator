import { argentina_intelijen } from "../../2_intelijen/sa/195_argentina";

export const argentina_strategis = {
    "waktu_respon": 28,
    "intelijen": 35,
    "status_nuklir": true,
    "intel_radar": argentina_intelijen,
    "operasi_strategis": { "misi_serangan": 34,
      "misi_mata_mata": 20,
      "misi_sabotase": 40,
      "manajemen_wilayah": 27,
      "program_nuklir": 80 }
  } as const;
