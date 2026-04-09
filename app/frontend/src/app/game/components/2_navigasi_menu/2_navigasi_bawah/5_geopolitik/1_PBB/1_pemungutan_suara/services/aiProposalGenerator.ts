/**
 * AI Proposal Generator
 * Menghasilkan proposal (resolusi, sanksi, embargo) dari negara AI
 * Berdasarkan kepentingan geopolitik, ekonomi, dan stabilitas
 */

import { CountryProfile, Resolution } from './aiVotingService';
import { ProposalType } from '../utils/votingSystem';

export interface AIProposalGeneratorConfig {
  proposalFrequency: number; // Hari antara proposal (default: 5-10 hari)
  minConfidence: number; // Minimum confidence untuk submit proposal (default: 0.6)
  maxActiveProposalsPerCountry: number; // Max proposal aktif per negara (default: 2)
}

export interface GeneratedProposal {
  type: ProposalType;
  proposerCountry: string;
  targetCountry?: string;
  proposalName: string;
  description: string;
  duration: string;
  subItem?: string;
  reasoning: string;
  confidence: number;
  priority: number; // 1-10, semakin tinggi semakin penting
}

class AIProposalGenerator {
  private config: AIProposalGeneratorConfig;

  constructor(config: Partial<AIProposalGeneratorConfig> = {}) {
    this.config = {
      proposalFrequency: config.proposalFrequency || 7,
      minConfidence: config.minConfidence || 0.6,
      maxActiveProposalsPerCountry: config.maxActiveProposalsPerCountry || 2,
    };
  }

  /**
   * Generate proposal untuk satu negara
   */
  generateProposal(
    country: CountryProfile,
    allCountries: CountryProfile[],
    globalTension: number,
    activeProposalsByCountry: number = 0
  ): GeneratedProposal | null {
    // Cek apakah negara sudah punya terlalu banyak proposal aktif
    if (activeProposalsByCountry >= this.config.maxActiveProposalsPerCountry) {
      return null;
    }

    // Tentukan tipe proposal berdasarkan kondisi negara
    const proposalType = this._selectProposalType(country, globalTension);
    if (!proposalType) return null;

    // Tentukan target negara (jika ada)
    const targetCountry = this._selectTargetCountry(country, allCountries, proposalType);

    // Generate proposal details
    const proposal = this._generateProposalDetails(
      country,
      proposalType,
      targetCountry,
      allCountries,
      globalTension
    );

    return proposal;
  }

  /**
   * Tentukan tipe proposal berdasarkan kondisi negara
   */
  private _selectProposalType(
    country: CountryProfile,
    globalTension: number
  ): ProposalType | null {
    const rand = Math.random();

    // Negara dengan stabilitas rendah cenderung propose resolusi
    if (country.stability < 0.4) {
      return rand < 0.7 ? 'resolution' : rand < 0.85 ? 'sanction' : 'embargo';
    }

    // Negara dengan military power tinggi cenderung propose sanksi/embargo
    if (country.military_power > 0.7) {
      return rand < 0.4 ? 'sanction' : rand < 0.7 ? 'embargo' : 'resolution';
    }

    // Negara netral cenderung propose resolusi
    if (country.political_ideology === 'neutral' || country.political_ideology === 'non_aligned') {
      return rand < 0.6 ? 'resolution' : rand < 0.8 ? 'sanction' : 'embargo';
    }

    // Default: random
    return rand < 0.4 ? 'resolution' : rand < 0.7 ? 'sanction' : 'embargo';
  }

  /**
   * Pilih negara target untuk sanksi/embargo
   */
  private _selectTargetCountry(
    country: CountryProfile,
    allCountries: CountryProfile[],
    proposalType: ProposalType
  ): CountryProfile | undefined {
    if (proposalType === 'resolution') {
      return undefined; // Resolusi tidak punya target
    }

    // Cari negara dengan hubungan buruk atau ideologi berbeda
    const candidates = allCountries.filter(c => {
      if (c.name === country.name) return false;

      // Prioritas: ideologi berbeda, military power tinggi, atau stability rendah
      const ideologyDiff = country.political_ideology !== c.political_ideology ? 1 : 0;
      const militaryThreat = c.military_power > 0.6 ? 1 : 0;
      const stabilityRisk = c.stability < 0.4 ? 1 : 0;

      return ideologyDiff + militaryThreat + stabilityRisk > 0;
    });

    if (candidates.length === 0) return undefined;

    // Pilih random dari candidates
    return candidates[Math.floor(Math.random() * candidates.length)];
  }

