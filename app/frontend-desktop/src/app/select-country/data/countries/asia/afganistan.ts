import { CountryData } from "../../types";

export const afganistan: CountryData = {
  "name_en": "Afghanistan",
  "capital": "Kabul",
  "name_id": "Afganistan",
  "lon": 69.16,
  "lat": 34.54,
  "flag": "🇦🇫",
  "pop": "34M",
  "budget": 146,
  "income": "417",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 29,
    "hydro_plant": 27,
    "solar_plant": 33,
    "thermal_plant": 1,
    "gas_plant": 5,
    "wind_plant": 27,
    "power_grid": 82,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 9,
    "subway": 28,
    "railway": 19,
    "highway": 17,
    "road_quality": 58,
    "sea_port": 36,
    "airport": 38,
    "bus_terminal": 30,
    "helipad": 17,
    "internet_coverage": 53,
    "tech_stack": 91,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 27,
    "uranium": 32,
    "coal": 28,
    "oil": 9,
    "gas": 12,
    "salt": 26,
    "nickel": 18,
    "lithium": 13,
    "aluminum": 12,
    "copper": 34,
    "rare_earth": 38,
    "iron_ore": 11,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 19,
    "car": 18,
    "motorcycle": 16,
    "smelter": 24,
    "concrete_cement": 13,
    "wood": 2,
    "mineral_water": 35,
    "sugar": 6,
    "bread": 4,
    "pharmacy": 9,
    "fertilizer": 9,
    "meat_processing": 31,
    "instant_noodle": 12,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 30,
    "poultry": 1,
    "dairy_cow": 32,
    "beef_cow": 24,
    "sheep_goat": 4,
    "shrimp": 3,
    "fish": 35,
    "shellfish": 5,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 26,
    "wheat": 2,
    "corn": 1,
    "tubers": 7,
    "soy": 34,
    "palm_oil": 21,
    "tea": 14,
    "coffee": 33,
    "cocoa": 29,
    "sugarcane": 23,
    "vegetables": 10,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 16,
    "barracks": 25,
    "armory": 17,
    "tank_hangar": 7,
    "military_academy": 9,
    "budget": 632,
    "personnel": 20991,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 36,
        "apc": 22,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 29,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 7,
        "helikopter_serang": 16,
        "pesawat_pengintai": 2
      },
      "total_unit": 16,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 34,
    "military_air_base": 28,
    "military_naval_base": 14,
    "arms_factory": 5,
    "nuclear_status": false,
    "space_program": 38,
    "cyber_defense": 22,
    "intelligence": 16,
    "strategic_operations": {
      "attack_mission": 33,
      "spy_mission": 3,
      "sabotage_mission": 9,
      "territory_management": 30,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 8,
      "radar_network": 25,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 30,
      "elementary_school": 21,
      "middle_school": 33,
      "high_school": 11,
      "university": 30,
      "education_institute": 9,
      "laboratory": 28,
      "observatory": 25,
      "research_center": 1,
      "development_center": 13,
      "literacy": 70,
      "research_index": 0
    },
    "health": {
      "large_hospital": 23,
      "small_hospital": 16,
      "diagnostic_center": 25,
      "hospital_beds": 6565,
      "life_expectancy": 24,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 25,
      "racing_circuit": 32,
      "stadium": 11,
      "international_stadium": 33,
      "olympic_score": 27,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 25,
      "court": 33,
      "prosecution_office": 14,
      "police_station": 40,
      "police_car_fleet": 7082,
      "police_academy": 33,
      "corruption_index": 91,
      "security_index": 57,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 28,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 23,
          "helikopter_polisi": 9,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 16,
          "kamera_surveillance": 38,
          "pusat_forensik": 1
        },
        "response_time": 24,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 15,
    "tanks": 7,
    "aircraft": 28,
    "naval": 39,
    "air_base": 12,
    "naval_base": 22,
    "military_base": 33,
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
      "rate": 15,
      "satisfaction": 67,
      "revenue": 2
    },
    "corporate": {
      "rate": 10,
      "satisfaction": 52,
      "revenue": 2
    },
    "income": {
      "rate": 1,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 37,
      "satisfaction": 86,
      "revenue": 12
    },
    "environment": {
      "rate": 12,
      "satisfaction": 88,
      "revenue": 4
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 38,
      "satisfaction": 93,
      "revenue": 11
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 76,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 4,
    "commercial": 11,
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
      "soft_power": 25,
      "hard_power": 22,
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
    "health": 33,
    "education": 28,
    "security": 19,
    "finance": 39,
    "environment": 60
  }
};
