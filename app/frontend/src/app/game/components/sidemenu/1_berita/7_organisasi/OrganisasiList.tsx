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

export const OrganisasiList = (props: TabProps) => {
  return (
    <NewsBaseList 
      {...props} 
      categoryFilter={(item) => {
        const subjectLower = item.subject.toLowerCase();
        const contentLower = item.content.toLowerCase();
        return (item.category === 'organizations') || 
               /(pbb|imf|bank dunia|organisasi|keanggotaan|membership|asean|nato|brics|g20)/.test(subjectLower) ||
               /(bergabung dengan|keluar dari|menjadi anggota)/.test(contentLower);
      }} 
    />
  );
};
