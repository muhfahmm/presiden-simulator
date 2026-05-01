"use client"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-zinc-950 flex flex-col items-center justify-center animate-in fade-in duration-300">
      <div className="relative">
        <div className="h-20 w-20 rounded-full border-t-2 border-r-2 border-emerald-500 animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-12 w-12 rounded-full border-b-2 border-l-2 border-red-600 animate-spin"
            style={{ animationDirection: 'reverse' }}
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center gap-2">
        <h2 className="text-lg font-black tracking-[0.3em] text-white uppercase animate-pulse">
          Sincronizing Data
        </h2>
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Menyiapkan Interface Strategis...</p>
      </div>
    </div>
  );
}
