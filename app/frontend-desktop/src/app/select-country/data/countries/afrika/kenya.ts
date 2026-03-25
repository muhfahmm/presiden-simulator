import { CountryData } from "../../types";

export const kenya: CountryData = {
  "name_en": "Kenya",
  "capital": "Nairobi",
  "name_id": "Kenya",
  "lon": 38,
  "lat": 1,
  "flag": "🇰🇪",
  "jumlah_penduduk": 51393010,
  "anggaran": 1070,
  "pendapatan_nasional": "3056",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 26,
    "pembangkit_air": 13,
    "pembangkit_nuklir": 8,
    "jaringan_listrik": 85,
    "pembangkit_surya": 18,
    "pembangkit_termal": 7,
    "pembangkit_angin": 9
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 6,
    "jalur_sepeda": 36,
    "terminal_bus": 9,
    "helipad": 3,
    "jalan_tol": 17,
    "cakupan_internet": 85,
    "jalur_kereta": 39,
    "kualitas_jalan": 65,
    "pelabuhan_laut": 1,
    "kereta_bawah_tanah": 13,
    "indeks_teknologi": 52,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 10,
    "batu_bara": 7,
    "tembaga": 5,
    "gas_alam": 8,
    "emas": 7,
    "bijih_besi": 8,
    "litium": 4,
    "nikel": 14,
    "minyak_bumi": 23,
    "logam_tanah_jarang": 28,
    "garam": 20,
    "kekuatan": 29.660809349923973,
    "uranium": 10
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 25,
    "mobil": 30,
    "semen_beton": 9,
    "pupuk": 7,
    "mie_instan": 15,
    "pengolahan_daging": 34,
    "air_mineral": 36,
    "sepeda_motor": 17,
    "farmasi": 12,
    "semikonduktor": 14,
    "smelter": 29,
    "kekuatan": 3.076011687404966,
    "gula": 2,
    "kayu": 40
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 16,
    "ayam": 10,
    "sapi_perah": 33,
    "ikan": 7,
    "unggas": 31,
    "domba_kambing": 36,
    "kerang": 38,
    "udang": 19,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 3,
    "kopi": 70,
    "jagung": 10,
    "kelapa_sawit": 4,
    "beras": 26,
    "kedelai": 35,
    "kekuatan": 20.660809349923973,
    "tebu": 40,
    "teh": 85,
    "umbi_umbian": 14,
    "sayur_sayuran": 32,
    "gandum": 11
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 33,
    "gudang_senjata": 7,
    "hangar_tank": 13,
    "akademi_militer": 33,
    "pusat_komando": 9,
    "pangkalan_udara": 17,
    "pangkalan_laut": 10,
    "program_luar_angkasa": 30,
    "pertahanan_siber": 19,
    "anggaran_pertahanan": 305,
    "personel": 22851,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 15,
    "infanteri": 11,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 15,
        "apc": 26,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 16,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 34,
        "helikopter_serang": 18,
        "pesawat_pengintai": 2
  },
      "total_unit": 31,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 20,
      "jaringan_radar": 2,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 24,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 11,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 27,
          "kamera_pengawas": 9,
          "pusat_forensik": 1
  },
        "waktu_respon": 16,
        "kepercayaan_publik": 50
  },
    "intelijen": 32,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 39,
      "misi_mata_mata": 34,
      "misi_sabotase": 39,
      "manajemen_wilayah": 24,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 17,
      "sd": 17,
      "smp": 16,
      "sma": 12,
      "universitas": 40,
      "lembaga_pendidikan": 35,
      "laboratorium": 27,
      "observatorium": 20,
      "pusat_penelitian": 34,
      "pusat_pengembangan": 18,
      "literasi": 57,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 36,
      "rumah_sakit_kecil": 6,
      "pusat_diagnostik": 20,
      "tempat_tidur_rs": 1083,
      "harapan_hidup": 37,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 4,
      "sirkuit_balap": 35,
      "stadion": 26,
      "stadion_internasional": 5,
      "skor_olimpiade": 30,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 9,
      "pengadilan": 14,
      "kejaksaan": 40,
      "pos_polisi": 31,
      "armada_mobil_polisi": 7884,
      "akademi_polisi": 8,
      "indeks_korupsi": 69,
      "indeks_keamanan": 93
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
      "pendapatan": 55
    },
    "korporasi": {
      "tarif": 30,
      "kepuasan": 52,
      "pendapatan": 95
    },
    "penghasilan": {
      "tarif": 24,
      "kepuasan": 61,
      "pendapatan": 49
    },
    "bea_cukai": {
      "tarif": 35,
      "kepuasan": 86,
      "pendapatan": 78
    },
    "lingkungan": {
      "tarif": 6,
      "kepuasan": 88,
      "pendapatan": 15
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 6 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 17 },
    "lainnya": {
      "tarif": 3,
      "kepuasan": 93,
      "pendapatan": 8
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 60
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 50,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 52050,
    "harga_ayam": 57400,
    "harga_minyak_goreng": 30800,
    "harga_gula": 28800,
    "harga_telur": 43540,
    "harga_bbm": 14980,
    "harga_listrik": 1600,
    "harga_air": 4160,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 53,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 12,
    "komersial": 31,
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
      "kekuatan_lunak": 31,
      "kekuatan_keras": 18,
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
    "kesehatan": 27,
    "pendidikan": 5,
    "keamanan": 40,
    "keuangan": 23,
    "lingkungan": 60
  }
};
