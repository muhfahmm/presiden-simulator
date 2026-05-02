import { useState, useEffect } from "react";
import { Heart, Users, Coins, Shield, LogOut, RotateCcw, TrendingUp, TrendingDown, Clock, Activity, Zap, PieChart, BarChart3, Landmark, Percent, Receipt, Save, CheckCircle2, XCircle, Database, Loader2, AlertTriangle, Trash2, Map, Home } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { HappinessBreakdown } from "@/app/game/components/1_navbar/1_kepuasan";
import { gameStorage } from "@/app/game/gamestorage";
import { populationStorage } from "@/app/game/components/1_navbar/2_populasi";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";
import { stabilityStorage } from "@/app/game/components/1_navbar/4_stabilitas";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";
import { timeStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage";
import { INITIAL_GAME_DATE } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import GameTimeControls from "@/app/game/components/1_navbar/5_navigasi_waktu/GameTimeControls";
import BudgetDetailModal from "@/app/game/components/1_navbar/3_kas_negara/BudgetDetailModal";

import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect as useReactEffect } from "react";

function AnimatedNumber({ value }: { value: number }) {
  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString('id-ID'));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  return <motion.span className="tabular-nums">{display}</motion.span>;
}

// --- Sub-component: StatusBadge ---
interface StatusBadgeProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  delta?: number;
  deltaColor?: string;
  suffix?: string;
  onClick?: () => void;
}

