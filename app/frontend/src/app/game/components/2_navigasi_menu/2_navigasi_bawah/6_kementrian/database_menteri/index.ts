import { infrastruktur_options } from "./1_infrastruktur"
import { pendidikan_options } from "./2_pendidikan"
import { sains_penelitian_options } from "./3_sains_penelitian"
import { kesehatan_options } from "./4_kesehatan"
import { olahraga_options } from "./5_olahraga"
import { kehakiman_options } from "./6_kehakiman"
import { pertahanan_options } from "./7_pertahanan"
import { luar_negeri_options } from "./8_luar_negeri"
import { kebudayaan_options } from "./9_kebudayaan"
import { pariwisata_options } from "./10_pariwisata"
import { lingkungan_hidup_options } from "./11_lingkungan_hidup"
import { perumahan_options } from "./12_perumahan"
import { pembangunan_options } from "./13_pembangunan"
import { perdagangan_options } from "./14_perdagangan"
import { keuangan_options } from "./15_keuangan"
import { Ministry } from "./types"

export const INITIAL_KEMENTERIAN: Ministry[] = [
  infrastruktur_options[0],
  pendidikan_options[0],
  sains_penelitian_options[0],
  kesehatan_options[0],
  olahraga_options[0],
  kehakiman_options[0],
  pertahanan_options[0],
  luar_negeri_options[0],
  kebudayaan_options[0],
  pariwisata_options[0],
  lingkungan_hidup_options[0],
  perumahan_options[0],
  pembangunan_options[0],
  perdagangan_options[0],
  keuangan_options[0],
].map(m => ({ ...m, status: "Terisi" }));

export const KEMENTERIAN_FULL_DATABASE = {
  1: infrastruktur_options,
  2: pendidikan_options,
  3: sains_penelitian_options,
  4: kesehatan_options,
  5: olahraga_options,
  6: kehakiman_options,
  7: pertahanan_options,
  8: luar_negeri_options,
  9: kebudayaan_options,
  10: pariwisata_options,
  11: lingkungan_hidup_options,
  12: perumahan_options,
  13: pembangunan_options,
  14: perdagangan_options,
  15: keuangan_options,
};

export * from "./types"
