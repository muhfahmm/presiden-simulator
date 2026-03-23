import { CountryData } from "../../types";

export const filipina: CountryData = {
  "name_en": "Philippines",
  "capital": "Manila",
  "name_id": "Filipina",
  "lon": 122,
  "lat": 13,
  "flag": "🇵🇭",
  "pop": "10M",
  "budget": "Rp 240 T",
  "income": "Rp 618 T",
  "religion": "Protestan",
  "ideology": "Kapitalisme",

  // =============================================================
  // 🏗️ INFRASTRUKTUR & KELISTRIKAN (20 Jenis)
  // =============================================================

  "infrastructure": {
    "nuclear_plant": 12,
    "hydro_plant": 31,
    "solar_plant": 5,
    "thermal_plant": 1,
    "gas_plant": 33,
    "wind_plant": 29,
    "power_grid": 59,
    "bicycle_path": 16,
    "subway": 20,
    "railway": 11,
    "highway": 27,
    "road_quality": 65,
    "sea_port": 21,
    "airport": 32,
    "bus_terminal": 34,
    "helipad": 29,
    "internet_coverage": 75,
    "tech_stack": 68,
    "water_access": 74
  },

  // =============================================================
  // ⛏️ EKSTRAKSI & ENERGI (14 Jenis)
  // =============================================================

  "sector_extraction": {
    "gold": 16,
    "uranium": 38,
    "coal": 2,
    "oil": 8,
    "gas": 11,
    "salt": 25,
    "nickel": 36,
    "lithium": 32,
    "aluminum": 19,
    "copper": 24,
    "rare_earth": 21,
    "iron_ore": 32,
    "strength": 29.660809349923973
  },

  // =============================================================
  // 🏭 PENGOLAHAN & MANUFAKTUR (15 Jenis)
  // =============================================================

  "sector_manufacturing": {
    "semiconductor": 12,
    "car": 21,
    "motorcycle": 24,
    "smelter": 14,
    "concrete_cement": 15,
    "wood": 12,
    "mineral_water": 3,
    "sugar": 40,
    "bread": 10,
    "pharmacy": 1,
    "fertilizer": 2,
    "meat_processing": 1,
    "instant_noodle": 2,
    "strength": 3.076011687404966
  },

  // =============================================================
  // 🐄 PETERNAKAN & PERIKANAN (10 Jenis)
  // =============================================================

  "sector_livestock": {
    "chicken": 15,
    "poultry": 3,
    "dairy_cow": 10,
    "beef_cow": 18,
    "sheep_goat": 34,
    "shrimp": 40,
    "fish": 2,
    "shellfish": 33,
    "strength": 18.24560701244298
  },

  // =============================================================
  // 🌾 PERTANIAN & PERKEBUNAN (13 Jenis)
  // =============================================================

  "sector_agriculture": {
    "rice": 14,
    "wheat": 4,
    "corn": 28,
    "tubers": 30,
    "soy": 6,
    "palm_oil": 9,
    "tea": 6,
    "coffee": 12,
    "cocoa": 31,
    "sugarcane": 35,
    "vegetables": 39,
    "strength": 20.660809349923973
  },

  // =============================================================
  // 🛡️ PERTAHANAN & KEAMANAN (24 Jenis)
  // =============================================================

  "sector_defense": {
    "prison": 2,
    "barracks": 28,
    "armory": 26,
    "tank_hangar": 30,
    "military_academy": 31,
    "budget": 27,
    "personnel": 21168,
    "strength": 16.660809349923973,
    "military_fleet": {
      "darat": {
        "main_battle_tank": 37,
        "apc": 6,
        "artileri_berat": 26
      },
      "laut": {
        "kapal_induk": 37,
        "kapal_destroyer": 37,
        "kapal_selam_nuklir": 0
      },
      "udara": {
        "jet_tempur_stealth": 37,
        "helikopter_serang": 38,
        "pesawat_pengintai": 2
      },
      "total_unit": 31,
      "readiness": 98
    }
  },

  // =============================================================
  // 🛰️ STRATEGIS MILITER (19 Jenis)
  // =============================================================

  "sector_military_strategic": {
    "command_center": 22,
    "military_air_base": 28,
    "military_naval_base": 36,
    "arms_factory": 13,
    "nuclear_status": false,
    "space_program": 16,
    "cyber_defense": 23,
    "intelligence": 40,
    "strategic_operations": {
      "attack_mission": 25,
      "spy_mission": 16,
      "sabotage_mission": 7,
      "territory_management": 25,
      "nuclear_program": 0
    },
    "intel_radar": {
      "satellite_system": 3,
      "radar_network": 12,
      "cyber_ops": 2
    }
  },

  // =============================================================
  // 🏥 SOSIAL & PELAYANAN PUBLIK (52 Jenis)
  // =============================================================

  "sector_social": {
    "education": {
      "kindergarten": 14,
      "elementary_school": 39,
      "middle_school": 15,
      "high_school": 35,
      "university": 40,
      "education_institute": 32,
      "laboratory": 40,
      "observatory": 20,
      "research_center": 28,
      "development_center": 32,
      "literacy": 88,
      "research_index": 0
    },
    "health": {
      "large_hospital": 31,
      "small_hospital": 29,
      "diagnostic_center": 25,
      "hospital_beds": 7991,
      "life_expectancy": 16,
      "healthcare_index": 85
    },
    "sports": {
      "swimming_pool": 31,
      "racing_circuit": 15,
      "stadium": 39,
      "international_stadium": 12,
      "olympic_score": 31,
      "popularity": 44
    },
    "law": {
      "legal_aid_center": 17,
      "court": 40,
      "prosecution_office": 20,
      "police_station": 35,
      "police_car_fleet": 600,
      "police_academy": 24,
      "corruption_index": 87,
      "security_index": 73,
      "police_fleet": {
        "patroli_lantas": {
          "mobil_patroli": 15,
          "sepeda_motor": 12,
          "unit_k9": 23
        },
        "taktis_khusus": {
          "swat": 32,
          "helikopter_polisi": 40,
          "anti_huru_hara": 62
        },
        "pusat_komando": {
          "stasiun_polisi": 6,
          "kamera_surveillance": 2,
          "pusat_forensik": 1
        },
        "response_time": 40,
        "public_trust": 50
      }
    }
  },

  // =============================================================
  // ⚔️ KEKUATAN ARMADA MILITER (10 Jenis)
  // =============================================================

  "military": {
    "infantry": 4,
    "tanks": 4,
    "aircraft": 19,
    "naval": 25,
    "air_base": 10,
    "naval_base": 1,
    "military_base": 15,
    "nuclear": false,
    "strength": 10
  },
  "un_vote": "Pro",

  // =============================================================
  // 🚢 PERDAGANGAN INTERNASIONAL (3 Jenis)
  // =============================================================

  "trade": {
    "buy_commodity": 40,
    "sell_commodity": 409
  },

  // =============================================================
  // 💰 PAJAK & EKONOMI (19 Jenis)
  // =============================================================

  "taxes": {
    "vat": {
      "rate": 34,
      "satisfaction": 67
    },
    "corporate": {
      "rate": 5,
      "satisfaction": 52
    },
    "income": {
      "rate": 29,
      "satisfaction": 61
    },
    "customs": {
      "rate": 7,
      "satisfaction": 86
    },
    "environment": {
      "rate": 27,
      "satisfaction": 88
    },
    "other": {
      "rate": 7,
      "satisfaction": 93
    }
  },

  // =============================================================
  // 📊 PERMINTAAN & KEBUTUHAN RAKYAT (6 Jenis)
  // =============================================================

  "demand": {
    "satisfaction": 80,
    "top_demands": [
      "Bantuan Sembako",
      "Penyediaan Lapangan Kerja"
    ],
    "residential": 37,
    "commercial": 39,
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
      "soft_power": 8,
      "hard_power": 21,
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
      { "partner": "Thailand", "type": "Trade", "status": "Active" },
      { "partner": "China", "type": "Trade", "status": "Active" },
      { "partner": "Inggris", "type": "Trade", "status": "Active" },
      { "partner": "Prancis", "type": "Trade", "status": "Active" },
      { "partner": "Korea Selatan", "type": "Trade", "status": "Active" },
      { "partner": "Vietnam", "type": "Trade", "status": "Active" },
      { "partner": "Uni Eropa", "type": "Trade", "status": "Active" },
      { "partner": "Indonesia", "type": "Trade", "status": "Active" },
      { "partner": "Amerika Serikat", "type": "Trade", "status": "Active" },
      { "partner": "India", "type": "Trade", "status": "Active" },
      { "partner": "Jerman", "type": "Trade", "status": "Active" },
      { "partner": "Uni Emirat Arab", "type": "Trade", "status": "Active" },
      { "partner": "Malaysia", "type": "Trade", "status": "Active" }
    ]
  },

  // =============================================================
  // 🏛️ KEMENTERIAN NEGARA (6 Jenis)
  // =============================================================

  "ministries": {
    "health": 13,
    "education": 36,
    "security": 30,
    "finance": 32,
    "environment": 60
  }
};
