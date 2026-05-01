"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, Trash2 as TrashIcon, Database, Calendar, Coins, ArrowLeft, Loader2 } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";

interface SaveGame {
  id: string;
  country: string;
  budget: number;
  date: string;
  lastSaved: string;
}

function DeleteConfirmModal({ 
  show, 
  countryName,
  onConfirm, 
  onClose 
}: { 
  show: boolean; 
  countryName: string;
  onConfirm: () => void; 
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-zinc-900 border border-red-500/20 rounded-[2rem] p-8 max-w-sm w-full shadow-[0_20px_50px_rgba(220,38,38,0.15)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent pointer-events-none" />

            <div className="flex flex-col items-center text-center gap-6 relative z-10">
              <div className="h-20 w-20 rounded-full bg-red-500/10 border-2 border-red-500/30 flex items-center justify-center text-red-500">
                <AlertTriangle size={40} />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-black text-zinc-100 italic tracking-tight uppercase">
                  Hapus Data Sesi?
                </h3>
                <p className="text-zinc-400 text-xs font-medium leading-relaxed px-4">
                  Data kedaulatan <span className="text-red-400 font-bold underline">{countryName}</span> akan dihapus secara permanen dari database PostgreSQL.
                </p>
              </div>

              <div className="w-full flex flex-col gap-3">
                <button
                  onClick={onConfirm}
                  className="w-full py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-red-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <TrashIcon size={14} />
                  Hapus Permanen
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-black uppercase tracking-widest text-xs transition-all active:scale-95"
                >
                  Batalkan
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function LoadGamePage() {
  const [saves, setSaves] = useState<SaveGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<SaveGame | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchSaves();
  }, []);

  const fetchSaves = async () => {
    try {
      const response = await fetch("http://localhost:8081/api/game/list-saves");
      if (response.ok) {
        const data = await response.json();
        setSaves(data || []);
      }
    } catch (err) {
      console.error("Failed to fetch saves:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoad = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:8081/api/game/load?id=${id}`);
      if (response.ok) {
        router.push("/game");
      } else {
        alert("Gagal memuat save game.");
      }
    } catch (err) {
      alert("Error koneksi ke server.");
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;

    try {
      const response = await fetch("http://localhost:8081/api/game/delete-save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ session_id: deleteTarget.id })
      });

      if (response.ok) {
        setSaves(prev => prev.filter(s => s.id !== deleteTarget.id));
        setDeleteTarget(null);
      } else {
        alert("Gagal menghapus data.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error koneksi ke server.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col">
      <ParticleCanvas />
      
      {/* Header */}
      <header className="relative z-10 p-8 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-md">
        <button 
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold uppercase tracking-widest text-sm">Kembali</span>
        </button>
        
        <div className="flex items-center gap-3">
          <Database className="h-6 w-6 text-emerald-500" />
          <h1 className="text-2xl font-black uppercase tracking-tighter italic bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
            Database Sesi Aktif
          </h1>
        </div>
        
        <div className="w-24"></div> {/* Spacer */}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 p-8 overflow-y-auto max-w-5xl mx-auto w-full">
        {isLoading ? (
          <div className="h-full flex flex-col items-center justify-center gap-4 text-zinc-500">
            <Loader2 className="h-10 w-10 animate-spin" />
            <p className="font-mono uppercase tracking-widest text-xs">Membaca Database...</p>
          </div>
        ) : saves.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center gap-6 text-center">
            <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800">
              <Database className="h-10 w-10 text-zinc-700" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Belum ada data tersimpan</h2>
              <p className="text-zinc-500 max-w-xs">Mulai permainan baru dan klik ikon simpan di Navbar untuk mencatat progress ke PostgreSQL.</p>
            </div>
            <button 
              onClick={() => router.push("/pilih_negara")}
              className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold transition-all"
            >
              Mulai Baru
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {saves.map((save) => (
              <div 
                key={save.id}
                className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-500 hover:bg-zinc-800/80 backdrop-blur-sm cursor-pointer"
                onClick={() => handleLoad(save.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight italic text-zinc-100 group-hover:text-emerald-400 transition-colors">
                      {save.country}
                    </h3>
                    <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mt-1">
                      ID: {save.id.substring(0, 8)}...
                    </p>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/20">
                    Active Session
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-zinc-800/50">
                    <div className="p-2 rounded-lg bg-yellow-500/10">
                      <Coins className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">Anggaran</p>
                      <p className="font-bold text-zinc-200 tracking-tight">
                        {save.budget.toLocaleString('id-ID')} EM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-zinc-800/50">
                    <div className="p-2 rounded-lg bg-blue-500/10">
                      <Calendar className="h-4 w-4 text-blue-500" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">Tanggal Game</p>
                      <p className="font-bold text-zinc-200 tracking-tight">
                        {save.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-[10px] text-zinc-500 font-medium uppercase tracking-widest pt-4 border-t border-zinc-800/50">
                  <span>Terakhir Disimpan</span>
                  <span className="text-zinc-400">{new Date(save.lastSaved).toLocaleString('id-ID')}</span>
                </div>

                <div className="absolute right-4 bottom-4 z-20">
                   <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setDeleteTarget(save);
                    }}
                    className="p-3 rounded-xl bg-red-500/0 hover:bg-red-500/10 text-zinc-600 hover:text-red-500 transition-all duration-300 border border-transparent hover:border-red-500/20"
                   >
                      <TrashIcon className="h-5 w-5" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <DeleteConfirmModal 
        show={!!deleteTarget}
        countryName={deleteTarget?.country || ""}
        onConfirm={handleDelete}
        onClose={() => setDeleteTarget(null)}
      />

      <footer className="relative z-10 p-6 text-center text-[10px] text-zinc-700 font-mono tracking-widest uppercase border-t border-white/5">
        Presiden Simulator Persistence System v1.0 - SQL Powered
      </footer>
    </div>
  );
}
