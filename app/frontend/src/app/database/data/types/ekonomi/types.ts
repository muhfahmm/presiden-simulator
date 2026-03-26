import { PajakData } from "./1_pajak";
import { GajiData } from "./2_gaji";
import { SubsidiData } from "./3_subsidi";
import { HargaData } from "./4_harga";

export interface EkonomiData {
  pajak: PajakData;
  gaji: GajiData;
  subsidi: SubsidiData;
  harga: HargaData;
}

export * from "./1_pajak";
export * from "./2_gaji";
export * from "./3_subsidi";
export * from "./4_harga";
