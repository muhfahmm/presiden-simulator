import { ukraina_intelijen } from "../../2_intelijen/eropa/149_ukraina";

export const ukraina_strategis = {
    "waktu_respon": 33,
    "intelijen": 37,
    "status_nuklir": true,
    "intel_radar": ukraina_intelijen,
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 35,
      "misi_sabotase": 30,
      "manajemen_wilayah": 29,
      "program_nuklir": 95 }
  } as const;
