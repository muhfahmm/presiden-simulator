import { CountryData } from "../../types";

export const moldova: CountryData = {
  "name_en": "Moldova",
  "capital": "Chișinău",
  "name_id": "Moldova",
  "lon": 29,
  "lat": 47,
  "flag": "🇲🇩",
  "jumlah_penduduk": 2706049,
  "anggaran": 156,
  "pendapatan_nasional": "444",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 22,
    "pembangkit_air": 31,
    "pembangkit_surya": 32,
    "pembangkit_termal": 17,
    "pembangkit_gas": 15,
    "pembangkit_angin": 14,
    "jaringan_listrik": 87
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 40,
    "kereta_bawah_tanah": 37,
    "jalur_kereta": 28,
    "jalan_tol": 6,
    "kualitas_jalan": 68,
    "pelabuhan_laut": 24,
    "bandara": 20,
    "terminal_bus": 13,
    "helipad": 29,
    "cakupan_internet": 90,
    "indeks_teknologi": 54,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 15,
    "uranium": 32,
    "batu_bara": 8,
    "minyak_bumi": 28,
    "gas_alam": 24,
    "garam": 8,
    "nikel": 9,
    "litium": 29,
    "aluminium": 2,
    "tembaga": 6,
    "logam_tanah_jarang": 5,
    "bijih_besi": 33,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 26,
    "mobil": 4,
    "sepeda_motor": 15,
    "smelter": 7,
    "semen_beton": 38,
    "kayu": 15,
    "air_mineral": 5,
    "gula": 20,
    "roti": 23,
    "farmasi": 40,
    "pupuk": 37,
    "pengolahan_daging": 40,
    "mie_instan": 11,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 22,
    "unggas": 30,
    "sapi_perah": 31,
    "sapi_potong": 2,
    "domba_kambing": 3,
    "udang": 40,
    "ikan": 30,
    "kerang": 9,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 40,
    "gandum": 35,
    "jagung": 32,
    "umbi_umbian": 4,
    "kedelai": 16,
    "kelapa_sawit": 20,
    "teh": 1,
    "kopi": 30,
    "cokelat": 6,
    "tebu": 1,
    "sayur_sayuran": 36,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 9,
    "gudang_senjata": 29,
    "hangar_tank": 16,
    "akademi_militer": 5,
    "pusat_komando": 29,
    "pangkalan_udara": 9,
    "pangkalan_laut": 31,
    "program_luar_angkasa": 7,
    "pertahanan_siber": 6,
    "anggaran_pertahanan": 44,
    "personel": 12846,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 36,
    "infanteri": 34,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 136,
        "apc": 49,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 31,
        "kapal_destroyer": 94,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 66,
        "helikopter_serang": 93,
        "pesawat_pengintai": 2
      },
      "total_unit": 26,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 29,
          "sepeda_motor": 3,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 11,
          "kamera_pengawas": 39,
          "pusat_forensik": 1
        },
        "waktu_respon": 40,
        "kepercayaan_publik": 50 },
    "intelijen": 12,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 26,
      "misi_mata_mata": 21,
      "misi_sabotase": 35,
      "manajemen_wilayah": 2,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 13,
      "sd": 32,
      "smp": 34,
      "sma": 25,
      "universitas": 40,
      "lembaga_pendidikan": 31,
      "laboratorium": 9,
      "observatorium": 20,
      "pusat_penelitian": 3,
      "pusat_pengembangan": 6,
      "literasi": 59,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 20,
      "rumah_sakit_kecil": 14,
      "pusat_diagnostik": 38,
      "tempat_tidur_rs": 3715,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 29,
      "sirkuit_balap": 7,
      "stadion": 28,
      "stadion_internasional": 38,
      "skor_olimpiade": 22,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 39,
      "pengadilan": 40,
      "kejaksaan": 40,
      "pos_polisi": 3,
      "armada_mobil_polisi": 9602,
      "akademi_polisi": 13,
      "indeks_korupsi": 57,
      "indeks_keamanan": 65
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 5
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 1
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 36,
      "kepuasan": 86,
      "pendapatan": 15
    },
    "lingkungan": {
      "tarif": 21,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 33,
      "kepuasan": 93,
      "pendapatan": 12
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 90,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 100,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 2600,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 83,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 33,
    "komersial": 1,
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
      "kekuatan_lunak": 15,
      "kekuatan_keras": 7,
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
    "kesehatan": 11,
    "pendidikan": 27,
    "keamanan": 22,
    "keuangan": 9,
    "lingkungan": 60
  }
};
