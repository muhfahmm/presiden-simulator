"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaAfrika({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="au" 
      orgName="Uni Afrika (AU)" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
