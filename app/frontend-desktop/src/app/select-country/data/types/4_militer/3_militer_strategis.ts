export interface SektorMiliterStrategis {
  waktu_respon?: number;
  intelijen?: number;
  status_nuklir?: boolean;
  operasi_strategis?: {
    misi_serangan: number;
    misi_mata_mata: number;
    misi_sabotase: number;
    manajemen_wilayah: number;
    program_nuklir: number;
  };
  intel_radar?: {
    sistem_satelit: number;
    jaringan_radar: number;
    operasi_siber: number;
  };
}
