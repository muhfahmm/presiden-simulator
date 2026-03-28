import React, { useState, useEffect } from "react";
import { NewsItem } from "./newsData";
import { newsStorage } from "./newsStorage";
import { TrendingUp, TrendingDown, Minus, Info, Globe, Zap, Truck, Landmark } from "lucide-react";

export default function BeritaHalaman() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Initial fetch
    setNews(newsStorage.getNews());

    const handleUpdate = () => {
      setNews(newsStorage.getNews());
    };

    window.addEventListener('news_storage_updated', handleUpdate);
    return () => window.removeEventListener('news_storage_updated', handleUpdate);
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Ekonomi": return <Landmark size={16} />;
      case "Geopolitik": return <Globe size={16} />;
      case "Energi": return <Zap size={16} />;
      case "Logistik": return <Truck size={16} />;
      default: return <Info size={16} />;
    }
  };

  const getImpactIcon = (type: string) => {
    switch (type) {
      case "positive": return <TrendingUp size={16} className="text-green-500" />;
      case "negative": return <TrendingDown size={16} className="text-red-500" />;
      default: return <Minus size={16} className="text-zinc-500" />;
    }
  };

  return (
    <div className="flex flex-col space-y-6 h-full pb-12">
      <div className="flex items-center justify-between border-b border-zinc-900 pb-4">
        <div>
           <h3 className="text-[18px] font-black text-white uppercase tracking-[0.2em] italic leading-none">Global Trade Pulse</h3>
           <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Daftar Berita Ekonomi & Geopolitik Terkini</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
        {news.map((item: NewsItem) => (
          <div 
            key={item.id} 
            className="group relative bg-zinc-900/40 border border-zinc-900/80 rounded-3xl p-6 transition-all hover:bg-zinc-900/60 hover:border-zinc-800 animate-in slide-in-from-right duration-500"
          >
            <div className="absolute top-0 right-10 w-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
            
            <div className="flex items-start gap-5">
              <div className="flex flex-col items-center gap-2">
                 <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-400 group-hover:text-blue-400 transition-all">
                    {getCategoryIcon(item.category)}
                 </div>
                 <span className="text-[9px] font-black uppercase text-zinc-600 tracking-[0.1em]">{item.date}</span>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="text-sm font-black text-white uppercase tracking-wider leading-tight group-hover:text-blue-200 transition-all pr-4">
                    {item.title}
                  </h4>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${
                    item.impactType === "positive" ? "bg-green-500/10 text-green-500 border-green-500/20" :
                    item.impactType === "negative" ? "bg-red-500/10 text-red-500 border-red-500/20" :
                    "bg-zinc-500/10 text-zinc-500 border-zinc-500/20"
                  }`}>
                    {getImpactIcon(item.impactType)}
                    {item.impactLabel}
                  </div>
                </div>

                <p className="text-xs text-zinc-500 font-medium leading-relaxed italic pr-12">
                  {item.content}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic mr-1">Komoditas Terdampak:</span>
                  {item.affectedCommodities.map((comm, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-zinc-950 border border-zinc-900 rounded-md text-[9px] font-black text-zinc-400 uppercase tracking-tighter">
                      {comm}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
