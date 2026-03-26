export interface SektorArmadaKepolisian {
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
}
