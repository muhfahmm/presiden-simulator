import { jepang_intelijen } from "../../2_intelijen/asia/71_jepang";

export const jepang_strategis = {
    "waktu_respon": 15,
    "intelijen": 3,
    "status_nuklir": true,
    "intel_radar": jepang_intelijen,
    "operasi_strategis": { "misi_serangan": 33,
      "misi_mata_mata": 19,
      "misi_sabotase": 17,
      "manajemen_wilayah": 40,
      "program_nuklir": 95 }
  } as const;
