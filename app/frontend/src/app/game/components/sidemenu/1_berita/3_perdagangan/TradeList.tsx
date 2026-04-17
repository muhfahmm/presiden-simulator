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

export const TradeList = (props: TabProps) => {
  return (
    <NewsBaseList 
      {...props} 
      categoryFilter={(item) => {
        const subjectLower = item.subject.toLowerCase();
        if (item.category === 'trade') return true;
        if (item.category === 'economy') {
           return /(dagang|ekspor|impor|tarif|logistik|pasar|perdagangan|komoditas|harga)/.test(subjectLower);
        }
        return (item.category === 'global' && /(dagang|ekspor|impor|perdagangan)/.test(subjectLower));
      }} 
    />
  );
};
