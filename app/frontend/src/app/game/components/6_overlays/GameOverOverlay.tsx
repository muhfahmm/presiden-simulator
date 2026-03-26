"use client"

import { useRouter } from "next/navigation";
import { gameStorage } from "@/app/game/gamestorage";

interface GameOverOverlayProps {
  isGameOver: boolean;
  countryData: any;
}

export default function GameOverOverlay({ isGameOver, countryData }: GameOverOverlayProps) {
  const router = useRouter();

  if (!isGameOver) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-3xl animate-in fade-in duration-1000">
      <div className="max-w-md w-full p-12 bg-zinc-900 border border-red-500/30 rounded-[40px] text-center shadow-[0_0_100px_rgba(239,68,68,0.2)] animate-in zoom-in-95 duration-500">
        <div className="h-24 w-24 bg-red-500/10 border-2 border-red-500/30 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
          <span className="text-4xl text-red-500 font-black">!</span>
        </div>
        <h1 className="text-4xl font-black text-white tracking-tighter uppercase mb-4 italic leading-tight">DEMONSTRASI MASSA BERJALAN ANARKIS</h1>
        <p className="text-zinc-400 text-sm leading-relaxed mb-10 font-medium">
          "Rakyat telah kehilangan kepercayaan sepenuhnya. Gelombang protes besar-besaran telah melumpuhkan pemerintahan dan memaksa Anda turun dari jabatan Presiden {countryData.name_id}."
        </p>
        <button 
          onClick={() => {
            gameStorage.clearSession();
            router.push("/database");
          }}
          className="w-full bg-red-600 hover:bg-red-500 text-white font-black py-5 rounded-2xl shadow-xl transition-all cursor-pointer active:scale-95 text-xs uppercase tracking-[0.3em]"
        >
          Kembali ke Menu Utama
        </button>
      </div>
    </div>
  );
}
