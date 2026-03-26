import { Microscope } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "RISET & TEKNOLOGI", 
  icon: Microscope, 
  impact: "Waktu Riset", 
  description: "Berhubungan dengan Program Nuklir dan Luar Angkasa, mempercepat waktu riset untuk unit-unit masa depan.",
  skill: "Innovation Lead: Mengurangi biaya riset teknologi baru sebesar 20%.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const ristek_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 7,
  status: "Kosong",
  minister: `Kandidat Ristek #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
