import React, { useState, useEffect } from "react";
import {
  Package, ShoppingCart, FileText, Check, X, AlertTriangle,
  Globe, TrendingUp, TrendingDown, Clock, Coins, Zap, ChevronDown,
  ChevronUp, ArrowRightLeft, Sparkles, BadgePercent, Timer, Handshake
} from "lucide-react";
import { aiTradeOfferStorage, AiTradeOffer } from "../storage/aiTradeOfferStorage";
import { tradeContractStorage, TradeContract } from "../storage/tradeContractStorage";
import { tradeAgreementStorage, TradeAgreementProposal } from "../storage/tradeAgreementStorage";
import { AiTradeService } from "../services/AiTradeService";
import { budgetStorage } from "@/app/game/components/1_navbar/3_kas_negara";

/**
 * Panel Tawaran Dagang AI
 * Menampilkan semua tawaran produk, permintaan pembelian, dan kontrak dari AI.
 */
export default function AiTradeOffersPanel() {
  const [offers, setOffers] = useState<AiTradeOffer[]>([]);
  const [contracts, setContracts] = useState<TradeContract[]>([]);
  const [agreements, setAgreements] = useState<TradeAgreementProposal[]>([]);
  const [budget, setBudget] = useState(budgetStorage.getBudget());
  const [activeTab, setActiveTab] = useState<"agreements" | "offers" | "requests" | "contracts">("agreements");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // SSR Guard
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const refresh = () => {
      setOffers(aiTradeOfferStorage.getOffers());
      setContracts(tradeContractStorage.getContracts());
      setAgreements(tradeAgreementStorage.getProposals());
      setBudget(budgetStorage.getBudget());
    };
    refresh();
    window.addEventListener("ai_trade_updated", refresh);
    window.addEventListener("budget_storage_updated", () => setBudget(budgetStorage.getBudget()));
    return () => {
      window.removeEventListener("ai_trade_updated", refresh);
      window.removeEventListener("budget_storage_updated", () => setBudget(budgetStorage.getBudget()));
    };
  }, [mounted]);

  if (!mounted) return null;

  const productOffers = offers.filter(o => o.type === "product_offer");
  const purchaseRequests = offers.filter(o => o.type === "purchase_request");
  const pendingProductOffers = productOffers.filter(o => o.status === "pending");
  const pendingPurchaseRequests = purchaseRequests.filter(o => o.status === "pending");
  const pendingContracts = contracts.filter(c => c.status === "pending");
  const activeContracts = contracts.filter(c => c.status === "active");
  const pendingAgreements = agreements.filter(a => a.status === "pending");

  const handleAcceptOffer = (id: string) => {
    const success = AiTradeService.acceptProductOffer(id);
    if (!success) {
      alert("Dana tidak mencukupi untuk menerima tawaran ini.");
    }
  };

  const handleAcceptRequest = (id: string) => {
    AiTradeService.acceptPurchaseRequest(id);
  };

  const handleRejectOffer = (id: string) => {
    AiTradeService.rejectOffer(id);
  };

  const handleAcceptContract = (id: string) => {
    AiTradeService.acceptContract(id);
  };

  const handleRejectContract = (id: string) => {
    AiTradeService.rejectContract(id);
  };

  const handleAcceptAgreement = (id: string) => {
    AiTradeService.acceptTradeAgreement(id);
  };

  const handleRejectAgreement = (id: string) => {
    AiTradeService.rejectTradeAgreement(id);
  };

  const tabCounts = {
    agreements: pendingAgreements.length,
    offers: pendingProductOffers.length,
    requests: pendingPurchaseRequests.length,
    contracts: pendingContracts.length + activeContracts.length
  };

  const renderStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pending: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      accepted: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      rejected: "bg-rose-500/10 text-rose-500 border-rose-500/20",
      expired: "bg-zinc-700/20 text-zinc-500 border-zinc-700/30",
      active: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
      completed: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    };
    const labels: Record<string, string> = {
      pending: "Menunggu", accepted: "Diterima", rejected: "Ditolak",
      expired: "Kedaluwarsa", active: "Aktif", completed: "Selesai"
    };
    return (
      <span className={`px-2 py-0.5 text-[8px] font-black uppercase tracking-widest rounded-md border ${styles[status] || styles.pending}`}>
        {labels[status] || status}
      </span>
    );
  };

  const renderOffer = (offer: AiTradeOffer) => {
    const isExpanded = expandedId === offer.id;
    const totalCost = offer.amount * offer.pricePerUnit;
    const canAfford = offer.type === "product_offer" ? budget >= totalCost : true;
    const isPending = offer.status === "pending";

    return (
      <div
        key={offer.id}
        className={`bg-zinc-900/40 border rounded-2xl overflow-hidden transition-all duration-500 ${
          isPending 
            ? offer.type === "product_offer" ? "border-rose-500/30 hover:border-rose-400" : "border-emerald-500/30 hover:border-emerald-400"
            : "border-zinc-900/30 opacity-60"
        }`}
      >
        {/* Header */}
        <button
          onClick={() => setExpandedId(isExpanded ? null : offer.id)}
          className="w-full p-5 flex items-center justify-between cursor-pointer group"
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${
              offer.type === "product_offer"
                ? "bg-rose-500/10 text-rose-400"
                : "bg-emerald-500/10 text-emerald-400"
            }`}>
              {offer.type === "product_offer" ? <Package size={20} /> : <ShoppingCart size={20} />}
            </div>
            <div className="text-left">
              <div className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                {offer.countryLabel}
                {renderStatusBadge(offer.status)}
              </div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
                {offer.type === "product_offer"
                  ? `Menawarkan ${offer.commodityLabel}`
                  : `Ingin membeli ${offer.commodityLabel}`
                }
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-lg font-black text-white italic tracking-tighter">
                {offer.amount.toLocaleString("id-ID")} <span className="text-[10px] text-zinc-500 not-italic">unit</span>
              </div>
              <div className="flex items-center gap-1 justify-end">
                {offer.type === "product_offer" ? (
                  <BadgePercent size={10} className="text-green-500" />
                ) : (
                  <TrendingUp size={10} className="text-amber-500" />
                )}
                <span className="text-[9px] font-black text-green-500 uppercase tracking-wider">
                  {offer.type === "product_offer"
                    ? `-${offer.discountPct}% diskon`
                    : `+${offer.premiumPct}% premium`
                  }
                </span>
              </div>
            </div>
            <div className={`transition-transform duration-300 text-zinc-600 ${isExpanded ? "rotate-180" : ""}`}>
              <ChevronDown size={16} />
            </div>
          </div>
        </button>

        {/* Expanded Detail */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-5 pb-5 space-y-4 border-t border-zinc-900/50 pt-4">
            {/* Price Comparison */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/30">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Harga Pasar</p>
                <p className="text-sm font-black text-zinc-400 italic line-through">{offer.marketPrice.toLocaleString("id-ID")}</p>
              </div>
              <div className={`p-3 rounded-xl border ${
                offer.type === "product_offer"
                  ? "bg-rose-500/5 border-rose-500/20"
                  : "bg-emerald-500/5 border-emerald-500/20"
              }`}>
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Harga Tawaran</p>
                <p className={`text-sm font-black italic ${
                  offer.type === "product_offer" ? "text-rose-400" : "text-emerald-400"
                }`}>{offer.pricePerUnit.toLocaleString("id-ID")}/unit</p>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/30">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Total Nilai</p>
                <p className={`text-sm font-black italic ${
                  offer.type === "product_offer" && !canAfford ? "text-red-500" : "text-white"
                }`}>{totalCost.toLocaleString("id-ID")}</p>
              </div>
            </div>

            {/* Expiry */}
            <div className="flex items-center gap-2 text-zinc-500">
              <Timer size={12} />
              <span className="text-[9px] font-bold uppercase tracking-widest">
                Berlaku {offer.expiryDays} hari dari penawaran
              </span>
            </div>

            {/* Action Buttons */}
            {isPending && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleRejectOffer(offer.id)}
                  className="flex-1 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-500 hover:text-white font-black uppercase text-[9px] tracking-[0.3em] rounded-xl border border-zinc-800 transition-all active:scale-[0.98] cursor-pointer"
                >
                  Tolak
                </button>
                <button
                  onClick={() => offer.type === "product_offer" ? handleAcceptOffer(offer.id) : handleAcceptRequest(offer.id)}
                  disabled={offer.type === "product_offer" && !canAfford}
                  className={`flex-[2] py-3 font-black uppercase text-[9px] tracking-[0.3em] rounded-xl border transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 ${
                    offer.type === "product_offer" && !canAfford
                      ? "bg-zinc-900 border-zinc-800 text-zinc-700 cursor-not-allowed"
                      : offer.type === "product_offer"
                        ? "bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-500/20 hover:bg-rose-500"
                        : "bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500"
                  }`}
                >
                  <Check size={14} />
                  {offer.type === "product_offer" ? "Terima & Impor" : "Terima & Jual"}
                </button>
              </div>
            )}

            {offer.type === "product_offer" && !canAfford && isPending && (
              <div className="flex items-center gap-2 text-red-500/70 animate-pulse">
                <AlertTriangle size={12} />
                <p className="text-[9px] font-black uppercase tracking-widest">Saldo tidak mencukupi ({budget.toLocaleString("id-ID")} tersedia)</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderContract = (contract: TradeContract) => {
    const isExpanded = expandedId === contract.id;
    const isPending = contract.status === "pending";
    const totalValue = contract.amountPerMonth * contract.pricePerUnit * contract.durationMonths;

    return (
      <div
        key={contract.id}
        className={`bg-zinc-900/40 border rounded-2xl overflow-hidden transition-all duration-500 ${
          isPending || contract.status === "active" ? "border-zinc-800/50 hover:border-purple-500/30" : "border-zinc-900/30 opacity-60"
        }`}
      >
        <button
          onClick={() => setExpandedId(isExpanded ? null : contract.id)}
          className="w-full p-5 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500">
              <FileText size={20} />
            </div>
            <div className="text-left">
              <div className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                {contract.countryLabel}
                {renderStatusBadge(contract.status)}
              </div>
              <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mt-0.5">
                Kontrak {contract.commodityLabel} — {contract.direction === "ai_sells" ? "IMPOR" : "EKSPOR"}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-lg font-black text-white italic tracking-tighter">
                {contract.amountPerMonth.toLocaleString("id-ID")} <span className="text-[10px] text-zinc-500 not-italic">unit/bln</span>
              </div>
              <div className="text-[9px] font-bold text-purple-400 uppercase tracking-wider">
                {contract.direction === "ai_sells" ? "AI → Anda" : "Anda → AI"}
              </div>
            </div>
            <div className={`transition-transform duration-300 text-zinc-600 ${isExpanded ? "rotate-180" : ""}`}>
              <ChevronDown size={16} />
            </div>
          </div>
        </button>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-5 pb-5 space-y-4 border-t border-zinc-900/50 pt-4">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/30">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Harga Terikat</p>
                <p className="text-sm font-black text-purple-400 italic">{contract.pricePerUnit.toLocaleString("id-ID")}/unit</p>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/30">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Total Estimasi</p>
                <p className="text-sm font-black text-white italic">{totalValue.toLocaleString("id-ID")}</p>
              </div>
              <div className="bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/30">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">Sisa</p>
                <p className="text-sm font-black text-white italic">{contract.remainingMonths}/{contract.durationMonths} bln</p>
              </div>
            </div>

            {/* Progress bar for active contracts */}
            {contract.status === "active" && (
              <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-500 shadow-[0_0_10px_rgba(139,92,246,0.4)] transition-all duration-700"
                  style={{ width: `${((contract.durationMonths - contract.remainingMonths) / contract.durationMonths) * 100}%` }}
                />
              </div>
            )}

            {isPending && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleRejectContract(contract.id)}
                  className="flex-1 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-500 hover:text-white font-black uppercase text-[9px] tracking-[0.3em] rounded-xl border border-zinc-800 transition-all active:scale-[0.98] cursor-pointer"
                >
                  Tolak Kontrak
                </button>
                <button
                  onClick={() => handleAcceptContract(contract.id)}
                  className="flex-[2] py-3 bg-purple-600 border border-purple-500 text-white shadow-lg shadow-purple-500/20 hover:bg-purple-500 font-black uppercase text-[9px] tracking-[0.3em] rounded-xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Check size={14} />
                  Tanda Tangani Kontrak
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderAgreement = (agreement: TradeAgreementProposal) => {
    const isExpanded = expandedId === agreement.id;
    const isPending = agreement.status === "pending";

    return (
      <div
        key={agreement.id}
        className={`bg-zinc-900/40 border rounded-2xl overflow-hidden transition-all duration-500 ${
          isPending ? "border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.05)]" : "border-zinc-900/30 opacity-60"
        }`}
      >
        <button
          onClick={() => setExpandedId(isExpanded ? null : agreement.id)}
          className="w-full p-5 flex items-center justify-between cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500">
              <Handshake size={20} />
            </div>
            <div className="text-left">
              <div className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
                {agreement.countryLabel}
                {renderStatusBadge(agreement.status)}
              </div>
              <div className="text-[10px] font-bold text-amber-500 uppercase tracking-wider mt-0.5">
                Proposal Perjanjian Dagang
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Tipe</div>
              <div className="text-sm font-black text-white italic tracking-tighter uppercase">
                {agreement.proposalType}
              </div>
            </div>
            <div className={`transition-transform duration-300 text-zinc-600 ${isExpanded ? "rotate-180" : ""}`}>
              <ChevronDown size={16} />
            </div>
          </div>
        </button>

        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-5 pb-5 space-y-4 border-t border-zinc-900/50 pt-4">
            <div className="bg-amber-500/5 p-4 rounded-xl border border-amber-500/10">
              <p className="text-[10px] text-amber-200/70 leading-relaxed font-medium">
                Pemerintah <span className="font-black text-white uppercase tracking-wider">{agreement.countryLabel}</span> mengajukan kerjasama perdagangan resmi. Perjanjian ini akan menjadikan mereka mitra dagang resmi, memungkinkan pertukaran komoditas unggulan seperti:
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {agreement.topCommodities.map((c, idx) => (
                  <span key={idx} className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-[9px] font-black text-amber-400 uppercase tracking-widest rounded-md">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-zinc-500">
              <Timer size={12} />
              <span className="text-[9px] font-bold uppercase tracking-widest">
                Berlaku {agreement.expiryDays} hari
              </span>
            </div>

            {isPending && (
              <div className="flex gap-3">
                <button
                  onClick={() => handleRejectAgreement(agreement.id)}
                  className="flex-1 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-500 hover:text-white font-black uppercase text-[9px] tracking-[0.3em] rounded-xl border border-zinc-800 transition-all active:scale-[0.98] cursor-pointer"
                >
                  Tolak
                </button>
                <button
                  onClick={() => handleAcceptAgreement(agreement.id)}
                  className="flex-[2] py-3 bg-amber-600 border border-amber-500 text-white shadow-lg shadow-amber-500/20 hover:bg-amber-500 font-black uppercase text-[9px] tracking-[0.3em] rounded-xl transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  <Check size={14} />
                  Bentuk Perjanjian Dagang
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const totalPending = tabCounts.agreements + tabCounts.offers + tabCounts.requests + tabCounts.contracts;

  return (
    <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/20">
            <Sparkles size={20} className="text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-black text-white uppercase tracking-wider italic leading-none">Tawaran Dagang AI</h2>
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mt-1">
              {totalPending > 0 ? `${totalPending} tawaran menunggu respon` : "Tidak ada tawaran aktif saat ini"}
            </p>
          </div>
        </div>

        {totalPending > 0 && (
          <div className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center gap-2 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">{totalPending} Baru</span>
          </div>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-2xl border border-zinc-800/50">
        {([
          { key: "agreements" as const, label: "Kemitraan", icon: Handshake, color: "amber" },
          { key: "offers" as const, label: "Tawaran Produk", icon: Package, color: "rose" },
          { key: "requests" as const, label: "Permintaan Beli", icon: ShoppingCart, color: "emerald" },
          { key: "contracts" as const, label: "Kontrak", icon: FileText, color: "indigo" }
        ] as const).map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === tab.key
                ? tab.color === "rose"
                  ? "bg-rose-500/10 text-rose-400 border border-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]"
                  : tab.color === "emerald"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                    : tab.color === "amber"
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                      : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]"
                : "text-zinc-600 hover:text-zinc-400 border border-transparent"
            }`}
          >
            <tab.icon size={12} className={activeTab === tab.key ? "animate-pulse" : ""} />
            {tab.label}
            {tabCounts[tab.key] > 0 && (
              <span className={`px-2 py-0.5 text-[9px] font-black rounded-full shadow-lg shadow-black/20 transform transition-transform duration-300 group-hover:scale-110 ${
                tab.color === "rose" ? "bg-rose-600 text-white" :
                tab.color === "emerald" ? "bg-emerald-600 text-white" :
                tab.color === "amber" ? "bg-amber-600 text-white" :
                "bg-indigo-600 text-white"
              }`}>
                {tabCounts[tab.key]}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-3 min-h-[200px]">
        {activeTab === "agreements" && (
          <>
            {agreements.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 opacity-40">
                <Handshake className="h-12 w-12 text-zinc-700" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Belum Ada Tawaran Kemitraan</p>
                  <p className="text-[9px] text-zinc-600 mt-1">Negara yang belum memiliki perjanjian dagang dengan Anda akan menawarkan kerjasama di sini</p>
                </div>
              </div>
            ) : (
              agreements.map(renderAgreement)
            )}
          </>
        )}

        {activeTab === "offers" && (
          <>
            {productOffers.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 opacity-40">
                <Package className="h-12 w-12 text-zinc-700" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Belum Ada Tawaran Produk</p>
                  <p className="text-[9px] text-zinc-600 mt-1">Negara AI akan menawarkan komoditas surplus mereka seiring waktu</p>
                </div>
              </div>
            ) : (
              productOffers.map(renderOffer)
            )}
          </>
        )}

        {activeTab === "requests" && (
          <>
            {purchaseRequests.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 opacity-40">
                <ShoppingCart className="h-12 w-12 text-zinc-700" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Belum Ada Permintaan Beli</p>
                  <p className="text-[9px] text-zinc-600 mt-1">Negara AI yang kekurangan komoditas akan meminta pembelian dari Anda</p>
                </div>
              </div>
            ) : (
              purchaseRequests.map(renderOffer)
            )}
          </>
        )}

        {activeTab === "contracts" && (
          <>
            {contracts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 opacity-40">
                <FileText className="h-12 w-12 text-zinc-700" />
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Belum Ada Kontrak Dagang</p>
                  <p className="text-[9px] text-zinc-600 mt-1">Negara dengan hubungan erat akan mengajukan kontrak jangka panjang</p>
                </div>
              </div>
            ) : (
              <>
                {pendingContracts.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest px-1">Menunggu Persetujuan</p>
                    {pendingContracts.map(renderContract)}
                  </div>
                )}
                {activeContracts.length > 0 && (
                  <div className="space-y-3 mt-6">
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest px-1">Kontrak Aktif</p>
                    {activeContracts.map(renderContract)}
                  </div>
                )}
                {contracts.filter(c => !["pending", "active"].includes(c.status)).length > 0 && (
                  <div className="space-y-3 mt-6">
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest px-1">Riwayat</p>
                    {contracts.filter(c => !["pending", "active"].includes(c.status)).map(renderContract)}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
