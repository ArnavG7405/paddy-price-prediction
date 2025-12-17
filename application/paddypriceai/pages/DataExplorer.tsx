import React, { useState, useMemo } from 'react';
import { parseCSV } from '../utils';
import { StateName } from '../types';
import { 
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  BarChart, Bar, ScatterChart, Scatter, Cell, AreaChart, Area, ComposedChart
} from 'recharts';
import { Calculator, TrendingUp, BarChart2, Sigma, Maximize, Minimize } from 'lucide-react';

const DataExplorer: React.FC = () => {
  const allData = useMemo(() => parseCSV(), []);
  const [selectedState, setSelectedState] = useState<string>('All');

  const states = Object.values(StateName);

  const filteredData = useMemo(() => {
    if (selectedState === 'All') return allData;
    return allData.filter(d => d.State === selectedState);
  }, [allData, selectedState]);

  // --- Statistics Calculation ---
  const stats = useMemo(() => {
    const prices = filteredData.map(d => d.Prices).filter(p => p > 0);
    if (prices.length === 0) return null;

    const sum = prices.reduce((a, b) => a + b, 0);
    const mean = sum / prices.length;
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    
    // Standard Deviation
    const variance = prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / prices.length;
    const stdDev = Math.sqrt(variance);

    return { mean, min, max, stdDev, count: prices.length };
  }, [filteredData]);

  // --- Chart Data Preparation ---

  // 1. Time Series Data
  const timeSeriesData = useMemo(() => {
     if (selectedState !== 'All') {
       return filteredData.map(d => ({
         date: d.Date,
         price: d.Prices,
         production: d.Production,
         parsedDate: d.parsedDate
       }));
     }
     // For 'All', we can't easily show a single line. We handle this in the render logic.
     return [];
  }, [filteredData, selectedState]);

  // 2. Histogram Data (Price Distribution)
  const histogramData = useMemo(() => {
    if (!stats) return [];
    const prices = filteredData.map(d => d.Prices).filter(p => p > 0);
    const binCount = 10;
    const binSize = (stats.max - stats.min) / binCount;
    
    const bins = Array.from({ length: binCount }, (_, i) => ({
      range: `${(stats.min + i * binSize).toFixed(0)} - ${(stats.min + (i + 1) * binSize).toFixed(0)}`,
      min: stats.min + i * binSize,
      max: stats.min + (i + 1) * binSize,
      count: 0
    }));

    prices.forEach(p => {
      const binIndex = Math.min(
        Math.floor((p - stats.min) / binSize),
        binCount - 1
      );
      if (bins[binIndex]) bins[binIndex].count++;
    });

    return bins;
  }, [filteredData, stats]);

  // 3. Scatter Data (Price vs Production)
  const scatterData = useMemo(() => {
    return filteredData
      .filter(d => d.Prices > 0 && d.Production > 0)
      .map(d => ({
        x: d.Production,
        y: d.Prices,
        state: d.State
      }));
  }, [filteredData]);

  // 4. Yearly Trends
  const yearlyData = useMemo(() => {
    const yearlyMap = new Map<number, { sum: number; count: number; min: number; max: number }>();

    filteredData.forEach(d => {
      if (d.parsedDate && d.Prices > 0) {
        const year = d.parsedDate.getFullYear();
        if (!yearlyMap.has(year)) {
          yearlyMap.set(year, { sum: 0, count: 0, min: Infinity, max: -Infinity });
        }
        const entry = yearlyMap.get(year)!;
        entry.sum += d.Prices;
        entry.count++;
        entry.min = Math.min(entry.min, d.Prices);
        entry.max = Math.max(entry.max, d.Prices);
      }
    });

    return Array.from(yearlyMap.entries())
      .map(([year, data]) => ({
        year: year.toString(),
        avg: data.sum / data.count,
        min: data.min,
        max: data.max
      }))
      .sort((a, b) => Number(a.year) - Number(b.year));
  }, [filteredData]);

  // 5. Comparative State Data (Only for 'All')
  const stateComparisonData = useMemo(() => {
    if (selectedState !== 'All') return [];
    const stateMap = new Map<string, { sum: number; count: number }>();
    
    allData.forEach(d => {
      if (d.Prices > 0) {
        if (!stateMap.has(d.State)) stateMap.set(d.State, { sum: 0, count: 0 });
        stateMap.get(d.State)!.sum += d.Prices;
        stateMap.get(d.State)!.count++;
      }
    });

    return Array.from(stateMap.entries()).map(([state, data]) => ({
      name: state,
      avgPrice: data.sum / data.count
    }));
  }, [allData, selectedState]);


  const COLORS = ['#16a34a', '#2563eb', '#9333ea', '#f59e0b', '#ef4444'];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Exploratory Data Analysis (EDA)</h2>
          <p className="text-gray-600">Deep dive into statistical properties, distributions, and correlations.</p>
        </div>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 min-w-[200px]"
        >
          <option value="All">All States (Comparative View)</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Statistical Summary Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Mean Price</p>
              <p className="text-xl font-bold text-gray-900">₹{stats.mean.toFixed(2)}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
              <Sigma className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Std Deviation</p>
              <p className="text-xl font-bold text-gray-900">₹{stats.stdDev.toFixed(2)}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
             <div className="p-3 bg-red-50 text-red-600 rounded-lg">
              <Maximize className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Max Price</p>
              <p className="text-xl font-bold text-gray-900">₹{stats.max.toFixed(0)}</p>
            </div>
          </div>
           <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
             <div className="p-3 bg-green-50 text-green-600 rounded-lg">
              <Minimize className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase">Min Price</p>
              <p className="text-xl font-bold text-gray-900">₹{stats.min.toFixed(0)}</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1: Time Series or State Comparison */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-semibold flex items-center gap-2">
               <TrendingUp className="w-5 h-5 text-green-600" />
               {selectedState === 'All' ? 'Average Price by State' : 'Historical Price Trend'}
             </h3>
           </div>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               {selectedState === 'All' ? (
                 <BarChart data={stateComparisonData} layout="vertical" margin={{ left: 20 }}>
                   <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                   <XAxis type="number" hide />
                   <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                   <Tooltip cursor={{fill: '#f3f4f6'}} formatter={(val: number) => `₹${val.toFixed(2)}`} />
                   <Bar dataKey="avgPrice" fill="#3b82f6" radius={[0, 4, 4, 0]}>
                      {stateComparisonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                   </Bar>
                 </BarChart>
               ) : (
                 <AreaChart data={timeSeriesData}>
                   <defs>
                     <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="5%" stopColor="#16a34a" stopOpacity={0.1}/>
                       <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                     </linearGradient>
                   </defs>
                   <CartesianGrid strokeDasharray="3 3" vertical={false} />
                   <XAxis dataKey="date" hide />
                   <YAxis domain={['auto', 'auto']} />
                   <Tooltip />
                   <Area type="monotone" dataKey="price" stroke="#16a34a" fillOpacity={1} fill="url(#colorPrice)" name="Price" />
                 </AreaChart>
               )}
             </ResponsiveContainer>
           </div>
        </div>

        {/* Chart 2: Price Distribution (Histogram) */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-semibold flex items-center gap-2">
               <BarChart2 className="w-5 h-5 text-purple-600" />
               Price Distribution
             </h3>
           </div>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={histogramData} barCategoryGap={1}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis dataKey="range" fontSize={10} interval={0} angle={-45} textAnchor="end" height={60} />
                 <YAxis allowDecimals={false} />
                 <Tooltip cursor={{fill: '#f3f4f6'}} />
                 <Bar dataKey="count" fill="#9333ea" radius={[4, 4, 0, 0]} name="Frequency" />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Chart 3: Price vs Production Scatter */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-semibold flex items-center gap-2">
               <ScatterChartIcon className="w-5 h-5 text-orange-600" />
               Price vs. Production Correlation
             </h3>
           </div>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                 <CartesianGrid />
                 <XAxis type="number" dataKey="x" name="Production" unit=" tonnes" label={{ value: 'Production', position: 'insideBottom', offset: -10 }} />
                 <YAxis type="number" dataKey="y" name="Price" unit=" INR" label={{ value: 'Price', angle: -90, position: 'insideLeft' }} />
                 <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                 <Scatter name="Data Points" data={scatterData} fill="#f97316">
                    {scatterData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={selectedState === 'All' ? COLORS[index % COLORS.length] : '#f97316'} />
                    ))}
                 </Scatter>
               </ScatterChart>
             </ResponsiveContainer>
           </div>
        </div>

        {/* Chart 4: Yearly Trends */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
           <div className="flex items-center justify-between mb-6">
             <h3 className="text-lg font-semibold flex items-center gap-2">
               <TrendingUp className="w-5 h-5 text-blue-600" />
               Yearly Price Trends (Avg with Min/Max)
             </h3>
           </div>
           <div className="h-[300px] w-full">
             <ResponsiveContainer width="100%" height="100%">
               <ComposedChart data={yearlyData}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
                 <XAxis dataKey="year" />
                 <YAxis />
                 <Tooltip />
                 <Legend />
                 <Bar dataKey="avg" fill="#3b82f6" barSize={20} radius={[4, 4, 0, 0]} name="Avg Price" />
                 <Line type="monotone" dataKey="max" stroke="#ef4444" strokeWidth={2} dot={{r:3}} name="Max Price" />
                 <Line type="monotone" dataKey="min" stroke="#22c55e" strokeWidth={2} dot={{r:3}} name="Min Price" />
               </ComposedChart>
             </ResponsiveContainer>
           </div>
        </div>

      </div>

      {/* Raw Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="font-semibold text-gray-700">Raw Dataset View</h3>
        </div>
        <div className="overflow-x-auto max-h-[400px]">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0 z-10">
              <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50">Date</th>
                <th scope="col" className="px-6 py-3 bg-gray-50">State</th>
                <th scope="col" className="px-6 py-3 text-right bg-gray-50">Price (INR)</th>
                <th scope="col" className="px-6 py-3 text-right bg-gray-50">Production (Tonnes)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.Date}</td>
                  <td className="px-6 py-4">{row.State}</td>
                  <td className="px-6 py-4 text-right font-mono">{row.Prices > 0 ? row.Prices : '-'}</td>
                  <td className="px-6 py-4 text-right font-mono">{row.Production > 0 ? row.Production : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function ScatterChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="18.5" cy="5.5" r=".5" fill="currentColor" />
      <circle cx="11.5" cy="11.5" r=".5" fill="currentColor" />
      <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="14.5" r=".5" fill="currentColor" />
      <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    </svg>
  )
}

export default DataExplorer;
