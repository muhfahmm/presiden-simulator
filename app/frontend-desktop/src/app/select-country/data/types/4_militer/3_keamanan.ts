export interface SektorKeamanan {
  armada_polisi: {
    patroli_lantas: {
      mobil_patroli: number;
      sepeda_motor: number;
      unit_k9: number;
    };
    taktis_khusus: {
      swat: number;
      helikopter_polisi: number;
      anti_huru_hara: number;
    };
    pusat_komando: {
      kantor_polisi: number;
      kamera_pengawas: number;
      pusat_forensik: number;
    };
    kepercayaan_publik: number; // 0-100%
  };
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
