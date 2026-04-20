import { 
  Home, Building2, Landmark, Factory, Shield, 
  Activity, Zap, Pickaxe, Beef, Wheat, Pill, Utensils,
  GraduationCap, HeartPulse, Scale, Target, Briefcase, Clapperboard,
  Waves, Battery, Cpu, TreePine, Droplets, Flame, Radio, Hammer, Gem, Mountain
} from "lucide-react";

export interface BuildingInfo {
  id: string;
  label: string;
  capacity: string;
  description: string;
  icon: any;
  color: string;
  unitLabel?: string;
}

export const BUILDING_INFO_REGISTRY: Record<string, BuildingInfo> = {
  // HOUSING
  "rumah_subsidi": {
    id: "rumah_subsidi",
    label: "Rumah Menengah & Subsidi",
    capacity: "5",
    unitLabel: "Jiwa",
    description: "Hunian terintegrasi dengan akses layanan dasar yang dioptimalkan untuk masyarakat kelas menengah dan penerima subsidi.",
    icon: Home,
    color: "text-emerald-500"
  },
  "apartemen": {
    id: "apartemen",
    label: "Apartemen Modern",
    capacity: "6.000",
    unitLabel: "Jiwa",
    description: "Kompleks hunian vertikal kategori high-rise dengan efisiensi lahan tinggi, cocok untuk populasi urban yang padat.",
    icon: Building2,
    color: "text-sky-500"
  },
  "mansion": {
    id: "mansion",
    label: "Mansion Mewah",
    capacity: "10",
    unitLabel: "Jiwa",
    description: "Kediaman eksklusif dengan privasi tinggi dan fasilitas premium untuk warga dengan status ekonomi atas.",
    icon: Landmark,
    color: "text-amber-500"
  },

  // PRODUCTION (Generic entries for categories)
  "5_pabrik_semen": {
    id: "5_pabrik_semen",
    label: "Pabrik Semen (Beton)",
    capacity: "95.000",
    unitLabel: "Unit/Hari",
    description: "Fasilitas manufaktur material konstruksi skala besar untuk menyuplai kebutuhan pembangunan infrastruktur nasional.",
    icon: Factory,
    color: "text-amber-500"
  },
  "4_smelter": {
    id: "4_smelter",
    label: "Smelter Baja",
    capacity: "35.000",
    unitLabel: "Unit/Hari",
    description: "Pusat pengolahan bijih besi menjadi baja berkualitas tinggi untuk industri otomotif dan militer.",
    icon: Hammer,
    color: "text-zinc-400"
  },
  "6_penggergajian_kayu": {
    id: "6_penggergajian_kayu",
    label: "Sawmill Kayu",
    capacity: "32.000",
    unitLabel: "Unit/Hari",
    description: "Pengolahan kayu mentah menjadi papan konstruksi siap pakai untuk pembangunan hunian subsidi.",
    icon: TreePine,
    color: "text-emerald-600"
  },

  // ENERGY
  "1_pembangkit_listrik_tenaga_nuklir": {
    id: "nuklir",
    label: "PLT Nuklir",
    capacity: "3.000",
    unitLabel: "MW",
    description: "Sumber energi bersih stabil dengan output daya besar untuk menopang kebutuhan listrik industri nasional.",
    icon: Zap,
    color: "text-lime-500"
  }
};

/**
 * Helper to find info by key, handling dynamic keys with numbers like "5_pabrik_semen"
 */
export const getBuildingInfo = (key: string): BuildingInfo | undefined => {
  // Direct match
  if (BUILDING_INFO_REGISTRY[key]) return BUILDING_INFO_REGISTRY[key];
  
  // Normalized match (remove prefix like 1_, 2_)
  const normalizedKey = key.replace(/^\d+_/, '');
  
  // Try finding by normalized key or checking if the registry key INCLUDES the search key
  return Object.values(BUILDING_INFO_REGISTRY).find(info => 
    info.id === normalizedKey || 
    key.includes(info.id) || 
    info.id.includes(key)
  );
};
