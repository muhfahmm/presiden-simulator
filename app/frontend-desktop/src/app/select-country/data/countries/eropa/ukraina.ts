import { CountryData } from "../../types";

export const ukraina: CountryData = {
  "name_en": "Ukraine",
  "capital": "Kyiv",
  "name_id": "Ukraina",
  "lon": 32,
  "lat": 49,
  "flag": "🇺🇦",
  "pop": "10M",
  "budget": "Rp 291 T",
  "income": "Rp 392 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 1,
    "hydro_plant": 15,
    "solar_plant": 24,
    "thermal_plant": 10,
    "gas_plant": 21,
    "wind_plant": 37,
    "power_grid": 80,
    "bicycle_path": 26,
    "subway": 25,
    "railway": 6,
    "highway": 25,
    "road_quality": 57,
    "sea_port": 12,
    "airport": 36,
    "bus_terminal": 25,
    "helipad": 6,
    "internet_coverage": 55,
    "tech_stack": 56,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 9,
    "uranium": 35,
    "coal": 36,
    "oil": 39,
    "gas": 8,
    "salt": 36,
    "nickel": 28,
    "lithium": 16,
    "aluminum": 39,
    "copper": 37,
    "rare_earth": 16,
    "iron_ore": 28,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 31,
    "car": 16,
    "motorcycle": 38,
    "smelter": 5,
    "concrete_cement": 18,
    "wood": 37,
    "mineral_water": 36,
    "sugar": 17,
    "bread": 21,
    "pharmacy": 32,
    "fertilizer": 33,
    "meat_processing": 24,
    "instant_noodle": 10,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 16,
    "poultry": 40,
    "dairy_cow": 29,
    "beef_cow": 30,
    "sheep_goat": 19,
    "shrimp": 14,
    "fish": 17,
    "shellfish": 28,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 19,
    "wheat": 15,
    "corn": 37,
    "tubers": 39,
    "soy": 38,
    "palm_oil": 6,
    "tea": 34,
    "coffee": 30,
    "cocoa": 20,
    "sugarcane": 37,
    "vegetables": 39,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 9,
    "barracks": 40,
    "armory": 11,
    "tank_hangar": 37,
    "military_academy": 29,
    "budget": 12,
    "personnel": 24941,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 92,
        "apc": 131,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 14,
        "kapal_destroyer": 146,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 159,
        "helikopter_serang": 37,
        "pesawat_pengintai": 2
      },
      "total_unit": 1,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 1,
    "military_air_base": 19,
    "military_naval_base": 18,
    "arms_factory": 25,
    "nuclear_status": false,
    "space_program": 30,
    "cyber_defense": 12,
    "intelligence": 37,
    "strategic_operations": {
      "attack_mission": 2,
      "spy_mission": 35,
      "sabotage_mission": 30,
      "territory_management": 29,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 4,
      "radar_network": 4,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 5,
      "elementary_school": 34,
      "middle_school": 38,
      "high_school": 20,
      "university": 33,
      "education_institute": 22,
      "laboratory": 17,
      "observatory": 37,
      "research_center": 13,
      "development_center": 11,
      "literacy": 56,
      "research_index": 0
    },
    "health": {
      "large_hospital": 24,
      "small_hospital": 28,
      "diagnostic_center": 13,
      "hospital_beds": 8810,
      "life_expectancy": 31,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 20,
      "racing_circuit": 22,
      "stadium": 26,
      "international_stadium": 23,
      "olympic_score": 34,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 29,
      "court": 32,
      "prosecution_office": 8,
      "police_station": 3,
      "police_car_fleet": 5151,
      "police_academy": 16,
      "corruption_index": 67,
      "security_index": 59,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 35,
          "sepeda_motor": 32,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 8,
          "helikopter_polisi": 2,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 30,
          "kamera_surveillance": 8,
          "pusat_forensik": 1
        },
        "response_time": 33,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 6,
    "tanks": 32,
    "aircraft": 39,
    "naval": 17,
    "air_base": 6,
    "naval_base": 34,
    "military_base": 16,
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
      "rate": 2,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 13,
      "satisfaction": 52
    },
    "income": {
      "rate": 19,
      "satisfaction": 61
    },
    "customs": {
      "rate": 30,
      "satisfaction": 86
    },
    "environment": {
      "rate": 2,
      "satisfaction": 88
    },
    "other": {
      "rate": 2,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 93,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 7,
    "commercial": 21,
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
      "soft_power": 36,
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
    "agreements": [
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Turki", "type": "Trade", "status": "Active" },
      { "partner": "Spanyol", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Italia", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Rusia", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Singapura", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Belanda", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 16,
    "education": 6,
    "security": 1,
    "finance": 28,
    "environment": 60
  }
};
