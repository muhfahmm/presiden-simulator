import { Shield } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "DALAM NEGERI & HUKUM", 
  icon: Shield, 
  impact: "Stabilitas & Korupsi", 
  description: "Mengelola stabilitas politik dan indeks korupsi, menurunkan tingkat korupsi dan mengelola rating kepuasan rakyat.",
  skill: "Stability Keeper: Mengurangi frekuensi demo/protes saat pajak dinaikkan.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const dalam_negeri_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 6,
  status: "Kosong",
  minister: `Kandidat Dagri #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
