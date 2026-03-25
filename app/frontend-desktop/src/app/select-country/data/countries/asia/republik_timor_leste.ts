import { CountryData } from "../../types";

export const republik_timor_leste: CountryData = {
  "name_en": "Timor-Leste",
  "capital": "Dili",
  "name_id": "Republik timor-leste",
  "lon": 125.91666666,
  "lat": -8.83333333,
  "flag": "🇹🇱",
  "pop": "10M",
  "budget": 19,
  "income": "56",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 17,
    "hydro_plant": 32,
    "solar_plant": 22,
    "thermal_plant": 5,
    "gas_plant": 37,
    "wind_plant": 37,
    "power_grid": 64,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 27,
    "subway": 10,
    "railway": 40,
    "highway": 14,
    "road_quality": 93,
    "sea_port": 20,
    "airport": 39,
    "bus_terminal": 13,
    "helipad": 28,
    "internet_coverage": 73,
    "tech_stack": 92,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 21,
    "uranium": 9,
    "coal": 10,
    "oil": 2,
    "gas": 4,
    "salt": 22,
    "nickel": 25,
    "lithium": 27,
    "aluminum": 22,
    "copper": 26,
    "rare_earth": 6,
    "iron_ore": 23,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 28,
    "car": 32,
    "motorcycle": 34,
    "smelter": 8,
    "concrete_cement": 32,
    "wood": 36,
    "mineral_water": 1,
    "sugar": 35,
    "bread": 16,
    "pharmacy": 39,
    "fertilizer": 24,
    "meat_processing": 29,
    "instant_noodle": 10,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 6,
    "poultry": 32,
    "dairy_cow": 17,
    "beef_cow": 6,
    "sheep_goat": 2,
    "shrimp": 35,
    "fish": 35,
    "shellfish": 24,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 9,
    "wheat": 16,
    "corn": 32,
    "tubers": 21,
    "soy": 9,
    "palm_oil": 40,
    "tea": 16,
    "coffee": 15,
    "cocoa": 22,
    "sugarcane": 14,
    "vegetables": 38,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 8,
    "barracks": 28,
    "armory": 40,
    "tank_hangar": 27,
    "military_academy": 36,
    "budget": 5,
    "personnel": 25828,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 38,
        "apc": 173,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 15,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 97,
        "helikopter_serang": 47,
        "pesawat_pengintai": 2
      },
      "total_unit": 9,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 35,
    "military_air_base": 2,
    "military_naval_base": 31,
    "arms_factory": 15,
    "nuclear_status": false,
    "space_program": 28,
    "cyber_defense": 32,
    "intelligence": 25,
    "strategic_operations": {
      "attack_mission": 19,
      "spy_mission": 6,
      "sabotage_mission": 23,
      "territory_management": 30,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 8,
      "elementary_school": 7,
      "middle_school": 32,
      "high_school": 8,
      "university": 16,
      "education_institute": 26,
      "laboratory": 36,
      "observatory": 8,
      "research_center": 13,
      "development_center": 19,
      "literacy": 79,
      "research_index": 0
    },
    "health": {
      "large_hospital": 16,
      "small_hospital": 38,
      "diagnostic_center": 35,
      "hospital_beds": 2027,
      "life_expectancy": 32,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 2,
      "racing_circuit": 36,
      "stadium": 23,
      "international_stadium": 6,
      "olympic_score": 9,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 17,
      "court": 13,
      "prosecution_office": 20,
      "police_station": 11,
      "police_car_fleet": 4976,
      "police_academy": 4,
      "corruption_index": 93,
      "security_index": 90,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 2,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 6,
          "kamera_surveillance": 32,
          "pusat_forensik": 1
        },
        "response_time": 18,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 15,
    "tanks": 40,
    "aircraft": 18,
    "naval": 35,
    "air_base": 38,
    "naval_base": 11,
    "military_base": 37,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 20,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 21,
      "satisfaction": 67,
      "revenue": 0
    },
    "corporate": {
      "rate": 3,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 30,
      "satisfaction": 61,
      "revenue": 1
    },
    "customs": {
      "rate": 16,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 16,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 27,
      "satisfaction": 93,
      "revenue": 1
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 60,
    "salaryGuru": 60,
    "salaryMedis": 80,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 75,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 75,
    "subsidyTransport": 50,
    "subsidyRumah": 25
  },

  "demand": {
    "satisfaction": 73,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 4,
    "commercial": 19,
    "industrial": 53
  },

  // =============================================================
  // 6. 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
  // =============================================================

  "geopolitics": {
    "allies": [
      "Amerika Serikat",
      "Uni Eropa"
    ],
    "enemies": [],
    "stance": "Neutral",
    "international_influence": {
      "soft_power": 29,
      "hard_power": 27,
      "diplomatic_prestige": 57
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member"
      },
      {
        "name": "WHO",
        "role": "Member"
      },
      {
        "name": "WTO",
        "role": "Member"
      }
    ],
    },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 35,
    "education": 29,
    "security": 8,
    "finance": 29,
    "environment": 60
  }
};
