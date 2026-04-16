"use client"

import { useState, useEffect } from "react";
import { countries } from "@/app/database/data/negara/benua/index";

export function useGamePath(path: string[]) {
  let initialMenu = "Peta Taktis";
  const category = path[0];
  const subMenu = path[1];

  const countryByPath = countries.find(c => c.name_id.replace(/ /g, '_').toLowerCase() === category?.toLowerCase());
  if (countryByPath) {
    const tab = subMenu || "info_strategis";
    const subTab = path[2];
    const sector = path[3];
    const cardId = path[4];
    
    if (subTab === "detail_lengkap") {
      // Standardize tab to 'info_strategis' for detailed views to avoid redundant URL segments
      const validSector = (sector && sector !== "info_strategis") ? sector : "produksi";
      initialMenu = `CountryModal:${countryByPath.name_id}:${subMenu || "info_strategis"}:${subTab}:${validSector}${cardId ? `:${cardId}` : ""}`;
    } else if (subTab) {
      initialMenu = `CountryModal:${countryByPath.name_id}:${tab}:${subTab}`;
    } else {
      initialMenu = `CountryModal:${countryByPath.name_id}:${tab}`;
    }
  } else if (category === 'ekonomi') {
    if (subMenu === 'perdagangan') {
      const s3 = path[2]; // Berfungsi sebagai Negara (Format Baru) atau Tab (Format Lama)
      const s4 = path[3]; // Berfungsi sebagai Tab (Format Baru)
      
      if (s3 && s4) {
        const country = decodeURIComponent(s3).replace(/_/g, ' ');
        initialMenu = `Menu:Perdagangan:${s4}:${country}`;
      } else if (s3) {
        // Fallback untuk backward compatibility atau navigasi parsial
        if (s3 === 'histori' || s3 === 'berita') initialMenu = `Menu:Perdagangan:${s3}`;
        else {
          const country = decodeURIComponent(s3).replace(/_/g, ' ');
          initialMenu = `Menu:Perdagangan:impor:${country}`;
        }
      } else {
        initialMenu = "Menu:Perdagangan:impor:Amerika Serikat";
      }
    }
    else if (subMenu === 'pajak') initialMenu = "Menu:Pajak";
    else if (subMenu === 'hutang') initialMenu = "Menu:Hutang";
    else if (subMenu === 'pemasukkan-pengeluaran') initialMenu = "Menu:Budget";
    else if (subMenu === 'harga') initialMenu = "Menu:Harga";
    else initialMenu = "Ekonomi";
  } else if (category === 'pembangunan') {
    if (subMenu === 'produksi') initialMenu = "Menu:Produksi";
    else if (subMenu === 'produksi-militer') initialMenu = "Menu:ProduksiMiliter";
    else if (subMenu === 'tempat-umum') initialMenu = "Menu:TempatUmum";
    else initialMenu = "Pembangunan";
  } else if (category === 'pertahanan') {
    if (subMenu === 'komando-pertahanan') {
      const detail = path[2];
      const target = path[3];
      if (detail === 'misi-serangan') {
        if (target) initialMenu = `Komando Pertahanan:Misi Serangan:${target}`;
        else initialMenu = "Komando Pertahanan:Misi Serangan";
      }
      else if (detail === 'program_nuklir') {
        initialMenu = "Komando Pertahanan:Program Nuklir";
      }
      else initialMenu = "Komando Pertahanan";
    }
    else if (subMenu === 'intelijen') initialMenu = "Menu:Intelijen";
    else if (subMenu === 'armada-militer') {
      const detail = path[2];
      if (detail === 'analisis-kekuatan') initialMenu = "Menu:ArmadaMiliter:AnalisisKekuatan";
      else initialMenu = "Menu:ArmadaMiliter";
    }
    else if (subMenu === 'armada-polisi') initialMenu = "Menu:ArmadaPolisi";
    else if (subMenu === 'manajemen-pertahanan') initialMenu = "Menu:ManajemenPertahanan";
    else initialMenu = "Pertahanan";
  } else if (category === 'geopolitik') {
    if (subMenu === 'PBB') {
      const pbbTab = path[2];
      if (pbbTab === 'pemungutan_suara') initialMenu = "Menu:PBB:pemungutan_suara";
      else if (pbbTab === 'dewan_keamanan') initialMenu = "Menu:PBB:dewan_keamanan";
      else if (pbbTab === 'suara_PBB') initialMenu = "Menu:PBB:suara_PBB";
      else initialMenu = "Menu:PBB";
    }
    else if (subMenu === 'organisasi-internasional') {
      const detail = path[2];
      if (detail && detail.startsWith('anggota_')) {
        initialMenu = `Menu:OrganisasiInternasional:${detail}`;
      } else {
        initialMenu = "Menu:OrganisasiInternasional";
      }
    }
    else if (subMenu === 'diplomasi') {
      const detail = path[2];
      if (detail) initialMenu = `Menu:Diplomasi:${detail}`;
      else initialMenu = "Menu:Diplomasi";
    }
    else initialMenu = "Geopolitik";
  } else if (category === 'kementrian') {
    if (subMenu === 'kementrian-dashboard') initialMenu = "Dashboard:Kementerian";
    else initialMenu = "Kementerian";
  } else if (category === 'kepuasan') {
    if (subMenu === 'dashboard') initialMenu = "Dashboard:Kepuasan";
    else if (subMenu === 'naikkan') initialMenu = "Action:NaikkanKepuasan";
    else initialMenu = "Kepuasan";
  } else if (category === 'berita_internasional') {
    initialMenu = "Menu:Berita";
  } else if (category === 'berita') {
    // Legacy redirect to new URL
    initialMenu = "Menu:Berita";
    if (typeof window !== "undefined") {
      window.history.replaceState(null, '', "/game/berita_internasional");
    }
  } else if (category === 'inbox') {
    const filter = path[1] || "semua";
    const filterMap: Record<string, string> = {
      "semua": "all",
      "keuangan": "finance",
      "perdagangan": "trade",
      "kedutaan": "embassy",
      "pakta": "pact",
      "aliansi": "alliance"
    };
    initialMenu = `Menu:Inbox:${filterMap[filter] || "all"}`;
  } else if (category === 'kependudukan') {
    initialMenu = "Dashboard:Populasi";
  } else if (category === 'riset') {
    if (subMenu) {
      // Map 'produksi industri' URL to 'Produksi_Industri' state
      const detail = decodeURIComponent(subMenu).replace(/ /g, '_');
      initialMenu = `Menu:Riset:${detail}`;
    } else {
      initialMenu = "Menu:Riset";
    }

  } else if (category === 'agama') {

    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    
    if (subMenu && subMenu.endsWith("_effects")) {
      const religion = capitalize(subMenu.replace("_effects", ""));
      const effectType = path[2]; // e.g. "islam_plus" or "islam_minus"
      if (effectType) {
        initialMenu = `Menu:Agama:${religion}:${effectType}`;
      } else {
        initialMenu = `Menu:Agama:${religion}`;
      }
    } else {
      initialMenu = "Menu:Agama";
    }
  } else if (category === 'misi-taktis') {
    const target = path[1];
    const detail = path[2];
    if (target) {
       if (detail === 'pertempuran') initialMenu = `Komando Pertahanan:Pertempuran:${target}`;
       else initialMenu = `Komando Pertahanan:PerbandinganMisi:${target}`;
    }
    else initialMenu = "Komando Pertahanan:PerbandinganMisi";
  } else if (category === 'ideologi') {
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    if (subMenu && subMenu.endsWith("_effects")) {
      const ideology = capitalize(subMenu.replace("_effects", ""));
      const effectType = path[2]; 
      if (effectType) {
        initialMenu = `Menu:Ideologi:${ideology}:${effectType}`;
      } else {
        initialMenu = `Menu:Ideologi:${ideology}`;
      }
    } else {
      initialMenu = "Menu:Ideologi";
    }
  } else if (category === 'produksi_konsumsi') {
    if (subMenu === 'grid-nasional') initialMenu = "Menu:Kelistrikan";
    else if (subMenu === 'perminyakan') initialMenu = "Menu:Perminyakan";
    else if (subMenu === 'uranium') initialMenu = "Menu:Uranium";
    else initialMenu = "ProduksiKonsumsi";
  }

  const [activeMenu, setActiveMenu] = useState<string>(initialMenu);

  // Sync state with URL path changes (important for back/forward and direct URL access)
  useEffect(() => {
    setActiveMenu(initialMenu);
  }, [path.join('/')]);

  useEffect(() => {
    const menuToPath: Record<string, string> = {
      "Ekonomi": "/game/ekonomi",
      "Menu:Pajak": "/game/ekonomi/pajak",
      "Menu:Hutang": "/game/ekonomi/hutang",
      "Menu:Budget": "/game/ekonomi/pemasukkan-pengeluaran",
      "Menu:Harga": "/game/ekonomi/harga",
      "Pembangunan": "/game/pembangunan",
      "Menu:Produksi": "/game/pembangunan/produksi",
      "Menu:ProduksiMiliter": "/game/pembangunan/produksi-militer",
      "Menu:TempatUmum": "/game/pembangunan/tempat-umum",
      "Pertahanan": "/game/pertahanan",
      "Komando Pertahanan": "/game/pertahanan/komando-pertahanan",
      "Komando Pertahanan:Program Nuklir": "/game/pertahanan/komando-pertahanan/program_nuklir",
      "Komando Pertahanan:Misi Serangan": "/game/pertahanan/komando-pertahanan/misi-serangan",
      "Menu:Intelijen": "/game/pertahanan/intelijen",
      "Menu:ArmadaMiliter": "/game/pertahanan/armada-militer",
      "Menu:ArmadaMiliter:AnalisisKekuatan": "/game/pertahanan/armada-militer/analisis-kekuatan",
      "Menu:ArmadaPolisi": "/game/pertahanan/armada-polisi",
      "Menu:ManajemenPertahanan": "/game/pertahanan/manajemen-pertahanan",
      "Menu:PBB": "/game/geopolitik/PBB",
      "Menu:PBB:pemungutan_suara": "/game/geopolitik/PBB/pemungutan_suara",
      "Menu:PBB:dewan_keamanan": "/game/geopolitik/PBB/dewan_keamanan",
      "Menu:PBB:suara_PBB": "/game/geopolitik/PBB/suara_PBB",
      "Menu:OrganisasiInternasional": "/game/geopolitik/organisasi-internasional",
      "Menu:TingkatHubungan": "/game/geopolitik/tingkat-hubungan",
      "Menu:Bantuan": "/game/geopolitik/bantuan",
      "Menu:Diplomasi": "/game/geopolitik/diplomasi",
      "Geopolitik": "/game/geopolitik",
      "Kementerian": "/game/kementrian",
      "Dashboard:Kementerian": "/game/kementrian/kementrian-dashboard",
      "Menu:Berita": "/game/berita_internasional",
      "Menu:Inbox": "/game/inbox/semua",
      "Menu:Inbox:all": "/game/inbox/semua",
      "Menu:Inbox:finance": "/game/inbox/keuangan",
      "Menu:Inbox:trade": "/game/inbox/perdagangan",
      "Menu:Inbox:embassy": "/game/inbox/kedutaan",
      "Menu:Inbox:pact": "/game/inbox/pakta",
      "Menu:Inbox:alliance": "/game/inbox/aliansi",
      "Menu:Riset": "/game/riset",
      "Kepuasan": "/game/kepuasan",

      "Dashboard:Kepuasan": "/game/kepuasan/statistik_kepuasan",
      "Action:NaikkanKepuasan": "/game/kepuasan/naikkan",
      "Dashboard:Populasi": "/game/kependudukan",
      "Dashboard:Budget": "/game/anggaran/dashboard",
      "Menu:Agama": "/game/agama",
      "Menu:Ideologi": "/game/ideologi",
      "ProduksiKonsumsi": "/game/produksi_konsumsi",
      "Menu:Kelistrikan": "/game/produksi_konsumsi/grid-nasional",
      "Menu:Perminyakan": "/game/produksi_konsumsi/perminyakan",
      "Menu:Uranium": "/game/produksi_konsumsi/uranium",
      "Komando Pertahanan:PerbandinganMisi": "/game/misi-taktis"
    };

    let targetPath = menuToPath[activeMenu];
    
    // Dynamic path handling for misi-taktis (Perbandingan and Pertempuran)
    if (!targetPath && activeMenu.startsWith("Komando Pertahanan:PerbandinganMisi:")) {
      const target = activeMenu.split(":")[2];
      targetPath = `/game/misi-taktis/${target}`;
    }
    if (!targetPath && activeMenu.startsWith("Komando Pertahanan:Pertempuran:")) {
      const target = activeMenu.split(":")[2];
      targetPath = `/game/misi-taktis/${target}/pertempuran`;
    }

    // Dynamic path handling for Targeted Misi Serangan
    if (!targetPath && activeMenu.startsWith("Komando Pertahanan:Misi Serangan:")) {
      const target = activeMenu.split(":")[2];
      targetPath = `/game/pertahanan/komando-pertahanan/misi-serangan/${target}`;
    }


    // Dynamic path handling for Perdagangan (Uniform for all tabs)
    if (!targetPath && activeMenu.startsWith("Menu:Perdagangan")) {
      const parts = activeMenu.split(":");
      // Format: Menu:Perdagangan:[tab]:[negara]
      const tab = parts[2] || "impor";
      const countryRaw = parts[3] || "Amerika Serikat";
      
      const country = countryRaw.replace(/ /g, '_');
      
      targetPath = `/game/ekonomi/perdagangan/${country}/${tab}`;
    }

    // Dynamic path handling for Diplomasi details
    if (!targetPath && activeMenu.startsWith("Menu:Diplomasi:")) {
      const detail = activeMenu.split(":")[2];
      targetPath = `/game/geopolitik/diplomasi/${detail}`;
    }

    // Dynamic path handling for Organisasi Internasional details
    if (!targetPath && activeMenu.startsWith("Menu:OrganisasiInternasional")) {
      const parts = activeMenu.split(":");
      const detail = parts[2]; // e.g., anggota_imf
      if (detail) {
        targetPath = `/game/geopolitik/organisasi-internasional/${detail}`;
      } else {
        targetPath = "/game/geopolitik/organisasi-internasional";
      }
    }

    // Dynamic path handling for Religion details
    if (!targetPath && activeMenu.startsWith("Menu:Agama:")) {
      const parts = activeMenu.split(":");
      const religion = parts[2];
      const effectType = parts[3];
      targetPath = `/game/agama/${religion.toLowerCase()}_effects`;
      if (effectType) {
        targetPath += `/${effectType.toLowerCase()}`;
      }
    }
    
    // Dynamic path handling for Ideology details
    if (!targetPath && activeMenu.startsWith("Menu:Ideologi:")) {
      const parts = activeMenu.split(":");
      const ideology = parts[2];
      const effectType = parts[3];
      targetPath = `/game/ideologi/${ideology.toLowerCase()}_effects`;
      if (effectType) {
        targetPath += `/${effectType.toLowerCase()}`;
      }
    }
    
    // Dynamic path handling for Riset details
    if (!targetPath && activeMenu.startsWith("Menu:Riset:")) {
      const parts = activeMenu.split(":");
      const detail = parts[2];
      // Keep underscore for clean URLs as requested
      targetPath = `/game/riset/${detail}`;
    }

    
    // Dynamic path handling for Country Modals
    if (!targetPath && activeMenu.startsWith("CountryModal:")) {
      const parts = activeMenu.split(":");
      const countryId = parts[1];
      const tab = parts[2] || "info_strategis";
      const subTab = parts[3];
      const sector = parts[4];
      const cardId = parts[5];
      
      // Clean target path base
      targetPath = `/game/${countryId.replace(/ /g, '_')}/${tab}`;
      
      if (subTab) {
        targetPath += `/${subTab}`;
        
        // If we are in detail_lengkap, sector and cardId follow
        if (subTab === "detail_lengkap") {
          // Avoid redundant sector if it's the same as tab (common for deep-links)
          if (sector && sector !== tab) {
            targetPath += `/${sector}`;
          } else if (!sector) {
            targetPath += `/produksi`; // Default sector
          }
          
          if (cardId) {
            targetPath += `/${cardId.replace(/^\d+_/, '')}`;
          }
        }
      }
    }


    targetPath = targetPath || "/game";
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  }, [activeMenu]);

  // Global Event Listeners for Game-wide triggers (like map markers)
  useEffect(() => {
    const handleHalamanMisi = (e: any) => {
      setActiveMenu(`Komando Pertahanan:PerbandinganMisi:${e.detail.target}:${e.detail.missionId}`);
    };

    window.addEventListener("halaman_misi_triggered", handleHalamanMisi);

    return () => {
      window.removeEventListener("halaman_misi_triggered", handleHalamanMisi);
    };
  }, []);

  return { activeMenu, setActiveMenu };
}
