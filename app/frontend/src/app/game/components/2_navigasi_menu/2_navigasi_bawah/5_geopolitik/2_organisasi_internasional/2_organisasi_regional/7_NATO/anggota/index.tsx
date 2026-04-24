"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaNATO({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="nato" 
      orgName="NATO" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
