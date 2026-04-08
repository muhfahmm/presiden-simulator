import { AlertTriangle } from "lucide-react";

export interface SanksiItem {
  name: string;
  description: string;
  effect: string;
}

export interface SanksiMenu {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  borderColor: string;
  bgColor: string;
  glowColor: string;
  items: SanksiItem[];
}

export const sanksiMenu: SanksiMenu = {
  id: "sanksi",
  title: "Sanksi",
  description: "Tindakan koersif terhadap negara target untuk memberikan hukuman atas pelanggaran hukum internasional.",
  icon: AlertTriangle,
  color: "text-amber-400",
  borderColor: "border-amber-500/30",
  bgColor: "bg-amber-500/5",
  glowColor: "shadow-amber-500/10",
  items: [
    { 
      name: "Sanksi Ekonomi (Economic Sanction)", 
      description: "Pembatasan akses keuangan dan pembekuan aset negara di bank internasional.",
      effect: "Penurunan Pajak & Daily Revenue sebesar 25%. Biaya pembangunan gedung baru naik 15% karena kesulitan modal."
    },
    { 
      name: "Sanksi Perang (War Sanction)", 
      description: "Hukuman atas agresi militer yang dianggap tidak sah oleh dewan internasional.",
      effect: "Penurunan Combat Readiness armada sebesar 20%. Biaya operasional Hub Militer naik 30% karena kesulitan rantai pasok taktis."
    },
  ]
};

interface SanksiCardProps {
  selectedItem: { category: string; name: string; description: string; effect: string } | null;
  onSelectItem: (item: { category: string; name: string; description: string; effect: string }) => void;
}

export function SanksiCard({ selectedItem, onSelectItem }: SanksiCardProps) {
  const menu = sanksiMenu;
  
  return (
    <div className={`rounded-3xl border ${menu.borderColor} ${menu.bgColor} shadow-lg ${menu.glowColor} overflow-hidden`}>
      {/* Card Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
        <div className={`p-2 rounded-xl bg-zinc-900/80 border border-zinc-800`}>
          <menu.icon className={`h-4 w-4 ${menu.color}`} />
        </div>
        <h3 className={`text-xs font-black uppercase tracking-widest ${menu.color}`}>{menu.title}</h3>
        <span className={`ml-auto text-[10px] font-black px-2 py-0.5 rounded-full border ${menu.borderColor} ${menu.color}`}>
          {menu.items.length} OPSI
        </span>
      </div>
      {/* Card Items */}
      <div className="p-4 flex flex-col gap-2">
        {menu.items.map((item, i) => {
          const isSelected = selectedItem?.name === item.name;
          return (
            <button
              key={i}
              onClick={() => onSelectItem({ category: menu.title, name: item.name, description: item.description, effect: item.effect })}
              className={`w-full flex items-center justify-between px-4 py-3 border rounded-2xl transition-all group text-left cursor-pointer ${
                isSelected 
                  ? "bg-zinc-800 border-zinc-600 shadow-md ring-1 ring-white/10" 
                  : "bg-zinc-900/60 border-zinc-800/50 hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`h-1.5 w-1.5 rounded-full ${isSelected ? menu.color.replace('text-', 'bg-') : 'bg-zinc-700'} group-hover:scale-150 transition-transform`} />
                <span className={`text-xs font-bold transition-colors uppercase tracking-tight ${isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>{item.name}</span>
              </div>
              <span className={`text-[9px] font-black transition-colors uppercase tracking-widest ${isSelected ? "text-white" : "text-zinc-600 group-hover:text-zinc-400"}`}>
                {isSelected ? "PROSES →" : "→"}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
