import React from 'react';

/**
 * WorldNewsTicker
 * Menampilkan berita terupdate mengenai hubungan antar AI.
 */
export const WorldNewsTicker: React.FC = () => {
    return (
        <div className="world-news-ticker bg-black/80 text-white p-2 text-sm border-y border-yellow-500/30 overflow-hidden whitespace-nowrap">
            <span className="text-yellow-400 font-bold mr-2">BREAKING NEWS:</span>
            <span className="animate-pulse">Menunggu update dari AI Global Diplomacy Engine...</span>
        </div>
    );
};
