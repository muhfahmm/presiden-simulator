import { CountryData, SektorPertahanan, SektorArmadaMiliter, SektorMiliterStrategis, SektorArmadaKepolisian, SektorPabrikMiliter, SektorEkstraksi } from "../types/_index";
import { ExtractionData } from "../extraction/1_kualitas_ekstraksi";

// 1. Konsumsi Ekstraksi (Mining)
export const KONSUMSI_EKSTRAKSI = {
  aluminium: 30, emas: 10, bijih_besi: 15, batu_bara: 15, gas_alam: 20, garam: 5,
  litium: 25, minyak_bumi: 25, nikel: 20, logam_tanah_jarang: 35, tembaga: 15, uranium: 40
};

export function hitungKonsumsiEkstraksi(extraction: SektorEkstraksi) {
  return (
    (extraction.aluminium ?? 0) * KONSUMSI_EKSTRAKSI.aluminium +
    (extraction.emas ?? 0) * KONSUMSI_EKSTRAKSI.emas +
    (extraction.bijih_besi ?? 0) * KONSUMSI_EKSTRAKSI.bijih_besi +
    (extraction.batu_bara ?? 0) * KONSUMSI_EKSTRAKSI.batu_bara +
    (extraction.gas_alam ?? 0) * KONSUMSI_EKSTRAKSI.gas_alam +
    (extraction.garam ?? 0) * KONSUMSI_EKSTRAKSI.garam +
    (extraction.litium ?? 0) * KONSUMSI_EKSTRAKSI.litium +
    (extraction.minyak_bumi ?? 0) * KONSUMSI_EKSTRAKSI.minyak_bumi +
    (extraction.nikel ?? 0) * KONSUMSI_EKSTRAKSI.nikel +
    (extraction.logam_tanah_jarang ?? 0) * KONSUMSI_EKSTRAKSI.logam_tanah_jarang +
    (extraction.tembaga ?? 0) * KONSUMSI_EKSTRAKSI.tembaga +
    (extraction.uranium ?? 0) * KONSUMSI_EKSTRAKSI.uranium
  );
}

// 2. Konsumsi Produksi & Manufaktur
export const KONSUMSI_PRODUKSI = {
  semikonduktor: 50, mobil: 20, sepeda_motor: 15, smelter: 100, semen_beton: 30,
  kayu: 5, air_mineral: 2, gula: 10, roti: 2, farmasi: 10,
  pupuk: 20, pengolahan_daging: 5, mie_instan: 10
};

export function hitungKonsumsiProduksi(manufacturing: CountryData["sektor_manufaktur"]) {
  return (
    (manufacturing.semikonduktor ?? 0) * KONSUMSI_PRODUKSI.semikonduktor +
    (manufacturing.mobil ?? 0) * KONSUMSI_PRODUKSI.mobil +
    (manufacturing.sepeda_motor ?? 0) * KONSUMSI_PRODUKSI.sepeda_motor +
    (manufacturing.smelter ?? 0) * KONSUMSI_PRODUKSI.smelter +
    (manufacturing.semen_beton ?? 0) * KONSUMSI_PRODUKSI.semen_beton +
    (manufacturing.kayu ?? 0) * KONSUMSI_PRODUKSI.kayu
  );
}

export function hitungKonsumsiOlahanPangan(olahan: CountryData["sektor_olahan_pangan"]) {
  return (
    (olahan.air_mineral ?? 0) * KONSUMSI_PRODUKSI.air_mineral +
    (olahan.gula ?? 0) * KONSUMSI_PRODUKSI.gula +
    (olahan.roti ?? 0) * KONSUMSI_PRODUKSI.roti +
    (olahan.pengolahan_daging ?? 0) * KONSUMSI_PRODUKSI.pengolahan_daging +
    (olahan.mie_instan ?? 0) * KONSUMSI_PRODUKSI.mie_instan
  );
}

export function hitungKonsumsiFarmasi(farmasi: CountryData["sektor_farmasi"]) {
  return (farmasi.farmasi ?? 0) * KONSUMSI_PRODUKSI.farmasi;
}

