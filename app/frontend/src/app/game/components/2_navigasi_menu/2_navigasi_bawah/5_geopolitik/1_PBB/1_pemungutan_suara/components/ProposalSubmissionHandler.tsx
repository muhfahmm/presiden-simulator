/**
 * Handler untuk pengajuan proposal dengan modal sukses
 */

import { useState } from 'react';
import { VoteVisualization } from './VoteVisualization';
import { ModalPengajuanSukses } from './ModalPengajuanSukses';
import { useProposalSubmission } from '../hooks/useProposalSubmission';
import { GlobalVotingState } from '../utils/votingSystem';
import { Loader2 } from 'lucide-react';

interface ProposalSubmissionHandlerProps {
  selectedItem: { category: string; name: string; description: string; effect: string } | null;
  selectedDuration: string;
  selectedCountry: any;
  selectedSubItem?: string;
  isUNSCMember: boolean;
  userCountry: string | null;
  onReset: () => void;
  onViewStatus: () => void;
  votingState: GlobalVotingState;
  onVotingStateUpdate: (state: GlobalVotingState) => void;
  allCountries: any[];
  gameState: any;
  enableAIVoting?: boolean;
}

export function ProposalSubmissionHandler({
  selectedItem,
  selectedDuration,
  selectedCountry,
  selectedSubItem,
  isUNSCMember,
  userCountry,
  onReset,
  onViewStatus,
  votingState,
  onVotingStateUpdate,
  allCountries,
  gameState,
  enableAIVoting = true
}: ProposalSubmissionHandlerProps) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const {
    submitProposal,
    isSubmitting,
    submittedProposal,
    error,
    clearSubmittedProposal,
    validateProposal
  } = useProposalSubmission();

  const handleSubmit = async () => {
    console.log('=== SUBMIT CLICKED ===');
    console.log('selectedItem:', selectedItem);
    console.log('selectedCountry:', selectedCountry);
    console.log('selectedCountry?.name:', selectedCountry?.name);
    console.log('userCountry:', userCountry);
    
    if (!selectedItem || !userCountry) {
      console.log('Missing required data');
      return;
    }

    // Determine proposal type
    const proposalType = selectedItem.category.includes('Resolusi') 
      ? 'resolution' 
      : selectedItem.category.includes('Sanksi')
      ? 'sanction'
      : 'embargo';

    console.log('proposalType:', proposalType);

    // Prepare submission params
    const params = {
      type: proposalType as 'resolution' | 'sanction' | 'embargo',
      proposalName: selectedItem.name,
      description: selectedItem.description,
      proposerCountry: userCountry,
      targetCountry: selectedCountry?.name_id || selectedCountry?.name || undefined,
      duration: selectedDuration,
      subItem: selectedSubItem,
      currentGameDay: gameState?.currentDay || 0
    };

    console.log('params:', params);
    console.log('params.targetCountry:', params.targetCountry);
    console.log('typeof params.targetCountry:', typeof params.targetCountry);

    // Validate
    const validationError = validateProposal(params);
    console.log('validationError:', validationError);
    
    if (validationError) {
      alert(validationError);
      return;
    }

    console.log('Starting submission...');

    // Submit
    const result = await submitProposal(
      params,
      votingState,
      allCountries,
      gameState,
      enableAIVoting
    );

    console.log('result:', result);

    if (result) {
      console.log('Submission successful, showing modal');
      onVotingStateUpdate(result.updatedState);
      setShowSuccessModal(true);
    } else if (error) {
      console.log('Submission failed:', error);
      alert(`Gagal mengajukan proposal: ${error}`);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    clearSubmittedProposal();
    onReset();
  };

  return (
    <>
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-8 shadow-2xl">
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="h-12 w-12 text-cyan-400 animate-spin" />
              <div className="text-center">
                <p className="text-lg font-bold text-white mb-2">
                  Memproses Proposal...
                </p>
                <p className="text-sm text-zinc-400">
                  {enableAIVoting 
                    ? 'Menghitung voting AI dari negara-negara anggota PBB'
                    : 'Menyimpan proposal ke sistem'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Vote Visualization (Submit Button) */}
      <VoteVisualization
        selectedCountry={selectedCountry}
        isUNSCMember={isUNSCMember}
        userCountry={userCountry}
        onSubmit={handleSubmit}
        onReset={onReset}
      />

      {/* Success Modal */}
      <ModalPengajuanSukses
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        proposal={submittedProposal}
        onViewStatus={onViewStatus}
      />

      {/* Error Display */}
      {error && !isSubmitting && (
        <div className="mt-4 p-4 rounded-2xl bg-red-500/10 border border-red-500/30">
          <p className="text-sm font-bold text-red-400">
            Error: {error}
          </p>
        </div>
      )}
    </>
  );
}
