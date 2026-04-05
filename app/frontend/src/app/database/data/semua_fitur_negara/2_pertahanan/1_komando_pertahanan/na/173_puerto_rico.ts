import { puerto_rico_intelijen } from "../../2_intelijen/na/173_puerto_rico";

export const puerto_rico_strategis = {
    "waktu_respon": 28,
    "intelijen": 25,
    "status_nuklir": false,
    "intel_radar": puerto_rico_intelijen,
    "operasi_strategis": { "misi_serangan": 38,
      "misi_mata_mata": 37,
      "misi_sabotase": 37,
      "manajemen_wilayah": 30,
      "program_nuklir": 0 }
  } as const;
