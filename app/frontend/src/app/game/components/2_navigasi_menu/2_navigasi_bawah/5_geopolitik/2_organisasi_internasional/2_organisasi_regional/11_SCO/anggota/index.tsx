"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaSCO({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="sco" 
      orgName="SCO" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
