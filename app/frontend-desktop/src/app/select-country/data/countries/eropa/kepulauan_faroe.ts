import { CountryData } from "../../types";

export const kepulauan_faroe: CountryData = {
  "name_en": "Faroe Islands",
  "capital": "Tórshavn",
  "name_id": "Kepulauan faroe",
  "lon": -7,
  "lat": 62,
  "flag": "🇫🇴",
  "pop": "10M",
  "budget": 97,
  "income": "278",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 25,
    "hydro_plant": 38,
    "solar_plant": 26,
    "thermal_plant": 29,
    "gas_plant": 1,
    "wind_plant": 6,
    "power_grid": 65,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 20,
    "subway": 26,
    "railway": 7,
    "highway": 33,
    "road_quality": 81,
    "sea_port": 19,
    "airport": 36,
    "bus_terminal": 35,
    "helipad": 34,
    "internet_coverage": 79,
    "tech_stack": 66,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 27,
    "uranium": 3,
    "coal": 1,
    "oil": 13,
    "gas": 20,
    "salt": 21,
    "nickel": 19,
    "lithium": 24,
    "aluminum": 18,
    "copper": 4,
    "rare_earth": 8,
    "iron_ore": 29,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 12,
    "car": 30,
    "motorcycle": 36,
    "smelter": 29,
    "concrete_cement": 30,
    "wood": 16,
    "mineral_water": 11,
    "sugar": 6,
    "bread": 3,
    "pharmacy": 37,
    "fertilizer": 19,
    "meat_processing": 15,
    "instant_noodle": 27,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 1,
    "poultry": 26,
    "dairy_cow": 2,
    "beef_cow": 13,
    "sheep_goat": 29,
    "shrimp": 30,
    "fish": 2,
    "shellfish": 15,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 3,
    "wheat": 36,
    "corn": 28,
    "tubers": 2,
    "soy": 27,
    "palm_oil": 31,
    "tea": 19,
    "coffee": 6,
    "cocoa": 23,
    "sugarcane": 19,
    "vegetables": 32,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 7,
    "barracks": 23,
    "armory": 18,
    "tank_hangar": 38,
    "military_academy": 23,
    "budget": 27,
    "personnel": 23620,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 107,
        "apc": 45,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 77,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 104,
        "helikopter_serang": 142,
        "pesawat_pengintai": 2
      },
      "total_unit": 35,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 8,
    "military_air_base": 2,
    "military_naval_base": 40,
    "arms_factory": 40,
    "nuclear_status": false,
    "space_program": 30,
    "cyber_defense": 3,
    "intelligence": 18,
    "strategic_operations": {
      "attack_mission": 20,
      "spy_mission": 34,
      "sabotage_mission": 26,
      "territory_management": 21,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 3,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 19,
      "elementary_school": 1,
      "middle_school": 20,
      "high_school": 32,
      "university": 40,
      "education_institute": 24,
      "laboratory": 18,
      "observatory": 39,
      "research_center": 13,
      "development_center": 12,
      "literacy": 86,
      "research_index": 0
    },
    "health": {
      "large_hospital": 39,
      "small_hospital": 7,
      "diagnostic_center": 23,
      "hospital_beds": 9763,
      "life_expectancy": 1,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 1,
      "racing_circuit": 39,
      "stadium": 17,
      "international_stadium": 10,
      "olympic_score": 22,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 37,
      "court": 31,
      "prosecution_office": 17,
      "police_station": 39,
      "police_car_fleet": 5067,
      "police_academy": 6,
      "corruption_index": 94,
      "security_index": 68,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 37,
          "sepeda_motor": 29,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 25,
          "helikopter_polisi": 12,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 20,
          "kamera_surveillance": 21,
          "pusat_forensik": 1
        },
        "response_time": 31,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 17,
    "tanks": 5,
    "aircraft": 23,
    "naval": 11,
    "air_base": 40,
    "naval_base": 3,
    "military_base": 34,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 17,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 35,
      "satisfaction": 67,
      "revenue": 4
    },
    "corporate": {
      "rate": 7,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 29,
      "satisfaction": 61,
      "revenue": 8
    },
    "customs": {
      "rate": 30,
      "satisfaction": 86,
      "revenue": 6
    },
    "environment": {
      "rate": 34,
      "satisfaction": 88,
      "revenue": 4
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 1,
      "satisfaction": 93,
      "revenue": 0
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 50,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 37,
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
      "soft_power": 9,
      "hard_power": 16,
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
    "health": 30,
    "education": 32,
    "security": 9,
    "finance": 17,
    "environment": 60
  }
};
