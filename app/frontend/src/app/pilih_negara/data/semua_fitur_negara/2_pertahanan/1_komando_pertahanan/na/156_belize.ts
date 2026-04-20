import { belize_intelijen } from "../../2_intelijen/na/156_belize";

export const belize_strategis = {
    "waktu_respon": 22,
    "intelijen": 14,
    "status_nuklir": false,
    "intel_radar": belize_intelijen,
    "operasi_strategis": { "misi_serangan": 8,
      "misi_mata_mata": 10,
      "misi_sabotase": 36,
      "manajemen_wilayah": 36,
      "program_nuklir": 0 }
  } as const;
