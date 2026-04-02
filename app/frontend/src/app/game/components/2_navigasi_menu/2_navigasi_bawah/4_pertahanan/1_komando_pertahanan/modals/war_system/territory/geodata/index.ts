import { AFRIKA_METADATA } from "./afrika";
import { ASIA_METADATA } from "./asia";
import { EROPA_METADATA } from "./eropa";
import { AMERIKA_UTARA_METADATA } from "./amerika_utara";
import { AMERIKA_SELATAN_METADATA } from "./amerika_selatan";
import { OSEANIA_METADATA } from "./oseania";

/**
 * Consolidated Tactical Bounding Box Metadata for 207 Countries.
 * Used by territoryGrid.ts to generate high-fidelity tactical battlefields.
 */
export const TERRITORY_METADATA: Record<string, { minLon: number; maxLon: number; minLat: number; maxLat: number }> = {
  ...AFRIKA_METADATA,
  ...ASIA_METADATA,
  ...EROPA_METADATA,
  ...AMERIKA_UTARA_METADATA,
  ...AMERIKA_SELATAN_METADATA,
  ...OSEANIA_METADATA,
};
