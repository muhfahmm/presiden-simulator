"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface SerangNegaraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SerangNegaraModal({ isOpen, onClose }: SerangNegaraModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Operasi Serangan Militer" 
    />
  );
}
