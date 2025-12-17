import React, { useState } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StateName } from '../types';
import { SEASONAL_METRICS, MONTHLY_PATTERNS } from '../constants';

const Seasonality: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>(StateName.Punjab);

  const metrics = SEASONAL_METRICS[selectedState as keyof typeof SEASONAL_METRICS];
  const monthlyData = MONTHLY_PATTERNS[selectedState as keyof typeof MONTHLY_PATTERNS];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Seasonality Analysis</h2>
        <p className="text-gray-600">Decomposition of time series to identify recurring seasonal patterns and cycles.</p>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <label className="font-medium text-gray-700">Select State:</label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
        >
          {Object.values(StateName).map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <p className="text-gray-500 text-sm font-medium uppercase">Seasonal Strength</p>
          <p className="text-3xl font-bold text-green-600 mt-2">{metrics?.strength ?? 'N/A'}</p>
          <p className="text-xs text-gray-400 mt-1">0 = No Seasonality, 1 = Strong Seasonality</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <p className="text-gray-500 text-sm font-medium uppercase">Peak Month</p>
          <p className="text-3xl font-bold text-orange-600 mt-2">{metrics?.peak ?? 'N/A'}</p>
          <p className="text-xs text-gray-400 mt-1">Month with historically highest prices</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <p className="text-gray-500 text-sm font-medium uppercase">Lowest Month</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">{metrics?.low ?? 'N/A'}</p>
          <p className="text-xs text-gray-400 mt-1">Month with historically lowest prices</p>
        </div>
      </div>

      {/* Monthly Patterns Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-6">Monthly Price Patterns (Mean with Min/Max Range)</h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Price (INR)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                formatter={(value: number, name: string) => [`₹${value.toFixed(2)}`, name]}
              />
              <Legend />
              <Bar dataKey="mean" fill="#16a34a" radius={[4, 4, 0, 0]} name="Mean Price" barSize={40} />
              <Line type="monotone" dataKey="max" stroke="#ef4444" strokeWidth={2} dot={{r: 3}} name="Max Price" />
              <Line type="monotone" dataKey="min" stroke="#3b82f6" strokeWidth={2} dot={{r: 3}} name="Min Price" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-sm text-gray-500 text-center">
          aggregated from historical data (2018-2025) showing average, minimum, and maximum prices per month
        </div>
      </div>

      {/* External Factors Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">External Factors Influencing Prices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span> Seasonal Factors
            </h4>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-2">
              <li>Kharif Season (Jun-Sep): Primary planting season; supply increases post-harvest (Oct-Nov).</li>
              <li>Rabi Season (Oct-Mar): Secondary cultivation; prices often higher due to lower supply.</li>
              <li>Summer Season (Mar-May): Lowest production; prices peak.</li>
              <li>Monsoon (Jun-Sep): Affects crop yields and quality.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Government Policies
            </h4>
             <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-2">
              <li>Minimum Support Price (MSP): Announced annually; affects farmer selling prices.</li>
              <li>Agricultural subsidies and procurement policies.</li>
              <li>Trade restrictions and export/import duties.</li>
              <li>Food security stock management.</li>
            </ul>
          </div>

           <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span> Market Factors
            </h4>
             <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-2">
              <li>Global commodity prices and international rice demand.</li>
              <li>Storage costs and warehouse capacity.</li>
              <li>Transport and logistics costs.</li>
            </ul>
          </div>

           <div>
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span> Environmental Factors
            </h4>
             <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 ml-2">
              <li>Rainfall patterns affecting crop yield.</li>
              <li>Drought or floods causing crop damage.</li>
              <li>Soil quality and fertilizer availability.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seasonality;