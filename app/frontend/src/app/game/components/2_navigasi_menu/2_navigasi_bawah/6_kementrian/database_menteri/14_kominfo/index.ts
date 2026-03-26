import { Zap } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "KOMUNIKASI & INFORMATIKA", 
  icon: Zap, 
  impact: "Penetrasi Internet", 
  description: "Mengelola infrastruktur digital dan keamanan siber, meningkatkan efisiensi birokrasi digital (E-Gov).",
  skill: "Cyber Shield: Mengurangi risiko serangan siber pada infrastruktur vital.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const kominfo_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 14,
  status: "Kosong",
  minister: `Kandidat Menkominfo #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
