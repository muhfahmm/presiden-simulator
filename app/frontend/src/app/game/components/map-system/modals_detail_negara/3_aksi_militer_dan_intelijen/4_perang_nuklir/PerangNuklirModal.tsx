"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface PerangNuklirModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerangNuklirModal({ isOpen, onClose }: PerangNuklirModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Protokol Perang Nuklir" 
    />
  );
}
