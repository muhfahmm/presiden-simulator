import { useState, useCallback } from 'react';

export interface RancanganResolusiState {
  selectedResolution: string | null;
  isActive: boolean;
}

export function useRancanganResolusi() {
  const [state, setState] = useState<RancanganResolusiState>({
    selectedResolution: null,
    isActive: false,
  });

  const selectResolution = useCallback((resolutionName: string) => {
    setState(prev => ({
      ...prev,
      selectedResolution: resolutionName,
      isActive: true,
    }));
  }, []);

  const resetResolution = useCallback(() => {
    setState({
      selectedResolution: null,
      isActive: false,
    });
  }, []);

  const validateResolution = useCallback((resolutionName: string): boolean => {
    // Validasi bahwa resolusi yang dipilih valid
    const validResolutions = ['Larangan Perang (Anti-War)'];
    return validResolutions.includes(resolutionName);
  }, []);

  return {
    state,
    selectResolution,
    resetResolution,
    validateResolution,
  };
}
