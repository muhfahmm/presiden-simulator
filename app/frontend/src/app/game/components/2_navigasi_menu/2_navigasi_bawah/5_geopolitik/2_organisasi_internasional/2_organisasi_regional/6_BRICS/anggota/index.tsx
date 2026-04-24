"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaBRICS({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="brics" 
      orgName="BRICS" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
