"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface SabotaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SabotaseModal({ isOpen, onClose }: SabotaseModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Operasi Sabotase" 
    />
  );
}
