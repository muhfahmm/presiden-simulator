import { CountryData } from "../../types";

export const botswana: CountryData = {
  "name_en": "Botswana",
  "capital": "Gaborone",
  "name_id": "Botswana",
  "lon": 24,
  "lat": -22,
  "flag": "🇧🇼",
  "jumlah_penduduk": 2254126,
  "anggaran": 194,
  "pendapatan_nasional": "556",
  "religion": "Protestan",
  "ideology": "Kapitalisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 35,
    "pembangkit_air": 16,
    "pembangkit_nuklir": 29,
    "jaringan_listrik": 70,
    "pembangkit_surya": 36,
    "pembangkit_termal": 3,
    "pembangkit_angin": 16
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 31,
    "jalur_sepeda": 37,
    "terminal_bus": 23,
    "helipad": 10,
    "jalan_tol": 1,
    "cakupan_internet": 86,
    "jalur_kereta": 4,
    "kualitas_jalan": 90,
    "pelabuhan_laut": 15,
    "kereta_bawah_tanah": 7,
    "indeks_teknologi": 89,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 30,
    "batu_bara": 40,
    "tembaga": 28,
    "gas_alam": 19,
    "emas": 14,
    "bijih_besi": 1,
    "litium": 17,
    "nikel": 30,
    "minyak_bumi": 1,
    "logam_tanah_jarang": 21,
    "garam": 40,
    "kekuatan": 29.660809349923973,
    "uranium": 24
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 8,
    "mobil": 19,
    "semen_beton": 22,
    "pupuk": 15,
    "mie_instan": 38,
    "pengolahan_daging": 32,
    "air_mineral": 15,
    "sepeda_motor": 36,
    "farmasi": 35,
    "semikonduktor": 13,
    "smelter": 7,
    "kekuatan": 3.076011687404966,
    "gula": 17,
    "kayu": 2
  },
  // =============================================================
  // 5. 🐄 PETERNAKAN & PERIKANAN
  // =============================================================

  "sektor_peternakan": {
    "sapi_potong": 11,
    "ayam": 12,
    "sapi_perah": 13,
    "ikan": 34,
    "unggas": 28,
    "domba_kambing": 30,
    "kerang": 16,
    "udang": 28,
    "kekuatan": 18.24560701244298
  },
  // =============================================================
  // 6. 🌾 PERTANIAN & PERKEBUNAN
  // =============================================================

  "sektor_pertanian": {
    "cokelat": 17,
    "kopi": 17,
    "jagung": 29,
    "kelapa_sawit": 28,
    "beras": 15,
    "kedelai": 39,
    "kekuatan": 20.660809349923973,
    "tebu": 27,
    "teh": 4,
    "umbi_umbian": 24,
    "sayur_sayuran": 33,
    "gandum": 16
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 24,
    "gudang_senjata": 32,
    "hangar_tank": 30,
    "akademi_militer": 32,
    "pusat_komando": 38,
    "pangkalan_udara": 18,
    "pangkalan_laut": 32,
    "program_luar_angkasa": 25,
    "pertahanan_siber": 39,
    "anggaran_pertahanan": 55,
    "personel": 5148,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 16,
    "infanteri": 28,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 1,
        "apc": 26,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 22,
        "kapal_destroyer": 32,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 21,
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
    "intel_radar": { "sistem_satelit": 9,
      "jaringan_radar": 10,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 4,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 24,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 7,
          "kamera_pengawas": 8,
          "pusat_forensik": 1
  },
        "waktu_respon": 19,
        "kepercayaan_publik": 50
  },
    "intelijen": 22,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 32,
      "misi_mata_mata": 33,
      "misi_sabotase": 8,
      "manajemen_wilayah": 38,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 39,
      "sd": 14,
      "smp": 7,
      "sma": 24,
      "universitas": 16,
      "lembaga_pendidikan": 24,
      "laboratorium": 2,
      "observatorium": 14,
      "pusat_penelitian": 32,
      "pusat_pengembangan": 35,
      "literasi": 70,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 11,
      "rumah_sakit_kecil": 24,
      "pusat_diagnostik": 7,
      "tempat_tidur_rs": 4319,
      "harapan_hidup": 2,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 2,
      "sirkuit_balap": 2,
      "stadion": 10,
      "stadion_internasional": 1,
      "skor_olimpiade": 19,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 27,
      "pengadilan": 40,
      "kejaksaan": 30,
      "pos_polisi": 14,
      "armada_mobil_polisi": 6809,
      "akademi_polisi": 22,
      "indeks_korupsi": 66,
      "indeks_keamanan": 72
  }
  },

  "un_vote": "Pro",
  // =============================================================
  // 11. 💰 PAJAK & EKONOMI
  // =============================================================

  "pajak": {
    "ppn": {
      "tarif": 14,
      "kepuasan": 67,
      "pendapatan": 4
    },
    "korporasi": {
      "tarif": 7,
      "kepuasan": 52,
      "pendapatan": 3
    },
    "penghasilan": {
      "tarif": 11,
      "kepuasan": 61,
      "pendapatan": 5
    },
    "bea_cukai": {
      "tarif": 23,
      "kepuasan": 86,
      "pendapatan": 9
    },
    "lingkungan": {
      "tarif": 7,
      "kepuasan": 88,
      "pendapatan": 3
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 3 },
    "lainnya": {
      "tarif": 13,
      "kepuasan": 93,
      "pendapatan": 4
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 40,
    "gaji_guru": 50,
    "gaji_medis": 40,
    "gaji_militer": 40
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 50,
    "subsidi_pendidikan": 50,
    "subsidi_umkm": 50,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 16000,
    "harga_daging_sapi": 104100,
    "harga_ayam": 41000,
    "harga_minyak_goreng": 15400,
    "harga_gula": 20160,
    "harga_telur": 24880,
    "harga_bbm": 21400,
    "harga_listrik": 1280,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 677460
  },
  // =============================================================
  // 14. 📊 PERMINTAAN & KEBUTUHAN RAKYAT
  // =============================================================

  "permintaan": {
    "kepuasan": 68,
    "permintaan_utama": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "perumahan": 40,
    "komersial": 21,
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
      "kekuatan_lunak": 13,
      "kekuatan_keras": 15,
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
    "kesehatan": 20,
    "pendidikan": 16,
    "keamanan": 9,
    "keuangan": 18,
    "lingkungan": 60
  }
};
