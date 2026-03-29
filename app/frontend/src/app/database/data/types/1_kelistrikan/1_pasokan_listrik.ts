import { CountryData } from "../index";

import { KAPASITAS_LISTRIK_METADATA } from "@/app/database/data/harga_bangunan/1_produksi/1_harga_bangunan_listrik";
export { KAPASITAS_LISTRIK_METADATA };

export const KAPASITAS_LISTRIK = Object.fromEntries(
  Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, val]) => [key, val.production])
) as Record<keyof typeof KAPASITAS_LISTRIK_METADATA, number>;

export function hitungTotalKapasitas(electricity: CountryData["sektor_listrik"]) {
  return (
    (electricity.pembangkit_listrik_tenaga_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_nuklir +
    (electricity.pembangkit_listrik_tenaga_air ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_air +
    (electricity.pembangkit_listrik_tenaga_surya ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_surya +
    (electricity.pembangkit_listrik_tenaga_uap ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_uap +
    (electricity.pembangkit_listrik_tenaga_gas ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_gas +
    (electricity.pembangkit_listrik_tenaga_angin ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_angin
  );
}

export function hitungOutputPLTN(electricity: CountryData["sektor_listrik"]) {
  return (electricity.pembangkit_listrik_tenaga_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_nuklir;
}
