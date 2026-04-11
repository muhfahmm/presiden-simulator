"use client"
import React from 'react';
import OrgMembersList from "../../../OrgMembersList";

export default function Members({ searchQuery }: { searchQuery: string }) {
    return <OrgMembersList orgId="wto" orgName="Organisasi Perdagangan Dunia (WTO)" searchQuery={searchQuery} />;
}
