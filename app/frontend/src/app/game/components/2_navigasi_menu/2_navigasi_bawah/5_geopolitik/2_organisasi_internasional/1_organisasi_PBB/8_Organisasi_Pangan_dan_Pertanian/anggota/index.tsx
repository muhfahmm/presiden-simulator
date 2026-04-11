"use client"
import React from 'react';
import OrgMembersList from "../../../OrgMembersList";

export default function Members({ searchQuery }: { searchQuery: string }) {
    return <OrgMembersList orgId="fao" orgName="Organisasi Pangan dan Pertanian (FAO)" searchQuery={searchQuery} />;
}