// 3. Konsumsi Pertanian & Peternakan
export const KONSUMSI_PANGAN = {
  ayam_unggas: 0.05, sapi_perah: 0.5, sapi_potong: 0.2, domba_kambing: 0.1,
  udang_kerang: 0.65, ikan: 0.5, padi: 0.2, gandum_jagung: 0.1,
  sayur_umbi: 0.15, kedelai: 0.1, kelapa_sawit: 1, kopi_teh_kakao: 0.2
};

export function hitungKonsumsiPangan(peternakan: CountryData["sektor_peternakan"], agrikultur: CountryData["sektor_agrikultur"]) {
  let total = 0;
  if (peternakan) {
    total += Object.keys(peternakan).reduce((sum, key) => {
      const consumptionRate = (KONSUMSI_PANGAN as any)[key] ?? 0;
      return sum + ((peternakan as any)[key] ?? 0) * consumptionRate;
    }, 0);
  }
  if (agrikultur) {
    total += Object.keys(agrikultur).reduce((sum, key) => {
      const consumptionRate = (KONSUMSI_PANGAN as any)[key] ?? 0;
      return sum + ((agrikultur as any)[key] ?? 0) * consumptionRate;
    }, 0);
  }
  return total;
}

// 4. Konsumsi Pertahanan (Defense)
export const KONSUMSI_PERTAHANAN = {
  penjara: 2, barak: 5, gudang_senjata: 2, hangar_tank: 5, akademi_militer: 10
};

export const KONSUMSI_STRATEGIC = {
  pusat_komando: 15, pangkalan_udara: 30, pangkalan_laut: 35,
  arms_factory: 40, program_luar_angkasa: 80
};

export const KONSUMSI_FLEET = {
  darat: { 
    tank_tempur_utama: 0.5, 
    apc_ifv: 0.2, 
    artileri_berat: 0.3,
    sistem_peluncur_roket: 0.8,
    pertahanan_udara_mobile: 0.6,
    kendaraan_taktis: 0.1
  },
  laut: { 
    kapal_induk: 100, 
    kapal_destroyer: 30, 
    kapal_korvet: 15,
    kapal_selam_nuklir: 80, 
    kapal_selam_regular: 20,
    kapal_ranjau: 10,
    kapal_logistik: 12
  },
  udara: { 
    jet_tempur_siluman: 5, 
    jet_tempur_interceptor: 4,
    pesawat_pengebom: 8,
    helikopter_serang: 2, 
    pesawat_pengintai: 3,
    drone_intai_uav: 0.5,
    drone_kamikaze: 0.2,
    pesawat_angkut: 3
  },
  personel: {
    infanteri_reguler: 0.0001,
    pasukan_khusus: 0.0002,
    pasukan_cadangan: 0.00002
  }
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
    (management.penjara ?? 0) * KONSUMSI_PERTAHANAN.penjara +
    (management.gudang_senjata ?? 0) * KONSUMSI_PERTAHANAN.gudang_senjata +
    (management.hangar_tank ?? 0) * KONSUMSI_PERTAHANAN.hangar_tank +
    (management.akademi_militer ?? 0) * KONSUMSI_PERTAHANAN.akademi_militer +
    (management.pusat_komando ?? 0) * KONSUMSI_STRATEGIC.pusat_komando +
    (management.pangkalan_udara ?? 0) * KONSUMSI_STRATEGIC.pangkalan_udara +
    (management.pangkalan_laut ?? 0) * KONSUMSI_STRATEGIC.pangkalan_laut
  );

  const daratCons = Object.keys(KONSUMSI_FLEET.darat).reduce((total, key) => 
    total + ((fleet.darat as any)[key] ?? 0) * (KONSUMSI_FLEET.darat as any)[key], 0);

  const lautCons = Object.keys(KONSUMSI_FLEET.laut).reduce((total, key) => 
    total + ((fleet.laut as any)[key] ?? 0) * (KONSUMSI_FLEET.laut as any)[key], 0);

  const udaraCons = Object.keys(KONSUMSI_FLEET.udara).reduce((total, key) => 
    total + ((fleet.udara as any)[key] ?? 0) * (KONSUMSI_FLEET.udara as any)[key], 0);

  const personnelCons = Object.keys(KONSUMSI_FLEET.personel).reduce((total, key) => 
    total + ((fleet.personel as any)[key] ?? 0) * (KONSUMSI_FLEET.personel as any)[key], 0);

  const fleetCons = (
    (fleet.barak ?? 0) * KONSUMSI_PERTAHANAN.barak +
    daratCons + lautCons + udaraCons + personnelCons
  );

  const securityCons = (
    (strategis.intelijen ?? 0) * 10
  );

  const managementCons = (
    (management.pertahanan_siber ?? 0) * 5
  );

  const policeCons = (
    (police.armada_polisi.patroli_lantas.mobil_patroli ?? 0) * 0.1 +
    (police.armada_polisi.taktis_khusus.helikopter_polisi ?? 0) * 2
  );

  const pabrikCons = (
    (pabrik.pabrik_drone_kamikaze ?? 0) * KONSUMSI_PABRIK_MILITER.pabrik_drone_kamikaze +
    (pabrik.pabrik_amunisi ?? 0) * KONSUMSI_PABRIK_MILITER.pabrik_amunisi +
    (pabrik.pabrik_kendaraan_tempur ?? 0) * KONSUMSI_PABRIK_MILITER.pabrik_kendaraan_tempur +
    (pabrik.pabrik_senjata_berat ?? 0) * KONSUMSI_PABRIK_MILITER.pabrik_senjata_berat
  );

  return base + fleetCons + securityCons + managementCons + policeCons + pabrikCons;
}

