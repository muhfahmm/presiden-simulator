import { palau_intelijen } from "../../2_intelijen/oceania/186_palau";

export const palau_strategis = {
    "waktu_respon": 14,
    "intelijen": 14,
    "status_nuklir": false,
    "intel_radar": palau_intelijen,
    "operasi_strategis": { "misi_serangan": 23,
      "misi_mata_mata": 4,
      "misi_sabotase": 1,
      "manajemen_wilayah": 1,
      "program_nuklir": 0 }
  } as const;
