import { CountryData } from "../../types";

export const togo: CountryData = {
  "name_en": "Togo",
  "capital": "Lomé",
  "name_id": "Togo",
  "lon": 1.16666666,
  "lat": 8,
  "flag": "🇹🇬",
  "pop": 7889094,
  "budget": 88,
  "income": "250",
  "religion": "Katolik",
  "ideology": "Konservatisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "gas_plant": 34,
    "hydro_plant": 4,
    "nuclear_plant": 37,
    "power_grid": 78,
    "solar_plant": 21,
    "thermal_plant": 30,
    "wind_plant": 27,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "airport": 36,
    "bicycle_path": 22,
    "bus_terminal": 9,
    "helipad": 27,
    "highway": 31,
    "internet_coverage": 90,
    "railway": 20,
    "road_quality": 67,
    "sea_port": 23,
    "subway": 3,
    "tech_stack": 74,
    "water_access": 74,
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "aluminum": 27,
    "coal": 18,
    "copper": 31,
    "gas": 14,
    "gold": 6,
    "iron_ore": 26,
    "lithium": 38,
    "nickel": 30,
    "oil": 2,
    "rare_earth": 19,
    "salt": 10,
    "strength": 29.660809349923973,
    "uranium": 10,
  
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "bread": 35,
    "car": 16,
    "concrete_cement": 4,
    "fertilizer": 30,
    "instant_noodle": 2,
    "meat_processing": 5,
    "mineral_water": 10,
    "motorcycle": 16,
    "pharmacy": 38,
    "semiconductor": 12,
    "smelter": 16,
    "strength": 3.076011687404966,
    "sugar": 38,
    "wood": 4,
  
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "beef_cow": 18,
    "chicken": 4,
    "dairy_cow": 7,
    "fish": 28,
    "poultry": 39,
    "sheep_goat": 2,
    "shellfish": 5,
    "shrimp": 21,
    "strength": 18.24560701244298,
  
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "cocoa": 4,
    "coffee": 28,
    "corn": 2,
    "palm_oil": 27,
    "rice": 35,
    "soy": 32,
    "strength": 20.660809349923973,
    "sugarcane": 40,
    "tea": 9,
    "tubers": 17,
    "vegetables": 5,
    "wheat": 18,
  
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 28,
    "barracks": 12,
    "armory": 16,
    "tank_hangar": 40,
    "military_academy": 25,
    "budget": 25,
    "personnel": 16018,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 21,
        "apc": 155,
        "artileri_berat": 26,
      },
      "laut": {
        "kapal_induk": 7,
        "kapal_destroyer": 122,
        "kapal_selam_nuklir": 0,
      },
      "udara": {
        "jet_tempur_stealth": 117,
        "helikopter_serang": 129,
        "pesawat_pengintai": 2,
      },
      "total_unit": 3,
      "readiness": 98,
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 9,
    "military_air_base": 34,
    "military_naval_base": 39,
    "arms_factory": 40,
    "nuclear_status": false,
    "space_program": 26,
    "cyber_defense": 39,
    "intelligence": 32,
    "strategic_operations": {
      "attack_mission": 19,
      "spy_mission": 23,
      "sabotage_mission": 18,
      "territory_management": 35,
      "nuclear_program": 0,
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 4,
      "cyber_ops": 2,
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 3,
      "elementary_school": 19,
      "middle_school": 11,
      "high_school": 39,
      "university": 13,
      "education_institute": 14,
      "laboratory": 1,
      "observatory": 5,
      "research_center": 39,
      "development_center": 1,
      "literacy": 54,
      "research_index": 0,
    },
    "health": {
      "large_hospital": 20,
      "small_hospital": 15,
      "diagnostic_center": 17,
      "hospital_beds": 911,
      "life_expectancy": 27,
      "healthcare_index": 85,
    },
    "sports": {
      "swimming_pool": 9,
      "racing_circuit": 19,
      "stadium": 38,
      "international_stadium": 2,
      "olympic_score": 26,
      "popularity": 44,
    },
    "law": {
      "legal_aid_center": 37,
      "court": 27,
      "prosecution_office": 39,
      "police_station": 8,
      "police_car_fleet": 4480,
      "police_academy": 4,
      "corruption_index": 80,
      "security_index": 81,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 36,
          "sepeda_motor": 16,
          "unit_k9": 23,
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62,
        },
        "pusat_komando": {
          "stasiun_polisi": 28,
          "kamera_surveillance": 18,
          "pusat_forensik": 1,
        },
        "response_time": 11,
        "public_trust": 50,
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 9,
    "tanks": 18,
    "aircraft": 3,
    "naval": 20,
    "air_base": 21,
    "naval_base": 38,
    "military_base": 39,
    "nuclear": false,
    "strength": 10,
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 26,
    "sell_commodity": 409,
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 30,
      "satisfaction": 67,
      "revenue": 5
    },
    "corporate": {
      "rate": 7,
      "satisfaction": 52,
      "revenue": 0
    },
    "income": {
      "rate": 5,
      "satisfaction": 61,
      "revenue": 1
    },
    "customs": {
      "rate": 28,
      "satisfaction": 86,
      "revenue": 4
    },
    "environment": {
      "rate": 1,
      "satisfaction": 88,
      "revenue": 0
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 2 },
    "other": {
      "rate": 35,
      "satisfaction": 93,
      "revenue": 8
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 40,
    "salaryGuru": 40,
    "salaryMedis": 50,
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 25,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 25,
    "subsidyRumah": 25
  },

  "demand": {
    "satisfaction": 85,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 17,
    "commercial": 37,
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
      "soft_power": 35,
      "hard_power": 17,
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
    "health": 22,
    "education": 30,
    "security": 2,
    "finance": 11,
    "environment": 60,
  }
};
