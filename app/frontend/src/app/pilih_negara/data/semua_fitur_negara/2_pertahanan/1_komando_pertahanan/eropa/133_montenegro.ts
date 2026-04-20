import { montenegro_intelijen } from "../../2_intelijen/eropa/133_montenegro";

export const montenegro_strategis = {
    "waktu_respon": 20,
    "intelijen": 13,
    "status_nuklir": false,
    "intel_radar": montenegro_intelijen,
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 1,
      "misi_sabotase": 7,
      "manajemen_wilayah": 15,
      "program_nuklir": 0 }
  } as const;
