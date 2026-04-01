"use client"

import React, { useState, useEffect } from "react";
import ModalsBeriTentara from "./logic/beri_tentara_modals";
import { gameStorage } from "@/app/game/gamestorage";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

export default function BeriTentaraModal({ isOpen, onClose, targetCountry }: ModalProps) {
  const [playerCountry, setPlayerCountry] = useState<string>("Indonesia");

  useEffect(() => {
    if (isOpen) {
      const session = gameStorage.getSession();
      const countryName = session?.country || localStorage.getItem("selectedCountry") || "Indonesia";
      setPlayerCountry(countryName);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalsBeriTentara 
      isOpen={isOpen}
      onClose={onClose}
      targetCountry={targetCountry}
      playerCountry={playerCountry}
    />
  );
}
