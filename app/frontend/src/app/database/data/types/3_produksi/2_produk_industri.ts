import { produkIndustriRate as manufakturRate } from "@/app/database/data/harga_bangunan/1_produksi/3_harga_bangunan_manufaktur";
import { olahanPanganRate } from "@/app/database/data/harga_bangunan/1_produksi/7_harga_bangunan_olahan_pangan";
import { farmasiRate } from "@/app/database/data/harga_bangunan/1_produksi/8_harga_bangunan_farmasi";

export const produkIndustriRate = { ...manufakturRate, ...olahanPanganRate, ...farmasiRate };
