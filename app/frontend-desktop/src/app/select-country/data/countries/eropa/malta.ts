import { CountryData } from "../../types";

export const malta: CountryData = {
  "name_en": "Malta",
  "capital": "Valletta",
  "name_id": "Malta",
  "lon": 14.3,
  "lat": 35.53,
  "flag": "🇲🇹",
  "pop": 484630,
  "budget": 194,
  "income": "556",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 13,
    "hydro_plant": 13,
    "solar_plant": 16,
    "thermal_plant": 31,
    "gas_plant": 6,
    "wind_plant": 23,
    "power_grid": 62,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 2,
    "subway": 25,
    "railway": 15,
    "highway": 34,
    "road_quality": 73,
    "sea_port": 30,
    "airport": 37,
    "bus_terminal": 11,
    "helipad": 27,
    "internet_coverage": 69,
    "tech_stack": 69,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 29,
    "uranium": 34,
    "coal": 14,
    "oil": 39,
    "gas": 31,
    "salt": 28,
    "nickel": 25,
    "lithium": 25,
    "aluminum": 1,
    "copper": 9,
    "rare_earth": 8,
    "iron_ore": 3,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 21,
    "car": 3,
    "motorcycle": 37,
    "smelter": 27,
    "concrete_cement": 16,
    "wood": 6,
    "mineral_water": 29,
    "sugar": 38,
    "bread": 14,
    "pharmacy": 7,
    "fertilizer": 7,
    "meat_processing": 28,
    "instant_noodle": 39,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 20,
    "poultry": 26,
    "dairy_cow": 3,
    "beef_cow": 20,
    "sheep_goat": 24,
    "shrimp": 10,
    "fish": 5,
    "shellfish": 21,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 6,
    "wheat": 24,
    "corn": 24,
    "tubers": 6,
    "soy": 17,
    "palm_oil": 14,
    "tea": 20,
    "coffee": 26,
    "cocoa": 39,
    "sugarcane": 39,
    "vegetables": 33,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 6,
    "barracks": 19,
    "armory": 11,
    "tank_hangar": 12,
    "military_academy": 28,
    "budget": 55,
    "personnel": 16653,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 32,
        "apc": 5,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 30,
        "kapal_destroyer": 33,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 27,
        "helikopter_serang": 3,
        "pesawat_pengintai": 2
      },
      "total_unit": 8,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 1,
    "military_air_base": 2,
    "military_naval_base": 10,
    "arms_factory": 35,
    "nuclear_status": false,
    "space_program": 32,
    "cyber_defense": 22,
    "intelligence": 36,
    "strategic_operations": {
      "attack_mission": 38,
      "spy_mission": 35,
      "sabotage_mission": 13,
      "territory_management": 14,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 29,
      "radar_network": 32,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 13,
      "elementary_school": 6,
      "middle_school": 36,
      "high_school": 26,
      "university": 4,
      "education_institute": 22,
      "laboratory": 28,
      "observatory": 13,
      "research_center": 9,
      "development_center": 17,
      "literacy": 83,
      "research_index": 0
    },
    "health": {
      "large_hospital": 13,
      "small_hospital": 13,
      "diagnostic_center": 31,
      "hospital_beds": 6898,
      "life_expectancy": 39,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 21,
      "racing_circuit": 24,
      "stadium": 26,
      "international_stadium": 3,
      "olympic_score": 28,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 29,
      "court": 19,
      "prosecution_office": 25,
      "police_station": 31,
      "police_car_fleet": 9865,
      "police_academy": 5,
      "corruption_index": 89,
      "security_index": 82,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 3,
          "sepeda_motor": 13,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 1,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 13,
          "kamera_surveillance": 5,
          "pusat_forensik": 1
        },
        "response_time": 3,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 11,
    "tanks": 25,
    "aircraft": 34,
    "naval": 22,
    "air_base": 21,
    "naval_base": 27,
    "military_base": 27,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 26,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 32,
      "satisfaction": 67,
      "revenue": 14
    },
    "corporate": {
      "rate": 14,
      "satisfaction": 52,
      "revenue": 3
    },
    "income": {
      "rate": 30,
      "satisfaction": 61,
      "revenue": 11
    },
    "customs": {
      "rate": 21,
      "satisfaction": 86,
      "revenue": 5
    },
    "environment": {
      "rate": 33,
      "satisfaction": 88,
      "revenue": 12
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 1 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 3 },
    "other": {
      "rate": 5,
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
    "salaryAsn": 80,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 100,
    "subsidyUmkm": 75,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 50,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 13,
    "commercial": 5,
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
      "soft_power": 17,
      "hard_power": 39,
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
    "health": 17,
    "education": 34,
    "security": 16,
    "finance": 11,
    "environment": 60
  }
};
