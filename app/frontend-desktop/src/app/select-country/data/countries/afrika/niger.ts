import { CountryData } from "../../types";

export const niger: CountryData = {
  "name_en": "Niger",
  "capital": "Niamey",
  "name_id": "Niger",
  "lon": 8,
  "lat": 16,
  "flag": "🇳🇪",
  "pop": "10M",
  "budget": 146,
  "income": "417",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 35,
    "hydro_plant": 23,
    "nuclear_plant": 34,
    "power_grid": 80,
    "solar_plant": 12,
    "thermal_plant": 40,
    "wind_plant": 1,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 35,
    "bicycle_path": 14,
    "bus_terminal": 39,
    "helipad": 38,
    "highway": 40,
    "internet_coverage": 53,
    "railway": 35,
    "road_quality": 73,
    "sea_port": 38,
    "subway": 38,
    "tech_stack": 92,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 8,
    "coal": 25,
    "copper": 38,
    "gas": 19,
    "gold": 21,
    "iron_ore": 9,
    "lithium": 28,
    "nickel": 17,
    "oil": 28,
    "rare_earth": 24,
    "salt": 13,
    "strength": 29.660809349923973,
    "uranium": 18,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 5,
    "car": 29,
    "concrete_cement": 7,
    "fertilizer": 24,
    "instant_noodle": 27,
    "meat_processing": 36,
    "mineral_water": 9,
    "motorcycle": 21,
    "pharmacy": 32,
    "semiconductor": 14,
    "smelter": 6,
    "strength": 3.076011687404966,
    "sugar": 4,
    "wood": 30,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 10,
    "chicken": 37,
    "dairy_cow": 30,
    "fish": 25,
    "poultry": 25,
    "sheep_goat": 2,
    "shellfish": 40,
    "shrimp": 32,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 8,
    "coffee": 15,
    "corn": 32,
    "palm_oil": 37,
    "rice": 1,
    "soy": 24,
    "strength": 20.660809349923973,
    "sugarcane": 1,
    "tea": 27,
    "tubers": 38,
    "vegetables": 33,
    "wheat": 37,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 32,
    "barracks": 2,
    "armory": 18,
    "tank_hangar": 20,
    "military_academy": 19,
    "budget": 19,
    "personnel": 10472,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 87,
        "apc": 136,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 27,
        "kapal_destroyer": 95,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 38,
        "helikopter_serang": 67,
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
    "command_center": 32,
    "military_air_base": 24,
    "military_naval_base": 25,
    "arms_factory": 29,
    "nuclear_status": false,
    "space_program": 39,
    "cyber_defense": 16,
    "intelligence": 2,
    "strategic_operations": {
      "attack_mission": 5,
      "spy_mission": 26,
      "sabotage_mission": 38,
      "territory_management": 35,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 3,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 13,
      "elementary_school": 34,
      "middle_school": 7,
      "high_school": 15,
      "university": 1,
      "education_institute": 19,
      "laboratory": 23,
      "observatory": 40,
      "research_center": 10,
      "development_center": 7,
      "literacy": 72,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 3,
      "small_hospital": 11,
      "diagnostic_center": 14,
      "hospital_beds": 4579,
      "life_expectancy": 30,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 22,
      "racing_circuit": 35,
      "stadium": 24,
      "international_stadium": 1,
      "olympic_score": 18,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 24,
      "court": 35,
      "prosecution_office": 13,
      "police_station": 9,
      "police_car_fleet": 8807,
      "police_academy": 16,
      "corruption_index": 69,
      "security_index": 81,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 30,
          "sepeda_motor": 6,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 22,
          "kamera_surveillance": 34,
          "pusat_forensik": 1,
        },
        "response_time": 23,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 36,
    "tanks": 39,
    "aircraft": 4,
    "naval": 7,
    "air_base": 9,
    "naval_base": 9,
    "military_base": 26,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 2,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 38,
      "satisfaction": 67,
      "revenue": 7
    },
    "corporate": {
      "rate": 30,
      "satisfaction": 52,
      "revenue": 5
    },
    "income": {
      "rate": 38,
      "satisfaction": 61,
      "revenue": 8
    },
    "customs": {
      "rate": 15,
      "satisfaction": 86,
      "revenue": 5
    },
    "environment": {
      "rate": 27,
      "satisfaction": 88,
      "revenue": 5
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 27,
      "satisfaction": 93,
      "revenue": 10
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 65,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 32,
    "commercial": 5,
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
      "soft_power": 18,
      "hard_power": 5,
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
    "health": 23,
    "education": 5,
    "security": 34,
    "finance": 1,
    "environment": 60,
  }
};
