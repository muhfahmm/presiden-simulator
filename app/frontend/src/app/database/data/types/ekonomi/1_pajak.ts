export interface PajakData {
  ppn: { tarif: number; kepuasan: number; pendapatan: number };
  korporasi: { tarif: number; kepuasan: number; pendapatan: number };
  penghasilan: { tarif: number; kepuasan: number; pendapatan: number };
  bea_cukai: { tarif: number; kepuasan: number; pendapatan: number };
  lingkungan: { tarif: number; kepuasan: number; pendapatan: number };
  transit_sekutu: { tarif: number; kepuasan: number; pendapatan: number };
  transit_non_sekutu: { tarif: number; kepuasan: number; pendapatan: number };
  lainnya: { tarif: number; kepuasan: number; pendapatan: number };
}
