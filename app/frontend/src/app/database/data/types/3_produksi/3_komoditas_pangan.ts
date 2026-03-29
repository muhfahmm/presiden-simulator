import { peternakanRate } from "@/app/database/data/harga_bangunan/1_produksi/4_harga_bangunan_peternakan";
import { agrikulturRate } from "@/app/database/data/harga_bangunan/1_produksi/5_harga_bangunan_agrikultur";
import { perikananRate } from "@/app/database/data/harga_bangunan/1_produksi/6_harga_bangunan_perikanan";

export const komoditasPanganRate = { ...peternakanRate, ...agrikulturRate, ...perikananRate };
