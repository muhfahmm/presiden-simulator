import { CountryData } from "../../types";

export const yunani: CountryData = {
  "name_en": "Greece",
  "capital": "Athens",
  "name_id": "Yunani",
  "lon": 22,
  "lat": 39,
  "flag": "🇬🇷",
  "pop": 10731726,
  "budget": 2236,
  "income": "6389",
  "religion": "Kristen Ortodoks",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 38,
    "hydro_plant": 29,
    "solar_plant": 7,
    "thermal_plant": 38,
    "gas_plant": 13,
    "wind_plant": 25,
    "power_grid": 79,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 28,
    "subway": 35,
    "railway": 4,
    "highway": 8,
    "road_quality": 67,
    "sea_port": 38,
    "airport": 18,
    "bus_terminal": 15,
    "helipad": 28,
    "internet_coverage": 91,
    "tech_stack": 74,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 18,
    "uranium": 10,
    "coal": 34,
    "oil": 30,
    "gas": 33,
    "salt": 4,
    "nickel": 38,
    "lithium": 22,
    "aluminum": 25,
    "copper": 15,
    "rare_earth": 5,
    "iron_ore": 22,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 3,
    "car": 29,
    "motorcycle": 25,
    "smelter": 8,
    "concrete_cement": 18,
    "wood": 14,
    "mineral_water": 18,
    "sugar": 27,
    "bread": 38,
    "pharmacy": 37,
    "fertilizer": 4,
    "meat_processing": 20,
    "instant_noodle": 20,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 8,
    "poultry": 11,
    "dairy_cow": 15,
    "beef_cow": 27,
    "sheep_goat": 12,
    "shrimp": 14,
    "fish": 19,
    "shellfish": 12,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 18,
    "wheat": 13,
    "corn": 40,
    "tubers": 34,
    "soy": 25,
    "palm_oil": 18,
    "tea": 10,
    "coffee": 12,
    "cocoa": 19,
    "sugarcane": 36,
    "vegetables": 19,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 36,
    "barracks": 14,
    "armory": 11,
    "tank_hangar": 25,
    "military_academy": 10,
    "budget": 638,
    "personnel": 24523,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 161,
        "apc": 126,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 19,
        "kapal_destroyer": 151,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 60,
        "helikopter_serang": 126,
        "pesawat_pengintai": 2
      },
      "total_unit": 27,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 20,
    "military_naval_base": 10,
    "arms_factory": 13,
    "nuclear_status": false,
    "space_program": 6,
    "cyber_defense": 28,
    "intelligence": 33,
    "strategic_operations": {
      "attack_mission": 16,
      "spy_mission": 25,
      "sabotage_mission": 29,
      "territory_management": 29,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 0,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 17,
      "elementary_school": 30,
      "middle_school": 11,
      "high_school": 32,
      "university": 38,
      "education_institute": 40,
      "laboratory": 35,
      "observatory": 15,
      "research_center": 17,
      "development_center": 17,
      "literacy": 50,
      "research_index": 0
    },
    "health": {
      "large_hospital": 40,
      "small_hospital": 18,
      "diagnostic_center": 25,
      "hospital_beds": 5656,
      "life_expectancy": 2,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 38,
      "racing_circuit": 24,
      "stadium": 27,
      "international_stadium": 37,
      "olympic_score": 26,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 11,
      "court": 4,
      "prosecution_office": 5,
      "police_station": 22,
      "police_car_fleet": 651,
      "police_academy": 25,
      "corruption_index": 74,
      "security_index": 75,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 28,
          "sepeda_motor": 5,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 26,
          "kamera_surveillance": 32,
          "pusat_forensik": 1
        },
        "response_time": 8,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 27,
    "tanks": 28,
    "aircraft": 16,
    "naval": 37,
    "air_base": 24,
    "naval_base": 37,
    "military_base": 1,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 31,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 34,
      "satisfaction": 67,
      "revenue": 90
    },
    "corporate": {
      "rate": 15,
      "satisfaction": 52,
      "revenue": 85
    },
    "income": {
      "rate": 15,
      "satisfaction": 61,
      "revenue": 48
    },
    "customs": {
      "rate": 40,
      "satisfaction": 86,
      "revenue": 202
    },
    "environment": {
      "rate": 36,
      "satisfaction": 88,
      "revenue": 125
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 12 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 34 },
    "other": {
      "rate": 38,
      "satisfaction": 93,
      "revenue": 127
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
    "salaryMedis": 100,
    "salaryMiliter": 80
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 75,
    "subsidyTransport": 75,
    "subsidyRumah": 50
  },

  "demand": {
    "satisfaction": 58,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 27,
    "commercial": 27,
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
      "soft_power": 27,
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
    "health": 29,
    "education": 18,
    "security": 12,
    "finance": 25,
    "environment": 60
  }
};
