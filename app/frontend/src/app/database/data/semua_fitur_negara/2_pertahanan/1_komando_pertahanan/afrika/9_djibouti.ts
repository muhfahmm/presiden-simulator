import { djibouti_intelijen } from "../../2_intelijen/afrika/9_djibouti";

export const djibouti_strategis = {
    "waktu_respon": 14,
    "intelijen": 5,
    "status_nuklir": false,
    "intel_radar": djibouti_intelijen,
    "operasi_strategis": { "misi_serangan": 7,
      "misi_mata_mata": 1,
      "misi_sabotase": 4,
      "manajemen_wilayah": 2,
      "program_nuklir": 0
  }
  } as const;
