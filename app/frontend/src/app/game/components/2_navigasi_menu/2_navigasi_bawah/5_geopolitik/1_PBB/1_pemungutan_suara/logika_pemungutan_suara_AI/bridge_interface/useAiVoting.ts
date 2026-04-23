import { useState, useEffect } from 'react';

/**
 * Hook untuk mengelola simulasi voting AI di frontend.
 * Dalam implementasi nyata, ini akan memanggil API Backend Python/FastAPI.
 */
export const useAiVoting = (resolutionId: number) => {
  const [votingResults, setVotingResults] = useState<any>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateAiVoting = async (resolution: any) => {
    setIsSimulating(true);
    console.log(`[AI Voting] Memulai simulasi untuk resolusi: ${resolution.title}`);

    // Simulasi delay jaringan/proses AI
    await new Promise(resolve => setTimeout(resolve, 2000));

    /** 
     * MOCK DATA: 
     * Nantinya ini akan memanggil `main_ai_voter.py` via API backend.
     */
    const mockSummary = {
      id: resolution.id,
      title: resolution.title,
      total_setuju: Math.floor(Math.random() * 100) + 50,
      total_tolak: Math.floor(Math.random() * 50) + 20,
      total_abstain: Math.floor(Math.random() * 50),
      timestamp: new Date().toISOString()
    };

    setVotingResults(mockSummary);
    setIsSimulating(false);
    
    // Dispatch event untuk update UI global
    window.dispatchEvent(new CustomEvent('un_voting_updated', { detail: mockSummary }));
    
    return mockSummary;
  };

  return {
    votingResults,
    isSimulating,
    simulateAiVoting
  };
};
