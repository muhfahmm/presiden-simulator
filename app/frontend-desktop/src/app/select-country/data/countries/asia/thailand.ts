import { CountryData } from "../../types";

export const thailand: CountryData = {
  "name_en": "Thailand",
  "capital": "Bangkok",
  "name_id": "Thailand",
  "lon": 100,
  "lat": 15,
  "flag": "🇹🇭",
  "jumlah_penduduk": 69428524,
  "anggaran": 4959,
  "pendapatan_nasional": "14168",
  "religion": "Buddha",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 5,
    "pembangkit_air": 2,
    "pembangkit_surya": 3,
    "pembangkit_termal": 17,
    "pembangkit_gas": 10,
    "pembangkit_angin": 31,
    "jaringan_listrik": 58
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 4,
    "kereta_bawah_tanah": 40,
    "jalur_kereta": 26,
    "jalan_tol": 15,
    "kualitas_jalan": 76,
    "pelabuhan_laut": 2,
    "bandara": 30,
    "terminal_bus": 21,
    "helipad": 34,
    "cakupan_internet": 93,
    "indeks_teknologi": 58,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 32,
    "uranium": 39,
    "batu_bara": 16,
    "minyak_bumi": 30,
    "gas_alam": 34,
    "garam": 35,
    "nikel": 9,
    "litium": 29,
    "aluminium": 14,
    "tembaga": 22,
    "logam_tanah_jarang": 25,
    "bijih_besi": 3,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 11,
    "mobil": 31,
    "sepeda_motor": 27,
    "smelter": 37,
    "semen_beton": 6,
    "kayu": 23,
    "air_mineral": 11,
    "gula": 1,
    "roti": 37,
    "farmasi": 27,
    "pupuk": 4,
    "pengolahan_daging": 2,
    "mie_instan": 4,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 12,
    "unggas": 28,
    "sapi_perah": 30,
    "sapi_potong": 33,
    "domba_kambing": 23,
    "udang": 36,
    "ikan": 24,
    "kerang": 17,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 26,
    "gandum": 27,
    "jagung": 18,
    "umbi_umbian": 2,
    "kedelai": 3,
    "kelapa_sawit": 32,
    "teh": 18,
    "kopi": 12,
    "cokelat": 26,
    "tebu": 5,
    "sayur_sayuran": 35,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 10,
    "gudang_senjata": 5,
    "hangar_tank": 36,
    "akademi_militer": 7,
    "pusat_komando": 26,
    "pangkalan_udara": 22,
    "pangkalan_laut": 19,
    "program_luar_angkasa": 10,
    "pertahanan_siber": 14,
    "anggaran_pertahanan": 1416,
    "personel": 10734,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 15,
    "infanteri": 33,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 58,
        "apc": 193,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 20,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 154,
        "helikopter_serang": 189,
        "pesawat_pengintai": 2
      },
      "total_unit": 25,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 5,
      "jaringan_radar": 4,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 4,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 30,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 32,
          "kamera_pengawas": 13,
          "pusat_forensik": 1
        },
        "waktu_respon": 24,
        "kepercayaan_publik": 50 },
    "intelijen": 8,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 14,
      "misi_mata_mata": 27,
      "misi_sabotase": 2,
      "manajemen_wilayah": 24,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 16,
      "sd": 8,
      "smp": 8,
      "sma": 23,
      "universitas": 22,
      "lembaga_pendidikan": 11,
      "laboratorium": 34,
      "observatorium": 22,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 21,
      "literasi": 80,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 2,
      "rumah_sakit_kecil": 38,
      "pusat_diagnostik": 17,
      "tempat_tidur_rs": 1052,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 32,
      "stadion": 27,
      "stadion_internasional": 19,
      "skor_olimpiade": 19,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 26,
      "pengadilan": 28,
      "kejaksaan": 15,
      "pos_polisi": 9,
      "armada_mobil_polisi": 1226,
      "akademi_polisi": 13,
      "indeks_korupsi": 71,
      "indeks_keamanan": 78
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 25,
      "kepuasan": 67,
      "pendapatan": 307
    },
    "korporasi": {
      "tarif": 39,
      "kepuasan": 52,
      "pendapatan": 520
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 152
    },
    "bea_cukai": {
      "tarif": 40,
      "kepuasan": 86,
      "pendapatan": 451
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 43
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 25 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 75 },
    "lainnya": {
      "tarif": 22,
      "kepuasan": 93,
      "pendapatan": 135
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 60,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 15550,
    "harga_bbm": 8560,
    "harga_listrik": 3200,
    "harga_air": 10400,
    "harga_obat": 126320,
    "harga_pendidikan": 967800
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 59,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 2,
    "komersial": 18,
    "industri": 53
  },
  // =============================================================
  // 15. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL
  // =============================================================

  "geopolitik": {
    "sekutu": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "musuh": [],
    "sikap": "Netral",
    "pengaruh_internasional": {
      "kekuatan_lunak": 29,
      "kekuatan_keras": 2,
      "prestise_diplomatik": 57
    },
    "organisasi_internasional": [
      {
        "name": "PBB (UN)",
        "role": "Anggota"
      },
      {
        "name": "WHO",
        "role": "Anggota"
      },
      {
        "name": "WTO",
        "role": "Anggota"
      }
    ]
  },
  // =============================================================
  // 16. 🏛️ KEMENTERIAN NEGARA
  // =============================================================

  "kementerian": {
    "kesehatan": 8,
    "pendidikan": 20,
    "keamanan": 9,
    "keuangan": 24,
    "lingkungan": 60
  }
};
