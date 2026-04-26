"use client"

import React from 'react';
import { NewsBaseList } from '../NewsBaseList';
import { NewsItem } from '../newsStorage';

interface TabProps {
  news: NewsItem[];
  expandedId: string | null;
  setExpandedId: (id: string | null) => void;
  searchTerm: string;
  onClose: () => void;
  setActiveMenu: (menu: string) => void;
}

export const EmbassyList = (props: TabProps) => {
  return (
    <NewsBaseList 
      {...props} 
      categoryFilter={(item) => {
        const subjectLower = item.subject.toLowerCase();
        
        // Exclude trade and economy categories to prevent crossover (e.g. "Hubungan Dagang")
        if (item.category === 'trade' || item.category === 'economy') return false;

        return (item.category === 'diplomacy' && !/(pakta|perjanjian|aliansi|sekutu)/.test(subjectLower)) || 
               /(diplomatik|hubungan bilateral|kedutaan|dubes|perwakilan diplomatik|konsulat)/.test(subjectLower);
      }} 
    />
  );
};
