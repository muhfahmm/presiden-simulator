/**
 * Hook untuk mengelola izin proposal
 */

import { useState, useCallback, useEffect } from 'react';
import {
  checkProposalPermission,
  canProposeType,
  validateProposal,
  getProposalErrorMessage,
  isPrivilegedCountry,
} from './proposalPermissions';

export interface UseProposalPermissionsReturn {
  canPropose: boolean;
  isPrivileged: boolean;
  isUNSCMember: boolean;
  permissionReason: string;
  checkPermission: (countryName: string, isUNSC: boolean) => void;
  validateProposalSubmission: (
    proposerCountry: string,
    targetCountry: string,
    proposalType: 'resolution' | 'sanction' | 'embargo'
  ) => { isValid: boolean; errors: string[] };
}

export function useProposalPermissions(
  initialCountry: string | null,
  initialIsUNSC: boolean
): UseProposalPermissionsReturn {
  const [canPropose, setCanPropose] = useState(false);
  const [isPrivileged, setIsPrivileged] = useState(false);
  const [isUNSCMember, setIsUNSCMember] = useState(initialIsUNSC);
  const [permissionReason, setPermissionReason] = useState('');

  const checkPermission = useCallback(
    (countryName: string, isUNSC: boolean) => {
      setIsUNSCMember(isUNSC);
      setIsPrivileged(isPrivilegedCountry(countryName));

      const permission = checkProposalPermission(countryName, isUNSC);
      setCanPropose(permission.canPropose);
      setPermissionReason(permission.reason);
    },
    []
  );

  const validateProposalSubmission = useCallback(
    (
      proposerCountry: string,
      targetCountry: string,
      proposalType: 'resolution' | 'sanction' | 'embargo'
    ) => {
      return validateProposal(proposerCountry, targetCountry, isUNSCMember, proposalType);
    },
    [isUNSCMember]
  );

  useEffect(() => {
    if (initialCountry) {
      checkPermission(initialCountry, initialIsUNSC);
    }
  }, [initialCountry, initialIsUNSC, checkPermission]);

  return {
    canPropose,
    isPrivileged,
    isUNSCMember,
    permissionReason,
    checkPermission,
    validateProposalSubmission,
  };
}
