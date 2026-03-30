"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface TanamkanIdeologiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TanamkanIdeologiModal({ isOpen, onClose }: TanamkanIdeologiModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Misi Penanaman Ideologi" 
    />
  );
}
