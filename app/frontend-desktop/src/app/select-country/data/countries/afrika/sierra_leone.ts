import { CountryData } from "../../types";

export const sierra_leone: CountryData = {
  "name_en": "Sierra Leone",
  "capital": "Freetown",
  "name_id": "Sierra leone",
  "lon": -11.5,
  "lat": 8.5,
  "flag": "🇸🇱",
  "pop": "10M",
  "budget": 39,
  "income": "111",
  "religion": "Islam",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 13,
    "hydro_plant": 27,
    "nuclear_plant": 23,
    "power_grid": 85,
    "solar_plant": 7,
    "thermal_plant": 17,
    "wind_plant": 24,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 22,
    "bicycle_path": 37,
    "bus_terminal": 7,
    "helipad": 12,
    "highway": 24,
    "internet_coverage": 76,
    "railway": 23,
    "road_quality": 80,
    "sea_port": 32,
    "subway": 4,
    "tech_stack": 55,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 26,
    "coal": 23,
    "copper": 28,
    "gas": 39,
    "gold": 40,
    "iron_ore": 21,
    "lithium": 38,
    "nickel": 11,
    "oil": 13,
    "rare_earth": 3,
    "salt": 24,
    "strength": 29.660809349923973,
    "uranium": 36,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 9,
    "car": 29,
    "concrete_cement": 36,
    "fertilizer": 11,
    "instant_noodle": 11,
    "meat_processing": 10,
    "mineral_water": 7,
    "motorcycle": 11,
    "pharmacy": 4,
    "semiconductor": 38,
    "smelter": 10,
    "strength": 3.076011687404966,
    "sugar": 29,
    "wood": 40,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 30,
    "chicken": 26,
    "dairy_cow": 4,
    "fish": 28,
    "poultry": 22,
    "sheep_goat": 33,
    "shellfish": 9,
    "shrimp": 12,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 36,
    "coffee": 18,
    "corn": 9,
    "palm_oil": 15,
    "rice": 20,
    "soy": 11,
    "strength": 20.660809349923973,
    "sugarcane": 13,
    "tea": 23,
    "tubers": 35,
    "vegetables": 25,
    "wheat": 23,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 17,
    "barracks": 30,
    "armory": 7,
    "tank_hangar": 32,
    "military_academy": 23,
    "budget": 11,
    "personnel": 25678,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 129,
        "apc": 183,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 5,
        "kapal_destroyer": 77,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 107,
        "helikopter_serang": 169,
        "pesawat_pengintai": 2,
      },
      "total_unit": 32,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 27,
    "military_naval_base": 11,
    "arms_factory": 30,
    "nuclear_status": false,
    "space_program": 38,
    "cyber_defense": 14,
    "intelligence": 28,
    "strategic_operations": {
      "attack_mission": 30,
      "spy_mission": 4,
      "sabotage_mission": 29,
      "territory_management": 33,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 1,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 2,
      "elementary_school": 34,
      "middle_school": 22,
      "high_school": 32,
      "university": 2,
      "education_institute": 31,
      "laboratory": 28,
      "observatory": 4,
      "research_center": 26,
      "development_center": 11,
      "literacy": 61,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 32,
      "small_hospital": 28,
      "diagnostic_center": 20,
      "hospital_beds": 8251,
      "life_expectancy": 16,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 26,
      "racing_circuit": 14,
      "stadium": 21,
      "international_stadium": 11,
      "olympic_score": 15,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 2,
      "court": 34,
      "prosecution_office": 17,
      "police_station": 14,
      "police_car_fleet": 2557,
      "police_academy": 8,
      "corruption_index": 82,
      "security_index": 79,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 24,
          "sepeda_motor": 19,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 15,
          "helikopter_polisi": 29,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 22,
          "kamera_surveillance": 24,
          "pusat_forensik": 1,
        },
        "response_time": 1,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 35,
    "tanks": 31,
    "aircraft": 18,
    "naval": 9,
    "air_base": 6,
    "naval_base": 34,
    "military_base": 25,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 8,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 33,
      "satisfaction": 67,
      "revenue": 2
    },
    "corporate": {
      "rate": 20,
      "satisfaction": 52,
      "revenue": 1
    },
    "income": {
      "rate": 23,
      "satisfaction": 61,
      "revenue": 1
    },
    "customs": {
      "rate": 14,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 40,
      "satisfaction": 88,
      "revenue": 3
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 14,
      "satisfaction": 93,
      "revenue": 1
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 67,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 9,
    "commercial": 30,
    "industrial": 53,
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
      "soft_power": 40,
      "hard_power": 3,
      "diplomatic_prestige": 57,
    },
    "international_orgs": [
      {
        "name": "PBB (UN)",
        "role": "Member",
      },
      {
        "name": "WHO",
        "role": "Member",
      },
      {
        "name": "WTO",
        "role": "Member",
      }
    ],
    },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 40,
    "education": 3,
    "security": 11,
    "finance": 29,
    "environment": 60,
  }
};
