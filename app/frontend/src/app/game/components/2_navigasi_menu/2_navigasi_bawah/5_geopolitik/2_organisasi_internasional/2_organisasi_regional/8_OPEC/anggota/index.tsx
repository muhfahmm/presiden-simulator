"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaOPEC({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="opec" 
      orgName="OPEC" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
