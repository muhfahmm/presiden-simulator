import { CountryData } from "../../types";

export const uzbekistan: CountryData = {
  "name_en": "Uzbekistan",
  "capital": "Tashkent",
  "name_id": "Uzbekistan",
  "lon": 64,
  "lat": 41,
  "flag": "🇺🇿",
  "jumlah_penduduk": 32955400,
  "anggaran": 875,
  "pendapatan_nasional": "2500",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 8,
    "pembangkit_air": 24,
    "pembangkit_surya": 1,
    "pembangkit_termal": 11,
    "pembangkit_gas": 5,
    "pembangkit_angin": 24,
    "jaringan_listrik": 83
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 14,
    "kereta_bawah_tanah": 8,
    "jalur_kereta": 37,
    "jalan_tol": 13,
    "kualitas_jalan": 57,
    "pelabuhan_laut": 2,
    "bandara": 28,
    "terminal_bus": 34,
    "helipad": 29,
    "cakupan_internet": 55,
    "indeks_teknologi": 59,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 22,
    "uranium": 26,
    "batu_bara": 12,
    "minyak_bumi": 36,
    "gas_alam": 38,
    "garam": 6,
    "nikel": 24,
    "litium": 40,
    "aluminium": 7,
    "tembaga": 12,
    "logam_tanah_jarang": 29,
    "bijih_besi": 27,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 25,
    "mobil": 28,
    "sepeda_motor": 34,
    "smelter": 3,
    "semen_beton": 19,
    "kayu": 12,
    "air_mineral": 32,
    "gula": 1,
    "roti": 10,
    "farmasi": 10,
    "pupuk": 25,
    "pengolahan_daging": 12,
    "mie_instan": 40,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 20,
    "unggas": 13,
    "sapi_perah": 8,
    "sapi_potong": 20,
    "domba_kambing": 38,
    "udang": 16,
    "ikan": 13,
    "kerang": 32,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 3,
    "gandum": 14,
    "jagung": 4,
    "umbi_umbian": 14,
    "kedelai": 25,
    "kelapa_sawit": 16,
    "teh": 25,
    "kopi": 21,
    "cokelat": 12,
    "tebu": 2,
    "sayur_sayuran": 1,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 15,
    "gudang_senjata": 30,
    "hangar_tank": 14,
    "akademi_militer": 33,
    "pusat_komando": 37,
    "pangkalan_udara": 11,
    "pangkalan_laut": 33,
    "program_luar_angkasa": 23,
    "pertahanan_siber": 12,
    "anggaran_pertahanan": 250,
    "personel": 20621,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 34,
    "infanteri": 27,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 147,
        "apc": 106,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 12,
        "kapal_destroyer": 155,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 45,
        "helikopter_serang": 48,
        "pesawat_pengintai": 2
      },
      "total_unit": 2,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 0,
      "jaringan_radar": 5,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 6,
          "sepeda_motor": 25,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 26,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 4,
          "kamera_pengawas": 9,
          "pusat_forensik": 1
        },
        "waktu_respon": 18,
        "kepercayaan_publik": 50 },
    "intelijen": 22,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 11,
      "misi_mata_mata": 15,
      "misi_sabotase": 23,
      "manajemen_wilayah": 24,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 31,
      "sd": 18,
      "smp": 36,
      "sma": 40,
      "universitas": 25,
      "lembaga_pendidikan": 1,
      "laboratorium": 20,
      "observatorium": 5,
      "pusat_penelitian": 26,
      "pusat_pengembangan": 40,
      "literasi": 60,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 6,
      "rumah_sakit_kecil": 1,
      "pusat_diagnostik": 34,
      "tempat_tidur_rs": 6333,
      "harapan_hidup": 36,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 37,
      "sirkuit_balap": 3,
      "stadion": 6,
      "stadion_internasional": 26,
      "skor_olimpiade": 29,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 3,
      "pengadilan": 1,
      "kejaksaan": 22,
      "pos_polisi": 3,
      "armada_mobil_polisi": 2015,
      "akademi_polisi": 6,
      "indeks_korupsi": 58,
      "indeks_keamanan": 63
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 18,
      "kepuasan": 67,
      "pendapatan": 39
    },
    "korporasi": {
      "tarif": 32,
      "kepuasan": 52,
      "pendapatan": 74
    },
    "penghasilan": {
      "tarif": 26,
      "kepuasan": 61,
      "pendapatan": 46
    },
    "bea_cukai": {
      "tarif": 6,
      "kepuasan": 86,
      "pendapatan": 8
    },
    "lingkungan": {
      "tarif": 19,
      "kepuasan": 88,
      "pendapatan": 20
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 5 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 14 },
    "lainnya": {
      "tarif": 39,
      "kepuasan": 93,
      "pendapatan": 71
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 70,
    "gaji_guru": 60,
    "gaji_medis": 80,
    "gaji_militer": 70
  },
  "subsidi": {
    "subsidi_energi": 50,
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
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 14400,
    "harga_telur": 24880,
    "harga_bbm": 5350,
    "harga_listrik": 2240,
    "harga_air": 10400,
    "harga_obat": 157900,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 65,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 1,
    "komersial": 37,
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
      "kekuatan_keras": 3,
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
    "kesehatan": 34,
    "pendidikan": 8,
    "keamanan": 24,
    "keuangan": 31,
    "lingkungan": 60
  }
};
