import { Landmark, Shield, Star, Zap, User, RefreshCw, ChevronRight, Info, Globe, Sprout, Briefcase, Factory, Microscope } from "lucide-react"

export interface MinisterStats {
  loyalty: number;
  competence: number;
  popularity: number;
}

export interface Ministry {
  id: number;
  name: string;
  status: "Terisi" | "Kosong";
  minister: string;
  icon: any;
  impact: string;
  description: string;
  skill: string;
  stats: MinisterStats;
  candidate_id?: number;
}
