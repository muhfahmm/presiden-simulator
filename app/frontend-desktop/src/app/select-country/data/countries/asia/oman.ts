import { CountryData } from "../../types/_index";

export const oman: CountryData = {
  "name_en": "Oman",
  "capital": "Muscat",
  "name_id": "Oman",
  "lon": 57,
  "lat": 21,
  "flag": "🇴🇲",
  "jumlah_penduduk": 4829483,
  "anggaran": 1021,
  "pendapatan_nasional": "2917",
  "religion": "Islam",
  "ideology": "Monarki",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 19,
    "pembangkit_air": 1,
    "pembangkit_surya": 22,
    "pembangkit_termal": 38,
    "pembangkit_gas": 26,
    "pembangkit_angin": 1,
    "jaringan_listrik": 85
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 1,
    "kereta_bawah_tanah": 10,
    "jalur_kereta": 15,
    "jalan_tol": 10,
    "kualitas_jalan": 77,
    "pelabuhan_laut": 4,
    "bandara": 40,
    "terminal_bus": 9,
    "helipad": 6,
    "cakupan_internet": 77,
    "indeks_teknologi": 58,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 30,
    "uranium": 39,
    "batu_bara": 8,
    "minyak_bumi": 12,
    "gas_alam": 31,
    "garam": 34,
    "nikel": 20,
    "litium": 2,
    "aluminium": 37,
    "tembaga": 31,
    "logam_tanah_jarang": 11,
    "bijih_besi": 6,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 11,
    "mobil": 2,
    "sepeda_motor": 14,
    "smelter": 21,
    "semen_beton": 23,
    "kayu": 30,
    "air_mineral": 30,
    "gula": 23,
    "roti": 37,
    "farmasi": 36,
    "pupuk": 22,
    "pengolahan_daging": 15,
    "mie_instan": 15,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 20.5,
    "sapi_perah": 35,
    "sapi_potong": 24,
    "domba_kambing": 35,
    "udang_kerang": 4.0,
    "ikan": 21,
    "padi": 38,
    "gandum_jagung": 6.5,
    "sayur_umbi": 23.0,
    "kedelai": 4,
    "kelapa_sawit": 22,
    "kopi_teh_kakao": 12.3,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 8,
    "gudang_senjata": 24,
    "hangar_tank": 1,
    "akademi_militer": 30,
    "pusat_komando": 7,
    "pangkalan_udara": 37,
    "pangkalan_laut": 20,
    "program_luar_angkasa": 4,
    "pertahanan_siber": 20,
    "anggaran_pertahanan": 291,
    "personel": 11963,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 15,
    "infanteri": 24,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 91,
        "apc": 144,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 127,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 138,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2
      },
      "total_unit": 10,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 3,
      "jaringan_radar": 3,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 22,
          "sepeda_motor": 18,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 18,
          "kamera_pengawas": 33,
          "pusat_forensik": 1
        },
        "waktu_respon": 6,
        "kepercayaan_publik": 50 },
    "intelijen": 8,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 13,
      "misi_sabotase": 22,
      "manajemen_wilayah": 26,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 11,
      "sd": 17,
      "smp": 17,
      "sma": 12,
      "universitas": 1,
      "lembaga_pendidikan": 7,
      "laboratorium": 38,
      "observatorium": 4,
      "pusat_penelitian": 16,
      "pusat_pengembangan": 4,
      "literasi": 60,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 3,
      "pusat_diagnostik": 26,
      "tempat_tidur_rs": 2738,
      "harapan_hidup": 20,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 1,
      "sirkuit_balap": 11,
      "stadion": 37,
      "stadion_internasional": 19,
      "skor_olimpiade": 4,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 4,
      "pengadilan": 6,
      "kejaksaan": 5,
      "pos_polisi": 3,
      "armada_mobil_polisi": 1122,
      "akademi_polisi": 37,
      "indeks_korupsi": 86,
      "indeks_keamanan": 50
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 13,
      "kepuasan": 67,
      "pendapatan": 33
    },
    "korporasi": {
      "tarif": 1,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 23,
      "kepuasan": 61,
      "pendapatan": 47
    },
    "bea_cukai": {
      "tarif": 28,
      "kepuasan": 86,
      "pendapatan": 31
    },
    "lingkungan": {
      "tarif": 18,
      "kepuasan": 88,
      "pendapatan": 38
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 16 },
    "lainnya": {
      "tarif": 40,
      "kepuasan": 93,
      "pendapatan": 104
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 70,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 50
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 7700,
    "harga_gula": 28800,
    "harga_telur": 24880,
    "harga_bbm": 14980,
    "harga_listrik": 1280,
    "harga_air": 5200,
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
      "kekuatan_lunak": 32,
      "kekuatan_keras": 19,
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
    "kesehatan": 26,
    "pendidikan": 22,
    "keamanan": 5,
    "keuangan": 24,
    "lingkungan": 60
  }
};
