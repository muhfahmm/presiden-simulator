import { suriname_intelijen } from "../../2_intelijen/sa/205_suriname";

export const suriname_strategis = {
    "waktu_respon": 7,
    "intelijen": 16,
    "status_nuklir": false,
    "intel_radar": suriname_intelijen,
    "operasi_strategis": { "misi_serangan": 24,
      "misi_mata_mata": 18,
      "misi_sabotase": 7,
      "manajemen_wilayah": 17,
      "program_nuklir": 0 }
  } as const;
