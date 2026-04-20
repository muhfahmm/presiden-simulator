"use client"

import { aiBudgetStorage } from "@/app/game/components/modals/1_info_strategis/5_Keuangan/AIBudgetStorage";
import { aiDefenseStorage } from "../antarmuka_data_pertahanan/AIDefenseStorage";
import { newsStorage } from "@/app/game/components/sidemenu/1_berita/newsStorage";
import { addDays, formatGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { countries } from "@/app/database/data/negara/benua/index";

// Metadata lookup for ALL defense buildings across all 5 sectors
import { komandoPertahananRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/1_komando_pertahanan";
import { intelijenRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/2_intelijen";
import { armadaMiliterRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/3_armada_militer";
import { armadaPolisiRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/4_armada_polisi";
import { pertahananRate } from "@/app/database/data/semua_fitur_negara/2_pertahanan/5_manajemen_pertahanan";

// Consolidated lookup table: key -> metadata
const ALL_DEFENSE_OPTIONS: Record<string, any> = {
  ...komandoPertahananRate,
  ...intelijenRate,
  ...armadaMiliterRate,
  ...armadaPolisiRate,
  ...pertahananRate,
};

// Sector display names for news
const SECTOR_DISPLAY: Record<string, string> = {
  "komando": "Komando Pertahanan",
  "intelijen": "Intelijen Strategis",
  "darat": "Armada Darat",
  "laut": "Armada Laut",
  "udara": "Armada Udara",
  "polisi": "Kepolisian Nasional",
  "pertahanan": "Manajemen Pertahanan",
  "command": "Komando Pertahanan",
  "education": "Pendidikan Polisi",
  "forensic": "Forensik",
  "regional": "Polisi Wilayah",
  "surveillance": "Surveillance",
  "fleet": "Armada Polisi",
  "air": "Polisi Udara",
  "special": "Pasukan Khusus",
};

// Category for news: construction for berita_internasional
const NEWS_CATEGORY = "construction" as const;

export class EksekutorPertahananAI {
  /**
   * Execute a defense procurement decision for an NPC.
   * This handles budget deduction, queue management, and NEWS NOTIFICATION.
   */
  static async laksanakan(
    countryNameEn: string,
    buildingKey: string,
    gameDate: Date,
    quantity: number = 1,
    sectorHint?: string
  ): Promise<boolean> {
    // 1. Look up building metadata
    const buildingData = ALL_DEFENSE_OPTIONS[buildingKey];
    if (!buildingData) {
      console.warn(`[AI Pertahanan] Unknown building key: ${buildingKey}`);
      return false;
    }

    // 2. Calculate total cost
    const unitCost = Number(buildingData.biaya_pembangunan || 0);
    const totalCost = unitCost * quantity;

    // 3. Check budget
    const currentBudget = aiBudgetStorage.getBudget(countryNameEn);
    if (currentBudget < totalCost) {
      console.warn(
        `[AI Pertahanan] ${countryNameEn} failed: Budget insufficient (${currentBudget.toLocaleString()} < ${totalCost.toLocaleString()})`
      );
      return false;
    }

    // 4. Deduct budget
    (aiBudgetStorage as any).updateBudgetManual(countryNameEn, -totalCost);
    console.log(
      `[AI Pertahanan] ${countryNameEn} spent ${totalCost.toLocaleString()} on ${quantity}x ${buildingData.label}`
    );

    // 5. Add to construction queue with proper build time
    const buildTime = buildingData.waktu_pembangunan || 30;
    const endDate = addDays(gameDate, buildTime).getTime();

    const sector = sectorHint || buildingData.groupId || "pertahanan";

    aiDefenseStorage.addToQueue(countryNameEn, {
      buildingKey: buildingKey,
      label: buildingData.label || buildingKey,
      sector: sector,
      startDate: gameDate.getTime(),
      endDate: endDate,
      waktu_pembangunan: buildTime,
      quantity: quantity,
    });

    // 6. Generate NEWS for berita_internasional
    const dateKey = formatGameDate(gameDate);

    if (newsStorage.canAddNews(NEWS_CATEGORY, dateKey)) {
      const displayLabel = buildingData.deskripsi || buildingData.label || buildingKey;
      const displaySector = SECTOR_DISPLAY[sector] || sector.replace(/_/g, " ");

      // Get Indonesian country name for display
      const countryInfo = countries.find((c) => c.name_en === countryNameEn);
      const countryNameId = countryInfo?.name_id || countryNameEn;

      // Format cost with dots as thousand separators
      const formattedCost = totalCost.toLocaleString("id-ID");
      const formattedUnitCost = unitCost.toLocaleString("id-ID");

      // Determine news priority based on cost
      let priority: "low" | "medium" | "high" = "medium";
      if (totalCost > 500_000_000) {
        priority = "high";
      } else if (totalCost < 10_000_000) {
        priority = "low";
      }

      // Determine transition text (baseline to final)
      const defenseData = aiDefenseStorage.getData(countryNameEn);
      const startCount = Number(defenseData.defenseDeltas[buildingKey] || 0);
      const endCount = startCount + quantity;
      const transitionText = `(${startCount} ke ${endCount})`;

      // Generate detailed, realistic news content
      const newsTemplates = [
        {
          subject: `${countryNameId} Perkuat ${displaySector}: ${displayLabel}`,
          content:
            `Kementerian Pertahanan ${countryNameId} mengumumnkan pengadaan ${quantity} unit ${displayLabel} ${transitionText} ` +
            `untuk memperkuat kapasitas ${displaySector.toLowerCase()}. ` +
            `Total anggaran yang dialokasikan mencapai ${formattedCost} EM ` +
            `(${formattedUnitCost} EM per unit). ` +
            `Proyek ini diperkirakan selesai dalam ${buildTime} hari. ` +
            `Langkah ini merupakan bagian dari strategi modernisasi pertahanan nasional.`,
        },
        {
          subject: `Modernisasi Militer ${countryNameId}: ${displayLabel}`,
          content:
            `Pemerintah ${countryNameId} hari ini memulai proyek pengadaan ${quantity} unit ${displayLabel} ${transitionText} ` +
            `di sektor ${displaySector.toLowerCase()} dengan investasi sebesar ${formattedCost} EM. ` +
            `Program ini ditargetkan rampung dalam ${buildTime} hari kerja. ` +
            `Para analis menilai kebijakan ini sebagai respons terhadap dinamika keamanan regional.`,
        },
        {
          subject: `${countryNameId} Alokasikan ${formattedCost} EM untuk ${displayLabel}`,
          content:
            `Dalam upaya memperkuat postur pertahanan nasional, ${countryNameId} menggelontorkan ` +
            `anggaran ${formattedCost} EM untuk pengadaan ${quantity} unit ${displayLabel} ${transitionText}. ` +
            `Sektor ${displaySector.toLowerCase()} menjadi prioritas dalam rencana strategis jangka menengah ` +
            `pemerintah ${countryNameId}. Estimasi waktu penyelesaian: ${buildTime} hari.`,
        },
      ];

      // Randomly pick a news template for variety
      const template = newsTemplates[Math.floor(Math.random() * newsTemplates.length)];

      newsStorage.addNews({
        source: `Kementerian Pertahanan ${countryNameId}`,
        subject: template.subject,
        content: template.content,
        category: NEWS_CATEGORY,
        time: dateKey,
        priority: priority,
      });

      console.log(
        `[AI BERITA] Pertahanan ${countryNameEn}: "${template.subject}" → berita_internasional`
      );
    } else {
      console.log(
        `[AI BERITA] Pertahanan ${countryNameEn} diproses senyap (limit harian tercapai).`
      );
    }

    console.log(
      `[AI Pertahanan] ${countryNameEn} started ${quantity}x ${buildingData.label}. Finishes: ${formatGameDate(new Date(endDate))}`
    );
    return true;
  }

  /**
   * Background checker: Finalize completed defense construction projects.
   * Should be called every game tick.
   */
  static checkCompletion(gameDate: Date) {
    const now = gameDate.getTime();

    countries.forEach((country) => {
      const countryName = country.name_en;
      const queue = aiDefenseStorage.getQueue(countryName);

      if (queue.length === 0) return;

      const completed = queue.filter((item) => item.endDate <= now);

      if (completed.length > 0) {
        aiDefenseStorage.completeProjects(countryName, completed);

        // Optional: generate completion news for significant projects
        completed.forEach((project) => {
          const cost = ALL_DEFENSE_OPTIONS[project.buildingKey]?.biaya_pembangunan || 0;
          if (cost > 100_000_000) {
            // Only newsworthy for expensive projects
            const countryInfo = countries.find((c) => c.name_en === countryName);
            const countryNameId = countryInfo?.name_id || countryName;
            const dateKey = formatGameDate(gameDate);

            if (newsStorage.canAddNews(NEWS_CATEGORY, dateKey)) {
              newsStorage.addNews({
                source: `Kementerian Pertahanan ${countryNameId}`,
                subject: `${countryNameId} Rampungkan ${project.label}`,
                content: `Proyek ${project.quantity} unit ${project.label} yang diinisiasi oleh ${countryNameId} telah selesai dan resmi beroperasi. Aset ini memperkuat kapasitas pertahanan nasional ${countryNameId}.`,
                category: NEWS_CATEGORY,
                time: dateKey,
                priority: "medium",
              });
            }
          }
        });

        console.log(
          `[AI DEFENSE] ${countryName} finalized ${completed.length} defense project(s).`
        );
      }
    });
  }
}