/**
 * Kalkulasi konsumsi listrik hanya untuk bangunan manajemen & strategis.
 */
export function hitungKonsumsiBangunanMiliter(
  management: SektorPertahanan,
  barak: number,
  status_nuklir: boolean
) {
  return (
    (management.penjara ?? 0) * KONSUMSI_PERTAHANAN.penjara +
    (management.gudang_senjata ?? 0) * KONSUMSI_PERTAHANAN.gudang_senjata +
    (management.hangar_tank ?? 0) * KONSUMSI_PERTAHANAN.hangar_tank +
    (management.akademi_militer ?? 0) * KONSUMSI_PERTAHANAN.akademi_militer +
    (management.pusat_komando ?? 0) * KONSUMSI_STRATEGIC.pusat_komando +
    (management.pangkalan_udara ?? 0) * KONSUMSI_STRATEGIC.pangkalan_udara +
    (management.pangkalan_laut ?? 0) * KONSUMSI_STRATEGIC.pangkalan_laut +
    (management.program_luar_angkasa ?? 0) * KONSUMSI_STRATEGIC.program_luar_angkasa +
    (management.pertahanan_siber ?? 0) * 5 + // Progress based
    (barak ?? 0) * KONSUMSI_PERTAHANAN.barak +
    (status_nuklir ? 50 : 0) // System power
  );
}

/**
 * Kalkulasi konsumsi listrik hanya untuk pabrik militer.
 */
export function hitungKonsumsiPabrikMiliter(pabrik: SektorPabrikMiliter) {
  return (
    (pabrik.pabrik_drone_kamikaze ?? 0) * KONSUMSI_PABRIK_MILITER.pabrik_drone_kamikaze +
    (pabrik.pabrik_amunisi ?? 0) * KONSUMSI_PABRIK_MILITER.pabrik_amunisi +
    (pabrik.pabrik_kendaraan_tempur ?? 0) * KONSUMSI_PABRIK_MILITER.pabrik_kendaraan_tempur +
    (pabrik.pabrik_senjata_berat ?? 0) * KONSUMSI_PABRIK_MILITER.pabrik_senjata_berat
  );
}

