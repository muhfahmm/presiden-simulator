import { useState, useCallback } from 'react';

export interface EmbargoState {
  selectedEmbargo: string | null;
  isActive: boolean;
  duration: string;
  targetCountry: string | null;
  subItem: string | null; // Untuk teknologi atau sumber daya
}

export function useEmbargo() {
  const [state, setState] = useState<EmbargoState>({
    selectedEmbargo: null,
    isActive: false,
    duration: '1 Bulan',
    targetCountry: null,
    subItem: null,
  });

  const selectEmbargo = useCallback((embargoName: string) => {
    setState(prev => ({
      ...prev,
      selectedEmbargo: embargoName,
      isActive: true,
    }));
  }, []);

  const setEmbargoDuration = useCallback((duration: string) => {
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

  const setSubItem = useCallback((subItem: string | null) => {
    setState(prev => ({
      ...prev,
      subItem,
    }));
  }, []);

  const resetEmbargo = useCallback(() => {
    setState({
      selectedEmbargo: null,
      isActive: false,
      duration: '1 Bulan',
      targetCountry: null,
      subItem: null,
    });
  }, []);

  const validateEmbargo = useCallback((embargoName: string): boolean => {
    const validEmbargos = [
      'Embargo Ekonomi (Total Trade)',
      'Embargo Penjualan Teknologi (Tech)',
      'Embargo Penjualan Sumber Daya (Resource)',
      'Embargo Senjata (Arms Embargo)',
    ];
    return validEmbargos.includes(embargoName);
  }, []);

  const requiresSubItem = useCallback((embargoName: string): boolean => {
    return embargoName === 'Embargo Penjualan Teknologi (Tech)' || 
           embargoName === 'Embargo Penjualan Sumber Daya (Resource)';
  }, []);

  return {
    state,
    selectEmbargo,
    setEmbargoDuration,
    setTargetCountry,
    setSubItem,
    resetEmbargo,
    validateEmbargo,
    requiresSubItem,
  };
}
