import React, { useMemo, useState, useEffect } from "react";
import { getStoredGameDate } from "@/app/game/components/1_navbar/5_navigasi_waktu/gameTime";
import { getDynamicPrice } from "./tradeData";
import { Maximize2, Minimize2, LineChart, BarChart3, X } from "lucide-react";

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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chartMode, setChartMode] = useState<'line' | 'bar'>('line');

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Generate consistent chart data matching getDynamicPrice with fixed interval alignment
  const chartData = useMemo(() => {
    // interval config: how many points, what's each step in ms, and what's the label step
    // interval config: how many points, what's each step in ms, and what's the label step
    const intervalConfigs: Record<string, { points: number, stepMs: number, labelType: string, fixedWindow?: boolean }> = {
      "1d": { points: 25, stepMs: 60 * 60 * 1000, labelType: "hour", fixedWindow: true }, // 00:00 - 24:00
      "1w": { points: 7, stepMs: 24 * 60 * 60 * 1000, labelType: "day", fixedWindow: true }, // Mon - Sun
      "1m": { points: 30, stepMs: 24 * 60 * 60 * 1000, labelType: "date", fixedWindow: true },
      "3m": { points: 46, stepMs: 2 * 24 * 60 * 60 * 1000, labelType: "month" },
      "6m": { points: 61, stepMs: 3 * 24 * 60 * 60 * 1000, labelType: "month" },
      "1y": { points: 53, stepMs: 7 * 24 * 60 * 60 * 1000, labelType: "month" },
      "5y": { points: 61, stepMs: 30 * 24 * 60 * 60 * 1000, labelType: "year" }
    };
    
    const config = intervalConfigs[selectedTimeframe] || intervalConfigs["1w"];
    const points = config.points;
    const data: (number | null)[] = new Array(points);
    const currentDate = getStoredGameDate();
    const nowMs = currentDate.getTime();

    // Determine the baseline Start Time for fixed windows
    let startMs = nowMs - (points - 1) * config.stepMs;
    
    if (config.fixedWindow) {
      if (selectedTimeframe === "1d") {
        const d = new Date(currentDate);
        d.setHours(0, 0, 0, 0);
        startMs = d.getTime();
      } else if (selectedTimeframe === "1w") {
        const d = new Date(currentDate);
        const day = d.getDay(); // 0 is Sun
        const diff = d.getDate() - (day === 0 ? 6 : day - 1);
        d.setDate(diff);
        d.setHours(0, 0, 0, 0);
        startMs = d.getTime();
      } else if (selectedTimeframe === "1m") {
        const d = new Date(currentDate);
        d.setDate(1);
        d.setHours(0, 0, 0, 0);
        startMs = d.getTime();
      }
    }

    const intervalRoundedNow = Math.floor(nowMs / config.stepMs) * config.stepMs;
    const realTimeSeed = Math.floor(Date.now() / 1000);
    
    for (let i = 0; i < points; i++) {
      const pointMs = startMs + (i * config.stepMs);
      
      // Using dynamic price for the entire range (past and future) to avoid "flat" segments
      const pointDate = new Date(pointMs);
      let val = getDynamicPrice(selectedKey, type, pointDate);
      
      // Stable noise logic
      let noiseSeed = 0;
      for (let s = 0; s < selectedKey.length; s++) noiseSeed = (noiseSeed << 5) - noiseSeed + selectedKey.charCodeAt(s);
      const timeUnit = Math.floor(pointDate.getTime() / config.stepMs);
      const noise = (Math.sin(noiseSeed + timeUnit) * 10000) % 1;
      val = val * (1 + noise * 0.05);

      // Apply microscopic jitter for "life"
      const liveJitter = (Math.sin(realTimeSeed + i) * 1000) % 1;
      data[i] = val * (1 + (liveJitter * 0.001));
    }

    const finalLabels: string[] = [];
    const labelIndices: number[] = [];

    for (let i = 0; i < points; i++) {
      const pointMs = startMs + (i * config.stepMs);
      const pointDate = new Date(pointMs);
      
      let shouldAddLabel = false;
      if (selectedTimeframe === "1d") {
        if (i % 4 === 0) shouldAddLabel = true;
      } else if (selectedTimeframe === "1w") {
        shouldAddLabel = true;
      } else if (selectedTimeframe === "1m") {
        if (i % 5 === 0 || i === points - 1) shouldAddLabel = true;
      } else {
        const labelInterval = Math.max(1, Math.floor(points / 6));
        if (i % labelInterval === 0 || i === points - 1) shouldAddLabel = true;
      }

      if (shouldAddLabel) {
        labelIndices.push(i);
        if (config.labelType === "hour") finalLabels.push(`${String(pointDate.getHours()).padStart(2, '0')}:00`);
        else if (config.labelType === "day") {
          const days = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];
          finalLabels.push(days[pointDate.getDay()]);
        }
        else if (config.labelType === "date") finalLabels.push(`${pointDate.getDate()}`);
        else if (config.labelType === "month") finalLabels.push(["JAN", "FEB", "MAR", "APR", "MEI", "JUN", "JUL", "AGU", "SEP", "OKT", "NOV", "DES"][pointDate.getMonth()]);
        else if (config.labelType === "year") finalLabels.push(String(pointDate.getFullYear()));
      }
    }

    // Apply simple smoothing (3-point moving average, ignore nulls)
    const smoothedData = data.map((val, i) => {
      if (val === null) return null;
      const prev = data[i-1];
      const next = data[i+1];
      if (prev === null || next === null || prev === undefined || next === undefined) return val;
      return (prev + val + next) / 3;
    });

    const validPoints = smoothedData
      .map((val, i) => ({ val, index: i }))
      .filter(p => p.val !== null) as { val: number, index: number }[];

    if (validPoints.length === 0) return { line: "", area: "", points: [], labels: finalLabels, labelIndices };

    const width = 800;
    const height = 200;
    const horizontalPadding = 40; // Prevent edges from being cut off
    const step = (width - 2 * horizontalPadding) / (points - 1);
    
    // Tighter dynamic scaling to make fluctuations "pop" more
    const visibleVals = validPoints.map(p => p.val);
    const actualMin = Math.min(...visibleVals);
    const actualMax = Math.max(...visibleVals);
    const padding = (actualMax - actualMin) * 0.1 || (basePrice * 0.05); // 10% vertical padding or 5% of base
    const min = actualMin - padding;
    const max = actualMax + padding;
    const range = (max - min) || 1;
    
    const pathPoints = smoothedData.map((val, i) => {
      if (val === null) return null;
      return {
        x: horizontalPadding + i * step,
        y: height - ((val - min) / range) * (height * 0.8) - (height * 0.1),
        val: val,
        index: i
      };
    });

    const definedPoints = pathPoints.filter(p => p !== null) as { x: number, y: number, val: number, index: number }[];
    
    let linePath = "";
    let areaPath = "";
    if (definedPoints.length > 0) {
      linePath = `M ${definedPoints[0].x} ${definedPoints[0].y} ${definedPoints.map(p => `L ${p.x} ${p.y}`).join(' ')}`;
      areaPath = `M ${definedPoints[0].x} 200 L ${definedPoints[0].x} ${definedPoints[0].y} ${definedPoints.map(p => `L ${p.x} ${p.y}`).join(' ')} L ${definedPoints[definedPoints.length-1].x} 200 Z`;
    }
    
    return {
      line: linePath,
      area: areaPath,
      points: definedPoints,
      labels: finalLabels,
      labelIndices: labelIndices,
      totalPoints: points,
      horizontalPadding: horizontalPadding
    };
  }, [selectedKey, selectedTimeframe, basePrice, type, tick]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>, isFull: boolean = false) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const viewBoxWidth = isFull ? 1200 : 800;
    const x = ((e.clientX - rect.left) / rect.width) * viewBoxWidth;
    
    const step = viewBoxWidth / (chartData.points.length - 1);
    const index = Math.max(0, Math.min(chartData.points.length - 1, Math.round(x / step)));
    const point = chartData.points[index];
    
    setHoverData({ ...point, index });
  };

  const renderChartContent = (isFull: boolean = false) => {
    const viewBoxWidth = isFull ? 1200 : 800;
    const viewBoxHeight = isFull ? 400 : 200;
    const colorFinal = color;

    // Adjust paths for larger viewBox if needed, but the current logic is based on 800/200.
    // For simplicity, we can keep the 800/200 viewBox but scale the container.
    // However, for "Full Screen", we might want more detail.
    // Let's stick to 800/200 and let SVG scale it.

    return (
      <div className={`relative flex flex-col w-full h-full ${isFull ? 'p-12' : ''}`}>
        <div className="absolute top-6 right-6 z-20 flex items-center gap-2">
           <div className="flex items-center gap-1 bg-zinc-900/50 p-1 rounded-xl border border-zinc-800">
              <button 
                 onClick={() => setChartMode('line')}
                 className={`p-1.5 rounded-lg transition-all cursor-pointer ${chartMode === 'line' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                 <LineChart size={14} />
              </button>
              <button 
                 onClick={() => setChartMode('bar')}
                 className={`p-1.5 rounded-lg transition-all cursor-pointer ${chartMode === 'bar' ? 'bg-blue-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
              >
                 <BarChart3 size={14} />
              </button>
           </div>
           
           {!isFull && (
             <button 
               onClick={() => setIsFullscreen(true)}
               className="p-2 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-500 hover:text-white rounded-xl border border-zinc-800 transition-all cursor-pointer group/fs"
             >
               <Maximize2 size={16} className="group-hover/fs:scale-110 transition-transform" />
             </button>
           )}
        </div>

        {/* Grid Lines */}
        <div className={`absolute inset-0 flex flex-col justify-between ${isFull ? 'p-20' : 'p-8'} opacity-10 pointer-events-none`}>
          {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="h-[1px] w-full bg-zinc-800/50"></div>)}
        </div>

        <svg 
          className="flex-1 w-full overflow-visible cursor-crosshair relative z-10" 
          preserveAspectRatio="xMidYMid meet" 
          viewBox="0 0 800 200"
          onMouseMove={(e) => handleMouseMove(e, false)}
          onMouseLeave={() => setHoverData(null)}
        >
          <defs>
            <linearGradient id={`chartFill-${type}-${isFull ? 'full' : 'mini'}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={colorFinal} stopOpacity="0.2" />
              <stop offset="100%" stopColor={colorFinal} stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {chartMode === 'line' ? (
            <>
              <path d={chartData.area} fill={`url(#chartFill-${type}-${isFull ? 'full' : 'mini'})`} className="animate-in fade-in duration-1000" />
              <path d={chartData.line} fill="none" stroke={colorFinal} strokeWidth={isFull ? "3" : "4"} strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 15px ${colorFinal}80)` }} />
            </>
          ) : (
            <g>
              {chartData.points.map((p: any, i: number) => {
                const height = 200;
                // Use a wider min/max for bar mode to prevent overflow
                const minPrice = Math.min(basePrice * 0.8, ...chartData.points.map((dp: any) => dp.val));
                const maxPrice = Math.max(basePrice * 1.2, ...chartData.points.map((dp: any) => dp.val));
                const range = (maxPrice - minPrice) || 1;
                const getPY = (val: number) => height - ((val - minPrice) / range) * (height * 0.8) - (height * 0.1);

                // Simulated OHLC logic
                const closeVal = p.val;
                const prevPoint = chartData.points.find((dp: any) => dp.index === p.index - 1);
                const openVal = prevPoint ? prevPoint.val : p.val;
                
                // Deterministic jitter for High/Low based on point index and key
                const jitterSeed = (p.index * 1337) ^ (selectedKey.length * 42);
                const jitterHigh = (Math.abs(Math.sin(jitterSeed)) * (maxPrice - minPrice) * 0.05);
                const jitterLow = (Math.abs(Math.cos(jitterSeed)) * (maxPrice - minPrice) * 0.05);
                
                const highVal = Math.max(openVal, closeVal) + jitterHigh;
                const lowVal = Math.min(openVal, closeVal) - jitterLow;

                const yOpen = getPY(openVal);
                const yClose = getPY(closeVal);
                const yHigh = getPY(highVal);
                const yLow = getPY(lowVal);

                const isUp = closeVal >= openVal;
                const candleColor = isUp ? "#22c55e" : "#ef4444";
                const step = 800 / ((chartData.totalPoints || 1) - 1);
                const candleWidth = step * 0.6;
                
                return (
                  <g key={p.index} className="animate-in fade-in duration-500">
                    {/* Wick */}
                    <line 
                        x1={p.x} y1={yHigh} x2={p.x} y2={yLow} 
                        stroke={candleColor} strokeWidth="1.5"
                    />
                    {/* Body */}
                    <rect 
                        x={p.x - candleWidth / 2} 
                        y={Math.min(yOpen, yClose)} 
                        width={candleWidth} 
                        height={Math.max(1, Math.abs(yOpen - yClose))} 
                        fill={candleColor} 
                        rx={1}
                        style={{ filter: `drop-shadow(0 0 8px ${candleColor}40)` }}
                    />
                  </g>
                );
              })}
            </g>
          )}
          
          {/* Static Points (Only for line mode or very subtle) */}
          {chartMode === 'line' && chartData.points.map((p: any, i: number) => (
            <circle 
              key={i} cx={p.x} cy={p.y} r={isFull ? "1.5" : "2"} 
              fill={colorFinal} opacity="0.3" 
            />
          ))}

          {/* Hover Effects */}
          {hoverData && (
            <g>
              <line 
                x1={hoverData.x} y1="0" x2={hoverData.x} y2="200" 
                stroke={colorFinal} strokeWidth="1" strokeDasharray="4 4" opacity="0.5" 
              />
              <circle cx={hoverData.x} cy={hoverData.y} r={isFull ? "16" : "12"} fill={colorFinal} className="animate-pulse opacity-20" />
              <circle cx={hoverData.x} cy={hoverData.y} r={isFull ? "8" : "6"} fill={colorFinal} stroke="white" strokeWidth="2" style={{ filter: `drop-shadow(0 0 15px ${colorFinal})` }} />
              
              <g transform={`translate(${hoverData.x}, ${hoverData.y + (hoverData.y < 40 ? 40 : -25)})`}>
                 <rect 
                    x={hoverData.index > (chartData.points.length / 2) ? -120 : -5} 
                    y="-22" width="125" height="24" rx="12" 
                    fill={colorFinal} fillOpacity="0.95" 
                    className="drop-shadow-lg"
                 />
                 <text 
                    x={hoverData.index > (chartData.points.length / 2) ? -110 : 5} 
                    y="-5" fill="white" 
                    className={`${isFull ? 'text-[12px]' : 'text-[14px]'} font-black italic tracking-tighter`}
                    style={{ pointerEvents: 'none' }}
                 >
                    {Math.round(hoverData.val).toLocaleString('id-ID')}
                 </text>
              </g>
            </g>
          )}

          {!hoverData && (
            <circle cx="800" cy="100" r="6" fill={colorFinal} className="animate-pulse" style={{ filter: `drop-shadow(0 0 20px ${colorFinal})` }}>
               <animate attributeName="cy" values="90;110;90" dur="3s" repeatCount="indefinite" />
            </circle>
          )}
        </svg>

        {/* Time Labels Indicator */}
        <div 
          className="relative z-10 border-t border-zinc-900/30 bg-zinc-900/10"
          style={{ paddingLeft: '5%', paddingRight: '5%' }}
        >
          <div className="flex items-center justify-between">
            {chartData.labels.map((label: string, i: number) => (
              <div key={i} className="flex flex-col items-center gap-2">
                 <div className="h-2 w-[1.5px]" style={{ backgroundColor: `${colorFinal}40` }}></div>
                 <span className={`${isFull ? 'text-[12px]' : 'text-[10px]'} font-black text-zinc-500 uppercase tracking-[0.2em]`}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="h-[320px] w-full bg-zinc-950/50 border border-zinc-900 rounded-[3rem] relative overflow-hidden group shadow-inner flex flex-col">
        {renderChartContent(false)}
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 animate-in fade-in zoom-in-95 duration-300">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setIsFullscreen(false)}></div>
          
          <div className="relative w-full max-w-7xl h-[70vh] bg-zinc-950 border border-zinc-800 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-8 border-b border-zinc-900">
               <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-widest italic leading-none">Analisis Harga Detail</h3>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-2">Visualisasi Tren Pasar Komoditas {selectedKey.replace(/_/g, ' ')}</p>
               </div>
               <button 
                  onClick={() => setIsFullscreen(false)}
                  className="p-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white rounded-2xl border border-zinc-800 transition-all cursor-pointer active:scale-95"
               >
                  <Minimize2 size={24} />
               </button>
            </div>
            
            <div className="flex-1 relative">
               {renderChartContent(true)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
