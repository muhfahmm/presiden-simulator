import { kuba_intelijen } from "../../2_intelijen/na/169_kuba";

export const kuba_strategis = {
    "waktu_respon": 34,
    "intelijen": 30,
    "status_nuklir": false,
    "intel_radar": kuba_intelijen,
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 6,
      "misi_sabotase": 20,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  } as const;
