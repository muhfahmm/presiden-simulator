export interface SektorGeopolitik {
  un_vote: number;
  sekutu?: readonly string[];
  musuh?: readonly string[];
  sikap: "Globalis" | "Isolasionis" | "Netral";
  pengaruh_internasional: {
    kekuatan_lunak: number;
    kekuatan_keras: number;
    prestise_diplomatik: number;
  };
  organisasi_internasional: readonly {
    readonly name: string;
    readonly role: "Anggota" | "Pemimpin" | "Pengamat";
  }[];
  perjanjian?: readonly {
    readonly mitra: string;
    readonly jenis: "Perdagangan" | "Militer" | "Penelitian" | "Politik";
    readonly status: "Aktif" | "Tertunda" | "Pendinginan";
  }[];
  reputasi_diplomatik: "Unggul" | "Baik" | "Netral" | "Buruk" | "Terisolasi";
  aliansi_aktif: readonly string[];
  pengaruh_global: number;
  peringkat_diplomasi: number;
}
