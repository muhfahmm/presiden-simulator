import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Clock } from "lucide-react";

interface PlaneDetailCardProps {
  selectedPlane: any;
  onClose: () => void;
  planePositionsRef: React.MutableRefObject<Record<number, { x: number, y: number, tx: any, progress: number }>>;
  mapWidth: number;
  mapHeight: number;
  fgCanvasRef: React.RefObject<HTMLCanvasElement | null>;
}

export const PlaneDetailCard: React.FC<PlaneDetailCardProps> = ({ 
  selectedPlane, 
  onClose, 
  planePositionsRef, 
  mapWidth, 
  mapHeight, 
  fgCanvasRef 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // High-performance position tracking (60fps)
  useEffect(() => {
    let requestRef: number;
    
    const updatePosition = () => {
      const pos = planePositionsRef.current[selectedPlane.id];
      if (pos && cardRef.current && fgCanvasRef.current) {
        const rect = fgCanvasRef.current.getBoundingClientRect();
        
        // Calculate screen coordinates
        const screenX = rect.left + (pos.x / mapWidth) * rect.width;
        const screenY = rect.top + (pos.y / mapHeight) * rect.height;
        
        // Directly manipulate style for smoothest animation
        cardRef.current.style.left = `${screenX}px`;
        cardRef.current.style.top = `${screenY}px`;
        cardRef.current.style.visibility = "visible";
        cardRef.current.style.opacity = "1";

        // Update countdown text directly
        const countdownEl = cardRef.current.querySelector("#plane-countdown");
        if (countdownEl) {
          const daysRem = Math.ceil((1 - pos.progress) * (pos.tx.totalDays || 10));
          countdownEl.textContent = `H-${daysRem} HARI`;
        }
      } else if (!pos) {
        onClose();
      }
      requestRef = requestAnimationFrame(updatePosition);
    };

    requestRef = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(requestRef);
  }, [selectedPlane, planePositionsRef, mapWidth, mapHeight, fgCanvasRef, onClose]);

  if (!isMounted) return null;

  return createPortal(
    <div 
      ref={cardRef}
      className="fixed z-[9999] animate-in zoom-in-95 fade-in duration-300 pointer-events-none"
      style={{ 
        transform: "translate(-50%, -125%)", 
        willChange: "left, top", 
        visibility: "hidden", 
        opacity: 0,
        left: 0,
        top: 0
      }}
    >
      <div className="bg-zinc-950/98 border border-emerald-500/40 backdrop-blur-3xl p-6 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.9),0_0_50px_rgba(16,185,129,0.2)] w-[320px] relative group pointer-events-auto overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500/30 to-blue-600/30 blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_2px,transparent_2px)] bg-[size:100%_4px] pointer-events-none opacity-50"></div>

        <div className="relative space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em] shadow-sm border ${
                selectedPlane.type === 'buy' ? 'bg-rose-500/20 text-rose-400 border-rose-500/30' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
              }`}>
                {selectedPlane.type === 'buy' ? 'CARGO_IMPOR' : 'CARGO_EKSPOR'}
              </div>
            </div>
            <button 
              onClick={onClose} 
              className="text-zinc-500 hover:text-white transition-all cursor-pointer p-2 hover:bg-zinc-800 rounded-full active:scale-90"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-2">
            <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase leading-tight">
              {selectedPlane.commodity || 'Muatan Strategis'}
            </h4>
            <div className="flex items-center gap-2.5">
               <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]"></div>
               <p className="text-[12px] font-black text-emerald-400/90 uppercase tracking-[0.15em] italic">
                 {selectedPlane.amount?.toLocaleString('id-ID')} {selectedPlane.unit || 'Unit'} IN TRANSIT
               </p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50"></div>

          <div className="flex items-center justify-between px-2">
            <div className="flex flex-col">
               <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1">Source</span>
               <span className="text-xs font-black text-zinc-300 uppercase tracking-tight">{selectedPlane.source}</span>
            </div>
            <div className="relative flex-1 flex justify-center items-center mx-4">
               <div className="w-full h-px bg-zinc-800 absolute"></div>
               <div className="px-3 bg-zinc-950 relative z-10 text-emerald-500 flex items-center gap-1.5 scale-110">
                  <div className="w-1 h-1 rounded-full bg-emerald-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                  <div className="w-1 h-1 rounded-full bg-emerald-500/50"></div>
               </div>
            </div>
            <div className="flex flex-col text-right">
               <span className="text-[8px] font-black text-zinc-600 uppercase tracking-widest mb-1">Destination</span>
               <span className="text-xs font-black text-white uppercase tracking-tight">{selectedPlane.dest}</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 rounded-3xl border border-white/5 flex items-center justify-between shadow-2xl relative overflow-hidden group/footer">
            <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/footer:opacity-100 transition-opacity"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="p-2.5 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                 <Clock size={20} className="text-emerald-500" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest leading-none mb-1.5">Delivery Status</span>
                <span id="plane-countdown" className="text-lg font-black text-white italic tracking-widest leading-none drop-shadow-md">
                  H-... HARI
                </span>
              </div>
            </div>
            <div className="flex gap-1.5 relative z-10">
               {[1,2,3].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full bg-emerald-500/30 ${i===1 ? 'animate-bounce' : i===2 ? 'animate-bounce delay-100' : 'animate-bounce delay-200'}`}></div>)}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
