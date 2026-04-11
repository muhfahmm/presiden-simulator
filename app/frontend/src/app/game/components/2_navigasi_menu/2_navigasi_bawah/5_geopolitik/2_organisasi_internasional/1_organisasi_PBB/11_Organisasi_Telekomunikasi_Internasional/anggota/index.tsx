"use client"
import React from 'react';
import OrgMembersList from "../../../OrgMembersList";

export default function Members({ searchQuery }: { searchQuery: string }) {
    return <OrgMembersList orgId="itu" orgName="Organisasi Telekomunikasi Internasional (ITU)" searchQuery={searchQuery} />;
}
