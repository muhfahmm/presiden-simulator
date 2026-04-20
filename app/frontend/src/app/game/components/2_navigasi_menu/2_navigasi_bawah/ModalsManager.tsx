"use client"

// Ekonomi Modals
import PerdaganganModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/1-perdagangan/PerdaganganModal";
import PajakModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/2-pajak/PajakModal";
import HutangModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/3-hutang/HutangModal";
import PemasukkanPengeluaranModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/4-pemasukkanpengeluaran/PemasukkanPengeluaranModal";
import HargaModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/2_ekonomi/8-pasar-domestik/HargaModal";

// Other Modals
import ProduksiHubV3 from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/1-produksi/ProduksiModal";
import ProduksiMiliterModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/2-produksi-militer/ProduksiMiliterModal";
import { KelistrikanModal, PerminyakanModal, UraniumModal } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/9_produksi_konsumsi";
import TempatUmumModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/3-tempat-umum/TempatUmumModal";
import PertahananModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/1_komando_pertahanan/PertahananModal";
import IntelijenModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/2_intelijen/IntelijenModal";
import ArmadaMiliterModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/3_armada_militer/ArmadaMiliterModal";
import ArmadaPolisiModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/4_armada_polisi/ArmadaPolisiModal";
import ManajemenPertahananModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/4_pertahanan/5_manajemen_pertahanan/ManajemenPertahananModal";
import PBBModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/1_PBB";
import OrgIntlModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/2_organisasi_internasional/OrgIntlModal";
import TingkatHubunganModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/3_tingkat_hubungan/TingkatHubunganModal";
import BantuanModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/4_bantuan/BantuanModal";
import DiplomasiModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/5_diplomasi/DiplomasiModal";
import KedutaanBesarModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/6_kedutaan_besar/KedutaanBesarModal";
import KementerianModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/7_kementrian/KementerianModal";
import AgamaModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/1_agama/AgamaModal";
import IdeologiModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/6_sosial_budaya/2_ideologi/IdeologiModal";
import BeritaModal from "@/app/game/components/sidemenu/1_berita/BeritaModal";
import InboxModal from "@/app/game/components/sidemenu/2_kotak_masuk/InboxModal";
import RisetModal from "@/app/game/components/sidemenu/3_riset_dan_penelitian/RisetModal";

import KepuasanModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/KepuasanModal";
import PopulasiModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/8_populasi/PopulasiModal";
import AcaraModal from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/1_kepuasan/acara/AcaraModal";
import NewMessageToast from "@/app/game/components/sidemenu/2_kotak_masuk/NewMessageToast";
import RelationAlertToast from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/5_geopolitik/3_tingkat_hubungan/RelationAlertToast";
import BudgetDetailModal from "@/app/game/components/1_navbar/3_kas_negara/BudgetDetailModal";
import { buildingStorage } from "@/app/game/components/2_navigasi_menu/2_navigasi_bawah/3_pembangunan/buildingStorage";

// Diplomatic Sub-Modals
import KontrakPenelitianModal from "@/app/game/components/modals/2_diplomasi_hubungan/5_kontrak_penelitian/KontrakPenelitianModal";
import KirimPasukanModal from "@/app/game/components/modals/2_diplomasi_hubungan/6_kirim_pasukan/KirimPasukanModal";
import { relationStorage } from "@/app/game/components/modals/2_diplomasi_hubungan/1_kedutaan/logic/relationStorage";
import { countries } from "@/app/database/data/negara/benua/index";

interface ModalsManagerProps {
  isMounted: boolean;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
  countryData: any;
}

