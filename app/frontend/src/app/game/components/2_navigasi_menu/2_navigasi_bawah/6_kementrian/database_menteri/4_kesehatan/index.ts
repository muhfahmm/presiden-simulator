import { Shield } from "lucide-react"
import { Ministry } from "../types"

const TIERS = [
  { eff: 5, cost: 50000, title: "Yunior" },
  { eff: 10, cost: 100000, title: "Asisten" },
  { eff: 15, cost: 150000, title: "Spesialis" },
  { eff: 20, cost: 250000, title: "Senior" },
  { eff: 25, cost: 500000, title: "Ahli Utama" },
  { eff: 50, cost: 1500000, title: "Elit Legendary" }
];

export const kesehatan_options: Ministry[] = TIERS.map((tier, i) => ({
  id: 4,
  name: "MENTERI KESEHATAN",
  status: "Kosong",
  minister: `Medis ${tier.title}`,
  icon: Shield,
  impact: "Harapan Hidup",
  description: `Tenaga kesehatan tingkat ${tier.title} untuk layanan medis berkualitas.`,
  skill: `Effectiveness: +${tier.eff}%`,
  effectiveness: tier.eff,
  cost: tier.cost,
  candidate_id: i + 1,
}));
