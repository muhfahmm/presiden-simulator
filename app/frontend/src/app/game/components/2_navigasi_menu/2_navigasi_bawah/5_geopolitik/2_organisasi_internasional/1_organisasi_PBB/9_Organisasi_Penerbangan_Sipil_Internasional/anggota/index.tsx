"use client"
import React from 'react';
import OrgMembersList from "../../../OrgMembersList";

export default function Members({ searchQuery }: { searchQuery: string }) {
    return <OrgMembersList orgId="icao" orgName="Organisasi Penerbangan Sipil Internasional (ICAO)" searchQuery={searchQuery} />;
}
