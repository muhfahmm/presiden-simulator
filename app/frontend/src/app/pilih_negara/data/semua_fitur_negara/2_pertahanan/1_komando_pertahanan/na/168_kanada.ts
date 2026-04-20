import { kanada_intelijen } from "../../2_intelijen/na/168_kanada";

export const kanada_strategis = {
    "waktu_respon": 18,
    "intelijen": 30,
    "status_nuklir": true,
    "intel_radar": kanada_intelijen,
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 23,
      "misi_sabotase": 37,
      "manajemen_wilayah": 2,
      "program_nuklir": 95 }
  } as const;
