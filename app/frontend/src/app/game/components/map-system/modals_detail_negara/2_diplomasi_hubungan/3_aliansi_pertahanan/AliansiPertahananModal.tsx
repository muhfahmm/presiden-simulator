"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface AliansiPertahananModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AliansiPertahananModal({ isOpen, onClose }: AliansiPertahananModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Aliansi Pertahanan" 
    />
  );
}
