import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, ComposedChart, Line } from 'recharts';
import { StateName } from '../types';
import { STAKEHOLDER_INSIGHTS } from '../constants';
import { TrendingUp, TrendingDown, Minus, DollarSign, Activity } from 'lucide-react';

const Evaluation: React.FC = () => {
  // Transform string data from constants into numeric format for charts
  const evaluationData = useMemo(() => {
    return Object.entries(STAKEHOLDER_INSIGHTS).map(([state, data]) => {
      const current = parseFloat(data.currentPrice.replace(/[₹,]/g, ''));
      const forecast = parseFloat(data.avgForecast.replace(/[₹,]/g, ''));
      const trendVal = parseFloat(data.trend.replace('%', ''));
      
      // Parse range for min/max
      const [minStr, maxStr] = data.range.split(' - ');
      const min = parseFloat(minStr.replace(/[₹,]/g, ''));
      const max = parseFloat(maxStr.replace(/[₹,]/g, ''));

      return {
        name: state,
        current,
        forecast,
        min,
        max,
        trend: trendVal,
        trendLabel: data.trend
      };
    });
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Price Evaluation & Projection</h2>
        <p className="text-gray-600">Comparative analysis of current market rates versus 36-month forecasted averages.</p>
      </div>

      {/* Main Comparison Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <Activity className="w-5 h-5 text-blue-600" />
          Current vs. Forecasted Average Price
        </h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={evaluationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis label={{ value: 'Price (₹/quintal)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                formatter={(value: number) => [`₹${value.toFixed(2)}`, 'Price']}
                cursor={{ fill: '#f9fafb' }}
              />
              <Legend />
              <Bar dataKey="current" fill="#94a3b8" name="Current Price" radius={[4, 4, 0, 0]} barSize={40} />
              <Bar dataKey="forecast" fill="#2563eb" name="Avg Forecast (36m)" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Detailed Metrics Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
          <h3 className="font-semibold text-gray-700">State-wise Price Performance Matrix</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">State</th>
                <th scope="col" className="px-6 py-3 text-right">Current Price</th>
                <th scope="col" className="px-6 py-3 text-right">Avg Forecast</th>
                <th scope="col" className="px-6 py-3 text-center">Forecast Range (Min - Max)</th>
                <th scope="col" className="px-6 py-3 text-center">Growth Trend</th>
              </tr>
            </thead>
            <tbody>
              {evaluationData.map((row, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 text-right font-mono">₹{row.current.toFixed(0)}</td>
                  <td className="px-6 py-4 text-right font-mono font-semibold text-blue-600">₹{row.forecast.toFixed(0)}</td>
                  <td className="px-6 py-4 text-center text-xs">
                    <span className="bg-gray-100 px-2 py-1 rounded text-gray-600 border border-gray-200">
                      ₹{row.min.toFixed(0)} - ₹{row.max.toFixed(0)}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex justify-center">
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${
                      row.trend > 0 
                        ? 'bg-green-50 text-green-700 border-green-200' 
                        : 'bg-red-50 text-red-700 border-red-200'
                    }`}>
                      {row.trend > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {row.trendLabel}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Volatility Analysis */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
         <h3 className="text-lg font-semibold mb-4">Price Volatility Spread</h3>
         <p className="text-gray-600 mb-6 text-sm">
           Visualizing the spread between the lowest and highest forecasted prices. Wider bars indicate higher volatility and market uncertainty.
         </p>
         <div className="h-[300px]">
           <ResponsiveContainer width="100%" height="100%">
             <ComposedChart data={evaluationData} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" domain={['dataMin - 100', 'dataMax + 100']} />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip formatter={(value: number) => `₹${value}`} />
                <Legend />
                {/* We use a stacked bar trick or just a range. 
                    For simplicity in this chart library without specific RangeBar, 
                    we can overlay min and max dots connected by a line, or just comparison bars.
                    Let's use comparison bars for Min and Max.
                */}
                <Bar dataKey="min" fill="#22c55e" name="Min Forecast" barSize={20} stackId="a" />
                {/* This is a visual hack to show range if we had stacked bars, but side-by-side is clearer here */}
                <Bar dataKey="max" fill="#ef4444" name="Max Forecast" barSize={20} />
             </ComposedChart>
           </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};

export default Evaluation;