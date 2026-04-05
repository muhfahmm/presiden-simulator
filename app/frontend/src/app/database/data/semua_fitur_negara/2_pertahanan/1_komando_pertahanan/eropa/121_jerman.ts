import { jerman_intelijen } from "../../2_intelijen/eropa/121_jerman";

export const jerman_strategis = {
    "waktu_respon": 25,
    "intelijen": 10,
    "status_nuklir": false,
    "intel_radar": jerman_intelijen,
    "operasi_strategis": { "misi_serangan": 26,
      "misi_mata_mata": 1,
      "misi_sabotase": 6,
      "manajemen_wilayah": 33,
      "program_nuklir": 0 }
  } as const;
