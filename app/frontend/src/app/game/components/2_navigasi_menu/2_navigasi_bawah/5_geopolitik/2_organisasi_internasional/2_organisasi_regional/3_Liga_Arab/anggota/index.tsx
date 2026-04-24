"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaArab({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="arab_league" 
      orgName="Liga Arab" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
