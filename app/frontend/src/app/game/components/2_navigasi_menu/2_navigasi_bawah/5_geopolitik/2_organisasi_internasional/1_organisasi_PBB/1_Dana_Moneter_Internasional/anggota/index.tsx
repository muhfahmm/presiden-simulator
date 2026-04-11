"use client"
import React from 'react';
import OrgMembersList from "../../../OrgMembersList";

export default function Members({ searchQuery }: { searchQuery: string }) {
    return <OrgMembersList orgId="imf" orgName="Dana Moneter Internasional (IMF)" searchQuery={searchQuery} />;
}
