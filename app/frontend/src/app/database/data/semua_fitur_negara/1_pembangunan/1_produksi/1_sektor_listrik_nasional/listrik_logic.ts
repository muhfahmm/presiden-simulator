import { SektorPertahanan, SektorArmadaMiliter, SektorMiliterStrategis, SektorArmadaKepolisian } from "../../../2_pertahanan";
import { SektorPabrikMiliter } from "../../2_produksi_militer";
import { SektorInfrastruktur } from "../../3_tempat_umum/1_infrastruktur";
import { 
  SektorManufaktur, 
  SektorPeternakan, 
  SektorAgrikultur, 
  SektorOlahanPangan, 
  SektorFarmasi,
  SektorEkstraksi
} from "../index";
import { PendidikanData, KesehatanData, HukumData, SektorKomersial, SektorHiburan } from "../../3_tempat_umum";
import { OlahragaData } from "../../3_tempat_umum/5_olahraga";
import { SektorListrik, KAPASITAS_LISTRIK_METADATA } from "./1_db_listrik";

export const KAPASITAS_LISTRIK = Object.fromEntries(
  Object.entries(KAPASITAS_LISTRIK_METADATA).map(([key, val]) => [val.dataKey, val.produksi])
) as Record<string, number>;

export function hitungTotalKapasitas(electricity: SektorListrik) {
  return (
    (electricity.pembangkit_listrik_tenaga_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_nuklir +
    (electricity.pembangkit_listrik_tenaga_air ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_air +
    (electricity.pembangkit_listrik_tenaga_surya ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_surya +
    (electricity.pembangkit_listrik_tenaga_uap ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_uap +
    (electricity.pembangkit_listrik_tenaga_gas ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_gas +
    (electricity.pembangkit_listrik_tenaga_angin ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_angin
  );
}

export function hitungOutputPLTN(electricity: SektorListrik) {
  return (electricity.pembangkit_listrik_tenaga_nuklir ?? 0) * KAPASITAS_LISTRIK.pembangkit_listrik_tenaga_nuklir;
}

// Helper to enforce minimum 1 MW per building as per user request
const withMin1MW = (rate: number) => Math.max(rate, 1);

// Konsumsi Ekstraksi (Mining) - Standardized @ 50 MW per unit as per user request
export const KONSUMSI_EKSTRAKSI = {
  aluminium: 50, emas: 50, bijih_besi: 50, batu_bara: 50, gas_alam: 50, garam: 50,
  litium: 50, minyak_bumi: 50, nikel: 50, logam_tanah_jarang: 50, tembaga: 50, uranium: 50
};

export function hitungKonsumsiEkstraksi(extraction: SektorEkstraksi) {
  return (
    (extraction.aluminium ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.aluminium) +
    (extraction.emas ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.emas) +
    (extraction.bijih_besi ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.bijih_besi) +
    (extraction.batu_bara ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.batu_bara) +
    (extraction.gas_alam ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.gas_alam) +
    (extraction.garam ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.garam) +
    (extraction.litium ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.litium) +
    (extraction.minyak_bumi ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.minyak_bumi) +
    (extraction.nikel ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.nikel) +
    (extraction.logam_tanah_jarang ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.logam_tanah_jarang) +
    (extraction.tembaga ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.tembaga) +
    (extraction.uranium ?? 0) * withMin1MW(KONSUMSI_EKSTRAKSI.uranium)
  );
}

// Konsumsi Produksi & Manufaktur
export const KONSUMSI_PRODUKSI = {
  semikonduktor: 50, mobil: 20, sepeda_motor: 15, smelter: 100, semen_beton: 30,
  kayu: 5, air_mineral: 2, gula: 10, roti: 2, farmasi: 10,
  pupuk: 20, pengolahan_daging: 5, mie_instan: 10
};

export function hitungKonsumsiProduksi(manufacturing: SektorManufaktur) {
  return (
    (manufacturing.semikonduktor ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.semikonduktor) +
    (manufacturing.mobil ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.mobil) +
    (manufacturing.sepeda_motor ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.sepeda_motor) +
    (manufacturing.smelter ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.smelter) +
    (manufacturing.semen_beton ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.semen_beton) +
    (manufacturing.kayu ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.kayu) +
    (manufacturing.pupuk ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.pupuk)
  );
}

export function hitungKonsumsiOlahanPangan(olahan: SektorOlahanPangan) {
  return (
    (olahan.air_mineral ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.air_mineral) +
    (olahan.gula ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.gula) +
    (olahan.roti ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.roti) +
    (olahan.pengolahan_daging ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.pengolahan_daging) +
    (olahan.mie_instan ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.mie_instan)
  );
}

export function hitungKonsumsiFarmasi(farmasi: SektorFarmasi) {
  return (farmasi.farmasi ?? 0) * withMin1MW(KONSUMSI_PRODUKSI.farmasi);
}

// Konsumsi Pangan (Tani & Ternak)
export const KONSUMSI_PANGAN = {
  ayam_unggas: 0.05, sapi_perah: 0.5, sapi_potong: 0.2, domba_kambing: 0.1,
  udang_kerang: 0.65, ikan: 0.5, padi: 0.2, gandum_jagung: 0.1,
  sayur_umbi: 0.15, kedelai: 0.1, kelapa_sawit: 1, kopi_teh_kakao: 0.2
};

export function hitungKonsumsiPangan(peternakan: SektorPeternakan, agrikultur: SektorAgrikultur) {
  let total = 0;
  if (peternakan) {
    total += Object.keys(peternakan).reduce((sum, key) => {
      const consumptionRate = withMin1MW((KONSUMSI_PANGAN as any)[key] ?? 0);
      return sum + ((peternakan as any)[key] ?? 0) * consumptionRate;
    }, 0);
  }
  if (agrikultur) {
    total += Object.keys(agrikultur).reduce((sum, key) => {
      const consumptionRate = withMin1MW((KONSUMSI_PANGAN as any)[key] ?? 0);
      return sum + ((agrikultur as any)[key] ?? 0) * consumptionRate;
    }, 0);
  }
  return total;
}

// Konsumsi Pertahanan (Defense)
export const KONSUMSI_PERTAHANAN = {
  penjara: 2, barak: 5, gudang_senjata: 2, hangar_tank: 5, akademi_militer: 10
};

export const KONSUMSI_STRATEGIC = {
  pusat_komando: 15, pangkalan_udara: 30, pangkalan_laut: 35,
  arms_factory: 40, program_luar_angkasa: 80
};

export const KONSUMSI_PABRIK_MILITER = {
  pabrik_drone_kamikaze: 5,
  pabrik_amunisi: 8,
  pabrik_kendaraan_tempur: 20,
  pabrik_senjata_berat: 25
};

export function hitungKonsumsiPertahanan(
  management: SektorPertahanan,
  fleet: SektorArmadaMiliter,
  strategis: SektorMiliterStrategis,
  police: SektorArmadaKepolisian,
  pabrik: SektorPabrikMiliter
) {
  const base = (
    (management.penjara ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.penjara) +
    (management.gudang_senjata ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.gudang_senjata) +
    (management.hangar_tank ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.hangar_tank) +
    (management.akademi_militer ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.akademi_militer) +
    (management.pusat_komando ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pusat_komando) +
    (management.pangkalan_udara ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pangkalan_udara) +
    (management.pangkalan_laut ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pangkalan_laut)
  );

  const fleetCons = (
    (fleet.barak ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.barak)
  );

  const securityCons = (
    (strategis.intelijen ?? 0) * withMin1MW(10)
  );

  const managementCons = (
    (management.pertahanan_siber ?? 0) * withMin1MW(5)
  );

  const policeCons = (
    (police.armada_polisi.patroli_lantas.mobil_patroli_interceptor ?? 0) * withMin1MW(0.1) +
    (police.armada_polisi.taktis_khusus.helikopter_polisi ?? 0) * withMin1MW(2)
  );

  const pabrikCons = (
    (pabrik.pabrik_drone_kamikaze ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_drone_kamikaze) +
    (pabrik.pabrik_amunisi ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_amunisi) +
    (pabrik.pabrik_kendaraan_tempur ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_kendaraan_tempur) +
    (pabrik.pabrik_senjata_berat ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_senjata_berat)
  );

  return base + fleetCons + securityCons + managementCons + policeCons + pabrikCons;
}

export function hitungKonsumsiBangunanMiliter(
  management: SektorPertahanan,
  barak: number,
  status_nuklir: boolean
) {
  return (
    (management.penjara ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.penjara) +
    (management.gudang_senjata ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.gudang_senjata) +
    (management.hangar_tank ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.hangar_tank) +
    (management.akademi_militer ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.akademi_militer) +
    (management.pusat_komando ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pusat_komando) +
    (management.pangkalan_udara ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pangkalan_udara) +
    (management.pangkalan_laut ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.pangkalan_laut) +
    (management.program_luar_angkasa ?? 0) * withMin1MW(KONSUMSI_STRATEGIC.program_luar_angkasa) +
    (management.pertahanan_siber ?? 0) * withMin1MW(5) +
    (barak ?? 0) * withMin1MW(KONSUMSI_PERTAHANAN.barak) +
    (status_nuklir ? withMin1MW(50) : 0)
  );
}

export function hitungKonsumsiPabrikMiliter(pabrik: SektorPabrikMiliter) {
  return (
    (pabrik.pabrik_drone_kamikaze ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_drone_kamikaze) +
    (pabrik.pabrik_amunisi ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_amunisi) +
    (pabrik.pabrik_kendaraan_tempur ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_kendaraan_tempur) +
    (pabrik.pabrik_senjata_berat ?? 0) * withMin1MW(KONSUMSI_PABRIK_MILITER.pabrik_senjata_berat)
  );
}

// Konsumsi Sosial
export const KONSUMSI_SOSIAL = {
  pendidikan: {
    prasekolah: 1, dasar: 2, menengah: 5, lanjutan: 8,
    universitas: 25, lembaga_pendidikan: 15, laboratorium: 30, observatorium: 10,
    pusat_penelitian: 45, pusat_pengembangan: 20
  },
  kesehatan: { rumah_sakit_besar: 100, rumah_sakit_kecil: 25, pusat_diagnostik: 15 },
  olahraga: { kolam_renang: 10, sirkuit_balap: 80, stadion: 150, stadion_internasional: 150, gym: 15, golf: 40, esports: 120, gokart: 25 },
  hukum: { akademi_polisi: 10, pos_polisi: 3, armada_mobil_polisi: 0.1, kejaksaan: 20, pengadilan: 20, pusat_bantuan_hukum: 5 },
  komersial: { mall: 50, hotel: 40, pusat_grosir_tekstil: 25 },
  hiburan: { bioskop: 15, teater: 12 }
};

export function hitungKonsumsiSosial(data: { pendidikan?: PendidikanData; kesehatan?: KesehatanData; hukum?: HukumData }) {
  const edu = data.pendidikan || {};
  const kesehatan = data.kesehatan || {};
  const hukum = data.hukum || {};

  const totalEdu = Object.keys(KONSUMSI_SOSIAL.pendidikan).reduce((total, key) =>
    total + ((edu as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.pendidikan as any)[key]), 0);

  const totalHealth = Object.keys(KONSUMSI_SOSIAL.kesehatan).reduce((total, key) =>
    total + ((kesehatan as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.kesehatan as any)[key]), 0);

  const totalLaw = Object.keys(KONSUMSI_SOSIAL.hukum).reduce((total, key) =>
    total + ((hukum as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.hukum as any)[key]), 0);

  return totalEdu + totalHealth + totalLaw;
}

export function hitungKonsumsiOlahraga(olahraga: OlahragaData) {
  if (!olahraga) return 0;
  return Object.keys(KONSUMSI_SOSIAL.olahraga).reduce((total, key) =>
    total + ((olahraga as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.olahraga as any)[key]), 0);
}

export function hitungKonsumsiKomersial(komersial?: SektorKomersial) {
  if (!komersial) return 0;
  return Object.keys(KONSUMSI_SOSIAL.komersial).reduce((total, key) =>
    total + ((komersial as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.komersial as any)[key]), 0);
}

export function hitungKonsumsiHiburan(hiburan?: SektorHiburan) {
  if (!hiburan) return 0;
  return Object.keys(KONSUMSI_SOSIAL.hiburan).reduce((total, key) =>
    total + ((hiburan as any)[key] ?? 0) * withMin1MW((KONSUMSI_SOSIAL.hiburan as any)[key]), 0);
}

// Konsumsi Transportasi
export const KONSUMSI_TRANSPORTASI = {
  jalur_sepeda: 0, jalan_raya: 3, terminal_bus: 5, stasiun_kereta_api: 15,
  kereta_bawah_tanah: 20, pelabuhan: 25, bandara: 30, helipad: 2
};

export function hitungKonsumsiTransportasi(infra: SektorInfrastruktur) {
  if (!infra) return 0;
  return (
    (infra.jalur_sepeda ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.jalur_sepeda) +
    (infra.kereta_bawah_tanah ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.kereta_bawah_tanah) +
    (infra.stasiun_kereta_api ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.stasiun_kereta_api) +
    (infra.jalan_raya ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.jalan_raya) +
    (infra.pelabuhan ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.pelabuhan) +
    (infra.bandara ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.bandara) +
    (infra.terminal_bus ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.terminal_bus) +
    (infra.helipad ?? 0) * withMin1MW(KONSUMSI_TRANSPORTASI.helipad)
  );
}

export function hitungTotalKonsumsiNasional(data: any) {
  return (
    hitungKonsumsiEkstraksi(data.sektor_ekstraksi) +
    hitungKonsumsiProduksi(data.sektor_manufaktur) +
    hitungKonsumsiOlahanPangan(data.sektor_olahan_pangan) +
    hitungKonsumsiFarmasi(data.sektor_farmasi) +
    hitungKonsumsiPangan(data.sektor_peternakan, data.sektor_agrikultur) +
    hitungKonsumsiPertahanan(data.sektor_pertahanan, data.armada_militer, data.militer_strategis, data.armada_kepolisian, data.pabrik_militer) +
    hitungKonsumsiSosial(data) +
    hitungKonsumsiOlahraga(data.sektor_olahraga) +
    hitungKonsumsiKomersial(data.sektor_komersial) +
    hitungKonsumsiHiburan(data.sektor_hiburan) +
    hitungKonsumsiTransportasi(data.infrastruktur)
  );
}
