import { User } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "SOSIAL & TRANSMIGRASI", 
  icon: User, 
  impact: "Kesejahteraan Rakyat", 
  description: "Mengelola kesejahteraan masyarakat tingkat bawah and pemerataan persebaran penduduk.",
  skill: "Social Safety Net: Mengurangi risiko kerusuhan saat terjadi krisis ekonomi.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const sosial_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 12,
  status: "Kosong",
  minister: `Kandidat Mensos #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
