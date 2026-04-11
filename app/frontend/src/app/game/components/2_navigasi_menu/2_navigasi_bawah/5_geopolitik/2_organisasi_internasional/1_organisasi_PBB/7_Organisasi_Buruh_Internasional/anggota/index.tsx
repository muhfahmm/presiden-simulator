"use client"
import React from 'react';
import OrgMembersList from "../../../OrgMembersList";

export default function Members({ searchQuery }: { searchQuery: string }) {
    return <OrgMembersList orgId="ilo" orgName="Organisasi Buruh Internasional (ILO)" searchQuery={searchQuery} />;
}
