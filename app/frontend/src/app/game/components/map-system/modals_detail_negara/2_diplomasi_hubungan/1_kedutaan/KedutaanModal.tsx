"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface KedutaanModalProps {
  isOpen: boolean;
  onClose: () => void;
  userCountry: string;
  targetCountry: string;
  relationScore: number;
  relationLabel: string;
  relationColor: string;
}

export default function KedutaanModal({ isOpen, onClose }: KedutaanModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Kedutaan" 
    />
  );
}
