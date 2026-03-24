import { CountryData } from "../../types";

export const china: CountryData = {
  "name_en": "China",
  "capital": "Beijing",
  "name_id": "China",
  "lon": 105,
  "lat": 35,
  "flag": "🇨🇳",
  "pop": "10M",
  "budget": 180167,
  "income": "514763",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 10,
    "hydro_plant": 22,
    "solar_plant": 12,
    "thermal_plant": 1,
    "gas_plant": 27,
    "wind_plant": 30,
    "power_grid": 84,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 15,
    "subway": 33,
    "railway": 4,
    "highway": 5,
    "road_quality": 59,
    "sea_port": 12,
    "airport": 24,
    "bus_terminal": 38,
    "helipad": 4,
    "internet_coverage": 60,
    "tech_stack": 86,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 3,
    "uranium": 27,
    "coal": 34,
    "oil": 12,
    "gas": 20,
    "salt": 39,
    "nickel": 11,
    "lithium": 14,
    "aluminum": 8,
    "copper": 27,
    "rare_earth": 34,
    "iron_ore": 22,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 13,
    "car": 8,
    "motorcycle": 39,
    "smelter": 34,
    "concrete_cement": 14,
    "wood": 30,
    "mineral_water": 17,
    "sugar": 29,
    "bread": 7,
    "pharmacy": 27,
    "fertilizer": 38,
    "meat_processing": 24,
    "instant_noodle": 11,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 6,
    "poultry": 15,
    "dairy_cow": 13,
    "beef_cow": 37,
    "sheep_goat": 36,
    "shrimp": 29,
    "fish": 2,
    "shellfish": 18,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 30,
    "wheat": 1,
    "corn": 7,
    "tubers": 28,
    "soy": 24,
    "palm_oil": 38,
    "tea": 6,
    "coffee": 25,
    "cocoa": 22,
    "sugarcane": 34,
    "vegetables": 22,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 32,
    "barracks": 33,
    "armory": 37,
    "tank_hangar": 28,
    "military_academy": 15,
    "budget": 656241,
    "personnel": 24571,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 27,
        "apc": 38,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 28,
        "kapal_destroyer": 9,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 33,
        "helikopter_serang": 32,
        "pesawat_pengintai": 2
      },
      "total_unit": 25,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 19,
    "military_air_base": 1,
    "military_naval_base": 9,
    "arms_factory": 17,
    "nuclear_status": false,
    "space_program": 27,
    "cyber_defense": 28,
    "intelligence": 5,
    "strategic_operations": {
      "attack_mission": 11,
      "spy_mission": 8,
      "sabotage_mission": 3,
      "territory_management": 9,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 35,
      "radar_network": 5,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 37,
      "elementary_school": 33,
      "middle_school": 12,
      "high_school": 34,
      "university": 9,
      "education_institute": 20,
      "laboratory": 3,
      "observatory": 28,
      "research_center": 20,
      "development_center": 27,
      "literacy": 95,
      "research_index": 0
    },
    "health": {
      "large_hospital": 26,
      "small_hospital": 35,
      "diagnostic_center": 11,
      "hospital_beds": 3809,
      "life_expectancy": 3,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 6,
      "racing_circuit": 17,
      "stadium": 31,
      "international_stadium": 5,
      "olympic_score": 37,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 30,
      "court": 23,
      "prosecution_office": 32,
      "police_station": 39,
      "police_car_fleet": 2965,
      "police_academy": 12,
      "corruption_index": 64,
      "security_index": 80,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 18,
          "sepeda_motor": 15,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 35,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 19,
          "kamera_surveillance": 40,
          "pusat_forensik": 1
        },
        "response_time": 32,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 7,
    "tanks": 26,
    "aircraft": 34,
    "naval": 27,
    "air_base": 8,
    "naval_base": 16,
    "military_base": 18,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 10,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 24,
      "satisfaction": 67,
      "revenue": 7003
    },
    "corporate": {
      "rate": 1,
      "satisfaction": 52,
      "revenue": 367
    },
    "income": {
      "rate": 6,
      "satisfaction": 61,
      "revenue": 2324
    },
    "customs": {
      "rate": 35,
      "satisfaction": 86,
      "revenue": 14341
    },
    "environment": {
      "rate": 23,
      "satisfaction": 88,
      "revenue": 5242
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 901 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2703 },
    "other": {
      "rate": 12,
      "satisfaction": 93,
      "revenue": 5219
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 84,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 36,
    "commercial": 18,
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
      "soft_power": 3,
      "hard_power": 30,
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
    "health": 6,
    "education": 24,
    "security": 36,
    "finance": 10,
    "environment": 60
  }
};
