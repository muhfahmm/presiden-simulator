"use client"

import { Users, Search, MapPin } from "lucide-react";

export default function AnggotaASEAN({ searchQuery = "" }: { searchQuery?: string }) {
  const members = [
    { name: "Indonesia", status: "Anggota Tetap", region: "Jakarta" },
    { name: "Malaysia", status: "Anggota Tetap", region: "Kuala Lumpur" },
    { name: "Singapura", status: "Anggota Tetap", region: "Singapore" },
    { name: "Thailand", status: "Anggota Tetap", region: "Bangkok" },
    { name: "Filipina", status: "Anggota Tetap", region: "Manila" },
    { name: "Vietnam", status: "Anggota Tetap", region: "Hanoi" },
    { name: "Myanmar", status: "Anggota Tetap", region: "Naypyidaw" },
    { name: "Kamboja", status: "Anggota Tetap", region: "Phnom Penh" },
    { name: "Laos", status: "Anggota Tetap", region: "Vientiane" },
    { name: "Brunei", status: "Anggota Tetap", region: "Bandar Seri Begawan" },
  ];

  const filtered = members.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {filtered.map((member, idx) => (
        <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl flex items-center gap-4 group hover:border-rose-500/30 transition-all">
          <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20 text-rose-500">
            <MapPin size={18} />
          </div>
          <div>
            <h5 className="text-sm font-black text-white uppercase italic">{member.name}</h5>
            <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">{member.status} • {member.region}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
