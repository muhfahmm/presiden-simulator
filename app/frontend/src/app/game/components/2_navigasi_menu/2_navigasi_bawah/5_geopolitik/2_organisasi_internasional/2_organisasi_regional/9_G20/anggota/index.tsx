"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaG20({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="g20" 
      orgName="G20" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
