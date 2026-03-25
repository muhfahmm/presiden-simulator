import { CountryData } from "../../types";

export const belanda: CountryData = {
  "name_en": "Netherlands",
  "capital": "Amsterdam",
  "name_id": "Belanda",
  "lon": 5.75,
  "lat": 52.5,
  "flag": "🇳🇱",
  "pop": 17231624,
  "budget": 10598,
  "income": "30280",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 11,
    "hydro_plant": 5,
    "solar_plant": 11,
    "thermal_plant": 30,
    "gas_plant": 14,
    "wind_plant": 30,
    "power_grid": 77,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 36,
    "subway": 37,
    "railway": 7,
    "highway": 4,
    "road_quality": 92,
    "sea_port": 17,
    "airport": 20,
    "bus_terminal": 2,
    "helipad": 33,
    "internet_coverage": 54,
    "tech_stack": 73,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 25,
    "uranium": 12,
    "coal": 29,
    "oil": 16,
    "gas": 8,
    "salt": 2,
    "nickel": 35,
    "lithium": 29,
    "aluminum": 14,
    "copper": 36,
    "rare_earth": 2,
    "iron_ore": 25,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 22,
    "car": 15,
    "motorcycle": 12,
    "smelter": 22,
    "concrete_cement": 20,
    "wood": 32,
    "mineral_water": 23,
    "sugar": 38,
    "bread": 38,
    "pharmacy": 38,
    "fertilizer": 5,
    "meat_processing": 30,
    "instant_noodle": 39,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 29,
    "poultry": 21,
    "dairy_cow": 38,
    "beef_cow": 31,
    "sheep_goat": 12,
    "shrimp": 10,
    "fish": 37,
    "shellfish": 16,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 32,
    "wheat": 3,
    "corn": 36,
    "tubers": 37,
    "soy": 14,
    "palm_oil": 38,
    "tea": 26,
    "coffee": 37,
    "cocoa": 30,
    "sugarcane": 5,
    "vegetables": 25,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 27,
    "barracks": 32,
    "armory": 24,
    "tank_hangar": 10,
    "military_academy": 17,
    "budget": 3028,
    "personnel": 25162,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 28,
        "apc": 26,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 32,
        "kapal_destroyer": 36,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 35,
        "helikopter_serang": 27,
        "pesawat_pengintai": 2
      },
      "total_unit": 11,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 23,
    "military_naval_base": 18,
    "arms_factory": 29,
    "nuclear_status": false,
    "space_program": 19,
    "cyber_defense": 16,
    "intelligence": 22,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 26,
      "sabotage_mission": 4,
      "territory_management": 20,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 9,
      "radar_network": 15,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 34,
      "elementary_school": 15,
      "middle_school": 28,
      "high_school": 27,
      "university": 33,
      "education_institute": 11,
      "laboratory": 1,
      "observatory": 40,
      "research_center": 34,
      "development_center": 25,
      "literacy": 74,
      "research_index": 0
    },
    "health": {
      "large_hospital": 12,
      "small_hospital": 26,
      "diagnostic_center": 28,
      "hospital_beds": 9546,
      "life_expectancy": 27,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 38,
      "racing_circuit": 21,
      "stadium": 35,
      "international_stadium": 13,
      "olympic_score": 17,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 34,
      "court": 30,
      "prosecution_office": 2,
      "police_station": 6,
      "police_car_fleet": 6595,
      "police_academy": 28,
      "corruption_index": 73,
      "security_index": 95,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 35,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 28,
          "helikopter_polisi": 24,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 4,
          "kamera_surveillance": 1,
          "pusat_forensik": 1
        },
        "response_time": 7,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 11,
    "tanks": 22,
    "aircraft": 20,
    "naval": 19,
    "air_base": 38,
    "naval_base": 23,
    "military_base": 30,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 33,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 12,
      "satisfaction": 67,
      "revenue": 271
    },
    "corporate": {
      "rate": 37,
      "satisfaction": 52,
      "revenue": 1015
    },
    "income": {
      "rate": 35,
      "satisfaction": 61,
      "revenue": 489
    },
    "customs": {
      "rate": 31,
      "satisfaction": 86,
      "revenue": 610
    },
    "environment": {
      "rate": 31,
      "satisfaction": 88,
      "revenue": 731
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 53 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 159 },
    "other": {
      "rate": 5,
      "satisfaction": 93,
      "revenue": 129
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  
  // =============================================================
  // 💰 GAJI & SUBSIDI (Default)
  // =============================================================

  "salaries": {
    "salaryAsn": 90,
    "salaryGuru": 90,
    "salaryMedis": 90,
    "salaryMiliter": 90
  },
  "subsidies": {
    "subsidyEnergi": 25,
    "subsidyPangan": 50,
    "subsidyKesehatan": 100,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 75,
    "subsidyTransport": 75,
    "subsidyRumah": 75
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 104100,
    "priceChicken": 41000,
    "priceOil": 12320,
    "priceSugar": 7200,
    "priceEgg": 24880,
    "priceFuel": 10700,
    "priceElectric": 1600,
    "priceWater": 5200,
    "priceMedicine": 315800,
    "priceEducation": 677460
  },

  "demand": {
    "satisfaction": 95,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 30,
    "commercial": 28,
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
      "soft_power": 36,
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
    "health": 23,
    "education": 25,
    "security": 26,
    "finance": 30,
    "environment": 60
  }
};
