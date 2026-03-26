import { Landmark } from "lucide-react"
import { Ministry } from "../types"

const TIERS = [
  { eff: 5, cost: 50000, title: "Yunior" },
  { eff: 10, cost: 100000, title: "Asisten" },
  { eff: 15, cost: 150000, title: "Spesialis" },
  { eff: 20, cost: 250000, title: "Senior" },
  { eff: 25, cost: 500000, title: "Ahli Utama" },
  { eff: 50, cost: 1500000, title: "Elit Legendary" }
];

export const pendidikan_options: Ministry[] = TIERS.map((tier, i) => ({
  id: 2,
  name: "MENTERI PENDIDIKAN",
  status: "Kosong",
  minister: `Akademisi ${tier.title}`,
  icon: Landmark,
  impact: "Kualitas SDM",
  description: `Pakar pendidikan tingkat ${tier.title} untuk mencerdaskan kehidupan bangsa.`,
  skill: `Effectiveness: +${tier.eff}%`,
  effectiveness: tier.eff,
  cost: tier.cost,
  candidate_id: i + 1,
}));
