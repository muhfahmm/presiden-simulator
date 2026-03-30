"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface TingkatkanHubunganModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TingkatkanHubunganModal({ isOpen, onClose }: TingkatkanHubunganModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Diplomasi Peningkatan Hubungan" 
    />
  );
}
