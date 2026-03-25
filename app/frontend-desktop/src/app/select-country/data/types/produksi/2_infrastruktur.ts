export interface SektorInfrastruktur {
  jalur_sepeda: number;
  kereta_bawah_tanah: number;
  jalur_kereta: number;
  jalan_tol: number;
  kualitas_jalan: number; // 0-100%
  pelabuhan_laut: number;
  bandara: number;
  terminal_bus?: number;
  helipad?: number;
  cakupan_internet: number; // 0-100%
  indeks_teknologi: number; // 0-100%
  akses_air: number; // 0-100%
}
