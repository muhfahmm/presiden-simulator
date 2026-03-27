import { Landmark, Shield, Star, Zap, User, RefreshCw, ChevronRight, Info, Globe, Sprout, Briefcase, Factory, Microscope } from "lucide-react"

export interface Ministry {
  id: number;
  name: string;
  status: "Terisi" | "Kosong";
  minister: string;
  icon: any;
  impact: string;
  description: string;
  skill: string;
  candidate_id?: number;
  cost?: number;
  effectiveness?: number;
}