function StatusBadge({ icon, label, value, delta, deltaColor, suffix, onClick }: StatusBadgeProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 bg-[#d4c19c]/40 px-3 py-1.5 rounded-lg border border-amber-800/10 relative group overflow-hidden transition-all min-w-[140px] shrink-0 ${onClick ? 'cursor-pointer hover:border-amber-800/30 hover:bg-[#d4c19c]/60' : ''} shadow-sm`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      {icon}
      <div className="text-left leading-tight relative z-10">
        <p className="text-[10px] text-amber-900/60 font-bold uppercase">{label}</p>
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-black text-amber-950 italic tracking-wide">
            {typeof value === 'number' ? <AnimatedNumber value={value} /> : value}
            {suffix && <span className="ml-1 text-[10px] opacity-70 not-italic uppercase font-bold">{suffix}</span>}
          </p>
          {delta !== undefined && delta !== 0 && (
            <span className={`text-[9px] font-black px-1 rounded-sm ${deltaColor ? deltaColor : (delta > 0 ? 'text-emerald-800 bg-emerald-500/10' : 'text-rose-800 bg-rose-500/10')}`}>
              {delta > 0 ? '+' : ''}{Math.round(delta).toLocaleString('id-ID')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Main Component: GameNavbar ---
interface GameNavbarProps {
  countryData: CountryData;
  happiness: HappinessBreakdown;
  budget: number;
  budgetDelta: number;
  stability: number;
  population: number;
  populationDelta: number;
  setActiveMenu: (menu: string) => void;
  onLogout: () => void;
}

function SaveStatusModal({ 
  show, 
  status, 
  sessionId, 
  onClose 
}: { 
  show: boolean; 
  status: 'loading' | 'success' | 'error'; 
  sessionId?: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[200000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={status !== 'loading' ? onClose : undefined}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#fdf8ef] border-2 border-amber-800/20 rounded-[2.5rem] p-8 max-w-sm w-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none" />

            <div className="flex flex-col items-center text-center gap-6 relative z-10">
              <div className={`h-24 w-24 rounded-full flex items-center justify-center border-2 transition-colors duration-500 ${
                status === 'success' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600' :
                status === 'error' ? 'bg-rose-500/10 border-rose-500/30 text-rose-600' :
                'bg-amber-500/10 border-amber-500/30 text-amber-600'
              }`}>
                {status === 'success' && <motion.div initial={{ rotate: -20, scale: 0.5 }} animate={{ rotate: 0, scale: 1 }}><CheckCircle2 size={48} /></motion.div>}
                {status === 'error' && <motion.div initial={{ rotate: 20, scale: 0.5 }} animate={{ rotate: 0, scale: 1 }}><XCircle size={48} /></motion.div>}
                {status === 'loading' && <Loader2 size={48} className="animate-spin" />}
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-amber-950 italic tracking-tight uppercase">
                  {status === 'success' ? 'Progres Disimpan' : 
                   status === 'error' ? 'Gagal Menyimpan' : 
                   'Sedang Menyimpan'}
                </h3>
                <p className="text-amber-900/60 text-sm font-medium leading-relaxed px-4">
                  {status === 'success' ? 'Data kedaulatan Anda telah berhasil diamankan di arsip pusat PostgreSQL.' : 
                   status === 'error' ? 'Terjadi gangguan koneksi ke server database. Silakan coba beberapa saat lagi.' : 
                   'Menghubungkan ke server pusat untuk sinkronisasi data negara...'}
                </p>
              </div>

              {status === 'success' && sessionId && (
                <div className="w-full bg-amber-800/5 border border-amber-800/10 rounded-2xl p-4 space-y-1.5 group hover:bg-amber-800/10 transition-colors">
                  <div className="flex items-center justify-center gap-2 text-[10px] font-black text-amber-900/40 uppercase tracking-widest">
                    <Database size={10} />
                    <span>ID Sesi Database</span>
                  </div>
                  <code className="block text-[10px] font-bold text-amber-900/80 bg-white/50 py-1 px-2 rounded border border-amber-800/5 truncate">
                    {sessionId}
                  </code>
                </div>
              )}

              {status !== 'loading' && (
                <button
                  onClick={onClose}
                  className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-lg transition-all active:scale-95 ${
                    status === 'success' ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20' :
                    'bg-amber-900 hover:bg-amber-800 text-white shadow-amber-950/20'
                  }`}
                >
                  Lanjutkan Simulasi
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function ResetConfirmModal({ 
  show, 
  onConfirm, 
  onClose 
}: { 
  show: boolean; 
  onConfirm: () => void; 
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[200000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-rose-950/20 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#fdf8ef] border-2 border-rose-800/20 rounded-[2.5rem] p-8 max-w-sm w-full shadow-[0_20px_50px_rgba(159,18,57,0.2)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />

            <div className="flex flex-col items-center text-center gap-6 relative z-10">
              <div className="h-24 w-24 rounded-full bg-rose-500/10 border-2 border-rose-500/30 flex items-center justify-center text-rose-600">
                <motion.div
                  animate={{ 
                    rotate: [0, -10, 10, -10, 10, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    repeatDelay: 1
                  }}
                >
                  <AlertTriangle size={48} />
                </motion.div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-rose-950 italic tracking-tight uppercase">
                  Reset Progres?
                </h3>
                <p className="text-rose-900/60 text-sm font-medium leading-relaxed px-4">
                  Seluruh data kedaulatan (Uang, Stok, Bangunan, & Kepuasan) akan dihapus secara permanen. Tindakan ini tidak dapat dibatalkan.
                </p>
              </div>

              <div className="w-full flex flex-col gap-3">
                <button
                  onClick={() => {
                    onConfirm();
                    onClose();
                  }}
                  className="w-full py-4 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black uppercase tracking-widest text-sm shadow-lg shadow-rose-600/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Trash2 size={16} />
                  Ya, Reset Sekarang
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-4 rounded-2xl bg-amber-800/5 hover:bg-amber-800/10 text-amber-900 font-black uppercase tracking-widest text-sm transition-all active:scale-95"
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

function LogoutModal({ 
  show, 
  onConfirm, 
  onClose 
}: { 
  show: boolean; 
  onConfirm: (path: string) => void; 
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[200000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-amber-950/20 backdrop-blur-md"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#fdf8ef] border-2 border-amber-800/20 rounded-[2.5rem] p-8 max-w-sm w-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />

            <div className="flex flex-col items-center text-center gap-6 relative z-10">
              <div className="h-24 w-24 rounded-full bg-blue-500/10 border-2 border-blue-500/30 flex items-center justify-center text-blue-600">
                <LogOut size={48} />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-black text-amber-950 italic tracking-tight uppercase">
                  Akhiri Sesi?
                </h3>
                <p className="text-amber-900/60 text-sm font-medium leading-relaxed px-4">
                  Pilih tujuan Anda selanjutnya. Sesi simulasi saat ini akan ditutup dengan aman.
                </p>
              </div>

              <div className="w-full flex flex-col gap-3">
                <button
                  onClick={() => onConfirm('/pilih_negara')}
                  className="w-full py-4 rounded-2xl bg-amber-900 hover:bg-amber-800 text-white font-black uppercase tracking-widest text-sm shadow-lg shadow-amber-950/20 transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  <Map size={18} />
                  Ganti Negara Baru
                </button>
                <button
                  onClick={() => onConfirm('/')}
                  className="w-full py-4 rounded-2xl bg-white border-2 border-amber-800/10 hover:border-amber-800/30 text-amber-900 font-black uppercase tracking-widest text-sm transition-all active:scale-95 flex items-center justify-center gap-3 shadow-sm"
                >
                  <Home size={18} />
                  Menu Utama
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-3 mt-2 text-amber-900/40 hover:text-amber-900/60 font-black uppercase tracking-widest text-[10px] transition-all"
                >
                  Batal
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function GameNavbar({
  countryData,
  happiness,
  budget,
  budgetDelta,
  stability,
  population,
  populationDelta,
  setActiveMenu,
  onLogout
}: GameNavbarProps) {
  const [saveStatus, setSaveStatus] = useState<{ show: boolean; status: 'loading' | 'success' | 'error'; sessionId?: string }>({
    show: false,
    status: 'loading'
  });
  const [showResetModal, setShowResetModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100000] bg-[#dcc7a1]/95 backdrop-blur-xl border-b border-amber-800/10 px-8 py-4 flex items-center justify-between shadow-[0_4px_20px_rgba(115,86,45,0.15)]">
        <div className="flex items-center gap-4">
          {countryData && (() => {
            const getCountryCode = (emoji: string) => {
              const chars = [...emoji];
              if (chars.length < 2) return "";
              return chars.map(ch => String.fromCharCode((ch.codePointAt(0) || 0) - 0x1F1E6 + 65)).join("").toLowerCase();
            };
            const code = getCountryCode(countryData.flag);
            
            return (
              <div className="flex items-center gap-3 bg-amber-50/20 pl-2 pr-4 py-1.5 rounded-2xl border border-amber-800/10 shadow-sm backdrop-blur-md group hover:border-amber-600/50 transition-all duration-500">
                <div className="relative w-9 h-6 rounded-md overflow-hidden shadow-md border border-amber-900/10 group-hover:scale-110 transition-transform duration-500">
                  <img 
                    src={`https://flagcdn.com/w160/${code}.png`} 
                    alt={countryData.name_id}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-amber-950 italic tracking-wider uppercase group-hover:text-amber-800 transition-colors">
                    {countryData.name_id}
                  </span>
                </div>

                {/* SAVE BUTTON */}
                <button
                  onClick={async () => {
                    try {
                      const { gameDate } = timeStorage.getState();
                      const diffTime = Math.abs(gameDate.getTime() - INITIAL_GAME_DATE.getTime());
                      const dayCounter = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                      const payload = {
                        country: countryData?.name_id,
                        budget: budget,
                        population: population,
                        happiness: happiness.global,
                        stability: stability,
                        gameDate: gameDate.toISOString().split('T')[0],
                        dayCounter: dayCounter,
                        buildings: buildingStorage.getBuildingDeltas()
                      };

                      console.log("[Save] Sending payload:", payload);

                      setSaveStatus({ show: true, status: 'loading' });

                      const response = await fetch("http://localhost:8081/api/game/save", { 
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload)
                      });

                      if (response.ok) {
                        const data = await response.json();
                        setSaveStatus({ show: true, status: 'success', sessionId: data.session_id });
                      } else {
                        const errText = await response.text();
                        console.error("Save failed:", errText);
                        setSaveStatus({ show: true, status: 'error' });
                      }
                    } catch (err) {
                      console.error("Save error:", err);
                      setSaveStatus({ show: true, status: 'error' });
                    }
                  }}
                  className="cursor-pointer ml-2 p-1.5 rounded-lg bg-amber-800/10 hover:bg-emerald-500/20 text-amber-900/60 hover:text-emerald-700 transition-all border border-transparent hover:border-emerald-500/30 group"
                  title="Simpan Progres ke PostgreSQL"
                >
                  <Save className="h-4 w-4" />
                </button>
              </div>
            );
          })()}
        </div>
        <div className="flex items-center gap-6">
          <StatusBadge
            icon={<Heart className="h-4 w-4 text-rose-500" />}
            label="Kepuasan"
            value={`${happiness.global.toFixed(1)}%`}
          />
          <StatusBadge
            icon={<Users className="h-4 w-4 text-blue-500" />}
            label="Populasi"
            value={population}
            delta={populationDelta}
            onClick={() => setActiveMenu("Dashboard:Populasi:Overview")}
          />
          <StatusBadge
            icon={<Coins className="h-4 w-4 text-yellow-500" />}
            label="Kas Negara"
            value={budget}
            delta={budgetDelta}
            suffix="EM"
          />
          <StatusBadge
            icon={<Shield className="h-4 w-4 text-green-500" />}
            label="Stabilitas"
            value={`${stability}%`}
          />
          <GameTimeControls />

          <button
            onClick={() => setShowResetModal(true)}
            className="cursor-pointer p-1.5 rounded-lg bg-amber-800/10 hover:bg-rose-500/20 text-amber-900/60 hover:text-rose-700 transition-all border border-transparent hover:border-rose-500/30 group"
            title="Reset Progress"
          >
            <RotateCcw size={16} className="group-hover:rotate-[-90deg] transition-transform duration-500" />
          </button>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="cursor-pointer ml-2 p-2 rounded-lg bg-amber-800/10 hover:bg-rose-500/20 text-amber-900/60 hover:text-rose-700 transition-all border border-amber-800/10 group shadow-sm"
            title="Akhiri Sesi"
          >
            <LogOut className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </button>
        </div>
      </header>

      <SaveStatusModal 
        show={saveStatus.show}
        status={saveStatus.status}
        sessionId={saveStatus.sessionId}
        onClose={() => setSaveStatus(prev => ({ ...prev, show: false }))}
      />

      <ResetConfirmModal 
        show={showResetModal}
        onConfirm={async () => {
          try {
            console.log("[RESET] STARTING COMPLETE RESET SEQUENCE");
            
            // STEP 1: Reset Go Server
            const response = await fetch("http://localhost:8081/api/game/reset", { method: "POST" });
            if (!response.ok) console.warn("[RESET] Go Server reset failed");

            // STEP 2: Reset localStorage
            gameStorage.resetCurrentSessionToDefaults();

            // STEP 3: Reset PBB Data
            const { unVotingStorage } = await import("../2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB/1_pemungutan_suara/logika_pemungutan_suara/unVotingStorage");
            unVotingStorage.clear();
            
            // STEP 4: Hard reload with cache bust
            const cacheUuid = Date.now() + "_" + Math.random().toString(36).substring(2, 9);
            window.location.href = window.location.origin + "/game?cb=" + cacheUuid;
          } catch (err) {
            console.error("Reset error:", err);
          }
        }}
        onClose={() => setShowResetModal(false)}
      />

      <LogoutModal 
        show={showLogoutModal}
        onConfirm={(path) => {
          onLogout();
          window.location.href = path;
        }}
        onClose={() => setShowLogoutModal(false)}
      />
    </>
  );
}
