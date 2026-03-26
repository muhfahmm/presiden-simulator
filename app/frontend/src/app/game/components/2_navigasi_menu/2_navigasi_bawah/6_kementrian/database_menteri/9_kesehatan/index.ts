import { Shield } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "KESEHATAN", 
  icon: Shield, 
  impact: "Harapan Hidup", 
  description: "Mengelola sistem kesehatan nasional dan respon pandemi, meningkatkan kualitas hidup rakyat.",
  skill: "Pandemic Response: Mengurangi efek negatif wabah sebesar 30%.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const kesehatan_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 9,
  status: "Kosong",
  minister: `Kandidat Menkes #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
