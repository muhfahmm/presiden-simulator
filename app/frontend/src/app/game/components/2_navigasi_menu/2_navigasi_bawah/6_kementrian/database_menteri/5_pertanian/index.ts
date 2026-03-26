import { Sprout } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "PERTANIAN & KETAHANAN PANGAN", 
  icon: Sprout, 
  impact: "Produksi Pangan", 
  description: "Menjaga agar rakyat tidak kelaparan dengan meningkatkan statistik produksi pangan dan menjaga stabilitas harga pasar.",
  skill: "Green Revolution: Meningkatkan hasil panen per hektar tanpa menambah beban biaya.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const pertanian_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 5,
  status: "Kosong",
  minister: `Kandidat Tani #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
