"use client"

interface SDADetailsModalProps {
  selectedCountrySDA: { name: string; flag: string; resources: any } | null;
  sdaIcons: Record<string, { icon: any, color: string, label: string }>;
  onClose: () => void;
}

export default function SDADetailsModal({ selectedCountrySDA, sdaIcons, onClose }: SDADetailsModalProps) {
  if (!selectedCountrySDA) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm pointer-events-auto" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl shadow-2xl max-w-sm w-full font-sans pointer-events-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white font-semibold flex items-center gap-2">
            <span className="text-lg">{selectedCountrySDA.flag}</span> 
            <span>{selectedCountrySDA.name}</span>
          </h3>
          <button className="text-zinc-400 hover:text-white cursor-pointer" onClick={onClose}>✕</button>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-zinc-300">
          {Object.entries(selectedCountrySDA.resources).map(([key, value]) => {
            const asset = sdaIcons[key];
            if (!asset || (value as number) <= 0) return null;
            const IconComp = asset.icon;
            return (
              <div key={key} className="flex items-center gap-2 bg-zinc-800/30 p-2 rounded-md border border-zinc-800/80">
                <IconComp size={16} className={asset.color} />
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-400">{asset.label}</span>
                  <span className="text-white font-medium text-xs">{(value as number)}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
