import { CountryData } from "../../types";

export const pantai_gading: CountryData = {
  "name_en": "Ivory Coast",
  "capital": "Yamoussoukro",
  "name_id": "Pantai gading",
  "lon": -5,
  "lat": 8,
  "flag": "🇨🇮",
  "pop": "10M",
  "budget": 681,
  "income": "1945",
  "religion": "Islam",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 6,
    "hydro_plant": 4,
    "nuclear_plant": 10,
    "power_grid": 59,
    "solar_plant": 5,
    "thermal_plant": 36,
    "wind_plant": 20,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 13,
    "bicycle_path": 8,
    "bus_terminal": 19,
    "helipad": 34,
    "highway": 23,
    "internet_coverage": 88,
    "railway": 17,
    "road_quality": 63,
    "sea_port": 4,
    "subway": 1,
    "tech_stack": 62,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 7,
    "coal": 15,
    "copper": 36,
    "gas": 38,
    "gold": 16,
    "iron_ore": 2,
    "lithium": 12,
    "nickel": 9,
    "oil": 33,
    "rare_earth": 27,
    "salt": 24,
    "strength": 29.660809349923973,
    "uranium": 4,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 16,
    "car": 30,
    "concrete_cement": 32,
    "fertilizer": 40,
    "instant_noodle": 10,
    "meat_processing": 19,
    "mineral_water": 26,
    "motorcycle": 40,
    "pharmacy": 13,
    "semiconductor": 6,
    "smelter": 4,
    "strength": 3.076011687404966,
    "sugar": 34,
    "wood": 21,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 29,
    "chicken": 22,
    "dairy_cow": 4,
    "fish": 39,
    "poultry": 38,
    "sheep_goat": 23,
    "shellfish": 27,
    "shrimp": 10,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 37,
    "coffee": 15,
    "corn": 18,
    "palm_oil": 31,
    "rice": 32,
    "soy": 2,
    "strength": 20.660809349923973,
    "sugarcane": 30,
    "tea": 36,
    "tubers": 34,
    "vegetables": 29,
    "wheat": 21,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 17,
    "barracks": 28,
    "armory": 19,
    "tank_hangar": 24,
    "military_academy": 3,
    "budget": 3048,
    "personnel": 23769,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 140,
        "apc": 24,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 82,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 36,
        "helikopter_serang": 189,
        "pesawat_pengintai": 2,
      },
      "total_unit": 6,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 37,
    "military_air_base": 26,
    "military_naval_base": 31,
    "arms_factory": 36,
    "nuclear_status": false,
    "space_program": 38,
    "cyber_defense": 22,
    "intelligence": 38,
    "strategic_operations": {
      "attack_mission": 8,
      "spy_mission": 3,
      "sabotage_mission": 31,
      "territory_management": 17,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 4,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 6,
      "elementary_school": 14,
      "middle_school": 12,
      "high_school": 9,
      "university": 36,
      "education_institute": 24,
      "laboratory": 38,
      "observatory": 37,
      "research_center": 16,
      "development_center": 22,
      "literacy": 76,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 35,
      "small_hospital": 38,
      "diagnostic_center": 38,
      "hospital_beds": 7247,
      "life_expectancy": 10,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 14,
      "racing_circuit": 33,
      "stadium": 33,
      "international_stadium": 32,
      "olympic_score": 15,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 20,
      "court": 38,
      "prosecution_office": 5,
      "police_station": 20,
      "police_car_fleet": 787,
      "police_academy": 18,
      "corruption_index": 90,
      "security_index": 64,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 23,
          "sepeda_motor": 4,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 10,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 39,
          "kamera_surveillance": 23,
          "pusat_forensik": 1,
        },
        "response_time": 4,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 5,
    "tanks": 14,
    "aircraft": 1,
    "naval": 35,
    "air_base": 33,
    "naval_base": 35,
    "military_base": 37,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 27,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 36,
      "satisfaction": 67,
      "revenue": 51
    },
    "corporate": {
      "rate": 34,
      "satisfaction": 52,
      "revenue": 63
    },
    "income": {
      "rate": 4,
      "satisfaction": 61,
      "revenue": 3
    },
    "customs": {
      "rate": 23,
      "satisfaction": 86,
      "revenue": 21
    },
    "environment": {
      "rate": 25,
      "satisfaction": 88,
      "revenue": 50
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 4 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 11 },
    "other": {
      "rate": 7,
      "satisfaction": 93,
      "revenue": 6
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 73,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 17,
    "commercial": 20,
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
      "soft_power": 12,
      "hard_power": 1,
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
    "health": 21,
    "education": 27,
    "security": 9,
    "finance": 4,
    "environment": 60,
  }
};
