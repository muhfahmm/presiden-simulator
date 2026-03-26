import { Factory } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "PERHUBUNGAN & INFRASTRUKTUR", 
  icon: Factory, 
  impact: "Konektivitas Wilayah", 
  description: "Mengelola konektivitas antar wilayah and logistik nasional, mengurangi biaya logistik nasional.",
  skill: "Infrastructure Booster: Mempercepat pembangunan infrastruktur sebesar 20%.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const perhubungan_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 11,
  status: "Kosong",
  minister: `Kandidat Hubstra #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
