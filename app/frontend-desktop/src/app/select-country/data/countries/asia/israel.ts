import { CountryData } from "../../types/_index";

export const israel: CountryData = {
  "name_en": "Israel",
  "capital": "Jerusalem",
  "name_id": "Israel",
  "lon": 35.13,
  "lat": 31.47,
  "flag": "🇮🇱",
  "jumlah_penduduk": 8882800,
  "anggaran": 5056,
  "pendapatan_nasional": "14446",
  "religion": "Yahudi",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 40,
    "pembangkit_air": 33,
    "pembangkit_surya": 39,
    "pembangkit_termal": 31,
    "pembangkit_gas": 35,
    "pembangkit_angin": 26,
    "jaringan_listrik": 74
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 40,
    "kereta_bawah_tanah": 29,
    "jalur_kereta": 10,
    "jalan_tol": 32,
    "kualitas_jalan": 69,
    "pelabuhan_laut": 7,
    "bandara": 3,
    "terminal_bus": 31,
    "helipad": 11,
    "cakupan_internet": 72,
    "indeks_teknologi": 64,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 16,
    "uranium": 39,
    "batu_bara": 18,
    "minyak_bumi": 27,
    "gas_alam": 26,
    "garam": 11,
    "nikel": 34,
    "litium": 12,
    "aluminium": 10,
    "tembaga": 31,
    "logam_tanah_jarang": 17,
    "bijih_besi": 20,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 8,
    "mobil": 37,
    "sepeda_motor": 32,
    "smelter": 21,
    "semen_beton": 39,
    "kayu": 12,
    "air_mineral": 14,
    "gula": 27,
    "roti": 10,
    "farmasi": 16,
    "pupuk": 13,
    "pengolahan_daging": 18,
    "mie_instan": 29,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 21.5,
    "sapi_perah": 8,
    "sapi_potong": 12,
    "domba_kambing": 15,
    "udang_kerang": 15.5,
    "ikan": 16,
    "padi": 21,
    "gandum_jagung": 22.0,
    "sayur_umbi": 14.0,
    "kedelai": 38,
    "kelapa_sawit": 28,
    "kopi_teh_kakao": 21.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 5,
    "gudang_senjata": 5,
    "hangar_tank": 36,
    "akademi_militer": 38,
    "pusat_komando": 36,
    "pangkalan_udara": 14,
    "pangkalan_laut": 21,
    "program_luar_angkasa": 17,
    "pertahanan_siber": 18,
    "anggaran_pertahanan": 1444,
    "personel": 19082,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 35,
    "infanteri": 31,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 14,
        "apc": 39,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 19,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 16,
        "helikopter_serang": 9,
        "pesawat_pengintai": 2
      },
      "total_unit": 3,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 23,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 30,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 9,
          "helikopter_polisi": 3,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 30,
          "kamera_pengawas": 24,
          "pusat_forensik": 1
        },
        "waktu_respon": 37,
        "kepercayaan_publik": 50 },
    "intelijen": 27,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 3,
      "misi_mata_mata": 14,
      "misi_sabotase": 27,
      "manajemen_wilayah": 26,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 37,
      "sd": 7,
      "smp": 7,
      "sma": 2,
      "universitas": 28,
      "lembaga_pendidikan": 15,
      "laboratorium": 11,
      "observatorium": 5,
      "pusat_penelitian": 31,
      "pusat_pengembangan": 33,
      "literasi": 76,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 27,
      "rumah_sakit_kecil": 22,
      "pusat_diagnostik": 4,
      "tempat_tidur_rs": 2454,
      "harapan_hidup": 18,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 37,
      "stadion": 8,
      "stadion_internasional": 33,
      "skor_olimpiade": 4,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 36,
      "pengadilan": 22,
      "kejaksaan": 11,
      "pos_polisi": 31,
      "armada_mobil_polisi": 5678,
      "akademi_polisi": 28,
      "indeks_korupsi": 79,
      "indeks_keamanan": 61
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 6,
      "kepuasan": 67,
      "pendapatan": 40
    },
    "korporasi": {
      "tarif": 14,
      "kepuasan": 52,
      "pendapatan": 160
    },
    "penghasilan": {
      "tarif": 17,
      "kepuasan": 61,
      "pendapatan": 97
    },
    "bea_cukai": {
      "tarif": 4,
      "kepuasan": 86,
      "pendapatan": 58
    },
    "lingkungan": {
      "tarif": 17,
      "kepuasan": 88,
      "pendapatan": 139
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 26 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 76 },
    "lainnya": {
      "tarif": 37,
      "kepuasan": 93,
      "pendapatan": 383
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 145740,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 12320,
    "harga_gula": 28800,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 800,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 483900
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
      "kekuatan_lunak": 37,
      "kekuatan_keras": 17,
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
    "pendidikan": 16,
    "keamanan": 39,
    "keuangan": 31,
    "lingkungan": 60
  }
};
