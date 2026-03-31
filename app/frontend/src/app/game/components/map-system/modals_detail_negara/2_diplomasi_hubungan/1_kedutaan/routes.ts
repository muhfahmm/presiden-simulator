/**
 * Routes untuk modul Kedutaan
 * Menghubungkan frontend ke API backend untuk kalkulasi harga pembangunan kedutaan
 */

export const KEDUTAAN_ROUTES = {
  /** POST - Menghitung biaya pembangunan kedutaan */
  GET_PRICE: '/api/game/diplomacy/kedutaan/price',

  /** POST - Menghancurkan kedutaan yang sudah dibangun */
  DESTROY: '/api/game/diplomacy/kedutaan/destroy',

  /** POST - Menghitung waktu pembangunan kedutaan */
  GET_TIME: '/api/game/diplomacy/kedutaan/time',
} as const;

/**
 * Request untuk waktu kedutaan
 */
export interface KedutaanTimeRequest {
  user_continent: string;
  target_continent: string;
}

/**
 * Response dari API waktu kedutaan (dalam Hari Game)
 */
export interface KedutaanTimeResponse {
  base_time: number;
  multiplier: number;
  final_time: number; // Dalam satuan Hari
  details: string;
}

/**
 * Payload untuk request harga kedutaan
 */
export interface KedutaanPriceRequest {
  user_ideology: string;
  target_ideology: string;
  user_religion: string;
  target_religion: string;
  user_continent: string;
  target_continent: string;
}

/**
 * Adjustment detail dari kalkulasi harga
 */
export interface PriceAdjustment {
  category: string;
  status: 'Sama' | 'Berbeda';
  change: string;
  detail: string;
}

/**
 * Response dari API harga kedutaan
 */
export interface KedutaanPriceResponse {
  base_price: number;
  adjustments: PriceAdjustment[];
  multiplier: number;
  final_price: number;
}
