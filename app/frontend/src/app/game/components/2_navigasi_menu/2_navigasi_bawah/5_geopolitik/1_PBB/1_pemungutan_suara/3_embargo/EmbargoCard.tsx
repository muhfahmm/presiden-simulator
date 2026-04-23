import { Ban } from "lucide-react";

export interface EmbargoItem {
  name: string;
  description: string;
  effect: string;
}

export interface EmbargoMenu {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  borderColor: string;
  bgColor: string;
  glowColor: string;
  items: EmbargoItem[];
}

export const embargoMenu: EmbargoMenu = {
  id: "embargo",
  title: "Embargo",
  description: "Pelarangan total perdagangan dan pertukaran komoditas tertentu untuk melumpuhkan sektor strategis negara target.",
  icon: Ban,
  color: "text-rose-400",
  borderColor: "border-rose-500/30",
  bgColor: "bg-rose-500/5",
  glowColor: "shadow-rose-500/10",
  items: [
    { 
      name: "Embargo Ekonomi", 
      description: "Pemutusan total seluruh jalur perdagangan ekspor dan impor dengan dunia luar.",
      effect: "Daily Revenue dari jalur perdagangan anjlok hingga 80%. Penurunan Approval Rating warga sebesar 2% per hari akibat kelangkaan barang konsumsi."
    },
    { 
      name: "Embargo Penjualan Teknologi", 
      description: "Larangan pengiriman komponen mikrochip, perangkat lunak, dan data riset dari luar negeri.",
      effect: "Waktu produksi di Cyber Defense dan Program Luar Angkasa melambat 50%. Biaya riset teknologi baru naik 100%."
    },
    { 
      name: "Embargo Penjualan Sumber Daya", 
      description: "Pemblokiran akses pasar internasional untuk menjual komoditas mentah dalam negeri.",
      effect: "Pendapatan harian dari Tambang & Rig Minyak turun 60%. Stok bahan baku industri menumpuk namun tidak bernilai uang."
    },
    { 
      name: "Embargo Senjata", 
      description: "Larangan total impor senjata, suku cadang alutsista, dan amunisi dari manufaktur global.",
      effect: "Produksi di Armada Tempur melambat 40%. Amunisi harian berkurang 10% setiap kali melakukan operasi militer tanpa adanya suplai baru."
    },
  ]
};

interface EmbargoCardProps {
  selectedItem: { category: string; name: string; description: string; effect: string } | null;
  onSelectItem: (item: { category: string; name: string; description: string; effect: string }) => void;
}

export function EmbargoCard({ selectedItem, onSelectItem }: EmbargoCardProps) {
  const menu = embargoMenu;
  
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
