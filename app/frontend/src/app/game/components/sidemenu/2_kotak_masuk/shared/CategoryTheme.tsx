import React from 'react';
import { 
  DollarSign, Briefcase, Shield, Building2, Handshake, Mail, Info, 
  ArrowUpRight, ArrowDownLeft, Globe, Banknote, HeartCrack,
  Gift, Star, AlertTriangle, Wrench, TrendingUp
} from 'lucide-react';

export const getCategoryTheme = (
  category: string = 'general', 
  isSystem: boolean = false, 
  isProposal: boolean | any = false, 
  subject: string = ''
): any => {
  if (isSystem) return {
    bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', indicator: 'bg-blue-500', icon: <Info className="h-4 w-4" />,
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.1)]'
  };

  // DIPLOMATIC GIFTS - Tier based colors
  const lowerSubject = subject.toLowerCase();
  
  // Sahabat Strategis (80-100) - GREEN/GOLD
  if (category === 'relationship' && (lowerSubject.includes('persahabatan') || lowerSubject.includes('token'))) {
    return {
      bg: 'bg-emerald-500/15', border: 'border-emerald-400/50', text: 'text-emerald-400', indicator: 'bg-emerald-500', icon: <Star className="h-4 w-4" />,
      glow: 'shadow-[0_0_40px_rgba(16,185,129,0.3)]'
    };
  }
  
  // Mitra Baik (60-79) - BLUE
  if (category === 'relationship' && lowerSubject.includes('dukungan')) {
    return {
      bg: 'bg-blue-500/15', border: 'border-blue-400/50', text: 'text-blue-400', indicator: 'bg-blue-500', icon: <Gift className="h-4 w-4" />,
      glow: 'shadow-[0_0_40px_rgba(59,130,246,0.3)]'
    };
  }
  
  // Hubungan Netral (40-59) - PURPLE
  if (category === 'relationship' && lowerSubject.includes('investasi')) {
    return {
      bg: 'bg-purple-500/15', border: 'border-purple-400/50', text: 'text-purple-400', indicator: 'bg-purple-500', icon: <TrendingUp className="h-4 w-4" />,
      glow: 'shadow-[0_0_40px_rgba(168,85,247,0.3)]'
    };
  }
  
  // Hubungan Tegang (20-39) - ORANGE
  if (category === 'relationship' && lowerSubject.includes('stabilisasi')) {
    return {
      bg: 'bg-orange-500/15', border: 'border-orange-400/50', text: 'text-orange-400', indicator: 'bg-orange-500', icon: <Wrench className="h-4 w-4" />,
      glow: 'shadow-[0_0_40px_rgba(249,115,22,0.3)]'
    };
  }
  
  // Hubungan Krisis (0-19) - RED
  if (category === 'relationship' && (lowerSubject.includes('darurat') || lowerSubject.includes('bantuan'))) {
    return {
      bg: 'bg-rose-500/15', border: 'border-rose-400/50', text: 'text-rose-400', indicator: 'bg-rose-500', icon: <AlertTriangle className="h-4 w-4" />,
      glow: 'shadow-[0_0_40px_rgba(244,63,94,0.3)]'
    };
  }
  
  // Default Financial Aid - CYAN (fallback)
  const isFinancialAid = category === 'relationship' && (
    lowerSubject.includes('bantuan') ||
    lowerSubject.includes('kirim') ||
    lowerSubject.includes('💰')
  );
  
  if (isFinancialAid) {
    return {
      bg: 'bg-cyan-500/15', border: 'border-cyan-400/50', text: 'text-cyan-400', indicator: 'bg-cyan-500', icon: <Banknote className="h-4 w-4" />,
      glow: 'shadow-[0_0_40px_rgba(6,182,212,0.3)]'
    };
  }

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
    case 'pbb': return { 
      bg: 'bg-cyan-500/5', border: 'border-cyan-500/20', text: 'text-cyan-400', indicator: 'bg-cyan-500', icon: <Globe className="h-4 w-4" />,
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.15)]'
    };
    case 'relationship': return {
      bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', indicator: 'bg-cyan-500', icon: <HeartCrack className="h-4 w-4" />,
      glow: 'shadow-[0_0_30px_rgba(6,182,212,0.2)]'
    };
    default: return { 
      bg: 'bg-zinc-900/50', border: 'border-zinc-800', text: 'text-zinc-400', indicator: 'bg-zinc-700', icon: <Mail className="h-4 w-4" />,
      glow: ''
    };
  }
};
