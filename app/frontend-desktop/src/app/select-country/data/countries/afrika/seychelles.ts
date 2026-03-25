import { CountryData } from "../../types";

export const seychelles: CountryData = {
  "name_en": "Seychelles",
  "capital": "Victoria",
  "name_id": "Seychelles",
  "lon": 55.66666666,
  "lat": -4.58333333,
  "flag": "🇸🇨",
  "pop": 96762,
  "budget": 19,
  "income": "56",
  "religion": "Katolik",
  "ideology": "Liberalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 15,
    "hydro_plant": 28,
    "nuclear_plant": 33,
    "power_grid": 94,
    "solar_plant": 33,
    "thermal_plant": 20,
    "wind_plant": 24,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 39,
    "bicycle_path": 38,
    "bus_terminal": 28,
    "helipad": 38,
    "highway": 14,
    "internet_coverage": 67,
    "railway": 4,
    "road_quality": 71,
    "sea_port": 24,
    "subway": 15,
    "tech_stack": 61,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 15,
    "coal": 33,
    "copper": 30,
    "gas": 31,
    "gold": 7,
    "iron_ore": 38,
    "lithium": 16,
    "nickel": 5,
    "oil": 37,
    "rare_earth": 14,
    "salt": 16,
    "strength": 29.660809349923973,
    "uranium": 11,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 25,
    "car": 27,
    "concrete_cement": 24,
    "fertilizer": 13,
    "instant_noodle": 23,
    "meat_processing": 36,
    "mineral_water": 36,
    "motorcycle": 29,
    "pharmacy": 37,
    "semiconductor": 32,
    "smelter": 3,
    "strength": 3.076011687404966,
    "sugar": 31,
    "wood": 28,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 27,
    "chicken": 25,
    "dairy_cow": 2,
    "fish": 25,
    "poultry": 1,
    "sheep_goat": 40,
    "shellfish": 23,
    "shrimp": 38,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 27,
    "coffee": 24,
    "corn": 10,
    "palm_oil": 26,
    "rice": 23,
    "soy": 40,
    "strength": 20.660809349923973,
    "sugarcane": 29,
    "tea": 14,
    "tubers": 28,
    "vegetables": 20,
    "wheat": 10,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 18,
    "barracks": 1,
    "armory": 17,
    "tank_hangar": 9,
    "military_academy": 7,
    "budget": 5,
    "personnel": 17226,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 94,
        "apc": 100,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 18,
        "kapal_destroyer": 106,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 131,
        "helikopter_serang": 95,
        "pesawat_pengintai": 2,
      },
      "total_unit": 19,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 24,
    "military_air_base": 4,
    "military_naval_base": 23,
    "arms_factory": 29,
    "nuclear_status": false,
    "space_program": 19,
    "cyber_defense": 13,
    "intelligence": 9,
    "strategic_operations": {
      "attack_mission": 14,
      "spy_mission": 16,
      "sabotage_mission": 33,
      "territory_management": 38,
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
      "kindergarten": 9,
      "elementary_school": 8,
      "middle_school": 29,
      "high_school": 36,
      "university": 7,
      "education_institute": 28,
      "laboratory": 27,
      "observatory": 27,
      "research_center": 39,
      "development_center": 25,
      "literacy": 84,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 26,
      "small_hospital": 31,
      "diagnostic_center": 23,
      "hospital_beds": 9356,
      "life_expectancy": 31,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 13,
      "racing_circuit": 22,
      "stadium": 39,
      "international_stadium": 19,
      "olympic_score": 33,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 12,
      "court": 4,
      "prosecution_office": 36,
      "police_station": 33,
      "police_car_fleet": 7433,
      "police_academy": 12,
      "corruption_index": 87,
      "security_index": 73,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 39,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 30,
          "helikopter_polisi": 35,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 24,
          "kamera_surveillance": 10,
          "pusat_forensik": 1,
        },
        "response_time": 1,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 4,
    "tanks": 6,
    "aircraft": 27,
    "naval": 25,
    "air_base": 17,
    "naval_base": 30,
    "military_base": 40,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 7,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 9,
      "satisfaction": 67,
      "revenue": 0
    },
    "corporate": {
      "rate": 6,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 27,
      "satisfaction": 61,
      "revenue": 0
    },
    "customs": {
      "rate": 31,
      "satisfaction": 86,
      "revenue": 1
    },
    "environment": {
      "rate": 36,
      "satisfaction": 88,
      "revenue": 1
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 1 },
    "other": {
      "rate": 17,
      "satisfaction": 93,
      "revenue": 0
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 50,
    "salaryGuru": 50,
    "salaryMedis": 50,
    "salaryMiliter": 40
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 25,
    "subsidyRumah": 0
  },

  "demand": {
    "satisfaction": 52,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 15,
    "commercial": 33,
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
      "soft_power": 2,
      "hard_power": 27,
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
    "health": 32,
    "education": 23,
    "security": 10,
    "finance": 27,
    "environment": 60,
  }
};
