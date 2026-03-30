"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface PaktaNonAgresiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaktaNonAgresiModal({ isOpen, onClose }: PaktaNonAgresiModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Pakta Non-Agresi" 
    />
  );
}
