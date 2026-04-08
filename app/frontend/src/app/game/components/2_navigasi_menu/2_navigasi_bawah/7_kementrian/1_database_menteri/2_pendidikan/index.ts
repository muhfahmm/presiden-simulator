import { Landmark } from "lucide-react"
import { Ministry } from "../types"

const TIERS = [
  { eff: 5, cost: 1000000, title: "Yunior" },
  { eff: 10, cost: 5000000, title: "Asisten" },
  { eff: 15, cost: 15000000, title: "Spesialis" },
  { eff: 20, cost: 25000000, title: "Senior" },
  { eff: 25, cost: 50000000, title: "Ahli Utama" },
  { eff: 50, cost: 100000000, title: "Elit Legendary" }
];

export const pendidikan_options: Ministry[] = TIERS.map((tier, i) => ({
  id: 2,
  name: "MENTERI PENDIDIKAN",
  status: "Kosong",
  minister: `Akademisi ${tier.title}`,
  icon: Landmark,
  impact: "Pertumbuhan IQ & Kualitas SDM (+%)",
  description: `Pakar pendidikan tingkat ${tier.title} untuk mencerdaskan kehidupan bangsa.`,
  skill: `Effectiveness: +${tier.eff}%`,
  effectiveness: tier.eff,
  cost: tier.cost,
  candidate_id: i + 1,
}));
