import { CountryData } from "../../types";

export const nepal: CountryData = {
  "name_en": "Nepal",
  "capital": "Kathmandu",
  "name_id": "Nepal",
  "lon": 84,
  "lat": 28,
  "flag": "🇳🇵",
  "pop": 28087871,
  "budget": 389,
  "income": "1111",
  "religion": "Hindu",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 6,
    "hydro_plant": 30,
    "solar_plant": 29,
    "thermal_plant": 34,
    "gas_plant": 32,
    "wind_plant": 33,
    "power_grid": 80,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 15,
    "subway": 5,
    "railway": 32,
    "highway": 17,
    "road_quality": 89,
    "sea_port": 8,
    "airport": 39,
    "bus_terminal": 21,
    "helipad": 33,
    "internet_coverage": 91,
    "tech_stack": 89,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 29,
    "uranium": 12,
    "coal": 1,
    "oil": 6,
    "gas": 36,
    "salt": 16,
    "nickel": 21,
    "lithium": 3,
    "aluminum": 31,
    "copper": 4,
    "rare_earth": 17,
    "iron_ore": 30,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 11,
    "car": 36,
    "motorcycle": 18,
    "smelter": 19,
    "concrete_cement": 2,
    "wood": 14,
    "mineral_water": 4,
    "sugar": 10,
    "bread": 9,
    "pharmacy": 16,
    "fertilizer": 29,
    "meat_processing": 11,
    "instant_noodle": 26,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 13,
    "poultry": 27,
    "dairy_cow": 29,
    "beef_cow": 8,
    "sheep_goat": 14,
    "shrimp": 26,
    "fish": 7,
    "shellfish": 30,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 22,
    "wheat": 24,
    "corn": 12,
    "tubers": 13,
    "soy": 24,
    "palm_oil": 27,
    "tea": 36,
    "coffee": 10,
    "cocoa": 7,
    "sugarcane": 2,
    "vegetables": 11,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 27,
    "barracks": 26,
    "armory": 2,
    "tank_hangar": 5,
    "military_academy": 31,
    "budget": 111,
    "personnel": 17021,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 160,
        "apc": 23,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 24,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 81,
        "helikopter_serang": 168,
        "pesawat_pengintai": 2
      },
      "total_unit": 3,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 2,
    "military_air_base": 15,
    "military_naval_base": 10,
    "arms_factory": 38,
    "nuclear_status": false,
    "space_program": 40,
    "cyber_defense": 35,
    "intelligence": 38,
    "strategic_operations": {
      "attack_mission": 17,
      "spy_mission": 17,
      "sabotage_mission": 31,
      "territory_management": 40,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 1,
      "radar_network": 1,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 16,
      "elementary_school": 36,
      "middle_school": 18,
      "high_school": 21,
      "university": 6,
      "education_institute": 35,
      "laboratory": 22,
      "observatory": 14,
      "research_center": 6,
      "development_center": 17,
      "literacy": 94,
      "research_index": 0
    },
    "health": {
      "large_hospital": 4,
      "small_hospital": 8,
      "diagnostic_center": 19,
      "hospital_beds": 2596,
      "life_expectancy": 8,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 14,
      "racing_circuit": 19,
      "stadium": 17,
      "international_stadium": 14,
      "olympic_score": 9,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 29,
      "court": 34,
      "prosecution_office": 15,
      "police_station": 16,
      "police_car_fleet": 6669,
      "police_academy": 20,
      "corruption_index": 89,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 17,
          "sepeda_motor": 40,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 3,
          "helikopter_polisi": 18,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 37,
          "kamera_surveillance": 22,
          "pusat_forensik": 1
        },
        "response_time": 23,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 29,
    "tanks": 12,
    "aircraft": 30,
    "naval": 28,
    "air_base": 8,
    "naval_base": 33,
    "military_base": 11,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 15,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 20,
      "satisfaction": 67,
      "revenue": 8
    },
    "corporate": {
      "rate": 18,
      "satisfaction": 52,
      "revenue": 16
    },
    "income": {
      "rate": 24,
      "satisfaction": 61,
      "revenue": 14
    },
    "customs": {
      "rate": 2,
      "satisfaction": 86,
      "revenue": 0
    },
    "environment": {
      "rate": 7,
      "satisfaction": 88,
      "revenue": 8
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 2 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 6 },
    "other": {
      "rate": 18,
      "satisfaction": 93,
      "revenue": 11
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
    "salaryMedis": 60,
    "salaryMiliter": 70
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 75,
    "subsidyKesehatan": 75,
    "subsidyPendidikan": 50,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 50
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 104100,
    "priceChicken": 20500,
    "priceOil": 7700,
    "priceSugar": 14400,
    "priceEgg": 62200,
    "priceFuel": 10700,
    "priceElectric": 1280,
    "priceWater": 5200,
    "priceMedicine": 126320,
    "priceEducation": 967800
  },

  "demand": {
    "satisfaction": 61,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 30,
    "commercial": 35,
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
    "health": 30,
    "education": 32,
    "security": 40,
    "finance": 25,
    "environment": 60
  }
};
