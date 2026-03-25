import { CountryData } from "../../types";

export const makau: CountryData = {
  "name_en": "Macau",
  "capital": "N/A",
  "name_id": "Makau",
  "lon": 113.55,
  "lat": 22.16666666,
  "flag": "🇲🇴",
  "jumlah_penduduk": "10M",
  "anggaran": 97,
  "pendapatan_nasional": "278",
  "religion": "Buddha",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_nuklir": 32,
    "pembangkit_air": 24,
    "pembangkit_surya": 39,
    "pembangkit_termal": 36,
    "pembangkit_gas": 7,
    "pembangkit_angin": 2,
    "jaringan_listrik": 66
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "jalur_sepeda": 5,
    "kereta_bawah_tanah": 2,
    "jalur_kereta": 27,
    "jalan_tol": 39,
    "kualitas_jalan": 59,
    "pelabuhan_laut": 28,
    "bandara": 4,
    "terminal_bus": 22,
    "helipad": 16,
    "cakupan_internet": 94,
    "indeks_teknologi": 60,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "emas": 31,
    "uranium": 24,
    "batu_bara": 20,
    "minyak_bumi": 17,
    "gas_alam": 35,
    "garam": 39,
    "nikel": 30,
    "litium": 10,
    "aluminium": 15,
    "tembaga": 38,
    "logam_tanah_jarang": 5,
    "bijih_besi": 39,
    "kekuatan": 29.660809349923973
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "semikonduktor": 33,
    "mobil": 1,
    "sepeda_motor": 26,
    "smelter": 15,
    "semen_beton": 34,
    "kayu": 9,
    "air_mineral": 3,
    "gula": 35,
    "roti": 38,
    "farmasi": 36,
    "pupuk": 26,
    "pengolahan_daging": 28,
    "mie_instan": 4,
    "kekuatan": 3.076011687404966
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "ayam": 1,
    "unggas": 11,
    "sapi_perah": 29,
    "sapi_potong": 22,
    "domba_kambing": 19,
    "udang": 13,
    "ikan": 14,
    "kerang": 32,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "beras": 12,
    "gandum": 6,
    "jagung": 29,
    "umbi_umbian": 33,
    "kedelai": 1,
    "kelapa_sawit": 13,
    "teh": 10,
    "kopi": 22,
    "cokelat": 13,
    "tebu": 25,
    "sayur_sayuran": 1,
    "kekuatan": 20.660809349923973
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 2,
    "gudang_senjata": 38,
    "hangar_tank": 22,
    "akademi_militer": 37,
    "pusat_komando": 29,
    "pangkalan_udara": 33,
    "pangkalan_laut": 40,
    "program_luar_angkasa": 9,
    "pertahanan_siber": 37,
    "anggaran_pertahanan": 27,
    "personel": 23407,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 12,
    "infanteri": 32,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 109,
        "apc": 93,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 22,
        "kapal_destroyer": 35,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_siluman": 80,
        "helikopter_serang": 199,
        "pesawat_pengintai": 2
      },
      "total_unit": 6,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 2,
      "jaringan_radar": 1,
      "operasi_siber": 2 },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 26,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 19,
          "helikopter_polisi": 20,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "kantor_polisi": 25,
          "kamera_pengawas": 37,
          "pusat_forensik": 1
        },
        "waktu_respon": 22,
        "kepercayaan_publik": 50 },
    "intelijen": 37,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 2,
      "misi_mata_mata": 6,
      "misi_sabotase": 15,
      "manajemen_wilayah": 20,
      "program_nuklir": 0 }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 36,
      "sd": 27,
      "smp": 31,
      "sma": 3,
      "universitas": 38,
      "lembaga_pendidikan": 15,
      "laboratorium": 24,
      "observatorium": 3,
      "pusat_penelitian": 24,
      "pusat_pengembangan": 13,
      "literasi": 61,
      "indeks_penelitian": 0
    },
    "kesehatan": {
      "rumah_sakit_besar": 38,
      "rumah_sakit_kecil": 33,
      "pusat_diagnostik": 34,
      "tempat_tidur_rs": 2590,
      "harapan_hidup": 8,
      "indeks_kesehatan": 85
    },
    "olahraga": {
      "kolam_renang": 29,
      "sirkuit_balap": 11,
      "stadion": 27,
      "stadion_internasional": 12,
      "skor_olimpiade": 38,
      "popularitas": 44
    },
    "hukum": {
      "pusat_bantuan_hukum": 23,
      "pengadilan": 33,
      "kejaksaan": 7,
      "pos_polisi": 36,
      "armada_mobil_polisi": 2272,
      "akademi_polisi": 38,
      "indeks_korupsi": 90,
      "indeks_keamanan": 50
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 35,
      "kepuasan": 67,
      "pendapatan": 7
    },
    "korporasi": {
      "tarif": 28,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 18,
      "kepuasan": 61,
      "pendapatan": 2
    },
    "bea_cukai": {
      "tarif": 11,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 28,
      "kepuasan": 88,
      "pendapatan": 5
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 2 },
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
    "gaji_asn": 60,
    "gaji_guru": 70,
    "gaji_medis": 80,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 75,
    "subsidi_kesehatan": 75,
    "subsidi_pendidikan": 75,
    "subsidi_umkm": 75,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 12800,
    "harga_daging_sapi": 52050,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 7700,
    "harga_gula": 7200,
    "harga_telur": 24880,
    "harga_bbm": 8560,
    "harga_listrik": 2240,
    "harga_air": 5200,
    "harga_obat": 157900,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 56,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 24,
    "komersial": 15,
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
      "kekuatan_lunak": 21,
      "kekuatan_keras": 2,
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
    "pendidikan": 22,
    "keamanan": 6,
    "keuangan": 22,
    "lingkungan": 60
  }
};
