"use client"
import React from 'react';
import OrgMembersList from "../../../OrgMembersList";

export default function Members({ searchQuery }: { searchQuery: string }) {
    return <OrgMembersList orgId="wmo" orgName="Organisasi Meteorologi Dunia (WMO)" searchQuery={searchQuery} />;
}
