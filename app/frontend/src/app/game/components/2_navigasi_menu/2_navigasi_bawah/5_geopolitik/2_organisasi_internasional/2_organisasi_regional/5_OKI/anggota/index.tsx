"use client"

import OrgMembersList from "../../../OrgMembersList";

export default function AnggotaOKI({ searchQuery = "" }: { searchQuery?: string }) {
  return (
    <OrgMembersList 
      orgId="oic" 
      orgName="Organisasi Kerja Sama Islam (OKI)" 
      searchQuery={searchQuery} 
      category="REGIONAL" 
    />
  );
}
