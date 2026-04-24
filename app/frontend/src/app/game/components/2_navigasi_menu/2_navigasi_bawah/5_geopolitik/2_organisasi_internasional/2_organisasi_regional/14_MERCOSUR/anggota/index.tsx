"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaMERCOSUR({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="mercosur" 
      orgName="MERCOSUR" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
