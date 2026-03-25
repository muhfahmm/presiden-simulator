import { CountryData } from "../../types";

export const brazil: CountryData = {
  "name_en": "Brazil",
  "capital": "Brasília",
  "name_id": "Brazil",
  "lon": -55,
  "lat": -10,
  "flag": "🇧🇷",
  "pop": 209469333,
  "budget": 22655,
  "income": "64727",
  "religion": "Katolik",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 4,
    "hydro_plant": 5,
    "solar_plant": 40,
    "thermal_plant": 28,
    "gas_plant": 38,
    "wind_plant": 17,
    "power_grid": 71,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 3,
    "subway": 8,
    "railway": 16,
    "highway": 1,
    "road_quality": 62,
    "sea_port": 13,
    "airport": 34,
    "bus_terminal": 11,
    "helipad": 24,
    "internet_coverage": 86,
    "tech_stack": 65,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 25,
    "uranium": 21,
    "coal": 32,
    "oil": 32,
    "gas": 22,
    "salt": 2,
    "nickel": 27,
    "lithium": 17,
    "aluminum": 14,
    "copper": 38,
    "rare_earth": 35,
    "iron_ore": 7,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 28,
    "car": 11,
    "motorcycle": 14,
    "smelter": 24,
    "concrete_cement": 27,
    "wood": 29,
    "mineral_water": 15,
    "sugar": 16,
    "bread": 7,
    "pharmacy": 14,
    "fertilizer": 3,
    "meat_processing": 17,
    "instant_noodle": 34,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 10,
    "poultry": 26,
    "dairy_cow": 25,
    "beef_cow": 38,
    "sheep_goat": 3,
    "shrimp": 33,
    "fish": 7,
    "shellfish": 15,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 28,
    "wheat": 21,
    "corn": 1,
    "tubers": 34,
    "soy": 40,
    "palm_oil": 10,
    "tea": 26,
    "coffee": 16,
    "cocoa": 16,
    "sugarcane": 2,
    "vegetables": 32,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 15,
    "barracks": 20,
    "armory": 3,
    "tank_hangar": 34,
    "military_academy": 25,
    "budget": 6472,
    "personnel": 22445,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 28,
        "apc": 23,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 9,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 12,
        "helikopter_serang": 16,
        "pesawat_pengintai": 2
      },
      "total_unit": 9,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 33,
    "military_air_base": 6,
    "military_naval_base": 11,
    "arms_factory": 9,
    "nuclear_status": false,
    "space_program": 24,
    "cyber_defense": 39,
    "intelligence": 30,
    "strategic_operations": {
      "attack_mission": 26,
      "spy_mission": 5,
      "sabotage_mission": 10,
      "territory_management": 36,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 19,
      "radar_network": 20,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 22,
      "elementary_school": 29,
      "middle_school": 22,
      "high_school": 1,
      "university": 5,
      "education_institute": 38,
      "laboratory": 8,
      "observatory": 1,
      "research_center": 5,
      "development_center": 27,
      "literacy": 50,
      "research_index": 0
    },
    "health": {
      "large_hospital": 25,
      "small_hospital": 37,
      "diagnostic_center": 22,
      "hospital_beds": 9686,
      "life_expectancy": 1,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 10,
      "racing_circuit": 12,
      "stadium": 30,
      "international_stadium": 19,
      "olympic_score": 34,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 33,
      "court": 38,
      "prosecution_office": 7,
      "police_station": 4,
      "police_car_fleet": 9953,
      "police_academy": 10,
      "corruption_index": 67,
      "security_index": 95,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 38,
          "sepeda_motor": 34,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 21,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 2,
          "kamera_surveillance": 39,
          "pusat_forensik": 1
        },
        "response_time": 39,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 31,
    "tanks": 18,
    "aircraft": 13,
    "naval": 21,
    "air_base": 4,
    "naval_base": 39,
    "military_base": 23,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 19,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 12,
      "satisfaction": 67,
      "revenue": 594
    },
    "corporate": {
      "rate": 4,
      "satisfaction": 52,
      "revenue": 159
    },
    "income": {
      "rate": 4,
      "satisfaction": 61,
      "revenue": 213
    },
    "customs": {
      "rate": 20,
      "satisfaction": 86,
      "revenue": 1246
    },
    "environment": {
      "rate": 24,
      "satisfaction": 88,
      "revenue": 1341
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 114 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 340 },
    "other": {
      "rate": 3,
      "satisfaction": 93,
      "revenue": 95
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
    "salaryGuru": 60,
    "salaryMedis": 80,
    "salaryMiliter": 60
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 92,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 7,
    "commercial": 13,
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
      "soft_power": 33,
      "hard_power": 28,
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
    "health": 10,
    "education": 31,
    "security": 39,
    "finance": 36,
    "environment": 60
  }
};
