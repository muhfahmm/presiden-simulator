import { Sprout } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "LINGKUNGAN HIDUP & KEHUTANAN", 
  icon: Sprout, 
  impact: "Environmental Health", 
  description: "Menjaga kelestarian alam dan mengelola emisi karbon untuk akses hibah internasional.",
  skill: "Carbon Credit: Mendapatkan pendapatan tambahan dari pasar emisi internasional.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const lingkungan_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 13,
  status: "Kosong",
  minister: `Kandidat LHK #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
