"use client"
import React from 'react';
import OrgMembersList from "../../../OrgMembersList";

export default function Members({ searchQuery }: { searchQuery: string }) {
    return <OrgMembersList orgId="who" orgName="Organisasi Kesehatan Dunia (WHO)" searchQuery={searchQuery} />;
}
