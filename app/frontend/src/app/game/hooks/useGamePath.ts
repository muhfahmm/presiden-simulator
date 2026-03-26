"use client"

import { useState, useEffect } from "react";

export function useGamePath(path: string[]) {
  let initialMenu = "Peta Taktis";
  const category = path[0];
  const subMenu = path[1];

  if (category === 'ekonomi') {
    if (subMenu === 'perdagangan') initialMenu = "Menu:Perdagangan";
    else if (subMenu === 'pajak') initialMenu = "Menu:Pajak";
    else if (subMenu === 'hutang') initialMenu = "Menu:Hutang";
    else if (subMenu === 'pemasukkan-pengeluaran') initialMenu = "Menu:Budget";
    else if (subMenu === 'energi') initialMenu = "Menu:Energi";
    else if (subMenu === 'produksi-barang') initialMenu = "Menu:ProduksiBarang";
    else if (subMenu === 'minerals') initialMenu = "Menu:Minerals";
    else if (subMenu === 'harga') initialMenu = "Menu:Harga";
    else initialMenu = "Ekonomi";
  } else if (category === 'pembangunan') {
    if (subMenu === 'produksi') initialMenu = "Menu:Produksi";
    else if (subMenu === 'produksi-militer') initialMenu = "Menu:ProduksiMiliter";
    else if (subMenu === 'tempat-umum') initialMenu = "Menu:TempatUmum";
    else initialMenu = "Pembangunan";
  } else if (category === 'pertahanan') {
    if (subMenu === 'komando-pertahanan') initialMenu = "Komando Pertahanan";
    else if (subMenu === 'armada-militer') initialMenu = "Menu:ArmadaMiliter";
    else if (subMenu === 'armada-polisi') initialMenu = "Menu:ArmadaPolisi";
    else initialMenu = "Pertahanan";
  } else if (category === 'geopolitik') {
    if (subMenu === 'geopolitik-luar-negeri') initialMenu = "Geopolitik & Luar Negeri";
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
    if (subMenu === 'dashboard') initialMenu = "Dashboard:Populasi";
    else initialMenu = "Populasi";
  } else if (category === 'minerals') {
    initialMenu = "Menu:Minerals";
  }

  const [activeMenu, setActiveMenu] = useState<string>(initialMenu);

  useEffect(() => {
    const menuToPath: Record<string, string> = {
      "Ekonomi": "/game/ekonomi",
      "Menu:Perdagangan": "/game/ekonomi/perdagangan",
      "Menu:Pajak": "/game/ekonomi/pajak",
      "Menu:Hutang": "/game/ekonomi/hutang",
      "Menu:Budget": "/game/ekonomi/pemasukkan-pengeluaran",
      "Menu:Energi": "/game/ekonomi/energi",
      "Menu:ProduksiBarang": "/game/ekonomi/produksi-barang",
      "Menu:Minerals": "/game/ekonomi/minerals",
      "Menu:Harga": "/game/ekonomi/harga",
      "Pembangunan": "/game/pembangunan",
      "Menu:Produksi": "/game/pembangunan/produksi",
      "Menu:ProduksiMiliter": "/game/pembangunan/produksi-militer",
      "Menu:TempatUmum": "/game/pembangunan/tempat-umum",
      "Pertahanan": "/game/pertahanan",
      "Komando Pertahanan": "/game/pertahanan/komando-pertahanan",
      "Menu:ArmadaMiliter": "/game/pertahanan/armada-militer",
      "Menu:ArmadaPolisi": "/game/pertahanan/armada-polisi",
      "Geopolitik": "/game/geopolitik",
      "Geopolitik & Luar Negeri": "/game/geopolitik/geopolitik-luar-negeri",
      "Kementerian": "/game/kementrian",
      "Dashboard:Kementerian": "/game/kementrian/kementrian-dashboard",
      "Menu:Berita": "/game/berita",
      "Menu:Inbox": "/game/inbox",
      "Kepuasan": "/game/kepuasan",
      "Dashboard:Kepuasan": "/game/kepuasan/dashboard",
      "Action:NaikkanKepuasan": "/game/kepuasan/naikkan",
      "Populasi": "/game/kependudukan",
      "Dashboard:Populasi": "/game/kependudukan/dashboard"
    };

    const targetPath = menuToPath[activeMenu] || "/game";
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
  }, [activeMenu]);

  return { activeMenu, setActiveMenu };
}
