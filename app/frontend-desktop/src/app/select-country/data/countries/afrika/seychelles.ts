import { CountryData } from "../../types";

export const seychelles: CountryData = {
  "name_en": "Seychelles",
  "capital": "Victoria",
  "name_id": "Seychelles",
  "lon": 55.66666666,
  "lat": -4.58333333,
  "flag": "🇸🇨",
  "jumlah_penduduk": 96762,
  "anggaran": 19,
  "pendapatan_nasional": "56",
  "religion": "Katolik",
  "ideology": "Liberalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 15,
    "pembangkit_air": 28,
    "pembangkit_nuklir": 33,
    "jaringan_listrik": 94,
    "pembangkit_surya": 33,
    "pembangkit_termal": 20,
    "pembangkit_angin": 24
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 39,
    "jalur_sepeda": 38,
    "terminal_bus": 28,
    "helipad": 38,
    "jalan_tol": 14,
    "cakupan_internet": 67,
    "jalur_kereta": 4,
    "kualitas_jalan": 71,
    "pelabuhan_laut": 24,
    "kereta_bawah_tanah": 15,
    "indeks_teknologi": 61,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 15,
    "batu_bara": 33,
    "tembaga": 30,
    "gas_alam": 31,
    "emas": 7,
    "bijih_besi": 38,
    "litium": 16,
    "nikel": 5,
    "minyak_bumi": 37,
    "logam_tanah_jarang": 14,
    "garam": 16,
    "kekuatan": 29.660809349923973,
    "uranium": 11
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 25,
    "mobil": 27,
    "semen_beton": 24,
    "pupuk": 13,
    "mie_instan": 23,
    "pengolahan_daging": 36,
    "air_mineral": 36,
    "sepeda_motor": 29,
    "farmasi": 37,
    "semikonduktor": 32,
    "smelter": 3,
    "kekuatan": 3.076011687404966,
    "gula": 31,
    "kayu": 28
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 27,
    "ayam": 25,
    "sapi_perah": 2,
    "ikan": 25,
    "unggas": 1,
    "domba_kambing": 40,
    "kerang": 23,
    "udang": 38,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 27,
    "kopi": 24,
    "jagung": 10,
    "kelapa_sawit": 26,
    "beras": 23,
    "kedelai": 40,
    "kekuatan": 20.660809349923973,
    "tebu": 29,
    "teh": 14,
    "umbi_umbian": 28,
    "sayur_sayuran": 20,
    "gandum": 10
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 18,
    "gudang_senjata": 17,
    "hangar_tank": 9,
    "akademi_militer": 7,
    "pusat_komando": 24,
    "pangkalan_udara": 4,
    "pangkalan_laut": 23,
    "program_luar_angkasa": 19,
    "pertahanan_siber": 13,
    "anggaran_pertahanan": 5,
    "personel": 17226,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 1,
    "infanteri": 4,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 94,
        "apc": 100,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 106,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 131,
        "helikopter_serang": 95,
        "pesawat_pengintai": 2
  },
      "total_unit": 19,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 2,
      "jaringan_radar": 5,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 39,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 30,
          "helikopter_polisi": 35,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 24,
          "kamera_pengawas": 10,
          "pusat_forensik": 1
  },
        "waktu_respon": 1,
        "kepercayaan_publik": 50
  },
    "intelijen": 9,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 14,
      "misi_mata_mata": 16,
      "misi_sabotase": 33,
      "manajemen_wilayah": 38,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 9,
      "sd": 8,
      "smp": 29,
      "sma": 36,
      "universitas": 7,
      "lembaga_pendidikan": 28,
      "laboratorium": 27,
      "observatorium": 27,
      "pusat_penelitian": 39,
      "pusat_pengembangan": 25,
      "literasi": 84,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 26,
      "rumah_sakit_kecil": 31,
      "pusat_diagnostik": 23,
      "tempat_tidur_rs": 9356,
      "harapan_hidup": 31,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 13,
      "sirkuit_balap": 22,
      "stadion": 39,
      "stadion_internasional": 19,
      "skor_olimpiade": 33,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 4,
      "kejaksaan": 36,
      "pos_polisi": 33,
      "armada_mobil_polisi": 7433,
      "akademi_polisi": 12,
      "indeks_korupsi": 87,
      "indeks_keamanan": 73
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 9,
      "kepuasan": 67,
      "pendapatan": 0
    },
    "korporasi": {
      "tarif": 6,
      "kepuasan": 52,
      "pendapatan": 0
    },
    "penghasilan": {
      "tarif": 27,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 36,
      "kepuasan": 88,
      "pendapatan": 1
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 17,
      "kepuasan": 93,
      "pendapatan": 0
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 50,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 0
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 31100,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 5200,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 52,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 15,
    "komersial": 33,
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
      "kekuatan_lunak": 2,
      "kekuatan_keras": 27,
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
    "kesehatan": 32,
    "pendidikan": 23,
    "keamanan": 10,
    "keuangan": 27,
    "lingkungan": 60
  }
};
