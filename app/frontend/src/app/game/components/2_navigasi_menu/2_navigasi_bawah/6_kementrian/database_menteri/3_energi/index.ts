import { Zap } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "ENERGI & SUMBER DAYA MINERAL", 
  icon: Zap, 
  impact: "Output MW Listrik", 
  description: "Sangat krusial untuk menjaga kartu-kartu pabrik tetap menyala dengan meningkatkan output listrik dan efisiensi tambang.",
  skill: "Grid Master: Mengurangi kebocoran daya listrik nasional sebesar 10%.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const energi_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 3,
  status: "Kosong",
  minister: `Kandidat ESDM #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
