import { CountryData } from "../../types/_index";

export const djibouti: CountryData = {
  "name_en": "Djibouti",
  "capital": "Djibouti",
  "name_id": "Djibouti",
  "lon": 43,
  "lat": 11.5,
  "flag": "🇩🇯",
  "jumlah_penduduk": 958920,
  "anggaran": 39,
  "pendapatan_nasional": "111",
  "religion": "Islam",
  "ideology": "Konservatisme",
  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN
  // =============================================================

  "sektor_listrik": {
    "pembangkit_gas": 29,
    "pembangkit_air": 19,
    "pembangkit_nuklir": 5,
    "jaringan_listrik": 56,
    "pembangkit_surya": 25,
    "pembangkit_termal": 15,
    "pembangkit_angin": 5
  },
  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR
  // =============================================================

  "infrastruktur": {
    "bandara": 14,
    "jalur_sepeda": 5,
    "terminal_bus": 13,
    "helipad": 3,
    "jalan_tol": 8,
    "cakupan_internet": 64,
    "jalur_kereta": 3,
    "kualitas_jalan": 90,
    "pelabuhan_laut": 3,
    "kereta_bawah_tanah": 35,
    "indeks_teknologi": 70,
    "akses_air": 74
  },
  // =============================================================
  // 3. ⛏️ EKSTRAKSI & ENERGI
  // =============================================================

  "sektor_ekstraksi": {
    "aluminium": 1,
    "batu_bara": 2,
    "tembaga": 40,
    "gas_alam": 22,
    "emas": 27,
    "bijih_besi": 13,
    "litium": 2,
    "nikel": 30,
    "minyak_bumi": 33,
    "logam_tanah_jarang": 26,
    "garam": 24,
    "kekuatan": 29.660809349923973,
    "uranium": 20
  },
  // =============================================================
  // 4. 🏭 PENGOLAHAN & MANUFAKTUR
  // =============================================================

  "sektor_manufaktur": {
    "roti": 9,
    "mobil": 23,
    "semen_beton": 9,
    "pupuk": 11,
    "mie_instan": 2,
    "pengolahan_daging": 6,
    "air_mineral": 36,
    "sepeda_motor": 24,
    "farmasi": 12,
    "semikonduktor": 16,
    "smelter": 28,
    "kekuatan": 3.076011687404966,
    "gula": 26,
    "kayu": 34
  },
  // =============================================================
  // 5. 🌾 AGRI & PETERNAKAN
  // =============================================================

  "sektor_agri_peternakan": {
    "ayam_unggas": 13.5,
    "sapi_perah": 7,
    "sapi_potong": 29,
    "domba_kambing": 17,
    "udang_kerang": 32.5,
    "ikan": 2,
    "padi": 8,
    "gandum_jagung": 15.5,
    "sayur_umbi": 21.0,
    "kedelai": 25,
    "kelapa_sawit": 15,
    "kopi_teh_kakao": 4.3,
    "kekuatan": 20.0
  },
  // =============================================================
  // 7. 🛡️ MANAJEMEN PERTAHANAN
  // =============================================================

  "sektor_pertahanan": {
    "penjara": 11,
    "gudang_senjata": 1,
    "hangar_tank": 27,
    "akademi_militer": 11,
    "pusat_komando": 21,
    "pangkalan_udara": 9,
    "pangkalan_laut": 12,
    "program_luar_angkasa": 26,
    "pertahanan_siber": 29,
    "anggaran_pertahanan": 11,
    "personel": 6204,
    "kekuatan": 16.660809349923973
  },
  // =============================================================
  // 8. ⚔️ SEKTOR ARMADA TEMPUR NASIONAL
  // =============================================================

  "sektor_armada": {
    "barak": 38,
    "infanteri": 6,
    "penerjun_payung": 0,
    "pasukan_khusus": 0,
    "darat": {
        "tank_tempur_utama": 149,
        "apc": 73,
        "artileri_berat": 26
  },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 195,
        "kapal_selam_nuklir": 0
  },
      "udara": {
        "jet_tempur_siluman": 152,
        "helikopter_serang": 52,
        "pesawat_pengintai": 2
  },
      "total_unit": 4,
      "kesiapan": 98
  },
  // =============================================================
  // 9. 🛡️ SEKTOR STRATEGIS & KEAMANAN PUBLIK
  // =============================================================

  "sektor_keamanan": {
    "intel_radar": { "sistem_satelit": 2,
      "jaringan_radar": 4,
      "operasi_siber": 2
  },
    "armada_polisi": { "patroli_lantas": {
          "mobil_patroli": 24,
          "sepeda_motor": 40,
          "unit_k9": 23
  },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
  },
        "pusat_komando": {
          "kantor_polisi": 29,
          "kamera_pengawas": 40,
          "pusat_forensik": 1
  },
        "waktu_respon": 14,
        "kepercayaan_publik": 50
  },
    "intelijen": 5,
    "status_nuklir": false,
    "operasi_strategis": { "misi_serangan": 7,
      "misi_mata_mata": 1,
      "misi_sabotase": 4,
      "manajemen_wilayah": 2,
      "program_nuklir": 0
  }
  },
  // =============================================================
  // 10. 🏥 SOSIAL & PELAYANAN PUBLIK
  // =============================================================

  "sektor_sosial": {
    "pendidikan": {
      "tk": 29,
      "sd": 39,
      "smp": 20,
      "sma": 39,
      "universitas": 34,
      "lembaga_pendidikan": 2,
      "laboratorium": 30,
      "observatorium": 18,
      "pusat_penelitian": 7,
      "pusat_pengembangan": 28,
      "literasi": 90,
      "indeks_penelitian": 0
  },
    "kesehatan": {
      "rumah_sakit_besar": 16,
      "rumah_sakit_kecil": 29,
      "pusat_diagnostik": 17,
      "tempat_tidur_rs": 4495,
      "harapan_hidup": 35,
      "indeks_kesehatan": 85
  },
    "olahraga": {
      "kolam_renang": 8,
      "sirkuit_balap": 19,
      "stadion": 34,
      "stadion_internasional": 33,
      "skor_olimpiade": 5,
      "popularitas": 44
  },
    "hukum": {
      "pusat_bantuan_hukum": 16,
      "pengadilan": 40,
      "kejaksaan": 15,
      "pos_polisi": 8,
      "armada_mobil_polisi": 622,
      "akademi_polisi": 26,
      "indeks_korupsi": 87,
      "indeks_keamanan": 75
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
      "pendapatan": 1
    },
    "korporasi": {
      "tarif": 37,
      "kepuasan": 52,
      "pendapatan": 2
    },
    "penghasilan": {
      "tarif": 13,
      "kepuasan": 61,
      "pendapatan": 0
    },
    "bea_cukai": {
      "tarif": 18,
      "kepuasan": 86,
      "pendapatan": 1
    },
    "lingkungan": {
      "tarif": 10,
      "kepuasan": 88,
      "pendapatan": 0
    },
    "transit_sekutu": { "tarif": 5, "kepuasan": 85, "pendapatan": 1 },
    "transit_non_sekutu": { "tarif": 15, "kepuasan": 75, "pendapatan": 1 },
    "lainnya": {
      "tarif": 28,
      "kepuasan": 93,
      "pendapatan": 2
    }
  },
  // =============================================================
  // 12. 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "gaji": {
    "gaji_asn": 50,
    "gaji_guru": 60,
    "gaji_medis": 40,
    "gaji_militer": 50
  },
  "subsidi": {
    "subsidi_energi": 25,
    "subsidi_pangan": 50,
    "subsidi_kesehatan": 25,
    "subsidi_pendidikan": 25,
    "subsidi_umkm": 25,
    "subsidi_transportasi": 25,
    "subsidi_perumahan": 25
  },
  // =============================================================
  // 13. 🛒 HARGA PASAR DOMESTIK
  // =============================================================

  "harga": {
    "harga_beras": 22400,
    "harga_daging_sapi": 208200,
    "harga_ayam": 32800,
    "harga_minyak_goreng": 30800,
    "harga_gula": 20160,
    "harga_telur": 62200,
    "harga_bbm": 10700,
    "harga_listrik": 1600,
    "harga_air": 7280,
    "harga_obat": 221060,
    "harga_pendidikan": 483900
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
      "kekuatan_lunak": 10,
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
    "kesehatan": 28,
    "pendidikan": 16,
    "keamanan": 25,
    "keuangan": 18,
    "lingkungan": 60
  }
};
