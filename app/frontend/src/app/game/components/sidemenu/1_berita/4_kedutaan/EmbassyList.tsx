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
        return (item.category === 'diplomacy' && !/(pakta|perjanjian|aliansi|sekutu)/.test(subjectLower)) || 
               /(diplomatik|hubungan|kedutaan|dubes|perwakilan|konsulat)/.test(subjectLower);
      }} 
    />
  );
};
