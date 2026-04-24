"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaCommonwealth({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="commonwealth" 
      orgName="Commonwealth" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
