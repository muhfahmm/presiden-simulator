"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaEropa({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="eu" 
      orgName="Uni Eropa (EU)" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
