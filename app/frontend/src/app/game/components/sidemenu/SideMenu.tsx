"use client"

import { Newspaper, Mail } from "lucide-react";

interface SideMenuProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  unreadCount: number;
}

export default function SideMenu({ activeMenu, setActiveMenu, unreadCount }: SideMenuProps) {
  return (
    <div className="absolute left-8 top-1/4 z-50 flex flex-col items-center bg-zinc-950/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in slide-in-from-left-10 duration-700">
      
      {/* 1. Berita / News Button (Top) */}
      <button 
        onClick={() => setActiveMenu("Menu:Berita")}
        className={`relative group flex flex-col items-center justify-center w-16 h-24 rounded-2xl transition-all cursor-pointer overflow-hidden ${activeMenu === "Menu:Berita" ? 'bg-emerald-500/20 shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]' : 'hover:bg-white/5'}`}
      >
        <Newspaper className={`h-6 w-6 ${activeMenu === "Menu:Berita" ? 'text-emerald-400 scale-110' : 'text-zinc-400'} group-hover:text-emerald-400 group-hover:scale-110 transition-all`} />
        <span className={`text-[10px] font-black uppercase tracking-[0.1em] mt-2 ${activeMenu === "Menu:Berita" ? 'text-emerald-400' : 'text-zinc-300'} group-hover:text-emerald-400 transition-colors`}>Update</span>
        <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-0.5">News</span>
        
        {/* Active Indicator */}
        {activeMenu === "Menu:Berita" && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-emerald-500 rounded-r-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
        )}
      </button>

      {/* Separator Line */}
      <div className="w-8 h-px bg-white/5 my-1"></div>

      {/* 2. Inbox / Communication Button (Bottom) */}
      <button 
        onClick={() => setActiveMenu("Menu:Inbox")}
        className={`relative group flex flex-col items-center justify-center w-16 h-24 rounded-2xl transition-all cursor-pointer overflow-hidden ${activeMenu === "Menu:Inbox" ? 'bg-blue-500/20 shadow-[inset_0_0_20px_rgba(59,130,246,0.2)]' : 'hover:bg-white/5'}`}
      >
         {/* Unread Glow Effect */}
         {unreadCount > 0 && (
          <div className="absolute inset-0 bg-blue-500/5 animate-pulse"></div>
        )}
        
        <div className="relative">
          <Mail className={`h-6 w-6 ${unreadCount > 0 || activeMenu === "Menu:Inbox" ? 'text-blue-400' : 'text-zinc-400'} group-hover:scale-110 group-hover:text-blue-400 transition-all`} />
          {unreadCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center bg-red-500 text-[8px] font-black text-white rounded-full border border-zinc-950 shadow-lg shadow-red-500/20">
              {unreadCount}
            </span>
          )}
        </div>
        <span className={`text-[10px] font-black uppercase tracking-[0.1em] mt-2 ${activeMenu === "Menu:Inbox" ? 'text-blue-400' : 'text-zinc-300'} group-hover:text-blue-400 transition-colors`}>Inbox</span>
        <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest leading-none mt-0.5">Pesan</span>
        
        {/* Active Indicator */}
        {activeMenu === "Menu:Inbox" && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,1)]"></div>
        )}
      </button>
    </div>
  );
}
