import { Factory } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "PERINDUSTRIAN & PERDAGANGAN", 
  icon: Factory, 
  impact: "Ekspor & Manufaktur", 
  description: "Mengelola Jalur Perdagangan Dunia dan sektor manufaktur, menaikkan harga jual ekspor dan mempercepat produksi pabrik.",
  skill: "Trade Negotiator: Membuka jalur perdagangan baru yang sebelumnya terblokir.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const industri_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 4,
  status: "Kosong",
  minister: `Kandidat Dagrin #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
