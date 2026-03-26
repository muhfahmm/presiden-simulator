import { Globe } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "LUAR NEGERI", 
  icon: Globe, 
  impact: "Diplomatic Standing", 
  description: "Mengelola hubungan internasional (ASEAN, PBB), meningkatkan posisi diplomatik dan mempermudah bantuan internasional.",
  skill: "Diplomatic Shield: Menghindari sanksi ekonomi PBB meski melakukan agresi militer.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const luar_negeri_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 8,
  status: "Kosong",
  minister: `Kandidat Deplu #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
