import { CountryData } from "../../types";

export const georgia: CountryData = {
  "name_en": "Georgia",
  "capital": "Tbilisi",
  "name_id": "Georgia",
  "lon": 43.5,
  "lat": 42,
  "flag": "🇬🇪",
  "jumlah_penduduk": 3726549,
  "anggaran": 243,
  "pendapatan_nasional": "694",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 19,
    "pembangkit_air": 36,
    "pembangkit_surya": 5,
    "pembangkit_termal": 12,
    "pembangkit_gas": 12,
    "pembangkit_angin": 15,
    "jaringan_listrik": 94
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 13,
    "kereta_bawah_tanah": 11,
    "jalur_kereta": 18,
    "jalan_tol": 21,
    "kualitas_jalan": 55,
    "pelabuhan_laut": 16,
    "bandara": 28,
    "terminal_bus": 39,
    "helipad": 25,
    "cakupan_internet": 82,
    "indeks_teknologi": 82,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 36,
    "uranium": 31,
    "batu_bara": 35,
    "minyak_bumi": 6,
    "gas_alam": 23,
    "garam": 36,
    "nikel": 39,
    "litium": 22,
    "aluminium": 36,
    "tembaga": 24,
    "logam_tanah_jarang": 31,
    "bijih_besi": 22,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 13,
    "mobil": 40,
    "sepeda_motor": 40,
    "smelter": 17,
    "semen_beton": 22,
    "kayu": 38,
    "air_mineral": 22,
    "gula": 38,
    "roti": 14,
    "farmasi": 9,
    "pupuk": 16,
    "pengolahan_daging": 29,
    "mie_instan": 9,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 29,
    "unggas": 36,
    "sapi_perah": 39,
    "sapi_potong": 11,
    "domba_kambing": 5,
    "udang": 21,
    "ikan": 1,
    "kerang": 18,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 34,
    "gandum": 28,
    "jagung": 6,
    "umbi_umbian": 8,
    "kedelai": 36,
    "kelapa_sawit": 11,
    "teh": 31,
    "kopi": 40,
    "cokelat": 1,
    "tebu": 23,
    "sayur_sayuran": 12,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 20,
    "gudang_senjata": 10,
    "hangar_tank": 26,
    "akademi_militer": 13,
    "pusat_komando": 4,
    "pangkalan_udara": 13,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 19,
    "pertahanan_siber": 24,
    "anggaran_pertahanan": 69,
    "personel": 6649,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 30,
    "infanteri": 10,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 13,
        "apc": 31,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 31,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 35,
        "helikopter_serang": 9,
        "pesawat_pengintai": 2
      },
      "total_unit": 33,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 10,
      "jaringan_radar": 8,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 10,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 22,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 24,
          "pusat_forensik": 1
        },
        "waktu_respon": 35,
        "kepercayaan_publik": 50 },
    "intelijen": 3,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 5,
      "misi_sabotase": 2,
      "manajemen_wilayah": 23,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 9,
      "sd": 15,
      "smp": 36,
      "sma": 16,
      "universitas": 13,
      "lembaga_pendidikan": 31,
      "laboratorium": 19,
      "observatorium": 19,
      "pusat_penelitian": 40,
      "pusat_pengembangan": 28,
      "literasi": 54,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 37,
      "rumah_sakit_kecil": 40,
      "pusat_diagnostik": 7,
      "tempat_tidur_rs": 4461,
      "harapan_hidup": 12,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 31,
      "sirkuit_balap": 18,
      "stadion": 2,
      "stadion_internasional": 26,
      "skor_olimpiade": 38,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 33,
      "pengadilan": 39,
      "kejaksaan": 23,
      "pos_polisi": 7,
      "armada_mobil_polisi": 2029,
      "akademi_polisi": 14,
      "indeks_korupsi": 78,
      "indeks_keamanan": 64
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 23,
      "kepuasan": 67,
      "pendapatan": 10
    },
    "korporasi": {
      "tarif": 15,
      "kepuasan": 52,
      "pendapatan": 6
    },
    "penghasilan": {
      "tarif": 22,
      "kepuasan": 61,
      "pendapatan": 7
    },
    "bea_cukai": {
      "tarif": 7,
      "kepuasan": 86,
      "pendapatan": 3
    },
    "lingkungan": {
      "tarif": 32,
      "kepuasan": 88,
      "pendapatan": 17
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 2 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 4 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 9
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 60,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 75,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 82,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 35,
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
      "kekuatan_lunak": 18,
      "kekuatan_keras": 32,
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
    "kesehatan": 17,
    "pendidikan": 8,
    "keamanan": 21,
    "keuangan": 8,
    "lingkungan": 60
  }
};
