import { CountryData } from "../../types/_index";

export const republik_serbia: CountryData = {
  "name_en": "Serbia",
  "capital": "Belgrade",
  "name_id": "Republik serbia",
  "lon": 21,
  "lat": 44,
  "flag": "🇷🇸",
  "jumlah_penduduk": 6963764,
  "anggaran": 661,
  "pendapatan_nasional": "1889",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 29,
    "pembangkit_air": 32,
    "pembangkit_surya": 28,
    "pembangkit_termal": 22,
    "pembangkit_gas": 19,
    "pembangkit_angin": 5,
    "jaringan_listrik": 59
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 23,
    "kereta_bawah_tanah": 25,
    "jalur_kereta": 17,
    "jalan_tol": 6,
    "kualitas_jalan": 63,
    "pelabuhan_laut": 16,
    "bandara": 3,
    "terminal_bus": 2,
    "helipad": 26,
    "cakupan_internet": 93,
    "indeks_teknologi": 59,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 27,
    "uranium": 22,
    "batu_bara": 34,
    "minyak_bumi": 8,
    "gas_alam": 11,
    "garam": 36,
    "nikel": 23,
    "litium": 38,
    "aluminium": 16,
    "tembaga": 21,
    "logam_tanah_jarang": 2,
    "bijih_besi": 15,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 7,
    "mobil": 23,
    "sepeda_motor": 20,
    "smelter": 15,
    "semen_beton": 35,
    "kayu": 4,
    "air_mineral": 39,
    "gula": 27,
    "roti": 31,
    "farmasi": 20,
    "pupuk": 21,
    "pengolahan_daging": 30,
    "mie_instan": 25,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 14.5,
    "sapi_perah": 30,
    "sapi_potong": 3,
    "domba_kambing": 22,
    "udang_kerang": 28.0,
    "ikan": 16,
    "padi": 9,
    "gandum_jagung": 18.5,
    "sayur_umbi": 6.0,
    "kedelai": 19,
    "kelapa_sawit": 24,
    "kopi_teh_kakao": 21.0,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 8,
    "hangar_tank": 14,
    "akademi_militer": 5,
    "pusat_komando": 30,
    "pangkalan_udara": 39,
    "pangkalan_laut": 29,
    "program_luar_angkasa": 9,
    "pertahanan_siber": 2,
    "anggaran_pertahanan": 188,
    "personel": 11561,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 6,
    "infanteri": 8,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 108,
        "apc": 117,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 13,
        "kapal_destroyer": 188,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 59,
        "helikopter_serang": 149,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 0,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 21,
          "sepeda_motor": 14,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 6,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 16,
          "kamera_pengawas": 15,
          "pusat_forensik": 1
        },
        "waktu_respon": 28,
        "kepercayaan_publik": 50 },
    "intelijen": 33,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 19,
      "misi_mata_mata": 3,
      "misi_sabotase": 2,
      "manajemen_wilayah": 14,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 4,
      "sd": 13,
      "smp": 18,
      "sma": 24,
      "universitas": 39,
      "lembaga_pendidikan": 6,
      "laboratorium": 10,
      "observatorium": 8,
      "pusat_penelitian": 29,
      "pusat_pengembangan": 25,
      "literasi": 66,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 12,
      "pusat_diagnostik": 23,
      "tempat_tidur_rs": 9624,
      "harapan_hidup": 13,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 40,
      "sirkuit_balap": 3,
      "stadion": 27,
      "stadion_internasional": 25,
      "skor_olimpiade": 11,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 19,
      "pengadilan": 4,
      "kejaksaan": 8,
      "pos_polisi": 31,
      "armada_mobil_polisi": 7504,
      "akademi_polisi": 37,
      "indeks_korupsi": 94,
      "indeks_keamanan": 80
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 8,
      "kepuasan": 67,
      "pendapatan": 14
    },
    "korporasi": {
      "tarif": 16,
      "kepuasan": 52,
      "pendapatan": 27
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 8
    },
    "bea_cukai": {
      "tarif": 32,
      "kepuasan": 86,
      "pendapatan": 42
    },
    "lingkungan": {
      "tarif": 11,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 4 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 10 },
    "lainnya": {
      "tarif": 12,
      "kepuasan": 93,
      "pendapatan": 10
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
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 75
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 104100,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
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
      "kekuatan_keras": 30,
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
    "kesehatan": 30,
    "pendidikan": 3,
    "keamanan": 26,
    "keuangan": 26,
    "lingkungan": 60
  }
};
