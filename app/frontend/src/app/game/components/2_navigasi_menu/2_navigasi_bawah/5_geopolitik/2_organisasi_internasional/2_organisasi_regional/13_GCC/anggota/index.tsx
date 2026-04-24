"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaGCC({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="gcc" 
      orgName="GCC" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
