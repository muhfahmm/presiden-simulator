export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: "Ekonomi" | "Geopolitik" | "Energi" | "Logistik";
  content: string;
  impactLabel: string;
  impactType: "positive" | "negative" | "neutral";
  affectedCommodities: string[];
  timestamp?: number;
}

export const newsData: NewsItem[] = [];
