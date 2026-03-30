import { peternakanRate, agrikulturRate, perikananRate } from "@/app/database/data/harga_bangunan_negara/1_pembangunan";

export const komoditasPanganRate = { ...peternakanRate, ...agrikulturRate, ...perikananRate };
