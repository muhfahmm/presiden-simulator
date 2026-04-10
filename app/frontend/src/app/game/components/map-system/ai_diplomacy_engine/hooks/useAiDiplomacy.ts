import { useState, useEffect } from 'react';
import { getGlobalRelationMatrix, RelationMatrix } from '../services/MatrixHandler';

/**
 * useAiDiplomacy
 * Hook untuk memantau status diplomasi global di dalam komponen UI.
 */
export const useAiDiplomacy = () => {
    const [matrix, setMatrix] = useState<RelationMatrix>({});

    useEffect(() => {
        const data = getGlobalRelationMatrix();
        setMatrix(data);
    }, []);

    return {
        matrix,
        refreshMatrix: () => setMatrix(getGlobalRelationMatrix())
    };
};
