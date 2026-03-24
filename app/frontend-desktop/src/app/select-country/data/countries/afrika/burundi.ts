import { CountryData } from "../../types";

export const burundi: CountryData = {
  "name_en": "Burundi",
  "capital": "Gitega",
  "name_id": "Burundi",
  "lon": 30,
  "lat": -3.5,
  "flag": "🇧🇮",
  "pop": "10M",
  "budget": 34,
  "income": "97",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 14,
    "hydro_plant": 33,
    "nuclear_plant": 29,
    "power_grid": 72,
    "solar_plant": 31,
    "thermal_plant": 31,
    "wind_plant": 17,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 11,
    "bicycle_path": 27,
    "bus_terminal": 32,
    "helipad": 2,
    "highway": 24,
    "internet_coverage": 52,
    "railway": 5,
    "road_quality": 66,
    "sea_port": 14,
    "subway": 24,
    "tech_stack": 78,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 16,
    "coal": 21,
    "copper": 27,
    "gas": 40,
    "gold": 7,
    "iron_ore": 15,
    "lithium": 16,
    "nickel": 38,
    "oil": 21,
    "rare_earth": 13,
    "salt": 16,
    "strength": 29.660809349923973,
    "uranium": 18,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 28,
    "car": 13,
    "concrete_cement": 1,
    "fertilizer": 18,
    "instant_noodle": 1,
    "meat_processing": 35,
    "mineral_water": 16,
    "motorcycle": 2,
    "pharmacy": 38,
    "semiconductor": 27,
    "smelter": 14,
    "strength": 3.076011687404966,
    "sugar": 15,
    "wood": 37,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 29,
    "chicken": 11,
    "dairy_cow": 8,
    "fish": 13,
    "poultry": 8,
    "sheep_goat": 26,
    "shellfish": 7,
    "shrimp": 1,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 2,
    "coffee": 9,
    "corn": 36,
    "palm_oil": 4,
    "rice": 11,
    "soy": 34,
    "strength": 20.660809349923973,
    "sugarcane": 2,
    "tea": 39,
    "tubers": 8,
    "vegetables": 36,
    "wheat": 19,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 39,
    "barracks": 30,
    "armory": 20,
    "tank_hangar": 8,
    "military_academy": 28,
    "budget": 24,
    "personnel": 16307,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 15,
        "apc": 30,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 19,
        "kapal_destroyer": 34,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 14,
        "helikopter_serang": 28,
        "pesawat_pengintai": 2,
      },
      "total_unit": 10,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 7,
    "military_air_base": 28,
    "military_naval_base": 37,
    "arms_factory": 37,
    "nuclear_status": false,
    "space_program": 10,
    "cyber_defense": 40,
    "intelligence": 18,
    "strategic_operations": {
      "attack_mission": 7,
      "spy_mission": 17,
      "sabotage_mission": 27,
      "territory_management": 18,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 14,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 9,
      "elementary_school": 21,
      "middle_school": 1,
      "high_school": 34,
      "university": 35,
      "education_institute": 17,
      "laboratory": 14,
      "observatory": 3,
      "research_center": 8,
      "development_center": 28,
      "literacy": 88,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 23,
      "small_hospital": 8,
      "diagnostic_center": 9,
      "hospital_beds": 1828,
      "life_expectancy": 30,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 9,
      "racing_circuit": 3,
      "stadium": 4,
      "international_stadium": 12,
      "olympic_score": 6,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 37,
      "court": 18,
      "prosecution_office": 31,
      "police_station": 9,
      "police_car_fleet": 9272,
      "police_academy": 12,
      "corruption_index": 75,
      "security_index": 59,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 1,
          "sepeda_motor": 32,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 3,
          "helikopter_polisi": 39,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 34,
          "kamera_surveillance": 28,
          "pusat_forensik": 1,
        },
        "response_time": 13,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 28,
    "tanks": 22,
    "aircraft": 1,
    "naval": 28,
    "air_base": 34,
    "naval_base": 33,
    "military_base": 24,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 37,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 5,
      "satisfaction": 67,
      "revenue": 0
    },
    "corporate": {
      "rate": 6,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 1,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 27,
      "satisfaction": 86,
      "revenue": 1
    },
    "environment": {
      "rate": 28,
      "satisfaction": 88,
      "revenue": 2
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 36,
      "satisfaction": 93,
      "revenue": 3
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 55,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 3,
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
      "soft_power": 9,
      "hard_power": 23,
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
    "health": 2,
    "education": 9,
    "security": 23,
    "finance": 37,
    "environment": 60,
  }
};
