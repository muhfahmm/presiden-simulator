"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaQUAD({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="quad" 
      orgName="QUAD" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
