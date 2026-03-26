import { ekonomi_options } from "./1_menko_ekonomi";
import { pertahanan_options } from "./2_pertahanan";
import { energi_options } from "./3_energi";
import { industri_options } from "./4_industri";
import { pertanian_options } from "./5_pertanian";
import { dalam_negeri_options } from "./6_dalam_negeri";
import { ristek_options } from "./7_ristek";
import { luar_negeri_options } from "./8_luar_negeri";
import { kesehatan_options } from "./9_kesehatan";
import { pendidikan_options } from "./10_pendidikan";
import { perhubungan_options } from "./11_perhubungan";
import { sosial_options } from "./12_sosial";
import { lingkungan_options } from "./13_lingkungan";
import { kominfo_options } from "./14_kominfo";
import { pariwisata_options } from "./15_pariwisata";
import { Ministry } from "./types";

export const INITIAL_KEMENTERIAN: Ministry[] = [
  ekonomi_options[0],
  pertahanan_options[0],
  energi_options[0],
  industri_options[0],
  pertanian_options[0],
  dalam_negeri_options[0],
  ristek_options[0],
  luar_negeri_options[0],
  kesehatan_options[0],
  pendidikan_options[0],
  perhubungan_options[0],
  sosial_options[0],
  lingkungan_options[0],
  kominfo_options[0],
  pariwisata_options[0]
];

export const KEMENTERIAN_FULL_DATABASE = {
  1: ekonomi_options,
  2: pertahanan_options,
  3: energi_options,
  4: industri_options,
  5: pertanian_options,
  6: dalam_negeri_options,
  7: ristek_options,
  8: luar_negeri_options,
  9: kesehatan_options,
  10: pendidikan_options,
  11: perhubungan_options,
  12: sosial_options,
  13: lingkungan_options,
  14: kominfo_options,
  15: pariwisata_options
};

export * from "./types";
