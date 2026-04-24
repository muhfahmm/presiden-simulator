"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaG7({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="g7" 
      orgName="G7" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
