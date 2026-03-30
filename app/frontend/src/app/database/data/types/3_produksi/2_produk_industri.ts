import { produkIndustriRate as manufakturRate, olahanPanganRate, farmasiRate } from "@/app/database/data/harga_bangunan_negara/1_pembangunan";

export const produkIndustriRate = { ...manufakturRate, ...olahanPanganRate, ...farmasiRate };
