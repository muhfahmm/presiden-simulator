import { CountryData } from "../../types";

export const belize: CountryData = {
  "name_en": "Belize",
  "capital": "Belmopan",
  "name_id": "Belize",
  "lon": -88.75,
  "lat": 17.25,
  "flag": "🇧🇿",
  "pop": "10M",
  "budget": 619000000000000,
  "income": "330.000.000.000.000 / 330 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 1. ⚡ SEKTOR KELISTRIKAN (7 Jenis)
  // =============================================================

  "sector_electricity": {
    "nuclear_plant": 25,
    "hydro_plant": 16,
    "solar_plant": 26,
    "thermal_plant": 6,
    "gas_plant": 18,
    "wind_plant": 19,
    "power_grid": 68,
  },

  // =============================================================
  // 2. 🏗️ SEKTOR INFRASTRUKTUR (12 Jenis)
  // =============================================================

  "infrastructure": {
    "bicycle_path": 20,
    "subway": 20,
    "railway": 13,
    "highway": 20,
    "road_quality": 95,
    "sea_port": 12,
    "airport": 10,
    "bus_terminal": 12,
    "helipad": 39,
    "internet_coverage": 77,
    "tech_stack": 77,
    "water_access": 74
  },

  // =============================================================
  // 7. ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 28,
    "uranium": 27,
    "coal": 25,
    "oil": 6,
    "gas": 37,
    "salt": 10,
    "nickel": 13,
    "lithium": 6,
    "aluminum": 12,
    "copper": 34,
    "rare_earth": 36,
    "iron_ore": 14,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 3. 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 23,
    "car": 3,
    "motorcycle": 16,
    "smelter": 32,
    "concrete_cement": 28,
    "wood": 21,
    "mineral_water": 28,
    "sugar": 7,
    "bread": 37,
    "pharmacy": 28,
    "fertilizer": 36,
    "meat_processing": 10,
    "instant_noodle": 24,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 3. 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 30,
    "poultry": 17,
    "dairy_cow": 37,
    "beef_cow": 13,
    "sheep_goat": 9,
    "shrimp": 39,
    "fish": 6,
    "shellfish": 36,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 3. 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 18,
    "wheat": 18,
    "corn": 31,
    "tubers": 6,
    "soy": 32,
    "palm_oil": 4,
    "tea": 8,
    "coffee": 35,
    "cocoa": 23,
    "sugarcane": 13,
    "vegetables": 24,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 4. 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 38,
    "barracks": 4,
    "armory": 14,
    "tank_hangar": 14,
    "military_academy": 24,
    "budget": 11,
    "personnel": 8458,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 40,
        "apc": 5,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 16,
        "kapal_destroyer": 30,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 8,
        "helikopter_serang": 38,
        "pesawat_pengintai": 2
      },
      "total_unit": 40,
      "readiness": 98
    }
  },

  // =============================================================
  // 4. 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 39,
    "military_air_base": 36,
    "military_naval_base": 32,
    "arms_factory": 4,
    "nuclear_status": false,
    "space_program": 30,
    "cyber_defense": 17,
    "intelligence": 14,
    "strategic_operations": {
      "attack_mission": 8,
      "spy_mission": 10,
      "sabotage_mission": 36,
      "territory_management": 36,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 39,
      "radar_network": 16,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 5. 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 9,
      "elementary_school": 6,
      "middle_school": 13,
      "high_school": 6,
      "university": 5,
      "education_institute": 37,
      "laboratory": 40,
      "observatory": 14,
      "research_center": 19,
      "development_center": 26,
      "literacy": 64,
      "research_index": 0
    },
    "health": {
      "large_hospital": 36,
      "small_hospital": 8,
      "diagnostic_center": 2,
      "hospital_beds": 9761,
      "life_expectancy": 38,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 10,
      "racing_circuit": 15,
      "stadium": 32,
      "international_stadium": 3,
      "olympic_score": 37,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 34,
      "court": 30,
      "prosecution_office": 31,
      "police_station": 31,
      "police_car_fleet": 5370,
      "police_academy": 8,
      "corruption_index": 80,
      "security_index": 63,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 40,
          "sepeda_motor": 27,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 29,
          "helikopter_polisi": 33,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 24,
          "kamera_surveillance": 28,
          "pusat_forensik": 1
        },
        "response_time": 22,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 17,
    "tanks": 31,
    "aircraft": 22,
    "naval": 8,
    "air_base": 35,
    "naval_base": 30,
    "military_base": 22,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 29,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 26,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 11,
      "satisfaction": 52
    },
    "income": {
      "rate": 27,
      "satisfaction": 61
    },
    "customs": {
      "rate": 3,
      "satisfaction": 86
    },
    "environment": {
      "rate": 28,
      "satisfaction": 88
    },
    "other": {
      "rate": 24,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 56,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 9,
    "commercial": 16,
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
      "soft_power": 5,
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
    "agreements": [
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Kanada", "type": "Trade", "status": "Active" },
      { "partner": "Kuba", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Meksiko", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 23,
    "education": 29,
    "security": 34,
    "finance": 27,
    "environment": 60
  }
};
