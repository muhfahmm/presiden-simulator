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

export const RelationList = (props: TabProps) => {
  return (
    <NewsBaseList 
      {...props} 
      categoryFilter={(item) => {
        const subjectLower = item.subject.toLowerCase();
        const contentLower = item.content.toLowerCase();
        
        // Filter for relationship, aid, and diplomatic stability news
        return (item.category === 'diplomacy' && /(hubungan|bantuan|persahabatan|stabilitas|kerjasama|diplomatik)/.test(subjectLower)) || 
               /(bantuan dana|bantuan finansial|dana hibah diplomatik|redakan ketegangan)/.test(subjectLower + contentLower);
      }} 
    />
  );
};
