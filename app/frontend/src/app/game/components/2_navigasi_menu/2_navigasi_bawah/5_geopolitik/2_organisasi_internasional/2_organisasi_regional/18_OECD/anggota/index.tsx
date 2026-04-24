"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaOECD({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="oecd" 
      orgName="OECD" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
