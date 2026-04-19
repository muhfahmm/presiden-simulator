'use client';

import React, { useState, useEffect } from 'react';
import MapContainer from './map-system/components/MapContainer';
import { Country } from './map-system/types/country';
import { getNextDate } from './map-system/actions/time/simulation';

export default function rootPageSimulation() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const [simState, setSimState] = useState({
    isPaused: true,
    speed: 1,
    date: '01-01-2026'
  });

  // Simulation Clock Tick Logic
  useEffect(() => {
    let interval: any = null;
    
    if (!simState.isPaused) {
      const tickRate = 1000 / simState.speed;
      
      interval = setInterval(() => {
        setSimState(prev => ({
          ...prev,
          date: getNextDate(prev.date)
        }));
      }, tickRate);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [simState.isPaused, simState.speed]);

  useEffect(() => {
    fetch('/data/countries.json')
      .then(res => res.json())
      .then(data => {
        const indonesia = data.find((c: Country) => c.nama_negara.toLowerCase() === 'indonesia');
        if (indonesia) setSelectedCountry(indonesia);
      })
      .catch(err => console.error('Failed to fetch country data:', err));
  }, []);

  const handleMapCountrySelect = (country: any) => {
    console.log('Map Clicked:', country.nama_negara, 'ID:', country.id);
  };

  return (
    <main className="fixed inset-0 bg-[#070b14] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.02)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="w-full h-full">
        <MapContainer 
          mode="MAIN" 
          userCountry={selectedCountry?.nama_negara}
          selectedName={selectedCountry?.nama_negara}
          selectedCode={selectedCountry?.kode_negara}
          relations={[]}
          onSelectCountry={handleMapCountrySelect}
          onResetMode={() => {}}
        />

        {/* Global FX */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.6)] vignette-gradient" />
      </div>
    </main>
  );
}
