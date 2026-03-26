"use client"

import { X, Landmark } from "lucide-react"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KementerianModal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 bg-black/80 z-30 flex items-center justify-center animate-in fade-in duration-200">
      <div className="bg-zinc-950 border border-zinc-800/80 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <Landmark className="h-5 w-5 text-purple-500" />
            <h2 className="text-xl font-bold text-white">Kementerian</h2>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer">
            <X className="h-5 w-5 text-zinc-400" />
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 text-zinc-300">
          <p className="text-sm text-zinc-400">Manajemen kementerian negara...</p>
        </div>
      </div>
    </div>
  )
}
