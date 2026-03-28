import { produkIndustriRate as manufakturRate } from "@/app/game/components/harga_bangunan/3_harga_bangunan_manufaktur";
import { farmasiRate } from "@/app/game/components/harga_bangunan/5_harga_bangunan_farmasi";

export const produkIndustriRate = { ...manufakturRate, ...farmasiRate };
