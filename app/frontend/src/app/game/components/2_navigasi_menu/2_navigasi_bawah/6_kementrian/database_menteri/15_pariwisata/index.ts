import { Landmark } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "PARIWISATA & EKONOMI KREATIF", 
  icon: Landmark, 
  impact: "Pendapatan Non-Pajak", 
  description: "Mengelola sektor pariwisata dan industri kreatif untuk meningkatkan devisa negara.",
  skill: "Global Branding: Meningkatkan popularitas negara di mata dunia secara pasif.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const pariwisata_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 15,
  status: "Kosong",
  minister: `Kandidat Menpar #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
