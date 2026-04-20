import { luksemburg_intelijen } from "../../2_intelijen/eropa/128_luksemburg";

export const luksemburg_strategis = {
    "waktu_respon": 17,
    "intelijen": 20,
    "status_nuklir": false,
    "intel_radar": luksemburg_intelijen,
    "operasi_strategis": { "misi_serangan": 11,
      "misi_mata_mata": 30,
      "misi_sabotase": 5,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  } as const;
