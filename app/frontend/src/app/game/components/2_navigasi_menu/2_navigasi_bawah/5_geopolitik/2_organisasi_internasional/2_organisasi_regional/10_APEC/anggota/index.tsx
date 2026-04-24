"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaAPEC({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="apec" 
      orgName="APEC" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
