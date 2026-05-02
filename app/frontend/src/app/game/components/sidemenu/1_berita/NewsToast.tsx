"use client"

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Zap, Globe, Newspaper, X, TrendingUp, Shield } from "lucide-react";
import { NewsItem } from "./newsStorage";

export default function NewsToast() {
  const [activeNews, setActiveNews] = useState<NewsItem | null>(null);

  const handleNewNews = useCallback((event: any) => {
    const news = event.detail as NewsItem;
    if (!news) return;
    
    // Only show toast for construction news or high priority news
    if (news.category === 'construction' || news.priority === 'high') {
      setActiveNews(news);
      
      // Auto close after 8 seconds
      setTimeout(() => {
        setActiveNews(prev => prev?.id === news.id ? null : prev);
      }, 8000);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("new_news_alert", handleNewNews);
    return () => window.removeEventListener("new_news_alert", handleNewNews);
  }, [handleNewNews]);

  const getTheme = (category: string) => {
    switch (category) {
      case 'construction':
        return {
          icon: <Zap size={20} className="text-amber-400" />,
          bg: "bg-amber-950/90",
          border: "border-amber-500/50",
          text: "text-amber-400",
          glow: "shadow-[0_0_20px_rgba(245,158,11,0.3)]",
          label: "Pembangunan"
        };
      case 'diplomacy':
        return {
          icon: <Shield size={20} className="text-purple-400" />,
          bg: "bg-purple-950/90",
          border: "border-purple-500/50",
          text: "text-purple-400",
          glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",
          label: "Diplomasi"
        };
      case 'economy':
        return {
          icon: <TrendingUp size={20} className="text-emerald-400" />,
          bg: "bg-emerald-950/90",
          border: "border-emerald-500/50",
          text: "text-emerald-400",
          glow: "shadow-[0_0_20px_rgba(16,185,129,0.3)]",
          label: "Ekonomi"
        };
      default:
        return {
          icon: <Globe size={20} className="text-blue-400" />,
          bg: "bg-blue-950/90",
          border: "border-blue-500/50",
          text: "text-blue-400",
          glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",
          label: "Berita Dunia"
        };
    }
  };

  if (!activeNews) return null;

  const theme = getTheme(activeNews.category);

  return (
    <AnimatePresence>
      {activeNews && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          className={`fixed bottom-24 right-8 z-[200000] w-80 ${theme.bg} backdrop-blur-md border ${theme.border} rounded-2xl p-4 ${theme.glow} cursor-pointer`}
          onClick={() => setActiveNews(null)}
        >
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-xl bg-zinc-950 border border-white/5">
              {theme.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-black uppercase tracking-widest ${theme.text}`}>
                  {theme.label}
                </span>
                <button className="text-zinc-500 hover:text-white transition-colors">
                  <X size={14} />
                </button>
              </div>
              <h4 className="text-sm font-black text-white uppercase italic truncate">
                {activeNews.subject}
              </h4>
              <p className="text-[11px] text-zinc-400 font-medium line-clamp-2 mt-1 leading-relaxed">
                {activeNews.content}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[9px] text-zinc-600 font-bold uppercase tracking-wider">
                  {activeNews.source}
                </span>
                <span className="text-[9px] text-zinc-500 font-medium italic">
                  {activeNews.time}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
