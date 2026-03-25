import { CountryData } from "../../types";

export const mesir: CountryData = {
  "name_en": "Egypt",
  "capital": "Cairo",
  "name_id": "Mesir",
  "lon": 30,
  "lat": 27,
  "flag": "🇪🇬",
  "jumlah_penduduk": 98423595,
  "anggaran": 3841,
  "pendapatan_nasional": "10973",
  "religion": "Islam",
  "ideology": "Nasionalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 30,
    "pembangkit_air": 21,
    "pembangkit_nuklir": 3,
    "jaringan_listrik": 67,
    "pembangkit_surya": 31,
    "pembangkit_termal": 20,
    "pembangkit_angin": 5
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 27,
    "jalur_sepeda": 37,
    "terminal_bus": 24,
    "helipad": 24,
    "jalan_tol": 16,
    "cakupan_internet": 88,
    "jalur_kereta": 12,
    "kualitas_jalan": 92,
    "pelabuhan_laut": 80,
    "kereta_bawah_tanah": 17,
    "indeks_teknologi": 78,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 7,
    "batu_bara": 24,
    "tembaga": 37,
    "gas_alam": 3,
    "emas": 17,
    "bijih_besi": 10,
    "litium": 40,
    "nikel": 3,
    "minyak_bumi": 18,
    "logam_tanah_jarang": 24,
    "garam": 30,
    "kekuatan": 29.660809349923973,
    "uranium": 24
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 21,
    "mobil": 16,
    "semen_beton": 13,
    "pupuk": 7,
    "mie_instan": 39,
    "pengolahan_daging": 38,
    "air_mineral": 9,
    "sepeda_motor": 16,
    "farmasi": 18,
    "semikonduktor": 30,
    "smelter": 12,
    "kekuatan": 3.076011687404966,
    "gula": 29,
    "kayu": 21
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 2,
    "ayam": 28,
    "sapi_perah": 17,
    "ikan": 22,
    "unggas": 36,
    "domba_kambing": 26,
    "kerang": 2,
    "udang": 2,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 5,
    "kopi": 39,
    "jagung": 26,
    "kelapa_sawit": 34,
    "beras": 5,
    "kedelai": 4,
    "kekuatan": 20.660809349923973,
    "tebu": 28,
    "teh": 5,
    "umbi_umbian": 20,
    "sayur_sayuran": 60,
    "gandum": 70
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 9,
    "gudang_senjata": 18,
    "hangar_tank": 19,
    "akademi_militer": 27,
    "pusat_komando": 29,
    "pangkalan_udara": 32,
    "pangkalan_laut": 40,
    "program_luar_angkasa": 2,
    "pertahanan_siber": 17,
    "anggaran_pertahanan": 1097,
    "personel": 18783,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 28,
    "infanteri": 37,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 177,
        "apc": 57,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 10,
        "kapal_destroyer": 128,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 32,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2
  },
      "total_unit": 9,
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
          "mobil_patroli": 32,
          "sepeda_motor": 30,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 13,
          "kamera_pengawas": 37,
          "pusat_forensik": 1
  },
        "waktu_respon": 36,
        "kepercayaan_publik": 50
  },
    "intelijen": 17,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 9,
      "misi_mata_mata": 35,
      "misi_sabotase": 31,
      "manajemen_wilayah": 20,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 3,
      "sd": 3,
      "smp": 19,
      "sma": 28,
      "universitas": 30,
      "lembaga_pendidikan": 6,
      "laboratorium": 19,
      "observatorium": 14,
      "pusat_penelitian": 18,
      "pusat_pengembangan": 7,
      "literasi": 67,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 8,
      "rumah_sakit_kecil": 32,
      "pusat_diagnostik": 33,
      "tempat_tidur_rs": 2519,
      "harapan_hidup": 25,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 38,
      "sirkuit_balap": 6,
      "stadion": 31,
      "stadion_internasional": 4,
      "skor_olimpiade": 34,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 12,
      "pengadilan": 3,
      "kejaksaan": 4,
      "pos_polisi": 25,
      "armada_mobil_polisi": 8480,
      "akademi_polisi": 19,
      "indeks_korupsi": 72,
      "indeks_keamanan": 87
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 37,
      "kepuasan": 67,
      "pendapatan": 352
    },
    "korporasi": {
      "tarif": 18,
      "kepuasan": 52,
      "pendapatan": 169
    },
    "penghasilan": {
      "tarif": 10,
      "kepuasan": 61,
      "pendapatan": 62
    },
    "bea_cukai": {
      "tarif": 31,
      "kepuasan": 86,
      "pendapatan": 209
    },
    "lingkungan": {
      "tarif": 20,
      "kepuasan": 88,
      "pendapatan": 160
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 20 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 58 },
    "lainnya": {
      "tarif": 24,
      "kepuasan": 93,
      "pendapatan": 137
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 50,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 83280,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 15400,
    "harga_gula": 14400,
    "harga_telur": 62200,
    "harga_bbm": 14980,
    "harga_listrik": 2240,
    "harga_air": 7280,
    "harga_obat": 126320,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 92,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 31,
    "komersial": 2,
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
      "kekuatan_lunak": 6,
      "kekuatan_keras": 34,
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
    "pendidikan": 16,
    "keamanan": 4,
    "keuangan": 23,
    "lingkungan": 60
  }
};
