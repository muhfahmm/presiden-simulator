import { CountryData } from "../../types";

export const laos: CountryData = {
  "name_en": "Laos",
  "capital": "Vientiane",
  "name_id": "Laos",
  "lon": 105,
  "lat": 18,
  "flag": "🇱🇦",
  "pop": "10M",
  "budget": 146,
  "income": "417",
  "religion": "Buddha",
  "ideology": "Komunisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 25,
    "hydro_plant": 24,
    "solar_plant": 11,
    "thermal_plant": 33,
    "gas_plant": 14,
    "wind_plant": 19,
    "power_grid": 63,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 14,
    "subway": 1,
    "railway": 20,
    "highway": 16,
    "road_quality": 53,
    "sea_port": 20,
    "airport": 39,
    "bus_terminal": 1,
    "helipad": 20,
    "internet_coverage": 65,
    "tech_stack": 91,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 6,
    "uranium": 25,
    "coal": 15,
    "oil": 5,
    "gas": 28,
    "salt": 32,
    "nickel": 8,
    "lithium": 21,
    "aluminum": 14,
    "copper": 22,
    "rare_earth": 17,
    "iron_ore": 24,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 24,
    "car": 39,
    "motorcycle": 33,
    "smelter": 22,
    "concrete_cement": 39,
    "wood": 13,
    "mineral_water": 25,
    "sugar": 31,
    "bread": 25,
    "pharmacy": 23,
    "fertilizer": 24,
    "meat_processing": 36,
    "instant_noodle": 33,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 18,
    "poultry": 16,
    "dairy_cow": 17,
    "beef_cow": 11,
    "sheep_goat": 3,
    "shrimp": 1,
    "fish": 13,
    "shellfish": 22,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 34,
    "wheat": 27,
    "corn": 5,
    "tubers": 5,
    "soy": 18,
    "palm_oil": 19,
    "tea": 9,
    "coffee": 16,
    "cocoa": 2,
    "sugarcane": 21,
    "vegetables": 3,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 5,
    "barracks": 21,
    "armory": 10,
    "tank_hangar": 13,
    "military_academy": 32,
    "budget": 41,
    "personnel": 19871,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 6,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 2,
        "kapal_destroyer": 27,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 31,
        "helikopter_serang": 37,
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
    "command_center": 30,
    "military_air_base": 20,
    "military_naval_base": 22,
    "arms_factory": 23,
    "nuclear_status": false,
    "space_program": 15,
    "cyber_defense": 36,
    "intelligence": 18,
    "strategic_operations": {
      "attack_mission": 36,
      "spy_mission": 16,
      "sabotage_mission": 30,
      "territory_management": 18,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 16,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 26,
      "elementary_school": 20,
      "middle_school": 34,
      "high_school": 1,
      "university": 19,
      "education_institute": 17,
      "laboratory": 33,
      "observatory": 27,
      "research_center": 9,
      "development_center": 12,
      "literacy": 77,
      "research_index": 0
    },
    "health": {
      "large_hospital": 34,
      "small_hospital": 36,
      "diagnostic_center": 10,
      "hospital_beds": 8126,
      "life_expectancy": 21,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 40,
      "racing_circuit": 15,
      "stadium": 12,
      "international_stadium": 10,
      "olympic_score": 16,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 23,
      "court": 20,
      "prosecution_office": 38,
      "police_station": 20,
      "police_car_fleet": 598,
      "police_academy": 34,
      "corruption_index": 75,
      "security_index": 55,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 16,
          "sepeda_motor": 2,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 10,
          "helikopter_polisi": 34,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 12,
          "kamera_surveillance": 35,
          "pusat_forensik": 1
        },
        "response_time": 4,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 40,
    "tanks": 2,
    "aircraft": 12,
    "naval": 16,
    "air_base": 27,
    "naval_base": 16,
    "military_base": 27,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 13,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 32,
      "satisfaction": 67,
      "revenue": 12
    },
    "corporate": {
      "rate": 37,
      "satisfaction": 52,
      "revenue": 8
    },
    "income": {
      "rate": 31,
      "satisfaction": 61,
      "revenue": 5
    },
    "customs": {
      "rate": 13,
      "satisfaction": 86,
      "revenue": 3
    },
    "environment": {
      "rate": 26,
      "satisfaction": 88,
      "revenue": 10
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 8,
      "satisfaction": 93,
      "revenue": 1
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
    "salaryGuru": 60,
    "salaryMedis": 70,
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 75,
    "subsidyTransport": 50,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 67,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 39,
    "commercial": 12,
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
      "soft_power": 2,
      "hard_power": 14,
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
    "health": 2,
    "education": 12,
    "security": 39,
    "finance": 5,
    "environment": 60
  }
};
