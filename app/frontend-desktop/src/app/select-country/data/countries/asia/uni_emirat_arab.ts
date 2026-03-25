import { CountryData } from "../../types";

export const uni_emirat_arab: CountryData = {
  "name_en": "United Arab Emirates",
  "capital": "Abu Dhabi",
  "name_id": "Uni emirat arab",
  "lon": 54,
  "lat": 24,
  "flag": "🇦🇪",
  "pop": "10M",
  "budget": 4959,
  "income": "14168",
  "religion": "Islam",
  "ideology": "Monarki",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 11,
    "hydro_plant": 40,
    "solar_plant": 15,
    "thermal_plant": 19,
    "gas_plant": 11,
    "wind_plant": 21,
    "power_grid": 64,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 23,
    "subway": 25,
    "railway": 35,
    "highway": 36,
    "road_quality": 80,
    "sea_port": 13,
    "airport": 17,
    "bus_terminal": 14,
    "helipad": 19,
    "internet_coverage": 67,
    "tech_stack": 94,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 5,
    "uranium": 25,
    "coal": 2,
    "oil": 36,
    "gas": 36,
    "salt": 30,
    "nickel": 11,
    "lithium": 11,
    "aluminum": 4,
    "copper": 27,
    "rare_earth": 36,
    "iron_ore": 38,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 13,
    "car": 13,
    "motorcycle": 28,
    "smelter": 35,
    "concrete_cement": 31,
    "wood": 13,
    "mineral_water": 20,
    "sugar": 32,
    "bread": 30,
    "pharmacy": 4,
    "fertilizer": 37,
    "meat_processing": 22,
    "instant_noodle": 11,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 11,
    "poultry": 38,
    "dairy_cow": 27,
    "beef_cow": 35,
    "sheep_goat": 13,
    "shrimp": 39,
    "fish": 26,
    "shellfish": 27,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 20,
    "wheat": 23,
    "corn": 21,
    "tubers": 17,
    "soy": 6,
    "palm_oil": 7,
    "tea": 36,
    "coffee": 12,
    "cocoa": 32,
    "sugarcane": 14,
    "vegetables": 12,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 34,
    "barracks": 1,
    "armory": 16,
    "tank_hangar": 31,
    "military_academy": 15,
    "budget": 1416,
    "personnel": 9335,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 41,
        "apc": 105,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 36,
        "kapal_destroyer": 142,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 194,
        "helikopter_serang": 81,
        "pesawat_pengintai": 2
      },
      "total_unit": 6,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 6,
    "military_air_base": 15,
    "military_naval_base": 28,
    "arms_factory": 12,
    "nuclear_status": false,
    "space_program": 21,
    "cyber_defense": 24,
    "intelligence": 5,
    "strategic_operations": {
      "attack_mission": 32,
      "spy_mission": 23,
      "sabotage_mission": 37,
      "territory_management": 17,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 27,
      "elementary_school": 23,
      "middle_school": 30,
      "high_school": 34,
      "university": 35,
      "education_institute": 36,
      "laboratory": 35,
      "observatory": 9,
      "research_center": 37,
      "development_center": 22,
      "literacy": 91,
      "research_index": 0
    },
    "health": {
      "large_hospital": 25,
      "small_hospital": 32,
      "diagnostic_center": 1,
      "hospital_beds": 8301,
      "life_expectancy": 26,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 3,
      "racing_circuit": 23,
      "stadium": 1,
      "international_stadium": 23,
      "olympic_score": 30,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 17,
      "court": 36,
      "prosecution_office": 12,
      "police_station": 18,
      "police_car_fleet": 5790,
      "police_academy": 22,
      "corruption_index": 87,
      "security_index": 76,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 27,
          "sepeda_motor": 3,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 31,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 22,
          "kamera_surveillance": 35,
          "pusat_forensik": 1
        },
        "response_time": 33,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 5,
    "tanks": 33,
    "aircraft": 28,
    "naval": 13,
    "air_base": 38,
    "naval_base": 23,
    "military_base": 21,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 35,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 40,
      "satisfaction": 67,
      "revenue": 211
    },
    "corporate": {
      "rate": 11,
      "satisfaction": 52,
      "revenue": 81
    },
    "income": {
      "rate": 32,
      "satisfaction": 61,
      "revenue": 204
    },
    "customs": {
      "rate": 17,
      "satisfaction": 86,
      "revenue": 200
    },
    "environment": {
      "rate": 36,
      "satisfaction": 88,
      "revenue": 419
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 25 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 75 },
    "other": {
      "rate": 21,
      "satisfaction": 93,
      "revenue": 227
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 60,
    "salaryGuru": 70,
    "salaryMedis": 80,
    "salaryMiliter": 70
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 75,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 75,
    "subsidyTransport": 50,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 84,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 16,
    "commercial": 8,
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
      "soft_power": 32,
      "hard_power": 29,
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
    "health": 37,
    "education": 16,
    "security": 32,
    "finance": 17,
    "environment": 60
  }
};
