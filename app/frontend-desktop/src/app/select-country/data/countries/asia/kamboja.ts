import { CountryData } from "../../types";

export const kamboja: CountryData = {
  "name_en": "Cambodia",
  "capital": "Phnom Penh",
  "name_id": "Kamboja",
  "lon": 105,
  "lat": 13,
  "flag": "🇰🇭",
  "jumlah_penduduk": 16249798,
  "anggaran": 292,
  "pendapatan_nasional": "833",
  "religion": "Buddha",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 38,
    "pembangkit_air": 4,
    "pembangkit_surya": 17,
    "pembangkit_termal": 29,
    "pembangkit_gas": 13,
    "pembangkit_angin": 12,
    "jaringan_listrik": 76
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 24,
    "kereta_bawah_tanah": 33,
    "jalur_kereta": 10,
    "jalan_tol": 32,
    "kualitas_jalan": 60,
    "pelabuhan_laut": 23,
    "bandara": 21,
    "terminal_bus": 14,
    "helipad": 11,
    "cakupan_internet": 84,
    "indeks_teknologi": 94,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 23,
    "uranium": 17,
    "batu_bara": 16,
    "minyak_bumi": 7,
    "gas_alam": 27,
    "garam": 24,
    "nikel": 36,
    "litium": 38,
    "aluminium": 11,
    "tembaga": 13,
    "logam_tanah_jarang": 8,
    "bijih_besi": 22,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 1,
    "mobil": 24,
    "sepeda_motor": 22,
    "smelter": 24,
    "semen_beton": 20,
    "kayu": 7,
    "air_mineral": 4,
    "gula": 1,
    "roti": 22,
    "farmasi": 30,
    "pupuk": 28,
    "pengolahan_daging": 11,
    "mie_instan": 11,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 19,
    "unggas": 25,
    "sapi_perah": 24,
    "sapi_potong": 29,
    "domba_kambing": 33,
    "udang": 28,
    "ikan": 27,
    "kerang": 6,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 12,
    "gandum": 38,
    "jagung": 11,
    "umbi_umbian": 8,
    "kedelai": 5,
    "kelapa_sawit": 17,
    "teh": 31,
    "kopi": 13,
    "cokelat": 12,
    "tebu": 39,
    "sayur_sayuran": 1,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 9,
    "gudang_senjata": 25,
    "hangar_tank": 22,
    "akademi_militer": 15,
    "pusat_komando": 23,
    "pangkalan_udara": 34,
    "pangkalan_laut": 1,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 35,
    "anggaran_pertahanan": 83,
    "personel": 20038,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 32,
    "infanteri": 13,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 1,
        "apc": 22,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 1,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 9,
        "helikopter_serang": 4,
        "pesawat_pengintai": 2
      },
      "total_unit": 1,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 19,
      "jaringan_radar": 16,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 20,
          "sepeda_motor": 30,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 10,
          "kamera_pengawas": 18,
          "pusat_forensik": 1
        },
        "waktu_respon": 29,
        "kepercayaan_publik": 50 },
    "intelijen": 4,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 1,
      "misi_mata_mata": 24,
      "misi_sabotase": 2,
      "manajemen_wilayah": 5,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 22,
      "sd": 19,
      "smp": 40,
      "sma": 25,
      "universitas": 33,
      "lembaga_pendidikan": 20,
      "laboratorium": 26,
      "observatorium": 35,
      "pusat_penelitian": 11,
      "pusat_pengembangan": 9,
      "literasi": 65,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 23,
      "rumah_sakit_kecil": 34,
      "pusat_diagnostik": 21,
      "tempat_tidur_rs": 3102,
      "harapan_hidup": 40,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 36,
      "sirkuit_balap": 5,
      "stadion": 29,
      "stadion_internasional": 6,
      "skor_olimpiade": 37,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 36,
      "pengadilan": 11,
      "kejaksaan": 7,
      "pos_polisi": 22,
      "armada_mobil_polisi": 4080,
      "akademi_polisi": 22,
      "indeks_korupsi": 70,
      "indeks_keamanan": 62
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 40,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 10
    },
    "bea_cukai": {
      "tarif": 19,
      "kepuasan": 86,
      "pendapatan": 13
    },
    "lingkungan": {
      "tarif": 30,
      "kepuasan": 88,
      "pendapatan": 12
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 36,
      "kepuasan": 93,
      "pendapatan": 18
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 70,
    "gaji_medis": 70,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 208200,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 12320,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 21400,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 315800,
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
    "perumahan": 10,
    "komersial": 25,
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
      "kekuatan_lunak": 28,
      "kekuatan_keras": 29,
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
    "pendidikan": 16,
    "keamanan": 14,
    "keuangan": 39,
    "lingkungan": 60
  }
};
