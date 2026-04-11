"use client"
import React from 'react';
import OrgMembersList from "../../../OrgMembersList";

export default function Members({ searchQuery }: { searchQuery: string }) {
    return <OrgMembersList orgId="imo" orgName="Organisasi Maritim Internasional (IMO)" searchQuery={searchQuery} />;
}
