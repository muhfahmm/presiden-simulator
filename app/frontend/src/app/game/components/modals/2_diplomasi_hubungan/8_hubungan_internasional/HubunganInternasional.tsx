import React, { useEffect, useState, useMemo, memo } from "react";
import { Globe2, X, Search, ArrowUpDown, Users, Loader2 } from "lucide-react";
import { countries as centersData, asiaCountries, afrikaCountries, eropaCountries, naCountries, saCountries, oceaniaCountries } from "@/app/database/data/negara/benua/index";
import { RelationPersistence } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationPersistence";
import { getRelationScore, getNormalizedUser } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationMatrix";
import { RELATION_EVENTS } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationEvents";
import { relationDeltaStorage } from "@/app/game/components/modals/1_info_strategis/8_Hubungan/RelationDelta";

interface HubunganInternasionalProps {
  isOpen: boolean;
  onClose: () => void;
  targetCountry: string;
}

type SortMode = 'name-asc' | 'name-desc' | 'score-asc' | 'score-desc';

const continentColors: Record<string, { bg: string; text: string; border: string }> = {
  "Asia": { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20" },
  "Afrika": { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  "Eropa": { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  "Amerika Utara": { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/20" },
  "Amerika Selatan": { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20" },
  "Oceania": { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  "Global": { bg: "bg-zinc-500/10", text: "text-zinc-400", border: "border-zinc-500/20" },
};

const countryStaticMeta = centersData.reduce((acc, c) => {
  const nid = c.name_id.toLowerCase();
  let continent = "Global";
  if (asiaCountries.some((x: any) => x.name_id.toLowerCase() === nid)) continent = "Asia";
  else if (afrikaCountries.some((x: any) => x.name_id.toLowerCase() === nid)) continent = "Afrika";
  else if (eropaCountries.some((x: any) => x.name_id.toLowerCase() === nid)) continent = "Eropa";
  else if (naCountries.some((x: any) => x.name_id.toLowerCase() === nid)) continent = "Amerika Utara";
  else if (saCountries.some((x: any) => x.name_id.toLowerCase() === nid)) continent = "Amerika Selatan";
  else if (oceaniaCountries.some((x: any) => x.name_id.toLowerCase() === nid)) continent = "Oceania";

  acc[nid] = { entry: c, continent, displayName: c.name_id };
  return acc;
}, {} as Record<string, { entry: any, continent: string, displayName: string }>);

const relationshipFileMap: Record<string, string> = {
  "afrika selatan": "afrika/1_afrika_selatan", "aljazair": "afrika/2_aljazair", "angola": "afrika/3_angola", "benin": "afrika/4_benin", "botswana": "afrika/5_botswana", "burkina faso": "afrika/6_burkina_faso", "burundi": "afrika/7_burundi", "chad": "afrika/8_chad", "djibouti": "afrika/9_djibouti", "eritrea": "afrika/10_eritrea", "eswatini": "afrika/11_eswatini", "ethiopia": "afrika/12_ethiopia", "gabon": "afrika/13_gabon", "gambia": "afrika/14_gambia", "ghana": "afrika/15_ghana", "guinea": "afrika/16_guinea", "guinea bissau": "afrika/17_guinea_bissau", "kamerun": "afrika/18_kamerun", "kenya": "afrika/19_kenya", "komoro": "afrika/20_komoro", "kongo": "afrika/21_kongo", "lesotho": "afrika/22_lesotho", "liberia": "afrika/23_liberia", "libya": "afrika/24_libya", "madagaskar": "afrika/25_madagaskar", "malawi": "afrika/26_malawi", "mali": "afrika/27_mali", "maroko": "afrika/28_maroko", "mauritania": "afrika/29_mauritania", "mauritius": "afrika/30_mauritius", "mesir": "afrika/31_mesir", "mozambik": "afrika/32_mozambik", "namibia": "afrika/33_namibia", "niger": "afrika/34_niger", "nigeria": "afrika/35_nigeria", "pantai gading": "afrika/36_pantai_gading", "republik afrika tengah": "afrika/37_republik_afrika_tengah", "republik demokratik kongo": "afrika/38_republik_demokratik_kongo", "republik sudan": "afrika/39_republik_sudan", "republik tanzania": "afrika/40_republik_tanzania", "republik uganda": "afrika/41_republik_uganda", "republik zambia": "afrika/42_republik_zambia", "republik zimbabwe": "afrika/43_republik_zimbabwe", "rwanda": "afrika/44_rwanda", "sao tome dan principe": "afrika/45_sao_tome_dan_principe", "senegal": "afrika/46_senegal", "seychelles": "afrika/47_seychelles", "sierra leone": "afrika/48_sierra_leone", "somalia": "afrika/49_somalia", "sudan selatan": "afrika/50_sudan_selatan", "tanjung verde": "afrika/51_tanjung_verde", "togo": "afrika/52_togo", "tunisia": "afrika/53_tunisia",
  "afganistan": "asia/54_afganistan", "arab saudi": "asia/55_arab_saudi", "armenia": "asia/56_armenia", "azerbaijan": "asia/57_azerbaijan", "bahrain": "asia/58_bahrain", "bangladesh": "asia/59_bangladesh", "bhutan": "asia/60_bhutan", "brunei": "asia/61_brunei", "china": "asia/62_china", "filipina": "asia/63_filipina", "georgia": "asia/64_georgia", "hong kong": "asia/65_hong_kong", "india": "asia/66_india", "indonesia": "asia/67_indonesia", "irak": "asia/68_irak", "iran": "asia/69_iran", "israel": "asia/70_israel", "jepang": "asia/71_jepang", "kamboja": "asia/72_kamboja", "kazakhstan": "asia/73_kazakhstan", "kirgizstan": "asia/74_kirgizstan", "korea selatan": "asia/75_korea_selatan", "korea utara": "asia/76_korea_utara", "kuwait": "asia/77_kuwait", "laos": "asia/78_laos", "lebanon": "asia/79_lebanon", "makau": "asia/80_makau", "malaysia": "asia/81_malaysia", "maldives": "asia/82_maldives", "mongolia": "asia/83_mongolia", "myanmar": "asia/84_myanmar", "nepal": "asia/85_nepal", "oman": "asia/86_oman", "pakistan": "asia/87_pakistan", "palestina": "asia/88_palestina", "qatar": "asia/89_qatar", "republik timor leste": "asia/90_republik_timor_leste", "singapura": "asia/91_singapura", "sri lanka": "asia/92_sri_lanka", "suriah": "asia/93_suriah", "taiwan": "asia/94_taiwan", "tajikistan": "asia/95_tajikistan", "thailand": "asia/96_thailand", "turkmenistan": "asia/97_turkmenistan", "uni emirat arab": "asia/98_uni_emirat_arab", "uzbekistan": "asia/99_uzbekistan", "vietnam": "asia/100_vietnam", "yaman": "asia/101_yaman", "yordania": "asia/102_yordania",
  "albania": "eropa/103_albania", "andorra": "eropa/104_andorra", "austria": "eropa/105_austria", "belanda": "eropa/106_belanda", "belarus": "eropa/107_belarus", "belgia": "eropa/108_belgia", "bosnia dan hercegovina": "eropa/109_bosnia_dan_hercegovina", "bulgaria": "eropa/110_bulgaria", "ceko": "eropa/111_ceko", "denmark": "eropa/112_denmark", "estonia": "eropa/113_estonia", "finlandia": "eropa/114_finlandia", "gibraltar": "eropa/115_gibraltar", "hungaria": "eropa/116_hungaria", "inggris": "eropa/117_inggris", "irlandia": "eropa/118_irlandia", "islandia": "eropa/119_islandia", "italia": "eropa/120_italia", "jerman": "eropa/121_jerman", "kepulauan faroe": "eropa/122_kepulauan_faroe", "kosovo": "eropa/123_kosovo", "kroasia": "eropa/124_kroasia", "latvia": "eropa/125_latvia", "liechtenstein": "eropa/126_liechtenstein", "lithuania": "eropa/127_lithuania", "luksemburg": "eropa/128_luksemburg", "makedonia utara": "eropa/129_makedonia_utara", "malta": "eropa/130_malta", "moldova": "eropa/131_moldova", "monako": "eropa/132_monako", "montenegro": "eropa/133_montenegro", "norwegia": "eropa/134_norwegia", "polandia": "eropa/135_polandia", "portugal": "eropa/136_portugal", "prancis": "eropa/137_prancis", "republik rumania": "eropa/138_republik_rumania", "republik serbia": "eropa/139_republik_serbia", "rusia": "eropa/140_rusia", "san marino": "eropa/141_san_marino", "siprus": "eropa/142_siprus", "slovenia": "eropa/143_slovenia", "slowakia": "eropa/144_slowakia", "spanyol": "eropa/145_spanyol", "swedia": "eropa/146_swedia", "swiss": "eropa/147_swiss", "turki": "eropa/148_turki", "ukraina": "eropa/149_ukraina", "vatikan": "eropa/150_vatikan", "yunani": "eropa/151_yunani",
  "amerika serikat": "na/152_amerika_serikat", "antigua dan barbuda": "na/153_antigua_dan_barbuda", "bahama": "na/154_bahama", "barbados": "na/155_barbados", "belize": "na/156_belize", "bermuda": "na/157_bermuda", "costa rica": "na/158_costa_rica", "curacao": "na/159_curacao", "dominika": "na/160_dominika", "el salvador": "na/161_el_salvador", "greenland": "na/162_greenland", "grenada": "na/163_grenada", "guatemala": "na/164_guatemala", "haiti": "na/165_haiti", "honduras": "na/166_honduras", "jamaika": "na/167_jamaika", "kanada": "na/168_kanada", "kuba": "na/169_kuba", "meksiko": "na/170_meksiko", "nikaragua": "na/171_nikaragua", "panama": "na/172_panama", "puerto rico": "na/173_puerto_rico", "republik dominika": "na/174_republik_dominika", "saint kitts dan nevis": "na/175_saint_kitts_dan_nevis", "saint lucia": "na/176_saint_lucia", "saint vincent dan grenadine": "na/177_saint_vincent_dan_grenadine", "trinidad dan tobago": "na/178_trinidad_dan_tobago",
  "australia": "oceania/179_australia", "fiji": "oceania/180_fiji", "guam": "oceania/181_guam", "kiribati": "oceania/182_kiribati", "marshall": "oceania/183_marshall", "mikronesia": "oceania/184_mikronesia", "nauru": "oceania/185_nauru", "palau": "oceania/186_palau", "papua nugini": "oceania/187_papua_nugini", "samoa": "oceania/188_samoa", "samoa amerika": "oceania/189_samoa_amerika", "selandia baru": "oceania/190_selandia_baru", "tahiti": "oceania/191_tahiti", "tonga": "oceania/192_tonga", "tuvalu": "oceania/193_tuvalu", "vanuatu": "oceania/194_vanuatu",
  "argentina": "sa/195_argentina", "bolivia": "sa/196_bolivia", "brazil": "sa/197_brazil", "chile": "sa/198_chile", "ekuador": "sa/199_ekuador", "guiana prancis": "sa/200_guiana_prancis", "guyana": "sa/201_guyana", "kolombia": "sa/202_kolombia", "paraguay": "sa/203_paraguay", "peru": "sa/204_peru", "suriname": "sa/205_suriname", "uruguay": "sa/206_uruguay", "venezuela": "sa/207_venezuela",
};

function HubunganInternasional({ isOpen, onClose, targetCountry }: HubunganInternasionalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>('score-desc');
  const [continentFilter, setContinentFilter] = useState<string>("Semua");
  const [refreshKey, setRefreshKey] = useState(0);
  const [displayLimit, setDisplayLimit] = useState(20);
  const [dynamicRawRelations, setDynamicRawRelations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timeout: any;
    const handleUpdate = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setRefreshKey(prev => prev + 1);
      }, 500); 
    };
    window.addEventListener(RELATION_EVENTS.MATRIX_UPDATED, handleUpdate);
    window.addEventListener('relation_deltas_updated', handleUpdate);
    return () => {
      window.removeEventListener(RELATION_EVENTS.MATRIX_UPDATED, handleUpdate);
      window.removeEventListener('relation_deltas_updated', handleUpdate);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const loadRelations = async () => {
      setIsLoading(true);
      const targetKey = targetCountry.toLowerCase().trim();
      const filePath = relationshipFileMap[targetKey];
      if (!filePath) {
        setDynamicRawRelations([]);
        setIsLoading(false);
        return;
      }
      try {
        const module = await import(`@/app/database/data/database_hubungan_antar_negara/${filePath}`);
        const exportName = `${targetKey.replace(/\s+/g, '_')}_relations`;
        setDynamicRawRelations(module[exportName] || []);
      } catch (err) {
        console.error("Failed to load relations for:", targetCountry, err);
        setDynamicRawRelations([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadRelations();
  }, [targetCountry, isOpen]); // refreshKey removed to prevent redundant file imports

  const relationsData = useMemo(() => {
    if (!dynamicRawRelations.length) return [];
    const targetKey = targetCountry.toLowerCase().trim();
    return dynamicRawRelations.map((r: { id: number; name: string; relation: number }) => {
      const countryId = r.name.toLowerCase().trim();
      const metaInfo = countryStaticMeta[countryId];
      const dynamicScore = getRelationScore(countryId, r.relation, targetKey);
      const delta = relationDeltaStorage.getDelta(countryId);
      const meta = RelationPersistence.getRelationMetadata(dynamicScore);
      return {
        ...r,
        relation: dynamicScore,
        delta,
        continent: metaInfo?.continent || "Global",
        displayName: metaInfo?.displayName || r.name,
        meta,
      };
    });
  }, [dynamicRawRelations, targetCountry, refreshKey]);

  const continents = useMemo(() => {
    const set = new Set(relationsData.map((r: any) => r.continent));
    return ["Semua", ...Array.from(set).sort()];
  }, [relationsData]);

  const filteredRelations = useMemo(() => {
    let result = [...relationsData];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((r: any) => r.name.toLowerCase().includes(q) || r.displayName.toLowerCase().includes(q));
    }
    if (continentFilter !== "Semua") {
      result = result.filter((r: any) => r.continent === continentFilter);
    }
    result.sort((a: any, b: any) => {
      switch (sortMode) {
        case 'name-asc': return a.displayName.localeCompare(b.displayName);
        case 'name-desc': return b.displayName.localeCompare(a.displayName);
        case 'score-asc': return a.relation - b.relation;
        case 'score-desc': return b.relation - a.relation;
        default: return 0;
      }
    });
    return result;
  }, [relationsData, searchQuery, continentFilter, sortMode]);

  const stats = useMemo(() => {
    if (relationsData.length === 0) return { allies: 0, neutral: 0, hostile: 0, avg: 0 };
    const allies = relationsData.filter((r: any) => r.relation >= 70).length;
    const neutral = relationsData.filter((r: any) => r.relation >= 50 && r.relation < 70).length;
    const hostile = relationsData.filter((r: any) => r.relation < 50).length;
    const avg = relationsData.reduce((s: number, r: any) => s + r.relation, 0) / relationsData.length;
    return { allies, neutral, hostile, avg };
  }, [relationsData]);

  const cycleSortMode = () => {
    const modes: SortMode[] = ['score-desc', 'score-asc', 'name-asc', 'name-desc'];
    const idx = modes.indexOf(sortMode);
    setSortMode(modes[(idx + 1) % modes.length]);
  };

  const sortLabels: Record<SortMode, string> = {
    'score-desc': 'Skor ↓', 'score-asc': 'Skor ↑', 'name-asc': 'Nama A-Z', 'name-desc': 'Nama Z-A',
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 animate-in fade-in duration-75 pointer-events-none">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-xl max-h-[85vh] flex flex-col overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] relative animate-in fade-in zoom-in-95 duration-150 transition-all pointer-events-auto">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600"></div>
        <div className="p-6 pb-4 flex items-center justify-between border-b border-zinc-800/50 bg-zinc-900/80 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Globe2 className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-sm font-black text-white italic uppercase tracking-tight">Hubungan Internasional</h3>
              <p className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider">{targetCountry} — {relationsData.length} Negara</p>
            </div>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-200 transition-colors p-2 hover:bg-zinc-800/60 rounded-xl border border-transparent hover:border-zinc-700/50 cursor-pointer pointer-events-auto">
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-3 border-b border-zinc-800/30 bg-zinc-950/40 grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">Rata-rata</span>
            <span className="text-lg font-black text-white italic">{stats.avg.toFixed(2)}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">Sekutu</span>
            <span className="text-lg font-black text-emerald-400 italic">{stats.allies}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-black text-yellow-600 uppercase tracking-widest">Netral</span>
            <span className="text-lg font-black text-yellow-400 italic">{stats.neutral}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[9px] font-black text-red-600 uppercase tracking-widest">Hostile</span>
            <span className="text-lg font-black text-red-400 italic">{stats.hostile}</span>
          </div>
        </div>

        <div className="px-6 py-3 border-b border-zinc-800/30 bg-zinc-900/50 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-600" />
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Cari negara..." className="w-full bg-zinc-800/60 border border-zinc-700/30 rounded-xl py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 focus:ring-1 focus:ring-blue-500/20 transition-all" />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {continents.map(c => (
              <button key={c} onClick={() => setContinentFilter(c as string)} className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all border cursor-pointer ${continentFilter === c ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-zinc-800/40 text-zinc-500 border-zinc-700/30 hover:text-zinc-300 hover:border-zinc-600/50'}`}>
                {c}
              </button>
            ))}
            <div className="flex-1" />
            <button onClick={cycleSortMode} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800/40 text-zinc-500 border border-zinc-700/30 text-[10px] font-black uppercase tracking-wider hover:text-zinc-300 hover:border-zinc-600/50 transition-all cursor-pointer whitespace-nowrap">
              <ArrowUpDown size={11} />
              {sortLabels[sortMode]}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
          {isLoading ? (
            <div className="h-64 flex flex-col items-center justify-center gap-4 text-zinc-500">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
              <p className="text-sm font-medium">Memuat Data Hubungan...</p>
            </div>
          ) : filteredRelations.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
              <div className="w-14 h-14 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center">
                <Users className="h-7 w-7 text-zinc-600" />
              </div>
              <p className="text-sm font-black text-zinc-400 uppercase tracking-widest">Tidak Ditemukan</p>
              <p className="text-xs text-zinc-600">Tidak ada negara yang cocok dengan pencarian.</p>
            </div>
          ) : (
            <>
              {filteredRelations.slice(0, displayLimit).map((r: any, idx: number) => {
                const cc = continentColors[r.continent] || continentColors["Global"];
                const scoreBarWidth = Math.max(5, r.relation);
                const scoreColor = r.relation >= 70 ? 'from-emerald-600 to-emerald-500' :
                                   r.relation >= 50 ? 'from-yellow-600 to-yellow-500' :
                                   r.relation >= 25 ? 'from-red-500 to-red-400' : 'from-red-700 to-red-600';

                return (
                  <div 
                    key={`${r.name}-${r.id}-${idx}`} 
                    className="bg-zinc-800/30 hover:bg-zinc-800/50 border border-zinc-700/20 hover:border-zinc-700/40 rounded-xl px-4 py-3 flex items-center gap-4 transition-all group"
                  >
                    {/* Rank Number */}
                    <div className="text-[10px] font-black text-zinc-600 w-6 text-center shrink-0">
                      {idx + 1}
                    </div>

                    {/* Country Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-[13px] font-black text-zinc-200 uppercase tracking-tight truncate group-hover:text-white transition-colors">
                          {r.displayName}
                        </p>
                        <span className={`px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest ${cc.bg} ${cc.text} border ${cc.border} shrink-0`}>
                          {r.continent}
                        </span>
                      </div>
                      {/* Score Bar */}
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${scoreColor} rounded-full transition-all duration-500`}
                            style={{ width: `${scoreBarWidth}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Score Badge */}
                    <div className="flex flex-col items-end shrink-0 min-w-[70px]">
                      <div className="flex items-center gap-1.5">
                        {r.delta !== 0 && (
                          <span className={`text-[10px] font-black italic flex items-center ${r.delta > 0 ? 'text-emerald-400' : 'text-rose-500'}`}>
                            {r.delta > 0 ? '+' : ''}{(r.delta / 100).toFixed(2)}%
                          </span>
                        )}
                        <span className={`text-sm font-black italic ${r.meta.color}`}>
                          {r.relation.toFixed(2)}
                        </span>
                      </div>
                      <span className={`text-[8px] font-black uppercase tracking-widest ${r.meta.color} opacity-70`}>
                        {r.meta.label}
                      </span>
                    </div>
                  </div>
                );
              })}

              {/* Load More Button */}
              {displayLimit < filteredRelations.length && (
                <button
                  onClick={() => setDisplayLimit(prev => prev + 30)}
                  className="w-full py-3 mt-2 bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all active:scale-[0.98] cursor-pointer"
                >
                  Tampilkan {Math.min(30, filteredRelations.length - displayLimit)} Negara Lainnya...
                </button>
              )}
            </>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="p-4 pt-3 border-t border-zinc-800/60 bg-zinc-900/80 backdrop-blur-md z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
              Menampilkan {filteredRelations.length} dari {relationsData.length} negara
            </span>
          </div>
          <button 
            onClick={onClose}
            className="w-full py-3.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-black rounded-xl transition-all border border-zinc-700/50 active:scale-[0.98] cursor-pointer shadow-lg text-xs uppercase tracking-[0.2em]"
          >
            Kembali ke Diplomasi
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(HubunganInternasional, (prev, next) => {
  return prev.isOpen === next.isOpen && prev.targetCountry === next.targetCountry;
});
