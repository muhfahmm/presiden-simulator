import React, { useMemo, useState, useEffect } from "react";
import { getStoredGameDate } from "@/app/game/data/time/gameTime";
import { getDynamicPrice } from "./tradeData";

interface TradePriceChartProps {
  selectedKey: string;
  selectedTimeframe: string;
  basePrice: number;
  type: "buy" | "sell";
  color?: string;
}

export const TradePriceChart: React.FC<TradePriceChartProps> = ({ 
  selectedKey, 
  selectedTimeframe, 
  basePrice,
  type,
  color = "#3b82f6"
}) => {
  const [hoverData, setHoverData] = useState<{ x: number; y: number; val: number; index: number } | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate consistent chart data matching getDynamicPrice with fixed interval alignment
  const chartData = useMemo(() => {
    // interval config: how many points, what's each step in ms, and what's the label step
    const intervalConfigs: Record<string, { points: number, stepMs: number, labelType: string }> = {
      "1d": { points: 25, stepMs: 60 * 60 * 1000, labelType: "hour" }, // 24h + now
      "1w": { points: 8, stepMs: 24 * 60 * 60 * 1000, labelType: "day" }, // 7 days + now
      "1m": { points: 31, stepMs: 24 * 60 * 60 * 1000, labelType: "date" },
      "3m": { points: 46, stepMs: 2 * 24 * 60 * 60 * 1000, labelType: "month" },
      "6m": { points: 61, stepMs: 3 * 24 * 60 * 60 * 1000, labelType: "month" },
      "1y": { points: 53, stepMs: 7 * 24 * 60 * 60 * 1000, labelType: "month" },
      "5y": { points: 61, stepMs: 30 * 24 * 60 * 60 * 1000, labelType: "year" }
    };
    
    const config = intervalConfigs[selectedTimeframe] || intervalConfigs["1w"];
    const points = config.points;
    const data: number[] = new Array(points);
    const currentDate = getStoredGameDate();
    const labelInterval = Math.max(1, Math.floor(points / 6));

    const nowMs = currentDate.getTime();
    const intervalRoundedNow = Math.floor(nowMs / config.stepMs) * config.stepMs;
    
    // Real-time jitter seed for visual "life" even when paused
    const realTimeSeed = Math.floor(Date.now() / 1000);
    
    // To ensure consistency, previous points (0 to points-2) are pinned to fixed intervals
    // Point points-1 is Exactly Now.
    
    for (let i = 0; i < points; i++) {
      if (i === points - 1) {
        // Apply microscopic live jitter to the current price
        const liveJitter = (Math.sin(realTimeSeed + i) * 1000) % 1;
        data[i] = basePrice * (1 + (liveJitter * 0.002)); // 0.2% live jitter
      } else {
        const pointMs = intervalRoundedNow - (points - 2 - i) * config.stepMs;
        const pointDate = new Date(pointMs);
        
        // Use the actual dynamic price for that date
        let val = getDynamicPrice(selectedKey, type, pointDate);
        
        // Stable hourly noise for 1d
        if (selectedTimeframe === "1d") {
          let hourlySeed = 0;
          for (let s = 0; s < selectedKey.length; s++) hourlySeed = (hourlySeed << 5) - hourlySeed + selectedKey.charCodeAt(s);
          const hourStamp = Math.floor(pointDate.getTime() / (1000 * 60 * 60));
          const noise = (Math.sin(hourlySeed + hourStamp) * 10000) % 1;
          val = Math.round(val * (1 + noise * 0.05));
        }

        // Apply microscopic "historical breathing" jitter
        const histJitter = (Math.sin(realTimeSeed + i) * 1000) % 1;
        data[i] = val * (1 + (histJitter * 0.001)); // 0.1% breathing
      }
    }

    const finalLabels: string[] = [];
    for (let i = 0; i < points; i++) {
        const pointMs = i === points - 1 ? nowMs : intervalRoundedNow - (points - 2 - i) * config.stepMs;
        const pointDate = new Date(pointMs);

        if (i % labelInterval === 0 || i === points - 1) {
            if (config.labelType === "hour") finalLabels.push(`${String(pointDate.getHours()).padStart(2, '0')}:00`);
            else if (config.labelType === "day") finalLabels.push(["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"][pointDate.getDay()]);
            else if (config.labelType === "date") finalLabels.push(`${pointDate.getDate()}/${pointDate.getMonth() + 1}`);
            else if (config.labelType === "month") finalLabels.push(["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"][pointDate.getMonth()]);
            else if (config.labelType === "year") finalLabels.push(String(pointDate.getFullYear()));
        }
    }

    // Apply simple smoothing (3-point moving average)
    const smoothedData = data.map((val, i) => {
      if (i === 0 || i === data.length - 1) return val;
      return (data[i-1] + val + data[i+1]) / 3;
    });

    // Create SVG path
    const width = 800;
    const height = 200;
    const step = width / (points - 1);
    const min = Math.min(...smoothedData);
    const max = Math.max(...smoothedData);
    const range = (max - min) || 1;
    
    const pathPoints = smoothedData.map((val, i) => ({
      x: i * step,
      y: height - ((val - min) / range) * (height * 0.8) - (height * 0.1)
    }));
    
    return {
      line: `M ${pathPoints[0].x} ${pathPoints[0].y} ${pathPoints.map(p => `L ${p.x} ${p.y}`).join(' ')}`,
      area: `M 0 200 L ${pathPoints[0].x} ${pathPoints[0].y} ${pathPoints.map(p => `L ${p.x} ${p.y}`).join(' ')} L 800 200 Z`,
      points: pathPoints.map((p, i) => ({ ...p, val: smoothedData[i] })),
      labels: finalLabels
    };
  }, [selectedKey, selectedTimeframe, basePrice, type, tick]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 800;
    
    const step = 800 / (chartData.points.length - 1);
    const index = Math.max(0, Math.min(chartData.points.length - 1, Math.round(x / step)));
    const point = chartData.points[index];
    
    setHoverData({ ...point, index });
  };

  return (
    <div className="h-[320px] w-full bg-zinc-950/50 border border-zinc-900 rounded-[3rem] relative overflow-hidden group shadow-inner flex flex-col">
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 opacity-10 pointer-events-none">
        {[1, 2, 3, 4].map(i => <div key={i} className="h-[1px] w-full bg-zinc-800/50"></div>)}
      </div>

      <svg 
        className="flex-1 w-full overflow-visible cursor-crosshair relative z-10" 
        preserveAspectRatio="none" 
        viewBox="0 0 800 200"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoverData(null)}
      >
        <defs>
          <linearGradient id={`chartFill-${type}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.2" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={chartData.area} fill={`url(#chartFill-${type})`} className="animate-in fade-in duration-1000" />
        <path d={chartData.line} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 15px ${color}80)` }} />
        
        {/* Static Points */}
        {chartData.points.map((p: any, i: number) => (
          <circle 
            key={i} cx={p.x} cy={p.y} r="2" 
            fill={color} opacity="0.3" 
          />
        ))}

        {/* Hover Effects */}
        {hoverData && (
          <g>
            {/* Vertical Line */}
            <line 
              x1={hoverData.x} y1="0" x2={hoverData.x} y2="200" 
              stroke={color} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" 
            />
            {/* Hover Outer Glow */}
            <circle 
              cx={hoverData.x} cy={hoverData.y} r="12" fill={color} 
              className="animate-pulse opacity-20" 
            />
            {/* Hover Circle */}
            <circle 
              cx={hoverData.x} cy={hoverData.y} r="6" fill={color} 
              stroke="white" strokeWidth="2"
              style={{ filter: `drop-shadow(0 0 15px ${color})` }}
            />
            {/* Price Marker (inside SVG for better alignment) */}
            <g transform={`translate(${hoverData.x}, ${hoverData.y + (hoverData.y < 40 ? 40 : -25)})`}>
               <rect 
                  x={hoverData.index > (chartData.points.length / 2) ? -100 : -5} 
                  y="-22" width="105" height="24" rx="12" 
                  fill={color} fillOpacity="0.95" 
                  className="drop-shadow-lg"
               />
               <text 
                  x={hoverData.index > (chartData.points.length / 2) ? -90 : 5} 
                  y="-5" fill="white" 
                  className="text-[14px] font-black italic tracking-tighter"
                  style={{ pointerEvents: 'none' }}
               >
                  {Math.round(hoverData.val).toLocaleString('id-ID')}
               </text>
            </g>
          </g>
        )}

        {/* Static Animated Glow Point (only show if not hovering) */}
        {!hoverData && (
          <circle cx="800" cy="100" r="6" fill={color} className="animate-pulse" style={{ filter: `drop-shadow(0 0 20px ${color})` }}>
             <animate attributeName="cy" values="90;110;90" dur="3s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>

      {/* Time Labels Indicator */}
      <div className="flex items-center justify-between px-8 pb-8 relative z-10 border-t border-zinc-900/30 bg-zinc-900/10">
        {chartData.labels.map((label: string, i: number) => (
          <div key={i} className="flex flex-col items-center gap-2">
             <div className="h-2 w-[1.5px]" style={{ backgroundColor: `${color}40` }}></div>
             <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
