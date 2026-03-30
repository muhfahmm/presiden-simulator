"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface SpionaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SpionaseModal({ isOpen, onClose }: SpionaseModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Misi Spionase & Intelijen" 
    />
  );
}
