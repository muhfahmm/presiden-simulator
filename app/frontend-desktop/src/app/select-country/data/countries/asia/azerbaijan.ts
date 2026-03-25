import { CountryData } from "../../types";

export const azerbaijan: CountryData = {
  "name_en": "Azerbaijan",
  "capital": "Baku",
  "name_id": "Azerbaijan",
  "lon": 47.5,
  "lat": 40.5,
  "flag": "🇦🇿",
  "pop": 9939800,
  "budget": 535,
  "income": "1528",
  "religion": "Islam",
  "ideology": "Demokrasi",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 22,
    "hydro_plant": 30,
    "solar_plant": 35,
    "thermal_plant": 26,
    "gas_plant": 40,
    "wind_plant": 13,
    "power_grid": 54,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 20,
    "subway": 33,
    "railway": 29,
    "highway": 34,
    "road_quality": 82,
    "sea_port": 2,
    "airport": 6,
    "bus_terminal": 5,
    "helipad": 29,
    "internet_coverage": 55,
    "tech_stack": 57,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 26,
    "uranium": 36,
    "coal": 40,
    "oil": 35,
    "gas": 29,
    "salt": 26,
    "nickel": 14,
    "lithium": 27,
    "aluminum": 6,
    "copper": 17,
    "rare_earth": 30,
    "iron_ore": 3,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 1,
    "motorcycle": 8,
    "smelter": 4,
    "concrete_cement": 35,
    "wood": 1,
    "mineral_water": 5,
    "sugar": 6,
    "bread": 36,
    "pharmacy": 24,
    "fertilizer": 27,
    "meat_processing": 19,
    "instant_noodle": 40,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 11,
    "poultry": 12,
    "dairy_cow": 12,
    "beef_cow": 26,
    "sheep_goat": 17,
    "shrimp": 8,
    "fish": 18,
    "shellfish": 16,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 31,
    "wheat": 33,
    "corn": 13,
    "tubers": 28,
    "soy": 2,
    "palm_oil": 5,
    "tea": 25,
    "coffee": 38,
    "cocoa": 30,
    "sugarcane": 19,
    "vegetables": 7,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 21,
    "barracks": 6,
    "armory": 33,
    "tank_hangar": 2,
    "military_academy": 26,
    "budget": 152,
    "personnel": 11539,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 11,
        "apc": 35,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 29,
        "kapal_destroyer": 5,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 25,
        "helikopter_serang": 8,
        "pesawat_pengintai": 2
      },
      "total_unit": 18,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 4,
    "military_air_base": 28,
    "military_naval_base": 24,
    "arms_factory": 36,
    "nuclear_status": false,
    "space_program": 2,
    "cyber_defense": 14,
    "intelligence": 10,
    "strategic_operations": {
      "attack_mission": 9,
      "spy_mission": 31,
      "sabotage_mission": 39,
      "territory_management": 26,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 38,
      "radar_network": 9,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 39,
      "elementary_school": 11,
      "middle_school": 18,
      "high_school": 17,
      "university": 14,
      "education_institute": 16,
      "laboratory": 11,
      "observatory": 30,
      "research_center": 29,
      "development_center": 18,
      "literacy": 63,
      "research_index": 0
    },
    "health": {
      "large_hospital": 21,
      "small_hospital": 29,
      "diagnostic_center": 1,
      "hospital_beds": 9323,
      "life_expectancy": 31,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 37,
      "racing_circuit": 13,
      "stadium": 7,
      "international_stadium": 10,
      "olympic_score": 40,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 34,
      "court": 13,
      "prosecution_office": 22,
      "police_station": 28,
      "police_car_fleet": 6700,
      "police_academy": 35,
      "corruption_index": 56,
      "security_index": 82,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 24,
          "sepeda_motor": 38,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 37,
          "helikopter_polisi": 21,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 40,
          "kamera_surveillance": 13,
          "pusat_forensik": 1
        },
        "response_time": 2,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 38,
    "tanks": 1,
    "aircraft": 13,
    "naval": 35,
    "air_base": 38,
    "naval_base": 16,
    "military_base": 14,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 8,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 34,
      "satisfaction": 67,
      "revenue": 44
    },
    "corporate": {
      "rate": 2,
      "satisfaction": 52,
      "revenue": 2
    },
    "income": {
      "rate": 26,
      "satisfaction": 61,
      "revenue": 28
    },
    "customs": {
      "rate": 7,
      "satisfaction": 86,
      "revenue": 10
    },
    "environment": {
      "rate": 11,
      "satisfaction": 88,
      "revenue": 6
    },
    "transit_allied": { "rate": 5, "satisfaction": 85, "revenue": 3 },
    "transit_non_allied": { "rate": 15, "satisfaction": 75, "revenue": 9 },
    "other": {
      "rate": 19,
      "satisfaction": 93,
      "revenue": 19
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
    "salaryMedis": 70,
    "salaryMiliter": 50
  },
  "subsidies": {
    "subsidyEnergi": 50,
    "subsidyPangan": 75,
    "subsidyKesehatan": 50,
    "subsidyPendidikan": 75,
    "subsidyUmkm": 50,
    "subsidyTransport": 50,
    "subsidyRumah": 25
  },

  // =============================================================
  // 🛒 HARGA PASAR DOMESTIK (11 Jenis)
  // =============================================================

  "prices": {
    "priceRice": 16000,
    "priceBeef": 52050,
    "priceChicken": 57400,
    "priceOil": 21560,
    "priceSugar": 20160,
    "priceEgg": 15550,
    "priceFuel": 8560,
    "priceElectric": 1280,
    "priceWater": 5200,
    "priceMedicine": 157900,
    "priceEducation": 241950
  },

  "demand": {
    "satisfaction": 77,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 31,
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
      "soft_power": 13,
      "hard_power": 40,
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
    "health": 6,
    "education": 9,
    "security": 28,
    "finance": 22,
    "environment": 60
  }
};
