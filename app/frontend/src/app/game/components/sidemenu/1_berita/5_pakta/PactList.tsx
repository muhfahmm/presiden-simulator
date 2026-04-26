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

export const PactList = (props: TabProps) => {
  return (
    <NewsBaseList 
      {...props} 
      categoryFilter={(item) => {
        const subjectLower = item.subject.toLowerCase();

        // Exclude trade and economy categories to prevent crossover
        if (item.category === 'trade' || item.category === 'economy') return false;

        return /(pakta|perjanjian|mou|kesepakatan|traktat)/.test(subjectLower);
      }} 
    />
  );
};
