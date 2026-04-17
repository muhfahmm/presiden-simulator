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

export const FinanceList = (props: TabProps) => {
  return (
    <NewsBaseList 
      {...props} 
      categoryFilter={(item) => {
        const subjectLower = item.subject.toLowerCase();
        if (item.category === 'finance') return true;
        if (item.category === 'economy') {
           // Must NOT be a trade-specific news if we are using the keywords
           const isTrade = /(dagang|ekspor|impor|tarif|logistik|pasar|perdagangan|komoditas|harga)/.test(subjectLower);
           return !isTrade; 
        }
        return (item.category === 'global' && /(dana|hibah|anggaran|pajak|ekonomi|utang|hutang|keuangan)/.test(subjectLower));
      }} 
    />
  );
};
