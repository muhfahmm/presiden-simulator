import { CountryData } from "../../types";

export const djibouti: CountryData = {
  "name_en": "Djibouti",
  "capital": "Djibouti",
  "name_id": "Djibouti",
  "lon": 43,
  "lat": 11.5,
  "flag": "🇩🇯",
  "pop": "10M",
  "budget": 39,
  "income": "111",
  "religion": "Islam",
  "ideology": "Konservatisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 29,
    "hydro_plant": 19,
    "nuclear_plant": 5,
    "power_grid": 56,
    "solar_plant": 25,
    "thermal_plant": 15,
    "wind_plant": 5,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 14,
    "bicycle_path": 5,
    "bus_terminal": 13,
    "helipad": 3,
    "highway": 8,
    "internet_coverage": 64,
    "railway": 3,
    "road_quality": 90,
    "sea_port": 3,
    "subway": 35,
    "tech_stack": 70,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 1,
    "coal": 2,
    "copper": 40,
    "gas": 22,
    "gold": 27,
    "iron_ore": 13,
    "lithium": 2,
    "nickel": 30,
    "oil": 33,
    "rare_earth": 26,
    "salt": 24,
    "strength": 29.660809349923973,
    "uranium": 20,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 9,
    "car": 23,
    "concrete_cement": 9,
    "fertilizer": 11,
    "instant_noodle": 2,
    "meat_processing": 6,
    "mineral_water": 36,
    "motorcycle": 24,
    "pharmacy": 12,
    "semiconductor": 16,
    "smelter": 28,
    "strength": 3.076011687404966,
    "sugar": 26,
    "wood": 34,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 29,
    "chicken": 15,
    "dairy_cow": 7,
    "fish": 2,
    "poultry": 12,
    "sheep_goat": 17,
    "shellfish": 36,
    "shrimp": 29,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 7,
    "coffee": 4,
    "corn": 1,
    "palm_oil": 15,
    "rice": 8,
    "soy": 25,
    "strength": 20.660809349923973,
    "sugarcane": 16,
    "tea": 2,
    "tubers": 22,
    "vegetables": 20,
    "wheat": 30,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 11,
    "barracks": 38,
    "armory": 1,
    "tank_hangar": 27,
    "military_academy": 11,
    "budget": 11,
    "personnel": 6204,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 149,
        "apc": 73,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 24,
        "kapal_destroyer": 195,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 152,
        "helikopter_serang": 52,
        "pesawat_pengintai": 2,
      },
      "total_unit": 4,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 21,
    "military_air_base": 9,
    "military_naval_base": 12,
    "arms_factory": 4,
    "nuclear_status": false,
    "space_program": 26,
    "cyber_defense": 29,
    "intelligence": 5,
    "strategic_operations": {
      "attack_mission": 7,
      "spy_mission": 1,
      "sabotage_mission": 4,
      "territory_management": 2,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 4,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 29,
      "elementary_school": 39,
      "middle_school": 20,
      "high_school": 39,
      "university": 34,
      "education_institute": 2,
      "laboratory": 30,
      "observatory": 18,
      "research_center": 7,
      "development_center": 28,
      "literacy": 90,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 16,
      "small_hospital": 29,
      "diagnostic_center": 17,
      "hospital_beds": 4495,
      "life_expectancy": 35,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 8,
      "racing_circuit": 19,
      "stadium": 34,
      "international_stadium": 33,
      "olympic_score": 5,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 16,
      "court": 40,
      "prosecution_office": 15,
      "police_station": 8,
      "police_car_fleet": 622,
      "police_academy": 26,
      "corruption_index": 87,
      "security_index": 75,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 24,
          "sepeda_motor": 40,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 16,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 29,
          "kamera_surveillance": 40,
          "pusat_forensik": 1,
        },
        "response_time": 14,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 6,
    "tanks": 9,
    "aircraft": 15,
    "naval": 14,
    "air_base": 7,
    "naval_base": 15,
    "military_base": 25,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 40,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 18,
      "satisfaction": 67,
      "revenue": 1
    },
    "corporate": {
      "rate": 37,
      "satisfaction": 52,
      "revenue": 2
    },
    "income": {
      "rate": 13,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 18,
      "satisfaction": 86,
      "revenue": 1
    },
    "environment": {
      "rate": 10,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 28,
      "satisfaction": 93,
      "revenue": 2
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 72,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 18,
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
      "soft_power": 10,
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
    "health": 28,
    "education": 16,
    "security": 25,
    "finance": 18,
    "environment": 60,
  }
};
