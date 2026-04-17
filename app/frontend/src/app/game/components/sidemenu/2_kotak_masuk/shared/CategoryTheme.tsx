import React from 'react';
import { 
  DollarSign, Briefcase, Shield, Building2, Handshake, Mail, Info, 
  ArrowUpRight, ArrowDownLeft
} from 'lucide-react';

export const getCategoryTheme = (category: string = 'general', isSystem: boolean = false, isProposal: boolean = false, subject: string = '') => {
  if (isSystem) return {
    bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', indicator: 'bg-blue-500', icon: <Info className="h-4 w-4" />,
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.1)]'
  };

  if (isProposal && category === 'trade') {
    const metadata = typeof isProposal === 'object' ? (isProposal as any) : null;
    const type = metadata?.type;
    const lowerSubj = subject.toLowerCase();

    // EKSPOR (Tawaran beli dari AI/Server -> User dapet duit) = HIJAU
    if (type === 'purchase_request' || lowerSubj.includes('ekspor')) return {
      bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', text: 'text-emerald-400', indicator: 'bg-emerald-500', icon: <ArrowUpRight className="h-4 w-4" />,
      glow: 'shadow-[0_0_20px_rgba(16,185,129,0.2)]'
    };

    // IMPOR (Tawaran produk dari AI/Server -> User keluar duit) = MERAH/ROSE
    if (type === 'product_offer' || lowerSubj.includes('impor')) return {
      bg: 'bg-rose-500/10', border: 'border-rose-500/30', text: 'text-rose-400', indicator: 'bg-rose-500', icon: <ArrowDownLeft className="h-4 w-4" />,
      glow: 'shadow-[0_0_20px_rgba(244,63,94,0.2)]'
    };
    
    // KONTRAK DAGANG (Indigo)
    if (type === 'trade_contract' || lowerSubj.includes('kontrak dagang')) return {
      bg: 'bg-indigo-500/15', border: 'border-indigo-400/40', text: 'text-indigo-400', indicator: 'bg-indigo-500', icon: <Briefcase className="h-4 w-4" />,
      glow: 'shadow-[0_0_40px_rgba(129,140,248,0.25)]'
    };

    // KEMITRAAN (Default Amber/Emas)
    return {
      bg: 'bg-amber-600/15', border: 'border-amber-400/50', text: 'text-amber-400', indicator: 'bg-amber-500', icon: <Handshake className="h-4 w-4" />,
      glow: 'shadow-[0_0_40px_rgba(245,158,11,0.3)]'
    };
  }

  switch (category) {
    case 'finance': return { 
      bg: 'bg-emerald-500/5', border: 'border-emerald-500/20', text: 'text-emerald-400', indicator: 'bg-emerald-500', icon: <DollarSign className="h-4 w-4" />,
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.15)]'
    };
    case 'trade': return { 
      bg: 'bg-zinc-900/50', border: 'border-zinc-800', text: 'text-zinc-400', indicator: 'bg-amber-500', icon: <Briefcase className="h-4 w-4" />,
      glow: ''
    };
    case 'pact': return { 
      bg: 'bg-rose-500/5', border: 'border-rose-500/20', text: 'text-rose-400', indicator: 'bg-rose-500', icon: <Shield className="h-4 w-4" />,
      glow: 'shadow-[0_0_30px_rgba(244,63,94,0.15)]'
    };
    case 'alliance': return { 
      bg: 'bg-blue-600/5', border: 'border-blue-500/20', text: 'text-blue-400', indicator: 'bg-blue-600', icon: <Shield className="h-4 w-4" />,
      glow: 'shadow-[0_0_30px_rgba(37,99,235,0.15)]'
    };
    case 'embassy': return { 
      bg: 'bg-purple-500/5', border: 'border-purple-500/20', text: 'text-purple-400', indicator: 'bg-purple-500', icon: <Building2 className="h-4 w-4" />,
      glow: 'shadow-[0_0_30_rgba(168,85,247,0.15)]'
    };
    default: return { 
      bg: 'bg-zinc-900/50', border: 'border-zinc-800', text: 'text-zinc-400', indicator: 'bg-zinc-700', icon: <Mail className="h-4 w-4" />,
      glow: ''
    };
  }
};
