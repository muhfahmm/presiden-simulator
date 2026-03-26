import { Shield } from "lucide-react"
import { Ministry } from "../types"

const base = { 
  name: "PERTAHANAN & KEAMANAN", 
  icon: Shield, 
  impact: "Efisiensi Militer", 
  description: "Mengelola efisiensi militer dan operasional armada, mengurangi biaya pemeliharaan and mempercepat produksi unit.",
  skill: "War Logistician: Biaya operasional armada turun 15% saat sedang agresi.",
};

const PARTIES = ["Profesional", "Independen", "Teknokrat", "Militer", "Akademisi"];

export const pertahanan_options: Ministry[] = Array.from({ length: 20 }).map((_, i) => ({
  ...base,
  id: 2,
  status: "Kosong",
  minister: `Kandidat Hankam #${i + 1}`,
  stats: {
    loyalty: Math.floor(Math.random() * 41) + 55,
    competence: Math.floor(Math.random() * 41) + 55,
    popularity: Math.floor(Math.random() * 41) + 55,
  },
  candidate_id: i + 1,
}));
