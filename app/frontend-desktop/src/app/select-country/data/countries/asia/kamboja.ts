import { CountryData } from "../../types";

export const kamboja: CountryData = {
  "name_en": "Cambodia",
  "capital": "Phnom Penh",
  "name_id": "Kamboja",
  "lon": 105,
  "lat": 13,
  "flag": "🇰🇭",
  "pop": 16249798,
  "budget": 292,
  "income": "833",
  "religion": "Buddha",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 38,
    "hydro_plant": 4,
    "solar_plant": 17,
    "thermal_plant": 29,
    "gas_plant": 13,
    "wind_plant": 12,
    "power_grid": 76,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 24,
    "subway": 33,
    "railway": 10,
    "highway": 32,
    "road_quality": 60,
    "sea_port": 23,
    "airport": 21,
    "bus_terminal": 14,
    "helipad": 11,
    "internet_coverage": 84,
    "tech_stack": 94,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 23,
    "uranium": 17,
    "coal": 16,
    "oil": 7,
    "gas": 27,
    "salt": 24,
    "nickel": 36,
    "lithium": 38,
    "aluminum": 11,
    "copper": 13,
    "rare_earth": 8,
    "iron_ore": 22,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 1,
    "car": 24,
    "motorcycle": 22,
    "smelter": 24,
    "concrete_cement": 20,
    "wood": 7,
    "mineral_water": 4,
    "sugar": 1,
    "bread": 22,
    "pharmacy": 30,
    "fertilizer": 28,
    "meat_processing": 11,
    "instant_noodle": 11,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 19,
    "poultry": 25,
    "dairy_cow": 24,
    "beef_cow": 29,
    "sheep_goat": 33,
    "shrimp": 28,
    "fish": 27,
    "shellfish": 6,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 12,
    "wheat": 38,
    "corn": 11,
    "tubers": 8,
    "soy": 5,
    "palm_oil": 17,
    "tea": 31,
    "coffee": 13,
    "cocoa": 12,
    "sugarcane": 39,
    "vegetables": 1,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 9,
    "barracks": 32,
    "armory": 25,
    "tank_hangar": 22,
    "military_academy": 15,
    "budget": 83,
    "personnel": 20038,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 1,
        "apc": 22,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 26,
        "kapal_destroyer": 1,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 9,
        "helikopter_serang": 4,
        "pesawat_pengintai": 2
      },
      "total_unit": 1,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 23,
    "military_air_base": 34,
    "military_naval_base": 1,
    "arms_factory": 31,
    "nuclear_status": false,
    "space_program": 26,
    "cyber_defense": 35,
    "intelligence": 4,
    "strategic_operations": {
      "attack_mission": 1,
      "spy_mission": 24,
      "sabotage_mission": 2,
      "territory_management": 5,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 19,
      "radar_network": 16,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 22,
      "elementary_school": 19,
      "middle_school": 40,
      "high_school": 25,
      "university": 33,
      "education_institute": 20,
      "laboratory": 26,
      "observatory": 35,
      "research_center": 11,
      "development_center": 9,
      "literacy": 65,
      "research_index": 0
    },
    "health": {
      "large_hospital": 23,
      "small_hospital": 34,
      "diagnostic_center": 21,
      "hospital_beds": 3102,
      "life_expectancy": 40,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 36,
      "racing_circuit": 5,
      "stadium": 29,
      "international_stadium": 6,
      "olympic_score": 37,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 36,
      "court": 11,
      "prosecution_office": 7,
      "police_station": 22,
      "police_car_fleet": 4080,
      "police_academy": 22,
      "corruption_index": 70,
      "security_index": 62,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 20,
          "sepeda_motor": 30,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 5,
          "helikopter_polisi": 27,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 10,
          "kamera_surveillance": 18,
          "pusat_forensik": 1
        },
        "response_time": 29,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 13,
    "tanks": 29,
    "aircraft": 35,
    "naval": 13,
    "air_base": 25,
    "naval_base": 18,
    "military_base": 4,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 28,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 40,
      "satisfaction": 67,
      "revenue": 17
    },
    "corporate": {
      "rate": 25,
      "satisfaction": 52,
      "revenue": 18
    },
    "income": {
      "rate": 22,
      "satisfaction": 61,
      "revenue": 10
    },
    "customs": {
      "rate": 19,
      "satisfaction": 86,
      "revenue": 13
    },
    "environment": {
      "rate": 30,
      "satisfaction": 88,
      "revenue": 12
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 2 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 5 },
    "other": {
      "rate": 36,
      "satisfaction": 93,
      "revenue": 18
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 70,
    "salaryGuru": 70,
    "salaryMedis": 70,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 75,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 83,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 10,
    "commercial": 25,
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
      "soft_power": 28,
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
    "health": 35,
    "education": 16,
    "security": 14,
    "finance": 39,
    "environment": 60
  }
};
