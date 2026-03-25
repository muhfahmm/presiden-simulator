export interface SektorInfrastruktur {
  kualitas_jalan: number; // 0-100%
  cakupan_internet: number; // 0-100%
  jalur_sepeda: number;
  kereta_bawah_tanah: number;
  jalur_kereta: number;
  jalan_tol: number;
  pelabuhan_laut: number;
  bandara: number;
  terminal_bus?: number;
  helipad?: number;
}
