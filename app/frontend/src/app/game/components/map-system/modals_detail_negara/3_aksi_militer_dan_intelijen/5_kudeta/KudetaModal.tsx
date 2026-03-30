"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface KudetaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KudetaModal({ isOpen, onClose }: KudetaModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Operasi Kudeta" 
    />
  );
}
