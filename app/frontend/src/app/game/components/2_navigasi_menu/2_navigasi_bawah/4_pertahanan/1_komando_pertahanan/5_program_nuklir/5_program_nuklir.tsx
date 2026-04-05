"use client"

import { useState, useEffect } from "react";
import { X, Radiation } from "lucide-react";
import { CountryData } from "@/app/database/data/semua_fitur_negara/index";
import { nuclearStorage, NuclearStatus } from "./nuclearStorage";
import NavigasiWaktu from "../../../2_ekonomi/1-perdagangan/NavigasiWaktu";

// Views
import ModalsProgramNuklir from "./2_tidak_ada_program/modals_program_nuklir";
import ModalsKonstruksiNuklir from "./2_tidak_ada_program/ModalsKonstruksiNuklir";
import AdaProgramNuklir from "./1_ada_program/1_ada_program";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: CountryData;
}

export default function ProgramNuklirModal({ isOpen, onClose, data }: Props) {
  const [status, setStatus] = useState<NuclearStatus>(nuclearStorage.getStatus());

  useEffect(() => {
    const handleUpdate = () => {
      setStatus(nuclearStorage.getStatus());
    };
    window.addEventListener('nuclear_storage_updated', handleUpdate);
    return () => window.removeEventListener('nuclear_storage_updated', handleUpdate);
  }, []);

  if (!isOpen || !data) return null;

  // Render Based on Status
  if (status === 'none' || status === 'active') {
    return <ModalsProgramNuklir isOpen={isOpen} onClose={onClose} data={data} />;
  }

  if (status === 'constructing') {
    return <ModalsKonstruksiNuklir isOpen={isOpen} onClose={onClose} data={data} />;
  }

  return null;
}
