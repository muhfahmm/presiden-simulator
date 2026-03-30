"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface KirimPasukanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KirimPasukanModal({ isOpen, onClose }: KirimPasukanModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Kirim Pasukan" 
    />
  );
}
