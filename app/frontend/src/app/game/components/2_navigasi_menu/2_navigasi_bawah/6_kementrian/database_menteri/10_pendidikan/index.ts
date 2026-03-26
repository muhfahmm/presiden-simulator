import { Landmark } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "PENDIDIKAN & KEBUDAYAAN", 
  icon: Landmark, 
  impact: "Kualitas SDM", 
  description: "Mengelola kualitas SDM dan inovasi masa depan, meningkatkan Indeks Pembangunan Manusia (IPM).",
  skill: "Scholar's Program: Meningkatkan efektivitas riset universitas sebesar 15%.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const pendidikan_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 10,
  status: "Kosong",
  minister: `Kandidat Dikbud #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
