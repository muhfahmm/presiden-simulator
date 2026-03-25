import { CountryData } from "../../types";

export const qatar: CountryData = {
  "name_en": "Qatar",
  "capital": "Doha",
  "name_id": "Qatar",
  "lon": 51.25,
  "lat": 25.5,
  "flag": "🇶🇦",
  "pop": "10M",
  "budget": 2139,
  "income": "6112",
  "religion": "Islam",
  "ideology": "Monarki",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 32,
    "hydro_plant": 29,
    "solar_plant": 17,
    "thermal_plant": 6,
    "gas_plant": 8,
    "wind_plant": 13,
    "power_grid": 91,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 25,
    "subway": 16,
    "railway": 15,
    "highway": 13,
    "road_quality": 63,
    "sea_port": 11,
    "airport": 2,
    "bus_terminal": 10,
    "helipad": 19,
    "internet_coverage": 86,
    "tech_stack": 79,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 39,
    "uranium": 16,
    "coal": 28,
    "oil": 36,
    "gas": 13,
    "salt": 16,
    "nickel": 25,
    "lithium": 22,
    "aluminum": 8,
    "copper": 2,
    "rare_earth": 4,
    "iron_ore": 14,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 24,
    "car": 35,
    "motorcycle": 38,
    "smelter": 30,
    "concrete_cement": 5,
    "wood": 40,
    "mineral_water": 30,
    "sugar": 13,
    "bread": 31,
    "pharmacy": 15,
    "fertilizer": 35,
    "meat_processing": 16,
    "instant_noodle": 1,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 21,
    "poultry": 12,
    "dairy_cow": 1,
    "beef_cow": 21,
    "sheep_goat": 14,
    "shrimp": 33,
    "fish": 38,
    "shellfish": 8,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 19,
    "wheat": 4,
    "corn": 26,
    "tubers": 23,
    "soy": 37,
    "palm_oil": 32,
    "tea": 26,
    "coffee": 14,
    "cocoa": 15,
    "sugarcane": 18,
    "vegetables": 3,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 7,
    "barracks": 40,
    "armory": 6,
    "tank_hangar": 30,
    "military_academy": 3,
    "budget": 611,
    "personnel": 14032,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 196,
        "apc": 25,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 11,
        "kapal_destroyer": 78,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 133,
        "helikopter_serang": 91,
        "pesawat_pengintai": 2
      },
      "total_unit": 29,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 21,
    "military_air_base": 30,
    "military_naval_base": 11,
    "arms_factory": 30,
    "nuclear_status": false,
    "space_program": 7,
    "cyber_defense": 24,
    "intelligence": 19,
    "strategic_operations": {
      "attack_mission": 1,
      "spy_mission": 20,
      "sabotage_mission": 20,
      "territory_management": 38,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 5,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 17,
      "elementary_school": 34,
      "middle_school": 6,
      "high_school": 29,
      "university": 40,
      "education_institute": 40,
      "laboratory": 8,
      "observatory": 17,
      "research_center": 16,
      "development_center": 39,
      "literacy": 95,
      "research_index": 0
    },
    "health": {
      "large_hospital": 30,
      "small_hospital": 37,
      "diagnostic_center": 2,
      "hospital_beds": 7651,
      "life_expectancy": 39,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 8,
      "racing_circuit": 12,
      "stadium": 17,
      "international_stadium": 39,
      "olympic_score": 9,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 19,
      "court": 32,
      "prosecution_office": 12,
      "police_station": 9,
      "police_car_fleet": 6106,
      "police_academy": 25,
      "corruption_index": 85,
      "security_index": 74,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 33,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 8,
          "kamera_surveillance": 38,
          "pusat_forensik": 1
        },
        "response_time": 34,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 1,
    "tanks": 28,
    "aircraft": 11,
    "naval": 29,
    "air_base": 36,
    "naval_base": 17,
    "military_base": 12,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 12,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 25,
      "satisfaction": 67,
      "revenue": 81
    },
    "corporate": {
      "rate": 6,
      "satisfaction": 52,
      "revenue": 17
    },
    "income": {
      "rate": 14,
      "satisfaction": 61,
      "revenue": 68
    },
    "customs": {
      "rate": 8,
      "satisfaction": 86,
      "revenue": 32
    },
    "environment": {
      "rate": 1,
      "satisfaction": 88,
      "revenue": 3
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 11 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 33 },
    "other": {
      "rate": 17,
      "satisfaction": 93,
      "revenue": 49
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
    "salaryMedis": 70,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 57,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 18,
    "commercial": 9,
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
      "soft_power": 36,
      "hard_power": 19,
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
    "health": 36,
    "education": 29,
    "security": 20,
    "finance": 20,
    "environment": 60
  }
};
