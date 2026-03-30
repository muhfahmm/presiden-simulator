export interface SektorArmadaMiliter {
  barak: number;
  darat: {
    tank_tempur_utama: number;
    apc_ifv: number;
    artileri_berat: number;
    sistem_peluncur_roket: number;
    pertahanan_udara_mobile: number;
    kendaraan_taktis: number;
  };
  laut: {
    kapal_induk: number;
    kapal_destroyer: number;
    kapal_korvet: number;
    kapal_selam_nuklir: number;
    kapal_selam_regular: number;
    kapal_ranjau: number;
    kapal_logistik: number;
  };
  udara: {
    jet_tempur_siluman: number;
    jet_tempur_interceptor: number;
    pesawat_pengebom: number;
    helikopter_serang: number;
    pesawat_pengintai: number;
    drone_intai_uav: number;
    drone_kamikaze: number;
    pesawat_angkut: number;
  };

}
