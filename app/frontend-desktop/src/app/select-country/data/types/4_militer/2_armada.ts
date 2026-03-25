export interface SektorArmada {
  barak: number;
  infanteri: number;
  penerjun_payung: number;
  pasukan_khusus: number;
  darat: {
    tank_tempur_utama: number;
    apc: number;
    artileri_berat: number;
  };
  laut: {
    kapal_induk: number;
    kapal_destroyer: number;
    kapal_selam_nuklir: number;
  };
  udara: {
    jet_tempur_siluman: number;
    helikopter_serang: number;
    pesawat_pengintai: number;
  };
  total_unit: number;
  kesiapan: number; // 0-100%
}
