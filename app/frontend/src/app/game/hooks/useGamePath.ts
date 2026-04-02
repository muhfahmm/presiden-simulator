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
    if (subTab) initialMenu = `CountryModal:${countryByPath.name_id}:${tab}:${subTab}`;
    else initialMenu = `CountryModal:${countryByPath.name_id}:${tab}`;
  } else if (category === 'ekonomi') {
    if (subMenu === 'perdagangan') {
      const detail = path[2];
      if (detail) initialMenu = `Menu:Perdagangan:${detail}`;
      else initialMenu = "Menu:Perdagangan";
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
      else initialMenu = "Komando Pertahanan";
    }
    else if (subMenu === 'intelijen') initialMenu = "Menu:Intelijen";
    else if (subMenu === 'armada-militer') initialMenu = "Menu:ArmadaMiliter";
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
  } else if (category === 'berita') {
    initialMenu = "Menu:Berita";
  } else if (category === 'inbox') {
    initialMenu = "Menu:Inbox";
  } else if (category === 'kependudukan') {
    initialMenu = "Dashboard:Populasi";

  } else if (category === 'agama') {
    initialMenu = "Menu:Agama";
  } else if (category === 'misi-taktis') {
    const target = path[1];
    if (target) initialMenu = `Komando Pertahanan:PerbandinganMisi:${target}`;
    else initialMenu = "Komando Pertahanan:PerbandinganMisi";
  } else if (category === 'ideologi') {
    initialMenu = "Menu:Ideologi";
  }

  const [activeMenu, setActiveMenu] = useState<string>(initialMenu);

  // Sync state with URL path changes (important for back/forward and direct URL access)
  useEffect(() => {
    setActiveMenu(initialMenu);
  }, [path.join('/')]);

  useEffect(() => {
    const menuToPath: Record<string, string> = {
      "Ekonomi": "/game/ekonomi",
      "Menu:Perdagangan": "/game/ekonomi/perdagangan",
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
      "Komando Pertahanan:Misi Serangan": "/game/pertahanan/komando-pertahanan/misi-serangan",
      "Menu:Intelijen": "/game/pertahanan/intelijen",
      "Menu:ArmadaMiliter": "/game/pertahanan/armada-militer",
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
      "Menu:Berita": "/game/berita",
      "Menu:Inbox": "/game/inbox",
      "Kepuasan": "/game/kepuasan",
      "Dashboard:Kepuasan": "/game/kepuasan/dashboard",
      "Action:NaikkanKepuasan": "/game/kepuasan/naikkan",
      "Dashboard:Populasi": "/game/kependudukan",
      "Dashboard:Budget": "/game/anggaran/dashboard",
      "Menu:Agama": "/game/agama",
      "Menu:Ideologi": "/game/ideologi",
      "Komando Pertahanan:PerbandinganMisi": "/game/misi-taktis"
    };

    let targetPath = menuToPath[activeMenu];
    
    // Dynamic path handling for Perbandingan Misi
    if (!targetPath && activeMenu.startsWith("Komando Pertahanan:PerbandinganMisi:")) {
      const target = activeMenu.split(":")[2];
      targetPath = `/game/misi-taktis/${target}`;
    }

    // Dynamic path handling for Targeted Misi Serangan
    if (!targetPath && activeMenu.startsWith("Komando Pertahanan:Misi Serangan:")) {
      const target = activeMenu.split(":")[2];
      targetPath = `/game/pertahanan/komando-pertahanan/misi-serangan/${target}`;
    }


    // Dynamic path handling for Perdagangan details
    if (!targetPath && activeMenu.startsWith("Menu:Perdagangan:")) {
      const detail = activeMenu.split(":")[2];
      targetPath = `/game/ekonomi/perdagangan/${detail}`;
    }

    // Dynamic path handling for Diplomasi details
    if (!targetPath && activeMenu.startsWith("Menu:Diplomasi:")) {
      const detail = activeMenu.split(":")[2];
      targetPath = `/game/geopolitik/diplomasi/${detail}`;
    }

    // Dynamic path handling for Country Modals
    if (!targetPath && activeMenu.startsWith("CountryModal:")) {
      const parts = activeMenu.split(":");
      const countryId = parts[1];
      const tab = parts[2] || "info_strategis";
      const subTab = parts[3];
      // URL Slug: Replace spaces with underscores
      targetPath = `/game/${countryId.replace(/ /g, '_')}/${tab}`;
      if (subTab) targetPath += `/${subTab}`;
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
