"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface MintaBantuanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MintaBantuanModal({ isOpen, onClose }: MintaBantuanModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Permohonan Bantuan Internasional" 
    />
  );
}
