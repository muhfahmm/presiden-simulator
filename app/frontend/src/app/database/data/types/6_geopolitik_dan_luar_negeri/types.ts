export interface SektorGeopolitik {
  sekutu?: string[];
  musuh?: string[];
  sikap: "Globalis" | "Isolasionis" | "Netral";
  pengaruh_internasional: {
    kekuatan_lunak: number;
    kekuatan_keras: number;
    prestise_diplomatik: number;
  };
  organisasi_internasional: {
    name: string;
    role: "Anggota" | "Pemimpin" | "Pengamat";
  }[];
  perjanjian?: {
    mitra: string;
    jenis: "Perdagangan" | "Militer" | "Penelitian" | "Politik";
    status: "Aktif" | "Tertunda" | "Pendinginan";
  }[];
  reputasi_diplomatik: "Unggul" | "Baik" | "Netral" | "Buruk" | "Terisolasi";
  aliansi_aktif: string[];
  pengaruh_global: number;
  peringkat_diplomasi: number;
}
