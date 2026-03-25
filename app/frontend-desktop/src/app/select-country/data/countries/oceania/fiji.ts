import { CountryData } from "../../types";

export const fiji: CountryData = {
  "name_en": "Fiji",
  "capital": "Suva",
  "name_id": "Fiji",
  "lon": 175,
  "lat": -18,
  "flag": "🇫🇯",
  "jumlah_penduduk": 883483,
  "anggaran": 49,
  "pendapatan_nasional": "139",
  "religion": "Protestan",
  "ideology": "Demokrasi",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 11,
    "pembangkit_surya": 16,
    "pembangkit_termal": 25,
    "pembangkit_gas": 21,
    "pembangkit_angin": 38,
    "jaringan_listrik": 60
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 37,
    "kereta_bawah_tanah": 2,
    "jalur_kereta": 24,
    "jalan_tol": 12,
    "kualitas_jalan": 53,
    "pelabuhan_laut": 25,
    "bandara": 14,
    "terminal_bus": 39,
    "helipad": 19,
    "cakupan_internet": 84,
    "indeks_teknologi": 83,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 8,
    "uranium": 29,
    "batu_bara": 35,
    "minyak_bumi": 15,
    "gas_alam": 35,
    "garam": 17,
    "nikel": 24,
    "litium": 10,
    "aluminium": 7,
    "tembaga": 24,
    "logam_tanah_jarang": 22,
    "bijih_besi": 18,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 25,
    "mobil": 25,
    "sepeda_motor": 39,
    "smelter": 11,
    "semen_beton": 18,
    "kayu": 25,
    "air_mineral": 26,
    "gula": 37,
    "roti": 9,
    "farmasi": 29,
    "pupuk": 23,
    "pengolahan_daging": 9,
    "mie_instan": 22,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 18,
    "unggas": 8,
    "sapi_perah": 26,
    "sapi_potong": 16,
    "domba_kambing": 12,
    "udang": 4,
    "ikan": 9,
    "kerang": 20,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 6,
    "gandum": 19,
    "jagung": 40,
    "umbi_umbian": 37,
    "kedelai": 15,
    "kelapa_sawit": 22,
    "teh": 37,
    "kopi": 28,
    "cokelat": 23,
    "tebu": 26,
    "sayur_sayuran": 29,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 18,
    "gudang_senjata": 32,
    "hangar_tank": 20,
    "akademi_militer": 34,
    "pusat_komando": 32,
    "pangkalan_udara": 25,
    "pangkalan_laut": 28,
    "program_luar_angkasa": 8,
    "pertahanan_siber": 21,
    "anggaran_pertahanan": 13,
    "personel": 15193,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 37,
    "infanteri": 13,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 10,
        "apc": 3,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 14,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 11,
        "helikopter_serang": 23,
        "pesawat_pengintai": 2
      },
      "total_unit": 13,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 26,
      "jaringan_radar": 11,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 16,
          "sepeda_motor": 37,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 33,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 21,
          "kamera_pengawas": 31,
          "pusat_forensik": 1
        },
        "waktu_respon": 13,
        "kepercayaan_publik": 50 },
    "intelijen": 18,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 25,
      "misi_mata_mata": 34,
      "misi_sabotase": 11,
      "manajemen_wilayah": 9,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 13,
      "sd": 36,
      "smp": 17,
      "sma": 29,
      "universitas": 17,
      "lembaga_pendidikan": 30,
      "laboratorium": 15,
      "observatorium": 24,
      "pusat_penelitian": 36,
      "pusat_pengembangan": 12,
      "literasi": 83,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 24,
      "pusat_diagnostik": 11,
      "tempat_tidur_rs": 6862,
      "harapan_hidup": 39,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 17,
      "sirkuit_balap": 32,
      "stadion": 6,
      "stadion_internasional": 20,
      "skor_olimpiade": 20,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 37,
      "pengadilan": 28,
      "kejaksaan": 25,
      "pos_polisi": 7,
      "armada_mobil_polisi": 6507,
      "akademi_polisi": 23,
      "indeks_korupsi": 68,
      "indeks_keamanan": 67
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 31,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 4,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 20,
      "kepuasan": 61,
      "pendapatan": 1
    },
    "bea_cukai": {
      "tarif": 1,
      "kepuasan": 86,
      "pendapatan": 0
    },
    "lingkungan": {
      "tarif": 4,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 1,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 90,
    "gaji_guru": 80,
    "gaji_medis": 90,
    "gaji_militer": 80
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
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
    "harga_beras": 32000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 82000,
    "harga_minyak_goreng": 21560,
    "harga_gula": 14400,
    "harga_telur": 31100,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 157900,
    "harga_pendidikan": 241950
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 85,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 32,
    "komersial": 23,
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
      "kekuatan_lunak": 37,
      "kekuatan_keras": 16,
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
    "pendidikan": 4,
    "keamanan": 17,
    "keuangan": 18,
    "lingkungan": 60
  }
};
