"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface KirimHadiahModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KirimHadiahModal({ isOpen, onClose }: KirimHadiahModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Kirim Hadiah Diplomatik" 
    />
  );
}
