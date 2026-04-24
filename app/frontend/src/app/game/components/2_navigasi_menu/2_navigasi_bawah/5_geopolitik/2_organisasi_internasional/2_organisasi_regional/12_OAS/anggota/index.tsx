"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaOAS({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="oas" 
      orgName="OAS" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
