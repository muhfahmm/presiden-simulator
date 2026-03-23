import { CountryData } from "../../types";

export const austria: CountryData = {
  "name_en": "Austria",
  "capital": "Vienna",
  "name_id": "Austria",
  "lon": 13.33333333,
  "lat": 47.33333333,
  "flag": "🇦🇹",
  "pop": "42M",
  "budget": "Rp 405 T",
  "income": "Rp 869 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 23,
    "hydro_plant": 20,
    "solar_plant": 25,
    "thermal_plant": 18,
    "gas_plant": 35,
    "wind_plant": 10,
    "power_grid": 89,
    "bicycle_path": 22,
    "subway": 28,
    "railway": 33,
    "highway": 18,
    "road_quality": 70,
    "sea_port": 31,
    "airport": 40,
    "bus_terminal": 18,
    "helipad": 20,
    "internet_coverage": 83,
    "tech_stack": 84,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 36,
    "uranium": 12,
    "coal": 21,
    "oil": 39,
    "gas": 21,
    "salt": 27,
    "nickel": 28,
    "lithium": 2,
    "aluminum": 9,
    "copper": 39,
    "rare_earth": 28,
    "iron_ore": 15,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 6,
    "car": 5,
    "motorcycle": 38,
    "smelter": 15,
    "concrete_cement": 6,
    "wood": 31,
    "mineral_water": 32,
    "sugar": 23,
    "bread": 26,
    "pharmacy": 31,
    "fertilizer": 25,
    "meat_processing": 26,
    "instant_noodle": 6,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 11,
    "poultry": 40,
    "dairy_cow": 21,
    "beef_cow": 13,
    "sheep_goat": 6,
    "shrimp": 26,
    "fish": 13,
    "shellfish": 26,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 32,
    "wheat": 1,
    "corn": 14,
    "tubers": 9,
    "soy": 4,
    "palm_oil": 14,
    "tea": 10,
    "coffee": 40,
    "cocoa": 3,
    "sugarcane": 10,
    "vegetables": 12,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 40,
    "barracks": 38,
    "armory": 6,
    "tank_hangar": 7,
    "military_academy": 11,
    "budget": 21,
    "personnel": 29535,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 15,
        "apc": 13,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 3,
        "kapal_destroyer": 20,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 28,
        "helikopter_serang": 6,
        "pesawat_pengintai": 2
      },
      "total_unit": 18,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 1,
    "military_air_base": 21,
    "military_naval_base": 4,
    "arms_factory": 37,
    "nuclear_status": false,
    "space_program": 12,
    "cyber_defense": 30,
    "intelligence": 25,
    "strategic_operations": {
      "attack_mission": 14,
      "spy_mission": 32,
      "sabotage_mission": 4,
      "territory_management": 9,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 24,
      "radar_network": 33,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 27,
      "elementary_school": 10,
      "middle_school": 30,
      "high_school": 21,
      "university": 7,
      "education_institute": 26,
      "laboratory": 12,
      "observatory": 23,
      "research_center": 22,
      "development_center": 23,
      "literacy": 88,
      "research_index": 0
    },
    "health": {
      "large_hospital": 23,
      "small_hospital": 6,
      "diagnostic_center": 14,
      "hospital_beds": 5562,
      "life_expectancy": 13,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 28,
      "racing_circuit": 32,
      "stadium": 1,
      "international_stadium": 29,
      "olympic_score": 13,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 19,
      "court": 15,
      "prosecution_office": 34,
      "police_station": 16,
      "police_car_fleet": 645,
      "police_academy": 14,
      "corruption_index": 61,
      "security_index": 78,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 8,
          "sepeda_motor": 14,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 17,
          "helikopter_polisi": 33,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 3,
          "kamera_surveillance": 1,
          "pusat_forensik": 1
        },
        "response_time": 35,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 21,
    "tanks": 32,
    "aircraft": 13,
    "naval": 29,
    "air_base": 28,
    "naval_base": 37,
    "military_base": 10,
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
      "rate": 12,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 38,
      "satisfaction": 52
    },
    "income": {
      "rate": 31,
      "satisfaction": 61
    },
    "customs": {
      "rate": 10,
      "satisfaction": 86
    },
    "environment": {
      "rate": 8,
      "satisfaction": 88
    },
    "other": {
      "rate": 30,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 50,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 26,
    "commercial": 25,
    "industrial": 53
  },

  // =============================================================
  // 🌍 GEOPOLITIK & HUBUNGAN INTERNASIONAL (16 Jenis)
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
      "hard_power": 34,
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
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Jepang", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Swiss", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 18,
    "education": 12,
    "security": 23,
    "finance": 37,
    "environment": 60
  }
};
