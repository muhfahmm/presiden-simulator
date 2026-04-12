"use client"

import React, { useState, useEffect } from 'react';
import { researchStorage } from '../researchStorage';
import { timeStorage } from '@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/timeStorage';


import { 
  ArrowLeft, 
  Factory, 
  Lock, 
  CheckCircle2, 
  Zap, 
  Clock, 
  ChevronRight,
  Target,
  Pickaxe,
  Flame,
  Layers,
  Settings,
  Cpu,
  Truck,
  Globe,
  Database,
  Activity,
  Box,
  Binary,
  Microscope,
  Cpu as Chip,
  Atom,
  Wind,
  ShieldCheck,
  Building2,
  TrendingUp,
  Workflow, 
  Zap as Power, 
  Gem, 
  Milk, 
  Sprout, 
  Anchor, 
  ChefHat, 
  Pill, 
  Droplets, 
  Radio, 
  GanttChart,
  Search
} from 'lucide-react';


interface TechNode {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  time: string;
  reward: string;
  category: string;
  tier: number; // 1 to 5
  status: 'available' | 'locked' | 'researching' | 'completed';
}

interface IndustrialResearchDetailProps {
  onBack: () => void;
}

export default function IndustrialResearchDetail({ onBack }: IndustrialResearchDetailProps) {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [researchState, setResearchState] = useState(researchStorage.getState());

  useEffect(() => {
    const handleUpdate = () => {
      setResearchState(researchStorage.getState());
    };
    window.addEventListener('research_updated', handleUpdate);
    return () => window.removeEventListener('research_updated', handleUpdate);
  }, []);

  const handleStartResearch = (id: string, time: string) => {
    const { gameDate } = timeStorage.getState();
    researchStorage.startResearch(id, time, gameDate);
  };


  const handleCompleteResearch = (id: string) => {
    researchStorage.completeResearch(id);
  };


  const categories = [
    { key: 'listrik', label: 'Sektor Listrik Nasional', icon: Power, color: 'text-amber-400' },
    { key: 'mineral', label: 'Sektor Mineral Kritis', icon: Gem, color: 'text-rose-400' },
    { key: 'manufaktur', label: 'Sektor Manufaktur', icon: Factory, color: 'text-blue-400' },
    { key: 'peternakan', label: 'Sektor Peternakan', icon: Milk, color: 'text-orange-400' },
    { key: 'agrikultur', label: 'Sektor Agrikultur', icon: Sprout, color: 'text-emerald-400' },
    { key: 'perikanan', label: 'Sektor Perikanan', icon: Anchor, color: 'text-cyan-400' },
    { key: 'pangan', label: 'Sektor Olahan Pangan', icon: ChefHat, color: 'text-yellow-400' },
    { key: 'farmasi', label: 'Sektor Farmasi', icon: Pill, color: 'text-purple-400' },
  ];

  // Define 40 Nodes (8 sectors x 5 tiers)
  const baseNodes: Omit<TechNode, 'status'>[] = [
    // 1. Sektor Listrik Nasional
    { id: 'listrik_1', name: 'Gardu Distribusi Terintegrasi', description: 'Digitalisasi pembagian beban listrik tingkat regional untuk meminimalkan kehilangan daya.', icon: Zap, time: '100 Hari', reward: '+10% Efisiensi Transmisi Energi', category: 'listrik', tier: 1 },
    { id: 'listrik_2', name: 'Transmisi Superkonduktor Suhu Ruang', description: 'Implementasi material kabel tanpa resistansi untuk distribusi listrik jarak jauh.', icon: Activity, time: '210 Hari', reward: '-15% Biaya Pembangunan Infrastruktur Energi', category: 'listrik', tier: 2 },
    { id: 'listrik_3', name: 'Jaringan Cerdas AI (Smart Grid)', description: 'Algoritma manajemen permintaan energi secara realtime untuk menghindari beban puncak.', icon: Binary, time: '350 Hari', reward: '+20% Penghematan Listrik Sektor Industri', category: 'listrik', tier: 3 },
    { id: 'listrik_4', name: 'High-Density Graphene Storage', description: 'Penyimpanan energi skala grid untuk stabilitas pasokan listrik nasional 24/7.', icon: Database, time: '480 Hari', reward: 'Efisiensi 10% Konsumsi Listrik Sektor Publik', category: 'listrik', tier: 4 },
    { id: 'listrik_5', name: 'Reaktor Fusi Nuklir Komersial', description: 'Generasi energi bersih tak terbatas melalui fusi magnetik yang aman dan stabil.', icon: Power, time: '720 Hari', reward: '+50% Kapasitas Produksi Energi Nasional', category: 'listrik', tier: 5 },


    // 2. Sektor Mineral Kritis
    { id: 'mineral_1', name: 'Eksplorasi Geologi AI', description: 'Pemetaan deposit mineral menggunakan sensor satelit.', icon: Search, time: '90 Hari', reward: '+10% Kecepatan Penambangan', category: 'mineral', tier: 1 },
    { id: 'mineral_2', name: 'Refining Logam Tanah Jarang', description: 'Pemisahan mineral kompleks untuk industri tech.', icon: Gem, time: '240 Hari', reward: '+15% Nilai Ekspor Bijih Mineral', category: 'mineral', tier: 2 },
    { id: 'mineral_3', name: 'Pemurnian Litium Lanjut', description: 'Kapasitas produksi litium tingkat tinggi untuk baterai.', icon: Droplets, time: '380 Hari', reward: '+20% Pendapatan Industri Baterai', category: 'mineral', tier: 3 },
    { id: 'mineral_4', name: 'Daur Ulang Sirkular', description: 'Ekstraksi kembali mineral berharga dari limbah elektronik.', icon: Workflow, time: '520 Hari', reward: '-10% Biaya Impor Logam Mentah', category: 'mineral', tier: 4 },
    { id: 'mineral_5', name: 'Pertambangan Luar Angkasa', description: 'Eksploitasi mineral dari asteroid terdekat.', icon: Globe, time: '900 Hari', reward: 'Dominasi Sumber Daya Nasional', category: 'mineral', tier: 5 },

    // 3. Sektor Manufaktur
    { id: 'man_1', name: 'Lini Perakitan Otomatis', description: 'Penggunaan ban berjalan dan sortir mekanis.', icon: Workflow, time: '80 Hari', reward: '+10% Speed Pembangunan Pabrik', category: 'manufaktur', tier: 1 },
    { id: 'man_2', name: 'Robotika Industri 3.0', description: 'Lengan robot dengan presisi tinggi di setiap lini.', icon: Chip, time: '190 Hari', reward: '+15% Kualitas & Nilai Barang Ekspor', category: 'manufaktur', tier: 2 },
    { id: 'man_3', name: 'Additive Manufacturing', description: 'Pencetakan komponen kompleks dalam satu proses.', icon: Box, time: '320 Hari', reward: '-20% Biaya Konstruksi Infrastruktur', category: 'manufaktur', tier: 3 },
    { id: 'man_4', name: 'Sistem Pabrik Cerdas', description: 'Pabrik yang dapat mengoreksi kesalahan produksi sendiri.', icon: Settings, time: '450 Hari', reward: '-15% Biaya Operasional Industri', category: 'manufaktur', tier: 4 },
    { id: 'man_5', name: 'Nano-Assembler massal', description: 'Fabrikasi produk pada tingkat atom secara massal.', icon: Atom, time: '600 Hari', reward: '+30% Total Pendapatan Manufaktur', category: 'manufaktur', tier: 5 },

    // 4. Sektor Peternakan
    { id: 'ternak_1', name: 'Nutrisi Pakan Fortifikasi', description: 'Suplemen pakan untuk pertumbuhan hewan lebih cepat.', icon: Droplets, time: '75 Hari', reward: '+10% Produksi Daging & Susu', category: 'peternakan', tier: 1 },
    { id: 'ternak_2', name: 'Inseminasi Buatan Lanjut', description: 'Optimalisasi genetika hewan ternak nasional.', icon: Binary, time: '160 Hari', reward: '+15% Kecepatan Pertumbuhan Ternak', category: 'peternakan', tier: 2 },
    { id: 'ternak_3', name: 'Smart Barn System', description: 'Monitoring kesehatan hewan secara individu otomatis.', icon: Radio, time: '280 Hari', reward: '-30% Resiko Penyakit Ternak', category: 'peternakan', tier: 3 },
    { id: 'ternak_4', name: 'Bio-Fasilitas Modern', description: 'Pusat pengolahan limbah ternak menjadi biogas.', icon: Wind, time: '420 Hari', reward: '+10% Efisiensi Energi Sampingan', category: 'peternakan', tier: 4 },
    { id: 'ternak_5', name: 'Daging Budidaya Lab', description: 'Produksi daging tanpa perlu menyembelih hewan.', icon: Microscope, time: '550 Hari', reward: 'Kemandirian Protein Nasional', category: 'peternakan', tier: 5 },

    // 5. Sektor Agrikultur
    { id: 'tani_1', name: 'Irigasi Tetes Presisi', description: 'Penghematan air dan nutrisi tanaman secara akurat.', icon: Droplets, time: '120 Hari', reward: '+15% Hasil Panen Nasional', category: 'agrikultur', tier: 1 },
    { id: 'tani_2', name: 'Pupuk Bio-Organik Lanjut', description: 'Mempercepat masa panen tanpa merusak tanah.', icon: Sprout, time: '220 Hari', reward: '-20% Penggunaan Lahan Pertanian', category: 'agrikultur', tier: 2 },
    { id: 'tani_3', name: 'Vertical Farming Urbano', description: 'Sistem pertanian bertingkat di pusat kota.', icon: Building2, time: '340 Hari', reward: 'Ketahanan Pangan Kota: +10% Kepuasan', category: 'agrikultur', tier: 3 },
    { id: 'tani_4', name: 'Drone Pertanian AI', description: 'Penyemprotan dan pemantauan otomatis berbasis AI.', icon: Wind, time: '460 Hari', reward: '-25% Biaya Operasional Sektor Tani', category: 'agrikultur', tier: 4 },
    { id: 'tani_5', name: 'Rekayasa Benih Super', description: 'Benih yang tahan terhadap segala cuaca ekstrim.', icon: Atom, time: '620 Hari', reward: 'Era Keemasan Agrikultur Antar-Iklim', category: 'agrikultur', tier: 5 },

    // 6. Sektor Perikanan
    { id: 'ikan_1', name: 'Sonar Deteksi Ikan', description: 'Memudahkan nelayan menemukan kumpulan ikan.', icon: Radio, time: '115 Hari', reward: '+10% Hasil Tangkap Nelayan', category: 'perikanan', tier: 1 },
    { id: 'ikan_2', name: 'Cold Chain Terintegrasi', description: 'Menjaga kesegaran hasil tangkap hingga ke pasar.', icon: Wind, time: '230 Hari', reward: '+15% Jangkauan Ekspor Ikan Laut', category: 'perikanan', tier: 2 },
    { id: 'ikan_3', name: 'Akuakultur Lepas Pantai', description: 'Keramba raksasa di laut dalam dengan AI.', icon: Anchor, time: '350 Hari', reward: '+25% Kapasitas Produksi Ikan', category: 'perikanan', tier: 3 },
    { id: 'ikan_4', name: 'Kapal Pengolahan On-Board', description: 'Ikan langsung dikalengkan di tengah laut.', icon: Factory, time: '480 Hari', reward: '+20% Keuntungan Produk Pangan Laut', category: 'perikanan', tier: 4 },
    { id: 'ikan_5', name: 'Kloning Spesies Langka', description: 'Menghidupkan kembali stok ikan yang punah.', icon: Microscope, time: '650 Hari', reward: 'Kemandirian Ekosistem Laut', category: 'perikanan', tier: 5 },

    // 7. Sektor Olahan Pangan
    { id: 'pangan_1', name: 'Teknik Pasteurisasi Kilat', description: 'Memperpanjang umur simpan tanpa bahan kimia.', icon: Flame, time: '105 Hari', reward: '+10% Efisiensi Rantai Pasok Pangan', category: 'pangan', tier: 1 },
    { id: 'pangan_2', name: 'Fortifikasi Nutrisi Massal', description: 'Menambahkan vitamin penting ke produk pangan.', icon: Droplets, time: '215 Hari', reward: '+5% Indeks Kesehatan Nasional', category: 'pangan', tier: 2 },
    { id: 'pangan_3', name: 'Teksturisasi Protein Nabati', description: 'Olahan pengganti daging dengan rasa identik.', icon: Layers, time: '310 Hari', reward: '-15% Impor Bahan Pangan Mentah', category: 'pangan', tier: 3 },
    { id: 'pangan_4', name: 'Otomasi Pabrik Makanan', description: 'Lini pengemasan super cepat tanpa kuman.', icon: GanttChart, time: '440 Hari', reward: 'Stabilitas Harga Pangan: +15% Kepuasan', category: 'pangan', tier: 4 },
    { id: 'pangan_5', name: 'Personalisasi Nutrisi DNA', description: 'Pangan yang dibuat khusus menurut DNA pembeli.', icon: Binary, time: '580 Hari', reward: '+20% Produktivitas Tenaga Kerja', category: 'pangan', tier: 5 },

    // 8. Sektor Farmasi
    { id: 'farma_1', name: 'Ekstraksi Herbal Lanjut', description: 'Mengubah bahan alam tradisional menjadi obat modern.', icon: Sprout, time: '130 Hari', reward: '-15% Biaya Impor Farmasi', category: 'farmasi', tier: 1 },
    { id: 'farma_2', name: 'Produksi Vakum Farmasi', description: 'Menjaga sterilitas alat kesehatan tingkat tinggi.', icon: ShieldCheck, time: '250 Hari', reward: '+10% Standar Medis Nasional', category: 'farmasi', tier: 2 },
    { id: 'farma_3', name: 'Riset Molekuler Medik', description: 'Simulasi obat baru menggunakan superkomputer.', icon: Chip, time: '390 Hari', reward: '+20% Kapasitas Produksi Vaksin Domestik', category: 'farmasi', tier: 3 },
    { id: 'farma_4', name: 'Nanomedicine System', description: 'Robot skala nano untuk mengobati sel kanker.', icon: Atom, time: '540 Hari', reward: '-20% Anggaran Kesehatan Negara', category: 'farmasi', tier: 4 },
    { id: 'farma_5', name: 'Bio-Printer Organ', description: 'Mencetak organ manusia fungsional untuk transplantasi.', icon: Box, time: '800 Hari', reward: 'Proyek Keabadian: +10% Pertumbuhan Populasi', category: 'farmasi', tier: 5 },

  ];

  const techNodes: TechNode[] = baseNodes.map(node => ({
    ...node,
    status: researchStorage.getNodeStatus(node.id, node.category, node.tier, baseNodes)
  })) as TechNode[];



  const selectedNode = techNodes.find(n => n.id === selectedNodeId);

  return (
    <div className="flex flex-col h-full animate-in slide-in-from-right-8 duration-500 overflow-hidden">
      {/* Detail Header */}
      <div className="px-12 py-7 bg-zinc-900/40 border-b border-zinc-800/50 flex items-center justify-between shrink-0 relative z-20">
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="p-3 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-400 hover:text-white hover:border-zinc-600 transition-all active:scale-95 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500">Departemen Industri</span>
              <span className="text-zinc-700">/</span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Multisectoral Tech Tree</span>
            </div>
            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mt-1">Pohon Teknologi Strategis</h3>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-6 px-6 py-2 bg-zinc-950/50 border border-zinc-800 rounded-2xl mr-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
              <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
              <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Researching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-zinc-700"></div>
              <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">Locked</span>
            </div>

          </div>
          <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
            <Factory className="h-6 w-6 text-indigo-400" />
          </div>
        </div>
      </div>

      {/* Tech Tree Canvas Area */}
      <div className="flex-1 overflow-y-auto relative bg-zinc-950/40 no-scrollbar pb-20">
        <div className="p-12 space-y-24 relative">
             {/* Vertical Sector Separation Lines */}
             <div className="absolute top-0 left-[480px] bottom-0 w-[1px] bg-zinc-800/20 z-0"></div>


             {categories.map((cat, catIdx) => (
                <div key={cat.key} className="relative">
                    {/* Sector Header on the Left */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 flex items-center gap-4 z-20">
                        <div className={`p-4 rounded-3xl bg-zinc-900 border border-zinc-800/50 ${cat.color} transition-transform`}>
                            <cat.icon size={24} />
                        </div>
                        <div className="w-48">
                            <h4 className="text-sm font-black text-white uppercase tracking-wider leading-tight">{cat.label}</h4>
                            <p className="text-[8px] text-zinc-600 font-bold uppercase tracking-widest mt-1">Sektor Strategis {catIdx + 1}</p>
                        </div>
                    </div>

                    {/* Nodes within the row */}
                    <div className="grid grid-cols-5 pl-[400px] gap-x-12 relative z-10">

                        {techNodes.filter(n => n.category === cat.key).map((node, nodeIdx) => {
                            const isSelected = selectedNodeId === node.id;
                            const isCompleted = node.status === 'completed';
                            const isAvailable = node.status === 'available';
                            const isLocked = node.status === 'locked';
                            const isResearching = node.status === 'researching';




                            return (
                                <div key={node.id} className="relative flex items-center justify-center">
                                    {/* Connection Line to next node */}
                                    {nodeIdx < 4 && (
                                        <div className={`absolute left-full w-12 h-[2px] z-0 ${isCompleted ? 'bg-emerald-500/30' : 'bg-zinc-800'}`}>
                                            {isCompleted && <div className="h-full bg-emerald-500 w-full animate-in slide-in-from-left duration-1000 shadow-[0_0_10px_#10b981]"></div>}
                                        </div>
                                    )}

                                    <button 
                                        onClick={() => setSelectedNodeId(selectedNodeId === node.id ? null : node.id)}
                                        className={`
                                            relative w-64 h-24 rounded-[2rem] flex flex-row items-center p-4 gap-4 transition-all duration-300
                                            cursor-pointer
                                            ${isCompleted ? 'bg-emerald-500/10 border-2 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : ''}
                                            ${isResearching ? 'bg-amber-500/10 border-2 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)] animate-pulse' : ''}
                                            ${isAvailable ? 'bg-indigo-500/10 border-2 border-indigo-500/40 hover:border-indigo-500 scale-100 hover:bg-zinc-900/40' : ''}
                                            ${isLocked ? 'bg-zinc-900/40 border border-zinc-800 opacity-40 grayscale cursor-not-allowed' : ''}
                                            ${isSelected ? 'scale-105 !border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] z-20 bg-zinc-900' : ''}

                                            group z-10
                                        `}
                                        disabled={isLocked}
                                    >
                                        <div className={`
                                            p-3 rounded-2xl shrink-0 transition-transform duration-500 group-hover:scale-110
                                            ${isCompleted ? 'bg-emerald-500/20 text-emerald-400' : isResearching ? 'bg-amber-500/20 text-amber-400' : isAvailable ? 'bg-indigo-500/20 text-indigo-400' : 'bg-zinc-800 text-zinc-600'}

                                        `}>
                                            <node.icon size={28} strokeWidth={1.5} />
                                        </div>
                                        
                                        <div className="flex flex-col items-start text-left overflow-hidden">
                                            <p className={`text-[10px] font-black uppercase tracking-widest leading-tight ${isSelected ? 'text-white' : 'text-zinc-200'} group-hover:text-indigo-400 transition-colors`}>
                                                {node.name}
                                            </p>
                                            <p className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
                                                {isCompleted ? (
                                                    <span className="text-emerald-500">Selesai</span>
                                                ) : isResearching ? (
                                                    <span className="text-amber-500 animate-pulse">
                                                        {researchStorage.getProgress(node.id, timeStorage.getState().gameDate)?.remainingDays} Hari Lagi
                                                    </span>
                                                ) : isAvailable ? (
                                                    <span className="text-indigo-400">{node.time}</span>
                                                ) : (
                                                    `Tier ${node.tier}`
                                                )}
                                            </p>

                                        </div>

                                        {isCompleted && (
                                            <div className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-1.5 shadow-lg z-30">
                                                <CheckCircle2 size={10} className="text-white" />
                                            </div>
                                        )}

                                        {isLocked && (
                                            <div className="absolute -top-1 -right-1 bg-zinc-800 rounded-full p-1.5 z-30 border border-zinc-700">
                                                <Lock size={10} className="text-zinc-500" />
                                            </div>
                                        )}
                                            {isResearching && (
                                                <div className="absolute inset-x-4 bottom-2 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                                    <div 
                                                        className="h-full bg-amber-500 transition-all duration-300"
                                                        style={{ width: `${researchStorage.getProgress(node.id, timeStorage.getState().gameDate)?.percentage || 0}%` }}
                                                    ></div>
                                                </div>
                                            )}
                                    </button>
                                </div>

                            );
                        })}
                    </div>
                </div>
             ))}
        </div>
      </div>

      {/* Node Detail Side/Bottom Panel */}
      <div className={`
        absolute left-0 top-0 bottom-0 w-96 bg-zinc-950 border-r border-zinc-800 z-[100] transition-transform duration-500
        ${selectedNodeId ? 'translate-x-0' : '-translate-x-full'}
        shadow-[20px_0_50px_rgba(0,0,0,0.5)]
      `}>

        {selectedNode && (
          <div className="h-full flex flex-col">
            <div className="p-8 border-b border-zinc-900 flex items-center gap-6">
              <button 
                onClick={() => setSelectedNodeId(null)}
                className="p-2 hover:bg-zinc-900 rounded-lg text-zinc-500 transition-colors shrink-0"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-zinc-900 rounded-2xl text-indigo-400">
                  <selectedNode.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white italic uppercase tracking-tight">{selectedNode.name}</h4>
                  <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Tech Tier {selectedNode.tier}</p>
                </div>
              </div>
            </div>


            <div className="flex-1 p-8 space-y-8 overflow-y-auto no-scrollbar">
              <div className="space-y-3">
                <p className="text-xs font-black text-indigo-500 uppercase tracking-[0.2em]">Deskripsi Modul</p>
                <p className="text-zinc-400 text-sm leading-relaxed font-medium bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/50">
                  {selectedNode.description}
                </p>
              </div>

              <div className="grid grid-cols-1">
                <div className="bg-zinc-900/40 p-5 rounded-2xl border border-zinc-800/50">
                  <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Durasi Riset</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-amber-500" />
                        <span className="text-sm font-black text-white">{selectedNode.time}</span>
                    </div>
                    {selectedNode.status === 'researching' && (
                        <span className="text-[10px] font-black text-amber-500 uppercase">
                            {researchStorage.getProgress(selectedNode.id, timeStorage.getState().gameDate)?.remainingDays} Hari Lagi
                        </span>
                    )}
                  </div>

                </div>
              </div>


              <div className="space-y-4 p-6 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <TrendingUp size={64} className="text-emerald-500" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <Target size={18} className="text-emerald-400" />
                  </div>
                  <p className="text-xs font-black text-emerald-400 uppercase tracking-widest">Efek Strategis</p>
                </div>
                <p className="text-xl font-black text-white italic uppercase tracking-tighter leading-tight">
                  {selectedNode.reward}
                </p>
              </div>
            </div>

            <div className="p-8 bg-zinc-900/30 border-t border-zinc-900">
              {selectedNode.status === 'completed' ? (
                <div className="w-full py-5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center gap-3">
                  <CheckCircle2 className="text-emerald-500 h-5 w-5" />
                  <span className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.2em]">Penelitian Selesai</span>
                </div>
              ) : selectedNode.status === 'researching' ? (
                <div className="space-y-4">
                    <div className="w-full py-5 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex flex-col items-center justify-center gap-3">
                        <div className="flex items-center gap-3">
                            <Clock className="text-amber-500 h-5 w-5 animate-spin" style={{ animationDuration: '3s' }} />
                            <span className="text-[11px] font-black text-amber-500 uppercase tracking-[0.2em]">Sedang Diteliti...</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => handleCompleteResearch(selectedNode.id)}
                        className="w-full bg-zinc-800 hover:bg-emerald-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
                    >
                        <CheckCircle2 size={16} />
                        Simulasi Selesai (Debug)
                    </button>
                </div>
              ) : selectedNode.status === 'available' ? (
                <button 
                    onClick={() => handleStartResearch(selectedNode.id, selectedNode.time)}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(79,70,229,0.3)] active:scale-[0.98]"
                >
                  <Power size={18} />
                  Mulai Akselerasi Riset
                </button>
              ) : (
                <div className="w-full py-5 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center gap-3 text-zinc-600">
                  <Lock size={18} />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">Modul Masih Terkunci</span>
                </div>
              )}

            </div>
          </div>
        )}
      </div>
    </div>
  );
}
