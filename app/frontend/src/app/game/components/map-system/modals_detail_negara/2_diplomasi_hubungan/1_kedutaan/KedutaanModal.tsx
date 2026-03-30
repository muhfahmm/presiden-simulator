"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface KedutaanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KedutaanModal({ isOpen, onClose }: KedutaanModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Pembangunan Kedutaan" 
    />
  );
}
