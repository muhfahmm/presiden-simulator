import { CountryData } from "../../types";

export const suriname: CountryData = {
  "name_en": "Suriname",
  "capital": "Paramaribo",
  "name_id": "Suriname",
  "lon": -56,
  "lat": 4,
  "flag": "🇸🇷",
  "pop": "10M",
  "budget": 34,
  "income": "97",
  "religion": "Protestan",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 12,
    "hydro_plant": 3,
    "solar_plant": 9,
    "thermal_plant": 12,
    "gas_plant": 26,
    "wind_plant": 27,
    "power_grid": 70,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 26,
    "subway": 31,
    "railway": 22,
    "highway": 22,
    "road_quality": 81,
    "sea_port": 5,
    "airport": 36,
    "bus_terminal": 39,
    "helipad": 17,
    "internet_coverage": 52,
    "tech_stack": 89,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 28,
    "uranium": 26,
    "coal": 8,
    "oil": 34,
    "gas": 32,
    "salt": 14,
    "nickel": 6,
    "lithium": 34,
    "aluminum": 33,
    "copper": 19,
    "rare_earth": 30,
    "iron_ore": 5,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 30,
    "car": 10,
    "motorcycle": 27,
    "smelter": 9,
    "concrete_cement": 23,
    "wood": 38,
    "mineral_water": 17,
    "sugar": 37,
    "bread": 36,
    "pharmacy": 40,
    "fertilizer": 29,
    "meat_processing": 12,
    "instant_noodle": 13,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 18,
    "poultry": 1,
    "dairy_cow": 37,
    "beef_cow": 4,
    "sheep_goat": 32,
    "shrimp": 2,
    "fish": 23,
    "shellfish": 29,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 22,
    "wheat": 36,
    "corn": 4,
    "tubers": 8,
    "soy": 29,
    "palm_oil": 5,
    "tea": 39,
    "coffee": 20,
    "cocoa": 1,
    "sugarcane": 6,
    "vegetables": 21,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 36,
    "barracks": 16,
    "armory": 18,
    "tank_hangar": 1,
    "military_academy": 5,
    "budget": 150,
    "personnel": 26544,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 125,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 23,
        "kapal_destroyer": 17,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 188,
        "helikopter_serang": 172,
        "pesawat_pengintai": 2
      },
      "total_unit": 37,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 27,
    "military_air_base": 14,
    "military_naval_base": 3,
    "arms_factory": 7,
    "nuclear_status": false,
    "space_program": 31,
    "cyber_defense": 31,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 24,
      "spy_mission": 18,
      "sabotage_mission": 7,
      "territory_management": 17,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 36,
      "elementary_school": 4,
      "middle_school": 9,
      "high_school": 21,
      "university": 28,
      "education_institute": 29,
      "laboratory": 1,
      "observatory": 25,
      "research_center": 6,
      "development_center": 40,
      "literacy": 80,
      "research_index": 0
    },
    "health": {
      "large_hospital": 33,
      "small_hospital": 15,
      "diagnostic_center": 21,
      "hospital_beds": 5672,
      "life_expectancy": 7,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 39,
      "racing_circuit": 30,
      "stadium": 39,
      "international_stadium": 33,
      "olympic_score": 4,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 33,
      "court": 27,
      "prosecution_office": 9,
      "police_station": 7,
      "police_car_fleet": 9880,
      "police_academy": 21,
      "corruption_index": 89,
      "security_index": 82,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 13,
          "sepeda_motor": 16,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 18,
          "helikopter_polisi": 4,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 30,
          "kamera_surveillance": 20,
          "pusat_forensik": 1
        },
        "response_time": 7,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 23,
    "tanks": 8,
    "aircraft": 7,
    "naval": 10,
    "air_base": 17,
    "naval_base": 12,
    "military_base": 40,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 8,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 33,
      "satisfaction": 67,
      "revenue": 1
    },
    "corporate": {
      "rate": 40,
      "satisfaction": 52,
      "revenue": 3
    },
    "income": {
      "rate": 3,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 10,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 38,
      "satisfaction": 88,
      "revenue": 1
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 22,
      "satisfaction": 93,
      "revenue": 1
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
    "residential": 37,
    "commercial": 3,
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
      "soft_power": 1,
      "hard_power": 4,
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
    "health": 4,
    "education": 21,
    "security": 23,
    "finance": 27,
    "environment": 60
  }
};
