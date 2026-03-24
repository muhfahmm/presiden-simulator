import { CountryData } from "../../types";

export const mesir: CountryData = {
  "name_en": "Egypt",
  "capital": "Cairo",
  "name_id": "Mesir",
  "lon": 30,
  "lat": 27,
  "flag": "🇪🇬",
  "pop": "118M",
  "budget": 3841,
  "income": "10973",
  "religion": "Islam",
  "ideology": "Nasionalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 30,
    "hydro_plant": 21,
    "nuclear_plant": 3,
    "power_grid": 67,
    "solar_plant": 31,
    "thermal_plant": 20,
    "wind_plant": 5,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 27,
    "bicycle_path": 37,
    "bus_terminal": 24,
    "helipad": 24,
    "highway": 16,
    "internet_coverage": 88,
    "railway": 12,
    "road_quality": 92,
    "sea_port": 80,
    "subway": 17,
    "tech_stack": 78,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 7,
    "coal": 24,
    "copper": 37,
    "gas": 3,
    "gold": 17,
    "iron_ore": 10,
    "lithium": 40,
    "nickel": 3,
    "oil": 18,
    "rare_earth": 24,
    "salt": 30,
    "strength": 29.660809349923973,
    "uranium": 24,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 21,
    "car": 16,
    "concrete_cement": 13,
    "fertilizer": 7,
    "instant_noodle": 39,
    "meat_processing": 38,
    "mineral_water": 9,
    "motorcycle": 16,
    "pharmacy": 18,
    "semiconductor": 30,
    "smelter": 12,
    "strength": 3.076011687404966,
    "sugar": 29,
    "wood": 21,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 2,
    "chicken": 28,
    "dairy_cow": 17,
    "fish": 22,
    "poultry": 36,
    "sheep_goat": 26,
    "shellfish": 2,
    "shrimp": 2,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 5,
    "coffee": 39,
    "corn": 26,
    "palm_oil": 34,
    "rice": 5,
    "soy": 4,
    "strength": 20.660809349923973,
    "sugarcane": 28,
    "tea": 5,
    "tubers": 20,
    "vegetables": 60,
    "wheat": 70,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 9,
    "barracks": 28,
    "armory": 18,
    "tank_hangar": 19,
    "military_academy": 27,
    "budget": 1097,
    "personnel": 18783,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 177,
        "apc": 57,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 10,
        "kapal_destroyer": 128,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 32,
        "helikopter_serang": 40,
        "pesawat_pengintai": 2,
      },
      "total_unit": 9,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 29,
    "military_air_base": 32,
    "military_naval_base": 40,
    "arms_factory": 9,
    "nuclear_status": false,
    "space_program": 2,
    "cyber_defense": 17,
    "intelligence": 17,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 35,
      "sabotage_mission": 31,
      "territory_management": 20,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 2,
      "radar_network": 5,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 3,
      "elementary_school": 3,
      "middle_school": 19,
      "high_school": 28,
      "university": 30,
      "education_institute": 6,
      "laboratory": 19,
      "observatory": 14,
      "research_center": 18,
      "development_center": 7,
      "literacy": 67,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 8,
      "small_hospital": 32,
      "diagnostic_center": 33,
      "hospital_beds": 2519,
      "life_expectancy": 25,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 38,
      "racing_circuit": 6,
      "stadium": 31,
      "international_stadium": 4,
      "olympic_score": 34,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 12,
      "court": 3,
      "prosecution_office": 4,
      "police_station": 25,
      "police_car_fleet": 8480,
      "police_academy": 19,
      "corruption_index": 72,
      "security_index": 87,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 32,
          "sepeda_motor": 30,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 12,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 13,
          "kamera_surveillance": 37,
          "pusat_forensik": 1,
        },
        "response_time": 36,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 37,
    "tanks": 10,
    "aircraft": 38,
    "naval": 18,
    "air_base": 9,
    "naval_base": 21,
    "military_base": 2,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 9,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 37,
      "satisfaction": 67,
      "revenue": 352
    },
    "corporate": {
      "rate": 18,
      "satisfaction": 52,
      "revenue": 169
    },
    "income": {
      "rate": 10,
      "satisfaction": 61,
      "revenue": 62
    },
    "customs": {
      "rate": 31,
      "satisfaction": 86,
      "revenue": 209
    },
    "environment": {
      "rate": 20,
      "satisfaction": 88,
      "revenue": 160
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 20 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 58 },
    "other": {
      "rate": 24,
      "satisfaction": 93,
      "revenue": 137
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 92,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 31,
    "commercial": 2,
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
      "soft_power": 6,
      "hard_power": 34,
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
    "health": 30,
    "education": 16,
    "security": 4,
    "finance": 23,
    "environment": 60,
  }
};
