import { PendidikanData } from "./1_pendidikan";
import { KesehatanData } from "./2_kesehatan";
import { HukumData } from "./4_hukum";

export interface SektorSosial {
  pendidikan: PendidikanData;
  kesehatan: KesehatanData;
  hukum: HukumData;
}

export * from "./1_pendidikan";
export * from "./2_kesehatan";
export * from "./4_hukum";
