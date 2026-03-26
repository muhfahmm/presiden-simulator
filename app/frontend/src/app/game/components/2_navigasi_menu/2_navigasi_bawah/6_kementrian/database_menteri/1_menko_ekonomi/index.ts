import { Briefcase } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "MENKO EKONOMI & FINANSIAL", 
  icon: Briefcase, 
  impact: "Pajak & Hutang", 
  description: "Menteri ini mengelola arus kas dan investasi nasional, mempengaruhi pendapatan pajak dan bunga hutang.",
  skill: "Tax Optimizer: Menaikkan pajak tanpa menurunkan kepuasan rakyat secara drastis.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const ekonomi_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 1, // Slot ID
  status: "Kosong",
  minister: `Kandidat Ekonomi #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1, // Unique ID for candidate within this slot
}));
