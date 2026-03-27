import { Microscope } from "lucide-react"
import { Ministry } from "../types"

const TIERS = [
  { eff: 5, cost: 50000, title: "Yunior" },
  { eff: 10, cost: 100000, title: "Asisten" },
  { eff: 15, cost: 150000, title: "Spesialis" },
  { eff: 20, cost: 250000, title: "Senior" },
  { eff: 25, cost: 500000, title: "Ahli Utama" },
  { eff: 50, cost: 1500000, title: "Elit Legendary" }
];

export const sains_penelitian_options: Ministry[] = TIERS.map((tier, i) => ({
  id: 3,
  name: "MENTERI SAINS DAN PENELITIAN",
  status: "Kosong",
  minister: `Ilmuwan ${tier.title}`,
  icon: Microscope,
  impact: "Inovasi Teknologi",
  description: `Peneliti tingkat ${tier.title} untuk penguasaan IPTEK nasional.`,
  skill: `Effectiveness: +${tier.eff}%`,
  effectiveness: tier.eff,
  cost: tier.cost,
  candidate_id: i + 1,
}));
