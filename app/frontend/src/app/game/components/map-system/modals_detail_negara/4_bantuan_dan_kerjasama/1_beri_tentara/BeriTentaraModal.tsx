"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface BeriTentaraModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BeriTentaraModal({ isOpen, onClose }: BeriTentaraModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Bantuan Militer & Tentara" 
    />
  );
}
