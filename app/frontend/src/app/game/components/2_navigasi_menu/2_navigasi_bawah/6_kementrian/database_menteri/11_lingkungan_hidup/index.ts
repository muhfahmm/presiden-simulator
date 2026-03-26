import { Sprout } from "lucide-react"
import { Ministry } from "../types"

const TIERS = [
  { eff: 5, cost: 50000, title: "Yunior" },
  { eff: 10, cost: 100000, title: "Asisten" },
  { eff: 15, cost: 150000, title: "Spesialis" },
  { eff: 20, cost: 250000, title: "Senior" },
  { eff: 25, cost: 500000, title: "Ahli Utama" },
  { eff: 50, cost: 1500000, title: "Elit Legendary" }
];

export const lingkungan_hidup_options: Ministry[] = TIERS.map((tier, i) => ({
  id: 11,
  name: "MENTERI LINGKUNGAN HIDUP",
  status: "Kosong",
  minister: `Konservasi ${tier.title}`,
  icon: Sprout,
  impact: "Keberlanjutan Alam",
  description: `Penjaga alam tingkat ${tier.title} untuk ekosistem yang sehat dan lestari.`,
  skill: `Effectiveness: +${tier.eff}%`,
  effectiveness: tier.eff,
  cost: tier.cost,
  candidate_id: i + 1,
}));