// 5. Konsumsi Sosial
export const KONSUMSI_SOSIAL = {
  pendidikan: {
    prasekolah: 0.5, dasar: 1, menengah: 2, lanjutan: 3,
    universitas: 10, lembaga_pendidikan: 5, laboratorium: 15, observatorium: 8,
    pusat_penelitian: 20, pusat_pengembangan: 15
  },
  kesehatan: { rumah_sakit_besar: 20, rumah_sakit_kecil: 5, pusat_diagnostik: 10 },
  olahraga: { kolam_renang: 5, sirkuit_balap: 15, stadion: 10, stadion_internasional: 20 },
  hukum: { akademi_polisi: 10, pos_polisi: 3, armada_mobil_polisi: 0.1, kejaksaan: 5, pengadilan: 10, pusat_bantuan_hukum: 3 }
};

export function hitungKonsumsiSosial(social: CountryData["sektor_sosial"]) {
  const edu = social.pendidikan || {};
  const kesehatan = social.kesehatan || {};
  const hukum = social.hukum || {};

  const totalEdu = Object.keys(KONSUMSI_SOSIAL.pendidikan).reduce((total, key) =>
    total + ((edu as any)[key] ?? 0) * (KONSUMSI_SOSIAL.pendidikan as any)[key], 0);

  const totalHealth = Object.keys(KONSUMSI_SOSIAL.kesehatan).reduce((total, key) =>
    total + ((kesehatan as any)[key] ?? 0) * (KONSUMSI_SOSIAL.kesehatan as any)[key], 0);

  const totalLaw = Object.keys(KONSUMSI_SOSIAL.hukum).reduce((total, key) =>
    total + ((hukum as any)[key] ?? 0) * (KONSUMSI_SOSIAL.hukum as any)[key], 0);

  return totalEdu + totalHealth + totalLaw;
}

export function hitungKonsumsiOlahraga(olahraga: CountryData["sektor_olahraga"]) {
  if (!olahraga) return 0;
  return Object.keys(KONSUMSI_SOSIAL.olahraga).reduce((total, key) =>
    total + ((olahraga as any)[key] ?? 0) * (KONSUMSI_SOSIAL.olahraga as any)[key], 0);
}

// 6. Konsumsi Transportasi
export const KONSUMSI_TRANSPORTASI = {
  jalur_sepeda: 0, kereta_bawah_tanah: 20, jalur_kereta: 15, jalan_tol: 3, pelabuhan_laut: 25, bandara: 30, terminal_bus: 5, helipad: 2
};

export function hitungKonsumsiTransportasi(infra: CountryData["infrastruktur"]) {
  return (
    (infra.jalur_sepeda ?? 0) * KONSUMSI_TRANSPORTASI.jalur_sepeda +
    (infra.kereta_bawah_tanah ?? 0) * KONSUMSI_TRANSPORTASI.kereta_bawah_tanah +
    (infra.jalur_kereta ?? 0) * KONSUMSI_TRANSPORTASI.jalur_kereta +
    (infra.jalan_tol ?? 0) * KONSUMSI_TRANSPORTASI.jalan_tol +
    (infra.pelabuhan_laut ?? 0) * KONSUMSI_TRANSPORTASI.pelabuhan_laut +
    (infra.bandara ?? 0) * KONSUMSI_TRANSPORTASI.bandara +
    (infra.terminal_bus ?? 0) * KONSUMSI_TRANSPORTASI.terminal_bus +
    (infra.helipad ?? 0) * KONSUMSI_TRANSPORTASI.helipad
  );
}

export function hitungTotalKonsumsiNasional(data: CountryData) {
  return (
    hitungKonsumsiEkstraksi(data.sektor_ekstraksi) +
    hitungKonsumsiProduksi(data.sektor_manufaktur) +
    hitungKonsumsiOlahanPangan(data.sektor_olahan_pangan) +
    hitungKonsumsiFarmasi(data.sektor_farmasi) +
    hitungKonsumsiPangan(data.sektor_peternakan, data.sektor_agrikultur) +
    hitungKonsumsiPertahanan(data.sektor_pertahanan, data.armada_militer, data.militer_strategis, data.armada_kepolisian, data.pabrik_militer) +
    hitungKonsumsiSosial(data.sektor_sosial) +
    hitungKonsumsiOlahraga(data.sektor_olahraga) +
    hitungKonsumsiTransportasi(data.infrastruktur)
  );
}
