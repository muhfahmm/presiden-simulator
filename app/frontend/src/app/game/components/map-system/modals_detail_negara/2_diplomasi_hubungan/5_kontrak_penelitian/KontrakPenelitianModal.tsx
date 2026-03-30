"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface KontrakPenelitianModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KontrakPenelitianModal({ isOpen, onClose }: KontrakPenelitianModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Kontrak Penelitian" 
    />
  );
}
