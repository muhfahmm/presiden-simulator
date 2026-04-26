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

export const AllianceList = (props: TabProps) => {
  return (
    <NewsBaseList 
      {...props} 
      categoryFilter={(item) => {
        const subjectLower = item.subject.toLowerCase();
        
        // Exclude trade and economy categories to prevent crossover
        if (item.category === 'trade' || item.category === 'economy') return false;
        
        // Exclude specific trade/logistics keywords that contain "sekutu" or "aliansi"
        if (/(transit|bea cukai|tarif|regulasi dagang)/.test(subjectLower)) return false;

        return /(aliansi|sekutu|koalisi|blok|pertahanan)/.test(subjectLower);
      }} 
    />
  );
};
