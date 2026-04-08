import { Factory } from "lucide-react"
import { Ministry } from "../types"

const TIERS = [
  { eff: 5, cost: 1000000, title: "Yunior" },
  { eff: 10, cost: 5000000, title: "Asisten" },
  { eff: 15, cost: 15000000, title: "Spesialis" },
  { eff: 20, cost: 25000000, title: "Senior" },
  { eff: 25, cost: 50000000, title: "Ahli Utama" },
  { eff: 50, cost: 100000000, title: "Elit Legendary" }
];

export const infrastruktur_options: Ministry[] = TIERS.map((tier, i) => ({
  id: 1,
  name: "MENTERI INFRASTRUKTUR",
  status: "Kosong",
  minister: `Praktisi ${tier.title}`,
  icon: Factory,
  impact: "Distribusi Material & Logistik (+%)",
  description: `Ahli infrastruktur tingkat ${tier.title} untuk percepatan pembangunan fisik nasional.`,
  skill: `Effectiveness: +${tier.eff}%`,
  effectiveness: tier.eff,
  cost: tier.cost,
  candidate_id: i + 1,
}));
