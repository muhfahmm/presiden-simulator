import { CountryData } from "../../types";

export const barbados: CountryData = {
  "name_en": "Barbados",
  "capital": "Bridgetown",
  "name_id": "Barbados",
  "lon": -59.53333333,
  "lat": 13.16666666,
  "flag": "🇧🇧",
  "jumlah_penduduk": 286641,
  "anggaran": 53,
  "pendapatan_nasional": "153",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 14,
    "pembangkit_air": 17,
    "pembangkit_surya": 19,
    "pembangkit_termal": 3,
    "pembangkit_gas": 34,
    "pembangkit_angin": 26,
    "jaringan_listrik": 75
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 23,
    "kereta_bawah_tanah": 35,
    "jalur_kereta": 23,
    "jalan_tol": 11,
    "kualitas_jalan": 59,
    "pelabuhan_laut": 3,
    "bandara": 30,
    "terminal_bus": 23,
    "helipad": 31,
    "cakupan_internet": 54,
    "indeks_teknologi": 68,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 32,
    "uranium": 4,
    "batu_bara": 19,
    "minyak_bumi": 26,
    "gas_alam": 32,
    "garam": 13,
    "nikel": 30,
    "litium": 34,
    "aluminium": 26,
    "tembaga": 27,
    "logam_tanah_jarang": 1,
    "bijih_besi": 39,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 26,
    "mobil": 28,
    "sepeda_motor": 14,
    "smelter": 16,
    "semen_beton": 3,
    "kayu": 17,
    "air_mineral": 3,
    "gula": 36,
    "roti": 17,
    "farmasi": 33,
    "pupuk": 30,
    "pengolahan_daging": 36,
    "mie_instan": 12,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 31,
    "unggas": 38,
    "sapi_perah": 5,
    "sapi_potong": 22,
    "domba_kambing": 37,
    "udang": 35,
    "ikan": 10,
    "kerang": 32,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 34,
    "gandum": 5,
    "jagung": 38,
    "umbi_umbian": 21,
    "kedelai": 13,
    "kelapa_sawit": 34,
    "teh": 7,
    "kopi": 40,
    "cokelat": 19,
    "tebu": 3,
    "sayur_sayuran": 15,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 40,
    "hangar_tank": 11,
    "akademi_militer": 3,
    "pusat_komando": 36,
    "pangkalan_udara": 9,
    "pangkalan_laut": 27,
    "program_luar_angkasa": 12,
    "pertahanan_siber": 28,
    "anggaran_pertahanan": 15,
    "personel": 18644,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 32,
    "infanteri": 20,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 31,
        "apc": 40,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 33,
        "kapal_destroyer": 13,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 6,
        "helikopter_serang": 24,
        "pesawat_pengintai": 2
      },
      "total_unit": 1,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 35,
      "jaringan_radar": 15,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 17,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 36,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 19,
          "kamera_pengawas": 19,
          "pusat_forensik": 1
        },
        "waktu_respon": 15,
        "kepercayaan_publik": 50 },
    "intelijen": 39,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 26,
      "misi_sabotase": 11,
      "manajemen_wilayah": 15,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 7,
      "sd": 15,
      "smp": 12,
      "sma": 18,
      "universitas": 24,
      "lembaga_pendidikan": 13,
      "laboratorium": 19,
      "observatorium": 25,
      "pusat_penelitian": 14,
      "pusat_pengembangan": 1,
      "literasi": 63,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 30,
      "pusat_diagnostik": 21,
      "tempat_tidur_rs": 787,
      "harapan_hidup": 7,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 36,
      "sirkuit_balap": 39,
      "stadion": 8,
      "stadion_internasional": 26,
      "skor_olimpiade": 39,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 23,
      "pengadilan": 4,
      "kejaksaan": 39,
      "pos_polisi": 24,
      "armada_mobil_polisi": 3756,
      "akademi_polisi": 17,
      "indeks_korupsi": 83,
      "indeks_keamanan": 82
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 19,
      "kepuasan": 67,
      "pendapatan": 2
    },
    "korporasi": {
      "tarif": 9,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 37,
      "kepuasan": 86,
      "pendapatan": 4
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 20,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 80,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 25,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 20500,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 31100,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 10400,
    "harga_obat": 78950,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 95,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 24,
    "komersial": 39,
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
      "kekuatan_lunak": 4,
      "kekuatan_keras": 9,
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
    "kesehatan": 35,
    "pendidikan": 4,
    "keamanan": 12,
    "keuangan": 26,
    "lingkungan": 60
  }
};
