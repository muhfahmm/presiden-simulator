"use client"

import React from "react";
import UnderDevelopmentModal from "../../shared/UnderDevelopmentModal";

interface PerjanjianDagangModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PerjanjianDagangModal({ isOpen, onClose }: PerjanjianDagangModalProps) {
  return (
    <UnderDevelopmentModal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Perjanjian Dagang" 
    />
  );
}
