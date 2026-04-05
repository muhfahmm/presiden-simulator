import { hungaria_intelijen } from "../../2_intelijen/eropa/116_hungaria";

export const hungaria_strategis = {
    "waktu_respon": 27,
    "intelijen": 20,
    "status_nuklir": true,
    "intel_radar": hungaria_intelijen,
    "operasi_strategis": { "misi_serangan": 27,
      "misi_mata_mata": 22,
      "misi_sabotase": 2,
      "manajemen_wilayah": 33,
      "program_nuklir": 80 }
  } as const;
