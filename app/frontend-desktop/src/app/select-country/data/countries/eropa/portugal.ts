import { CountryData } from "../../types";

export const portugal: CountryData = {
  "name_en": "Portugal",
  "capital": "Lisbon",
  "name_id": "Portugal",
  "lon": -8,
  "lat": 39.5,
  "flag": "🇵🇹",
  "pop": "10M",
  "budget": 2722,
  "income": "7778",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 32,
    "hydro_plant": 30,
    "solar_plant": 24,
    "thermal_plant": 30,
    "gas_plant": 17,
    "wind_plant": 37,
    "power_grid": 82,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 18,
    "subway": 1,
    "railway": 16,
    "highway": 6,
    "road_quality": 70,
    "sea_port": 11,
    "airport": 5,
    "bus_terminal": 23,
    "helipad": 19,
    "internet_coverage": 59,
    "tech_stack": 51,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 1,
    "uranium": 17,
    "coal": 30,
    "oil": 10,
    "gas": 17,
    "salt": 23,
    "nickel": 31,
    "lithium": 23,
    "aluminum": 26,
    "copper": 23,
    "rare_earth": 9,
    "iron_ore": 27,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 30,
    "car": 7,
    "motorcycle": 8,
    "smelter": 32,
    "concrete_cement": 14,
    "wood": 1,
    "mineral_water": 6,
    "sugar": 1,
    "bread": 19,
    "pharmacy": 5,
    "fertilizer": 35,
    "meat_processing": 34,
    "instant_noodle": 33,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 37,
    "poultry": 12,
    "dairy_cow": 18,
    "beef_cow": 16,
    "sheep_goat": 21,
    "shrimp": 8,
    "fish": 34,
    "shellfish": 28,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 20,
    "wheat": 16,
    "corn": 26,
    "tubers": 22,
    "soy": 15,
    "palm_oil": 28,
    "tea": 14,
    "coffee": 17,
    "cocoa": 31,
    "sugarcane": 40,
    "vegetables": 8,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 26,
    "barracks": 22,
    "armory": 9,
    "tank_hangar": 8,
    "military_academy": 19,
    "budget": 9,
    "personnel": 11519,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 169,
        "apc": 136,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 1,
        "kapal_destroyer": 168,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 135,
        "helikopter_serang": 136,
        "pesawat_pengintai": 2
      },
      "total_unit": 32,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 39,
    "military_air_base": 3,
    "military_naval_base": 25,
    "arms_factory": 28,
    "nuclear_status": false,
    "space_program": 23,
    "cyber_defense": 20,
    "intelligence": 23,
    "strategic_operations": {
      "attack_mission": 23,
      "spy_mission": 1,
      "sabotage_mission": 18,
      "territory_management": 31,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 0,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 3,
      "elementary_school": 4,
      "middle_school": 24,
      "high_school": 29,
      "university": 30,
      "education_institute": 18,
      "laboratory": 22,
      "observatory": 34,
      "research_center": 32,
      "development_center": 11,
      "literacy": 52,
      "research_index": 0
    },
    "health": {
      "large_hospital": 12,
      "small_hospital": 9,
      "diagnostic_center": 26,
      "hospital_beds": 8574,
      "life_expectancy": 23,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 21,
      "racing_circuit": 35,
      "stadium": 38,
      "international_stadium": 21,
      "olympic_score": 5,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 30,
      "court": 34,
      "prosecution_office": 26,
      "police_station": 12,
      "police_car_fleet": 2351,
      "police_academy": 11,
      "corruption_index": 56,
      "security_index": 80,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 11,
          "sepeda_motor": 18,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 31,
          "helikopter_polisi": 11,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 37,
          "kamera_surveillance": 25,
          "pusat_forensik": 1
        },
        "response_time": 10,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 10,
    "tanks": 32,
    "aircraft": 21,
    "naval": 11,
    "air_base": 27,
    "naval_base": 14,
    "military_base": 7,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 9,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 16,
      "satisfaction": 67,
      "revenue": 114
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52,
      "revenue": 204
    },
    "income": {
      "rate": 16,
      "satisfaction": 61,
      "revenue": 52
    },
    "customs": {
      "rate": 7,
      "satisfaction": 86,
      "revenue": 32
    },
    "environment": {
      "rate": 18,
      "satisfaction": 88,
      "revenue": 99
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 14 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 41 },
    "other": {
      "rate": 28,
      "satisfaction": 93,
      "revenue": 194
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 80,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 33,
    "commercial": 33,
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
    "health": 16,
    "education": 33,
    "security": 9,
    "finance": 12,
    "environment": 60
  }
};