  /**
   * Generate detail proposal
   */
  private _generateProposalDetails(
    country: CountryProfile,
    type: ProposalType,
    targetCountry: CountryProfile | undefined,
    allCountries: CountryProfile[],
    globalTension: number
  ): GeneratedProposal {
    const templates = this._getProposalTemplates(type, country, targetCountry);
    const template = templates[Math.floor(Math.random() * templates.length)];

    // Hitung confidence berdasarkan faktor
    const confidence = this._calculateProposalConfidence(
      country,
      type,
      targetCountry,
      allCountries
    );

    // Hitung priority
    const priority = this._calculatePriority(country, type, globalTension, confidence);

    return {
      type,
      proposerCountry: country.name,
      targetCountry: targetCountry?.name,
      proposalName: template.name,
      description: template.description,
      duration: template.duration,
      subItem: template.subItem,
      reasoning: template.reasoning,
      confidence,
      priority,
    };
  }

  /**
   * Template proposal untuk berbagai skenario
   */
  private _getProposalTemplates(
    type: ProposalType,
    country: CountryProfile,
    targetCountry?: CountryProfile
  ) {
    if (type === 'resolution') {
      return [
        {
          name: 'Resolusi Perdamaian Global',
          description: 'Mendorong dialog internasional dan penyelesaian konflik secara damai',
          duration: '30 hari',
          reasoning: 'Stabilitas global diperlukan untuk pertumbuhan ekonomi',
        },
        {
          name: 'Resolusi Perlindungan Lingkungan',
          description: 'Komitmen bersama untuk mengurangi emisi karbon dan melindungi ekosistem',
          duration: '60 hari',
          reasoning: 'Perubahan iklim mempengaruhi semua negara',
        },
        {
          name: 'Resolusi Kerjasama Ekonomi',
          description: 'Meningkatkan perdagangan dan investasi antar negara',
          duration: '30 hari',
          reasoning: 'Pertumbuhan ekonomi bersama menguntungkan semua pihak',
        },
      ];
    }

    if (type === 'sanction') {
      const targetName = targetCountry?.name || 'Negara Target';
      return [
        {
          name: `Sanksi Ekonomi terhadap ${targetName}`,
          description: `Membatasi perdagangan dan investasi dengan ${targetName} karena pelanggaran hak asasi manusia`,
          duration: '90 hari',
          reasoning: 'Tekanan ekonomi untuk perubahan kebijakan',
        },
        {
          name: `Embargo Senjata terhadap ${targetName}`,
          description: `Melarang penjualan senjata dan teknologi militer ke ${targetName}`,
          duration: '180 hari',
          reasoning: 'Mencegah eskalasi konflik regional',
        },
      ];
    }

    // embargo
    const targetName = targetCountry?.name || 'Negara Target';
    return [
      {
        name: `Embargo Minyak terhadap ${targetName}`,
        description: `Melarang ekspor minyak dan produk energi dari ${targetName}`,
        duration: '120 hari',
        subItem: 'energi',
        reasoning: 'Tekanan untuk mengubah kebijakan luar negeri',
      },
      {
        name: `Embargo Teknologi terhadap ${targetName}`,
        description: `Melarang transfer teknologi dan akses ke pasar teknologi global`,
        duration: '180 hari',
        subItem: 'teknologi',
        reasoning: 'Membatasi kemampuan militer dan ekonomi',
      },
    ];
  }

  /**
   * Hitung confidence proposal
   */
  private _calculateProposalConfidence(
    country: CountryProfile,
    type: ProposalType,
    targetCountry: CountryProfile | undefined,
    allCountries: CountryProfile[]
  ): number {
    let confidence = 0.5;

    // Faktor 1: Diplomatic standing
    confidence += (country.diplomatic_standing / 100) * 0.2;

    // Faktor 2: Ideologi alignment dengan negara lain
    const alignedCountries = allCountries.filter(
      c => c.political_ideology === country.political_ideology && c.name !== country.name
    ).length;
    confidence += (alignedCountries / allCountries.length) * 0.2;

    // Faktor 3: Untuk sanction/embargo, cek apakah target adalah musuh
    if (type !== 'resolution' && targetCountry) {
      const isEnemy = targetCountry.political_ideology !== country.political_ideology;
      confidence += isEnemy ? 0.15 : -0.1;
    }

    // Faktor 4: Military power (untuk sanction/embargo)
    if (type !== 'resolution') {
      confidence += (country.military_power / 2) * 0.15;
    }

    return Math.max(0.3, Math.min(1.0, confidence));
  }

  /**
   * Hitung priority proposal
   */
  private _calculatePriority(
    country: CountryProfile,
    type: ProposalType,
    globalTension: number,
    confidence: number
  ): number {
    let priority = 5; // Base priority

    // Tinggi jika confidence tinggi
    priority += confidence * 3;

    // Tinggi jika global tension tinggi dan type adalah resolution
    if (type === 'resolution' && globalTension > 0.7) {
      priority += 2;
    }

    // Tinggi jika negara punya military power tinggi dan type adalah sanction/embargo
    if (type !== 'resolution' && country.military_power > 0.7) {
      priority += 2;
    }

    return Math.min(10, Math.max(1, Math.round(priority)));
  }
}

export const aiProposalGenerator = new AIProposalGenerator();
