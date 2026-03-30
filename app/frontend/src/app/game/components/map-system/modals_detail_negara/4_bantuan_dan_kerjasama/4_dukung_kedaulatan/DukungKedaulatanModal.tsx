"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface DukungKedaulatanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DukungKedaulatanModal({ isOpen, onClose }: DukungKedaulatanModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Dukungan Kedaulatan Negara" 
    />
  );
}
