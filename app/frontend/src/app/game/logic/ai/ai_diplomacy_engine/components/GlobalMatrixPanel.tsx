import React from 'react';
import { useAiDiplomacy } from '../hooks/useAiDiplomacy';

/**
 * GlobalMatrixPanel
 * Tabel visualisasi hubungan antar NPC AI.
 */
export const GlobalMatrixPanel: React.FC = () => {
    const { matrix } = useAiDiplomacy();

    return (
        <div className="global-matrix-panel p-4 bg-slate-900 rounded-lg border border-blue-500/20">
            <h2 className="text-xl font-bold text-blue-400 mb-4 uppercase tracking-wider">
                Geopolitical Relation Matrix
            </h2>
            <div className="text-gray-400 italic text-sm">
                {Object.keys(matrix).length === 0 ? 
                    "Sistem sedang menganalisis hubungan antar 207 negara..." : 
                    "Menampilkan data hubungan NPC-ke-NPC."
                }
            </div>
        </div>
    );
};
