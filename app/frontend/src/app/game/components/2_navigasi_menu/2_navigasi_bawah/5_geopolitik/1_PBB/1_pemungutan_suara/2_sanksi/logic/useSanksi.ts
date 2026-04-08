import { useState, useCallback } from 'react';

export interface SanksiState {
  selectedSanction: string | null;
  isActive: boolean;
  duration: string;
  targetCountry: string | null;
}

export function useSanksi() {
  const [state, setState] = useState<SanksiState>({
    selectedSanction: null,
    isActive: false,
    duration: '1 Bulan',
    targetCountry: null,
  });

  const selectSanction = useCallback((sanctionName: string) => {
    setState(prev => ({
      ...prev,
      selectedSanction: sanctionName,
      isActive: true,
    }));
  }, []);

  const setSanctionDuration = useCallback((duration: string) => {
    setState(prev => ({
      ...prev,
      duration,
    }));
  }, []);

  const setTargetCountry = useCallback((country: string | null) => {
    setState(prev => ({
      ...prev,
      targetCountry: country,
    }));
  }, []);

  const resetSanction = useCallback(() => {
    setState({
      selectedSanction: null,
      isActive: false,
      duration: '1 Bulan',
      targetCountry: null,
    });
  }, []);

  const validateSanction = useCallback((sanctionName: string): boolean => {
    const validSanctions = [
      'Sanksi Ekonomi (Economic Sanction)',
      'Sanksi Perang (War Sanction)',
    ];
    return validSanctions.includes(sanctionName);
  }, []);

  return {
    state,
    selectSanction,
    setSanctionDuration,
    setTargetCountry,
    resetSanction,
    validateSanction,
  };
}
