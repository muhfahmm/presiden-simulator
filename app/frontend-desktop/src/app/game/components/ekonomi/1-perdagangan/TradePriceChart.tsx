import React, { useMemo } from "react";
import { TrendingUp, BarChart3 } from "lucide-react";

interface TradePriceChartProps {
  selectedKey: string;
  selectedTimeframe: string;
  basePrice: number;
}

export const TradePriceChart: React.FC<TradePriceChartProps> = ({ 
  selectedKey, 
  selectedTimeframe, 
  basePrice 
}) => {
  // Generate consistent chart data based on key and timeframe
  const chartData = useMemo(() => {
    const points = 24; // Standard points for the chart
    const data: number[] = [];
    
    // Simple hash for the key to use as a seed
    let seed = 0;
    for (let i = 0; i < selectedKey.length; i++) {
        seed = (seed << 5) - seed + selectedKey.charCodeAt(i);
        seed |= 0;
    }
    
    // Timeframe factor
    const tfSeeds: Record<string, number> = {
      "1d": 1, "1w": 7, "1m": 30, "3m": 90, "6m": 180, "9m": 270, "1y": 365, "3y": 1095, "5y": 1825
    };
    const tfSeed = tfSeeds[selectedTimeframe] || 1;
    
    // Generate 24 points
    let currentVal = basePrice;
    for (let i = 0; i < points; i++) {
      const random = Math.sin(seed + tfSeed + i) * 0.2; // -20% to +20% fluctuation
      currentVal = currentVal * (1 + random);
      // Keep it within a reasonable range of the base price
      if (currentVal < basePrice * 0.5) currentVal = basePrice * 0.6;
      if (currentVal > basePrice * 1.5) currentVal = basePrice * 1.4;
      data.push(currentVal);
    }
    
    // Create SVG path
    const width = 800;
    const height = 200;
    const step = width / (points - 1);
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    
    const pathPoints = data.map((val, i) => ({
      x: i * step,
      y: height - ((val - min) / range) * (height * 0.8) - (height * 0.1)
    }));
    
    return {
      line: `M ${pathPoints[0].x} ${pathPoints[0].y} ${pathPoints.map(p => `L ${p.x} ${p.y}`).join(' ')}`,
      area: `M 0 200 L ${pathPoints[0].x} ${pathPoints[0].y} ${pathPoints.map(p => `L ${p.x} ${p.y}`).join(' ')} L 800 200 Z`
    };
  }, [selectedKey, selectedTimeframe, basePrice]);

  return (
    <div className="h-64 w-full bg-zinc-950/50 border border-zinc-900 rounded-[3rem] relative overflow-hidden group shadow-inner">
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 opacity-20 pointer-events-none">
        {[1, 2, 3, 4].map(i => <div key={i} className="h-[1px] w-full bg-zinc-800/50"></div>)}
      </div>

      <svg className="w-full h-full p-8 overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 200">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={chartData.area} fill="url(#chartFill)" className="animate-in fade-in duration-1000" />
        <path d={chartData.line} fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
        
        {/* Animated Glow Point */}
        <circle cx="800" cy="100" r="6" fill="#3b82f6" className="animate-pulse shadow-[0_0_20px_#3b82f6]">
           <animate attributeName="cy" values="90;110;90" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};