export default function ModalsManager({ isMounted, activeMenu, setActiveMenu, countryData }: ModalsManagerProps) {
  if (!isMounted) return null;

  // URL Parsing for Country-specific Modals
  // Format: CountryModal:CountryID:TabSlug:SubTabSlug
  let targetCountryID = "";
  let activeSubTab = "";

  if (activeMenu.startsWith("CountryModal:")) {
    const parts = activeMenu.split(":");
    targetCountryID = parts[1] || "";
    activeSubTab = parts[3] || "";
  }

  // Find the actual country object for labels
  const targetCountryData = countries.find(c =>
    c.name_id.toLowerCase() === targetCountryID.toLowerCase() ||
    c.name_en.toLowerCase() === targetCountryID.toLowerCase()
  );

  const userCountryID = countryData?.name_id || "";
  const relationScore = 50; // Fallback to 50

  const metadata = relationStorage.getRelationMetadata(relationScore);
  const relationLabel = metadata.labelFull;
  const relationColor = metadata.color;


  return (
    <>
      <PerdaganganModal
        isOpen={activeMenu.startsWith("Menu:Perdagangan")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onClose={() => setActiveMenu("Ekonomi")}
      />
      <PajakModal
        isOpen={activeMenu === "Menu:Pajak"}
        onClose={() => setActiveMenu("Ekonomi")}
      />
      <HutangModal
        isOpen={activeMenu === "Menu:Hutang"}
        onClose={() => setActiveMenu("Ekonomi")}
      />
      <PemasukkanPengeluaranModal
        isOpen={activeMenu === "Menu:Budget"}
        onClose={() => setActiveMenu("Ekonomi")}
      />

      <HargaModal
        isOpen={activeMenu === "Menu:Harga"}
        onClose={() => setActiveMenu("Ekonomi")}
      />
      <ProduksiHubV3
        isOpen={activeMenu === "Menu:Produksi"}
        onClose={() => setActiveMenu("Pembangunan")}
      />
      <ProduksiMiliterModal
        isOpen={activeMenu === "Menu:ProduksiMiliter"}
        onClose={() => setActiveMenu("Pembangunan")}
      />
      <KelistrikanModal
        isOpen={activeMenu === "Menu:Kelistrikan"}
        onClose={() => setActiveMenu("ProduksiKonsumsi")}
        setActiveMenu={setActiveMenu}
      />
      <PerminyakanModal
        isOpen={activeMenu === "Menu:Perminyakan"}
        onClose={() => setActiveMenu("ProduksiKonsumsi")}
      />
      <UraniumModal
        isOpen={activeMenu === "Menu:Uranium"}
        onClose={() => setActiveMenu("ProduksiKonsumsi")}
      />
      <TempatUmumModal
        isOpen={activeMenu === "Menu:TempatUmum"}
        onClose={() => setActiveMenu("Pembangunan")}
      />
      <AcaraModal
        isOpen={activeMenu === "Action:NaikkanKepuasan"}
        onClose={() => setActiveMenu("Kepuasan")}
      />
      <PertahananModal
        isOpen={activeMenu.startsWith("Komando Pertahanan")}
        onClose={() => setActiveMenu("Pertahanan")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        preselectedTarget={activeMenu.startsWith("Komando Pertahanan:Misi Serangan:") ? activeMenu.split(":")[2] : undefined}
        data={countryData}
      />
      <ArmadaMiliterModal
        isOpen={activeMenu.startsWith("Menu:ArmadaMiliter")}
        onClose={() => setActiveMenu("Pertahanan")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        data={countryData}
      />
      <ArmadaPolisiModal
        isOpen={activeMenu === "Menu:ArmadaPolisi"}
        onClose={() => setActiveMenu("Pertahanan")}
        data={countryData}
      />
      <ManajemenPertahananModal
        isOpen={activeMenu === "Menu:ManajemenPertahanan"}
        onClose={() => setActiveMenu("Pertahanan")}
      />
      <IntelijenModal
        isOpen={activeMenu === "Menu:Intelijen"}
        onClose={() => setActiveMenu("Pertahanan")}
        data={countryData}
      />
      <PBBModal
        isOpen={activeMenu.startsWith("Menu:PBB")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onClose={() => setActiveMenu("Geopolitik")}
      />
      <OrgIntlModal
        isOpen={activeMenu.startsWith("Menu:OrganisasiInternasional")}
        onClose={() => setActiveMenu("Geopolitik")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <TingkatHubunganModal
        isOpen={activeMenu === "Menu:TingkatHubungan"}
        onClose={() => setActiveMenu("Geopolitik")}
      />
      <BantuanModal
        isOpen={activeMenu === "Menu:Bantuan"}
        onClose={() => setActiveMenu("Geopolitik")}
      />
      <DiplomasiModal
        isOpen={activeMenu.startsWith("Menu:Diplomasi")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onClose={() => setActiveMenu("Geopolitik")}
      />
      <KedutaanBesarModal
        isOpen={activeMenu === "Menu:KedutaanBesar"}
        setActiveMenu={setActiveMenu}
        onClose={() => setActiveMenu("Geopolitik")}
      />
      <KementerianModal
        isOpen={activeMenu === "Dashboard:Kementerian"}
        onClose={() => setActiveMenu("Kementerian")}
        countryData={countryData}
      />
      <AgamaModal
        isOpen={activeMenu === "Menu:Agama" || activeMenu.startsWith("Menu:Agama:")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onClose={() => setActiveMenu("Sosial & Budaya")}
        countryData={countryData}
      />
      <IdeologiModal
        isOpen={activeMenu === "Menu:Ideologi" || activeMenu.startsWith("Menu:Ideologi:")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onClose={() => setActiveMenu("Sosial & Budaya")}
        countryData={countryData}
      />
      <BeritaModal
        isOpen={activeMenu.startsWith("Menu:Berita")}
        onClose={() => setActiveMenu("Peta Taktis")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <InboxModal
        isOpen={activeMenu.startsWith("Menu:Inbox")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        onClose={() => setActiveMenu("Peta Taktis")}
      />
      <RisetModal
        isOpen={activeMenu.startsWith("Menu:Riset")}
        onClose={() => setActiveMenu("Peta Taktis")}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />


      <KepuasanModal
        isOpen={activeMenu === "Dashboard:Kepuasan"}
        onClose={() => setActiveMenu("Kepuasan")}
      />
      <PopulasiModal
        isOpen={activeMenu === "Dashboard:Populasi"}
        onClose={() => setActiveMenu("Populasi")}
      />
      <BudgetDetailModal
        isOpen={activeMenu === "Dashboard:Budget"}
        onClose={() => setActiveMenu("Ekonomi")}
        countryData={countryData}
        buildingDeltas={buildingStorage.getData().buildingDeltas || {}}
      />
      <NewMessageToast />
      <RelationAlertToast />

      {/* Pakta, Aliansi, & Dagang now in StrategyModal */}
      <KontrakPenelitianModal
        isOpen={activeSubTab === 'kontrak_penelitian'}
        onClose={() => setActiveMenu(`CountryModal:${targetCountryID}:diplomasi_hubungan`)}
      />
      <KirimPasukanModal
        isOpen={activeSubTab === 'kirim_pasukan'}
        onClose={() => setActiveMenu(`CountryModal:${targetCountryID}:diplomasi_hubungan`)}
      />
    </>
  );
}

