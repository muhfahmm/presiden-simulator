"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface HinaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HinaModal({ isOpen, onClose }: HinaModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Diplomasi Hina Negara" 
    />
  );
}
