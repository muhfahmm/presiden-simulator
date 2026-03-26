import { Scale, ShieldCheck, Zap } from "lucide-react";

export interface Law {
  id: number;
  title: string;
  description: string;
  plus: string;
  minus: string;
  status: "Aktif" | "Rancangan";
  category: string;
  icon: any;
  color: string;
}

export const MOCK_LAWS: Law[] = [
  {
    id: 1,
    title: "Otomasi Industri",
    description: "Implementasi teknologi robotika dan AI di sektor manufaktur untuk efisiensi maksimal.",
    plus: "Kecepatan produksi di semua Pabrik naik 25%",
    minus: "Angka pengangguran naik tajam",
    status: "Aktif",
    category: "Industri",
    icon: Zap,
    color: "text-purple-500"
  },
  {
    id: 2,
    title: "Pengawasan Siber",
    description: "Penguatan infrastruktur intelijen digital untuk keamanan data nasional.",
    plus: "Mengurangi efektivitas Spionase & Sabotase asing hingga 40%.",
    minus: "Menurunkan skor Demokrasi, memicu demo aktivis dan kecaman internasional.",
    status: "Aktif",
    category: "Keamanan",
    icon: ShieldCheck,
    color: "text-cyan-500"
  },
  {
    id: 3,
    title: "Eksploitasi Sumber Daya Nasional",
    description: "Percepatan ekstraksi mineral dan energi untuk mendongkrak devisa negara.",
    plus: "Output dari Tambang & Rig Minyak naik 30%.",
    minus: "Risiko bencana alam naik, biaya pemeliharaan kesehatan meningkat.",
    status: "Aktif",
    category: "Ekonomi",
    icon: Scale,
    color: "text-emerald-500"
  }
];
