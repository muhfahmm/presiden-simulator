import { CountryData } from "../../types/_index";

export const honduras: CountryData = {
  "name_en": "Honduras",
  "capital": "Tegucigalpa",
  "name_id": "Honduras",
  "lon": -86.5,
  "lat": 15,
  "flag": "🇭🇳",
  "jumlah_penduduk": 9587522,
  "anggaran": 311,
  "pendapatan_nasional": "889",
  "religion": "Katolik",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 13,
    "pembangkit_air": 5,
    "pembangkit_surya": 33,
    "pembangkit_termal": 2,
    "pembangkit_gas": 16,
    "pembangkit_angin": 36,
    "jaringan_listrik": 92
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 16,
    "kereta_bawah_tanah": 36,
    "jalur_kereta": 7,
    "jalan_tol": 13,
    "kualitas_jalan": 91,
    "pelabuhan_laut": 17,
    "bandara": 1,
    "terminal_bus": 21,
    "helipad": 18,
    "cakupan_internet": 78,
    "indeks_teknologi": 54,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 31,
    "uranium": 25,
    "batu_bara": 23,
    "minyak_bumi": 29,
    "gas_alam": 5,
    "garam": 32,
    "nikel": 11,
    "litium": 33,
    "aluminium": 21,
    "tembaga": 6,
    "logam_tanah_jarang": 39,
    "bijih_besi": 31,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 14,
    "mobil": 33,
    "sepeda_motor": 27,
    "smelter": 20,
    "semen_beton": 23,
    "kayu": 27,
    "air_mineral": 27,
    "gula": 38,
    "roti": 23,
    "farmasi": 19,
    "pupuk": 13,
    "pengolahan_daging": 19,
    "mie_instan": 22,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 22.0,
    "sapi_perah": 13,
    "sapi_potong": 11,
    "domba_kambing": 10,
    "udang_kerang": 10.5,
    "ikan": 6,
    "padi": 9,
    "gandum_jagung": 31.5,
    "sayur_umbi": 20.0,
    "kedelai": 32,
    "kelapa_sawit": 26,
    "kopi_teh_kakao": 16.7,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 4,
    "gudang_senjata": 37,
    "hangar_tank": 12,
    "akademi_militer": 35,
    "pusat_komando": 30,
    "pangkalan_udara": 26,
    "pangkalan_laut": 21,
    "program_luar_angkasa": 29,
    "pertahanan_siber": 4,
    "anggaran_pertahanan": 88,
    "personel": 10512,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 11,
    "infanteri": 3,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 39,
        "apc": 1,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 35,
        "kapal_destroyer": 17,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 4,
        "helikopter_serang": 28,
        "pesawat_pengintai": 2
      },
      "total_unit": 27,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 16,
      "jaringan_radar": 39,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 6,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 26,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 27,
          "kamera_pengawas": 17,
          "pusat_forensik": 1
        },
        "waktu_respon": 19,
        "kepercayaan_publik": 50 },
    "intelijen": 19,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 16,
      "misi_mata_mata": 19,
      "misi_sabotase": 33,
      "manajemen_wilayah": 38,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 18,
      "sd": 35,
      "smp": 7,
      "sma": 7,
      "universitas": 6,
      "lembaga_pendidikan": 14,
      "laboratorium": 24,
      "observatorium": 29,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 22,
      "literasi": 90,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 8,
      "pusat_diagnostik": 24,
      "tempat_tidur_rs": 8854,
      "harapan_hidup": 38,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 19,
      "sirkuit_balap": 9,
      "stadion": 11,
      "stadion_internasional": 13,
      "skor_olimpiade": 2,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 34,
      "pengadilan": 29,
      "kejaksaan": 20,
      "pos_polisi": 26,
      "armada_mobil_polisi": 8337,
      "akademi_polisi": 39,
      "indeks_korupsi": 75,
      "indeks_keamanan": 82
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 38,
      "kepuasan": 67,
      "pendapatan": 17
    },
    "korporasi": {
      "tarif": 25,
      "kepuasan": 52,
      "pendapatan": 18
    },
    "penghasilan": {
      "tarif": 16,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 25,
      "kepuasan": 86,
      "pendapatan": 16
    },
    "lingkungan": {
      "tarif": 8,
      "kepuasan": 88,
      "pendapatan": 7
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 5 },
    "lainnya": {
      "tarif": 16,
      "kepuasan": 93,
      "pendapatan": 13
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 90,
    "gaji_medis": 100,
    "gaji_militer": 90
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 100,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 75,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 145740,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 3200,
    "harga_air": 5200,
    "harga_obat": 221060,
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
      "kekuatan_lunak": 35,
      "kekuatan_keras": 12,
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
    "kesehatan": 21,
    "pendidikan": 4,
    "keamanan": 14,
    "keuangan": 21,
    "lingkungan": 60
  }
};
